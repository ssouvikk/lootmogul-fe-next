import { Chart } from '@/components'
import { StateService } from '@/services'

const Home = async () => {

  const { data: { data } } = await StateService.getList({ populate: "colleges" })

  const totalColleges = data.reduce((a, c) => a + (c.attributes?.colleges?.data?.length || 0), 0);

  const chartData = data.map((singleState) => {
    const value = singleState.attributes?.colleges?.data.length || 0;
    const percentage = ((value / totalColleges) * 100).toFixed(2);
    return {
      id: singleState.id,
      label: `${singleState.attributes?.name || ''} (${percentage}%)`,
      value: value,
    };
  });


  return (
    <>
      <div style={{ maxWidth: '50rem' }}>
        <Chart data={chartData} />
      </div>
    </>
  )
}


export default Home