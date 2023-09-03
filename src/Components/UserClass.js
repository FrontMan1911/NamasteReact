import React from "react";

class Userclass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    console.log(this.props);
    const { Name, MobileNo, Designation, Company } = this.props.userdetails;
    const { count } = this.state;
    return (
      <div className="user-card">
        <img src="img.jpg" alt={Name} style={{ width: "50%" }} />
        <h1>{Name + "-" + count}</h1>
        {<p className="user-title">{Designation + "," + Company}</p>}
        <p>{Name}</p>
        <a href="#">
          <i className="fa fa-dribbble"></i>
        </a>
        <a href="#">
          <i className="fa fa-twitter"></i>
        </a>
        <a href="#">
          <i className="fa fa-linkedin"></i>
        </a>
        <a href="#">
          <i className="fa fa-facebook"></i>
        </a>
        <p>
          <button
            className="user-button"
            onClick={() => {
              this.setState({ count: this.state.count + 1 });
            }}
          >
            {MobileNo}
          </button>
        </p>
      </div>
    );
  }
}

export default Userclass;
