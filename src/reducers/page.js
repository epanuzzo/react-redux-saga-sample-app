import { pageDetails } from 'ACTIONS/page';

const page = (state = [], action) => {
  switch (action.type) {
    case 'PAGE_DETAILS':
      return [
        ...state,
        pageDetails(action.id)
      ]
    default:
      return state
  }
}

export default page