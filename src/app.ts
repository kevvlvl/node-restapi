import express from "express";
import * as bodyParser from "body-parser";
import { HealthRoute } from "./routes/health-route";

class Application {

    public expressApp: express.Application;
    private healthRoute: HealthRoute;

    constructor() {
        this.expressApp = express();
        this.configure();

        this.healthRoute = new HealthRoute();
        this.healthRoute.route(this.expressApp);
    }

    private configure(): void {
        this.expressApp.use(bodyParser.json());
        this.expressApp.use(bodyParser.urlencoded({ extended: false}));
    }
}

export default new Application().expressApp;