import Color from '@src/commons/style/themes/colors';
import styled from '@src/commons/style/themes/styled';
import React from 'react';

const MovieItem = ({
  movieId,
  imageUrl,
  order,
  title,
}: {
  movieId: number;
  imageUrl: string;
  order: number;
  title: string;
}): JSX.Element => {
  return (
    <MovieItemContainer isOdd={order % 2 !== 0}>
      <MovieImage src={imageUrl} />
      <MovieInfoLine>
        <MovieOrder>[{order + 1}위]</MovieOrder>{' '}
        <MovieTitle>
          {movieId} - {title}
        </MovieTitle>
      </MovieInfoLine>
    </MovieItemContainer>
  );
};

const MovieItemContainer = styled.div<{ isOdd: boolean }>`
  border: solid 1px ${(props) => (props.isOdd ? Color.White : '#000')};
  border-radius: 6px;
  width: 100%;
`;

const MovieImage = styled.img`
  width: 100%;
`;

const MovieInfoLine = styled.p`
  display: flex;
  justify-content: space-between;
`;

const MovieOrder = styled.span``;
const MovieTitle = styled.span``;

export default MovieItem;
