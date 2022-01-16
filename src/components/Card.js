import star from "../assets/images/Star.png";
export default function Card(props) {
  
  return (
    <div className="card">
      <div
        className="card--img"
        style={{ background: `url(${props.items.coverImg})` }}
      >
        {props.items.openSpots === 0 && (
          <div className="card--img__flag">SOLD OUT</div>
        )}
      </div>
      <div className="card--data">
        <div className="card--review">
          <img src={star} alt="" />
          <p>{props.items.stats.rating}</p>
          <p>
            ({props.items.stats.reviewCount}).{props.items.location}
          </p>
        </div>
        <div className="card--text">{props.items.title}</div>
        <div className="card-price">
          <span>From ${props.items.price}</span>
          <span>/ person</span>
        </div>
      </div>
    </div>
  );
}
