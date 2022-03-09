import React, {MouseEventHandler} from "react";
import styles from './style.module.scss';

type IProps = {
    subtitle: string;
    title: string;
    onClick?: MouseEventHandler | undefined;
};

const Card: React.FC <IProps> = ({ subtitle, title, onClick }) => {
    return (
        <div className={styles.card}>
            <div className={styles.subtitle}>
                {subtitle}
            </div>
            <h2 className={styles.title}>
                {title}
            </h2>
            <picture>
                <img src={'/img/pattern-divider-mobile.svg'}
                     alt={''}
                />
            </picture>
            <button className={styles.button}
                    type={'button'}
                    onClick={onClick}
            >
                <img src={'/img/icon-dice.svg'}
                     alt={'dice'}
                />
            </button>
        </div>
    );
};

export default Card;
