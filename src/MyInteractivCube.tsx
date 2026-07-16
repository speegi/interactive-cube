import { MeshDistortMaterial, Resize } from "@react-three/drei";
import { useState } from "react";

export default function MyInteractivCube()
{

    const[hover,setHover] = useState(false)
    const[toggle,setToggle]= useState(false)
    return(
        <Resize scale={toggle?1:1.4}>
            <mesh  receiveShadow castShadow

                    onPointerOver={(event)=>setHover(true)}
                    onPointerOut={(event)=>setHover(false)}
                    onClick={(event)=>setToggle(!toggle)}
                >
                  <boxGeometry args={[1,1,1,15,15,15]}/>

                  <MeshDistortMaterial color={hover?'blue':'gray'} distort={1} speed={1}/>        
            </mesh>
        </Resize>
    )

}