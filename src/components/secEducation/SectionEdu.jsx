import "./secEdu.css"
import { Edu } from '../../store/Education';
import { Education } from '../../components/education/Education';
import AOS from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

export function SectionEdu() {
  useEffect(()=> {
    AOS.init({duration: 500})
},[])
  return (
    <section id='edu'className='education'>
    <div className='container1'>
    <div className='title' data-aos='fade-right'>Education</div>
    {Edu.map((el,i)=> {
        return (
            <Education key ={i} date={el.date} name = {el.name} univercity= {el.univercity}/>
        )
    })}
    </div>
    </section>
  );
}