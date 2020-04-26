import React, { useState, useReducer } from "react";
import { connect } from "react-redux";
import { setEditTrue, updateTitle } from "../actions";

// import { titleReducer, initialState } from "../reducers/titleReducer";

const Title = (props) => {
  const [newTitleText, setNewTitleText] = useState();
  //   const [state, dispatch] = useReducer(titleReducer, initialState);

  const handleChanges = (e) => {
    setNewTitleText(e.target.value);
  };

  return (
    <div>
      {!props.editing ? (
        <h1>
          {props.title}
          <i
            className="far fa-edit"
            onClick={() => {
              props.setEditTrue();
            }}
          />
        </h1>
      ) : (
        <div>
          <input
            className="title-input"
            type="text"
            name="newTitleText"
            value={newTitleText}
            onChange={handleChanges}
          />
          <button onClick={() => {props.updateTitle(newTitleText)}}>Update title</button>
        </div>
      )}
    </div>
  );
};

export default connect(
  (state) => {
    return { title: state.title, editing: state.editing };
  },
  { updateTitle: updateTitle, setEditTrue: setEditTrue }
)(Title);
