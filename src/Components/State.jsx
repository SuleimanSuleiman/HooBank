import { stats } from "../constants/index"

function State() {
  return (
    <section className='w-full flex justify-between flex-wrap items-center sm:mb-20 mb-6'>
      {
        stats.map((state, index) => {
          return (
            <div className="flex-1 flex justify-start items-center flex-row m-3" key={state.id}>
              <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px]  xs:leading-[53.16px] leading-[43.16px] text-white">{state.value}</h4>
              <p className={`text-gradient font-poppins font-normal   xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3`}>{state.title}</p>
            </div>
          )
        })
      }
    </section>
  )
}

export default State
