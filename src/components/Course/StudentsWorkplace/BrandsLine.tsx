import {
  StyledMarqueeContainer,
  StyledMarqueeInner,
  StyledImageWrapper,
} from "./StyledStudentsWorkplace";

interface MarqueeProps {
  images: string[];
  speed: number;
}

const BrandsLine: React.FC<MarqueeProps> = ({ images, speed }) => {
  const imageContent = (
    <>
      {images.map((src, index) => (
        <StyledImageWrapper key={index}>
          <img src={src} alt="brand" />
        </StyledImageWrapper>
      ))}
    </>
  );

  return (
    <StyledMarqueeContainer>
      <StyledMarqueeInner speed={speed}>
        {imageContent}
        {imageContent}
      </StyledMarqueeInner>
      <StyledMarqueeInner speed={speed}>
        {imageContent}
        {imageContent}
      </StyledMarqueeInner>
    </StyledMarqueeContainer>
  );
};

export default BrandsLine;
