import React, { Component } from 'react';
import './App.css';
import Calendar from '../Calendar/Calendar';
import Table from '../Table/Table';
import {connect} from 'react-redux';

class App extends Component {
  constructor(props){
    super(props);
  }

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
