

function FeaturedMovie({movie, videos, handleClick}) {
    const { title, poster_path, backdrop_path, release_date, overview, average_rating, genres, budget, revenue, runtime, tagline  } = movie
    
    return (
        <section onClick={handleClick}>
            <iframe></iframe>
            <h2>{title}</h2>
        </section>
    )
}

export default FeaturedMovie