import styled from "styled-components";

const Wrapper = styled.main`
  .container {
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
    padding: 45px 90px 45px 90px;
    border-radius: 15px;
  }

  .input-right {
    margin-top: 20px;
  }
  .input-left {
    margin-right: 40px;
    margin-top: 20px;
  }
  .input-label {
    margin-bottom: 6px;
  }

  .sub-container button {
    padding: 10px 25px;
    border-radius: 25px;
    height: 50px;
    width: 200px;
    font-family: "Poppins";
    font-weight: bold;
    background-color: #006400;
    align-self: center;
    border: 3px solid #006400;
    color: #fff;
    box-shadow: 2px 2px 3.5px rgba(0, 0, 0, 0.358);
    margin: 30px 0px 15px 20px;
    cursor: pointer;
  }
  .sub-container button:hover {
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.358);
    background-color: #fff;
    color: black;
    font-weight: bold;
    border: 3px solid black;
    transition-duration: 0.4s;
  }
`;

export default Wrapper;
