// import { useEffect, useRef } from "react";
// import * as THREE from "three"; // Required for Vanta.js
// import FOG from "vanta/dist/vanta.fog.min"; // Fog effect for abstract movement

// const BlurBackground = () => {
//   const vantaRef = useRef(null);

//   useEffect(() => {
//     let vantaEffect;

//     if (vantaRef.current) {
//       vantaEffect = FOG({
//         el: vantaRef.current,
//         THREE: THREE, // Required for Vanta.js
//         highlightColor: 0xa3e4d7, // Soft mint green
//         midtoneColor: 0xf7dc6f, // Gentle pastel yellow
//         lowlightColor: 0xf5b7b1, // Warm pastel pink
//         baseColor: 0x34495e, // Cool steel blue
//         blurFactor: 0.5, // Balanced blur for subtlety
//         speed: 0.8, // Slower movement for relaxation
//         zoom: 1.05, // Slight zoom for a calming depth
//       });
//     }

//     return () => {
//       if (vantaEffect) vantaEffect.destroy(); // Clean up the effect on component unmount
//     };
//   }, []);

//   return (
//     <div
//       ref={vantaRef}
//       className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none"
//     ></div>
//   );
// };for (let i = 0; i < 5; i++) {
//   console.log('Hello world!');
// }


// export default BlurBackground;