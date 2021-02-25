import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChalengeBox.module.css';

export function ChalengeBox(){
    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengeContext);
    const { resetCountdown } = useContext(CountdownContext);

    function handleChallengeSucceeded(){
        completeChallenge();
        resetCountdown();
    }

    function handleChallengeFailed(){
        resetChallenge();
        resetCountdown();
    }

    return (
        <div className={styles.chalengeBoxContainer}>
            {
                activeChallenge ? (
                    <div className={styles.chalengeActive}>
                        <header>Ganhe {activeChallenge.amount} xp</header>
                        <main>
                            <img src={`icons/${activeChallenge.type}.svg`} />
                            <strong>Novo desafio</strong>
                            <p>{activeChallenge.description}</p>
                        </main>
                        <footer>
                            <button 
                                type="button" 
                                className={styles.chalengeFailedButton}
                                onClick={handleChallengeFailed}
                            >
                                Falhei
                            </button>
                            <button 
                                type="button" 
                                className={styles.chalengeSucceededButton}
                                onClick={handleChallengeSucceeded}
                            >
                                Completei
                            </button>
                        </footer>
                    </div>
                ) : (
                    <div className={styles.chalengeNotActive}>
                        <strong>Finalize um ciclo para receber um desafio</strong>
                        <p>
                            <img src="icons/level-up.svg" alt="Level Up" />
                            Avance de level completando desafios.
                        </p>
                    </div>
                )
            }
        </div>
    )
}