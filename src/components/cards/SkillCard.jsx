import "./SkillCardStyle.css"

export function SkillCard({name, imgSrc}) {
  return (
    <div className="skillCard">
        <img className="imgSkills" src={imgSrc} alt={name+"logo"}></img>
        <div className='cardText'>{name}</div>
     </div>
  );
}
