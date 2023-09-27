import { useNavigate } from "react-router-dom"

const pathStart = "falloutanomaly"

export function NavBar() {
  const navigate = useNavigate()
  const tabs = ["Home", "About", "Documentation", "Articles", "Media"]

  const handleNav = (e) => {
    switch (e.target.name) {
      case "About":
        navigate(`/${pathStart}/about`)
        break;

      case "Home":
        navigate(`/${pathStart}/`)
        break;

      case "Documentation":
        navigate(`/${pathStart}/docs`)
        break;

      case "Articles":
        navigate(`/${pathStart}/articles`)
        break;

      case "Media":
        navigate(`/${pathStart}/media`)
        break;

      default:
        break;
    }
  }

// About will be
// Socials
// Team
// Credits
// Anything else
//
// Documentation is
// Readme
//
//
// Articles is
// Any articles like Nexus we wanna host
//
// Media is
// Screenshots and trailers

//   Home is
//
// Mod features to show what to expect in the list

  return (
    <div className="navbar">
      {tabs.map((tab) => <button name={tab} onClick={handleNav} className="navbar-tab">{tab}</button>)}
    </div>
  )
}
