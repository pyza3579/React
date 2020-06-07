import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/Column.js';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node,
    image: PropTypes.string.isRequired,
  }
  static defaultProps = {
    children: <p>I can do all the things!!!</p>,
  }
  render() {
    return (
      <section className ={styles.component}> 
        <h2 className ={styles.subtitle}><Hero titleText={this.props.title} img={this.props.image}/></h2> /*this jest instancja List?*/
        <div className={styles.description}>
          {this.props.children}
        </div>
        <div className ={styles.columns}>
          <Column columnTitle={'Animals'}/>
          <Column columnTitle={'Plants'}/>
          <Column columnTitle={'Minerals'}/>
        </div>
      </section>
    )
  }
}

export default List;

