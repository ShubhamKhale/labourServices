import React, { useRef, useState } from "react";
import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonList,
  IonModal,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  useIonAlert,
  IonDatetime,
  IonItem,
  IonText,
  IonCard,
  IonCardSubtitle,
  IonCardContent,
  IonSlides,
  IonSlide,
  IonSearchbar,
  IonCardTitle,
  IonCardHeader,
} from "@ionic/react";
// import ExploreContainer from "../components/ExploreContainer";
import classes from "./SelectedServices.module.css";

const SelectedServices: React.FC = () => {
  const modal = useRef<HTMLIonModalElement>(null);
  const [searchText, setSearchText] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const slideOpts = {
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: true,

    coverflowEffect: {
      freeMode: true,
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
      effect: "flip",
      // loop:true,
    },
  };
  const [presentAlert] = useIonAlert();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Labour Services</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonToolbar>
          <IonSearchbar
            autocomplete="on"
            id="search_bar"
            value={searchText}
            onIonChange={(e) => setSearchText(e.detail.value!)}
            animated
            placeholder="Search"
          ></IonSearchbar>
        </IonToolbar>
        <IonButton
          onClick={() => setIsOpen(true)}
          color="tertiary"
          expand="block"
        >
          Services
        </IonButton>
        <IonModal
          ref={modal}
          isOpen={isOpen}
          initialBreakpoint={0.25}
          breakpoints={[0, 0.25, 0.5, 0.75, 1]}
        >
          <IonHeader>
            <IonToolbar>
              <IonButton
                onClick={() => setIsOpen(false)}
                slot="end"
                color="secondary"
              >
                Close
              </IonButton>
            </IonToolbar>
          </IonHeader>

          <IonContent className={classes.ion_padding}>
            {/* <IonSearchbar onClick={() => modal.current?.setCurrentBreakpoint(0.75)} placeholder="Search"></IonSearchbar> */}
            <IonList id="ion-align-items-center">
              <IonGrid>
                <IonRow style={{ marginTop: "20px" }}>
                  <IonCol>
                    <IonButton
                      className={classes.serviceBtn}
                      color="danger"
                      onClick={() =>
                        presentAlert({
                          header: "Are you sure?",
                          mode: "ios",
                          cssClass: "custom-alert",
                          buttons: [
                            {
                              text: "No",
                              cssClass: "alert-button-cancel",
                            },
                            {
                              text: "Yes",
                              cssClass: "alert-button-confirm",
                            },
                          ],
                        })
                      }
                    >
                      RAPID
                    </IonButton>
                  </IonCol>
                  <IonCol>
                    <IonButton
                      className={classes.serviceBtn}
                      color="warning"
                      onClick={() =>
                        presentAlert({
                          header: "Are you sure?",
                          mode: "ios",
                          cssClass: "custom-alert",
                          buttons: [
                            {
                              text: "No",
                              cssClass: "alert-button-cancel",
                            },
                            {
                              text: "Yes",
                              cssClass: "alert-button-confirm",
                            },
                          ],
                        })
                      }
                    >
                      MODERATE
                    </IonButton>
                  </IonCol>
                  <IonCol>
                    <IonButton
                      className={classes.serviceBtn}
                      color="success"
                      onClick={() => modal.current?.setCurrentBreakpoint(0.75)}
                    >
                      SCHEDULE
                    </IonButton>
                  </IonCol>
                </IonRow>
              </IonGrid>
              <IonText>
                <h2 style={{ marginTop: "7rem", textAlign: "center" }}>
                  <b>Schedule date and time</b>
                </h2>
              </IonText>
              <IonItem id="date_time">
                <IonDatetime
                  style={{
                    backgroundColor: "pink",
                    color: "white",
                    borderRadius: "5px",
                  }}
                  presentation="date-time"
                  prefer-wheel={true}
                ></IonDatetime>
              </IonItem>
            </IonList>
          </IonContent>
        </IonModal>

        <IonGrid className={classes.gridServiceContainer}>
          <IonRow>
            <IonCol>
              <IonCard
                onClick={() => setIsOpen(true)}
                className={classes.serviceCard}
              >
                <IonCardHeader className={classes.ion_text_center}>
                  <IonCardTitle>Electrician</IonCardTitle>
                  <IonCardSubtitle></IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent></IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard
                onClick={() => setIsOpen(true)}
                className={classes.serviceCard}
              >
                <IonCardHeader className={classes.ion_text_center}>
                  <IonCardTitle>Plumber</IonCardTitle>
                  <IonCardSubtitle></IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent></IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonCard
                onClick={() => setIsOpen(true)}
                className={classes.serviceCard}
              >
                <IonCardHeader className={classes.ion_text_center}>
                  <IonCardTitle>Mason</IonCardTitle>
                  <IonCardSubtitle></IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent></IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard
                onClick={() => setIsOpen(true)}
                className={classes.serviceCard}
              >
                <IonCardHeader className={classes.ion_text_center}>
                  <IonCardTitle>Carpenter</IonCardTitle>
                  <IonCardSubtitle></IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent></IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonCard
                onClick={() => setIsOpen(true)}
                className={classes.serviceCard}
              >
                <IonCardHeader className={classes.ion_text_center}>
                  <IonCardTitle>Painter</IonCardTitle>
                  <IonCardSubtitle></IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent></IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard
                onClick={() => setIsOpen(true)}
                className={classes.serviceCard}
              >
                <IonCardHeader className={classes.ion_text_center}>
                  <IonCardTitle>Pest Controller</IonCardTitle>
                  <IonCardSubtitle></IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent></IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonSlides options={slideOpts} className={classes.slide}>
          <IonSlide className={classes.slider_card}>
            <img src="../../assets/image1.jpg" alt="Image1" />
            <IonCardHeader className={classes.hover}>
              <a href="/">EXPLORE</a>
            </IonCardHeader>
          </IonSlide>
          <IonSlide className={classes.slider_card}>
            <img src="../../assets/image2.jpg" alt="Image2" />
            <IonCardHeader
              className={classes.hover}
              style={{ fontFamily: "Oleo Script Swash Caps", fontSize: "2rem" }}
            >
              <a href="/">IONIC</a>
            </IonCardHeader>
          </IonSlide>
          <IonSlide className={classes.slider_card}>
            <img src="../../assets/image3.jpg" alt="Image3" />
            <IonCardHeader
              className={classes.hover}
              style={{ fontFamily: "Oleo Script Swash Caps", fontSize: "2rem" }}
            >
              <a href="/">ABOUT</a>
            </IonCardHeader>
          </IonSlide>
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};

export default SelectedServices;
