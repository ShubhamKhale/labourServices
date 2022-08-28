import { IonAccordion, IonItem, IonAvatar, IonImg, IonLabel, IonIcon, IonButton, IonCardContent } from "@ionic/react";
import { pin } from "ionicons/icons";
import { prependOnceListener } from "process";


function ServiceCustomer(props : {
    image: string | undefined;value : string
}) {
    return <IonAccordion value={props.value}>
        <IonItem slot="header" color="light">
            <IonAvatar slot="start">
                <IonImg src={props.image} />
            </IonAvatar>
            <IonLabel>Completed Services</IonLabel>
        </IonItem>
        <div slot="content">
            <IonItem>
                <IonIcon icon={pin} slot="start" />
                <IonLabel>15/07/2003</IonLabel>
                <IonIcon icon={pin} slot="middle" />
                <IonLabel>12:00 PM</IonLabel>
            </IonItem>
            <IonItem>
                <IonIcon icon={pin} slot="start" />
                <IonLabel>ion-item in a card, icon left, button right</IonLabel>
                <IonButton fill="outline" slot="end">
                    View
                </IonButton>
            </IonItem>

            <IonCardContent>
                This is content, without any paragraph or header tags, within an
                ion-cardContent element.
            </IonCardContent>
        </div>
    </IonAccordion>
}

export default ServiceCustomer;