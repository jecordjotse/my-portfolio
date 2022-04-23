import styled from "styled-components";

export const BannerWrap = styled.div`
  height: auto;
  background-color: #fff;
  position: relative;
  height: 540px;
  text-align: center;
  background: #dddddd;
  background-color: rgb(221, 221, 221);
  clear: both;
  margin-top: 67px;
  background-image: linear-gradient(
      135deg,
      rgba(145, 0, 217, 0.48),
      rgba(0, 182, 227, 0.36)
    ),
    url(${(props) => props.bannerImage});
  background-repeat: no-repeat;
  background-size: cover;
`;
