import { BtcDaily } from "../cmps/charts/BtcDaily"

export function HomePage() {

  return (
    <section className='home main-layout full'>
      <div className='home__inner'>
        <h1>Overview</h1>
        <BtcDaily />
      </div>
    </section>
  )

}
