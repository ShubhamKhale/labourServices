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

const About: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const lazyImgLoadingStyle = { height: '150px', 'width': '150px', 'border-radius': '25px' };

  setTimeout(() => setLoaded(true), 500);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" icon={chevronBackOutline} />
          </IonButtons>
          <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent >
        <div className={classes.acard}>
          <div className={classes.acard_image}>

            {loaded && <img src="https://i.redd.it/b3esnz5ra34y.jpg" />}

            {!loaded && <IonSkeletonText animated={true} style={lazyImgLoadingStyle}></IonSkeletonText>}
          </div>
        </div>
        <div className={classes.acard_title}>
          {/* <p style={{textAlign:'center',fontSize:'15px',marginBottom:'0px'}}>0.8.3</p> */}
          Labour Services
        </div>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
            <IonCardTitle>Card Title</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            Keep close to Nature's heart... and break clear away, once in awhile,
            and climb a mountain or spend a week in the woods. Wash your spirit
            clean.
          </IonCardContent>
        </IonCard>


        <IonCard>
          <Link to={"/setting/theme"}>
            <IonItem>
              <IonIcon icon={newspaperOutline} slot="start" />
              <IonLabel>Terms and Condtions</IonLabel>
            </IonItem>
          </Link>

          <Link to={"/setting/theme"}>
            <IonItem>
              <IonIcon icon={bodyOutline} slot="start" />
              <IonLabel>Open Source Library</IonLabel>
            </IonItem>
          </Link>

          <IonAccordionGroup readonly={false}>
            <IonAccordion value="first" color="light">
              <IonItem slot="header" color="light">
                <IonIcon icon={helpOutline} slot="start" />
                <IonLabel>Help</IonLabel>
              </IonItem>
              <div className={classes.ion_padding} slot="content">
                <IonItem>
                  <IonIcon icon={pin} slot="start" />
                  <IonLabel>15/07/2003</IonLabel>
                  <IonIcon icon={pin} slot="middle" />
                  <IonLabel>12:00 PM</IonLabel>
                </IonItem>
                <IonItem>
                  <IonIcon icon={pin} slot="start" />
                  <IonLabel>ion-item in a card, icon left, button right</IonLabel>
                  <IonButton fill="outline" slot="end">
                    View
                  </IonButton>
                </IonItem>

                <IonCardContent>
                  This is content, without any paragraph or header tags, within an
                  ion-cardContent element.
                </IonCardContent>
              </div>
            </IonAccordion>
          </IonAccordionGroup>
        </IonCard>
        <IonCard style={{ padding: "10px" }}>
          <IonCardHeader>
            <IonCardSubtitle>Follow us on</IonCardSubtitle>
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
        <IonCard href={"mailto:labourservices.report@gmail.com?&subject=I got this error&body=Here Provide the discription of the Error or Problem and also attach few  or short video (in case of error) for more clarity"}>
          <IonCardHeader>

            <IonCardSubtitle>Report a Error</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent><>labourservices.report@gmail.com</></IonCardContent>

          {/* "mailto:labourservices.report@gmail.com?&subject=I got this error&body=Here Provide the discription of the Error or Problem and also attach few  or short video (in case of error) for more clarity" */}
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default About;
