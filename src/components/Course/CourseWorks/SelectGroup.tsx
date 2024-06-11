import { StyledButton, StyledButtonContainer } from "./StyledCourseWorks";

interface SelectGroupProps {
  words: string[];
  goToIndex: (index: number) => void;
  activeIndex: number;
}
export const SelectGroup: React.FC<SelectGroupProps> = ({
  words,
  goToIndex,
  activeIndex,
}) => {
  return (
    <StyledButtonContainer>
      {words.map((word, index) => (
        <StyledButton
          key={index}
          onClick={() => goToIndex(index)}
          active={activeIndex === index}
        >
          {word}
        </StyledButton>
      ))}
    </StyledButtonContainer>
  );
};
// transition: transform 0.5s ease-in-out;
// transform: ${({ currentIndex }) => `translateX(-${currentIndex * 100}%)`};
