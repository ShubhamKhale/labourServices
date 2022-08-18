import {
  IonButton,
  IonContent,
  IonGrid,
  // IonHeader,
  // IonIcon,
  IonInput,
  IonItem,
  IonList,
  IonPage,
  IonText,
  // IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

// import { squareOutline } from "ionicons/icons";
import ExploreContainer from "../components/profilePhoto";
// import { squareOutline } from "ionicons/icons";
import classes from "./EnterPhoneNo.module.css";
// const slideOpts = {
//   initialSlide: 1,
//   speed: 600,
// };

const EnterPhoneNo: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <ExploreContainer/>
        <br />
        <IonToolbar className={classes.ion_content}>
          <IonTitle>
            <h1>
              <strong>Enter the Phone number</strong>
            </h1>
          </IonTitle>
          <IonTitle size="large">
            This number will be use for the
            <br />
            verification
          </IonTitle>
        </IonToolbar>
        <IonItem className={classes.ion_item_border}>
          <b>+91</b>
          <IonInput
            type="number"
            inputmode="tel"
            maxlength={10}
            id="phone"
            name="phone"
            style={{ fontWeight: "bold"}}
            placeholder="Enter number"
          ></IonInput>
        </IonItem>
        <IonButton className={classes.ion_button} color="secondary" size="large">
          SEND OTP
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default EnterPhoneNo