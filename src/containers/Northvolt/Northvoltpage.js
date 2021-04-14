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

} from '../../components';

import css from './Northvoltpage.module.css';
import bannerimage from './images/background-1440.jpg'; 
import LogoUmeaKommun from './images/company_umea.d81d3afd.png'; 
import LogoRikshem from './images/rikshem.png'; 
import LogoSkanska from './images/skanska.png'; 



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

        <div class="row">  
        <div class="container" className={css.ProjectLogos}>
          <div class="column" className={css.CompanyColumns}>   
            <img alt="LogoUmeaKommun" class="LogoUmeaKommun" src={LogoUmeaKommun} className={css.LogoUmeaKommun}/>
          </div>
            
            <div class="column" className={css.CompanyColumns}>   
              <img alt="LogoRikshem" class="LogoRikshem" src={LogoRikshem} className={css.LogoRikshem}/>
            </div>

            <div class="column" className={css.CompanyColumns}>   
              <img alt="LogoSkanska" class="LogoSkanska" src={LogoSkanska} className={css.LogoSkanska}/>
            </div>
        </div>
        </div>
        
  
        
        </LayoutWrapperMain>
       
        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default NorthvoltPage;


