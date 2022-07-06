import React, { useState, useEffect } from "react";

import { Navbar, Container, Col } from "react-bootstrap";

const Footer = () => {
  const [fullYear, setFullYear] = useState();

  useEffect(() => {
    setFullYear(new Date().getFullYear());
  }, [fullYear]);

  return (
    <div style={{marginTop:300}}>
    <Navbar fixed="bottom" bg="dark" variant="dark">
      <Container>
        <Col lg={12} className="text-center text-muted">
          <div >
            {fullYear}-{fullYear + 1}, All Rights Reserved by Jawad Timzit
          </div>
        </Col>
      </Container>
    </Navbar>
    </div>
  );
};

export default Footer;