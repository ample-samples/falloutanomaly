import crolivia from "../files/pictures/Devs/crolivia.webp"
import john from "../files/pictures/Devs/john.webp"
import nomad from "../files/pictures/Devs/nomad.webp"
import quikcarnage from "../files/pictures/Devs/quik-carnage.webp"
import toddg from "../files/pictures/Devs/toddg.png"
import tommas from  "../files/pictures/Devs/tommas.png"
import foalogo from "../files/pictures/FOAlogo-medium.png"
import "./styles/about.css"

export function About() {
  const goToLink = (e) => {
    // window.location.href = e.target.value
    window.open(e.target.value)
  }

  return(
    <>
      <div className="about-container limit-width-large">
        <h1>Socials</h1>
        <hr />
        <div className="socials-container">
          <div className="socials-links">
            <button className="socials-link shadow" onClick={goToLink} value="https://www.google.com">WABBAJACK MODLIST</button>
            <button className="socials-link shadow" onClick={goToLink} value="https://www.google.com">VIEW THE FULL LIST</button>
            <button className="socials-link shadow" onClick={goToLink} value="https://www.google.com">DISCORD</button>
            <button className="socials-link shadow" onClick={goToLink} value="https://www.google.com">YOUTUBE</button>
            <button className="socials-link shadow" onClick={goToLink} value="https://www.google.com">TIKTOK</button>
            <button className="socials-link shadow" onClick={goToLink} value="https://www.google.com">TWITCH</button>
          </div>
          <div className="socials-img">
            <img src={foalogo} width="100%" alt="" />
          </div>
        </div>
        <h1>Team</h1>
        <hr />
        <div className="team-container">
          <img src={quikcarnage} alt=""/>
          <img src={nomad} alt=""/>
          <img src={toddg} alt=""/>
          <img src={crolivia} alt=""/>
          <img src={john} alt=""/>
          <img className="tommas" src={tommas} alt=""/>
        </div>
        <h1>Credits</h1>
        <hr />
        <ul>
        </ul>
      </div>
    </>
  )
}
