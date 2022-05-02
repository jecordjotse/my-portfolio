import styled from "styled-components";

export const AboutWhoIsComponentWrap = styled.div`
  background: white;
`;

export const WhoIsWrap = styled.div`
  margin-left: auto;
  margin-right: auto;
  @media all and (min-width: 990px) {
    max-width: 940px;
  }

  @media all and (min-width: 766px) and (max-width: 990px) {
    max-width: 730px;
  }

  @media all and (max-width: 540) {
    display: grid;
  }
  @media all and (min-width: 540) {
    display: flex;
  }
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
    width: 95%;
  }

  p {
    color: rgb(105, 105, 105);
    font-family: Dosis;
    font-size: 19px;
    line-height: 30px;
    margin-bottom: 10px;
    margin-top: 0px;
    width: 95%;
  }
`;

export const ImageWrap = styled.div`
  min-height: 1px;
  position: relative;
  width: 480px;

  @media all and (max-width: 540) and (max-width: 766px) {
    max-width: 50vw;
  }

  @media all and (max-width: 540) {
    max-width: 100vw;
  }

  img {
    width: 100%;
  }
`;
