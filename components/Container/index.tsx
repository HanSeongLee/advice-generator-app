import React from "react";
import styles from './style.module.scss';

const Container: React.FC = ({ children }) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
};

export default Container;
