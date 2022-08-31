
import {
  IonActionSheet,
  IonAlert,
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
  useIonActionSheet,
  useIonAlert,
} from "@ionic/react";
import {
  checkmarkOutline,
  chevronForwardOutline,
  closeOutline,
  contrastOutline,
  createOutline,
  informationCircleOutline,
  languageOutline,
  logOutOutline,
  options,
  personOutline,
} from "ionicons/icons";
import React, { useState } from "react";
import SettingBtn from "../components/SettingBtn";
import ProfilePhoto from "../components/profilePhoto";
import Theme from "./setting_pages/Theme";

const NewPage: React.FC = () => {
  const [presentAlert] = useIonAlert();
  const [showThemeActionSheet, setThemeShowActionSheet] = useState(false);
  const [showLanguageeActionSheet, setLanguageActionSheet] = useState(false);
  const [isLogout, setIsLogout] = useState(false);
  const [theme, setTheme] = useState('destructive');

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="secondary">
            <IonBackButton defaultHref="/" icon={chevronForwardOutline} />
          </IonButtons>
          <IonTitle>Setting</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <ProfilePhoto />

        <SettingBtn
          text={"Profile"}
          icon={personOutline}
          to={"/setting/profile"}
        />


        <SettingBtn
          text={"Theme"}
          icon={contrastOutline}
          to={"/setting"}
          onClick={() => {
            setThemeShowActionSheet(true);
          }}
        />
        <IonActionSheet
          isOpen={showThemeActionSheet}
          onDidDismiss={() => setThemeShowActionSheet(false)}
          subHeader="Theme"
          buttons={[
            {
              text: "Use Device Theme",
              role: "destructive",
              icon: checkmarkOutline,
              id: "delete-button",
              data: {
                type: "delete",
              },
              handler: () => {
                console.log("Device Language");
              },
            },
            {
              text: "Dark Theme",
              icon: checkmarkOutline,
              data: 10,
              handler: () => {
                console.log("Dark Theme Selected");
              },
            },
            {
              text: "Light Theme",
              icon: checkmarkOutline,
              data: "Data value",
              handler: () => {
                console.log("Light Theme Selected");
              },
            },
            {
              text: "Cancel",
              icon: closeOutline,
              role: "cancel",
              handler: () => {
                console.log("Cancel clicked");
              },
            },
          ]}
        ></IonActionSheet>

        <SettingBtn
          text={"Language"}
          icon={languageOutline}
          to={"/setting"}
          onClick={() => {
            setLanguageActionSheet(true);
          }}
        />
        <IonActionSheet
          isOpen={showLanguageeActionSheet}
          onDidDismiss={() => setLanguageActionSheet(false)}
          cssClass="my-custom-class"
          buttons={[
            {
              text: "Use Device Language",
              role: "destructive",
              icon: checkmarkOutline,
              id: "delete-button",
              data: {
                type: "delete",
              },
              handler: () => {
                console.log("Device Language");
              },
            },
            {
              text: "English",
              icon: checkmarkOutline,
              data: 10,
              handler: () => {
                console.log("English Selected");
              },
            },
            {
              text: "Hindi",
              icon: checkmarkOutline,
              data: "Data value",
              handler: () => {
                console.log("Hindi Selected");
              },
            },
            {
              text: "Marathi",
              icon: checkmarkOutline,
              handler: () => {
                console.log("Marathi Selected");
              },
            },
            {
              text: "Cancel",
              icon: closeOutline,
              role: "cancel",
              handler: () => {
                console.log("Cancel clicked");
              },
            },
          ]}
        ></IonActionSheet>

        {/* https://ionicframework.com/docs/api/action-sheet */}
        <IonAlert
          isOpen={isLogout}
          onDidDismiss={() => setIsLogout(false)}
          header="Logout"
          subHeader="Are you sure?"
          buttons={["Yes", "No"]}
        />
        <SettingBtn
          text={"LogOut"}
          icon={logOutOutline}
          to={"/setting"}
          onClick={() => setIsLogout(true)}
          color='danger'
        />

        <SettingBtn
          text={"About"}
          to="/setting/about"
          icon={informationCircleOutline}
        />

      </IonContent>




    </IonPage>
  );
};

export default NewPage;
