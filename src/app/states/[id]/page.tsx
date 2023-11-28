import { CollegeDistribution, DataTable } from '@/components'
import { StateService, } from '@/services'

const headers = [
    // { disablePadding: boolean, id: 'name', label: string, numeric: boolean, },
    { key: 'name', label: 'Name'  },
    { key: 'pin', label: 'Pin' },
    { key: 'establishedYear', label: 'Established Year' },
    { key: 'rating', label: 'Rating' },
]


const StateDetails = async ({ params }: { params: { id: number } }) => {
    const { data: { data: state } } = await StateService.getDetails(params.id, { populate: ["cities.colleges", 'colleges'] })

    const totalColleges = state.attributes?.cities?.data.reduce((a, c) => a + (c.attributes?.colleges?.data?.length || 0), 0) || 0

    const cityWiseChartData = totalColleges > 0 ?
        state.attributes?.cities?.data.map((city) => {
            const value = city.attributes?.colleges?.data.length || 0;
            const percentage = ((value / totalColleges) * 100).toFixed(2);
            return {
                id: city.id,
                label: `${city.attributes?.name || ''} (${percentage}%)`,
                value: value,
            };
        }) || []
        : []


    console.log('=============')
    console.log(state.attributes?.colleges?.data.map(c => ({ id: c.id, name: c.attributes?.name })))

    return (
        <div className='p-10'>
            <h1 className='text-4xl'> {state.attributes?.name} </h1>
            <CollegeDistribution data={cityWiseChartData} heading='College distribution city wise' redirectionUrl='cities' />
            <h2>College List</h2>
            <DataTable

            />
        </div>
    )
}

export default StateDetails