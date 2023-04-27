import { useState } from "react";
import Alert from "../Alert/Alert";
import styles from "./FormCovid.module.css";
import image1 from "../../assets/form.svg";
import data from '../../pages/Home'

const provinceData = data.provinces.map((item) => ({ ...item }));

const FormCovid = (props) => {

        // destructuring props
        const { setProvince } = props;

        // membuat state province
        const [province, setProvinces] =  useState("");

        // membuat state jumlah
        const [jumlah, setJumlah] = useState("");

        // membuat state status 
        const [status, setStatus] = useState("");

        // Membuat state: isProvinceError, isJumlahError, isStatusError
        const [isprovinceError, setIsProvinceError] = useState(false);
        const [isJumlahError, setisJumlahError] = useState(false);
        const [isStatusError, setisStatusError] = useState(false);
       
        // membuat fungsi handleprovince
        const handleProvince = (e) => {
            setProvinces(e.target.value);
        }

        // membuat fungsi handleJumlah
        const handleJumlah = (e) => {
            setJumlah(e.target.value);
        }

        // membuat fungsi handleStatus
        const handleStatus = (e) => {
            setStatus(e.target.value);
        }

        // membuat fungsi handleSubmit
        const handleSubmit = (e) => {
            e.preventDefault();
          
            if (jumlah === "" && province === "" && status === "") {
              setIsProvinceError(true);
              setisJumlahError(true);
              setisStatusError(true);
            } else if (province === "") {
              setIsProvinceError(true);
            } else if (jumlah === "" || jumlah < 1) {
              setisJumlahError(true);
            } else if (status === "") {
              setisStatusError(true);
            } else if (province !== "" && status !== "" && jumlah >= 1) {
            const dataCovid = {
                kota: province,
                kasus: status === "kasus" ? jumlah : 0,
                sembuh: status === "sembuh" ? jumlah : 0,
                meninggal: status === "meninggal" ? jumlah : 0,
                dirawat: status === "dirawat" ? jumlah : 0,
              };
              const updateProvince = provinceData.map((data) => {
                if (data.kota === dataCovid.kota) {
                  return {
                    ...data,
                    kasus: parseInt(data.kasus) + parseInt(dataCovid.kasus),
                    sembuh: parseInt(data.sembuh) + parseInt(dataCovid.sembuh),
                    dirawat: parseInt(data.dirawat) + parseInt(dataCovid.dirawat),
                    meninggal: parseInt(data.meninggal) + parseInt(dataCovid.meninggal),
                  };
                }
                return data;
              });
              setProvince(updateProvince);
              setIsProvinceError(false);
              setisJumlahError(false);
              setisStatusError(false);
            }
          };
          

    return (
        <div className={styles.container}>
            <section className={styles.form}>
                <div className={styles.form__left}>
                    <img className={styles.form__image}
                    src={image1}
                    alt='placeholder' />
                </div>
                <div className={styles.form__right}>
                    <h2 className={styles.FormCovid__title}>Form Covid</h2>
                    <form onSubmit={handleSubmit}>

                        <div className={styles.FormCovid}>
                            <label>Provinsi</label>
                            <select onChange={handleProvince} className={styles.FormCovid__select} id="province" name="province" value={province}>
                            <option value="" disabled selected hidden></option>
                            {provinceData.map((data, index) => {
                                return (
                                    <option key={index} value={data.kota}>{data.kota}</option>
                                );
                            })}
                            </select>
                            {isprovinceError && <Alert>Provinsi tidak boleh kosong!</Alert>}
                        </div>

                        <div className={styles.FormCovid}>
                            <label>Status</label>
                            <select onChange={handleStatus} value={status} className={styles.FormCovid__select}>
                            <option value="" disabled selected hidden></option>
                            <option value="kasus">Positif</option>
                            <option value="sembuh">Sembuh</option>
                            <option value="meninggal">Meninggal</option>
                            <option value="dirawat">Dirawat</option>
                            </select>
                            {isStatusError && <Alert>Silahkan pilih status!</Alert>}
                        </div>
                        
                        <div className={styles.FormCovid}>
                            <label>Jumlah</label>
                            <input onChange={handleJumlah} className={styles.FormCovid__input} type="number" id="jumlah" name="jumlah" value={jumlah} />
                            {isJumlahError && <Alert>Harap memasukkan angka yang valid!</Alert>}
                        </div>

                        <div>
                            <button className={styles.FormCovid__button}>Submit</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default FormCovid;