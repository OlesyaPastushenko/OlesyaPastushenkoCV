import "./contactInfo.css"

export function ContactInfo() {
  return (
    <div className="infoWrap">
        <div className = "subInfoWrap">
            <img  className = "contPic" src="https://www.svgrepo.com/show/13641/phone-call.svg" alt="tel Icon" />
            <h3>+34 645 463 602</h3>
        </div>
        <div className = "subInfoWrap">
            <img  className = "contPic" src="https://www.svgrepo.com/download/285/email.svg" alt="tel Icon" />
            <h3>olesya.pastushenko1@gmail.com</h3>
        </div>
        <div className = "subInfoWrap">
            <img  className = "contPic" src="https://www.svgrepo.com/show/127575/location-sign.svg" alt="tel Icon" />
            <h3>Murcia, Spain</h3>
        </div>
        <div className = "subInfoWrap">
            <img  className = "contPic" src="https://www.iconpacks.net/icons/1/free-linkedin-icon-112-thumb.png" alt="tel Icon" />
            <a href="https://www.linkedin.com/in/olesia-pastushenko-91abb91ab/">https://www.linkedin.com/in/olesia-pastushenko-91abb91ab/</a>
        </div>
        <div className = "subInfoWrap">
            <img  className = "contPic" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="tel Icon" />
            <a href="https://github.com/OlesyaPastushenko">https://github.com/OlesyaPastushenko</a>
        </div>

     </div>
  );
}