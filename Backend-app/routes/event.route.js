import express from 'express';
// import { createEvent } from '../controllers/event.Controller.js';
import { createEvent, getEvent } from '../controllers/event.controller.js';

const router = express.Router();

// router.post('/events', createEvent);
router.route('/events').post(createEvent);
router.route('/events/:id').get(getEvent);

export default router; // Using export default for ES module syntax
