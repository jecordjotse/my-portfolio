import styled from "styled-components";

export const SkillItemMainWrap = styled.div`
  background-color: rgb(247, 247, 247);
  box-sizing: border-box;
  color: rgb(105, 105, 105);
  font-family: Roboto, sans-serif;
  font-size: 14px;
  line-height: 20px;
  margin-top: 18px;
  width: 100%;
  height: 40px;
  display: grid;
`;

export const SkillItemWrap = styled.div`
  background-color: rgb(217, 217, 217);
  border-left-color: rgba(0, 0, 0, 0.09);
  border-left-style: solid;
  border-left-width: 2px;
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
  text-transform: uppercase;
  height: 40px;
  width: ${(props) => props.percent}%;
`;
