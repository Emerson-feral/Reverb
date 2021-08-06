import axios from 'axios';
import actionTypes from './actionTypes';

const URL_API = 'http://10.0.2.2:2030/api/guitar';

function getGuitars() {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(URL_API);
      dispatch({
        type: actionTypes.LOAD_GUITARS,
        guitars: data
      });
    } catch (error) {
      dispatch({
        type: actionTypes.LOAD_GUITARS_ERROR
      });
    }
  };
}

export default getGuitars;
