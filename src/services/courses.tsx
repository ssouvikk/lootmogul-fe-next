import { AxiosResponse } from 'axios'
import http from './http'
import { Course } from '@/types'

export default class Courses {
    static getList = (params: Object = {}): Promise<AxiosResponse<{ data: Course[] }>> => http.get('/courses', { params })
}