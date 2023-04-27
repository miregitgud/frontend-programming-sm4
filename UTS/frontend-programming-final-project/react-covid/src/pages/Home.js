import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Indonesia from "../components/Indonesia/Indonesia"
import Province from "../components/Province/Province"
import FormCovid from "../components/FormCovid/FormCovid"
import { useState } from 'react'
import data1 from '../utils/constants/indonesia'
import data from '../utils/constants/provinces'

function Main() {

  const indonesiaData = data1.indonesia.map((item, index) => ({ ...item, className: `item-${index}` }));;

  const [indonesia, setIndonesia] = useState(indonesiaData);
  const [provinces, setProvinces] = useState(data.provinces);

  return (
    <main>
      <Hero />
      <Indonesia indonesia={indonesia} setIndonesia={setIndonesia} />
      <Province province={provinces} setProvince={setProvinces} />
      <FormCovid province={provinces} setProvince={setProvinces}/>
    </main>
  );
}

function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}

export default Home;
