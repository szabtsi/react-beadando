import React from 'react';
import { Table } from 'react-bootstrap';
import brandLogo from './img/logo.png';

const Services = () => {
   return (
      <div className='container-fluid'>
         <div className='row'>
            <div className="pricesBg">
               <div className="prices rounded col-12 col-md-9 col-xl-7 col-xxl-6 mx-auto mb-5">
                  <div className="tableBox mt-5 text-light p-3">
                     <h2 className='text-center'>Szolgáltatások</h2>
                     <h3>Személyautó <img src={brandLogo} title="Felföldi Gumi" alt="Felföldi Gumi" className="bg-white rounded float-end" /></h3>

                     <Table className='text-light'>
                        <tbody>
                           <tr>
                                 <td>Gumiszerelés</td>
                                 <td>423432 Ft/db</td>
                           </tr>
                           <tr>
                                 <td>Gumijavítás</td>
                                 <td>312123 Ft/db</td>
                           </tr>
                           <tr>
                                 <td>Centírozás</td>
                                 <td>32234 Ft/db</td>
                           </tr>
                        </tbody>
                     </Table>

                     <h3 className="mt-5">Mezőgazdasági gépek</h3>

                     <Table className="text-light">
                        <tbody>
                           <tr>
                                 <td>Gumiszerelés</td>
                                 <td>423432 Ft/db</td>
                           </tr>
                           <tr>
                                 <td>Gumijavítás</td>
                                 <td>312123 Ft/db</td>
                           </tr>
                           <tr>
                                 <td>Centírozás</td>
                                 <td>32234 Ft/db</td>
                           </tr>
                           <tr>
                                 <td>Tömlőcsere</td>
                                 <td>32234 Ft/db</td>
                           </tr>
                        </tbody>
                     </Table>

                     <h3 className="mt-5">Egyéb szolgáltatások</h3>
                     <Table className="text-light">
                        <tbody>
                           <tr>
                                 <td>Ózonos tisztítás</td>
                                 <td>423432 Ft/db</td>
                           </tr>
                           <tr>
                                 <td colSpan="2">
                                    Ózonos tisztítás során egy ózongenerátort helyezünk el az atutó utasterében. Az ózon képes elpusztítani a nemkívánatos kórokozókat, baktériumokat, gombákat az autó utasterében, valamint a gépjármű levegő-keringtető rendszerében, beleértve a klímát is. A tisztítás kb. 30 percet vesz igénybe, ami után az autó szellőztetése szükséges.
                                 </td>
                           </tr>
                           <tr>
                                 <td>Gumiápolás</td>
                                 <td>312123 Ft/db</td>
                           </tr>
                           <tr>
                                 <td colSpan="2">
                                    Gumiápoló szereink segítségével a használt gumikat szinte újjá varázsolhatjuk. A kezelés során a gumiápoló anyag a felületi mikro-repedéseket eltömíti, így ellenállóbbá válik a külső hatások ellen. A gumik egy mélyebb, fekete színt is kapnak, ami szinte egy vadonat új külsőt ad a guminak.
                                 </td>
                           </tr>
                        </tbody>
                        <tfoot>
                           <tr>
                                 <td colSpan="2">
                                    Bankkártyás fizetésre is van lehetőség. Áraink forintban értendőek, és tartalmazzák az ÁFA értékét.
                                 </td>
                           </tr>
                        </tfoot>
                     </Table>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Services