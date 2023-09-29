import { marked } from "marked"
import DOMPurify from "dompurify"
import { useEffect, useState } from "react"

export function Articles() {
  const [message, setmessage] = useState('')

  useEffect(() => {
    getArticles()

  })

  const getArticles = async () => {
    const response = await fetch("https://falloutanomaly-server-ample-samples.vercel.app/files", {method: "GET"}).then((res) => res.blob())
    console.log(response)
    const text = await response.text()
    setmessage(text)
  }


  return(
    <>
      <h1>Articles</h1>
      <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(marked.parse(message))}}/>
    </>
  )
}
