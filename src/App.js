import React, { Component } from 'react';
import './App.css';
import Calendar from './Calendar';
import Table from './Table';
import {connect} from 'react-redux';

class App extends Component {
  constructor(props){
    super(props);
    // this.setDate = this.setDate.bind(this);
  }

  // setDate = (value) => {
  //   this.setState({
  //     currentDate: value
  //   })
  // }

  render() {
    return (
      <div>
        <h1>Курс белорусского рубля к другим иностранным валютам</h1>
        <Calendar type='currentDate'/>
        <Table date={this.props.currentDate}/>
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
  return {
    ...state
  };
};

export default connect(mapStateToProps)(App);
