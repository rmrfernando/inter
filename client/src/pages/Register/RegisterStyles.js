import styled from "styled-components";

const Wrapper = styled.main`
  .container-login {
    width: 100vw;

    background-color: rgb(255, 255, 255);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 40px;
    padding-bottom: 40px;
  }

  h1 {
    font-size: 3rem;
    font-family: "Poppins";
    text-align: center;
    margin-bottom: 50px;
  }
  .sub-container-login h2 {
    font-family: "Poppins";
  }
  .sub-container-login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
    padding: 35px 110px 35px 110px;
    border-radius: 15px;
  }

  .sub-container-login label {
    padding: 10px 5px 10px 0px;
  }

  .sub-container-login button {
    /* padding: 10px 25px; */
    border-radius: 25px;
    height: 50px;
    width: 200px;
    font-family: "Poppins";
    font-weight: bold;
    background-color: #006400;
    align-self: center;
    border: 3px solid black;
    color: #fff;
    box-shadow: 2px 2px 3.5px rgba(0, 0, 0, 0.358);
    margin: 30px 0px 15px 0px;
    cursor: pointer;
  }
  .sub-container-login button:hover {
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.358);
    background-color: #fff;
    color: black;
    font-weight: bold;
    border: 3px solid black;
    transition-duration: 0.4s;
  }
`;

export default Wrapper;
