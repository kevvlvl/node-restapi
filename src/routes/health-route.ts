import { Application, Request, Response } from 'express';

export class HealthRoute {

    public route(e: Application) {
        e.get('/api/health/status', (req: Request, res: Response) => {
            res.status(200).json({message: "API server is up"});
        });
    }
}