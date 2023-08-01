// const app = require('express')();

// const server = require('http').createServer(app);
// const io = require('socket.io')(server, { cors: { origin: '*' } });

// const port = 3000;

const io = require('socket.io')(3000, {
  cors: {
    origin: ['http://localhost:3001'],
  },
});

io.on('connection', (socket) => {
  console.log(socket.id);

  socket.on('event', (message) => {
    console.log(message);
    socket.broadcast.emit('received-message', message);
  });
});

// const transmitData = ['hello', 'world'];

// app.get('/', (req, res) => {
//   res.send({ msg: transmitData });
// });

// server.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
