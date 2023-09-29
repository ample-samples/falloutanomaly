import { marked } from "marked"
import DOMPurify from "dompurify"
import { useEffect, useState } from "react"
import "./styles/articles.css"

export function Articles() {

  function extractContent(html) {
    return new DOMParser()
      .parseFromString(html, "text/html")
      .documentElement.textContent;
  }
  const [message, setmessage] = useState('')

  useEffect(() => {
    getArticles()
  })

  const getArticles = async () => {
    const response = await fetch("https://falloutanomaly-server-ample-samples.vercel.app/files", {method: "GET"}).then((res) => res.blob())
    const text = await response.text()
    setmessage(text)
  }




  return(
    <>
      <h1>Articles</h1>
      <div id="md-text" dangerouslySetInnerHTML={{__html: marked.parse(DOMPurify.sanitize(marked.parse(message)))}}/>
    </>
  )
}
