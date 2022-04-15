import styled from "styled-components";

export const PrjectsWrap = styled.div`
  border-top-color: rgb(237, 237, 237);
  border-top-style: solid;
  border-top-width: 1px;
  padding-bottom: 0px;
  padding-top: 80px;
`;

export const TitleWrap = styled.div`
  margin-left: 448px;
  margin-right: 448px;
  max-width: 940px;
  h2 {
    font-size: 32px;
    font-weight: 300;
    line-height: 36px;
    margin: 0 0 32px 0;
  }
`;

export const ProjectLineItem = styled.div`
  display: flex;

  div {
    flex: ${Math.round(Math.random())} 1 auto;
  }
`;
