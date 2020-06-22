import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import {infoContent} from '../../data/dataStore.js';

const Info = props => (
  <Container>
    <Hero titleText={props.title} img={props.image}>
    </Hero>
    <p className={props.description}>{props.description}</p>
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