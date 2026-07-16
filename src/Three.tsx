import {  Environment, OrbitControls, useHelper } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import './Three.css';
import MyInteractivCube from "./MyInteractivCube";


export default function Three(){

    return(
        <Canvas shadows camera={{ position: [3, 3, 3], fov: 35 }}>
            
            <ambientLight intensity={0.4} />    
            <directionalLight 
                castShadow 
                position={[5, 8, 5]} 
                intensity={1.2} 
                shadow-mapSize={[1024, 1024]} // Eztől lesz szép, nem pixeles az árnyék széle
                shadow-bias={-0.0001} // Megakadályozza a saját felületen lévő árnyék-csíkozódást
            />
            <Environment preset="city" />       
            <MyInteractivCube/>
            <OrbitControls/>
        </Canvas>
    )
}