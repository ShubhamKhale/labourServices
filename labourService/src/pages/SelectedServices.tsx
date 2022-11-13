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
  IonDatetime,
  useIonToast,
} from "@ionic/react";

import classes from "./SelectedServices.module.css";
import {
  settingsOutline,
  ellipsisHorizontal,
  ellipsisVertical,
  refreshOutline,
  shareSocialOutline,
} from "ionicons/icons";
import SelectServiceBtn from "../components/SelectServiceBtn";
import Banner from "../components/Banner";
import { useHistory } from "react-router-dom";
import ScheduleServiceDescription from "../components/ScheduleServiceDescription";
export let service = "No service";
console.log(service);
export function serviceFunc(service: string) {
  return (service)

}

const SelectedServices: React.FC = () => {
  const modal = useRef<HTMLIonModalElement>(null);
  const modal2 = useRef<HTMLIonModalElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen_2, setIsOpen_2] = useState(false);

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
  const { t, i18n } = useTranslation();
  const [present] = useIonToast();

  const presentToast = (position: "top" | "middle" | "bottom") => {
    present({
      message: "Your service has been scheduled sucessfully",
      duration: 3000,
      position: position,
      color: "medium",
      animated: true,
    });
  };

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
            <IonButton id="xx">
              <IonIcon
                slot="icon-only"
                ios={ellipsisHorizontal}
                md={ellipsisVertical}
              />
            </IonButton>

            <IonPopover
              trigger="xx"
              dismissOnSelect={true}
              reference="event"
              showBackdrop={false}
            >
              <IonContent class="ion-padding">
                <IonItem>
                  <IonIcon icon={refreshOutline} slot="start" />
                  <IonLabel>{t("restart_app")}</IonLabel>
                </IonItem>
                <IonItem>
                  <IonIcon icon={shareSocialOutline} slot="start" />
                  <IonLabel>{t("share_app")}</IonLabel>
                </IonItem>
              </IonContent>
            </IonPopover>
          </IonButtons>
          <IonTitle onClick={() => history.push("/labour-dashboard")}>
            {t("title")}
          </IonTitle>
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

        <IonModal
          ref={modal2}
          isOpen={isOpen_2}
          handle={false}
          onDidDismiss={() => setIsOpen_2(false)}
        >
          <IonToolbar>
            <IonTitle className={classes.paddingTitleSchedule}>
              Schedule your service
            </IonTitle>
          </IonToolbar>
          <br />

          <IonButtons slot="start"></IonButtons>
          <IonContent>
            <IonDatetime className={classes.paddingSchedule}></IonDatetime>
            <ScheduleServiceDescription />
            <IonGrid>
              <IonRow>
                <IonCol size="2" offset="5.5">
                  <IonButton
                    onClick={() => modal2.current?.dismiss()}
                    color="danger"
                  >
                    Cancel
                  </IonButton>
                </IonCol>
                <IonCol size="2" offset="1.5">
                  <IonButton
                    onClick={() => {
                      modal2.current?.dismiss();
                      presentToast("top");
                    }}
                    color="success"
                  >
                    Done
                  </IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonContent>
        </IonModal>

        <IonModal
          ref={modal}
          isOpen={isOpen}
          initialBreakpoint={0.25}
          breakpoints={[0, 0.25, 0.5, 1]}
          handle={false}
          onDidDismiss={() => setIsOpen(false)}
        >
          <IonToolbar>
            <IonButtons slot={"end"}>
              <IonButton
                onClick={() => setIsOpen(false)}
                slot="end"
                color="secondary"
              >
                {t("close")}
              </IonButton>
            </IonButtons>
          </IonToolbar>

          <IonContent className="ion-padding">
            <IonList id="ion-align-items-center">
              <IonGrid>
                <IonRow>
                  <IonCol size="3" offset="0.8">
                    <IonButton
                      className={classes.serviceBtn}
                      color="danger"
                      onClick={() =>
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
                                history.push("/customer-allocation-labour");
                              },
                            },
                          ],
                        })
                      }
                    >
                      {t("rapid")}
                    </IonButton>
                  </IonCol>
                  <IonCol size="3" offset="0.5">
                    <IonButton
                      className={classes.serviceBtn}
                      color="warning"
                      onClick={() =>
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
                      {t("moderate")}
                    </IonButton>
                  </IonCol>
                  <IonCol size="3" offset="0.5">
                    <IonButton
                      className={classes.serviceBtn}
                      color="success"
                      onClick={() => {
                        setIsOpen(false);
                        setIsOpen_2(true);
                      }}
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
              <SelectServiceBtn
                onClick={() => {
                  setIsOpen(true)
                  service = "Electrician"
                }}
                text={t("electrician")}
              />
            </IonCol>
            <IonCol size="6">
              <SelectServiceBtn
                onClick={() => {
                  setIsOpen(true)
                  service = "Plumber"
                }}
                text={t("plumber")}
              />
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="6">
              <SelectServiceBtn
                onClick={() => {
                  setIsOpen(true)
                  service = "Mason"
                }}
                text={t("mason")}
              />
            </IonCol>
            <IonCol size="6">
              <SelectServiceBtn
                onClick={() => {
                  setIsOpen(true)
                  service = "Carpenter"
                }}
                text={t("carpenter")}
              />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="6">
              <SelectServiceBtn
                onClick={() => {
                  setIsOpen(true)
                  service = "Painter"
                }}
                text={t("painter")}
              />
            </IonCol>
            <IonCol size="6">
              <SelectServiceBtn
                onClick={() => {
                  setIsOpen(true)
                  service = "pest Controller"
                }}
                text={t("pest_controller")}
              />
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonSlides options={slideOpts} className={classes.slide}>
          <Banner
            text={t("explore")}
            src={"https://cdn.wallpapersafari.com/99/68/CIuyYq.jpg"}
          />
          <Banner
            text={t("prices")}
            src={
              "https://th.bing.com/th/id/OIP.iCapiT_p3Cy7So81MSHrLQHaEK?pid=ImgDet&rs=1"
            }
          />
          <Banner
            text={t("offers")}
            src={
              "https://th.bing.com/th/id/R.cbb1adaf062ddd45475898322570e53b?rik=NHp%2fY0GBHtwtkA&riu=http%3a%2f%2fwallpaperheart.com%2fwp-content%2fuploads%2f2018%2f04%2fHD-Scenery-Wallpapers-hd-scenery-wallpaper.jpg&ehk=bLfDdPMS6bighCU5TfuLfAfPv%2b5qqY%2bZNuqPxhFh3Qo%3d&risl=&pid=ImgRaw&r=0"
            }
          />
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};

export default SelectedServices;
