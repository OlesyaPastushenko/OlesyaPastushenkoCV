import "./Experience.css"

export function Experience({position, company, achvms, date, field}) {
  return (
    <div className="work">
        <div className='position'>{position}</div>
        <div className='company'>{company}</div>
        <div className='date'>{date}</div>
        <div className='field'>{field}</div>
        <div className="borderAchvms">
          <p className="titleAchvms">Achivements/Tasks</p>
          <ul className="ulAchvms">
            {achvms.map((el,i) => {
              return (
               <li key = {i}>{el}</li>
              )
            }
            )}
            </ul>
        </div>
        
     </div>
  );
}