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
import { t } from "i18next";
import { Link } from "react-router-dom";
import ProfilePhoto from "../components/ProfilePhoto";

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
        <ProfilePhoto/>
        <br />
        <IonToolbar className={classes.ion_phone_content}>
          <IonTitle>
            <h1>
              <h6>{t("Enter_the_Phone_number")}</h6>
            </h1>
          </IonTitle>
          <IonTitle size="large">
            {t("This number will be use for the")}
            <br />
            {t("verification")}
          </IonTitle>
        </IonToolbar>
        <IonItem className={classes.ion_item_border}>
          <b>{t("+91")}</b>
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
        <Link to={"/otp"}>
        <IonButton className={classes.ion_button} color="secondary" size="large">
          {t("SEND_OTP")}
        </IonButton>
        </Link>
      </IonContent>
    </IonPage>
  );
};

export default EnterPhoneNo