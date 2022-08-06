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
import "./selectedServices.css";
const Tab2: React.FC = () => {
  const modal = useRef<HTMLIonModalElement>(null);
  const [searchText, setSearchText] = useState("");
  // const [trigger, setTrigger] = useState("open-modal");
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
      <IonContent className="myClassName">
        <IonSearchbar
          id="search_bar"
          value={searchText}
          onIonChange={(e) => setSearchText(e.detail.value!)}
          animated
        ></IonSearchbar>
        <IonButton id="open-modal" color="tertiary" expand="block">
          Services
        </IonButton>
        <IonModal
          ref={modal}
          trigger="open-modal"
          initialBreakpoint={0.25}
          breakpoints={[0, 0.25, 0.5, 0.75, 1]}
        >
          <IonContent className="ion-padding">
            {/* <IonSearchbar onClick={() => modal.current?.setCurrentBreakpoint(0.75)} placeholder="Search"></IonSearchbar> */}
            <IonList id="ion-align-items-center">
              <IonGrid>
                <IonRow style={{ marginTop: "20px" }}>
                  <IonCol>
                    <IonButton
                      className="serviceBtn"
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
                      className="serviceBtn"
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
                      className="serviceBtn"
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
                    borderRadius: "25px",
                  }}
                  presentation="date-time"
                  prefer-wheel={true}
                ></IonDatetime>
              </IonItem>
            </IonList>
          </IonContent>
        </IonModal>

        <IonCard className="card"  onClick={() => alert("clicked")}>
          <IonCardHeader>
            <IonCardTitle>
              Electrician
            </IonCardTitle>
            <IonCardSubtitle></IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent></IonCardContent>
        </IonCard> 

        <IonCard className="card">
          <IonCardHeader>
            <IonCardTitle>Plumber</IonCardTitle>
            <IonCardSubtitle></IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent></IonCardContent>
        </IonCard>

        <IonCard className="card">
          <IonCardHeader>
            <IonCardTitle>Mason</IonCardTitle>
            <IonCardSubtitle></IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent></IonCardContent>
        </IonCard>

        <IonCard className="card">
          <IonCardHeader>
            <IonCardTitle>Carpenter</IonCardTitle>
            <IonCardSubtitle></IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent></IonCardContent>
        </IonCard>

        <IonCard className="card">
          <IonCardHeader>
            <IonCardTitle>Painter</IonCardTitle>
            <IonCardSubtitle></IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent></IonCardContent>
        </IonCard>

        <IonCard className="card">
          <IonCardHeader>
            <IonCardTitle>Pest controller</IonCardTitle>
            <IonCardSubtitle></IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent></IonCardContent>
        </IonCard>

        <IonSlides options={slideOpts} className="slide">
          <IonSlide className="slider-card">
            <img src="../../assets/image1.jpg" alt="Image1" />
            <IonCardHeader className="hover" style={{fontFamily:"Oleo Script Swash Caps", fontSize:"2rem"}}><a href="tab3">Hello</a></IonCardHeader>
          </IonSlide>
          <IonSlide className="slider-card">
            <img src="../../assets/image2.jpg" alt="Image2" />
            <IonCardHeader className="hover" style={{fontFamily:"Oleo Script Swash Caps", fontSize:"2rem"}}><a href="tab1">Ionic</a></IonCardHeader>
          </IonSlide>
          <IonSlide className="slider-card">
            <img src="../../assets/image3.jpg" alt="Image3" />
            <IonCardHeader className="hover" style={{fontFamily:"Oleo Script Swash Caps", fontSize:"2rem"}}><a href="tab2">Project</a></IonCardHeader>
          </IonSlide>
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;

// function setText(arg0: string): void {
//   throw new Error("Function not implemented.");
// }

// function trigger(arg0: string): void {
//   throw new Error("Function not implemented.");
// }
// function setSearchText(arg0: string): void {
//   throw new Error("Function not implemented.");
// }
// function setCurrentBreakpoint(initialBreakpoint: 0.25, arg1: 0.25) {

// }

// function initialBreakpoint(initialBreakpoint: any, arg1: number) {
//   throw new Error("Function not implemented.");
// }
