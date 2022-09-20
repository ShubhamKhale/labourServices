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
  IonModal,
  IonPage,
  IonRadio,
  IonRadioGroup,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
  useIonActionSheet,
  useIonAlert,
} from "@ionic/react";
import {
  caretForwardCircle,
  checkmarkOutline,
  chevronForwardOutline,
  closeOutline,
  contrastOutline,
  createOutline,
  heart,
  informationCircleOutline,
  languageOutline,
  logOutOutline,
  options,
  personOutline,
  share,
  trash,
} from "ionicons/icons";
import React, { useState } from "react";
import SettingBtn from "../components/SettingBtn";
import ProfilePhoto from "../components/ProfilePhoto";
import Theme from "./setting_pages/Theme";

const NewPage: React.FC = () => {
  const [presentAlert] = useIonAlert();
  const [showThemeModal, setThemeModal] = useState(false);
  const [showLanguageModal, setLanguageModal] = useState(false);
  const [isLogout, setIsLogout] = useState(false);
  const [theme, setTheme] = useState("destructive");

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
            setThemeModal(true);
          }}
        />
          <SettingBtn
            text={"Language"}
            icon={languageOutline}
            to={"/setting"}
            onClick={() => {
              setLanguageModal(true);
            }}
          />

          {/* theme actionsheet */}
        <IonModal
          isOpen={showThemeModal}
          initialBreakpoint={0.27}
          handle={false}
          onDidDismiss={() => setThemeModal(false)}
        >
          <IonToolbar>
            <IonButtons slot={"end"}>
              <IonButton
                onClick={() => setThemeModal(false)}
                slot="end"
                color="secondary"
              >
                Close
              </IonButton>
            </IonButtons>
          </IonToolbar>

          <IonContent className="ion-padding">
            <IonList id="ion-align-items-center" lines="none">
              <IonRadioGroup>
                <IonItem>
                  <IonLabel>Use device theme</IonLabel>
                  <IonRadio slot="start" value="cord" />
                </IonItem>

                <IonItem>
                  <IonLabel>Dark theme</IonLabel>
                  <IonRadio slot="start" value="duesenberg" />
                </IonItem>

                <IonItem>
                  <IonLabel>Light theme</IonLabel>
                  <IonRadio slot="start" value="hudson" />
                </IonItem>
              </IonRadioGroup>
            </IonList>
          </IonContent>
        </IonModal>

        {/* language actionsheet */}
        <IonModal
          isOpen={showLanguageModal}
          initialBreakpoint={0.32}
          handle={false}
          onDidDismiss={() => setLanguageModal(false)}
        >
          <IonToolbar>
            <IonButtons slot={"end"}>
              <IonButton
                onClick={() => setLanguageModal(false)}
                slot="end"
                color="secondary"
              >
                Close
              </IonButton>
            </IonButtons>
          </IonToolbar>

          <IonContent className="ion-padding">
            <IonList id="ion-align-items-center" lines="none">
              <IonRadioGroup>
                <IonItem>
                  <IonLabel>Use device Langauge</IonLabel>
                  <IonRadio slot="start" value="cord" />
                </IonItem>

                <IonItem>
                  <IonLabel>English</IonLabel>
                  <IonRadio slot="start" value="duesenberg" />
                </IonItem>

                <IonItem>
                  <IonLabel>Hindi</IonLabel>
                  <IonRadio slot="start" value="hudson" />
                </IonItem>

                <IonItem>
                  <IonLabel>Marathi</IonLabel>
                  <IonRadio slot="start" value="hudson" />
                </IonItem>
              </IonRadioGroup>
            </IonList>
          </IonContent>
        </IonModal>

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
          color="danger"
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
