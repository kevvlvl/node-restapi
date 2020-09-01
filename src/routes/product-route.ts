import { Application, Request, Response } from 'express';
import { Product } from "../types/product";
import * as bodyParser from "body-parser";

export class ProductRoute {

    public route(e: Application) {
        e.post('/api/product', (req: Request, res: Response) => {

            // if the received JSON body is not empty
            if(Object.keys(req.body).length !== 0) {

                console.log('Received body: ', req.body);
                let p: Product = req.body;
                console.log('Product parsed: ', p);

                res.status(200).json({message: "Product posted successfully"});
            }
            else {
                res.status(500).json({message: "Invalid body"});
            }
        });
    }
}