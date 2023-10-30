import React, { useState } from 'react'
import Add from '../Components/Add'
import { Link } from 'react-router-dom'
import View from '../Components/View'
import Category from '../Components/Category'


function Home() {

  const [uploadVideoServerResponse,setUploadVideoServerResponse] = useState({})

  return (
    <div>

      {/* first div  */}
      <div className="container d-flex align-items-center justify-content-between">
        <div className="add-videos">
          <Add setUploadVideoServerResponse={setUploadVideoServerResponse}/>
        </div>
        <h5><Link to={'/watch-history'} style={{textDecoration : "none"}}>Watch History</Link></h5>
      </div>

      {/* second div  */}
      <div className="container-fluid d-flex justify-content-between">
        <div className="all-videos">
          <h5 className='my-4' style={{color : "black"}}>All Videos</h5>
          <View uploadVideoServerResponse={uploadVideoServerResponse}/>
        </div>
        <div className='mt-4 text-end' style={{width : "40rem"}}><Category/></div>
      </div>

    </div>
  );
}

export default Home;
