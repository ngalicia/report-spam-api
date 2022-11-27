import { Router } from 'express';
import denunciasController from '../controllers/denunciasController'

class DenunciasRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', denunciasController.index);
        this.router.get('/:id', denunciasController.search);
        this.router.post('/', denunciasController.create);
        this.router.put('/:id', denunciasController.update);
        this.router.delete('/:id', denunciasController.delete);
    }
}

const denunciasRoutes = new DenunciasRoutes();
export default denunciasRoutes.router;
