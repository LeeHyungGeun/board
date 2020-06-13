import React from 'react';
import { connect } from 'react-redux';

class BoardContainer extends React.Component {
  render() {
    const { boards } = this.props;
    return (
      <div>
        Create Board
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
