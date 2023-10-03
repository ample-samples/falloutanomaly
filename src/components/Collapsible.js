import { useState } from "react";
import { Collapse } from "react-collapse";
import { marked } from "marked";


export function Collapsible({title, body}) {
  const [isOpen, setIsOpen] = useState()

    return(
        <div className="collapse-section">
          <button onClick={() => {setIsOpen(!isOpen)}}><h1>{isOpen? `⮟`: `⮞`} { title}</h1></button>
          <Collapse isOpened={isOpen}>
            <div className="install-doc" id="md-text" dangerouslySetInnerHTML={{__html:marked.parse(body)}}/>
          </Collapse>
        </div>
    )
}
