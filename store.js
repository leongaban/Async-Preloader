import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

// import { getProgress } from './services/api'

const exampleInitialState = {
  loaders: []
}

export const actionTypes = {
  ADD_LOADER: 'ADD_LOADER'
}

const updateLoaders = (state, { payload }) => {
  const { loaders } = state;
  loaders.push(payload);
  return loaders;
}

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_LOADER:
      const newLoaders = updateLoaders(state, action);
      return {
        loaders: newLoaders
      }
    default:
      return state
  }
}

// API
export async function getProgress(dispatch) {
  try {
    const loaded = await loadProgress();
    return dispatch({ type: actionTypes.ADD_LOADER, payload: loaded })
  }
  catch (err) {
    console.log('Error', err);
  }
}

function loadProgress() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ progress: 100 });
      }, 1000);
  });
}

// ACTIONS
export const addLoader = () => dispatch => {
  getProgress(dispatch);
}

export function initializeStore (initialState = exampleInitialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}
