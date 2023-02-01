import "./secContact.css"
import { FormContactUs } from "../form/Form";
import { ContactInfo } from "../contactInfo/ContactInfo";

export function SectionContact() {
  return (
    <section className='contact'>
    <div className='container1'>
        <div className='title'>Contact</div>
        <div className='subTitle'>Send me a message</div>
        <div className='wrapFormAndInfo'>
        <FormContactUs/>
        <ContactInfo/>
        </div>
    </div>
</section>  
  );
}