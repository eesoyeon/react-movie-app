import PropTypes from "prop-types";
import { Link } from "react-router-dom";

//props object: title, summary
//모든 img는 alt 속성을 가짐

function Movie({ id, coverImg, title, genres }) {
  return (
    <div>
      <Link to={`/movie/${id}`}>
        <img src={coverImg} alt={title} />
        <h2>{title}</h2>
      </Link>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default Movie;
