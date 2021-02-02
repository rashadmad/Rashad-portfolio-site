import React, { useContext, useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import HeroImg from '../Image/Heroimg';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { img, title, name, subtitle, cta } = hero;

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

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <Row>
            <Col md={8}>
              <h1 className="hero-title">
                {title || 'Hi, my name is'}{' '}
                <span className="text-color-main">{name || 'Rashad'}</span>
                <br />
                {subtitle || "I'm a Software engineer."}
              </h1>
            </Col>
            <Col md={4}>
              <HeroImg alt="rashad madison logo" filename={img} />
            </Col>
          </Row>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <Row>
            <Col xs={12}>
              <Row>
                <p className="hero-cta mt-5">
                  <span className="cta-btn cta-btn--hero m-2">
                    <Link to="about" smooth duration={1000}>
                      {cta || 'Learn more'}
                    </Link>
                  </span>
                  <span className="cta-btn cta-btn--hero m-2">
                    <Link to="projects" smooth duration={1000}>
                      {cta || 'See Work'}
                    </Link>
                  </span>
                </p>
              </Row>
            </Col>
          </Row>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
