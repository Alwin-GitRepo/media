import React from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import {deleteVideo,addWatchHistory} from '../../src/services/allAPI'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function VideoCard({displayData,setDeleteVideoStatus,insideCategory}) {

  const dragStarted=(e,id) => {
    console.log("drag started",+id,e);
    e.dataTransfer.setData("videoId",id)
  }

  //remove video
  const remove = async(id)=>
  {
    // eslint-disable-next-line no-unused-vars
    const response = await deleteVideo(id)
    setDeleteVideoStatus(true)
    toast.error('Video deleted successfully')
  }

  console.log(displayData);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = async() => 
  {
    setShow(true);

    //API call to add watch-history
    const {caption,embedLink} = displayData

    //to get current date and time
    let today = new Date()
    let timeStamp = new Intl.DateTimeFormat('en-in',{year : "numeric",month : "2-digit",day : "2-digit",hour : "2-digit",minute : "2-digit",second : "2-digit"}).format(today)
    console.log(timeStamp);

    let videoDetails = {
      caption,
      embedLink,
      timeStamp
    }

    // api call to get watch history
    await addWatchHistory(videoDetails)

  }
  return (
    <div>
      <Row>
        <Col>
          <Card draggable onDragStart={(e)=>dragStarted(e,displayData.id)} style={{ width: '18rem' }} className='m-5'>
            <Card.Img onClick={handleShow} variant="top" src={displayData.url} style={{height : '15rem'}} />
            <Card.Body className='d-flex justify-content-evenly align-items-center'>
                <Card.Title className='mt-2'>{displayData.caption}</Card.Title>
                {insideCategory?"" : <Button className='btn btn-danger ' onClick={()=>{remove(displayData.id)}}><i className='fa-solid fa-trash'></i></Button>}
            </Card.Body>
          </Card>
        </Col>
      </Row>
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Video</Modal.Title>
        </Modal.Header>
        <Modal.Body><iframe width="100%" height="325px" src={displayData.embedLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default VideoCard