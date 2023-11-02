import React from "react";
class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch(`https://randomuser.me/api/`)
      .then((res) => res.json())
      .then((data) => this.setState({ data }));
  }

  render() {
    if (!this.state.data) {
      return <h1>Loading...</h1>;
    }
    return (
      <>
        <h1>
          {this.state.data.results.map((elm) => {
            return elm.name;
          })}
        </h1>
      </>
    );
  }
}

export default Info;

// error in fetching data
