const routes = require('./routes');
const { app } = require('./infrastructure/express');
const { connect } = require('./infrastructure/mongo');

app.use('/', routes.login);
app.use('/cliente', routes.cliente);
app.use('/proprietario', routes.proprietario);

app.get('/ping', async (req, res) => {
  res.send("pong");
});

app.listen(3001, async () => {
  await connect();
  console.log("Connected on database and Listen on port 3000...");
});