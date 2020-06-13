import actionTypes from './actionTypes';

export const addBoard = (title) => {
  return {
    type: actionTypes.ADD_BOARD,
    title,
  }
};
