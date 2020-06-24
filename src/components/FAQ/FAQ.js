import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import {faqContent} from '../../data/dataStore.js';

const FAQ = props => (
  <Container>
    <Hero titleText={props.title} img={props.image}>
    </Hero>
    <p>{props.description}</p>
  </Container>
);


FAQ.propTypes = {
  title: PropTypes.node.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.node,
};

FAQ.defaultProps = {
  title: faqContent.faqTitle,
  image: faqContent.faqImage,
  description: faqContent.faqDescription,
};

export default FAQ;