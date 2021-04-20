import classes from '*.module.css'
import styles from './styles.module.scss'

export function Player() {

  return (
    <div className={styles.playerContainer}>
      <header>
        <img src="/playing.svg" alt="Icone de um fone de ouvido simbolizando uma música tocando no momento" />
        <strong>Tocando agora</strong>
      </header>

      <div className={styles.emptyPlayer}>
        <strong>Selecione um podcast para ouvir</strong>
      </div>

      <footer className={styles.empty}>
        <div className={styles.progress}>
          <span>00:00</span>
          <div className={styles.slider}>
           <div className={styles.emptySlider}></div>
          </div>
          <span>00:00</span>
        </div>

        <div className={styles.buttons}>
          <button type="button">
            <img src="/shuffle.svg" alt="Ícone de embaralhar" />
          </button>
          <button type="button">
            <img src="/play-previous.svg" alt="Ícone para voltar uma música" />
          </button>
          <button type="button" className={styles.playButton}>
            <img src="/play.svg" alt="Ícone para dar o play na música" />
          </button>
          <button type="button">
            <img src="/repeat.svg" alt="Ícone para repetir uma música" />
          </button>
        </div>
      </footer>
    </div>
  )
}