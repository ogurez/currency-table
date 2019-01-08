import React, { Component } from 'react';
import './Calendar.css';
import {connect} from 'react-redux';

class Calendar extends Component {
  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  
  onChange = (e) => {
    this.props.setDate(e.target.value, this.props.type)
  }


  render() {
    return (
      <div>
        <input value={this.props.value} type='date' onChange={this.onChange}></input>
      </div>
    );
  }
}

const mapStateToProps=(state, {type})=>{
  return {
    value: state[type]
  };
};

const mapDispatchToProps=(dispatch, {type})=>{
return {
  setDate: (date)=>dispatch({type:"SET_DATE", payload: {[type]: date}})
}
};

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);