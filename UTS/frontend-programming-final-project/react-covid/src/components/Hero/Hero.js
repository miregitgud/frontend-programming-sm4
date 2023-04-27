import styles from "./hero.module.css";
import image from "../../assets/covid.svg";

const Hero = () => {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <h2 className={styles.hero__title}>Covid ID</h2>
          <h3 className={styles.hero__genre}>
            Monitoring perkembangan Covid
          </h3>
          <p className={styles.hero__description}>
          Vosmet vetat res coelica
          iam premet letum vastum te
          vae gnari sunt suimet quis in oculis
          goya no suwe nazo nagasare
          sapientes feroces vetitum per currunt nefas
          </p>
          <button className={styles.hero__button}>Vaccine</button>
        </div>
        <div className="hero__right">
          <img
            className={styles.hero__image}
            src={image}
            alt="placeholder"
          />
        </div>
      </section>
    </div>
  );
}

export default Hero;