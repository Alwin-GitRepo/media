import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import { getWatchHistory } from '../services/allAPI';


function WatchHistory() {

  const [allWatchHistory,setallWatchHistory] = useState([]);
  const getAllWatchHistory = async()=>{
    const videoDetails = await getWatchHistory();
    setallWatchHistory(videoDetails.data);
  }
  console.log(allWatchHistory)

  useEffect(()=>{
    getAllWatchHistory();
  },[])

  return (
    <>
      <div className='d-flex justify-content-between align-items-center'>
        <h3>WatchHistory</h3>
        <Link to={'/home'} className='text-decoration-none'>
          <p><i class="fa-solid fa-backward fa-beat-fade me-1"></i>Back to Home</p>
        </Link>
      </div>
      <div  className='container m-5'>
        <Table striped bordered hover variant="secondary">
      <thead className='bg-danger'>
        <tr>
          <th>Id</th>
          <th>Caption</th>
          <th>URL</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {
          allWatchHistory.map(e=>(
            <tr>
          <th scope='row'>{e.id}</th>
          <td>{e.caption}</td>
          <td><Link to={e.embedLink} target='blank'>{e.embedLink}</Link></td>
          <td>{e.timeStamp}</td>
        </tr>
            ))
          }
      </tbody>
    </Table>
      </div>
    </>
  )
}

export default WatchHistory