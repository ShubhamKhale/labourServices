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
  IonCardContent,
  IonAvatar,
  IonImg,
} from "@ionic/react";
// import ExploreContainer from '../components/ExploreContainer';
import classes from "./LabourDashboard.module.css";
import { pin, settingsOutline } from "ionicons/icons";
import { useState } from "react";
import ServiceCount from "../components/ServiceCount";
import ServiceCustomer from "../components/ServiceCustomer";
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
            Labour Services
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

              <ServiceCustomer
                value="1"
                image={"https://th.bing.com/th/id/OIP.FPDZmsB9Nb6mFDH0kkKcMAHaJl?pid=ImgDet&w=1484&h=1920&rs=1"}
              />
              <ServiceCustomer
                value="2"
                image={"https://www.perfocal.com/blog/content/images/2020/07/Perfocal_Male_Dating_Profile_Portrait_Asian.jpg"}
              />
              <ServiceCustomer
                value="3"
                image={"https://sm.askmen.com/t/askmen_in/article/f/facebook-p/facebook-profile-picture-affects-chances-of-gettin_fr3n.1200.jpg"}
              />

            </IonAccordionGroup>
          </IonToolbar>
        </IonFooter>
      </IonContent>
    </IonPage>
  );
};

export default LabourDashboard;
