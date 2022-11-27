import express, { Application, json } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import tiposRoutes from './routes/tiposRoutes';
import contactosRoutes from './routes/contactosRoutes';
import denunciasRoutes from './routes/denunciasRoutes';

class Server {

    public app: Application;

    constructor() {
        this.app = express();

        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }

    routes(): void {
        this.app.use(indexRoutes);
        this.app.use('/api/tipos', tiposRoutes);
        this.app.use('/api/contactos', contactosRoutes);
        this.app.use('/api/denuncias', denunciasRoutes);
    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server port: ', this.app.get('port'));
        });
    }
}

const server = new Server();
server.start();
