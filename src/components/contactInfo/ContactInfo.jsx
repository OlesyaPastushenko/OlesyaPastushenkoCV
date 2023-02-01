import "./contactInfo.css"

export function ContactInfo() {
  return (
    <div className="infoWrap">
        <div className = "subInfoWrap">
            <img  className = "contPic" src="https://thumb.ac-illust.com/94/94a938537d9d8075525510281066f95d_t.jpeg" alt="tel Icon" />
            <div className="contactText">+34 645 463 602</div>
        </div>
        <div className = "subInfoWrap">
            <img  className = "contPic" src="https://www.svgrepo.com/download/285/email.svg" alt="tel Icon" />
            <div className="contactText">olesya.pastushenko1@gmail.com</div>
        </div>
        <div className = "subInfoWrap">
            <img  className = "contPic" src="https://www.svgrepo.com/show/127575/location-sign.svg" alt="tel Icon" />
            <div className="contactText">Murcia, Spain</div>
        </div>
        <div className = "subInfoWrap">
            <img  className = "contPic" src="https://www.iconpacks.net/icons/1/free-linkedin-icon-112-thumb.png" alt="tel Icon" />
            <a className="contactText" href="https://www.linkedin.com/in/olesia-pastushenko-91abb91ab/">https://www.linkedin.com/in/olesia-pastushenko-91abb91ab/</a>
        </div>
        <div className = "subInfoWrap">
            <img  className = "contPic" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="tel Icon" />
            <a className="contactText" href="https://github.com/OlesyaPastushenko">https://github.com/OlesyaPastushenko</a>
        </div>

     </div>
  );
}