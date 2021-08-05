import { StyledPhotoGrid } from './styles';

const PhotoGrid = ({ imageData }) =>
  imageData && (
    <StyledPhotoGrid>
      <h2 className='imageTitle'>{imageData.title}</h2>
      <img
        src={imageData.thumbnailUrl}
        alt={imageData.title}
        className='thumbnail'
      />
    </StyledPhotoGrid>
  );

export default PhotoGrid;
