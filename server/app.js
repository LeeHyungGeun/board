const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors());

const state = {
  boards: [
    {
      title: 'KEN'
    },
    {
      title: 'KEN2'
    },
  ]
}

app.get('/getBoards', function(req, res) {
  res.json({
    boards: state.boards
  });
});

app.post('/addBoard', function(req, res) {
  const { title } = req.body;
  state.boards.push({
    title
  });
  console.log(state.boards);
  res.json({
    boards: state.boards
  });
});


app.listen(9000);