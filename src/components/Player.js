import React from "react";
import { connect } from "react-redux";

class Player extends React.Component {
  render() {
    if (!this.props.player) {
      return <div>Loading...</div>;
    } else {
      console.log(this.props.player.data.metadata.platformUserHandle);
      return (
        <div>
          <h1>{this.props.player.data.metadata.platformUserHandle}</h1>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return { player: state.player.fetchedPlayer };
};

export default connect(mapStateToProps)(Player);
