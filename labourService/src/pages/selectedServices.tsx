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
const Tab1: React.FC = () => {
  const modal = useRef<HTMLIonModalElement>(null);
  const [searchText, setSearchText] = useState("");
  // const [trigger, setTrigger] = useState("open-modal");
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
        <IonButton id="open-modal" color="tertiary" expand="block">
          Services
        </IonButton>
        <IonModal
          isOpen={isOpen}
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

        <IonGrid className="gridServiceContainer">
          <IonRow>
            <IonCol>
            <IonCard className="serviceCard serviceCardLeft">
          <IonCardHeader>
            <IonButton onClick={() => setIsOpen(true)}>Electrician</IonButton>
            <IonCardSubtitle></IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent onClick={() => setIsOpen(false)}>
            Close
          </IonCardContent>
        </IonCard>
            </IonCol>
            <IonCol>
            <IonCard className="serviceCard serviceCardRight">
          <IonCardHeader>
            <IonButton onClick={() => setIsOpen(true)}>Plumber</IonButton>
            <IonCardSubtitle></IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent onClick={() => setIsOpen(false)}>
            Close
          </IonCardContent>
        </IonCard>
            </IonCol>
          </IonRow>

          <IonRow>
          <IonCol>
          <IonCard className="serviceCard serviceCardLeft">
          <IonCardHeader>
            <IonButton onClick={() => setIsOpen(true)}>Mason</IonButton>
            <IonCardSubtitle></IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent onClick={() => setIsOpen(false)}>
            Close
          </IonCardContent>
        </IonCard>
          </IonCol>
            <IonCol>
            <IonCard className="serviceCard serviceCardRight">
          <IonCardHeader>
            <IonButton onClick={() => setIsOpen(true)}>Carpenter</IonButton>
            <IonCardSubtitle></IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent onClick={() => setIsOpen(false)}>
            Close
          </IonCardContent>
        </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
          <IonCol>
          <IonCard className="serviceCard serviceCardLeft">
          <IonCardHeader>
            <IonButton onClick={() => setIsOpen(true)}>Painter</IonButton>
            <IonCardSubtitle></IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent onClick={() => setIsOpen(false)}>
            Close
          </IonCardContent>
        </IonCard>
          </IonCol>
            <IonCol>
            <IonCard className="serviceCard serviceCardRight">
          <IonCardHeader>
            <IonButton onClick={() => setIsOpen(true)}>Pest Controller</IonButton>
            <IonCardSubtitle></IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent onClick={() => setIsOpen(false)}>
            Close
          </IonCardContent>
        </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
        

        <IonSlides options={slideOpts} className="slide">
          <IonSlide className="slider-card">
            <img src="../../assets/image1.jpg" alt="Image1"/>
            <IonCardHeader className="hover">
              <a href="/">Hello</a>
            </IonCardHeader>
          </IonSlide>
          <IonSlide className="slider-card">
            <img src="../../assets/image2.jpg" alt="Image2" />
            <IonCardHeader
              className="hover"
              style={{ fontFamily: "Oleo Script Swash Caps", fontSize: "2rem" }}
            >
              <a href="tab1">Ionic</a>
            </IonCardHeader>
          </IonSlide>
          <IonSlide className="slider-card">
            <img src="../../assets/image3.jpg" alt="Image3" />
            <IonCardHeader
              className="hover"
              style={{ fontFamily: "Oleo Script Swash Caps", fontSize: "2rem" }}
            >
              <a href="tab2">Project</a>
            </IonCardHeader>
          </IonSlide>
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;

// function present(arg0: { onWillDismiss: (ev: CustomEvent<OverlayEventDetail>) => void; }) {
//   throw new Error("Function not implemented.");
// }

//   function ModalExample(ModalExample: any, arg1: { onDismiss: (data: string, role: string) => void; }): [any, any] {
//     throw new Error("Function not implemented.");
//   }
// function setIsOpen(arg0: boolean): void {
//   throw new Error("Function not implemented.");
// }
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
