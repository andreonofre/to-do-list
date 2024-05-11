import React, { useEffect, useReducer, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { toast } from 'react-toastify';

//=====MATERIAL UI======
import TextField from "@mui/material/TextField";
import { Button, List, ListItem, ListItemText } from "@mui/material";

// ======Components======
import ListTodos from "../listTodos";

//=====STYLES=====
import { Container, StyledButton } from "./styles";


const Menu = () => {

  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editTodoId, setEditTodoId] = useState(null);
  const [editedTodo, setEditedTodo] = useState("");

  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  
  
  useEffect(() => {
    // Resgatar os dados do localStorage ao montar o componente
    const savedTodos = localStorage.getItem('todos') || [];
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
      forceUpdate();
    }
  }, []);



  //======ADD TODO======
const addTodo = () => {
    // Verificar se a nova tarefa é vazia
    if (newTodo.trim() === "") {
      toast.error('Por favor, insira uma tarefa.');
      return;
    }
  
    // Verificar se a nova tarefa já existe na lista de tarefas
    if (todos.some(todo => todo.todo.toLowerCase() === newTodo.toLowerCase())) {
      toast.error('Esta tarefa já foi adicionada.',{
        position: "bottom-center"});
      return;
    }

    setTodos(prevTodos => {
      const updatedTodos = [...prevTodos, { todo: newTodo, completed: false, id: uuidv4() }];
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
      return updatedTodos;
    });

  toast.success('Tarefa adicionada com sucesso!',{
    position: "bottom-center"});
  setNewTodo("");
};


  // useEffect(() => {
  //   // Salvar os todos atualizados no localStorage
  //   localStorage.setItem('todos', JSON.stringify(todos));
  // }, [todos]);
  

  
  // =======DELET TODO=======
  const deleteTodo = (id) => {
    const todoDelete = todos.filter((td) => td.id !== id);
    setTodos(todoDelete); // Atualizar o estado
    // Salvar os todos atualizados no localStorage
    localStorage.setItem('todos', JSON.stringify(todoDelete)); // Agora os dados no localStorage correspondem ao estado atualizado
    toast.success('Tarefa excluída com sucesso!',{
      position: "bottom-center"});
  };
  

  // =======EDIT TODOS=======
  const editTodo = (id, todo) => {
    console.log("====ID, TODO====", id, todo)
    setEditTodoId(id);
    setEditedTodo(todo);
  };

  const handleEditChange = (e) => {
    setEditedTodo(e.target.value);
  };


  //======SAVE EDIT======
  const saveEditedTodo = () => {

    if (editedTodo.trim() === "") {
      toast.error('Por favor, insira um nome válido para a tarefa.',{
        position: "bottom-center"});
      return;
    }
  
    // Verificar se o nome da tarefa editada já existe na lista de tarefas
    if (todos.some(todo => todo.todo.toLowerCase() === editedTodo.toLowerCase() && todo.id !== editTodoId)) {
      toast.error('Já existe uma tarefa com este nome.',{
        position: "bottom-center"});
      return;
    }

    const updatedTodos = todos.map((todo) => {
      if (todo.id === editTodoId) {
        return { ...todo, todo: editedTodo };
      }
      return todo;
    });
    localStorage.setItem('todos', JSON.stringify(updatedTodos))
    setTodos(updatedTodos);
    toast.success('Tarefa editada com sucesso!', {
      position: "bottom-center"},);

    setEditTodoId(null);
    setEditedTodo("");
  }; 

  //=======FINALIZAR TAREFA=======
  const toggleCompletedTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed }; // Alterna o estado completed
      }
      return todo;
    });
    setTodos(updatedTodos);
  };


  return (
    <Container>
      <h1>To-Do List</h1>
      <div>
        <TextField
          className="input"
          id="outlined-basic"
          label="Tarefa"
          variant="outlined"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <StyledButton onClick={addTodo}>Add</StyledButton>
      </div>
      
      < ListTodos 
        todos={todos} 
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        editedTodo={editedTodo}
        editTodoId={editTodoId}
        handleEditChange={handleEditChange}
        saveEditedTodo={saveEditedTodo}
        toggleCompletedTodo={toggleCompletedTodo}
        />
    </Container>
  );
};

export default Menu;
