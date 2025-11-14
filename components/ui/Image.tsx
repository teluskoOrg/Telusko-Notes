"use client";

import { div } from "framer-motion/client";
import Image from "next/image";

interface MyImageProps {
  src: string;        
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function MyImage({
  src,
  alt,
  width = 800,
  height = 600,
  className = "",
}: MyImageProps) {

  return (
    <div className="w-full flex justify-center">
        <img 
        className="w-full h-auto"
        src={src} />
    </div>
  );
}
