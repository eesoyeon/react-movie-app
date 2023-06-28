import PropTypes from "prop-types";

//props object: title, summary
//모든 img는 alt 속성을 가짐

function MovieDetail({ coverImg, title, genres, rating, description, code }) {
  return (
    <div>
      <div>
        <img src={coverImg} alt="img" />
        <iframe
          title="movie trailer"
          src={`https://www.youtube.com/embed/${code}`}
        ></iframe>
      </div>
      <h2>{title}</h2>

      <ul>
        ⭐️{rating}
        {genres.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>
      <div>
        <h3>Description</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

MovieDetail.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  code: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default MovieDetail;
