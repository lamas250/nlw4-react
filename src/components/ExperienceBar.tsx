import React, { useContext } from 'react'
import { ChallengeContext } from '../contexts/ChallengeContext'
import styles from '../styles/components/ExperienceBar.module.css'

export default function ExperienceBar() {
    const { currentExperience, experienceToNextLevel } = useContext(ChallengeContext);

    const percentToNextLeve = Math.round((currentExperience * 100)/ experienceToNextLevel);

    return (
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{ width: `${percentToNextLeve}%` }} />
                <span 
                    className={styles.currentExperience}
                    style={{ left: `${percentToNextLeve}%` }}
                >
                    {currentExperience} xp
                </span>
            </div>
            <span>{experienceToNextLevel} xp</span>
        </header>
    )
}
