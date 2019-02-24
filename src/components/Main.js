import React from "react";
import "./Main.css";
import { fetchedPlayer } from "../actions";
import apexAPI from "../apis/apex";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Main extends React.Component {
  state = {
    playerName: "",
    platform: ""
  };

  onPlayerChange = e => {
    this.setState({ playerName: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    apexAPI
      .get(`/${this.state.platform}/${this.state.playerName}`)
      .then(res => {
        this.props.fetchedPlayer(res.data);
      });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-2" />
          <div className="col-md-8">
            <div className="jumbotron text-center">
              <h1>Apex Legends Stats</h1>
            </div>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter player name..."
                  name="playerName"
                  value={this.state.playerName}
                  onChange={this.onPlayerChange}
                />
              </div>
              <div className="text-center">
                <button
                  onClick={() => this.setState({ platform: 5 })}
                  className="btn btn-lg btn-primary mx-2"
                >
                  <i className="fab fa-windows" />
                </button>
                <button
                  onClick={() => this.setState({ platform: 2 })}
                  className="btn btn-lg btn-warning mx-2"
                >
                  <i className="fab fa-playstation" />
                </button>
                <button
                  onClick={() => this.setState({ platform: 1 })}
                  className="btn btn-lg btn-success mx-2"
                >
                  <i className="fab fa-xbox" />
                </button>
              </div>
              <button
                className="btn btn-primary btn-lg btn-block mt-3"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
          <Link to="/player">GO</Link>
          <div className="col-md-2" />
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { fetchedPlayer }
)(Main);
