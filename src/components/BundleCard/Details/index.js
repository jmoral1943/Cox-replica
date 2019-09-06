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

  handleOpenDetails = () => {
    let ls = document.querySelector('.ListShowing')
    if (ls.style.display === 'block') {
      ls.style.display = 'none';
      document.querySelector('.Details').style.minHeight = 'unset';
    } else {
      ls.style.display = 'block';
      document.querySelector('.Details').style.minHeight = '150px';
    }

    let dropdown = document.querySelector('.c-details-dropdown');
    if (dropdown.style.transform === 'rotate(-90deg)') {
      dropdown.style.transform = 'rotate(90deg)';
    } else {
      dropdown.style.transform = 'rotate(-90deg)';
    }
  }

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="c-details-dropdown"
            onClick={this.handleOpenDetails}
          >
            <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" />
          </svg>
        </div>

        <div className="ListShowing">{ListShowing}</div>
      </div>
    );
  }
}

export default Details;
