import React from "react";
import styles from './province.module.css'
import ProvinceTable from "../ProvinceTable/ProvinceTable";

const Province = (props) => {
    const { province } = props;
  return (
    <div className={styles.container}>
      <section className={styles.provinsi}>
        <h2 className={styles.provinsi__title}>Provinsi</h2>
        <p>Data Covid Berdasarkan Provinsi</p>
        <div className={styles.provinsi__container}>
        <table>
            <thead>
                <tr>
                    <th>Kota</th>
                    <th>Kasus</th>
                    <th>Sembuh</th>
                    <th>Meninggal</th>
                    <th>Dirawat</th>
                 </tr>
            </thead>
            {
            province.map(function (province) {
              return <ProvinceTable province={province} />;
            })
          }
        </table>
        </div>
      </section>
    </div>
  );
};

export default Province;
