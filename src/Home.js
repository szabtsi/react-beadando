import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
   return (
      <div className="home">
         <div className="d-flex flex-column col-12 col-sm-5 col-md-4 col-lg-4 mx-auto col-xl-3 col-xxl-3 mt-5 text-light homeBox">
            <h1>Gumijavítás</h1>
            <h2 className='mt-4'>Időpont foglalás:</h2>
            <a href="tel:+363047116" className='telLink mt-4'>+363047116</a>
            <a href='email:asd@asd.hu' className='telLink'>email@email.hu</a>
         </div>
      </div>
  )
}

export default Home