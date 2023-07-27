const app = require('express')();

const server = require('http').createServer(app);
const io = require('socket.io')(server, { cors: { origin: '*' } });

io.on('connection', (socket) => {
  socket.on('button-clicked', (data) => {
    console.log(socket.id, data);
    io.emit('increase', { data });
  });
});

// io.emit('hello', { msg: 'what what' });
// io.on('button-clicked', () => console.log('button clicked bro!'));
const port = 3000;

const transmitData = ['hello', 'world'];

// io.listen(3000);

app.get('/', (req, res) => {
  res.send({ msg: transmitData });
});

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
