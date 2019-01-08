import {createStore} from 'redux';

const initStore = {
  currentDate: '2019-01-08'
}

const reducer = (state=initStore, action) =>{
  if(action.type==='SET_DATE'){
    return {...state, ...action.payload};
  }
  return state;
}

export const store = createStore(reducer);