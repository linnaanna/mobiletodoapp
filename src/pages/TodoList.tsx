// Todo.tsx
import React, { useEffect, useState } from "react";
import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonList,
  IonItem,
  IonInput,
  IonButton,
} from "@ionic/react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import firebaseConfig from "../firebaseConfig";
import "./todo.css";

interface TodoListProps {
  handleLogout: () => void;
}

const Todo: React.FC<TodoListProps> = ({ handleLogout }) => {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    console.log("Todo component rendered");
  }, []);

  useEffect(() => {
    firebase.initializeApp(firebaseConfig);
  }, []);

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const handleDeleteTodo = (index: number) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonItem>
            <IonItem className="todo-header">Add tasks to your list</IonItem>
            <IonInput
              placeholder="Add Todo"
              value={newTodo}
              onIonChange={(e) => setNewTodo(e.detail.value!)}
              className="todo-input"
            />
          </IonItem>
          <IonButton onClick={handleAddTodo} expand="block">
            Add Todo
          </IonButton>
          <ul className="todo-list">
            {todos.map((todo, index) => (
              <li key={index} className="todo-item">
                {todo}
                <IonButton
                  onClick={() => handleDeleteTodo(index)}
                  size="small"
                  className="delete-btn"
                >
                  Delete
                </IonButton>
              </li>
            ))}
          </ul>
          <IonButton className="link" routerLink="/login">
            Login
          </IonButton>
        </IonToolbar>
      </IonHeader>
    </IonPage>
  );
};

export default Todo;
