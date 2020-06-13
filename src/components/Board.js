import React from 'react';
import PropTypes from 'prop-types';
import './board.scss';

class Board extends React.Component {
  render() {
    const { list } = this.props;
    return (
      <div className="board-wrap">
        <div className="board">
          <ul className="board-list">
            {
              list.map((item, key) => {
                return (
                  <li className="board-list-item">{item.title}</li>
                )
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}

Board.propTypes = {
  list: PropTypes.array,
}

Board.defaultProps = {
  list: [
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
