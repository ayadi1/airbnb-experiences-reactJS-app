import img from "../assets/images/Group-img.png";
export default function Infos() {
  return (
    <div className="infos-section">
      <div className="infos-section-img">
        <img src={img} alt="" />
      </div>
      <div className="infos-section-data">
        <h2>Online Experiences</h2>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
}
