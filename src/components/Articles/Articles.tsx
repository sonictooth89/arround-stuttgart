import { Button, Card, Col, Row } from "react-bootstrap";
import tower from './tvtower.png';


const Articles = () => {
    
    return ( 
        <>
        <Row>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={tower} />
                <Card.Body>
                  <Card.Title>TV Tower</Card.Title>
                    <Card.Text>
                    A landmark and the tallest building in the city is the Stuttgart TV tower, which was built south of the     city basin in the Degerloch district. It stands a little below the highest point of the Bopser (also    called the High Bopser; 485.2 m above sea level). It was built between 1954 and 1955 as the world's first  reinforced concrete television tower and is 216.61 m high.
                    </Card.Text>
                  <Button variant="info">Go to website</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={tower} />
                <Card.Body>
                  <Card.Title>TV Tower</Card.Title>
                    <Card.Text>
                    A landmark and the tallest building in the city is the Stuttgart TV tower, which was built south of the     city basin in the Degerloch district. It stands a little below the highest point of the Bopser (also    called the High Bopser; 485.2 m above sea level). It was built between 1954 and 1955 as the world's first  reinforced concrete television tower and is 216.61 m high.
                    </Card.Text>
                  <Button variant="info">Go to website</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={tower} />
                <Card.Body>
                  <Card.Title>TV Tower</Card.Title>
                    <Card.Text>
                    A landmark and the tallest building in the city is the Stuttgart TV tower, which was built south of the     city basin in the Degerloch district. It stands a little below the highest point of the Bopser (also    called the High Bopser; 485.2 m above sea level). It was built between 1954 and 1955 as the world's first  reinforced concrete television tower and is 216.61 m high.
                    </Card.Text>
                  <Button variant="info">Go to website</Button>
                </Card.Body>
              </Card>
            </Col>
            
        </Row>

        </>
     );
}
 
export default Articles;