import { Router } from 'express';

import  filmsController  from '../controllers/filmsController';

class FilmsRoutes {

    public router: Router = Router();

    constructor() {
        this.config();

    }
    config() : void {
        this.router.get('/', filmsController.list);
        this.router.get('/:id', filmsController.getOne);
        this.router.post('/', filmsController.create);
        this.router.put('/:id', filmsController.update);
        this.router.delete('/:id', filmsController.delete);
    }
}
const filmsRoutes = new FilmsRoutes();
export default filmsRoutes.router;