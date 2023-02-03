import './homeStyle.css'
import { SectionHello } from '../components/secHello/SectionHello'
import { SectionAbout } from '../components/secAbout/SectionAbout';
import { SectionSkills } from '../components/secSkills/SectionSkills';
import { SectionWork } from '../components/secWork/SectionWork';
import { SectionEdu } from '../components/secEducation/SectionEdu';
import { SectionLanguage } from '../components/secLang/SectionLang';
import { SectionProjects } from '../components/secProjects/SectionProjects';
import { SectionContact } from '../components/secContact/SectionContact';
import { Navbar } from '../components/navbar/Navbar';



export function Home() {

    return (
      <div className="homeWrap"> 
      <Navbar/>
      <SectionHello/>
      <SectionAbout/>  
      <SectionSkills/>
      <SectionWork/>
      <SectionEdu/>
      <SectionLanguage/>
      <SectionProjects/>
      <SectionContact/>
      </div>
    );
  }

  