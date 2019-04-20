import { Request, Response} from 'express';

import pool from '../database';

class FilmsController {
    public async list (req: Request, res: Response) {
        const films = await pool.query('SELECT * FROM films');
        res.json(films);
    }
    public async getOne (req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const films = await pool.query('SELECT * FROM films WHERE id = ?', [id]);
        if (films.length > 0 ){
            return res.json(films[0]);
        }
        res.status(404).json({text: "The film doesn't exists"});
    }
    public async create (req : Request ,res: Response): Promise<void> {
        await pool.query("INSERT INTO films set ?", [req.body]);
        res.json({message: 'Film saved'});
    }
    public async update (req : Request ,res: Response): Promise<void>{
        const { id } = req.params;
        await pool.query('UPDATE films set ? WHERE id = ?',[req.body, id]);
        res.json({message: 'Film was update'});
    }
    public async delete (req : Request ,res: Response): Promise<void>{
        const { id } = req.params;
        await pool.query('DELETE FROM films WHERE ID = ?', [id]);
        res.json({message: ' The film was deleted'});
    }
    
}
const filmsController = new FilmsController();
export default filmsController;