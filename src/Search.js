import React from "react";
import { searchedGifs } from "./action";
import { connect } from "react-redux";

function Search(props) {
  console.log(props);
  return (
    <div>
      <input
        type="text"
        // value={props.count}
        onChange={(e) => props.searchedGifs(e.target.value)}
      />
      <button>search</button>
    </div>
  );
}

const mapStateToProps = (state) => console.log(state.searchedGifs);

export default connect(mapStateToProps, { searchedGifs })(Search);
