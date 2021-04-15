import React from 'react';
import { StaticPage, TopbarContainer } from '..';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  NamedLink,
  ExternalLink,
  Button,
  PrimaryButton,
  SectionHero,
  SectionMain,
  Map,
} from '../../components';

import { StaticMap, DynamicMap, isMapsLibLoaded } from '../../components/Map/MapboxMap';


import css from './Northvoltpage.module.css';
import bannerimage from './images/background-1440.jpg'; 
import LogoUmeaKommun from './images/company_umea.d81d3afd.png'; 
import LogoRikshem from './images/rikshem.png'; 
import LogoSkanska from './images/skanska.png';
import TomteboStrand from './images/TomteboStrand.png'; 




const NorthvoltPage = () => {
  return (
    
    <StaticPage
      className={css.root}
      title="Northvolt"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'AboutPage',
        description: 'Description of this page',
        name: 'About page',
      }}
      >
    
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>
        

       
        <LayoutWrapperMain>
  
        <container className={css.bodyfull}>     
        <img src={bannerimage} alt="tomtebohero" className={css.bannerimage1} />
      
    
          <div class="container" className={css.bannertext}>
          
          <h1north>Tomtebo strand</h1north>
          
          <div>
          <h3north>Ta del av jobb på detta projekt</h3north>   
         
         </div>

         <NamedLink name="SearchPage">
           <button1 type="button" > Se uppdrag</button1>
        </NamedLink>
        </div>
       
      
        </container>
      <section>
        <div class="row">  
        <div class="container" className={css.ColumnContainer}>
          <div class="column" className={css.ThreeColumns}>   
            <img alt="LogoUmeaKommun" class="LogoUmeaKommun" src={LogoUmeaKommun} className={css.LogoUmeaKommun}/>
          </div>
            
            <div class="column" className={css.ThreeColumns}>   
              <img alt="LogoRikshem" class="LogoRikshem" src={LogoRikshem} className={css.LogoRikshem}/>
            </div>

            <div class="column" className={css.ThreeColumns}>   
              <img alt="LogoSkanska" class="LogoSkanska" src={LogoSkanska} className={css.LogoSkanska}/>
            </div>
        </div>
        </div>
      </section>
      <section>
        <div class="row">  
        <div class="container" className={css.ColumnContainer}>
          <div class="column" className={css.TwoColumns}>
            <img alt="TomteboStrand" class="TomteboStrand" src={TomteboStrand} className={css.TomteboStrand}/>   
          </div>
            
            <div class="column" className={css.TwoColumns}>   
              <div class="container" className={css.ProjectData}>
              <table id="status">
                <tr>
                  <th>Company</th>
                  <th>Contact</th>
                </tr>
                <tr>
                  <td>Alfreds Futterkiste</td>
                  <td>Maria Anders</td>
                </tr>
                <tr>
                  <td>Berglunds snabbköp</td>
                  <td>Christina Berglund</td>
                </tr>
                <tr>
                  <td>Centro comercial Moctezuma</td>
                  <td>Francisco Chang</td>
                </tr>
                <tr>
                  <td>Ernst Handel</td>
                  <td>Roland Mendel</td>
                </tr>
                <tr>
                  <td>Island Trading</td>
                  <td>Helen Bennett</td>
                </tr>
                <tr>
                  <td>Königlich Essen</td>
                  <td>Philip Cramer</td>
                </tr>
              </table>
              </div>
            </div>
        </div>
        </div>
      </section>

        
        
        </LayoutWrapperMain>
       
        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default NorthvoltPage;


