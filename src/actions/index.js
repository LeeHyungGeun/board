import actionTypes from './actionTypes';
import axios from 'axios';

export const addBoard = (title) => {
  return function(dispatch) {
    const result = axios.post('http://localhost:9000/addBoard', { title }, {
      headers: {
        'Access-Control-Allow-Origin': '*',
      }
    });
  };
};

export const getBoards = () => {
  return function(dispatch) {
    const result = axios.get('http://localhost:9000/getBoards', {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    }).then((res) => {
      dispatch(getBoardsReturn(res.data.boards));
    });
  };
};

export const getBoardsReturn = (boards) => {
  return {
    type: actionTypes.GET_BOARDS,
    boards,
  };
};
