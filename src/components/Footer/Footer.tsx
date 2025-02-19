import Link from "next/link";
import styles from "./Footer.module.scss";
import { Form } from "./Form/Form";
import Image from "next/image";
import visaImg from "@/public/images/Visa.svg";
import masterCardImg from "@/public/images/MasterCard.svg";
import payPalImg from "@/public/images/PayPal.svg";
import applePayImg from "@/public/images/ApplePay.svg";
import googlePayImg from "@/public/images/GooglePay.svg";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <Form />
        <div className={styles.content}>
          <div className={styles.footer__flexBox}>
            <div className={styles.footer__social}>
              <Link href="/" className={styles.footer__logo}>
                SHOP.CO
              </Link>
              <p className={styles.footer__about}>
                We have clothes that suits your style and which you’re proud to
                wear. From women to men.
              </p>
              <div className={styles.footer__socialIcons}>
                <Link href="/" className={styles.footer__socialLink}>
                  <Image
                    src="/images/Twitter.svg"
                    width={28}
                    height={28}
                    alt="Twitter"
                  />
                </Link>
                <Link href="/" className={styles.footer__socialLink}>
                  <Image
                    src="/images/Facebook.svg"
                    width={28}
                    height={28}
                    alt="Facebook"
                  />
                </Link>
                <Link href="/" className={styles.footer__socialLink}>
                  <Image
                    src="/images/Instagram.svg"
                    width={28}
                    height={28}
                    alt="Instagram"
                  />
                </Link>
                <Link href="/" className={styles.footer__socialLink}>
                  <Image
                    src="/images/Github.svg"
                    width={28}
                    height={28}
                    alt="Github"
                  />
                </Link>
              </div>
            </div>

            <ul className={styles.footer__links}>
              <li>Company</li>
              <li>
                <Link href="/">About</Link>
              </li>
              <li>
                <Link href="/">Feauters</Link>
              </li>
              <li>
                <Link href="/">Works</Link>
              </li>
              <li>
                <Link href="/">Career</Link>
              </li>
            </ul>
            <ul className={styles.footer__links}>
              <li>Help</li>
              <li>
                <Link href="/">Customer Support</Link>
              </li>
              <li>
                <Link href="/">Delivery Details</Link>
              </li>
              <li>
                <Link href="/">Terms & Conditions</Link>
              </li>
              <li>
                <Link href="/">Privacy Policy</Link>
              </li>
            </ul>
            <ul className={styles.footer__links}>
              <li>FAQ</li>
              <li>
                <Link href="/">Account</Link>
              </li>
              <li>
                <Link href="/">Manage Deliveries</Link>
              </li>
              <li>
                <Link href="/">Orders</Link>
              </li>
              <li>
                <Link href="/">Payments</Link>
              </li>
            </ul>
            <ul className={styles.footer__links}>
              <li>Resources</li>
              <li>
                <Link href="/">Free eBooks</Link>
              </li>
              <li>
                <Link href="/">Development Tutorial</Link>
              </li>
              <li>
                <Link href="/">How to - Blog</Link>
              </li>
              <li>
                <Link href="/">Youtube Playlist</Link>
              </li>
            </ul>
          </div>
          <div className={styles.footer__line}></div>
          <div className={styles.footer__copyright}>
            <p className={styles.footer_CRtext}>
              Shop.co © 2000-2023, All Rights Reserved
            </p>
            <ul className={styles.footer__CRpayment}>
              <li>
                <a className={styles.visaCards} href="">
                  <Image src={visaImg} alt="Visa" />
                </a>
              </li>
              <li>
                <a href="">
                  <Image src={masterCardImg} alt="MasterCard" />
                </a>
              </li>
              <li>
                <a href="">
                  <Image src={payPalImg} alt="PayPal" />
                </a>
              </li>
              <li>
                <a href="/">
                  <Image src={applePayImg} alt="ApplePay" />
                </a>
              </li>
              <li>
                <a href="">
                  <Image src={googlePayImg} alt="GooglePay" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
