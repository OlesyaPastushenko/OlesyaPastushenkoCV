import { useState } from "react";
import "./secProjects.css"

export function SectionProjects() {
  const [display1, setDisplay1] = useState(false)
  const [display2, setDisplay2] = useState(false)
  const onClickDisplay1 =()=> {
    setDisplay1(!display1)
  }
  const onClickDisplay2 =()=> {
    setDisplay2(!display2)
  } 
  return (
    <section className='Projects'>
    <div className='container1'>
        <div className='title'>Projects</div>
        <div className="wrapSubAndBtn">
        <div className='subTitle'>Test task for one awesome company</div>
        <button className="proBtn" onClick={onClickDisplay1}>{ display1 ? "Hide Details" : "Show details"}</button>
        </div>
        <div className='prWrap'>
            {display1 && 
            <div className='description'> 
                <p>1. Cards with article titles and descriptions for 100 characters. The user can click on the card to go to an article page that contains the title and full description of the selected article.</p>

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
            }
            <a href='https://github.com/OlesyaPastushenko/TestTask'>                                
            <button className='blackBtn'>View at GitHub</button></a>
            <a href="https://graceful-mandazi-47eeac.netlify.app/">
            <button className='whiteBtn'>View at Netlify</button></a>
        </div>
        <div className="wrapSubAndBtn">
        <div className='subTitle'>Website for Real Estate Agency</div>
        <button className="proBtn" onClick={onClickDisplay2}>{ display2 ? "Hide Details" : "Show details"}</button>
        </div>
        <div className='prWrap'>
            {display2 && 
            <div className='description'> 
            <p>Home page contains small filter for the object with to 
               parameters "type of property" an "location", a slider with 
               a number of cards which refer to the objects that have the 
               key value "top_offer: true", each card links to an individual 
               page with description.</p>
            <p>Advanced filter page containes advanced filter with 6 base 
               parameters, and results for this searsh, represented by a 
               card with a slider of propertys' photos.</p>
            <p>Individual page has a detailed info about the propery, 
               google maps canvas with location, and a form. On submit 
               the form sends information to the telegramm app. The form 
               has simple validation.</p>
            </div> 
            }                           
            <a href='https://github.com/OlesyaPastushenko/homeworks/tree/MyFinalProject'>
            <button className='blackBtn'>View at GitHub</button> </a>
        </div>
    </div>
</section>
  );
}