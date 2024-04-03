// Login.tsx
import React, { useEffect, useState } from "react";
import {
  IonPage,
  IonContent,
  IonInput,
  IonButton,
  IonToast,
  IonHeader,
  IonToolbar,
  IonItem,
} from "@ionic/react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import firebaseConfig from "../firebaseConfig.js";
import { initializeApp } from "firebase/app";
import "./login.css";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    console.log("Login component rendered");
  }, []);

  useEffect(() => {
    firebase.initializeApp({
      apiKey: "",
      authDomain: "",
      projectId: "",
      storageBucket: "",
      messagingSenderId: "",
      appId: "",
    });
  }, []);

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent form submission

    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      if (error instanceof Error) {
        // Check if error is an instance of Error
        setErrorMessage(error.message); // If so, set error message
      } else {
        setErrorMessage("Unknown error.");
      }
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonItem className="login-header">
            Login with your email and password
          </IonItem>
          <form className="form" onSubmit={handleLogin}>
            <IonInput
              type="email"
              placeholder="Email"
              value={email}
              onIonChange={(e) => setEmail(e.detail.value!)}
            />
            <IonInput
              type="password"
              placeholder="Password"
              value={password}
              onIonChange={(e) => setPassword(e.detail.value!)}
            />
            <IonButton type="submit">Login</IonButton>
          </form>
          <IonToast
            isOpen={!!errorMessage}
            message={errorMessage}
            duration={4000}
            onDidDismiss={() => setErrorMessage("")}
          />
          <IonButton className="link" routerLink="/todo">
            Todo
          </IonButton>
          <IonButton className="link" routerLink="/register">
            Register
          </IonButton>
        </IonToolbar>
      </IonHeader>
    </IonPage>
  );
};

export default Login;
