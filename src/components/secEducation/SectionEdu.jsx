import "./secEdu.css"
import { Edu } from '../../store/Education';
import { Education } from '../../components/education/Education';

export function SectionEdu() {
  return (
    <section className='education'>
    <div className='container1'>
    <div className='title'>Education</div>
    {Edu.map((el,i)=> {
        return (
            <Education key ={i} date={el.date} name = {el.name} univercity= {el.univercity}/>
        )
    })}
    </div>
    </section>
  );
}