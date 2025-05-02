// 'use client'

// import { Image } from '@prisma/client'
// import NextImage from 'next/image'
// import { useState } from 'react'

// export interface ImageSliderProps {
//   images: Image[] | Image
// }

// export const ImageSlider = ({ images }: ImageSliderProps) => {
//   const [imageIndex, setImageIndex] = useState(0)
//   const [selectedDotIndex, setSelectedDotIndex] = useState<number | null>(0)

//   // Convert single Image to array for consistent rendering
//   const imagesArray = Array.isArray(images) ? images : [images]

//   const handlePrev = () => {
//     setImageIndex(
//       (prevIndex) => (prevIndex - 1 + imagesArray.length) % imagesArray.length,
//     )
//   }

//   const handleNext = () => {
//     setImageIndex((prevIndex) => (prevIndex + 1) % imagesArray.length)
//   }

//   const handleThumbnailClick = (index: number) => {
//     setImageIndex(index)
//     setSelectedDotIndex(index) // Set the index of the selected dot
//   }

//   const handleDotClick = (index: number) => {
//     setImageIndex(index)
//     setSelectedDotIndex(index) // Set the index of the selected dot
//   }

//   return (
//     <div className="flex relative gap-2">
//       {/* Thumbnail column */}
//       <div className="flex flex-col gap-2 w-[100px]">
//         <div className="border-blue-text border p-1 rounded-md">
//           {imagesArray.map((image, index) => (
//             <button
//               key={index}
//               onClick={() => handleThumbnailClick(index)}
//               className={`w-full h-20 mb-2 border rounded-lg overflow-hidden ${
//                 index === imageIndex ? 'border-yellow-500' : 'border-gray-300'
//               }`}
//             >
//               <NextImage
//                 src={image.url}
//                 alt={`Product Image ${index}`}
//                 width={100}
//                 height={100}
//                 className="object-cover w-full h-full"
//               />
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Main Image Slider */}

//       <div className="w-full h-full rounded-2xl bg-center bg-cover duration-500">
//         <NextImage
//           src={imagesArray[imageIndex].url}
//           alt="product-image"
//           width="520"
//           height="480"
//           className="object-cover rounded-lg"
//         />
//         {imagesArray.length > 1 && (
//           <div className="flex justify-center items-center gap-3">
//             {imagesArray.map((_, index: number) => (
//               <div
//                 key={index}
//                 onClick={() => handleDotClick(index)}
//                 className={`${selectedDotIndex === index ? 'bg-yellow-500 border-1 border-gray-500' : 'bg-yellow-200 border border-gray-300'}
//                 text-white p-2 w-3 rounded-full mt-2 cursor-pointer transition-all`}
//               />
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

// export default ImageSlider
