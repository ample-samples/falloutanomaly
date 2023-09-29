import "./styles/home.css"
import { useState, useEffect } from "react";
import { GameplayCarousel, QuestCarousel } from "../components/Sliders";





export function Home() {


  const breakdownMessage = `
        Immerse yourself in a world of HD textures and stunning world changes. 
        Battle through zombie-like hordes with HD creature overhauls and encounter new and terrifying beasts. 
        Interact with revamped NPCs, experience faction overhauls, and customize your character like never before. 
        Let a total sound overhaul keep you on the edge of your seat, breathing life into this desolate landscape. 
        Explore an updated user interface for a smoother gaming experience. 
        Gear up with an abundance of new armor, clothing, and accessories. 
        Arm yourself with modern weapons to face the challenges of the wasteland. 
        Master a complex crafting system overhaul that adds depth to your survival. 
        Engage with new gameplay mechanics and systems that enhance your immersion. 
        Dive into 15+ new storylines, quests, and adventures waiting to be discovered. 
        Conquer 9+ new dungeons and unveil their mysteries. 
        Roam 8+ new lands, each with its own secrets and surprises. 
    `

  return(
    <>
      <div className="home-container limit-width-large">
        <h1>What is Fallout Anomaly?</h1>
        <p className="pack-description">Embark on an epic journey through the post-apocalyptic wastelands of Fallout 4 like never before! In Fallout Anomaly, you'll step into the worn boots of a survivor born in the shadow of Moscow's destruction, shaped by the horrors of war and the relentless threat of radiation. This modpack seamlessly blends the best elements from popular mod lists, creating an unforgettable experience.
          <br />
          <p className="breakdown-message">{breakdownMessage}</p>
          <br />
          Fallout Anomaly offers an expansive and captivating experience, blending the rich storytelling of A Storywealth, the survival and eerie atmosphere of Immersive Wasteland, the modern gameplay of Vault Boy 101 Total Overhaul v.2.0, and the haunting Stalker-like ambiance of Lost World. Join us in this relentless pursuit of adventure and uncover the secrets of the Commonwealth. Your journey begins now!
        </p>
        <hr/>
        <div className="category-sliders-container">
          <div className="category-slider">
            <h2 style={{margin:"10px 0 0 0"}}><u>Gameplay</u></h2>
            <GameplayCarousel  />
            <p>Description text</p>
          </div>
          <div className="category-slider">
            <h2 style={{margin:"10px 0 0 0"}}><u>Quests</u></h2>
            <QuestCarousel  />
            <p>Description text</p>
          </div>
          <div className="category-slider">
            <h2 style={{margin:"10px 0 0 0"}}><u>Textures/Visuals/Audio</u></h2>
            <GameplayCarousel  />
            <p>Description text</p>
          </div>
          <div className="category-slider">
            <h2 style={{margin:"10px 0 0 0"}}><u>Weapons</u></h2>
            <QuestCarousel  />
            <p>Description text</p>
          </div>
          <div className="category-slider">
            <h2 style={{margin:"10px 0 0 0"}}><u>Creatures</u></h2>
            <GameplayCarousel  />
            <p>Description text</p>
          </div>
          <div className="category-slider">
            <h2 style={{margin:"10px 0 0 0"}}><u>NPCs & Factions</u></h2>
            <QuestCarousel  />
            <p>Description text</p>
          </div>
        </div>
      </div>
    </>
  )
}
