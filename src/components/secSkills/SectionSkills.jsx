import "./secSkills.css"
import { Skills } from '../../store/Skills'
import { SkillCard } from '../../components/cards/SkillCard';
import AOS from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";


export function SectionSkills() {
useEffect(()=> {
    AOS.init({duration: 500})
},[])

  return (
     <section id='skills'className='skills'>
        <div className='container1'>
            <div className='title' data-aos='fade-right'>Skills</div>
            <div className='SkillsImgContainer'>
                {Skills.map((el, i)=>{
                    return(
                    <SkillCard name = {el.name} imgSrc={el.imgSrc} key={i}/>
                )})}
            </div>
        </div>
        </section>
  );
}