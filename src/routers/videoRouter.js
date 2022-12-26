import express from 'express';
import {
  deleteVideo,
  edit,
  upload,
  watch,
} from '../controllers/videoController';

// /videos
const videoRouter = express.Router();

videoRouter.get('/upload', upload);
videoRouter.get('/:id(\\d+)', watch);
videoRouter.get('/:id/edit', edit);
videoRouter.get('/:id/delete', deleteVideo);

export default videoRouter;
