import type {Request, Response} from 'express';
import type { AddItemsBody } from '../types/types.js';
import warehouseModel from '../models/warehouse.js';

const getItemsController = async (req: Request, res: Response): Promise<void> => {
    try {
        const items = await warehouseModel.find();
        res.status(200).json(items);
    } catch(err) {
        res.status(500).json({
            "error": `Error fetching items: ${err}`
        });
    }
};

const addItemsController = async (req: Request, res: Response):Promise<void> =>{
    try{
        const {items} = req.body as AddItemsBody;
        if(items.length === 0){
            res.status(400).json({
                "error": "No items to add"
            });
            return;
        }
        await warehouseModel.insertMany(items);
        res.status(201).json({
            "message": "Items added successfully"
        });
    }catch(err){
        res.status(500).json({
            "error": `Error in add items controller ${err}`
        });
        return;
    }
}
export {addItemsController, getItemsController}