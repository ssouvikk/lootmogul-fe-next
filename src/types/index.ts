export interface State {
    id: number;
    attributes?: {
        name: string;
        slug: string;
        cities?: {
            data: City[]
        }
        colleges?: {
            data: College[]
        }
    }
}

export interface City {
    id: number;
    attributes?: {
        name: string;
        slug: string;
        state?: {
            data: City
        }
    }
}

export interface College {
    id: number;
    attributes?: {
        name: string;
        slug: string;
    }
}