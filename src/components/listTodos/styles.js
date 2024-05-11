import styled from "styled-components";
import { List as MUIList, ListItem as MUIListItem, ListItemText as MUIListItemText, Button } from '@mui/material';

export const Container = styled.div`
`;

export const List = styled(MUIList)`
  && {
    min-width: 100%;
    padding: 0;
    margin-top: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
`;

export const ListItem = styled(MUIListItem)`
  && {
    padding: 10px;
    border-bottom: 1px solid #ddd;
    &:last-child {
      border-bottom: none;
    }

    /* .completed {
      text-decoration:line-through;
      background-color: #74eb74;
    } */
  }
`

export const ListItemText = styled(MUIListItemText)`
  && {
    font-size: 16px;
    color: #131212;
    &.completed {
      text-decoration: line-through;
      background-color: #74eb74;
      color: #fff;
      font-weight: bold;
      border-radius: 4;
    }
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


