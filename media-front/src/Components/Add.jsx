import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { uploadVideo } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({setUploadVideoServerResponse}) {

  const [video,setVideo] = useState({
    id : "",
    caption : "",
    url : "",
    embedLink : ""
  })
  console.log(video);

  const getEmbedLink = (e) => {
    const {value} = e.target
    const link = `https://www.youtube.com/embed/${value.slice(17)}`
    console.log(link);
    setVideo({...video,embedLink : link})
  }

  // to upload video
  const handleUpload = async () => {
    const {id,caption,url,embedLink} = video
    if (!id || !caption || !url || !embedLink)
    {
      toast.error("Please fill the form")
    }
    else
    {
      // make API call
      const response = await uploadVideo(video)
      console.log(response);
      if (response.status>=200 && response.status<=300)
      {
        // set server response 
        setUploadVideoServerResponse(response.data)
        toast.success(`${response.data.caption} added successfully`)
        setVideo({
          id : '',
          caption : '',
          url : '',
          embedLink : ''
        })
        handleClose()
      }
      else
      {
        toast.warning('please provide a unique id')
      }
    }
  } 

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="container d-flex">
        <h5 className='mt-2'>Upload New Video</h5>
        <button className='btn btn-secondary p-1 m-1' onClick={handleShow}><i class="fa-solid fa-plus"></i></button>
        <ToastContainer position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"/>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Upload Video</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Please fill following details</p>
            <form action="">
              <FloatingLabel label="Video Id" className="mb-1">
                <Form.Control onChange={(e) => setVideo({...video,id : e.target.value})} type="text" placeholder="Video Id" />
              </FloatingLabel>
              <FloatingLabel label="Video Caption" className="mb-1">
                <Form.Control onChange={(e) => setVideo({...video,caption : e.target.value})} type="text" placeholder="Video Caption" />
              </FloatingLabel>
              <FloatingLabel label="Video Image URL" className="mb-1">
                <Form.Control onChange={(e) => setVideo({...video,url : e.target.value})} type="text" placeholder="Video Image URL" />
              </FloatingLabel>
              <FloatingLabel label="Youtube Link" className="mb-1">
                <Form.Control onChange={getEmbedLink} type="text" placeholder="Youtube Link" />
              </FloatingLabel>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleUpload}>Upload</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  )
}

export default Add