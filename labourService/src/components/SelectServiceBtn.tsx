// import { IonButton, IonGrid, IonIcon, IonRow } from "@ionic/react";
// import React from "react";
// import { Link } from "react-router-dom";
import classes from './SelectServiceBtn.module.css'

import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from "@ionic/react";




function SelectServiceBtn(props: {
    onClick?: any; text: string; id?: string
}) {
    return (
        
        <IonCard
            id = {props.id}
            onClick={() => props.onClick()}
            className={classes.serviceCard}
        >
            <IonCardHeader className={classes.ion_text_center}>
                <IonCardTitle>{props.text}</IonCardTitle>
                <IonCardSubtitle></IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent></IonCardContent>
            {console.log(props)}
        </IonCard>
    );
}

export default SelectServiceBtn;


