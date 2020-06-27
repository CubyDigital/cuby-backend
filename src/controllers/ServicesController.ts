import { Request, Response} from 'express';
import knex from '../database/connection';

class ServicesController {
  async index(request: Request, response: Response) {
    const services = await knex('services').select('*')
    return response.json(services);
  }
}

export default ServicesController;