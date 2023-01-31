import './homeStyle.css'
import { Skills } from '../store/Skills'
import { SkillCard } from '../components/SkillCard';
import { WorkExp } from '../store/WorkExp';
import { Experience } from '../components/Experience';

export function Home() {

    const onDownloadPdf = () =>{
        fetch('Junior_react_developer.pdf')
        .then(res=>{
            res.blob()
            .then(blob=>{
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = "Junior_react_developer.pdf";
                alink.click()
            })
        })
    }

    const onDownloadDoc = () =>{
        fetch('Junior_react_developer.docx')
        .then(res=>{
            res.blob()
            .then(blob=>{
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = "Junior_react_developer.docx";
                alink.click()
            })
        })
    }

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
            <button onClick={onDownloadDoc} className='blackBtn'>Download CV .doc</button>
            <button onClick={onDownloadPdf} className='whiteBtn'>Download CV .pdf</button>
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
             { WorkExp.map((el, i)=>{ 
                return (
                    <Experience position = {el.position} company = {el.company} field = {el.field} achvms = {el.achvms} date = {el.date}/>
                )
             })}
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

  