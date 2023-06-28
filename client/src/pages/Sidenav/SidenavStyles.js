import styled from "styled-components";

const Wrapper = styled.main`
  .menuLists {
    background-color: black;
    min-height: 100vh;
    width: 300px;
  }

  .navlinks {
    padding-top: 70px;
    /* justify-content: center; */
    width: 100% !important;
    display: grid;
    gap: 10px;
    /* align-items: start;
    align-content: start; */
  }

  .container {
    height: 100vh;
    /* height: 100%; */
    display: grid;
    width: 300px;
    /* justify-content: space-between; */
    align-content: space-between;
  }

  .logout {
    display: flex;
    flex-direction: row;
    margin-top: auto !important;
    align-self: flex-end;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px !important;
    color: green;
  }

  a {
    color: green;
  }

  h4 {
    color: white;
    text-align: center;
    font-weight: bold;
    font-size: 30px;
    margin-bottom: 30px;
  }

  .menuLink {
    align-self: center;
    gap: 10px;
  }

  .smallText {
    margin: 10px;
  }

  a {
    text-decoration: none;
  }

  .listItem {
    border: none;
    /* margin: 0 auto; */
    text-align: center;
    padding: 15px 0;
    border-radius: 20px;
    font-weight: bold;
    width: 100%;
    background-color: black;
    align-items: center;
    align-self: center;
    align-content: center;
    justify-self: center;
    justify-content: center;
    justify-items: center;
    color: green;
    font-size: 20px;
  }

  .listItem:hover {
    transition-duration: 0.4s;
    background-color: white;
  }

  .active {
    background-color: white;
  }
`;
export default Wrapper;
