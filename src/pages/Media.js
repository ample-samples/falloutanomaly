import pic1 from "../files/pictures/Photo53.png"
import pic2 from "../files/pictures/Photo68.png"
import pettingDog from "../files/pictures/petting-dog.webp"
import { MediaCard } from "../components/MediaCard"
import "./styles/media.css"

export function Media() {
  return(
    <>
      <h2>v0.4.6</h2>
      <div className="media-container">
        <iframe style={{marginBottom: "3.25rem"}} width="1000" height="562" src="https://www.youtube.com/embed/JDd0mq4U9zc?si=4UnP1DGgHMkWXo0c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <MediaCard src={pic2} desc="Early morning hunting" />
        <MediaCard src={pic1} desc="Patrolling around Boston with Fens PD" />
        <MediaCard src={pettingDog} desc="Good boi!" />
      </div>
    </>
  )
}
