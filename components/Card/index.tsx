import React, {MouseEventHandler} from "react";
import styles from './style.module.scss';
import cn from 'classnames';

type IProps = {
    subtitle: string;
    title: string;
    loading: boolean;
    onClick?: MouseEventHandler | undefined;
};

const Card: React.FC <IProps> = ({ subtitle, title, loading, onClick }) => {
    return (
        <div className={cn(styles.card, {
            [styles.loading]: loading,
        })}>
            <div className={styles.body}>
                {!loading && (
                    <>
                        <div className={styles.subtitle}>
                            {subtitle}
                        </div>
                        <h2 className={styles.title}>
                            {title}
                        </h2>
                    </>
                )}
                <picture>
                    <source srcSet={'/img/pattern-divider-desktop.svg'}
                            media={'(min-width: 992px)'}
                    />

                    <img src={'/img/pattern-divider-mobile.svg'}
                         alt={''}
                    />
                </picture>
            </div>
            <div className={styles.footer}>
                <button className={styles.button}
                        type={'button'}
                        onClick={onClick}
                >
                    <img src={'/img/icon-dice.svg'}
                         alt={'dice'}
                    />
                </button>
            </div>
        </div>
    );
};

export default Card;
