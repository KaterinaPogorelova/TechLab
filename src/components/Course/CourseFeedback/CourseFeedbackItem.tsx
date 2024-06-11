import {
  StyledCourseFeedbackItem,
  StyledCourseFeedbackItemTitle,
  StyledCourseFeedbackItemText,
  StyledCourseFeedbackItemName,
  StyledCourseFeedbackAvatar,
  StyledStarsContainer,
} from "./StyledCourseFeedback";
import star from "../../../assets/icons/StarYellow.svg";
import starBorder from "../../../assets/icons/StarYellowBorder.svg";

type FeedbackProps = {
  stars: number;
  avatar: string;
  text: string;
  name: string;
  place: string;
};

export const CourseFeedbackItem = ({
  stars,
  avatar,
  text,
  name,
  place,
}: FeedbackProps) => {
  return (
    <StyledCourseFeedbackItem>
      <StyledCourseFeedbackItemTitle>
        <StyledStarsContainer>
          {Array.from({ length: 5 }).map((_, index) => (
            <img
              key={index}
              src={index < stars ? star : starBorder}
              alt="star"
            />
          ))}
        </StyledStarsContainer>

        <StyledCourseFeedbackAvatar>
          <img src={avatar} alt="avatar" />
        </StyledCourseFeedbackAvatar>
      </StyledCourseFeedbackItemTitle>
      <StyledCourseFeedbackItemText>{text}</StyledCourseFeedbackItemText>
      <StyledCourseFeedbackItemName>
        {name}
        <span>{place}</span>
      </StyledCourseFeedbackItemName>
    </StyledCourseFeedbackItem>
  );
};
