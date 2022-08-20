import {
  IonActionSheet,
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonRadio,
  IonRadioGroup,
  IonTitle,
  IonToolbar,
  useIonActionSheet,
} from "@ionic/react";
import {
  caretForwardCircle,
  checkmarkOutline,
  chevronBackOutline,
  closeOutline,
  heart,
} from "ionicons/icons";
import React, { useState } from "react";

const Theme: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" icon={chevronBackOutline} />
          </IonButtons>
          <IonTitle>Theme</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonList>
          <IonRadioGroup>
            <IonItem>
              <IonLabel>Use device theme</IonLabel>
              <IonRadio value="cord" />
            </IonItem>

            <IonItem>
              <IonLabel>Dark theme</IonLabel>
              <IonRadio value="duesenberg" />
            </IonItem>

            <IonItem>
              <IonLabel>Light theme</IonLabel>
              <IonRadio value="hudson" />
            </IonItem>
          </IonRadioGroup>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Theme;
