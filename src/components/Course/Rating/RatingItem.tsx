import {
  StyledRatingItemContainer,
  StyledRatingItemTitle,
  StyledRatingItemText,
} from "./StyledRating";

type RatingItemType = {
  rate: number;
  content: string[];
};

export const RatingItem = ({ rate, content }: RatingItemType) => {
  return (
    <StyledRatingItemContainer>
      <StyledRatingItemTitle>{rate}</StyledRatingItemTitle>
      <StyledRatingItemText>
        <span>{content[0]}</span>
        <span>{content[1]}</span>
      </StyledRatingItemText>
    </StyledRatingItemContainer>
  );
};
