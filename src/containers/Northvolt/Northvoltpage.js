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
import LogoUmeaKommun from './images/company_umea.d81d3afd.png';

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
        <NamedLink name="SearchPage">
           <button1 type="button" > Se uppdrag</button1>
          
           
        
        </NamedLink>
            
          <div>
          <h1north>Northvolt</h1north>
         <h3north>subheading</h3north>   
         

         
            
          </div>

        <div class="row">  
          <div class="column" className={css.CompanyColumns}>   
            <img alt="LogoUmeaKommun" class="LogoUmeaKommun" src={LogoUmeaKommun} className={css.LogoUmeaKommun}/>
          </div>
            
            <div class="column" className={css.CompanyColumns}>   
              <img alt="UmeaKommunTwo" src="/static/media/location_umea.ef030ce7.jpg"className={css.CompanyLogos}/>
            </div>

            <div class="column" className={css.CompanyColumns}>   
              <img alt="UmeaKommunThree" src="/static/media/location_umea.ef030ce7.jpg"className={css.CompanyLogos}/>
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


