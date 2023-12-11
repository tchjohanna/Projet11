import React from 'react';
import styles from './Feature.module.css';

function Feature({ title, imageSrc, children }) {
    return (
        <div className={styles.featureItem}>
            <img src={imageSrc} alt="Icon" className={styles.featureIcon} />
            <h3 className={styles.featureItemTitle}>{title}</h3>
            {children}
        </div>
    );
}

export default Feature;
