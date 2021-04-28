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
import TomteboStrand from './images/TomteboStrand.png'; 







window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

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
          
       
        <div class="row">
        <div class="container" className={css.ColumnContainerBanner}> 
             <h1north>Tomtebo strand</h1north>
            <div>
              <h3north>Ta del av jobb på detta projekt</h3north>           
            </div>

              <a class="SectionHero_heroButton__1Am0q SectionHero_animation__3or2Z" href="/s?address=Sweden&bounds=69.0599269995724%2C24.1933684832876%2C55.280224001785%2C10.8383668128319&keywords=Tomtebo%20Strand">
                <span>Se uppdrag</span></a>

        </div>
        
        
        </div>
        </div>
      
        </container>
       
      <section>
        <div class="row">  
        <div class="container" className={css.ColumnContainer}>
          <div class="column" className={css.TwoColumns}>
            <img alt="TomteboStrand" class="TomteboStrand" src={TomteboStrand} className={css.TomteboStrand}/>   
          
          
          </div>

            <div class="column" className={css.TwoColumns}>   
              <div class="container" className={css.ProjectData}>
              <table id="details">
                <tr>
                <th colspan="2">Projektdetaljer</th>
             
                </tr>
                <tr>
                  <td>Projektstatus :</td>
                  <td>Planeringsfas</td>
                </tr>
                <tr>
                  <td> Budget för projekt :</td>
                  <td>400mkr</td>
                </tr>
                <tr>
                  <td>Projektperiod :</td>
                  <td>2021/01 - 2023/02</td>
                </tr>
                <tr>
                  <td>Lokalfaktor :</td>
                  <td>Hög</td>
                </tr>
                <tr>
                  <td>Hållbarhetsfaktor :</td>
                  <td>Hög</td>
                </tr>
                <tr>
                  <td>Plats :</td>
                  <td>Västerbotten, Umeå</td>
                </tr>
              </table>
              </div>
            </div>
        </div>
        </div>
      </section>

      <div class="row">
      <div class="container" className={css.Containercontact}>
          <div class="column" className={css.TwoColumnscontact}>
             <h1north> Om projektet</h1north>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id suscipit massa. Duis mollis felis at tincidunt venenatis. Vivamus semper finibus arcu, eu pulvinar augue facilisis ut. Donec id sapien purus. In hac habitasse platea dictumst. Aliquam accumsan eget orci sed porta. Nullam nec lacus pellentesque, placerat ante sit amet, tristique nisi.</p>           
                   </div>
                   </div> 
  
          <div class="column" clasName={css.TwoColumnscontact}>
        

          <div class="container" className={css.contactinformation}>
          <tr><h3north>Kontakt</h3north></tr> 
          <p><tr>Namn Efternamn</tr>

          <tr>Namn@företag.se</tr>

          <tr>073 XXX XX XX</tr> </p>

          </div>
    
          </div>
        </div>
        </div>
        
        
    







      <section>
        <div class="row">  
        <div class="container" className={css.Containercontact}>
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
        
        
        </LayoutWrapperMain>
       
        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default NorthvoltPage;


