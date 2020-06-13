import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './board.scss';

class Board extends React.Component {
  render() {
    const { boards } = this.props;
    return (
      <div className="board-wrap">
        <div className="board">
          <ul className="board-list">
            {
              boards.map((item, key) => {
                return (
                  <li key={key} className="board-list-item">{item.title}</li>
                )
              })
            }
          </ul>
          <button className="board-create"><Link to="/create">Create</Link></button>
        </div>
      </div>
    )
  }
}

Board.propTypes = {
  boards: PropTypes.array,
}

Board.defaultProps = {
  boards: [
    {
      title: 'TItle 1'
    },
    {
      title: 'TItle 2'
    },
    {
      title: 'TItle 3'
    },
  ]
};

export default Board;
