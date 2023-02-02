import "./SkillCardStyle.css"

export function LangCard({name, imgSrc, level}) {
  return (
    <div className="skillCardLang">
        <img className="imgLang" src={imgSrc} alt={name+"logo"}></img>
        <div className='cardText'>{name}</div>
        <div className="level">{level}</div>
     </div>
  );
}