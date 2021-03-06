import React, { useEffect } from "react";
import {connect} from 'react-redux';
import {getSmurfs} from '../actions';
import SmurfList from './SmurfList';


const App = (props) => {
  useEffect(() => {
    props.getSmurfs();
  },[]);


  return (
    <div className="App">
      <SmurfList />
    </div>
  );
}

const mapStateToProps = state => {
  console.log(state);
  return{
    state: state
  };
};


export default connect(mapStateToProps,{getSmurfs})(App)
