import styled from "styled-components";

export const FooterWrap = styled.div`
  font-size: 14px;
  background: white;
  padding-bottom: 0;
  padding-left: 20px;
  padding-right: 0;
  padding-top: 0;
  justify-content: flex-end;
  height: auto;

  p {
    flex: 1 1 auto;
    text-align: center;
    align-self: center;
  }

  @media all and (min-width: 766px) {
    display: flex;
  }

  @media all and (max-width: 766px) {
    display: grid;
  }

  > div {
    width: 580px;
    height: 100%;
    background: #d1b5e8;
    align-self: right;
    padding-top: 35px;
    padding-bottom: 35px;

    @media all and (min-width: 540px) {
      padding-left: 100px;
      padding-right: 100px;
    }

    @media all and (max-width: 540px) {
      padding-left: 50px;
      padding-right: 50px;
      width: 100vw;
    }
  }
`;
