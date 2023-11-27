export interface User {
    /*    id?: number;
       email?: string; */
   
       id?: number;
       name?: string;
       email?: number;
       liked?: boolean;
   }
   
   export interface Product {
       id: number;
       name?: string;
       title?: string;
       body?: string;
       price: number;
       qty: number;
       liked?: boolean
       attributes?: {
           name?: string;
           title?: string;
           body?: string;
           price: number;
           qty: number;
       }
   }
   
   export interface Post {
       id: number;
       title: string;
       body: string;
       userId: number
   }