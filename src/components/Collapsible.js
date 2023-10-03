import { useState } from "react";
import { Collapse } from "react-collapse";
import { marked } from "marked";
import { UnmountClosed } from "react-collapse";


export function Collapsible({title, body}) {
  const [isOpen, setIsOpen] = useState(false)

    return(
        <div className="collapse-section">
          <button onClick={() => {setIsOpen(!isOpen)}}><h1>{isOpen? `⯆`: `⯈`} { title}</h1></button>
          <UnmountClosed isOpened={isOpen}>
            <div className="install-doc" dangerouslySetInnerHTML={{__html:marked.parse(body)}}/>
          </UnmountClosed>
        </div>
    )
}
