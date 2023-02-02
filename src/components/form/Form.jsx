import "./form.css"
import { useState } from "react"
const FormContactUs = () => {
    const [exito, setExito] = useState("none")
    const [ups, setUps] = useState("none")
    const [user, setUser] = useState({
        name: '',
        tel: '',
        email: '',
        message: '',
    })
    const clear = () => {
        setExito("none")
        setUps("none")
    }
    const submit = e => {
        e.preventDefault()
        let text = JSON.stringify(user).replace('{','').replace('}','').replaceAll('"','')
        var TOKEN = "5697100567:AAHelFg8Zya_v6v2lZ4z2w5xxsqI2Tf1Js0";
        var chatID = "5284544422";
        var api = "https://api.telegram.org/bot" + TOKEN + "/sendMessage?chat_id="+chatID+"&text=";
        var message = text;
        fetch(api + "New%20Message:%20" + message)
        .then(res=>{
            res.status == "200" ? setExito("block") : setUps("block")
        });
        setUser({
            name: '',
            tel: '',
            email: '',
            message: ''       
        })
      }
    return (
        <form  onClick = {clear} onSubmit = {submit} className="contactUs">    
        <div className="wrapInputs">
        <input 
         required
         className="contInput" 
         type='text'
         placeholder="John*"
         value = {user.name}
         onChange={(e)=> setUser({...user, name: e.target.value})}
         />

        <input 
         required
         type = 'email' 
         className="secondInput" 
         placeholder="john@gmail.com*"
         value = {user.email}
         onChange={(e)=> setUser({...user, email: e.target.value})}
         />
        </div>
        <textarea  
         className="contText"  
         placeholder="Your message"
         value = {user.message}
         onChange={(e)=> setUser({...user, message: e.target.value} )}
         />

        <button
        type = 'submit'
        className="sendBtn"
        >Send</button>
        <div className="exito" style={{display: exito}}>Your message has been sent successfuly!</div>
        <div className="ups" style={{display: ups}}>Ups! Your message hasn't been sent. </div>
       </form>
    )
}

export {FormContactUs};