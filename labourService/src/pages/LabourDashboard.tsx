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
import { t } from "i18next";
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
            {t("title")}
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonGrid className={classes.gridContainer}>
          <IonButton className={classes.labourStatus} size="large" color={labourStatusMode} onClick={changeStatus}>{labourStatus}</IonButton>
          <IonRow>
            <IonCol onClick={viewCompletedServicesContent}>
              <ServiceCount servicesCount={completedServicesCount} serviceName={t("Completed_Service")} color="#FBE7C6"/>
            </IonCol>
            <IonCol onClick={viewPendingServicesContent}>
              <ServiceCount servicesCount={pendingServicesCount} serviceName={t("Pending_Service")} color="#B4F8C8"/>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol onClick={viewScheduleServicesContent}>
              <ServiceCount servicesCount={scheduleServicesCount} serviceName={t("Schedule_Service")} color="#A0E7E5" />
            </IonCol>
            <IonCol onClick={viewPenaltyContent}>
              <ServiceCount servicesCount={penaltyCount} serviceName={t("penalties")} color="#FFAEBC"/>
            </IonCol>
          </IonRow>
        </IonGrid>

        {/* <IonFooter style={{ marginTop: "2rem", paddingTop: "1rem", }}> */}
        <IonHeader>
        <IonToolbar>
          <IonTitle>
            {serviceTitle}
          </IonTitle>
        </IonToolbar>
        </IonHeader>

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
          
        {/* </IonFooter> */}
      </IonContent>
    </IonPage>
  );
};

export default LabourDashboard;
