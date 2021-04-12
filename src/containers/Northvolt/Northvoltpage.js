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
          <div>
          <h1north>Northvolt</h1north> 
         <h3north>subheading</h3north>
         <p>paragraf</p>
         <img src={image} alt="tomtebohero" />


      
            <NamedLink name="LandingPage">Go to home page</NamedLink> or
            <ExternalLink href="https://google.com">
              Go to Google
            </ExternalLink>
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



