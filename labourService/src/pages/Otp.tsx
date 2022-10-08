import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { IonButton, IonContent, IonIcon, IonPage } from "@ionic/react";
import { chatbubbleEllipsesOutline, logoWhatsapp } from "ionicons/icons";
import classes from "./Otp.module.css";
import { t } from "i18next";
import { Link } from "react-router-dom";

const Otp: React.FC = () => {
  const [otp, setOtp] = useState("");

  const handleChange = (otp: React.SetStateAction<string>) => {
    setOtp(otp);
  };

  return (
    <IonPage>
      <IonContent style={{ textAlign: "center" }}>
        <h2 style={{ marginTop: "5rem" }}>{t("Enter_Verfication_code")}</h2>

        <OtpInput
          value={otp}
          onChange={handleChange}
          numInputs={4}
          separator={<span></span>}
          placeholder={"    "}
          shouldAutoFocus={true}
          // containerStyle={"otpContainer"}
          // inputStyle={"otpInput"}
          isInputNum={true}
        />

        <h3>{t("Didn't_get_OTP?_Resend_via")}</h3>
        <div className={classes.msgApplicationLogos}>
          <IonIcon icon={chatbubbleEllipsesOutline} size="large" />
          <IonIcon icon={logoWhatsapp} size="large" />
        </div>
        <Link to={"/setting/profile"}>
          <IonButton className={classes.confirmBtn}>{t("Confirm")}</IonButton>
        </Link>
      </IonContent>
    </IonPage>
  );
};

export default Otp;
