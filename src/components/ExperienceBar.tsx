import React from 'react'
import styles from '../styles/components/ExperienceBar.module.css'

export default function ExperienceBar() {
    return (
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{ width: '50%' }} />
                <span 
                    className={styles.currentExperience}
                    style={{ left: '50%' }}
                >
                    360 xp
                </span>
            </div>
            <span>600xp</span>
        </header>
    )
}
