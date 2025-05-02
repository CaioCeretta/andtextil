'use client'

import { Image } from '@prisma/client'
import { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'

export interface ImageSliderProps {
  images: Image[] | Image
}

export const ImageSlider = ({ images }: ImageSliderProps) => {
  const [imageIndex, setImageIndex] = useState(1)

  const imagesArray = Array.isArray(images) ? images : [images]

  const prevSlide = () => {
    const isFirstSlide = imageIndex === 0
    const newIndex = isFirstSlide ? imagesArray.length - 1 : imageIndex - 1
    setImageIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = imageIndex === imagesArray.length - 1
    const newIndex = isLastSlide ? 0 : imageIndex + 1

    setImageIndex(newIndex)
  }

  const goToSlide = (slideIndex: number) => {
    setImageIndex(slideIndex)
  }

  return (
    <>
      <div
        style={{ backgroundImage: `url(${imagesArray[imageIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      />
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={() => prevSlide()} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={() => nextSlide()} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {imagesArray.map((_, index) => (
          <div
            key={index}
            onClick={() => {
              goToSlide(index)
            }}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled className="" />
          </div>
        ))}
      </div>
    </>
  )
}

export default ImageSlider
