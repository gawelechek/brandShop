import Image from 'next/image';
import styles from './BrowesStyle.module.scss'
import Link from 'next/link';


export const BrowesStyle = () => {
  return (
    <section className="container">
        <div className={styles.browesStyle}>
            <div className={styles.browesStyle__grid}>
                <Link href={`/category/formal`} className={styles.browesStyle__card}>              
                    <h3 className={styles.browesStyle__title}>Formal</h3>
                </Link>
                <Link href={`/category/casual`} className={styles.browesStyle__card}>              
                    <h3 className={styles.browesStyle__title}>Casual</h3>
                </Link>
                <Link href={`/category/party`} className={styles.browesStyle__card}>              
                    <h3 className={styles.browesStyle__title}>Party</h3>
                </Link>
                <Link href={`/category/gym`} className={styles.browesStyle__card}>              
                    <h3 className={styles.browesStyle__title}>Gym</h3>
                </Link>
            </div> 
        </div>
    </section>
    );
}