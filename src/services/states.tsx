import { AxiosResponse } from 'axios'
import http from './http'
import { State } from '@/types'

export default class States {
    
    static getList = (params: Object = {}): Promise<AxiosResponse<{ data: State[] }>> => http.get('/states', { params })
    
    static getDetails = (id: number, params: Object = {}): Promise<AxiosResponse<{ data: State }>> => http.get(`/states/${id}`, { params })

}