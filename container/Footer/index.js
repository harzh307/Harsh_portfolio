import PortText from '../../component/PortText';
import style from './portFooter.module.scss';
import Button from '../../component/Button';
import Github from '../../public/svg/logo-github.svg';
import Linkedin from '../../public/svg/linkedin.svg';
import Twitter from '../../public/svg/logo-twitter.svg';
import Gmail from '../../public/svg/mail.svg';
import Facebook from '../../public/svg/logo-facebook.svg';
import Whatsapp from '../../public/svg/whatsapp.svg';
import Instagram from '../../public/svg/instagram.svg';

const Footer = ({ data }) => (
  <section id="Footer" className={style.main}>
    <div className={style.footerMain}>
      <div className={style.footerText}>
        <PortText variant="portContactHeadingText">{data.firstName}</PortText>
        <PortText variant="portContactDetailText">{data.role}</PortText>
      </div>
      <div className={style.footerText}>
        <PortText variant="portContactHeadingText">Phone No.</PortText>
        <a href="tel:9737814945">
          <PortText variant="portContactDetailText">{data.contact.mobileNumber}</PortText>
        </a>
      </div>
      <div className={style.footerText}>
        <PortText variant="portContactHeadingText">Email</PortText>
        <a href="mailto: Harsh.u.Patel@gmail.com">
          <PortText variant="portContactDetailText">{data.contact.email}</PortText>
        </a>
      </div>
      <div className={style.footerText}>
        <PortText variant="portContactHeadingText">Address</PortText>
        <a href="https://www.google.com/maps/place/Radhesh+Apartment,+Radhesh+Apartment,+Opp+Luv-kush+Tower,+Thaltej+Tekra,+Jay+Ambenagar+Rd,+Patel+Society,+Jai+Ambe+Nagar,+Thaltej,+Ahmedabad,+Gujarat+380059/@23.0506982,72.5180664,17z/data=!3m1!4b1!4m5!3m4!1s0x395e9b5354506905:0x2a0f2287766643a3!8m2!3d23.0506982!4d72.5202551">
          <PortText variant="portContactDetailText">
            {`${data.address.addressLine1}, ${data.address.city}, ${data.address.state}, ${data.address.postalCode}`}
          </PortText>
        </a>
      </div>
    </div>
    <div className={style.jCenter}>
      <a href="https://github.com/iamDevanshiDesai">
        <Button className={style.portSocialBtn} variant="portSocialButton">
          <Github className={style.btnHover} height={18} width={18} />
        </Button>
      </a>
      <a href="https://www.linkedin.com/in/Harsh-Patel/">
        <Button className={style.portSocialBtn} variant="portSocialButton">
          <Linkedin className={style.btnHover} height={18} width={18} />
        </Button>
      </a>
      <a href="https://twitter.com/UDevanshi">
        <Button className={style.portSocialBtn} variant="portSocialButton">
          <Twitter className={style.btnHover} height={18} width={18} />
        </Button>
      </a>
      <a href="mailto:Harsh.u.Patel@gmail.com">
        <Button className={style.portSocialBtn} variant="portSocialButton">
          <Gmail className={style.btnHover} height={18} width={18} />
        </Button>
      </a>
      <a href="fb://profile/fbID">
        <Button className={style.portSocialBtn} variant="portSocialButton">
          <Facebook className={style.btnHover} height={18} width={18} />
        </Button>
      </a>
      <a href="https://api.whatsapp.com/send?phone=+919737814945&amp;text=Hi there!">
        <Button className={style.portSocialBtn} variant="portSocialButton">
          <Whatsapp className={style.btnHover} height={18} width={18} />
        </Button>
      </a>
      <a href="http://instagram.com/">
        <Button className={style.portSocialBtn} variant="portSocialButton">
          <Instagram className={style.btnHover} height={18} width={18} />
        </Button>
      </a>
    </div>
    <div className={style.footText}>
      <div className={style.footerLine} />
      <PortText variant="portFooterText">
        Harsh © 2021. All Right Reserved, Designed By Harsh Patel.
      </PortText>
    </div>
  </section>
);

export default Footer;
