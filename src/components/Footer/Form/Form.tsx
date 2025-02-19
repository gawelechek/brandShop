import styles from './Form.module.scss';

export const Form = () => {
    return (
        <div className={`${styles.formSection} container`}>
        <h2 className={styles.formSection__title}>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
        <form className={styles.formSection__form}>
            <label htmlFor="email">
            <input type="email" className={styles.formSection__email} placeholder='Enter your email address' id='email'/>
            </label>
            <button className={styles.formSection__btn}>Subscribe to Newsletter</button>
        </form>
        </div>
    );
}