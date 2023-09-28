import React, { Component } from "react";
import Slider from "react-slick";

const settings = {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500,
  swipeToSlide: true,
  cssEase: "ease",
  centerMode: true,
  autoplay: true,
};

const [max, min] = [7500, 5500]
const randAutoplayspeed = () => Math.random() * (max - min) + min

export class GameplayCarousel extends Component {
  render() {
    const sliderImgHeight = "auto"
    const sliderImgWidth = "100%"
    return (
      <div className="carousel">
        <Slider {...{...settings, autoplaySpeed: randAutoplayspeed() }}>
          <div className="slider-container">
            <a rel="noreferrer" target="_blank" href="https://www.nexusmods.com/fallout4/mods/66051">
              <img alt="munitions" height={sliderImgHeight} width={sliderImgWidth} className="slider-image" src="https://staticdelivery.nexusmods.com/mods/1151/images/66051/66051-1691698584-597097974.png" />
            </a>
          </div>
          <div className="slider-container">
            <a rel="noreferrer" className="slider-image" target="_blank" href="https://www.nexusmods.com/fallout4/mods/33812">
              <img alt="damn apocalypse" height={sliderImgHeight} width={sliderImgWidth} src="https://staticdelivery.nexusmods.com/mods/1151/images/33812/33812-1533371531-1497414665.png" />
            </a>
          </div>
          <div className="slider-container">
            <a rel="noreferrer" className="slider-image" target="_blank" href="https://www.nexusmods.com/fallout4/mods/72923">
              <img alt="REAL.AI" height={sliderImgHeight} width={sliderImgWidth} src="https://staticdelivery.nexusmods.com/mods/1151/images/72923/72923-1690406065-961992746.png" />
            </a>
          </div>
          <div className="slider-container">
            <a rel="noreferrer" className="slider-image" target="_blank" href="https://www.nexusmods.com/fallout4/mods/11734">
              <img alt="campsite" height={sliderImgHeight} width={sliderImgWidth} src="https://staticdelivery.nexusmods.com/mods/1151/images/11734-0-1460009964.jpg" />
            </a>
          </div>
          <div className="slider-container">
            <a rel="noreferrer" className="slider-image" target="_blank" href="https://www.nexusmods.com/fallout4/mods/44075">
              <img alt="hot diggity" height={sliderImgHeight} width={sliderImgWidth} src="https://staticdelivery.nexusmods.com/mods/1151/images/44075/44075-1585252070-1505492778.jpeg" />
            </a>
          </div>
          <div className="slider-container">
            <a rel="noreferrer" className="slider-image" target="_blank" href="https://www.nexusmods.com/fallout4/mods/58429">
              <img alt="Crime And Punishment" height={sliderImgHeight} width={sliderImgWidth} src="https://staticdelivery.nexusmods.com/mods/1151/images/58429/58429-1645824397-1885298954.jpeg" />
            </a>
          </div>
          <div className="slider-container">
            <a rel="noreferrer" className="slider-image" target="_blank" href="https://www.nexusmods.com/fallout4/mods/74429">
              <img alt="Handheld Geiger Counter" height={sliderImgHeight} width={sliderImgWidth} src="https://staticdelivery.nexusmods.com/mods/1151/images/74429/74429-1693677757-1452244326.jpeg" />
            </a>
          </div>
          <div className="slider-container">
            <a rel="noreferrer" className="slider-image" target="_blank" href="https://www.nexusmods.com/fallout4/mods/67336">
              <img alt="Enjoy the Darkness" height={sliderImgHeight} width={sliderImgWidth} src="https://staticdelivery.nexusmods.com/mods/1151/images/67336/67336-1672419923-1404769324.jpeg" />
            </a>
          </div>
          <div className="slider-container">
            <a rel="noreferrer" className="slider-image" target="_blank" href="https://www.nexusmods.com/fallout4/mods/58440">
              <img alt="Advanced Needs 76" height={sliderImgHeight} width={sliderImgWidth} src="https://staticdelivery.nexusmods.com/mods/1151/images/58440/58440-1645980357-1466572670.jpeg" />
            </a>
          </div>
        </Slider>
      </div>
    );

  }
}

const questCarouselInfo = [
  {
    name: "Atomic Radio and Tales from the Commonwealth",
    src: "https://staticdelivery.nexusmods.com/mods/1151/images/8704-0-1468526937.jpg",
    href: "https://www.nexusmods.com/fallout4/mods/8704"
  },
  {
    name: "Point Lookout",
    src: "https://staticdelivery.nexusmods.com/mods/1151/images/thumbnails/60330/60330-1652201203-280592258.jpeg",
    href: "https://www.nexusmods.com/fallout4/mods/60330"
  },
  {
    name: "The Fens Sheriff's Department - Bleachers 2",
    src: "https://staticdelivery.nexusmods.com/mods/1151/images/thumbnails/68276/68276-1675990650-369901358.jpeg",
    href: "https://www.nexusmods.com/fallout4/mods/68276"
  },
  {
    name: "Sim Settlements 2 - Chapter 3",
    src: "https://staticdelivery.nexusmods.com/mods/1151/images/thumbnails/73394/73394-1691007678-504016188.jpeg",
    href: "https://www.nexusmods.com/fallout4/mods/73394"
  },
  {
    name: "Project Mojave",
    src: "https://staticdelivery.nexusmods.com/mods/1151/images/thumbnails/55215/55215-1635015233-1008225126.png",
    href: "https://www.nexusmods.com/fallout4/mods/55215"
  },
  {
    name: "The Zone",
    src: "https://staticdelivery.nexusmods.com/mods/1151/images/thumbnails/42488/42488-1641025263-1221788359.jpeg",
    href: "https://www.nexusmods.com/fallout4/mods/42488"
  },
  {
    name: "Journey to Ipswich",
    src: "https://staticdelivery.nexusmods.com/mods/1151/images/thumbnails/16933-0-1469849505.jpg",
    href: "https://www.nexusmods.com/fallout4/mods/16933"
  },
  {
    name: "Wildwood Cemetery Tombs",
    src: "https://staticdelivery.nexusmods.com/mods/1151/images/thumbnails/51802/51802-1619894624-702958035.jpeg",
    href: "https://www.nexusmods.com/fallout4/mods/51802"
  },
  {
    name: "The Cemetery",
    src: "https://staticdelivery.nexusmods.com/mods/1151/images/thumbnails/53680/53680-1628248917-312691496.jpeg",
    href: "https://www.nexusmods.com/fallout4/mods/53680"
  },
  {
    name: "The Wilderness",
    src: "https://staticdelivery.nexusmods.com/mods/1151/images/thumbnails/53128/53128-1663954230-1883049240.png",
    href: "https://www.nexusmods.com/fallout4/mods/53128"
  },
  {
    name: "The Marshlands DLC",
    src: "https://staticdelivery.nexusmods.com/mods/1151/images/thumbnails/48628/48628-1618602950-1428161217.jpeg",
    href: "https://www.nexusmods.com/fallout4/mods/48628"
  },
]

export class QuestCarousel extends Component {
  render() {
    const sliderImgHeight = "auto"
    const sliderImgWidth = "100%"
    return (
      <div className="carousel">
        <Slider {...{...settings, autoplaySpeed: randAutoplayspeed() }}>
          {
            questCarouselInfo.map((info) => {
                return(
                  <div className="slider-container">
                    <a rel="noreferrer" target="_blank" href={info.href}>
                      <img alt={info.name} height={sliderImgHeight} width={sliderImgWidth} className="slider-image" src={info.src}/>
                    </a>
                  </div>
                )})
          }
        </Slider>
      </div>
    );
  }
}
