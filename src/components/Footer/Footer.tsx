import Link from "next/link";
import styles from "./Footer.module.scss";
import { Form } from "./Form/Form";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <Form />
        <div className={styles.footer__social}>
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
        <div className={styles.footer__flexBox}>
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
      </div>
    </footer>
  );
};
