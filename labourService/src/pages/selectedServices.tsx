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
  IonBackButton,
  IonButtons,
  IonIcon,
  IonLabel,
  IonPopover,
} from "@ionic/react";
// import ExploreContainer from "../components/ExploreContainer";
import classes from "./SelectedServices.module.css";
import { settingsOutline, ellipsisHorizontal, ellipsisVertical, refreshOutline, shareSocialOutline } from
  "ionicons/icons";
import SelectServiceBtn from "../components/SelectServiceBtn";
import Banner from "../components/Banner";

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
          <IonButtons slot="secondary">
            <IonBackButton defaultHref="/setting" icon={settingsOutline} />
          </IonButtons>
          <IonButtons slot="primary">
            <IonButton id='xx'>
              <IonIcon slot="icon-only" ios={ellipsisHorizontal} md={ellipsisVertical} />
            </IonButton>

            <IonPopover trigger='xx' dismissOnSelect={true} reference="event" showBackdrop={false}>
              <IonContent class="ion-padding">
                <IonItem>
                  <IonIcon icon={refreshOutline} slot="start" />
                  <IonLabel>Restart App</IonLabel>
                </IonItem>
                <IonItem>
                  <IonIcon icon={shareSocialOutline} slot="start" />
                  <IonLabel>Share App</IonLabel>
                </IonItem>
              </IonContent>
            </IonPopover>


          </IonButtons>
          <IonTitle>Labour Services</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonToolbar>
          <IonSearchbar autocomplete="on" id="search_bar" value={searchText} onIonChange={(e) =>
            setSearchText(e.detail.value!)}
            animated
            placeholder="Search"
          ></IonSearchbar>
        </IonToolbar>

        <IonModal ref={modal} isOpen={isOpen} initialBreakpoint={0.25} breakpoints={[0, 0.25, 0.5, 1]} handle={false}
          onDidDismiss={() => setIsOpen(false)}

        >
          <IonToolbar>
            <IonButtons slot={'end'}>
              <IonButton onClick={() => setIsOpen(false)}
                slot="end"
                color="secondary"
              >
                Close
              </IonButton>
            </IonButtons>
          </IonToolbar>


          <IonContent className='ion-padding'>
            <IonList id="ion-align-items-center">
              <IonGrid>
                <IonRow>
                  <IonCol size="3" offset='0.8'>
                    <IonButton className={classes.serviceBtn} color="danger" onClick={() =>
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
                  <IonCol size="3" offset="0.5">
                    <IonButton className={classes.serviceBtn} color="warning" onClick={() =>
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
                  <IonCol size="3" offset="0.5">
                    <IonButton className={classes.serviceBtn} color="success"
                    >
                      SCHEDULE
                    </IonButton>
                  </IonCol>
                </IonRow>
              </IonGrid>




            </IonList>
          </IonContent>
        </IonModal>

        <IonGrid className={classes.gridServiceContainer}>
          <IonRow>
            <IonCol size="6">

              <SelectServiceBtn onClick={() => setIsOpen(true)} text="Electrician" />

            </IonCol>
            <IonCol size="6">

              <SelectServiceBtn onClick={() => setIsOpen(true)} text="Plumber" />

            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="6">

              <SelectServiceBtn onClick={() => setIsOpen(true)} text="Mason" />

            </IonCol>
            <IonCol size="6">

              <SelectServiceBtn onClick={() => setIsOpen(true)} text="Carpenter" />

            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="6">

              <SelectServiceBtn onClick={() => setIsOpen(true)} text="Painter" />
            </IonCol>
            <IonCol size="6">
              <SelectServiceBtn onClick={() => setIsOpen(true)} text="Pest Controller" />
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonSlides options={slideOpts} className={classes.slide}>
          <Banner src={"https://cdn.wallpapersafari.com/99/68/CIuyYq.jpg"} />
          <Banner src={"https://cdn.wallpapersafari.com/99/68/CIuyYq.jpg"} />
          <Banner src={"https://cdn.wallpapersafari.com/99/68/CIuyYq.jpg"} />
        </IonSlides>

      </IonContent>
    </IonPage>
  );
};

export default SelectedServices;