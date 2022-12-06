import express from 'express';
import morgan from 'morgan';

const PORT = 5550;

const app = express();
const logger = morgan('dev');

const handleHome = (req, res) => {
  res.send(`<h1>HOME</h1>`);
};

app.use(logger);
app.get('/', handleHome);

const handleListening = () => {
  console.log(`Listening at http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);
