import crolivia from "../files/pictures/Devs/crolivia.webp"
import john from "../files/pictures/Devs/john.webp"
import lordcommander022 from "../files/pictures/Devs/lordcommander022.webp"
import nomad from "../files/pictures/Devs/nomad.webp"
import quikcarnage from "../files/pictures/Devs/quik-carnage.webp"
import toddg from "../files/pictures/Devs/toddg.png"
import "./styles/about.css"

export function About() {
  return(
    <>
      <h1>Socials</h1>
      <h1>Team</h1>
      <div className="team-container">
        <img src={quikcarnage} alt="" style={{maxWidth: "300px"}} />
        <img src={nomad} alt="" style={{maxWidth: "300px"}} />
        <img src={crolivia} alt="" style={{maxWidth: "300px"}} />
        <img src={john} alt="" style={{maxWidth: "300px"}} />
        <img src={toddg} alt="" style={{maxWidth: "300px"}} />
        <img src={lordcommander022} alt="" style={{maxWidth: "300px"}} />
      </div>
      <h1>Credits</h1>
      <h1>Anything else</h1>
    </>
  )
}
