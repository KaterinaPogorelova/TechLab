import styled from "styled-components";

export const StyledCourseFeedback = styled.div`
  height: 820px;
  padding: 100px 0 120px 0;
`;
export const StyledCourseFeedbackTitle = styled.div`
  height: 164px;
  margin-bottom: 50px;
`;
export const StyledCourseFeedbackItem = styled.div`
  width: 240px;
  height: 318px;
  padding: 25px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;
export const StyledCourseFeedbackItemTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  & img:last-of-type {
    margin-right: 10px;
  }
`;

export const StyledStarsContainer = styled.div`
  width: 86px;
  display: flex;
  align-items: center;
  gap: 4px;
  & img {
    width: 14px;
    height: 14px;
  }
`;
export const StyledCourseFeedbackItemText = styled.div`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 137.5% */
  letter-spacing: 0.32px;
  max-height: 132px; /* Ограничение максимальной высоты */
  overflow: hidden; /* Обрезка содержимого, выходящего за пределы */
  text-overflow: ellipsis; /* Добавление многоточия в конце обрезанного текста */
  display: -webkit-box;
  -webkit-line-clamp: 6; /* Количество строк до обрезки текста */
  -webkit-box-orient: vertical;
`;
export const StyledCourseFeedbackItemName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  & span {
    font-size: 16px;
    font-weight: 400;
    line-height: 22px; /* 137.5% */
    letter-spacing: 0.32px;
  }
`;
export const StyledCourseFeedbackAvatar = styled.div`
  & img {
    width: 52px;
    height: 53px;
    border-radius: 50%;
  }
`;

export const StyledCourseFeedbackSwiper = styled.div`
  height: 358px;
  width: 100%;
`;
