import { useNavigate } from "react-router-dom"

const pathStart = "falloutanomaly"

export function NavBar() {
  const navigate = useNavigate()
  const tabs = ["Home", "About", "Documentation", "Socials"]

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

      case "Socials":
        navigate(`/${pathStart}/socials`)
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
