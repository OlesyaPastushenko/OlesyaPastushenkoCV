import './homeStyle.css'
import { Skills } from '../store/Skills'
import { SkillCard } from '../components/SkillCard';

export function Home() {
    console.log(Skills)
    return (
      <div className="homeWrap">
        <section>
          <div className='text'>
          <div className='title'>
            <p>Hello</p>
            <p>I'm Olesia</p>
          </div>
            <h1>Junior React JS developer</h1>
          </div>
          <div className='photo'></div>
        </section>
        <section className='aboutMe'>
          <div className='title'>
            <p>About</p>
            <p>Me</p>
          </div>
          <div className='textAbout'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum soluta alias, debitis ipsam aliquam, quasi quo qui quod, delectus fugiat omnis ea deleniti! Esse, tenetur! Est impedit quaerat corrupti debitis!
            <button>Download CV .doc</button>
            <button>Download CV .pdf</button>
          </div>
        </section>
        <section className='skills'>
            <div>
                {Skills.map((el, i)=>{
                    return(
                    <SkillCard name = {el.name} imgSrc={el.imgSrc} key={i}/>
                )})}
            </div>
        </section>
      </div>
    );
  }

  