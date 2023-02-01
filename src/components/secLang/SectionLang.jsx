import "./secLang.css"
import { LangCard } from "../cards/LangCard";
import { languages } from "../../store/Languages";

export function SectionLanguage() {
  return (
    <section className='Languages'>
    <div className='container1'>
        <div className='title'>Languages</div>
        <div className='SkillsImgContainer'>
        {languages.map((el, i)=>{
            return(
            <LangCard name = {el.name} imgSrc={el.imgSrc} level = {el.level} key={i}/>
        )})}
        </div>
    </div>
</section>
  );
}