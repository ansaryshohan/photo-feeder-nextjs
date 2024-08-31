import SinglePhoto from "./SinglePhoto";

const PhotoList = ({photos}) => {

  return (
    <div className="container my-4 lg:my-8">
    <div className="img-grid">
      {
        photos.map(photo=><SinglePhoto key={photo.id} photo={photo}/>)
      }
    </div>
    </div>
  )
}

export default PhotoList