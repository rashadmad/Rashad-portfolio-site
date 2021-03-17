import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Title from '../Title/Title';
import PortfolioContext from '../../context/context';

const Blog = () => {
  const { blog } = useContext(PortfolioContext);
  const { author, bio } = blog;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

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
