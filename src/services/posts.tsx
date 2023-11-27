import { AxiosResponse } from 'axios'
import http from './http'
import { Post, Product } from '@/types'

export default class Posts {
    static getList = (): Promise<AxiosResponse<{ data: Product[] }>> => http.get('/products')
}