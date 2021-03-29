import Link from 'next/link';
import styles from '../styles/components/Footer.module.css';

export function Footer() {
    return (
        <div className={styles.containerFooter}>
            <div className={styles.containerButton}>
                <Link href="/">
                    <button className={styles.footerButton}>
                        <div>
                            <img src="icons/inicio.svg" alt="" />
                            <strong>Início</strong>
                        </div>
                    </button>
                </Link>
            </div>
            <div className={styles.containerButton}>
                <Link href="/">
                    <button className={styles.footerButton}>
                        <div>
                            <img src="icons/cupons.svg" alt="" />
                            <strong>Meus cupons</strong>
                        </div>
                    </button>
                </Link>
            </div>
            <div className={styles.containerButton}>
                <Link href="/">
                    <button className={styles.footerButton}>
                        <div>
                            <div>
                                <img src="icons/pedidos.svg" alt="" />
                                <div>
                                    <p>3</p>
                                </div>
                            </div>
                            <strong>Pedidos</strong>
                        </div>
                    </button>
                </Link>
            </div>
        </div>
    );
}