import React from 'react';
import { connect } from 'react-redux';
import Board from '../components/Board';

class BoardContainer extends React.Component {
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

});

export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer);
