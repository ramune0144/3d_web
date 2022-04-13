import axios from 'axios'
import React, { Suspense, useLayoutEffect, useState } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { Stage, OrbitControls } from '@react-three/drei'
import { PLYLoader } from 'three/examples/jsm/loaders/PLYLoader'
function Model(props) {
  const geo = useLoader(PLYLoader, props.part)

  useLayoutEffect(() => void geo.computeVertexNormals(), [geo])
  return (
    <mesh castShadow receiveShadow geometry={geo} {...props}>
      <meshStandardMaterial color="#e2872d" flatShading />
    </mesh>
  )
}

const UploadImg = () => {
  const [file, setFile] = useState({})
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null)
  const onClickUpload = async () => {
    const formData = new FormData()
    formData.append('file', file)
    const uploadImg = await axios({
      method: 'post',
      url: 'http://192.168.1.35:5000/upload',
      data: formData
    })
  }
  const handleUploadImage = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.onloadend = () => {
      setFile(file)
      setImagePreviewUrl(reader.result)
    }
    reader.readAsDataURL(file)
  }
  return (
    <React.Fragment>
      <div style={{ height: '100%', width: '100%', alignItems: 'center', flex: 1 }}>
        <div
          style={{
            backgroundColor: '#a1a7a41a',
            height: 600,
            width: 750,
            marginLeft: 'auto',
            marginRight: 'auto',
            borderStyle: 'solid',
            marginTop: '10%',
            borderWidth: '10',
            borderColor: '#343434'
            
          }}>
          <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 0], fov: 55 }}>
            <Suspense fallback={null}>
              <Stage>
                <Model scale={0.01} part={imagePreviewUrl ? imagePreviewUrl : '/T1.ply'} />
              </Stage>
            </Suspense>
            <OrbitControls />
          </Canvas>
        </div>
        <div style={{ marginTop: 20, textAlign: 'center' }}>
          <h1>This is a ply file</h1>
        </div>

        <div style={{ marginTop: 50, marginBottom: 50, textAlign: 'center' }}>
          <input type="file" onChange={handleUploadImage} />
          <button onClick={onClickUpload}> Upload </button>
        </div>
      </div>
    </React.Fragment>
  )
}
export default UploadImg
