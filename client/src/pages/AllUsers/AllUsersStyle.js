import styled from "styled-components";

const Wrapper = styled.main`
  .container-profile {
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .sub-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    background-color: white;
    color: black;
  }

  .button-div {
    display: flex;
    justify-content: center;
  }
  .table-cell {
    text-align: center;
  }
  /* .sub-container-profile label {
    padding: 10px 5px 10px 0px;
    font-size: 18px;
  } */
`;

export default Wrapper;
