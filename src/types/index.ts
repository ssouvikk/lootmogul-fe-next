export interface State {
    id: number;
    attributes?: {
        name: string;
        slug: string;
        cities? : {
            data: City[]
        }
    }
}

export interface City {
    id: number;
    attributes?: {
        name: string;
        slug: string;
        state? : {
            data: City
        }
    }
}

