import React, { useRef } from 'react';
import {IonIcon,IonFabButton,IonButton,IonModal,IonContent,IonPage,IonProgressBar} from '@ionic/react';
import ProfilePhoto from '../components/ProfilePhoto';
import ChangeText from '../components/ChangeText';
import { arrowBackOutline } from 'ionicons/icons';
import classes from './CustomerAllocateLabour.module.css';

function CustomerAllocateLabour() {
  const modal = useRef<HTMLIonModalElement>(null);
  return (
    <IonPage>
      <IonContent className="ion-padding">
      <IonFabButton size="small" className={classes.backfab} color="light">
        <IonIcon icon={arrowBackOutline} />
        </IonFabButton>
        <IonButton id="open-modal" expand="block">
          Open Sheet Modal
        </IonButton>
        <IonModal ref={modal} trigger="open-modal" initialBreakpoint={0.35} breakpoints={[0,0.25,0.35]} showBackdrop={false}>
          <IonContent className="ion-padding">
             <ChangeText /><br/>
          <IonProgressBar type="indeterminate"></IonProgressBar><br/>
          <ProfilePhoto />
            <IonButton className={classes.button} expand="block" color="danger">Cancel</IonButton>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
}

export default CustomerAllocateLabour;