import styled from "styled-components";

export const ContactBannerWrap = styled.div`
  background-color: rgb(144, 227, 253);
  background-image: linear-gradient(
      135deg,
      rgba(145, 0, 217, 0.88),
      rgba(0, 182, 227, 0.82)
    ),
    url("https://daks2k3a4ib2z.cloudfront.net/53057ebe93a4fb23200001b5/530664feef0d48315c0000d4_mountain.jpg");
  background-position-x: 0%, 50%;
  background-position-y: 0%, 50%;
  background-size: auto, cover;
  box-sizing: border-box;
  color: rgba(255, 255, 255, 0.72);

  h1 {
    box-sizing: border-box;
    color: rgb(255, 255, 255);
    font-family: Roboto, sans-serif;
    font-size: 48px;
    font-weight: 300;
    line-height: 44px;
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;

    @media all and (min-width: 990px) {
      max-width: 940px;
    }

    @media all and (min-width: 766px) and (max-width: 990px) {
      max-width: 730px;
    }

    @media all and (min-width: 766px) {
      margin-top: 60px;
    }

    @media all and (max-width: 766px) {
      margin-top: 50px;
    }
  }

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
`;
