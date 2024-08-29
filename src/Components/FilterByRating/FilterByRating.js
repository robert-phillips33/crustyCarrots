// import './FilterByRating.css';

// function FilterByRating() {

//   const [ratings, setRating] = useState([]);
//   const [selectedRating, setSelectedRating] = useState('');
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
//       .then(response => response.json())
//       .then((data) => setRatings(data))
//       .catch(error => {
//         setError(error.message);
//       });
// }, []);


// const handleChange = (event) => {
//   setSelectedRating(event.target.value)
// }

// return (
//   <select className="filter-by-rating" value={selectedRating} onChange={handleChange}>
//     <option value="">By Rating</option>
//     {ratings.map((rating) => (
//       <option key={rating} value={rating}>
//         {rating}
//       </option>
//     ))}
//   </select>
// )
// }

// export default FilterByRating;

// -> fetch data (?)
// -> use conditional logic to measure dropdown selection (genre type) to newly fetched data (?)
// -> render new MoviesList state according to the return (?)
// -> ** not entirely sure if these are in the correct order, but they could work **