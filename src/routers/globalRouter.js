import express from 'express';

const globalRouter = express.Router();
const homePage = (req, res) => res.send(`<h1>HOME</h1>`);
globalRouter.get('/', homePage);

export default globalRouter;
