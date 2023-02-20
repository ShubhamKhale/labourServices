import {
  IonAccordion,
  IonAccordionGroup,
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonPage,
  IonSkeletonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import {
  bodyOutline,
  chevronBackOutline,
  helpOutline,
  logoFacebook,
  logoGithub,
  logoInstagram,
  logoTwitter,
  newspaperOutline,
  pin,
} from "ionicons/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppLogoCard from "../../components/AppLogoCard";
import classes from "./About.module.css";
import { t } from "i18next";
const About: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const lazyImgLoadingStyle = {
    height: "150px",
    width: "150px",
    "border-radius": "25px",
  };

  setTimeout(() => setLoaded(true), 500);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" icon={chevronBackOutline} />
          </IonButtons>
          <IonTitle>{t("about")}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <div className={classes.acard}>
          <div className={classes.acard_image}>
            {loaded && <img src="https://i.redd.it/b3esnz5ra34y.jpg" />}

            {!loaded && (
              <IonSkeletonText
                animated={true}
                style={lazyImgLoadingStyle}
              ></IonSkeletonText>
            )}
          </div>
        </div>
        <div className={classes.acard_title}>
          {/* <p style={{textAlign:'center',fontSize:'15px',marginBottom:'0px'}}>0.8.3</p> */}
          {t("title")}
        </div>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>{t("Card_Subtitle")}</IonCardSubtitle>
            <IonCardTitle>{t("Card_Title")}</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            {t(
              "Keep close to Nature's heart... and break clear away, once in awhile,and climb a mountain or spend a week in the woods. Wash your spirit clean."
            )}
          </IonCardContent>
        </IonCard>

        <IonCard>
          <Link to={"/setting/theme"}>
            <IonItem>
              <IonIcon icon={newspaperOutline} slot="start" />
              <IonLabel>{t("Terms_and_Condtions")}</IonLabel>
            </IonItem>
          </Link>

          <Link to={"/setting/theme"}>
            <IonItem>
              <IonIcon icon={bodyOutline} slot="start" />
              <IonLabel>{t("Open_Source_Library")}</IonLabel>
            </IonItem>
          </Link>

          <IonAccordionGroup readonly={false}>
            <IonAccordion value="first" color="light">
              <IonItem slot="header" color="light">
                <IonIcon icon={helpOutline} slot="start" />
                <IonLabel>{t("Help")}</IonLabel>
              </IonItem>
              <div className={classes.ion_padding} slot="content">
                <IonItem>
                  <IonIcon icon={pin} slot="start" />
                  <IonLabel>{t("15/07/2003")}</IonLabel>
                  <IonIcon icon={pin} slot="middle" />
                  <IonLabel>{t("12:00 PM")}</IonLabel>
                </IonItem>
                <IonItem>
                  <IonIcon icon={pin} slot="start" />
                  <IonLabel>
                    {t("ion-item in a card, icon left")}
                  </IonLabel>
                  <IonButton fill="outline" slot="end">
                    {t("View")}
                  </IonButton>
                </IonItem>

                <IonCardContent>
                  {t("This is content, without any paragraph or header tags, within an ion-cardContent element.")}
                </IonCardContent>
              </div>
            </IonAccordion>
          </IonAccordionGroup>
        </IonCard>
        <IonCard style={{ padding: "10px" }}>
          <IonCardHeader>
            <IonCardSubtitle>{t("Follow_us_on")}</IonCardSubtitle>
          </IonCardHeader>

          <div className={classes.cards_list}>
            <AppLogoCard
              icon={logoTwitter}
              to="https://twitter.com/?lang=en-in"
            />
            <AppLogoCard icon={logoFacebook} to="https://www.facebook.com/" />
            <AppLogoCard icon={logoInstagram} to="https://www.instagram.com/" />
            <AppLogoCard icon={logoGithub} to="https://github.com/" />
          </div>
        </IonCard>
        <IonCard
          href={
            "mailto:labourservices.report@gmail.com?&subject=I got this error&body=Here Provide the discription of the Error or Problem and also attach few  or short video (in case of error) for more clarity"
          }
        >
          <IonCardHeader>
            <IonCardSubtitle>{t("Report_a_Error")}</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <>{t("labourservices.report@gmail.com")}</>
          </IonCardContent>

          {/* "mailto:labourservices.report@gmail.com?&subject=I got this error&body=Here Provide the discription of the Error or Problem and also attach few  or short video (in case of error) for more clarity" */}
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default About;
