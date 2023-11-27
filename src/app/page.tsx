import { Chart } from '@/components'
// import { StateService } from '@/services'

const Home = async () => {

  // const { data } = await StateService.getList({ populate: "colleges" })
  // console.log('===========================')
  // console.log(data.data)

  return (
    <>
      <div style={{ maxWidth: '50rem' }}>
        <Chart />
      </div>
    </>
  )
}


export default Home