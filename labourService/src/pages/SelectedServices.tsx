import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
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
  IonItem,
  IonSlides,
  IonButtons,
  IonIcon,
  IonLabel,
  IonPopover,
} from "@ionic/react";

import classes from "./SelectedServices.module.css";
import { settingsOutline, ellipsisHorizontal, ellipsisVertical, refreshOutline, shareSocialOutline } from
  "ionicons/icons";
import SelectServiceBtn from "../components/SelectServiceBtn";
import Banner from "../components/Banner";
import { useHistory } from "react-router-dom";

const SelectedServices: React.FC = () => {
  const modal = useRef<HTMLIonModalElement>(null);
  const [searchText, setSearchText] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const slideOpts = {
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: true,

    autoplay: true,
    speed: 1000,
    pagination: true,
    scrollbar: true,
    loop: true,



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
  const history = useHistory();
  const{t, i18n}= useTranslation();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="secondary">
            <IonButton onClick={() => history.push("/setting")}>
              <IonIcon slot="icon-only" icon={settingsOutline} />
            </IonButton>
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
          <IonTitle onClick={() => history.push('/labour-dashboard')}>{t("title")}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        {/* <IonToolbar>
          <IonSearchbar autocomplete="on" id="search_bar" value={searchText} onIonChange={(e) =>
            setSearchText(e.detail.value!)}
            animated
            placeholder="Search"
          ></IonSearchbar>
        </IonToolbar> */}

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
                        cssClass: "custom-alert",
                        buttons: [
                          {
                            text: "No",
                            cssClass: "alert-button-cancel",

                          },
                          {
                            text: "Yes",
                            cssClass: "alert-button-confirm",
                            handler: () => {
                              setIsOpen(false);
                              history.push('/customer-allocation-labour');
                              
                            }
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
                    
              <SelectServiceBtn onClick={() => setIsOpen(true)}  text={t("electrician")} />

            </IonCol>
            <IonCol size="6">

              <SelectServiceBtn onClick={() => setIsOpen(true)} text={t("plumber")} />

            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="6">

              <SelectServiceBtn onClick={() => setIsOpen(true)} text={t("mason")} />

            </IonCol>
            <IonCol size="6">

              <SelectServiceBtn onClick={() => setIsOpen(true)} text={t("carpenter")} />

            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="6">

              <SelectServiceBtn onClick={() => setIsOpen(true)} text={t("painter")} />
            </IonCol>
            <IonCol size="6">
              <SelectServiceBtn onClick={() => setIsOpen(true)} text={t("pest_controller")} />
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonSlides options={slideOpts} className={classes.slide}>
          <Banner text={t("explore")} src={"https://cdn.wallpapersafari.com/99/68/CIuyYq.jpg"} />
          <Banner text={t("prices")} src={"https://th.bing.com/th/id/OIP.iCapiT_p3Cy7So81MSHrLQHaEK?pid=ImgDet&rs=1"} />
          <Banner text={t("offers")} src={"https://th.bing.com/th/id/R.cbb1adaf062ddd45475898322570e53b?rik=NHp%2fY0GBHtwtkA&riu=http%3a%2f%2fwallpaperheart.com%2fwp-content%2fuploads%2f2018%2f04%2fHD-Scenery-Wallpapers-hd-scenery-wallpaper.jpg&ehk=bLfDdPMS6bighCU5TfuLfAfPv%2b5qqY%2bZNuqPxhFh3Qo%3d&risl=&pid=ImgRaw&r=0"} />
        </IonSlides>

      </IonContent>
    </IonPage>
  );
};

export default SelectedServices;