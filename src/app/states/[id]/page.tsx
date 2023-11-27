import { CollegeDistribution } from '@/components'
import { StateService, } from '@/services'

const StateDetails = async ({ params }: { params: { id: number } }) => {
    const { data: { data: state } } = await StateService.getDetails(params.id, { populate: "cities.colleges" })

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


    return (
        <div>
            <h1> {state.attributes?.name} </h1>
            <CollegeDistribution data={cityWiseChartData} heading='College distribution city wise' redirectionUrl='cities' />
        </div>
    )
}

export default StateDetails