import styled from "styled-components";

export const AboutBannerWrap = styled.div`
  background-color: rgb(144, 227, 253);
  background-image: linear-gradient(
      135deg,
      rgba(217, 0, 79, 0.88),
      rgba(227, 72, 0, 0.82)
    ),
    url("https://daks2k3a4ib2z.cloudfront.net/53057ebe93a4fb23200001b5/5306596def0d48315c000043_nature.jpg");
  background-position-x: 0%, 50%;
  background-position-y: 0%, 50%;
  background-size: auto, cover;
  padding-bottom: 80px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 80px;
  margin-top: 70px;

  @media all and (min-width: 766px) {
    padding-bottom: 80px;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 80px;
  }

  @media all and (max-width: 766px) {
    padding-bottom: 40px;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 40px;
  }
  @media all and (min-width: 766px) {
    margin-top: 60px;
  }

  @media all and (max-width: 766px) {
    margin-top: 50px;
  }
`;

export const TitleWrap = styled.div`
  margin-left: auto;
  margin-right: auto;
  @media all and (min-width: 990px) {
    max-width: 940px;
  }

  @media all and (min-width: 766px) and (max-width: 990px) {
    max-width: 730px;
  }
`;

export const Title = styled.h1`
  box-sizing: border-box;
  color: rgb(255, 255, 255);
  font-family: Dosis;
  font-size: 48px;
  font-weight: 300;
  line-height: 44px;
  margin-bottom: 10px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 10px;

  @media all and (min-width: 990px) {
    max-width: 940px;
  }

  @media all and (min-width: 766px) and (max-width: 990px) {
    max-width: 730px;
  }
`;
