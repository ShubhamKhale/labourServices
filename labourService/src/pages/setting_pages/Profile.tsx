import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { chevronBackOutline, createOutline } from "ionicons/icons";
import React, { useState } from "react";
import ProfilePhoto from "../../components/ProfilePhoto";

interface Food {
  id: number;
  name: string;
}

const foods: Food[] = [
  {
    id: 1,
    name: "Male",
  },
  {
    id: 2,
    name: "Female",
  },
  {
    id: 3,
    name: "Other",
  },
];

const compareWith = (o1: Food, o2: Food) => {
  return o1 && o2 ? o1.id === o2.id : o1 === o2;
};

const Profile: React.FC = () => {
  const [currentFood, setCurrentFood] = useState("other");
  const [isEditable, setIsEditable] = useState(true);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" icon={chevronBackOutline} />
          </IonButtons>

          <IonButtons slot="secondary">
            {/* <IonButton onClick={()=>{
              setIsEditable(false);
            }}>
              <IonIcon slot="icon-only" icon={createOutline} />
            </IonButton> */}
            <IonButton
              onClick={() => {
                setIsEditable(isEditable ? false : true);
              }}
            >
              {isEditable ? "Edit" : "Save"}
            </IonButton>
          </IonButtons>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <ProfilePhoto />
        <IonItem>
          <IonLabel mode="ios" position="floating">
            First Name
          </IonLabel>
          <IonInput
            type="text"
            placeholder={""}
            readonly={isEditable}
            clearInput={true}
            value=""
            inputMode="text"
          ></IonInput>
        </IonItem>
              <br/>
        <IonItem>
          <IonLabel mode="ios" position="floating">
            Last Name
          </IonLabel>
          <IonInput
            type="text"
            placeholder={""}
            readonly={isEditable}
            clearInput={true}
            value=""
            inputMode="text"
          ></IonInput>
        </IonItem>
              <br/>
        <IonItem>
          <IonLabel mode="ios" position="floating">
            Email
          </IonLabel>
          <IonInput
            type="email"
            placeholder={"xyz@gmail.com"}
            readonly={isEditable}
            clearInput={true}
            value=""
            inputMode="email"
          ></IonInput>
        </IonItem>
              <br/>
        <IonItem>
          <IonLabel position="floating">Date Of Birth</IonLabel>
          <IonInput
            type="date"
            readonly={isEditable}
            clearInput={true}
            value="15/07/2003"
            clearOnEdit={false}
          ></IonInput>
        </IonItem>
              <br/>
        <IonItem>
          <IonLabel>Gender</IonLabel>
          <IonList>
            <IonItem style={{ fontSize: "20px" }}>
              <IonSelect
                compareWith={compareWith}
                onIonChange={(ev) =>
                  setCurrentFood(JSON.stringify(ev.detail.value.food))
                }
                interface="popover"
                disabled={isEditable}
                selectedText={currentFood}
              >
                {foods.map((food) => (
                  <IonSelectOption key={food.id} value={food}>
                    {food.name}
                  </IonSelectOption>
                ))}
              </IonSelect>
            </IonItem>
            {/* <IonItem lines="none">
              <IonLabel>Current food: {currentFood}</IonLabel>
            </IonItem> */}
          </IonList>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
