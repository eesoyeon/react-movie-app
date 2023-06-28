import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState("");

  const { id } = useParams();
  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);

    setDetail(json.data.movie);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    getMovie();
  }, [getMovie]);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <MovieDetail
          coverImg={detail.medium_cover_image}
          code={detail.yt_trailer_code}
          title={detail.title_long}
          rating={detail.rating}
          genres={detail.genres}
          description={detail.description_full}
        />
      )}
    </div>
  );
}

export default Detail;
