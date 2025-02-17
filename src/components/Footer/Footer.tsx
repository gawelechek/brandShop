import styles from "./Footer.module.scss";
import { Form } from "./Form/Form";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <Form />
      </div>
    </footer>
  );
};
