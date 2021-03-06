import { ecommerceAPI } from '../../apis/ecommerceAPI'
import { IProductService } from '../IProductService'

export class ProductService implements IProductService {
  async list(): Promise<any[]> {
    try {
      const res = await ecommerceAPI.get('/products', {})

      return res.data
    } catch (error) {
      return error?.response?.data
    }
  }
}
