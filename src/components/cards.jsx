import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';




function Cards(props) {
  return (
   <div className="container d-flex justify-content-center align-items-center">
     <Card className=''>
      <Card.Img variant="top" src={props.imgURL} className='object-fit-cover ' />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          {props.Desc}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
   </div>
  );
}

export default Cards;