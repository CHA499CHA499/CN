import MetaBalls from '../components/MetaBalls/MetaBalls.jsx';
import React from 'react';
import Aurora from '../components/Aurora/Aurora.jsx';

export default function About() {
  return (
    <div className="simple-scroll-container">
      {/* 极光区块 */}
      <div className="aurora-block">
        <Aurora 
          colorStops={["#00d8ff", "#7cff67", "#00d8ff"]}
          speed={0.5}
          amplitude={1}
        />
      </div>

      {/* 中间文字 */}
        <div className="center-text" style={{
          position: 'absolute',
          top: '80%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: '#ffffff',
          fontSize: '2rem',
          zIndex: 10,
          opacity: 0.3,
          filter: 'blur(1px)'
        }}>
          VVV划一划VVV
        </div>

        {/* MetaBalls区块 */}
      <div className="metaballs-block">
        <MetaBalls
          color="#ffffff"
          cursorBallColor="#ffffff"
          cursorBallSize={2}
          ballCount={15}
          animationSize={30}
          enableMouseInteraction={true}
          hoverSmoothness={0.05}
          clumpFactor={1}
          speed={0.3}
        />
      </div>
    </div>
  );
}