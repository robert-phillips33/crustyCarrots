import './CarrotRating.css';
import whiteCarrot from './white-carrot.png';
import yellowCarrot from './yellow-carrot.png';

function CarrotRating({ average_rating }) { // this is coming back undefined so I'm not passing the correct props - so I'm not sure if the rest of the code is correct. HELP!!!!!
    console.log(average_rating, 'AVERAGE RATING ????????????')
    const totalCarrots = 10;

    // Ensure the rating is within the valid range
    const validRating = !isNaN(average_rating)
        ? Math.max(0, Math.min(average_rating, totalCarrots))
        : 0;

    const fullCarrots = Math.floor(validRating);
    const emptyCarrots = totalCarrots - fullCarrots;

    // Create arrays for the carrot images
    const fullCarrotArray = Array(fullCarrots).fill(yellowCarrot);
    const emptyCarrotArray = Array(emptyCarrots).fill(whiteCarrot);

    const carrotImages = [...fullCarrotArray, ...emptyCarrotArray];

    return (
        <div className="carrot-rating">
            {carrotImages.map((carrot, index) => (
                <div className="carrot-img-box">
                    <img className="carrot-rating-img" key={index} src={carrot} alt="carrot rating" />
                </div>
            ))}
        </div>
    );
}

export default CarrotRating;