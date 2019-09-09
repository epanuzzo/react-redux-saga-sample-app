import { MEMES_LIST, MEMES_ERROR } from 'CONSTANTS';

const defaultState = {
    memes: null,
    errors: null
}

const main = (state = defaultState, action) => {
  switch (action.type) {
    case MEMES_LIST:
      return {
        ...state,
        memes: action.payload.data.memes
      }
    case MEMES_ERROR:
      return {
        ...state,
        memes: [],
        errors: {
          ...state.errors,
          memes: action.payload.error
        }
      }
    default:
      return {
          ...state
      }
  }
}

export default main