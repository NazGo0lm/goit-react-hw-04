//import React from 'react'

import ImageCard from "../ImageCard/ImageCard"

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul>
        {/* Набір елементів списку із зображеннями */}
        {images.map((image) => (
            <li key={image.id}>
              <ImageCard
                openModal={openModal}
                image={image}
              />
            </li>
      ))}
    </ul>

  )
}

export default ImageGallery

