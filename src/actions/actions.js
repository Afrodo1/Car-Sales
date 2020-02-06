export const REMOVE_FEATURE = 'FEATURE_REMOVED';
export const ADD_FEATURE = 'FEATURE_ADDED';

export const removeFeature = index => {
    console.log('actions/index.js: removeFeature index: ', index);
    return {
        type: REMOVE_FEATURE,
        payload: index
    };
}

export const addFeature = index => {
    console.log('actions/index.js: addFeature index: ', index);
    return {
        type: ADD_FEATURE,
        payload: index
    }
}