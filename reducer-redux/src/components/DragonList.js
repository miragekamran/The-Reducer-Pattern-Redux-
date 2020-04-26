import React from "react";
import { connect } from "react-redux";
import { addMember } from "../actions/dragonListActions";

class DragonList extends React.Component {
  state = {
    newMember: "",
    // members: [
    //   { name: "Brandi", dragonStatus: true },
    //   { name: "Jose", dragonStatus: false },
    // ],
  };

  handleChanges = (e) => {
    this.setState({ newMember: e.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <div className="friends-list">
          {this.props.members.map((member, index) => (
            <h4 key={index}>
              {member.name}
              {member.dragonStatus && <i className="fas fa-dragon" />}
            </h4>
          ))}
        </div>
        <input
          type="text"
          value={this.state.newMember}
          onChange={this.handleChanges}
          placeholder="Add new member"
        />
        <button onClick={() => this.props.addMember(this.state.newMember)}>
          Add member
        </button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    members: state.dragonListReducer.members,
  };
};

export default connect(mapStateToProps, { addMember })(DragonList);
