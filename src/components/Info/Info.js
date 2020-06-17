import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import {infoContent} from '../../data/dataStore.js';

const Info = props => (
  <Container>
    <Hero infoTitle={props.title} img={props.image}>
      <p className={props.description}></p>
    </Hero>
  </Container>
);


Info.propTypes = {
  title: PropTypes.node.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.node,
};

Info.defaultProps = {
  title: infoContent.infoTitle,
  image: infoContent.infoImage,
  description: infoContent.infoDescription,
};

export default Info;