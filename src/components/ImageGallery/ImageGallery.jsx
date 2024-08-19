//import React from 'react'

import ImageCard from "../ImageCard/ImageCard"

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul>
        {/* Набір елементів списку із зображеннями */}
      <li>
        <div>
          {images.map((image) => (
        <ImageCard
          openModal={openModal}
          key={image.id}
          image={image}
        />
      ))}
        </div>
      </li>

      
    </ul>

  )
}

export default ImageGallery

