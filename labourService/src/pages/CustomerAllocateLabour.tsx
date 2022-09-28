import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { IonIcon, IonFabButton, IonButton, IonModal, IonContent, IonPage, IonProgressBar } from '@ionic/react';
import ProfilePhoto from '../components/ProfilePhoto';
import ChangeText from '../components/ChangeText';
import { arrowBackOutline } from 'ionicons/icons';
import classes from './CustomerAllocateLabour.module.css';
import { useHistory } from 'react-router-dom';
import { t } from 'i18next';

function CustomerAllocateLabour() {
  const modal = useRef<HTMLIonModalElement>(null);
  const history = useHistory();
  const [modelOpen, setModelOpen] = useState(false);

  useLayoutEffect(() => setModelOpen(true));

  function closeModal() {
    modal.current?.dismiss();
    history.push('/')
  }
  return (
    <IonPage >
      <IonContent className="ion-padding">
        <IonFabButton size="small" onClick={() => closeModal()} className={classes.backfab} color="light">
          <IonIcon icon={arrowBackOutline} />
        </IonFabButton>
        <IonModal
          ref={modal}
          isOpen={modelOpen}
          initialBreakpoint={0.35}
          breakpoints={[0, 0.25, 0.35]}
          showBackdrop={false}
          backdropBreakpoint={0.75}
          onDidDismiss={() => setModelOpen(false)}

        >
          <IonContent className="ion-padding">
            <ChangeText /><br />
            <IonProgressBar type="indeterminate"></IonProgressBar><br />
            <ProfilePhoto />
            <IonButton
              onClick={() => closeModal()}
              className={classes.button}
              expand="block"
              color="danger"
            >{t("cancel")}</IonButton>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
}

export default CustomerAllocateLabour;