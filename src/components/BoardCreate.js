import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { withRouter } from "react-router"
import PropTypes from 'prop-types';
import './board-create.scss';

class BoardCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };
  }
  changeTitle = (e) => {
    this.setState({
      title: e.target.value
    });
  }
  render() {
    const { addBoard } = this.props;
    return (
      <div className="board-create-wrap">
        <div className="board-create">
          <div className="board-create-item">
            <label htmlFor="title">Title: <input id="title" value={this.state.title} onChange={this.changeTitle}></input></label>
          </div>
          <button className="board-create-save" onClick={() => {
            addBoard(this.state.title);
            this.props.history.push('/');
          }}>Save</button>
          <button className="board-create-cancel"><Link to="/">Cancel</Link></button>
        </div>
      </div>
    )
  }
}

BoardCreate.propTypes = {
}

BoardCreate.defaultProps = {
};

export default withRouter(BoardCreate);
