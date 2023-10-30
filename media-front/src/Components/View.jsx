import React, { useEffect,useState } from 'react'
import VideoCard from './VideoCard'
import {getAllVideos} from '../services/allAPI'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function View({uploadVideoServerResponse}) {

  const [allVideos,setAllVideos]=useState([])
  const [deleteVideoStatus,setDeleteVideoStatus]=useState(false)

  // API call for displaying videocards
  const getUploadedVideos = async () => {
    // const response = await getAllVideos()  // all uploaded videos
    // console.log(response.data);
    const {data} = await getAllVideos()  // all uploaded videos (de structured)
    console.log(data);
    setAllVideos(data)
  }
  console.log(allVideos);
  useEffect (()=>{
    getUploadedVideos()
    setDeleteVideoStatus(false)
  },[uploadVideoServerResponse,deleteVideoStatus])

  return (
    <>
        <Row>
          {
            allVideos.length>0? allVideos.map(video => (
                          <Col sm={12} md={6} xl={4}>
              <VideoCard displayData={video} setDeleteVideoStatus={setDeleteVideoStatus}/>
            </Col>
            )): <p>No Data</p>
          }
        </Row>
    </>
  )
}

export default View