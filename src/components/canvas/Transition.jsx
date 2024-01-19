import { OrbitControls } from "@react-three/drei";
import { FadingImage } from "./FadingImage";

export const Transition = () => {
  return (
    <>
      <OrbitControls />
      <FadingImage position-x={-1.5} />
    </>
  );
};
