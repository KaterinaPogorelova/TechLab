import { useWindowSize } from "../../../hooks/useWindowSize";
import {
  StyledContainer,
  StyledFlex,
  StyledFrameHeader,
  StyledSectionSeparator,
} from "../../../styledConstants";
import { colors } from "../../../styledConstantsColors";
import { CoursePricesItem } from "./CoursePricesItem";
import {
  StyledCoursePrices,
  StyledCoursePricesTitleContainer,
  StyledCoursePricesTitleText,
  StyledCoursePricesTitleSubText,
} from "./StyledCoursePrices";

const coursePricesList = [
  {
    title: "Group",
    content: [
      "260 video lessons",
      "Weekly feedback webinars",
      "Checking of assigments",
      "Personal curator",
      "12 real projects in portfolio",
      "Lifetime access to the course",
    ],
    price: "1500 eur",
  },
  {
    title: "Self-paced",
    content: [
      "260 video lessons",
      "40 recorded lessons",
      "12 Real projects in portfolio",
      "1-year access",
    ],
    price: "1200 eur",
  },
  {
    title: "Unit of lessons",
    content: [
      "Testing for each topic",
      "Individual topic selection",
      "1-year access",
    ],
    price: "150 eur/unit",
  },
];

export const CoursePrices = () => {
  const { width = 0 } = useWindowSize();
  return (
    <>
      <StyledCoursePrices>
        <StyledContainer>
          <StyledCoursePricesTitleContainer>
            <StyledFrameHeader>
              Course <span>prices</span>
            </StyledFrameHeader>
            <StyledCoursePricesTitleText>
              Buy the complete course or <span>customize</span> the course to
              suit your needs.
            </StyledCoursePricesTitleText>
            <StyledCoursePricesTitleSubText>
              You can also elevate your professional level with the assistance
              of our mentors.
            </StyledCoursePricesTitleSubText>
          </StyledCoursePricesTitleContainer>
          <StyledFlex>
            {coursePricesList.map((item, index) => (
              <CoursePricesItem
                key={index}
                title={item.title}
                content={item.content}
                price={item.price}
              ></CoursePricesItem>
            ))}
          </StyledFlex>
        </StyledContainer>
      </StyledCoursePrices>
      {width > 1023 && (
        <StyledSectionSeparator
          $background={colors.neutral.lightGray}
        ></StyledSectionSeparator>
      )}
    </>
  );
};
