import React, { useState } from 'react';
import { Container, Row, Col, Image, Button, Card } from 'react-bootstrap';

const App = () => {
const [section, setSection] = useState('about');

const handleClick = (e, selectedSection) => {
e.preventDefault();
setSection(selectedSection);
};

return (
<Container fluid className="header">
<Row>
<Col xs={12}>
<nav>
<Button onClick={(e) => handleClick(e, 'about')} variant="link">
About
</Button>
<Button onClick={(e) => handleClick(e, 'portfolio')} variant="link">
Portfolio
</Button>
<Button onClick={(e) => handleClick(e, 'contact')} variant="link">
Contact
</Button>
</nav>
</Col>
</Row>
<Row>
<Col xs={12}>
{section === 'about' ? (
<Card className="bg-primary text-white">
<Card.Header as="h1">About Me</Card.Header>
<Card.Body>
<Card.Text>
My name is Salma Gonzalez, I am born and raised in Dallas, Texas. I just graduated from SMU and currently looking to get more experience in Full Stack Web Development! 
</Card.Text>
</Card.Body>
</Card>
) : null}
{section === 'portfolio' ? (
<Card>
<Card.Header as="h1">Portfolio</Card.Header>
<Card.Body>
<Card.Text>
Check out my portfolio!
</Card.Text>
<hr className="my-2" />
<a href="https://gentle-cove-71782.herokuapp.com/">
<Image src="../public/images/picone.jpeg" alt="Heroku App" />
</a>
</Card.Body>
</Card>
) : null}
{section === 'contact' ? (
<Card>
<Card.Header as="h1">Contact</Card.Header>
<Card.Body>
<Card.Text>
Get in touch with me!
</Card.Text>
<hr className="my-2" />
<Image src="../public/images/picone.jpeg" alt="Applicant" />
<a href="mailto:salmagonzalezzz@gmail.com">Email</a>
<a href="https://github.com/gsalma99">GitHub</a>
</Card.Body>
</Card>
) : null}
</Col>
</Row>
<Row>
<Col xs={12}>
<footer>
<a href="https://github.com/gsalma99">GitHub</a>
<a href="https://www.linkedin.com/in/salma-gonzalez-5b7378241/">LinkedIn</a>
</footer>
</Col>
</Row>
</Container>
);
};

export default App;