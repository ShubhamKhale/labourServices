import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonFab,
  IonFabButton,
  IonFabList,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRadio,
  IonRadioGroup,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { add, arrowBackCircle, arrowForwardCircle, arrowUpCircle, chevronBackOutline, logoFacebook, logoInstagram, logoTwitter, logoVimeo, person, settings, share } from "ionicons/icons";
import React from "react";

const Language: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" icon={chevronBackOutline} />
          </IonButtons>
          <IonTitle>Language</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
      </IonContent>

    </IonPage>
  );
};

export default Language;
