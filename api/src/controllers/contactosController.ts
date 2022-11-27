import { Request, Response } from 'express';

import db from '../database';

class ContactosController {

    public index(req: Request, res: Response) {
        db.all('SELECT * FROM contacto ORDER BY codigo, numero', function (err: any, rows: any) {
            if (err) throw err
            console.log(rows);
            res.send(rows);
        });
    }

    public search(req: Request, res: Response) {
        const { id } = req.params;

        db.all('SELECT * FROM contacto WHERE contacto = ?', [id], function (err: any, rows: any) {
            if (err) throw err
            console.log(rows);
            if (rows && rows.length > 0) {
                return res.json(rows[0])
            }
            res.status(404).json({ message: 'El contacto no fue encontrado.' });
        });
    }

    public create(req: Request, res: Response) {
        console.log(req.body);

        db.run('INSERT INTO contacto(codigo, numero) VALUES(?, ?)', [req.body.codigo, req.body.numero], function (err: any, rows: any) {
            if (err) throw err
            res.json({ message: 'El contacto fue creado.' });
        });
    }

    public update(req: Request, res: Response) {
        console.log(req.body);
        const { id } = req.params;

        db.run('UPDATE contacto SET codigo = ?, numero = ? WHERE contacto = ?', [req.body.codigo, req.body.numero, id], function (err: any, rows: any) {
            if (err) throw err
            res.json({ message: 'El contacto ' + req.params.id + ' fue actualizado.' });
        });
    }

    public delete(req: Request, res: Response) {
        const { id } = req.params;

        db.run('DELETE FROM contacto WHERE contacto = ?', [id], function (err: any, rows: any) {
            if (err) throw err
            res.json({ message: 'El contacto ' + req.params.id + ' fue eliminado.' });
        });
    }
}

const contactosController = new ContactosController();
export default contactosController;
