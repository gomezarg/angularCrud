import { Router } from 'express';

class FilmsRoutes {

    public router: Router = Router();

    constructor() {
        this.config();

    }
    config() : void {
        this.router.get('/', (req, res) => res.send('Films'));
    }
}
const filmsRoutes = new FilmsRoutes();
export default filmsRoutes.router;