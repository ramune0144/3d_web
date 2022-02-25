import React from 'react'
import { Route, Link, Routes } from 'react-router-dom'
import UploadImg from './component/UploadImg'
const Sketchfab = () => {
  return (
    <div style={{ height: '100%', width: '100%', alignItems: 'center', flex: 1 }}>
      <div
        style={{
          height: 600 ,
          width: 750,
          marginLeft: 'auto',
          marginRight: 'auto',
          borderStyle: 'solid',
          marginTop: '3%',
          borderWidth: '10',
          borderColor: '#343434'
        }}>
        <iframe
          style={{ height: 600, width: 750 }}
          title="cartoon"
          frameborder="0"
          allowfullscreen
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          xr-spatial-tracking
          execution-while-out-of-viewport
          execution-while-not-rendered
          web-share
          src="https://sketchfab.com/models/c138707cd4bc45de8d7d05f2bcf98175/embed"></iframe>
      </div>
    </div>
  )
}
const App = () => {
  return (
    <div>
      <nav>
        <li>
          <Link to="/Sketchfab">Sketchfab</Link>
        </li>
        <li>
          <Link to="/Screen3drender">Screen3drender</Link>
        </li>
      </nav>
      <Routes>
        <Route path="/Sketchfab" element={<Sketchfab />}></Route>
        <Route path="/Screen3drender" element={<UploadImg />}></Route>
      </Routes>
    </div>
  )
}
export default App
