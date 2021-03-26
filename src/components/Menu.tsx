import styles from '../styles/components/Menu.module.css';
export function Menu() {
    return (
        <div className={styles.menu}>
            <div className={styles.button}>
                <button>
                    <img src="icons/esquerda.svg" alt="" />
                </button>
            </div>

            <div className={styles.title}>
                <p>Primeburguers</p>
            </div>

            <div className={styles.button}>
                <button>
                    <img src="icons/direita.svg" alt="" />
                </button>
            </div>
        </div>
    );
}