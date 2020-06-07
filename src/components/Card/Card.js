import React from 'react';
import styles from './Card.scss';


class Card extends React.Component {

    render() {
        return (
            <section className={styles.component}>
                <h3 className={styles.title}></h3>
            </section>
        )

    }
}
export default Card;