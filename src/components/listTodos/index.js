import React from "react";
import { IconButton } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck";
import TextField from "@mui/material/TextField";

import {
  Container,
  StyledButton,
  List,
  ListItem,
  ListItemText,
} from "./styles";

const ListTodos = ({
  todos,
  deleteTodo,
  editTodo,
  editedTodo,
  editTodoId,
  handleEditChange,
  saveEditedTodo,
  toggleCompletedTodo
}) => {

  
  return (
    <Container>
      <List>
        {todos.map((cadaTodo) => (
          <ListItem key={cadaTodo.id}>
            {editTodoId === cadaTodo.id ? (
              <>
                <TextField value={editedTodo} onChange={handleEditChange} />
                <StyledButton onClick={saveEditedTodo}>Save</StyledButton>
              </>
            ) : (
              <>
                <ListItemText
                  primary={cadaTodo.todo}
                  className={cadaTodo.completed ? "completed" : ""}
                />

                <IconButton
                  aria-label="edit"
                  onClick={() => editTodo(cadaTodo.id, cadaTodo.todo)}
                >
                  <CreateIcon />
                </IconButton>

                <IconButton
                  aria-label="delete"
                  onClick={() => deleteTodo(cadaTodo.id)}
                >
                  <DeleteIcon />
                </IconButton>

                <IconButton
                  aria-label="confirm"
                  onClick={() => toggleCompletedTodo(cadaTodo.id)}
                >
                  <LibraryAddCheckIcon />
                </IconButton>
              </>
            )}
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default ListTodos;
