import "./secSkills.css"
import { Skills } from '../../store/Skills'
import { SkillCard } from '../../components/cards/SkillCard';

export function SectionSkills() {
  return (
     <section className='skills'>
        <div className='container1'>
            <div className='title'>Skills</div>
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