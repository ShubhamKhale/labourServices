import {
  IonHeader,
  IonPage,
  IonIcon,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonFooter,
  IonButton,
  IonAccordionGroup,
  IonAccordion,
  IonItem,
  IonLabel,
} from "@ionic/react";
// import ExploreContainer from '../components/ExploreContainer';
import classes from "./LabourDashboard.module.css";
import { settingsOutline } from "ionicons/icons";
import { useState } from "react";
const LabourDashboard: React.FC = () => {
  const [labourStatusMode, setLabourStatusMode] = useState("warning");
  const [labourStatus, setLabourStatus] = useState("INACTIVE");
  const [completedServices, setCompletedServicest] = useState(0);
  const [pendingServices, setPendingServices] = useState(0);
  const [scheduleServices, setScheduleServices] = useState(0);
  const [penalties, setPenalties] = useState(0);

  function changeStatus() {
    if (labourStatus === "INACTIVE") {
      setLabourStatus("ACTIVE");
      setLabourStatusMode("success");
    } else {
      setLabourStatus("INACTIVE");
      setLabourStatusMode("warning");
    }
  }


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            <IonGrid style={{ backgroundColor: "white", color: "black" }}>
              <IonRow className={classes.ion_align_items_center}>
                <IonCol className={classes.settingIcon}>
                  <IonIcon
                    icon={settingsOutline}
                    size="default"
                    style={{ marginLeft: "8px" }}
                  />
                </IonCol>
                <IonCol className={classes.appName}>Labour Services</IonCol>
              </IonRow>
            </IonGrid>
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonGrid className={classes.gridContainer}>
          <IonButton className={classes.labourStatus} size="large" color={labourStatusMode} onClick={changeStatus}>{labourStatus}</IonButton>
          <IonRow>
            <IonCol>
              <IonCard className={classes.card}>
                <IonCardHeader id="completedServicesTitle">
                  <p className={classes.sam}>{completedServices}</p>
                  <IonCardTitle className={classes.sam2}>Completed Services</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard className={classes.card}>
                <IonCardHeader id="pendingServicesTitle">
                  <p className={classes.sam}>{pendingServices}</p>
                  <IonCardTitle className={classes.sam2}>Pending Services</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>  
              <IonCard className={classes.card}>
                <IonCardHeader id="scheduleServicesTitle">
                  <p className={classes.sam}>{scheduleServices}</p>
                  <IonCardTitle className={classes.sam2}>
                    Schedule Services
                  </IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard className={classes.card}>
                <IonCardHeader id="penaltiesTitle">
                  <p className={classes.sam}>{penalties}</p>
                  <IonCardTitle className={classes.sam2}>Penalties</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonFooter style={{ borderTop: "1px solid lightgrey", marginTop: "2rem", paddingTop: "1rem", }}>
          <IonToolbar>
            <IonAccordionGroup>
              <IonAccordion value="first">
                <IonItem slot="header" color="light">
                  <IonLabel>Completed Services</IonLabel>
                </IonItem>
                <div className={classes.ion_padding} slot="content">
                  Completed Services Content
                </div>
              </IonAccordion>
              <IonAccordion value="second">
                <IonItem slot="header" color="light">
                  <IonLabel>Pending Services</IonLabel>
                </IonItem>
                <div className={classes.ion_padding} slot="content">
                  Pending Services Content
                </div>
              </IonAccordion>
              <IonAccordion value="third">
                <IonItem slot="header" color="light">
                  <IonLabel>Schedule Services</IonLabel>
                </IonItem>
                <div className={classes.ion_padding} slot="content">
                  Schedule Services Content
                </div>
              </IonAccordion>
              <IonAccordion value="fourth">
                <IonItem slot="header" color="light">
                  <IonLabel>Penalties</IonLabel>
                </IonItem>
                <div className={classes.ion_padding} slot="content">
                  Penlties Content
                </div>
              </IonAccordion>
            </IonAccordionGroup>
          </IonToolbar>
        </IonFooter>
      </IonContent>
    </IonPage>
  );
};

export default LabourDashboard;
