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
        {/* <IonFab vertical="top" horizontal="end" slot="fixed">
        <IonFabButton>
          <IonIcon icon={add} />
        </IonFabButton>
      </IonFab> */}


        {/*-- fab placed to the bottom and start and on the bottom edge of the content overlapping footer with a list to the right --*/}
        <IonFab vertical="top" horizontal="end" slot="fixed">
          <IonFabButton>
            <IonIcon icon={settings} />
          </IonFabButton>
          <IonFabList side="bottom">
            <IonFabButton><IonIcon icon={logoVimeo} /></IonFabButton>
            <IonFabButton><IonIcon icon={logoVimeo} /></IonFabButton>
            <IonFabButton><IonIcon icon={logoVimeo} /></IonFabButton>
          </IonFabList>
        </IonFab>

      </IonContent>

    </IonPage>
  );
};

export default Language;
