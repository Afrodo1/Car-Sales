import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { connect } from 'react-redux';
import {removeFeature, addFeature} from './actions/actions';

const App = (props) => {





  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.carProps} />
        <AddedFeatures car={props.carProps} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.featureProps} />
        <Total car={props.carProps} additionalPrice={props.priceProps} />
      </div>
    </div>
  );
};

const mapStateToProps = state =>{
  return{
    carProps: state.car,
    featureProps: state.additionalFeatures,
    priceProps: state.additionalPrice

  }
}

export default connect(mapStateToProps,{removeFeature, addFeature})(App);
