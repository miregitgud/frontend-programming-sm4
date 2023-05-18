import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.container}>
            <footer className={styles.footer}>
                <h2 className={styles.footer__title}> Movie App</h2>
                <p className={styles.footer__author}> @miregitgud 2023</p>
                <p>&copy; Made with love and a big ass mug of plain water</p>
            </footer>
        </div>
    )
}

export default Footer;