import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import styles from "../styles/pages/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <section>
        <div className={styles.headerContainer}>
          <Header/>
        </div>

        <div className={styles.cardContainer}></div>

        <footer>
          <Footer />
        </footer>
      </section>
    </div>
  );
}
