import pic1 from "../files/pictures/Photo53.png"
import { MediaCard } from "../components/MediaCard"

export function Media() {
  return(
    <>
      <h2>v0.4.6</h2>
      <div className="media-container">
        <MediaCard srca={pic1} desc="Patrolling with the Fens PD" />
      </div>
    </>
  )
}
