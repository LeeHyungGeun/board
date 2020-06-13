import React from 'react';
import { connect } from 'react-redux';
import Board from '../components/Board';
import { getBoards } from '../actions';

class BoardContainer extends React.Component {
  componentDidMount() {
    this.props.getBoards();
  }
  render() {
    const { boards } = this.props;
    return (
      <div>
        <Board boards={boards} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  boards: state.boards
});

const mapDispatchToProps = dispatch => ({
  // getBoards: () => {
  //   dispatch(getBoards());
  // },
  getBoards: () => {
    dispatch(getBoards());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer);
