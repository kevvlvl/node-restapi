import express from "express";
import * as bodyParser from "body-parser";
import { HealthRoute } from "./routes/health-route";
import { ProductRoute } from "./routes/product-route";

class Application {

    public expressApp: express.Application;

    private healthRoute: HealthRoute;
    private productRoute: ProductRoute;

    constructor() {
        this.expressApp = express();
        this.configure();

        this.healthRoute = new HealthRoute();
        this.healthRoute.route(this.expressApp);

        this.productRoute = new ProductRoute();
        this.productRoute.route(this.expressApp);
    }

    private configure(): void {
        this.expressApp.use(bodyParser.json());
        this.expressApp.use(bodyParser.urlencoded({ extended: false}));
    }
}

export default new Application().expressApp;