import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contacts = () => {
   return (
      <div className='container-fluid'>
         <div className='row'>
            <div className="contacts d-xl-flex justify-content-center">
               <div className="col-12 col-sm-10 col-md-9 col-lg-8 col-xl-8 col-xxl-7 contactsBox rounded d-flex flex-column flex-xl-row p-3 justify-content-center mt-5 mx-sm-auto mb-xl-5">

                  <ul className="text-light me-md-3 ps-0 fs-5">
                     <li className="py-2 text-center"><img src={require('./img/logo.png')} title="Felföldi Gumi" alt="Felföldi Gumi" className="bg-white rounded" /></li>
                     <li className="py-2">Felföldi </li>
                     <li className="py-2">Telefon: <a href="tel:+36304712416">+36 2121212116</a></li>
                     <li className="py-2">Cím: cím 1231</li>
                     <li className="py-2">E-mail: <a href="mailto:felfoldi.f@gmail.com">asdsad@gmail.com</a></li>
                  </ul>

                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2696.6805891643794!2d21.493348515625975!3d47.476653479176235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47471a819979eb9d%3A0x306007f27433b919!2zRWJlcywgVMOzdGggw4FycMOhZCB1LiA2MSwgNDIxMQ!5e0!3m2!1shu!2shu!4v1645094363495!5m2!1shu!2shu" loading="lazy" className="gmapiFrame" title='Térkép'></iframe>
               </div>
            </div>
         </div>
      </div>
  )
}

export default Contacts