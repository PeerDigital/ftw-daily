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
          <h1north>Northvolt</h1north>
          <div>
          <SectionHero className={css.heronorth}/>
            <NamedLink name="LandingPage">Go to home page</NamedLink> or
            <ExternalLink href="https://google.com">
              Go to Google
            </ExternalLink>
          </div>

        <div class="row">  
          <div class="column" className={css.CompanyColumns}>   
            <img alt="UmeaKommunOne" class="SecondLogo" src="/static/media/location_umea.ef030ce7.jpg" className={css.CompanyLogos}/>
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


