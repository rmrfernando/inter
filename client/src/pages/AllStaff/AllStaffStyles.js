import styled from "styled-components";

const Wrapper = styled.main`
  .container-profile {
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
`;

export default Wrapper;
