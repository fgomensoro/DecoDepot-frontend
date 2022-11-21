import styles from "./Home.module.css";
import Featured from "../../components/featured/Featured";
import Hero from "../../components/hero/Hero";
import Pack1 from "../../components/pack/Pack1";
import Pack2 from "../../components/pack/Pack2";
import Store from "../../components/store/Store";

function Home() {
  return (
    <>
      <Hero />
      <Featured />
      <Store />
      <div className={styles.responsive}>
        <Pack1 />
        <Pack2 />
      </div>
    </>
  );
}

export default Home;
