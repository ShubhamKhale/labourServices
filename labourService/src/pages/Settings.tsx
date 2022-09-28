import {
  IonAlert,
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
  IonPage,
  IonRadio,
  IonRadioGroup,
  IonTitle,
  IonToolbar,
  useIonAlert,
} from "@ionic/react";
import {
  chevronBackOutline,
  contrastOutline,
  informationCircleOutline,
  languageOutline,
  logOutOutline,
  personOutline,
} from "ionicons/icons";
import React, { useState } from "react";
import SettingBtn from "../components/SettingBtn";
import ProfilePhoto from "../components/ProfilePhoto";
import { t } from "i18next";
import i18n from "../i18n";

const NewPage: React.FC = () => {
  const [presentAlert] = useIonAlert();
  const [showThemeModal, setThemeModal] = useState(false);
  const [showLanguageModal, setLanguageModal] = useState(false);
  const [isLogout, setIsLogout] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const [selectedLanguage, setselectedLanguage] = useState<string>('devicelanguage');
  const [selectedTheme, setselectedTheme] = useState<string>('devicetheme');

  i18n.changeLanguage(currentLanguage);

  return (        
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" icon={chevronBackOutline} />
          </IonButtons>
          <IonTitle slot="end">{t("setting")}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <ProfilePhoto />

        <SettingBtn
          text = {t("profile")}
          icon={personOutline}
          to={"/setting/profile"}
        />

        
        <SettingBtn
          text = {t("theme")}
          icon={contrastOutline}
          to={"/setting"}
          onClick={() => {
            setThemeModal(true);
          }}
        />
          <SettingBtn
            text = {t("language")}
            icon={languageOutline}
            to={"/setting"}
            onClick={() => {
              setLanguageModal(true);
            }}
          />

          {/* theme actionsheet */}
        <IonModal
          isOpen={showThemeModal}
          initialBreakpoint={0.27}
          handle={false}
          onDidDismiss={() => setThemeModal(false)}
        >
          <IonToolbar>
            <IonButtons slot={"end"}>
              <IonButton
                onClick={() => setThemeModal(false)}
                slot="end"
                color="secondary"
              >
                {t("close")}
              </IonButton>
            </IonButtons>
          </IonToolbar>

          <IonContent className="ion-padding">
            <IonList id="ion-align-items-center" lines="none">
              <IonRadioGroup value={selectedTheme} onIonChange={e => setselectedTheme(e.detail.value)}>
                <IonItem>
                  <IonLabel>{t("Use_device_theme")}</IonLabel>
                  <IonRadio slot="start" value="devicetheme" />
                </IonItem>

                <IonItem>
                  <IonLabel>{t("dark_theme")}</IonLabel>
                  <IonRadio slot="start" value="darktheme" />
                </IonItem>

                <IonItem>
                  <IonLabel>{t("light_theme")}</IonLabel>
                  <IonRadio slot="start" value="lighttheme" />
                </IonItem>
              </IonRadioGroup>
            </IonList>
          </IonContent>
        </IonModal>

        {/* language actionsheet */}
        <IonModal
          isOpen={showLanguageModal}
          initialBreakpoint={0.32}
          handle={false}
          onDidDismiss={() => setLanguageModal(false)}
        >
          <IonToolbar>
            <IonButtons slot={"end"}>
              <IonButton
                onClick={() => setLanguageModal(false)}
                slot="end"
                color="secondary"
              >
                {t("close")}
              </IonButton>
            </IonButtons>
          </IonToolbar>

          <IonContent className="ion-padding">
            <IonList id="ion-align-items-center" lines="none">
              <IonRadioGroup value={selectedLanguage} onIonChange={e => setselectedLanguage(e.detail.value)}>
                <IonItem>
                  <IonLabel>{t("use_device_language")}</IonLabel>
                  <IonRadio onClick={()=> setCurrentLanguage("en")} slot="start"  value="devicelanguage"/>
                </IonItem>

                <IonItem>
                  <IonLabel>{t("english")}</IonLabel>
                  <IonRadio   onClick={()=> setCurrentLanguage("en")} slot="start" value="english" />
                </IonItem>

                <IonItem>
                  <IonLabel>{t("hindi")}</IonLabel>
                  <IonRadio name= "foo"   onClick={()=> setCurrentLanguage("hi")}  slot="start" value="hindi" />
                </IonItem>

                <IonItem>
                  <IonLabel>{t("marathi")}</IonLabel>
                  <IonRadio name= "foo" onClick={()=> setCurrentLanguage("ma")} slot="start" value="marathi" />
                </IonItem>
              </IonRadioGroup>
            </IonList>
          </IonContent>
        </IonModal>

        {/* https://ionicframework.com/docs/api/action-sheet */}
        <IonAlert
          isOpen={isLogout}
          onDidDismiss={() => setIsLogout(false)}
          header={t("logout")}
          subHeader={t("Are_you_sure?")}
          buttons={[t("yes"), t("no")]}
        />
        <SettingBtn
          text = {t("logout")}
          icon={logOutOutline}
          to={"/setting"}
          onClick={() => setIsLogout(true)}
          color="danger"
        />

        <SettingBtn
          text = {t("about")}
          to="/setting/about"
          icon={informationCircleOutline}
        />
      </IonContent>
    </IonPage>
  );
};

export default NewPage;
function setselectedLanguageValue(value: string) {
  throw new Error("Function not implemented.");
}

