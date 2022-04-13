import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const About = () => {
   return (
      <div className='container-fluid'>
         <div className="row">
               
            <div className="aboutBg">
                  
               <div className="about col-12 col-sm-10 col-lg-8 col-xxl-6 mx-auto my-5 rounded p-3">
                  <h2 className='text-center text-light'>Bemutatkozás</h2>
                  <div className="logo text-center mb-2">
                     <img src={require('./img/logo.png')} title="Felföldi Gumi" alt="Felföldi Gumi" className="bg-white rounded" />
                  </div>
                  <div className="aboutMe text-light">
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam fuga perferendis et, deleniti obcaecati doloremque hic distinctio consectetur eius tempore! Quae dignissimos nobis, iure corrupti inventore itaque quibusdam est sit omnis vitae! Ea natus ab, rerum maxime doloribus, atque assumenda dolores tenetur illo placeat earum sed, ipsam quia? Fuga quod expedita quasi temporibus, consequatur ea nulla animi, recusandae alias voluptatem quis voluptatibus consequuntur eveniet voluptas at accusamus odio ex atque sequi et eius quae! Laboriosam corrupti, placeat in ea vel libero sed numquam obcaecati ratione optio cupiditate doloribus sequi aperiam dolorum accusamus dicta fugit odio iste. Sapiente mollitia quidem tempore ea impedit nam? Amet iste a soluta dolorum, facere, quam qui officiis distinctio quaerat possimus numquam vero, vel quis repudiandae! Aliquam autem similique officiis, voluptatem iste quos provident illo vel expedita fugit deserunt, totam, necessitatibus magnam. Provident sint praesentium esse fugit quidem asperiores molestiae blanditiis, aperiam placeat distinctio delectus optio?</p>
                  </div>
                  <div className='imgSlide mx-auto'>
                  <Carousel>
                     <Carousel.Item interval={3000}>
                     <img
                        className="d-block w-100"
                        src={require('./img/slide1.jpg')}
                        alt=""
                     />
                     </Carousel.Item>
                     <Carousel.Item interval={3000}>
                     <img
                        className="d-block w-100"
                        src={require('./img/slide2.jpg')}
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