import styled from "styled-components";

export const AboutWhoIsComponentWrap = styled.div`
  margin-left: 448px;
  margin-right: 448px;
  max-width: 940px;
`;

export const WhoIsWrap = styled.div`
  display: flex;
  margin-left: -10px;
  margin-right: -10px;
`;

export const AboutText = styled.div`
  min-height: 1px;
  padding-bottom: 80px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 80px;
  position: relative;
  width: 480px;

  h2 {
    color: rgb(105, 105, 105);
    font-family: Dosis;
    font-size: 32px;
    font-weight: 300;
    line-height: 36px;
    margin: 0 0 32px 0;
  }

  p {
    color: rgb(105, 105, 105);
    font-family: Dosis;
    font-size: 19px;
    line-height: 30px;
    margin-bottom: 10px;
    margin-top: 0px;
  }
`;

export const ImageWrap = styled.div`
  min-height: 1px;
  padding-left: 10px;
  padding-right: 10px;
  position: relative;
  width: 480px;

  img {
    width: 100%;
  }
`;
