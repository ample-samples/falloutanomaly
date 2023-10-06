import { useNavigate } from "react-router-dom"

const pathStart = "falloutanomaly"

export function NavBar() {
  const navigate = useNavigate()
  const tabs = ["Home", "Documentation", "Articles", "About", "Media"]

  const handleNav = (e) => {
    switch (e.target.name) {
      case "About":
        navigate(`/about`)
        break;

      case "Home":
        navigate(`/`)
        break;

      case "Documentation":
        navigate(`/docs`)
        break;

      case "Articles":
        navigate(`/articles`)
        break;

      case "Media":
        navigate(`/media`)
        break;

      default:
        break;
    }
  }

  return (
    <div className="navbar">
      {tabs.map((tab) => <button name={tab} onClick={handleNav} className="navbar-tab">{tab}</button>)}
    </div>
  )
}
