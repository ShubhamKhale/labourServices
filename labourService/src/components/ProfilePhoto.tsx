import { IonAvatar, IonIcon, IonImg, IonPage, useIonAlert } from "@ionic/react";
import { cameraOutline } from "ionicons/icons";
import classes from "./ProfilePhoto.module.css";

function ProfilePhoto() {
  const [presentAlert] = useIonAlert();
  return (
    <div className={classes.round}>
      <IonAvatar className={classes.profile_image}>
        <IonImg
          src="https://images.unsplash.com/photo-1484186139897-d5fc6b908812?ixlib=rb-0.3.5&s=9358d797b2e1370884aa51b0ab94f706&auto=format&fit=crop&w=200&q=80%20500w"
          onClick={() =>
            presentAlert({
              buttons: [
                {
                  text: 'Take photo',
                  handler: () => {
                    alert('sdafdafdda');
                  }
                },
                {
                  text: 'choose existing photo',
                },


              ],
            })
          }
        />
        {/* <IonIcon icon={cameraOutline}></IonIcon> */}

      </IonAvatar>
    </div>
  );
}

export default ProfilePhoto;