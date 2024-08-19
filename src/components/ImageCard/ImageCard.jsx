//import React from 'react'

const ImageCard = ({ image, openModal }) => {
  //console.log('Urls:', image.urls);
  return (
    <div
        
        style={{ backgroundColor: image.color, borderColor: image.color }}
      >
        <img
          src={image.urls.small}
          alt={image.alt_description}
          onClick={() => openModal(image)}
        />
      </div>
  )
}

export default ImageCard
