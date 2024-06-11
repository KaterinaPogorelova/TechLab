import { useState } from "react";
import {
  StyledPortfolioItemContainer,
  StyledPortfolioItemCase,
  StyledPortfolioItemInfo,
  StyledPortfolioItemAvatar,
  StyledPortfolioItemTitle,
} from "./StyledCoursePortfolio";

type ProjectProps = {
  avatarka: string;
  title: string;
  image: string;
  name: string;
};

export const CoursePortfolioItem = ({
  avatarka,
  title,
  image,
  name,
}: ProjectProps) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <StyledPortfolioItemContainer
      onClick={() => setIsActive(true)}
      className={isActive ? "active" : ""}
    >
      <StyledPortfolioItemCase>
        <img src={image} alt="portfolio" />
      </StyledPortfolioItemCase>
      <StyledPortfolioItemInfo>
        <StyledPortfolioItemAvatar>
          <img src={avatarka} alt="avatarka" />
        </StyledPortfolioItemAvatar>
        <StyledPortfolioItemTitle>
          <span>{name}</span>
          {title}
        </StyledPortfolioItemTitle>
      </StyledPortfolioItemInfo>
    </StyledPortfolioItemContainer>
  );
};
