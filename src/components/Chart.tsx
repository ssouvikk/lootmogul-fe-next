"use client"
import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

interface Props {
    data: { id: number, value: number, label: string }[],
}


export default function BasicPie({ data }: Props) {
    return (
        <PieChart
            series={[{
                data,
                innerRadius: 30,
                outerRadius: 100,
            }]}
            width={700}
            height={350}
        />
    )
}