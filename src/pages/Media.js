import pic1 from "../files/pictures/Photo53.png"
import pettingDog from "../files/pictures/petting-dog.webp"
import { MediaCard } from "../components/MediaCard"
import "./styles/media.css"

export function Media() {
  return(
    <>
      <h2>v0.4.6</h2>
      <div className="media-container">
        <MediaCard src={pic1} desc="Patrolling around Boston with Fens PD" />
        <MediaCard src={pettingDog} desc="Good boi!" />
      </div>
    </>
  )
}
