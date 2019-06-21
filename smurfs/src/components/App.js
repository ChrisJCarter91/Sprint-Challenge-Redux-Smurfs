import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSmurfsStart } from '../actions/index';
import { addSmurf } from '../actions/index';


import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

class App extends Component {
state={
  smurf: {
    name: '',
    age: '',
    height: '',
  }
}

componentDidMount(){
  this.props.fetchSmurfsStart()
}

handleChange = event => {
  event.preventDefault()
  this.setState({
    smurf: {
      ...this.state.smurf,
      [event.target.name]: event.target.value,
    }
  })
}

addSmurf = event => {
  this.props.addSmurf(this.state.smurf)
  this.setState({
    smurf: {
      name: '',
      age: '',
      height: '',
    }
  })
}

render() {
  return (
    <div className="App">
      <h1>Redux Smurf Village</h1>
        {this.props.smurfs.map((x, i) => (
          <div  className="smurfs" key={x.name}>
            <h4>{x.name}</h4>
            <p>{x.age} smurf years</p>
            <p>{x.height}</p>
          </div>
        ))}
          <form onSubmit={this.addSmurf}>
            <input 
            type="string"
            name="name"
            value={this.state.smurf.name}
            placeholder="Name"
            onChange={this.handleChange}
            />
            <input 
            type="number"
            name="age"
            value={this.state.smurf.age}
            placeholder="Age"
            onChange={this.handleChange}
            />
            <input 
            type="string"
            name="height"
            value={this.state.smurf.height}
            placeholder="Height"
            onChange={this.handleChange}
            />
            <button>Add a Smurf</button>
          </form>
    </div>
  );
}
}

const mapStateToProps = state => ({
smurfs: state.smurfs
})

export default connect(
mapStateToProps,
{
  fetchSmurfsStart,
  addSmurf,
}
)(App);
