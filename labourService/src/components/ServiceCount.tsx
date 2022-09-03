import { IonCard, IonCardHeader, IonCardTitle, IonIcon, IonImg, IonPage } from "@ionic/react";
import { ReactChild, ReactFragment, ReactPortal, useState } from "react";
import classes from "./ServiceCount.module.css";

function ServiceCount(props: { servicesCount: number | undefined; serviceName: string  | undefined;color  ? :string }) {
  
  return (

      <>
        <IonCard className={classes.card}>
            <IonCardHeader id="completedServicesTitle">
              <p className={classes.sam}>{props.servicesCount}</p>
              <IonCardTitle className={classes.sam2}>{props.serviceName}</IonCardTitle>
            </IonCardHeader>
        </IonCard>
      </>
  );
}

export default ServiceCount;
