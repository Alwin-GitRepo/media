import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function Landing() {

  const navigate=useNavigate()

  return (
    <div>
      <Row className='mt-4'>
        {/* first row  */}
        <Col>
          {/* content  */}
          <h1 className='m-3'>Welcome to <span className='text-dark'>Media Player</span> </h1>
          <p style={{textAlign : "justify"}} className='p-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae modi fugiat dolorem ullam laborum quam, omnis sint perferendis qui, ipsum deleniti neque, cupiditate delectus labore assumenda non eius sapiente magni.
          Sunt tempora consequatur earum nulla nisi aperiam cum pariatur officia id mollitia praesentium optio fugit soluta dolorum atque ut minima ullam excepturi accusantium labore illo, doloribus quas. Minima, quasi eos!</p>
          <button onClick={()=>navigate('/home')} className='bg-primary mx-3 mb-3 p-2'>Get Started</button>
        </Col>
        <Col>
          <img src="https://gifdb.com/images/high/music-glitching-record-j94oi9l08lwuki81.gif" alt="" style={{width : "40vw",height : "50vh"}} className='m-3'/>
        </Col>
      </Row>
      <Row style={{marginLeft : "7rem",display : "flex",justifyContent : "space-evenly",marginTop : "5rem",marginBottom : "5rem"}}>
        <h1 className='text-center mb-5'>Featured</h1>
        <Col>    
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://gifdb.com/images/high/listening-to-music-playing-headphones-917xrfcj5ywy343q.gif" style={{width : "18rem",height : "15rem"}} />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text className='text-dark'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card></Col>
        <Col>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cdn.dribbble.com/users/36548/screenshots/2078047/toyota-app-2015-radio-equalizer.gif" style={{width : "18rem",height : "15rem"}} />
      <Card.Body>
        <Card.Title>Category Videos</Card.Title>
        <Card.Text className='text-dark'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
        </Col>
        <Col>
              <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/8e/a0/53/8ea0536215e1c3e9ff47d599b450be26.gif" style={{width : "18rem",height : "15rem"}} />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text className='text-dark'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
        </Col>
      </Row>
      <Row className='m-3 p-3 border border-5 border-light'>
        <Col className='m-3 p-3'>
          <h3 style={{color : "red"}}>Simple,Fast and Powerful</h3>
          <h5 className='text-dark'>Play Everything</h5>
          <p style={{textAlign : "justify"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima praesentium harum aliquam eaque inventore porro eum sit esse consequatur temporibus, sequi odio adipisci blanditiis amet repudiandae, nisi quaerat quibusdam vitae.</p>
          <h5 className='text-dark'>Categorise Vidoes</h5>
          <p style={{textAlign : "justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, libero! Perferendis cupiditate labore fugiat, facilis aliquid, pariatur deleniti omnis velit distinctio voluptate minima nihil optio veritatis voluptatum laborum necessitatibus? Rem?</p>
          <h5 className='text-dark'>Managing History</h5>
          <p style={{textAlign : "justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nostrum sunt corporis? Sint ipsam, consectetur veritatis repudiandae nisi natus eveniet aperiam maxime dolores voluptatum. Natus molestiae consequatur quis adipisci dolorem.</p>
        </Col>
        <Col className='my-4'>
          <iframe className='my-5' width="100%" height="75%" src="https://www.youtube.com/embed/FV3bqvOHRQo?si=SJFkgF93EgsOzoVo&amp;start=05" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
        </Col>
      </Row>
    </div>
  )
}

export default Landing