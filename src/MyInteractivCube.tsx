import { animated, useSpring } from "@react-spring/three";
import { MeshDistortMaterial } from "@react-three/drei";
import { useState } from "react";

export default function MyInteractivCube()
{

    const[hover,setHover] = useState(false)
    const[toggle,setToggle]= useState(false)
    const { scale } = useSpring({
        scale: toggle ? 1 : 1.4,
        config: { mass: 3, tension: 400, friction: 20 }
    });

    return(
        
            <animated.mesh  
                receiveShadow 
                castShadow
                scale={scale}
                
                onPointerOver={()=>setHover(true)}
                onPointerOut={()=>setHover(false)}
                onClick={()=>setToggle(!toggle)}
            >
                <boxGeometry args={[1,1,1,15,15,15]}/>
                {/*<octahedronGeometry args={[0.5,8]}/>*/}
                <MeshDistortMaterial color={hover?'black':'gray'} distort={1} speed={0.7}/>        
            </animated.mesh>
       
    )

}