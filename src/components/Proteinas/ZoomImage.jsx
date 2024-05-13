import React, { useState, useRef, useEffect } from "react";

const src = "https://acdn.mitiendanube.com/stores/001/681/926/products/citrato-48c1f7a8a3f7ffffe217049136708845-1024-1024.webp";
const src2 = "https://acdn.mitiendanube.com/stores/001/681/926/products/pancake-keto11-c2b0a8c4b86b838a6116693845118492-1024-1024.webp";
export const Zoom = () => {
  const [backgroundPosition, setBackgroundPosition] = useState("0% 0%");
  const figureRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { left, top, width, height } = figureRef.current.getBoundingClientRect();
      const x = ((e.pageX - left) / width) * 100;
      const y = ((e.pageY - top) / height) * 100;
      setBackgroundPosition(`${x}% ${y}%`);
    };

    if (figureRef.current) {
      figureRef.current.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (figureRef.current) {
        figureRef.current.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <figure ref={figureRef} className='zoom' style={{ backgroundImage: `url(${src})`, backgroundPosition }}>
      <img className='image1' src={src} alt='Zoomed' />
    </figure>
  );
};

export const Zoom2 = () => {
  const [backgroundPosition, setBackgroundPosition] = useState("0% 0%");
  const figureRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { left, top, width, height } = figureRef.current.getBoundingClientRect();
      const x = ((e.pageX - left) / width) * 100;
      const y = ((e.pageY - top) / height) * 100;
      setBackgroundPosition(`${x}% ${y}%`);
    };

    if (figureRef.current) {
      figureRef.current.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (figureRef.current) {
        figureRef.current.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <figure ref={figureRef} className='zoom' style={{ backgroundImage: `url(${src2})`, backgroundPosition }}>
      <img className='image2' src={src2} alt='Zoomed' />
    </figure>
  );
};
