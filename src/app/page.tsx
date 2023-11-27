import { CollegeDistribution } from '@/components';
import { StateService, CoursesService } from '@/services'


const Home = async () => {

  const { data: { data: stateList } } = await StateService.getList({ populate: "colleges" })
  const { data: { data: courseList } } = await CoursesService.getList({ populate: "colleges" })

  const totalColleges = stateList.reduce((a, c) => a + (c.attributes?.colleges?.data?.length || 0), 0);

  const stateWiseChartData = stateList.map((singleState) => {
    const value = singleState.attributes?.colleges?.data.length || 0;
    const percentage = ((value / totalColleges) * 100).toFixed(2);
    return {
      id: singleState.id,
      label: `${singleState.attributes?.name || ''} (${percentage}%)`,
      value: value,
    };
  });

  const courseWiseChartData = courseList.map((course) => {
    const value = course.attributes?.colleges?.data.length || 0;
    const percentage = ((value / totalColleges) * 100).toFixed(2);
    return {
      id: course.id,
      label: `${course.attributes?.name || ''} (${percentage}%)`,
      value: value,
    };
  });


  return (
    <>
      <div style={{ maxWidth: '50rem' }}>
        <CollegeDistribution data={stateWiseChartData} heading='College distribution state wise' redirectionUrl='states' />
        <CollegeDistribution data={courseWiseChartData} heading='College distribution course wise' redirectionUrl='courses' />
      </div>
    </>
  )
}


export default Home