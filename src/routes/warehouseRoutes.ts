import express from 'express'
import { addItemsController, getItemsController } from '../controllers/warehouseController.js';

const warehouseRouter = express.Router();

warehouseRouter.post('/additems', addItemsController);
warehouseRouter.get('/items', getItemsController);

export default warehouseRouter;