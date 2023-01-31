import "./Experience.css"

export function Experience({position, company, achvms, date, field}) {
  return (
    <div className="work">
        <div className='position'>{position}</div>
        <div className='company'>{company}</div>
        <div className='field'>{field}</div>
        <div className='date'>{date}</div>
        <div className='achvms'>{achvms}</div>
     </div>
  );
}