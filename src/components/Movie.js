import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

const Movie = ({
  id,
  mediumCoverImage,
  title,
  rating,
  year,
  summary,
  genres,
}) => {
  return (
    <div className={styles.movie}>
      <img src={mediumCoverImage} alt={"Movie"} className={styles.movie__img} />
      <Link to={`/movie/${id}`}>
        <h1> Title: {title}</h1>
      </Link>
      <h3 className={styles.movie__year}>{year}</h3>
      <p>
        {summary.length > 235
          ? `${summary.slice(0, 235)}...`
          : summary || "no summary"}
      </p>
      <ul className={styles.movie__genres}>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
};

Movie.propTypes = {
  mediumCoverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
