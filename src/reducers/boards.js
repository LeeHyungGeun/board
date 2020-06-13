const initialBoards = [
  {
    title: 'Title 1'
  },
  {
    title: 'Title 2'
  },
  {
    title: 'Title 3'
  },
  {
    title: 'Title 4'
  },
];

const boards = (state = initialBoards, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
}

export default boards;
