import "./secWork.css"
import { Experience } from "../experience/Experience";
import { WorkExp } from "../../store/WorkExp";
export function SectionWork() {
  return (
    <section id="work"className='workExp'>
    <div className='container1'>
    <div className='title'>Work Experience</div>
    { WorkExp.map((el, i)=>{ 
       return (
           <Experience key ={i} position = {el.position} company = {el.company} field = {el.field} achvms = {el.achvms} date = {el.date}/>
       )
    })}
    </div>
    </section> 
  );
}