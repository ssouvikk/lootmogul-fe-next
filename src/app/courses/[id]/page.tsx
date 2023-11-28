import { CollegeDistribution } from '@/components'
import { CoursesService, } from '@/services'

const CourseDetails = async ({ params }: { params: { id: number } }) => {
    const { data: { data: course } } = await CoursesService.getDetails(params.id, {
        populate: {
            colleges: {
                populate: ['state'],
                filter: {
                    state: { id: 2 }
                }
            }
        }
    })
    console.log('=============')
    console.log(course.attributes?.colleges?.data.map(c => ({ id: c.id, name: c.attributes?.name, })))
    console.log(course.attributes?.colleges?.data.map(c => c.attributes?.state ))
    

    // const totalColleges = course.attributes?.colleges?.data.reduce((a, c) => a + (c.attributes?.colleges?.data?.length || 0), 0) || 0

    // const cityWiseChartData = totalColleges > 0 ?
    //     state.attributes?.cities?.data.map((city) => {
    //         const value = city.attributes?.colleges?.data.length || 0;
    //         const percentage = ((value / totalColleges) * 100).toFixed(2);
    //         return {
    //             id: city.id,
    //             label: `${city.attributes?.name || ''} (${percentage}%)`,
    //             value: value,
    //         };
    //     }) || []
    //     : []


    return (
        <div>
            <h1>Page is under development</h1>
            {/* <h1> {state.attributes?.name} </h1> */}
            {/* <CollegeDistribution data={cityWiseChartData} heading='College distribution city wise' redirectionUrl='cities' /> */}
        </div>
    )
}

export default CourseDetails