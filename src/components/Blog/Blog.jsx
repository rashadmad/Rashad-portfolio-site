import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Title from '../Title/Title';
import PortfolioContext from '../../context/context';

const Blog = () => {
  const { blog } = useContext(PortfolioContext);
  const { author, bio } = blog;

  return (
    <section>
      <Container>
        <Title title="My Blog" />
        <h1>{ author }</h1>
        <p>{ bio }</p>
      </Container>
    </section>
  );
};

export default Blog;
