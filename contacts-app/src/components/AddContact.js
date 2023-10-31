import React from "react";

//making this a class component
class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === " " || this.state.email === "") {
      alert("All fields are mandatory");
      return;
    }

    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "" });
    console.log(this.state);
  };
  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>

        {/* defining a form where we can add data like name and email */}
        <form className="ui form" onSubmit={this.add}>
          {/* 1st field for name */}
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>

          {/* 2nd field for email */}
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>

          {/* a button */}
          <button className="ui button blue">Add</button>
        </form>

        {/* form ends */}
      </div>
    );
  }
}

export default AddContact;
