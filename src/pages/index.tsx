import { Footer } from "../components/Footer";
import styles from "../styles/pages/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <section>
        <div className={styles.headerContainer}>
          {/* colocar o header da pagina aqui */}

          <div className={styles.menu}>

          </div>
        </div>

        <div className={styles.cardContainer}>

        </div>

        <footer>
          <Footer />
        </footer>
      </section>
    </div>
  );
}
