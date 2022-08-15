export function HomePage({ loggedInUser }) {

  return (
    <section className='home main-layout full'>
      <div className='home__inner'>
        <h1>{`Welcome ${(loggedInUser) ? loggedInUser.name : 'Guest'}`}</h1>
        <p>{
          loggedInUser ?
          `Your bitcoin balance ${loggedInUser.coins}` :
          `Login in to check your balance`
        }</p>
      </div>
    </section>
  )

}
