import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
//import Creator from '../Creator/Creator.js';
//import {settings} from '../../data/dataStore';
import Icon from '../Icon/Icon.js';



class Column extends React.Component {

  static propTypes = {
    title: PropTypes.string,
    cards: PropTypes.array,
    icon: PropTypes.node,
  }

  render() {
    const {title, icon, cards} = this.props;
    return (
      <section className ={styles.component}> 
        <h3 className ={title}>{title} {/**wczesniej {this.props.title} */}
          <span className ={icon}/> <Icon name ={icon}/></h3> {/**wczesniej {this.props.icon} */}
        <div className ={styles.cards}>
          {cards.map(cardsData => (
            <Card key={cardsData.id} {...cardsData} />
          ))}
        </div>
        {/*
        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
        </div>
        */}
      </section>
    );
  }
}

export default Column;