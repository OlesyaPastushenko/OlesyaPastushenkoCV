import "./secWork.css"
import { Experience } from "../experience/Experience";
import { WorkExp } from "../../store/WorkExp";
import AOS from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
export function SectionWork() {
  useEffect(()=> {
    AOS.init({duration: 500})
},[])
  return (
    <section id="work"className='workExp'>
    <div className='container1'>
    <div className='title' data-aos='fade-right'>Work Experience</div>
    { WorkExp.map((el, i)=>{ 
       return (
           <Experience key ={i} position = {el.position} company = {el.company} field = {el.field} achvms = {el.achvms} date = {el.date}/>
       )
    })}
    </div>
    </section> 
  );
}