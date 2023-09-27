import React, { Component } from "react";
import Slider from "react-slick";
import "./styles/home.css"


class AutoPlay extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 500,
      swipeToSlide: true,
      cssEase: "ease"
    };

    const sliderImgHeight = "auto"
    const sliderImgWidth = "100%"
    return (
      <div>
        <Slider {...settings}>
          <div className="slider-container">
            <a rel="noreferrer" target="_blank" href="https://www.nexusmods.com/fallout4/mods/66051">
              <img height={sliderImgHeight} width={sliderImgWidth} className="slider-image" src="https://staticdelivery.nexusmods.com/mods/1151/images/66051/66051-1691698584-597097974.png" alt="" />
            </a>
          </div>
          <div className="slider-container">
            <a rel="noreferrer" className="slider-image" target="_blank" href="https://www.nexusmods.com/fallout4/mods/33812">
              <img height={sliderImgHeight} width={sliderImgWidth} src="https://staticdelivery.nexusmods.com/mods/1151/images/33812/33812-1533371531-1497414665.png" alt="" />
            </a>
          </div>
          <div className="slider-container">
            <a rel="noreferrer" className="slider-image" target="_blank" href="https://www.nexusmods.com/fallout4/mods/72923">
              <img height={sliderImgHeight} width={sliderImgWidth} src="https://staticdelivery.nexusmods.com/mods/1151/images/72923/72923-1690406065-961992746.png" alt="" />
            </a>
          </div>
          <div className="slider-container">
            <a rel="noreferrer" className="slider-image" target="_blank" href="https://www.nexusmods.com/fallout4/mods/11734">
              <img height={sliderImgHeight} width={sliderImgWidth} src="https://staticdelivery.nexusmods.com/mods/1151/images/11734-0-1460009964.jpg" alt="" />
            </a>
          </div>
          <div className="slider-container">
            <a rel="noreferrer" className="slider-image" target="_blank" href="https://www.nexusmods.com/fallout4/mods/44075">
              <img height={sliderImgHeight} width={sliderImgWidth} src="https://staticdelivery.nexusmods.com/mods/1151/images/44075/44075-1585252070-1505492778.jpeg" alt="" />
            </a>
          </div>
          <div className="slider-container">
            <a rel="noreferrer" className="slider-image" target="_blank" href="https://www.nexusmods.com/fallout4/mods/58429">
              <img height={sliderImgHeight} width={sliderImgWidth} src="https://staticdelivery.nexusmods.com/mods/1151/images/58429/58429-1645824397-1885298954.jpeg" alt="" />
            </a>
          </div>
          <div className="slider-container">
            <a rel="noreferrer" className="slider-image" target="_blank" href="https://www.nexusmods.com/fallout4/mods/74429">
              <img height={sliderImgHeight} width={sliderImgWidth} src="https://staticdelivery.nexusmods.com/mods/1151/images/74429/74429-1693677757-1452244326.jpeg" alt="" />
            </a>
          </div>
          <div className="slider-container">
            <a rel="noreferrer" className="slider-image" target="_blank" href="https://www.nexusmods.com/fallout4/mods/67336">
              <img height={sliderImgHeight} width={sliderImgWidth} src="https://staticdelivery.nexusmods.com/mods/1151/images/67336/67336-1672419923-1404769324.jpeg" alt="" />
            </a>
          </div>
          <div className="slider-container">
            <a rel="noreferrer" className="slider-image" target="_blank" href="https://www.nexusmods.com/fallout4/mods/58440">
              <img height={sliderImgHeight} width={sliderImgWidth} src="https://staticdelivery.nexusmods.com/mods/1151/images/58440/58440-1645980357-1466572670.jpeg" alt="" />
            </a>
          </div>
        </Slider>
        <p>Description text</p>
      </div>
    );
  }
}



export function Home() {
  return(
    <>
      <h1>What is Fallout Anomaly?</h1>
      <p className="pack-description">Embark on an epic journey through the post-apocalyptic wastelands of Fallout 4 like never before! In Fallout Anomaly, you'll step into the worn boots of a survivor born in the shadow of Moscow's destruction, shaped by the horrors of war and the relentless threat of radiation. This modpack seamlessly blends the best elements from popular mod lists, creating an unforgettable experience.
        <br />
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
        
        Fallout Anomaly offers an expansive and captivating experience, blending the rich storytelling of A Storywealth, the survival and eerie atmosphere of Immersive Wasteland, the modern gameplay of Vault Boy 101 Total Overhaul v.2.0, and the haunting Stalker-like ambiance of Lost World. Join us in this relentless pursuit of adventure and uncover the secrets of the Commonwealth. Your journey begins now!
      </p>
      <hr/>
      <div className="category-sliders-container">
        <div className="category-slider">
          <h2 style={{margin:"3rem 0 0 0"}}>Gameplay</h2>
          <AutoPlay />
        </div>
        <div className="category-slider">
          <h2 style={{margin:"3rem 0 0 0"}}>Gameplay</h2>
          <AutoPlay />
        </div>
      </div>
    </>
  )
}
