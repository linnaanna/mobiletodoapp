import React, { useEffect, useState } from "react";
import {
  IonPage,
  IonContent,
  IonInput,
  IonButton,
  IonToast,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonItem,
} from "@ionic/react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import firebaseConfig from "../firebaseConfig";
import "./login.css";

const Register: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    console.log("Register component rendered");
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

  const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent form submission

    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      // Optionally, you can handle additional user setup or redirection after registration
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
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
            Register your email and password
          </IonItem>
          <IonTitle>
            <form className="form" onSubmit={handleRegister}>
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
              <IonButton type="submit">Register</IonButton>
            </form>
            <IonToast
              isOpen={!!errorMessage}
              message={errorMessage}
              duration={4000}
              onDidDismiss={() => setErrorMessage(undefined)}
            />
          </IonTitle>
          <IonButton className="link" routerLink="/login">
            Login
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent></IonContent>
    </IonPage>
  );
};
console.log("WHAT");
export default Register;
