import express from 'express';

const videoRouter = express.Router();
const videoEdit = (req, res) => res.send(`<h1>Video Edit</h1>`);
videoRouter.get('/edit', videoEdit);

export default videoRouter;
