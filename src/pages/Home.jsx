import './homeStyle.css'
import { Skills } from '../store/Skills'
import { SkillCard } from '../components/SkillCard';

export function Home() {
    console.log(Skills)
    return (
      <div className="homeWrap">
        <section className='hello'>
          <div className='container'>
          <div className='text'>
          <div className='title'>
            <p>Hello</p>
            <p>I'm Olesia</p>
          </div>
            <h1>Junior React JS developer</h1>
          </div>
          <div className='photo'></div>
          <div className='ya'></div>
          </div>
        </section>
        <section className='about'>
        <div className='container'>
          <div className='title'>
            <p>About</p>
            <p>Me</p>
          </div>
          <div className='textAbout'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum soluta alias, debitis ipsam aliquam, quasi quo qui quod, delectus fugiat omnis ea deleniti! Esse, tenetur! Est impedit quaerat corrupti debitis!
            <div className='btns'>
            <button className='blackBtn'>Download CV .doc</button>
            <button className='whiteBtn'>Download CV .pdf</button>
            </div>
          </div>
        </div>
        </section>
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
        <section className='workExp'>
             <div className='container1'>
             <div className='title'>Work Experience</div>
             </div>
        </section>
        <section className='education'>
            <div className='container1'>
            <div className='title'>Education</div>
            </div>
        </section>
      </div>
    );
  }

  