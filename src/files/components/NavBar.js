import { useNavigate } from "react-router-dom"

export function NavBar() {
  const navigate = useNavigate()
  const tabs = ["About", "Docs", "Socials"]

  const handleNav = (e) => {
    console.log(e.target.name)
    switch (e.target.name) {
      case "About":
        navigate("/about")
        break;

      case "Docs":
        navigate("/docs")
        break;

      case "Socials":
        navigate("/socials")
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
