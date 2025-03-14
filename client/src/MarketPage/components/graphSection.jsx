import React from 'react';
import styles from './graphSection.module.css';

const graphSection = () => {
    return (
        <div className={styles.graphSection}>
            <div className={styles.graphHeader}>
                <h2 className={styles.title}>Top50 <span className={styles.price}>$7,352.05</span></h2>
                <h3 className={styles.titleDescription}><span className={styles.changeInYear}>+105.55%</span> | Past Year</h3>
            </div>
            <div className={styles.graph}>
                
            </div>
        </div>
    );
};


export default graphSection;