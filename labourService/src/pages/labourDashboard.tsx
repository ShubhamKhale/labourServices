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
  IonCardContent
} from "@ionic/react";
// import ExploreContainer from '../components/ExploreContainer';
import classes from "./LabourDashboard.module.css";
import { pin, settingsOutline } from "ionicons/icons";
import { useState } from "react";
import ServiceCount from "../components/ServiceCount";
import ServiceContent from "../components/ServiceContent";
const LabourDashboard: React.FC = () => {
  const [labourStatusMode, setLabourStatusMode] = useState("warning");
  const [labourStatus, setLabourStatus] = useState("INACTIVE");

  const [completedServicesCount, setCompletedServicesCount] = useState(0);
  const [pendingServicesCount, setPendingServicesCount] = useState(0);
  const [scheduleServicesCount, setScheduleServicesCount] = useState(0);
  const [penaltyCount, setPenaltyCount] = useState(0);

  const [serviceTitle, setServiceTitle] = useState("Completed Service");
  function changeStatus() {
    if (labourStatus === "INACTIVE") {
      setLabourStatus("ACTIVE");
      setLabourStatusMode("success");
    } else {
      setLabourStatus("INACTIVE");
      setLabourStatusMode("warning");
    }
  }

  function viewCompletedServicesContent() {
    setServiceTitle("Completed Services");
  }

  function viewPendingServicesContent() {
    setServiceTitle("Pending Services");
  }

  function viewScheduleServicesContent() {
    setServiceTitle("Schedule Services");
  }

  function viewPenaltyContent() {
    setServiceTitle("Penalties");
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
            <IonCol onClick={viewCompletedServicesContent}>
              <ServiceCount servicesCount={completedServicesCount} serviceName="Completed Service" />
            </IonCol>
            <IonCol onClick={viewPendingServicesContent}>
              <ServiceCount servicesCount={pendingServicesCount} serviceName="Pending Service" />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol onClick={viewScheduleServicesContent}>
              <ServiceCount servicesCount={scheduleServicesCount} serviceName="Schedule Service" />
            </IonCol>
            <IonCol onClick={viewPenaltyContent}>
              <ServiceCount servicesCount={penaltyCount} serviceName="penalties" />
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonFooter style={{ borderTop: "1px solid lightgrey", marginTop: "2rem", paddingTop: "1rem", }}>
          <IonToolbar>
            <IonTitle className="serviceTitle">{serviceTitle}</IonTitle>
          </IonToolbar>
          <IonToolbar>
            <IonAccordionGroup>
              <IonAccordion value="first">
                <IonItem slot="header" color="light">
                  <IonLabel>Service 1</IonLabel>
                </IonItem>
                <div slot="content">
                  <ServiceContent/>
                </div>
              </IonAccordion>
              <IonAccordion value="second">
                <IonItem slot="header" color="light">
                  <IonLabel>Service 2</IonLabel>
                </IonItem>
                <div slot="content">
                  <ServiceContent/>
                </div>
              </IonAccordion>
              <IonAccordion value="third">
                <IonItem slot="header" color="light">
                  <IonLabel>Service 3</IonLabel>
                </IonItem>
                <div slot="content">
                  <ServiceContent/>
                </div>
              </IonAccordion>
              <IonAccordion value="fourth">
                <IonItem slot="header" color="light">
                  <IonLabel>Service 4</IonLabel>
                </IonItem>
                <div slot="content">
                  <ServiceContent/>
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
