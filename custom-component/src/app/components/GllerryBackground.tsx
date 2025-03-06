
"use client";

import { useEffect, useState } from "react"
import Image from "next/image";


import image1 from "../../../public/image1.jpg"
import image2 from "../../../public/image2.jpg"
import image3 from "../../../public/image3.jpg"
import image4 from "../../../public/image4.jpg"
import image5 from "../../../public/image5.jpg"
import image6 from "../../../public/image6.jpg"
import image7 from "../../../public/image7.jpg"
import image8 from "../../../public/image8.jpg"
import image9 from "../../../public/image9.jpg"
import image10 from "../../../public/image10.jpg"
import image11 from "../../../public/image11.jpg"
import image12 from "../../../public/image12.jpg"
import HeartCircle from "./heart-display";


export default function GalleryBackground() {
    const media = [
        { type: "image", src: image1 },
        { type: "image", src: image2 },
        { type: "image", src: image3 },
        { type: "image", src: image4 },
        { type: "image", src: image5 },
        { type: "image", src: image6 },
        { type: "image", src: image7 },
        { type: "image", src: image8 },
        { type: "image", src: image9 },
        { type: "image", src: image10 },
        { type: "image", src: image11 },
        { type: "image", src: image12 },
    ];
    const [currentImages, setCurrentImages] = useState(media.slice(0, 4)); // Initially display the first 4 images

  useEffect(() => {
    const interval = setInterval(() => {
      // Update one image from the array randomly and shift the rest
      const newImage = media[Math.floor(Math.random() * media.length)];
      setCurrentImages((prevImages) => {
        const newImages = [...prevImages.slice(1), newImage]; // Remove the first image and add the new image
        return newImages;
      });
    }, 3000); // Update every 1 second

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full flex items-center justify-center bg-gray-900">
      <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-2 opacity-50">
        {currentImages.map((src, index) => (
          <div key={index} className="relative w-full h-full">
            <Image
              src={src.src}
              alt={`Background ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        ))}
      </div>

      <div className="relative z-10 text-white text-center">
        <HeartCircle text="Happy BirthDay To Yok" size={700} heartCount={14} animationSpeed={20} />
      </div>
    </div>
  );
}