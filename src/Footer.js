import gmailIcon from './icons/icons8-gmail.svg';
import whatsappIcon from './icons/icons8-whatsapp.svg';
import twitterIcon from './icons/icons8-twitter.svg';
import linkedinIcon from './icons/iconfinder_square-linkedin_317725.svg';
const Footer = () => {
    return ( 
        <div className="">
              <div className="contacts">

<a href="mailto:victorukwuezeh@gmail.com"> <img src={gmailIcon} alt=""/> </a>
<a href="https://Wa.me/+2348120844654?text=Hello!+i+want+to+hire_you+for+a+project"> <img src={whatsappIcon} alt=""/> </a>
<a href="https://twitter.com/victorukwuezeh"> <img src={twitterIcon} alt=""/> </a>
<a href="https://www.linkedin.com/in/victor-ukwuezeh-832833181"> <img src={linkedinIcon} alt=""/> </a>

</div>



<footer>
<p>&copy; 2020 victor ukwuezeh</p>

</footer>
        </div>
     );
}
 
export default Footer;