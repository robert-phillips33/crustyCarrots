import './CarrotRating.css';
import whiteCarrot from './white-carrot.png';
import yellowCarrot from './yellow-carrot.png';

function CarrotRating({ rating }) {
  const totalCarrots = 10;
  const fullCarrots = Math.floor(rating);
  const emptyCarrots = totalCarrots - fullCarrots;

  const fullCarrotArray = Array(fullCarrots).fill(yellowCarrot);
  const emptyCarrotArray = Array(emptyCarrots).fill(whiteCarrot);

  const carrotImages = [...fullCarrotArray, ...emptyCarrotArray];

  return (
    <div className="carrot-rating">
      {carrotImages.map((carrot, index) => (
        <div className="carrot-img-box" key={index}>
          <img className="carrot-rating-img" key={index} src={carrot} alt="carrot rating" />
        </div>
      ))}
    </div>
  );
};

export default CarrotRating;