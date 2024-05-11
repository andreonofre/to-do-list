import styled from "styled-components";
import Button from '@mui/material/Button';

export const Container = styled.div`
    width: 25%;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
   
    h1 {
        text-align: center;
    }

    div {
        display: flex;
        
        .input {
            width: 420px;
        }
    }

    @media (max-width: 600px) {
        width: 90%;
    }
`;



export const StyledButton = styled(Button)`
  && {
    background-color: #007bff;
    color: #ffffff;
    font-size: 20;
    font-weight: bold;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 10px;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

