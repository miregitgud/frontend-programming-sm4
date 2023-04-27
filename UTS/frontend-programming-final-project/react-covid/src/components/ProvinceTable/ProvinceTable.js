import styles from "./provinceTable.module.css";

const ProvinceTable = (props) => {
  const { province } = props;

  return (
    <tbody className={styles.ProvinceTable}>
          <tr>
          <td>{province.kota}</td>
          <td>{province.kasus}</td>
          <td>{province.sembuh}</td>
          <td>{province.meninggal}</td>
          <td>{province.dirawat}</td>
        </tr>
    </tbody>
  );
};

export default ProvinceTable;