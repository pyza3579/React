import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import Container from '../Container/Container.js';
import styles from './SearchResults.scss';
import Icon from '../Icon/Icon.js';



class SearchResults extends React.Component {

  static propTypes = {
    cards: PropTypes.array,
    title: PropTypes.string,
    icon: PropTypes.string,
  }

  render() {
    const {cards, title, icon} = this.props;
    return (
      <Container>       
        <section className ={styles.component}> 
          <h3 className ={title}>{title} 
            <span className ={icon}/> <Icon name ={icon}/></h3> 
          <div className ={styles.cards}></div>
          <div>
            {cards.map(cardsData => (
              <Card key={cardsData.id} {...cardsData} />
            ))}
          </div>
        </section>
      </Container>
    );
  }
}

export default SearchResults;