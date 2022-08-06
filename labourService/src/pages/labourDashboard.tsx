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
import "./labourDashboard.css";
import { settingsOutline } from "ionicons/icons";
import { useState } from "react";
const Tab1: React.FC = () => {
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
              <IonRow className=" ion-align-items-center">
                <IonCol className="settingIcon">
                  <IonIcon
                    icon={settingsOutline}
                    size="default"
                    style={{ marginLeft: "8px" }}
                  />
                </IonCol>
                <IonCol className="appName">Labour Services</IonCol>
              </IonRow>
            </IonGrid>
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonGrid className="gridContainer">
          <IonButton className="labourStatus" size="large" color={labourStatusMode} onClick={changeStatus}>{labourStatus}</IonButton>
          <IonRow>
            <IonCol>
              <IonCard className="card cardRight">
                <IonCardHeader id="completedServicesTitle">
                  <p className="sam">{completedServices}</p>
                  <IonCardTitle className="sam2">Completed Services</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard className="card cardLeft">
                <IonCardHeader id="pendingServicesTitle">
                  <p className="sam">{pendingServices}</p>
                  <IonCardTitle className="sam2">Pending Services</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonCard className="card cardRight">
                <IonCardHeader id="scheduleServicesTitle">
                  <p className="sam">{scheduleServices}</p>
                  <IonCardTitle className="sam2">
                    Schedule Services
                  </IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard className="card cardLeft">
                <IonCardHeader id="penaltiesTitle">
                  <p className="sam">{penalties}</p>
                  <IonCardTitle className="sam2">Penalties</IonCardTitle>
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
                <div className="ion-padding" slot="content">
                  Completed Services Content
                </div>
              </IonAccordion>
              <IonAccordion value="second">
                <IonItem slot="header" color="light">
                  <IonLabel>Pending Services</IonLabel>
                </IonItem>
                <div className="ion-padding" slot="content">
                  Pending Services Content
                </div>
              </IonAccordion>
              <IonAccordion value="third">
                <IonItem slot="header" color="light">
                  <IonLabel>Schedule Services</IonLabel>
                </IonItem>
                <div className="ion-padding" slot="content">
                  Schedule Services Content
                </div>
              </IonAccordion>
              <IonAccordion value="fourth">
                <IonItem slot="header" color="light">
                  <IonLabel>Penalties</IonLabel>
                </IonItem>
                <div className="ion-padding" slot="content">
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

export default Tab1;
