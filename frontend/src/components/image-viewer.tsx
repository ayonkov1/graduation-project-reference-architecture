type ImageViewerProps = {
  firstImgSrc: string
  otherImages: {
    src: string
  }[]
}

const ImageViewer = ({ firstImgSrc, otherImages }: ImageViewerProps) => {
  return (
    <div className='images'>
      <div className='first-image'>
        <img
          src={firstImgSrc}
          alt='product'
        />
      </div>
      {otherImages.map((image) => (
        <div
          key={image.src}
          className='image'>
          <img
            src={image.src}
            alt='product'
          />
        </div>
      ))}
    </div>
  )
}

export default ImageViewer
