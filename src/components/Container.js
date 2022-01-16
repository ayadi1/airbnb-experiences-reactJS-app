import Card from "./Card";
import data from "../data";

export default function Container() {
  const finalCards = data.map((item) => {
    return <Card key={item.id} items={item} />;
  });
  return <div className="container">{finalCards}</div>;
}
