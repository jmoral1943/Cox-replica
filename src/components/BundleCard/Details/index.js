import React from "react";
import List from "./List";

class Details extends React.Component {
  state = {
    showing: "Internet"
  };

  handleChangeList = service => {
    this.setState({
      showing: service
    });
  };

  render() {
    let ListShowing;
    if (this.state.showing === "Internet") {
      ListShowing = this.props.internet.map(Service => {
        return <List service={Service} key={Service} />;
      });
    } else if (this.state.showing === "Tv") {
      ListShowing = this.props.tv.map(Service => {
        return <List service={Service} key={Service} />;
      });
    } else if (this.state.showing === "Voice") {
      ListShowing = this.props.tv.map(Service => {
        return <List service={Service} key={Service} />;
      });
    }

    return (
      <div className="Details">
        <div className="Details__Buttons">
          {this.props.internet && (
            <button
              className={
                this.state.showing === "Internet"
                  ? "Details__button Active__button"
                  : "Details__button Internet__button"
              }
              onClick={() => this.handleChangeList("Internet")}
            >
              Internet
            </button>
          )}
          {this.props.tv && (
            <button
              className={
                this.state.showing === "Tv"
                  ? "Details__button Active__button"
                  : "Details__button"
              }
              onClick={() => this.handleChangeList("Tv")}
            >
              Tv
            </button>
          )}
          {this.props.voice && (
            <button
              className={
                this.state.showing === "Voice"
                  ? "Details__button Active__button"
                  : "Details__button"
              }
              onClick={() => this.handleChangeList("Voice")}
            >
              Voice
            </button>
          )}
        </div>

        <div className="ListShowing">
           {ListShowing}
        </div>
       
      </div>
    );
  }
}

export default Details;
