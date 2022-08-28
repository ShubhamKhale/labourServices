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
import ServiceCustomer from "../components/ServiceCustomer";
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
            Labour Services
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
