

export function SkillCard({name, imgSrc}) {
  return (
    <div>
        <img src={imgSrc}></img>
        <div className='cardText'>{name}</div>
     </div>
  );
}
