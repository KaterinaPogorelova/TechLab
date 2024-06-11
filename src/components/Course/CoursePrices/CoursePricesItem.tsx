import {
  StyledCoursePricesItemWrap,
  StyledCoursePricesItem,
  StyledCoursePricesItemTitle,
  StyledCoursePricesItemList,
  StyledCoursePricesListItem,
  StyledCoursePricesItemPrice,
} from "./StyledCoursePrices";
import lineDown from "../../../assets/icons/Checkmark_Down.svg";

type CoursePricesItemType = {
  title: string;
  content: string[];
  price: string;
};

export const CoursePricesItem = ({
  title,
  content,
  price,
}: CoursePricesItemType) => {
  return (
    <StyledCoursePricesItem>
      <StyledCoursePricesItemWrap></StyledCoursePricesItemWrap>
      <StyledCoursePricesItemTitle>{title}</StyledCoursePricesItemTitle>
      <StyledCoursePricesItemList>
        {content.map((item, index) => (
          <StyledCoursePricesListItem key={index}>
            {" "}
            <img src={lineDown} alt="arrow"></img>
            {item}
          </StyledCoursePricesListItem>
        ))}
      </StyledCoursePricesItemList>
      <StyledCoursePricesItemPrice>{price}</StyledCoursePricesItemPrice>
    </StyledCoursePricesItem>
  );
};
