import { marked } from "marked"
import DOMPurify from "dompurify"
import { useEffect, useState } from "react"
import "./styles/articles.css"

export function Articles() {

  const [message, setmessage] = useState(' ')

  useEffect(() => {
    getArticles()
  })

  const getArticles = async () => {
    let response
    try {
      response = await fetch("https://falloutanomaly-server-ample-samples.vercel.app/files", {method: "GET"}).then((res) => res.blob())
      const text = await response.text()
      console.log(text)
      setmessage(text)
    } catch (error) {
      setmessage(null)
      console.log(error)
    }
  }




  return(
    <>
      <h1>Articles</h1>
      { message? <div id="md-text" dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(marked.parse(message))}}/> : <p>I'm sorry this article can't be rendered, please contact the FA Team for asssistance.</p> }
    </>
  )
}
