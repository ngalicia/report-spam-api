import { Request, Response } from 'express';

import db from '../database';

class TiposController {

    public index(req: Request, res: Response) {
        db.all('SELECT * FROM tipo ORDER BY nombre', function (err: any, rows: any) {
            if (err) throw err
            console.log(rows);
            res.send(rows);
        });
    }

    public search(req: Request, res: Response) {
        const { id } = req.params;

        db.all('SELECT * FROM tipo WHERE tipo = ?', [id], function (err: any, rows: any) {
            if (err) throw err
            console.log(rows);
            if (rows && rows.length > 0) {
                return res.json(rows[0])
            }
            res.status(404).json({ message: 'El tipo no fue encontrado.' });
        });
    }

    public create(req: Request, res: Response) {
        console.log(req.body);

        db.run('INSERT INTO tipo(nombre) VALUES(?)', [req.body.nombre], function (err: any, rows: any) {
            if (err) throw err
            res.json({ message: 'El tipo fue creado.' });
        });
    }

    public update(req: Request, res: Response) {
        console.log(req.body);
        const { id } = req.params;

        db.run('UPDATE tipo SET nombre = ? WHERE tipo = ?', [req.body.nombre, id], function (err: any, rows: any) {
            if (err) throw err
            res.json({ message: 'El tipo ' + req.params.id + ' fue actualizado.' });
        });
    }

    public delete(req: Request, res: Response) {
        const { id } = req.params;

        db.run('DELETE FROM tipo WHERE tipo = ?', [id], function (err: any, rows: any) {
            if (err) throw err
            res.json({ message: 'El tipo ' + req.params.id + ' fue eliminado.' });
        });
    }
}

const tiposController = new TiposController();
export default tiposController;
