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
//<Map>center={71.540,66.885}, obfuscatedCenter={true}, zoom:={3}</Map>
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


          
       
        <NamedLink name="SearchPage">
           <button1 type="button" > Se uppdrag</button1>
           
          
           
        
        </NamedLink>
            
          <div>
          <h1north>Tomtebo strand</h1north>
         <h3north>Ta del av jobb på detta projekt</h3north>   
         <img src={bannerimage} alt="tomtebohero" className={css.bannerimage1} />

         
            
          </div>

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

        <div class="row">  
        <div class="container" className={css.ColumnContainer}>
          <div class="column" className={css.TwoColumns}>   
            <img alt="LogoUmeaKommun" class="LogoUmeaKommun" src={LogoUmeaKommun} className={css.LogoUmeaKommun}/>
          </div>
            
            <div class="column" className={css.TwoColumns}>   
              <img alt="LogoRikshem" class="LogoRikshem" src={LogoRikshem} className={css.LogoRikshem}/>
            </div>
        </div>
        </div>
        
  
        </container>
        </LayoutWrapperMain>
       
        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default NorthvoltPage;


