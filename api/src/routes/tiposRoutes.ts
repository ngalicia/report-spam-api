import { Router } from 'express';
import tiposController from '../controllers/tiposController'

class TiposRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', tiposController.index);
        this.router.get('/:id', tiposController.search);
        this.router.post('/', tiposController.create);
        this.router.put('/:id', tiposController.update);
        this.router.delete('/:id', tiposController.delete);
    }
}

const tiposRoutes = new TiposRoutes();
export default tiposRoutes.router;
