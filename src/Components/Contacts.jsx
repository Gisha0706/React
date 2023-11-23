import { useLocation, Link } from "react-router-dom";
import Style from "./contacts.module.css"
const  Contacts =  () => {
return(
    <section className={Style.contact}>
	<div className={Style.sectionheader}>	<h1>CONTACT</h1></div>
	<article>
		
			<label for="checkcontact" className={Style.contactbutton}><div className={Style.mail}></div></label><input className={Style.checkcontact} type="checkbox" />
	
			<form action=""  className={Style.contactform}>
				<p className={Style.input_wrapper}><input type="text" name="contact_nom" value=""  id ="contact_no"/><label for="contact_nom">NAME</label></p>
				<p className={Style.input_wrapper}><input type="text" name="contact_email" value=""  id ="contact_email" /><label for="contact_email">EMAIL</label></p>
				<p className={Style.input_wrapper}><input type="text" name="contact_sujet" value=""  id ="contact_sujet" /><label for="contact_sujet">SUBJECT</label></p>
				<p className={Style.textarea_wrapper}><textarea name="contact_message" id="contact_message"></textarea></p>
				<p className={Style.submit_wrapper}><input  type="submit" value="ENVOYER" /></p>			
			</form>
	</article>
</section>
)
}


export default Contacts


