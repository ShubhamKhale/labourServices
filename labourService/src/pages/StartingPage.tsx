import {
  IonButton,
  IonContent,
  IonHeader,
  IonItem,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Link } from "react-router-dom";
import classes from "./StartingPage.module.css";

const StaringPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Starting Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonItem className={classes.text1}>
          <b>
            Book Services like Electrician, plumber, Painter, Carpenter, Mason
            at your fingure tips.
          </b>
        </IonItem>
        <Link to={"/enter-phone-no"}>
          <IonButton className={classes.ion_button_center} color="tertiary">
            Continue with Phone no.
          </IonButton>
        </Link>
      </IonContent>
    </IonPage>
  );
};

export default StaringPage;
