import React from 'react';
import {connect} from 'react-redux';

import AddedFeature from './AddedFeature';
import {removeFeature} from '../actions/actions';


const AddedFeatures = props => {

  const removeFeature = (item) => {
    // dispatch an action here to remove an item
    props.removeFeature(item);
  };

  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.featuresOnProps.length ? (
        <ol type="1">
          {props.featuresOnProps.map(item => (
            <AddedFeature key={item.id} feature={item} removeFeature ={removeFeature} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStateToProps = state =>{
  return{
    featuresOnProps: state.car.features
  }
}

export default connect(mapStateToProps,{removeFeature})(AddedFeatures);
