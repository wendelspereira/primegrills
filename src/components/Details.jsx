/*
    bnt voltar
    foto do produto
    nome e descricao
    price
    acompanhamentos
    opcoes de acompanhamentos
    btn comprar
    btn adicionar ao pedido
*/
import styles from '../styles/components/Details.module.css'

export function Details() {
    return (
        <div className={styles.containerDetails}>
            <div className={styles.btnBack}>
                <img src="icons/esquerda.svg" alt="icon"/>
                <span>Voltar</span>
            </div>

            <div className={styles.photo}>
                <img src="exemple.svg" alt="Foto" />
            </div>

            <div className={description}>
                <p className={styles.name}>Prime Simple</p>
                <p className={styles.detail}>Double Blend Bovina - Muçarelas texto aqui  Double Blend Bovina - Muçarelas texto aqui  Double Blend </p>
            </div>
            
            <div className={styles.price}>R$ 6,90</div>

            <div className={sidedishs}>
                <span>Acompanhamentos</span>
                <div className={styles.selectedSidedishs}></div>
            </div>

            <div className={styles.sidedishsOptions}>
                <button>Maionese</button>
                <button>Purê de batata</button>
                <button>Mostarda</button>
                <button>Alho</button>
                <button>Verde</button>
                <button>Purê de Macacheira</button>
                <button>Barbecue</button>
            </div>

            <button className={btnBuy}>Comprar</button>
            <button className={btnAdd}>Adicionar pedido</button>
        </div>
    )
}