import { StyledContainer } from "../../../styledConstants";
import {
  StyledStudentWorkplace,
  StyledStudentWorkplaceTitle,
} from "./StyledStudentsWorkplace";
import tele2 from "../../../assets/icons/Tele2-logo.svg";
import coca from "../../../assets/icons/coca-cola-logo.svg";
import apple from "../../../assets/icons/apple-black-logo.svg";
import google from "../../../assets/icons/goolge-logo.svg";
import xiaomi from "../../../assets/icons/xiaomi-logo.svg";
import spotify from "../../../assets/icons/spotify-logo.svg";
import adidas from "../../../assets/icons/adidas-logo.svg";
import nokia from "../../../assets/icons/nokia.svg";
import invision from "../../../assets/icons/invision-logo.svg";
import BrandsLine from "./BrandsLine";

const studentsWorkplaceList = [
  tele2,
  coca,
  apple,
  google,
  xiaomi,
  spotify,
  adidas,
  nokia,
  invision,
];
export const StudentsWorkplace = () => {
  return (
    <StyledStudentWorkplace>
      <StyledContainer>
        <StyledStudentWorkplaceTitle>
          Our UI/UX graduates have been hired by
        </StyledStudentWorkplaceTitle>
      </StyledContainer>
      <BrandsLine images={studentsWorkplaceList} speed={18} />
    </StyledStudentWorkplace>
  );
};
