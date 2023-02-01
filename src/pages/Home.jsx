import './homeStyle.css'
import { FormContactUs } from '../components/form/Form';
import { ContactInfo } from '../components/contactInfo/ContactInfo';
import { SectionHello } from '../components/secHello/SectionHello'
import { SectionAbout } from '../components/secAbout/SectionAbout';
import { SectionSkills } from '../components/secSkills/SectionSkills';
import { SectionWork } from '../components/secWork/SectionWork';
import { SectionEdu } from '../components/secEducation/SectionEdu';
import { SectionLanguage } from '../components/secLang/SectionLang';
import { SectionProjects } from '../components/secProjects/SectionProjects';



export function Home() {

    return (
      <div className="homeWrap"> 
      <SectionHello/>
      <SectionAbout/>  
      <SectionSkills/>
      <SectionWork/>
      <SectionEdu/>
      <SectionLanguage/>
      <SectionProjects/>
        <section className='contact'>
            <div className='container1'>
                <div className='title'>Contact</div>
                <div className='subTitle'>Send me a message</div>
                <div className='wrapFormAndInfo'>
                <FormContactUs/>
                <ContactInfo/>
                </div>
            </div>
        </section>
      </div>
    );
  }

  