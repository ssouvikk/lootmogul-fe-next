"use client"
import { Chart } from '@/components'
import { ChartProps } from '@/types'
import { useRouter } from 'next/navigation'

interface Props extends ChartProps {
    heading: string
}

const StateWiseCollegeChart = ({ data, heading }: Props) => {
    const router = useRouter()
    return (
        <>
            <h2> {heading} </h2>
            <Chart data={data} onClick={(item) => router.push(`/states/${item?.id}`)} />
        </>
    )
}

export default StateWiseCollegeChart