import React, { useEffect } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addCategory, deleteCategory, getCategory, getVideo, updateCategory } from '../services/allAPI';
import { toast } from 'react-toastify';
import VideoCard from './VideoCard'


function Category() {



  // remove category
  const removeCategories = async (id) => {
    const response = await deleteCategory(id)
    handleGetCategory()
    console.log(response);
    toast.error('Category deleted successfully')
  }

  // get categories
  const handleGetCategory = async () => {
    const {data} = await getCategory()
    console.log(data);
    setCategoryDetails(data)
  }
  

  useEffect(()=>{
    handleGetCategory()
  },[])

  // to hold category details (including name and id)
  const [categoryDetails,setCategoryDetails] = useState([])
  console.log(categoryDetails);

  // to hold category name
  const [categoryName,setCategoryName] = useState('')
  console.log(categoryName);

  // add category
  const handleAddCategory = async () => {

    const body={
      categoryName,
      allVideos : []
    }

    // to make API call
    if (categoryName)
    {
      const response = await addCategory(body)
      console.log(response);
      toast.success("Category added Successfully")
      handleGetCategory()
      setCategoryName('')
      handleClose()
    }
    else
    {
      toast.error('Cannot add Category')
    }
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const videoDrop = async (e,categoryId) => {
    console.log("video dropped",+categoryId);
    const videoId = e.dataTransfer.getData("videoId")
    console.log(videoId);

    // API call to fetch video
    const {data} = await getVideo(videoId)
    console.log(data);

    // get category details
    const selectedCategory = categoryDetails.find(a=>a.id === categoryId)
    console.log(selectedCategory);

    // add video details to array (allvideos[])
    selectedCategory.allVideos.push(data)
    console.log(selectedCategory);

    // make an API call to update category details
    await updateCategory(categoryId,selectedCategory)
    handleGetCategory()
  }

  const dragOver = (e) => {
    console.log("video drag over");
    e.preventDefault()
  }

  return (
    <>
      <div>
        <Button  className='bg-dark' onClick={handleShow}>Category</Button>
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Category</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <FloatingLabel controlId="floatingPassword" label="Category Name">
                <Form.Control type="text" placeholder="Category Name" onChange={(e)=>setCategoryName(e.target.value)} />
              </FloatingLabel>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Close</Button>
            <Button variant="primary" onClick={handleAddCategory}>Add</Button>
          </Modal.Footer>
      </Modal>
    </div>
    <div className='my-2 p-3 border rounded ms-4 bg-dark' style={{width : "20rem"}}>
      {
        categoryDetails.length > 0 ? categoryDetails.map(a=>(
          <div onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e,a.id)} className='d-flex justify-content-between align-items-center'>
            <h4>{a.categoryName}</h4>
            <button className='btn bg-light m-1' onClick={()=>removeCategories(a.id)}><i className='fa-solid fa-trash text-danger'></i></button>
            <Row>
                {
                  a.allVideos && a.allVideos.map(data=>(
                    <Col>
                      <VideoCard displayData={data} insideCategory={true}/>
                    </Col>
                  ))
                }
            </Row>
          </div>
          
        )): <p>No Data</p>
      }
    </div>
    </>
  )
}

export default Category