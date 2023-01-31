import './homeStyle.css'
import { Skills } from '../store/Skills'
import { SkillCard } from '../components/cards/SkillCard';
import { WorkExp } from '../store/WorkExp';
import { Experience } from '../components/experience/Experience';
import { Edu } from '../store/Education';
import { Education } from '../components/education/Education';
import { languages } from '../store/Languages';
import { LangCard } from '../components/cards/LangCard';
import { FormContactUs } from '../components/form/Form';
import { ContactInfo } from '../components/contactInfo/ContactInfo';



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
          <div className='wrapPhoto'>
          <div className='photo'></div>
          <div className='ya'></div>
          </div>
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
                    <Experience key ={i} position = {el.position} company = {el.company} field = {el.field} achvms = {el.achvms} date = {el.date}/>
                )
             })}
             </div>
        </section>
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
        <section className='Projects'>
            <div className='container1'>
                <div className='title'>Projects</div>
                <div className='prWrap'>
                    <div className='subTitle'>Test task for some awesome company</div>
                    <div className='description'> <p>1. Cards with article titles and descriptions for 100 characters. The user can click on the card to go to an article page that contains the title and full description of the selected article.</p>

                                                   <p>2. A field to filter by keyword. The user enters keywords into the field and the system displays all articles containing at least one of the keywords in the name or/and description.</p>

                                                   <p>The priority of fields: (1) names; and (2) description. The article with one match in the name is higher than the article with one match in the description.</p>

                                                    <p>The matched keywords should be highlighted with yellow color.</p>

                                                    <p>
                                                                            Please use TypeScript as the main language.
                                                        CSS preprocessors should be used.
                                                        Please use Material UI.
                                                        Showing an example of a custom hook will be a plus.
                                                        Showing an example of state management will be a big plus.

                                                    </p>
                                                    </div>
                    <a href='https://github.com/OlesyaPastushenko/TestTask'>                                
                    <button className='blackBtn'>View at GitHub</button></a>
                    <a href="https://graceful-mandazi-47eeac.netlify.app/">
                    <button className='whiteBtn'>View at Netlify</button></a>
                </div>
                <div className='prWrap'>
                    <div className='subTitle'>Website for Real Estate Agency</div>
                    <div className='description'> <p>Home page contains small filter for the object with to parameters "type of property" an "location", a slider with a number of cards which refer to the objects that have the key value "top_offer: true", each card links to an individual page with description.</p>
                    <p>Advanced filter page containes advanced filter with 6 base parameters, and results for this searsh, represented by a card with a slider of propertys' photos.</p>
                    <p>Individual page has a detailed info about the propery, google maps canvas with location, and a form. On submit the form sends information to the telegramm app. The form has simple validation.</p>
                    </div>                            
                    <a href='https://github.com/OlesyaPastushenko/homeworks/tree/MyFinalProject'>
                    <button className='blackBtn'>View at GitHub</button> </a>
                </div>
            </div>
        </section>
        <section className='contact'>
            <div className='container1'>
                <div className='title'>Contact</div>
                <div className='subTitle'>Send me a message</div>
                <div className='wrapFormAndInfo'>
                <FormContactUs/>
                <ContactInfo/>
                </div>
            </div>
        </section>
      </div>
    );
  }

  