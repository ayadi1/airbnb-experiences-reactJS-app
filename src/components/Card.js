import star from "../assets/images/Star.png";
export default function Card(props) {
  return (
    <div className="card">
      <div className="card--img" style={{ background: `url(${props.img})` }}>
        {props.status === 0 && <div className="card--img__flag">SOLD OUT</div>}
      </div>
      <div className="card--data">
        <div className="card--review">
          <img src={star} alt="" />
          <p>{props.review}</p>
          <p>
            ({props.reviewCount}).{props.country}
          </p>
        </div>
        <div className="card--text">{props.text}</div>
        <div className="card-price">
          <span>From $ {props.price}</span>
          <span>/ person</span>
        </div>
      </div>
    </div>
  );
}
