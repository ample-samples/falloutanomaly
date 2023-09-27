import "./mediaCard.css"

export function MediaCard({src, desc}) {
  return(
    <div className="media-card">
      <img src={src} alt="" style={{ width: "100%"}} />
      <div className="desc-overlay">
        <div className="desc">{desc}</div>
      </div>
    </div>
  )
}
