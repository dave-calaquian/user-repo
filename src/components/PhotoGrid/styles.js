import styled from 'styled-components';

export const StyledPhotoGrid = styled.div`
  width: 300px;
  height: 400px;
  margin: 24px;
  display: flex;
  flex-direction: column;
  border: 1px solid grey;
  padding: 24px;
  border-radius: 8px;

  .imageTitle {
    flex: 1;
  }

  .thumbnail {
    height: 250px;
  }
`;
