import "./mediaCard.css"

export function MediaCard({srca, desc}) {
  return(
    <div className="media-card" style={{width: "1000px"}}>
      <img src={srca} alt="" style={{ width: "100%"}} />
      <div className="desc">{desc}</div>
    </div>
  )
}
