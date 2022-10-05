import {
  IonButton,
  IonContent,
  IonHeader,
  IonItem,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { t } from "i18next";
import { Link } from "react-router-dom";
import classes from "./StartingPage.module.css";

const StaringPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{t("Starting_Page")}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonItem className={classes.text1}>
          <b>
            {
              "Book Services like Electrician, plumber, Painter, Carpenter, Mason at your fingure tips."
            }
          </b>
        </IonItem>
        <Link to={"/enter-phone-no"}>
          <IonButton className={classes.ion_button_center} color="tertiary">
            {t("Continue_with_Phone_no.")}
          </IonButton>
        </Link>
      </IonContent>
    </IonPage>
  );
};

export default StaringPage;
