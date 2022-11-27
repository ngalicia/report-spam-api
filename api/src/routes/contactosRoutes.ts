import { Router } from 'express';
import contactosController from '../controllers/contactosController'

class ContactosRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', contactosController.index);
        this.router.get('/:id', contactosController.search);
        this.router.post('/', contactosController.create);
        this.router.put('/:id', contactosController.update);
        this.router.delete('/:id', contactosController.delete);
    }
}

const contactosRoutes = new ContactosRoutes();
export default contactosRoutes.router;
