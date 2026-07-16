import { animated, useSpring } from "@react-spring/three";
import { MeshDistortMaterial } from "@react-three/drei";
import { useState } from "react";

export default function MyInteractivCube()
{

    const[hover,setHover] = useState(false)
    const[toggle,setToggle]= useState(false)
    const { scale } = useSpring({
        scale: toggle ? 1 : 1.4,
        config: { mass: 1, tension: 200, friction: 20 }
    });

    return(
        
            <animated.mesh  
                receiveShadow 
                castShadow
                scale={scale}
                
                onPointerOver={(event)=>setHover(true)}
                onPointerOut={(event)=>setHover(false)}
                onClick={(event)=>setToggle(!toggle)}
            >
                <boxGeometry args={[1,1,1,15,15,15]}/>
                <MeshDistortMaterial color={hover?'blue':'gray'} distort={1} speed={1}/>        
            </animated.mesh>
       
    )

}