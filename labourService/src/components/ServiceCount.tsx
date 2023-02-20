import { IonCard, IonCardHeader, IonCardTitle, IonIcon, IonImg, IonPage } from "@ionic/react";
import { ReactChild, ReactFragment, ReactPortal, useState } from "react";
import classes from "./ServiceCount.module.css";

function ServiceCount(props: { servicesCount: number | undefined; serviceName: string  | undefined;color  ? :string }) {
  
  return (

      <>
        <IonCard className={classes.card} style={{backgroundColor : props.color}}>
            <IonCardHeader id="completedServicesTitle">
              <h1 style={{color: "currentColor"}}>{props.servicesCount}</h1>
              <IonCardTitle style={{position: "relative", bottom: "18px", color: "currentColor"}}><h3>{props.serviceName}</h3></IonCardTitle>
            </IonCardHeader>
        </IonCard>
      </>
  );
}

export default ServiceCount;
