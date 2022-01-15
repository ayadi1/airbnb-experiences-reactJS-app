import Card from "./Card";
import data from "../data";

export default function Container() {
  const finalCards = data.map((item, index) => {
    return (
      <Card
        img={item.coverImg}
        review={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        text={item.title}
        country={item.location}
        price={item.price}
        key={item.id}
        status={item.openSpots}
      />
    );
  });
  return <div className="container">{finalCards}</div>;
}
