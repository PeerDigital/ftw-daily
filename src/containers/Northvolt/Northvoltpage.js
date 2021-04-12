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
  Formattedmessage,
} from '../../components';

import css from './Northvoltpage.module.css';
import image from '/Users/adamfalkenberg/Documents/GitHub/ftw-daily/src/assets/background-1440 (old).jpg'; 

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
         <img src={image} alt="tomtebohero" />

         
            
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
