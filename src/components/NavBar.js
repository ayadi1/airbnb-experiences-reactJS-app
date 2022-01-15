import img from "../assets/images/logo.png";

export default function NavBar() {
  return (
    <nav className="nav">
      <img src={img} alt=""className="nav--logo" />
    </nav>
  );
}
