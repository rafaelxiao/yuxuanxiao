import React, { useRef, useState} from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import "../styles/Intro.css";


function Cylinder3d(props) {
    const ref = useRef();
    const [hovered, hover] = useState(false);
    const [clicked, click] = useState(false);
    useFrame((state, delta) => (ref.current.rotation.x += 0.01));
    return (
        <mesh {...props} 
            ref={ref} 
            scale={clicked ? 1.5 : 1}
            onClick={(event) => click(!clicked)}
            onPointerOver={(event) => hover(true)}
            onPointerOut={(event) => hover(false)}
        >
            <cylinderGeometry args={[1, 1, 1]} />
            <meshStandardMaterial 
                wireframe={props.wireframe}
                color={hovered ? 'blue' : 'green'}
            />
        </mesh>
    )
}

function Intro({loc_id, main, desc, character}) {
    return (
        <div id={loc_id} className='area'>
            <div className="anim">
                <Canvas className="anim">
                    <pointLight position={[10, 10, 10]} />
                    <Cylinder3d position={[-1.2, 0, 0]} />
                </Canvas>
            </div>
            <div className="content">
                <h2 className="main">{main}</h2>
                <p className="character">{character}</p>
                <p className="desc">{desc}</p>
            </div>
            {/* <img src={img_src} className="bg_image"></img> */}
        </div>
    )
}

export default Intro;