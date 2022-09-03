import { IonItem, IonIcon, IonLabel, IonButton, IonCardContent, IonAccordion } from "@ionic/react";
import { pin } from "ionicons/icons";
import classes from "./ServiceContent.module.css";

function ServiceContent() {
  
  return (

      <>
        <IonItem>
                <IonIcon icon={pin} slot="start" />
                <IonLabel>15/07/2003</IonLabel>
                <IonIcon icon={pin} slot="middle" />
                <IonLabel>12:00 PM</IonLabel>
                </IonItem>
                <IonItem>
                  <IonIcon icon={pin} slot="start" />
                  <IonLabel>general details</IonLabel>
                </IonItem>

                <IonCardContent>
                  Service Details
                </IonCardContent>
      </>
  );
}

export default ServiceContent;
