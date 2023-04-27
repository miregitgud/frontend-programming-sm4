import styles from "./IndonesiaCard.module.css";

const IndonesiaCard = (props) => {
  const { indonesia } = props;

  return (
    <a href={indonesia.detail}>
      <div className={`${styles.card}`}>
        <h3 className={`${styles.card__status}`}>{indonesia.status}</h3>
        <h2 className={`${styles.card__total} ${indonesia.className}`}>{indonesia.total}</h2>
      </div>
    </a>
  );
};

export default IndonesiaCard;
