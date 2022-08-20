import { IonIcon, IonImg, IonPage } from "@ionic/react";
import classes from "./ProfilePhoto.module.css";

function ProfilePhoto() {
  return (
      <div className={classes.round}>
        <IonImg
          className={classes.profile_image}
          src="https://images.unsplash.com/photo-1484186139897-d5fc6b908812?ixlib=rb-0.3.5&s=9358d797b2e1370884aa51b0ab94f706&auto=format&fit=crop&w=200&q=80%20500w"
        />
      </div>
  );
}

export default ProfilePhoto;
