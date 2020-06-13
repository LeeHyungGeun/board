import React from 'react';
import { connect } from 'react-redux';
import BoardCreate from '../components/BoardCreate';
import { addBoard } from '../actions';

class BoardContainer extends React.Component {
  render() {
    const { addBoard } = this.props;
    return (
      <div>
        <BoardCreate addBoard={addBoard} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  boards: state.boards
});

const mapDispatchToProps = dispatch => ({
  addBoard: title => {
    dispatch(addBoard(title));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer);
