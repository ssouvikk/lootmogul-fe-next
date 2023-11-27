"use client"
import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { PieItemIdentifier, DefaultizedPieValueType } from '@mui/x-charts/models';
import { ChartProps } from '@/types';

export default function BasicPie({ data, onClick }: ChartProps) {

    const handleClick = (
        event: React.MouseEvent<SVGPathElement, MouseEvent>,
        itemIdentifier: PieItemIdentifier,
        item: DefaultizedPieValueType,
    ) => {
        if (onClick) onClick(item, event)
    };

    return (
        <PieChart
            series={[{
                data,
                innerRadius: 30,
                outerRadius: 100,
            }]}
            width={700}
            height={350}
            onClick={handleClick}
        />
    )
}