"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface ImageCarouselProps {
  images: string[];
  title?: string;
}

export default function ImageCarousel({ images, title }: ImageCarouselProps) {
  return (
    <div className="w-full">
      {title && (
        <h3 className="mb-4 text-lg font-bold" style={{ color: "#00d9ff" }}>
          {title}
        </h3>
      )}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="w-full aspect-video rounded-lg overflow-hidden"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full relative bg-gray-800 flex items-center justify-center">
              <img
                src={image}
                alt={`Project image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
