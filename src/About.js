import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import brandLogo from './img/logo.png';
import slideOne from './img/slide1.jpg';
import slideTwo from './img/slide2.jpg';

const About = () => {
   return (
      <div className='container-fluid'>
         <div className="row">
               
            <div className="aboutBg">
                  
               <div className="about col-12 col-sm-10 col-lg-8 col-xxl-6 mx-auto my-5 rounded p-3">
                  <h2 className='text-center text-light'>Bemutatkozás</h2>
                  <div className="logo text-center mb-2">
                     <img src={brandLogo} title="Felföldi Gumi" alt="Felföldi Gumi" className="bg-white rounded" />
                  </div>
                  <div className="aboutMe text-light">
                     <p>A Felföldi Gumijavító műhely 2003-ban jött létre családi vállalkozásként, Ebesen. Az évek során a folyamatosan bővülő, és fejlődő gépparkkal és gumiszerelési- javítási technikákkal a lehető legprecízebben vagyunk képesek a hibás gumiabroncsokat megjavítani, illetve kerekeket kiegyensúlyozni. Műhelyünk alkalmas mezőgazdasági kerekek javítására is. Gumiszerelési szolgáltatások mellett már 5 éve foglalkozunk ózonos tisztítással, illetve gumi és felni kozmetikai szolgáltatással is. 
                     </p>
                  </div>
                  <div className='imgSlide mx-auto'>
                  <Carousel>
                     <Carousel.Item interval={3000}>
                     <img
                        className="d-block w-100"
                        src={slideOne}
                        alt=""
                     />
                     </Carousel.Item>
                     <Carousel.Item interval={3000}>
                     <img
                        className="d-block w-100"
                        src={slideTwo}
                        alt=""
                     />
                     </Carousel.Item>
                  </Carousel>
                  </div>
               </div>
            </div>
         </div>
      </div>
  )
}

export default About