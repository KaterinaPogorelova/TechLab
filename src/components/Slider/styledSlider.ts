import styled from "styled-components";

export const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;/* Установите желаемую высоту слайдера */
  margin-bottom: 50px;
`;

export const Slide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  font-size: 24px;
  height: 400px;
`;

export const NextButton = styled.div`
  position: absolute;
  z-index: 10;
  bottom: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
  background-color: #007bff;
  color: #fff;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s;
`;

export const PrevButton = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  width: 40px;
  height: 40px;
  background-color: #007bff;
  color: #fff;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s;
`;

export const PaginationContainer = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
`;

export const PaginationBullet = styled.div`
  width: 20px;
  height: 20px;
  background-color: #007bff;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
  transition: background-color 0.3s;
`;

export const ActivePaginationBullet = styled(PaginationBullet)`
  background-color: #fff;
  color: #007bff;
`;