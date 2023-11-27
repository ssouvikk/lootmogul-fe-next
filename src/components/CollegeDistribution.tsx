"use client"
import { Chart } from '@/components'
import { ChartProps } from '@/types'
import { useRouter } from 'next/navigation'

interface Props extends ChartProps {
    heading: string
    redirectionUrl: string
}

const StateWiseCollegeChart = ({ data, heading, redirectionUrl }: Props) => {
    const router = useRouter()
    return (
        <>
            <h2> {heading} </h2>
            <Chart data={data} onClick={(item) => router.push(`/${redirectionUrl}/${item?.id}`)} />
        </>
    )
}

export default StateWiseCollegeChart