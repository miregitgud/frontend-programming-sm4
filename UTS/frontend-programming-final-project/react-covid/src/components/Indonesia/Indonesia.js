import styles from "./indonesia.module.css";
import IndonesiaCard from "../IndonesiaCard/IndonesiaCard"

const Indonesia = (props) => {
  // destructuring props
  const { indonesia } = props;

  return (
    <div className={styles.container}>
      <section className={styles.indonesia}>
        <h2 className={styles.indonesia__title}>Indonesia</h2>
        <p>Data Covid Berdasarkan Indonesia</p>
        <div className={styles.indonesia__container}>
        {
          indonesia.map(function (indonesia) {
            return <IndonesiaCard key={indonesia.id} indonesia={indonesia} />;
          })
        }
        </div>
      </section>
    </div>
  );
}

export default Indonesia;