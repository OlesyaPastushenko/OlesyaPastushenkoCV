import "./Education.css"

export function Education({name, date, univercity}) {
  return (
    <div className="educationCard">
        <div className="eduName">{name}</div>
        <div className="eduDate">{date}</div>
        <div className="eduUni">{univercity}</div>
     </div>
  );
}