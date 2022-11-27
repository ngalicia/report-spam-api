import { Request, Response } from 'express';

import db from '../database';

class DenunciasController {

    public index(req: Request, res: Response) {
        let query: string = `SELECT dn.denuncia, dn.nombre, dn.comentario, dn.valoracion, tp.nombre tipo_nombre
                                , ct.codigo, ct.numero
                            FROM denuncia dn
                            INNER JOIN tipo tp ON dn.tipo = tp.tipo
                            INNER JOIN contacto ct ON dn.contacto = ct.contacto
                            ORDER BY tp.nombre, ct.codigo, ct.numero`;

        db.all(query, function (err: any, rows: any) {
            if (err) throw err
            console.log(rows);
            res.send(rows);
        });
    }

    public search(req: Request, res: Response) {
        const { id } = req.params;

        let query: string = `SELECT dn.denuncia, dn.nombre, dn.comentario, dn.valoracion
                                , dn.tipo, dn.contacto, dn.created_at
                            FROM denuncia dn
                            WHERE dn.denuncia = ?`

        db.all(query, [id], function (err: any, rows: any) {
            if (err) throw err
            console.log(rows);
            if (rows && rows.length > 0) {
                return res.json(rows[0])
            }
            res.status(404).json({ message: 'La denuncia no fue encontrada.' });
        });
    }

    public create(req: Request, res: Response) {
        console.log(req.body);

        db.run('INSERT INTO denuncia(nombre, comentario, valoracion, tipo, contacto) VALUES(?, ?, ?, ?, ?)', [req.body.nombre, req.body.comentario, req.body.valoracion, req.body.tipo, req.body.contacto], function (err: any, rows: any) {
            if (err) throw err
            res.json({ message: 'La denuncia fue creada.' });
        });
    }

    public update(req: Request, res: Response) {
        console.log(req.body);
        const { id } = req.params;

        db.run('UPDATE denuncia SET nombre = ?, comentario = ?, valoracion = ?, tipo = ?, contacto = ? WHERE denuncia = ?', [req.body.nombre, req.body.comentario, req.body.valoracion, req.body.tipo, req.body.contacto, id], function (err: any, rows: any) {
            if (err) throw err
            res.json({ message: 'La denuncia ' + req.params.id + ' fue actualizada.' });
        });
    }

    public delete(req: Request, res: Response) {
        const { id } = req.params;

        db.run('DELETE FROM denuncia WHERE denuncia = ?', [id], function (err: any, rows: any) {
            if (err) throw err
            res.json({ message: 'La denuncia ' + req.params.id + ' fue eliminada.' });
        });
    }
}

const denunciasController = new DenunciasController();
export default denunciasController;
