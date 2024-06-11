import { StyledContainer, StyledFlex } from "../../../styledConstants";
import { RatingItem } from "./RatingItem";
import { StyledRatingWrap } from "./StyledRating";

const ratingList = [
  {
    rate: 4.9,
    content: ["120 rewiews", "Google"],
  },
  {
    rate: 4.8,
    content: ["95 rewiews", "Greatschools"],
  },
  {
    rate: 4.9,
    content: ["116 rewiews", "SwitchUp"],
  },
  {
    rate: 4.8,
    content: ["95 rewiews", "Course Report"],
  },
];

export const Rating = () => {
  return (
    <StyledRatingWrap>
      <StyledContainer>
        <StyledFlex>
          {ratingList.map((item, index) => (
            <RatingItem key={index} rate={item.rate} content={item.content} />
          ))}
        </StyledFlex>
      </StyledContainer>
    </StyledRatingWrap>
  );
};
