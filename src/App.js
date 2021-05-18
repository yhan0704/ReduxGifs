import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchingGifs, searchedGifs } from "./action";

function App() {
  const dispatch = useDispatch();
  const gifs = useSelector((state) => state.fechedGifs);
  const saerchedText = useSelector((state) => state.searchedGifs);
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(fetchingGifs(saerchedText));
  }, [dispatch, saerchedText]);

  return (
    <div className="App">
      <h1>Searching What You Want...</h1>
      <input
        type="text"
        onChange={(e) => dispatch(searchedGifs(e.target.value))}
      />

      {!loading ? (
        <div>loading................</div>
      ) : (
        gifs.map((gif) => (
          <div>
            <h1>{gif.title}</h1>
            <img src={gif.images.downsized.url} alt="pictures" />
          </div>
        ))
      )}
    </div>
  );
}

export default App;
