import React from "react";
import List from "./List";

class Details extends React.Component {
  state = {
    showing: "Internet"
  }

  handleChangeList = (service) => {
    console.log(service)
  }

  render() {
    let ListShowing = <div></div>;
    if (this.state.showing === 'Internet') {
      ListShowing = this.props.internet.map(Service => {
        return <List service={Service} />;
      })
    } else if (this.state.showing === 'Tv') {
      ListShowing = this.props.tv.map(Service => {
        return <List service={Service} />;
      })
    } else if (this.state.showing === 'Voice') {
      ListShowing = this.props.tv.map(Service => {
        return <List service={Service} />;
      })
    }


    return (
      <div>
        <div>
          {
            this.props.internet &&
            <button onClick={() => this.handleChangeList('Internet')}>Internet</button>
          }
          {
            this.props.tv &&
            <button onClick={() => this.handleChangeList('Tv')}>Tv</button>
          }
          {
            this.props.voice && 
            <button onClick={() => this.handleChangeList('Voice')}>Voice</button>
          }
        </div>
        {
          ListShowing
        }
      </div>
    );
  }
}

export default Details;
