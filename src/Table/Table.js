import React, { Component } from 'react';
import './Table.css';
import Row from '../Row/Row';
import _ from 'lodash';

class Table extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      sort: {
        key: null,
        direction: 'desc'
      }
    }
    this.sortBy = this.sortBy.bind(this);
  }

  fetchData = () => {
    fetch(`http://www.nbrb.by/API/ExRates/Rates?onDate=${this.props.date}&Periodicity=0`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res
        })
      })     
  }

  sortBy = (key) => (e) =>{
    const direction = this.state.sort.key ? (this.state.sort.direction === 'asc' ? 'desc' : 'asc') : 'desc';
    const sortedData = _.sortBy(this.state.data, [key]);
    if (direction === 'desc'){
      sortedData.reverse();
    }
    this.setState({
      data: sortedData,
      sort : {
        key,
        direction
      }
    })
  } 

  componentDidMount(){
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.date !== prevProps.date) {
      this.fetchData();
    }
  }
 
  render() {
    const rows = this.state.data.map((rowData, index)=> <Row key={index} {...rowData}/>);
    return (
      <table>
        <thead>
          <tr>
            <th onClick={this.sortBy('Cur_Abbreviation')}>Abbrevation</th>
            <th onClick={this.sortBy('Cur_ID')}>ID</th>
            <th onClick={this.sortBy('Cur_Name')}>Name</th>
            <th onClick={this.sortBy('Cur_OfficialRate')}>Rate</th>
            <th onClick={this.sortBy('Cur_Scale')}>Scale</th>
            <th onClick={this.sortBy('Date')}>Date</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default Table;
