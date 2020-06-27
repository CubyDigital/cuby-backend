import { Request, Response} from 'express';
import knex from '../database/connection';

class ProductsController {
  async index(request: Request, response: Response) {
    const products = await knex('products')

      .join('point_items', 'items.id', '=', 'point_items.item_id')
      .where('point_items.point_id', id)
      .select('products.*')

    return response.json(products);
  }
}

export default ProductsController;