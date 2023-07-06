import React, { useState } from 'react'
import './new.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import  DriveFolderUploadOutlined from '@mui/icons-material/DriveFolderUploadOutlined'

const New = ({inputs,title}) => {

  const[file, setFile] = useState("");


  return (
    <div className="new">
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={file ? URL.createObjectURL(file) : "https://consultix.radiantthemes.com/demo-nine/wp-content/themes/consultix/images/no-image-found-360x250.png"} alt="" />
          </div>
          <div className="right">
            <form action="">
            <div className="formInput">
                <label htmlFor="file">Image: <DriveFolderUploadOutlined className='icon'/></label>
                <input type="file" id='file' onChange={(e)=>setFile(e.target.files[0])} style={{display:"none"}}/>
              </div>
              
              {inputs.map((input)=>(
                <div key={input.id} className="formInput">
                <label>{input.label}</label>
                <input type={input.type} placeholder={input.placeholder} />
              </div>
              ))}
              
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New