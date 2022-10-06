import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./StartingPage.module.css";

const StartingPage: React.FC = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phone_no: "",
    email: "",
  });

  let name, value;
  const postUserData = (event: any) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  //connect with firebase
  const submitData = async (e: any) => {
    e.preventDefault();
    const { firstName, lastName, phone_no, email } = userData;

    if( firstName && lastName && phone_no && email ){

    const res = await fetch(
      "https://loginpage-5ac89-default-rtdb.firebaseio.com/userDataRecords.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          phone_no,
          email,
        }),
      }
    );
    if (res) {
      setUserData({
        firstName: "",
        lastName: "",
        phone_no: "",
        email: "",
      });
      alert("Data Stored");
    } else {
      alert("plz fill the data");
    } 
  } else {
    alert("plz fill the data");
  };
};
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Starting Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonItem className={classes.text1} lines="none">
          <form method="POST">
            <IonItem>
              <IonLabel position="floating">First Name</IonLabel>
              <IonInput
                name="firstName"
                type="text"
                placeholder=""
                clearInput={true}
                value={userData.firstName}
                inputMode="text"
                onIonChange={postUserData}
              ></IonInput>
            </IonItem>

            <IonItem>
              <IonLabel position="floating">Last Name</IonLabel>
              <IonInput
                name="lastName"
                type="text"
                placeholder={""}
                clearInput={true}
                value={userData.lastName}
                inputMode="text"
                onIonChange={postUserData}
              ></IonInput>
            </IonItem>

            <IonItem>
              <IonLabel position="floating">Email</IonLabel>
              <IonInput
                name="email"
                type="email"
                placeholder={""}
                clearInput={true}
                value={userData.email}
                inputMode="email"
                onIonChange={postUserData}
              ></IonInput>
            </IonItem>

            <IonItem>
              <IonLabel position="floating">Phone No</IonLabel>
              <IonInput
                name="phone_no"
                type="number"
                clearInput={true}
                value={userData.phone_no}
                onIonChange={postUserData}
              ></IonInput>
            </IonItem>
            <br />
            <IonButton size="large" onClick={submitData}>
              Submit
            </IonButton>
          </form>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default StartingPage;
