import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import Container from '../Container/Container.js';
import styles from './SearchResults.scss';



class SearchResults extends React.Component {

  static propTypes = {
    cards: PropTypes.array,
    title: PropTypes.string,
    icon: PropTypes.string,
  }

  render() {
    const {cards} = this.props;
    return (
      <Container>       
        <section className ={styles.component}> 
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