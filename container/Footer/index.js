import PortText from '../../component/PortText';
import style from './portFooter.module.scss';
import Button from '../../component/Button';
import Github from '../../public/svg/logo-github.svg';
import Linkedin from '../../public/svg/linkedin.svg';
import Twitter from '../../public/svg/logo-twitter.svg';
import Gmail from '../../public/svg/mail.svg';
import Icon from '../../component/Icon';

const Footer = ({ data }) => (
  <section id="Footer" className={style.main}>
    <div className={style.footerMain}>
      <div className={style.footerText}>
        <PortText variant="portContactHeadingText">{data?.firstName}</PortText>
        <PortText variant="portContactDetailText">{data?.role}</PortText>
      </div>
      <div className={style.footerText}>
        <PortText variant="portContactHeadingText">Phone No.</PortText>
        <a href="tel:9737814945">
          <PortText variant="portContactDetailText">{data?.contact?.mobileNumber}</PortText>
        </a>
      </div>
      <div className={style.footerText}>
        <PortText variant="portContactHeadingText">Email</PortText>
        <a href="mailto: harzh.patel@gmail.com">
          <PortText variant="portContactDetailText">{data?.contact?.email}</PortText>
        </a>
      </div>
      <div className={style.footerText}>
        <PortText variant="portContactHeadingText">Address</PortText>
        <a href="https://www.google.com/maps/place/Radhesh+Apartment,+Radhesh+Apartment,+Opp+Luv-kush+Tower,+Thaltej+Tekra,+Jay+Ambenagar+Rd,+Patel+Society,+Jai+Ambe+Nagar,+Thaltej,+Ahmedabad,+Gujarat+380059/@23.0506982,72.5180664,17z/data=!3m1!4b1!4m5!3m4!1s0x395e9b5354506905:0x2a0f2287766643a3!8m2!3d23.0506982!4d72.5202551">
          <PortText variant="portContactDetailText">
            {`${data?.address?.addressLine1}, ${data?.address?.city}, ${data?.address?.state}, ${data?.address?.postalCode}`}
          </PortText>
        </a>
      </div>
    </div>
    <div className={style.jCenter}>
      {data?.socialLinks?.map(x => (
        <Icon key={x.id} socialLink={x} variant="iconBtn" />
      ))}
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
