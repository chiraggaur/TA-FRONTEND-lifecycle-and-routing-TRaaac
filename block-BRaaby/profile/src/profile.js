import React from "react";
class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      image: "",
      name: "",
    };
  }

  componentDidMount() {
    fetch(`https://randomuser.me/api/`)
      .then((res) => res.json())
      .then((data) => this.setState({ data: data }));
  }

  handleClick = () => {
    return window.location.reload(false);
  };
  render() {
    if (!this.state.data) {
      return <h1>Loading...</h1>;
    }
    return (
      <>
        {console.log(this.state.data)}
        {this.state.data.results.map((elm) => {
          return (
            <>
              <div className="profileBox">
                <img src={elm.picture.large} alt="pictur" />
                <p>My name is </p>
                <h1> {elm.name.first + " " + elm.name.last}</h1>
                <button onClick={this.handleClick}>Get Random Person</button>
              </div>
            </>
          );
        })}
      </>
    );
  }
}

// doubt in rendering because its rendering 2 times

export default Info;

// error in fetching data
