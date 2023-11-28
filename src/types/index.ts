import { DefaultizedPieValueType } from '@mui/x-charts/models';
export interface ChartProps {
    data: { id: number, value: number, label: string }[],
    onClick?: (item?: DefaultizedPieValueType, event?: React.MouseEvent<SVGPathElement, MouseEvent>) => void,
}

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
        colleges?: {
            data: College[]
        }
    }
}

export interface College {
    id: number;
    attributes?: {
        name: string;
        slug: string;
        courses: Course[]
        state: State
        city: City
    }
}

export interface Course {
    id: number;
    attributes?: {
        name: string;
        slug: string;
        colleges?: {
            data: College[]
        }
    }
}