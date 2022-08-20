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
  IonLabel
} from "@ionic/react";
// import ExploreContainer from '../components/ExploreContainer';
import "./labourDashboard.css";
import { settingsOutline, calendarOutline, alarmOutline, compassOutline } from "ionicons/icons";
import { useState } from "react";
const Tab2: React.FC = () => {
  const [labourStatusMode, setLabourStatusMode] = useState("warning");
  const [labourStatus, setLabourStatus] = useState("INACTIVE");
  const [completedServices, setCompletedServicest] = useState(0);
  const [pendingServices, setPendingServices] = useState(0);
  const [scheduleServices, setScheduleServices] = useState(0);
  const [penalties, setPenalties] = useState(0);
  const [serviceTitle, setServiceTitle] = useState("Completed Services");
  function changeStatus() {
    if (labourStatus === "INACTIVE") {
      setLabourStatus("ACTIVE");
      setLabourStatusMode("success");
    } else {
      setLabourStatus("INACTIVE");
      setLabourStatusMode("warning");
    }
  }

  function func1() {
    setServiceTitle("Completed Services");
  }
  function func2() {
    setServiceTitle("Pending Services");
  }
  function func3() {
    setServiceTitle("Schedule Services")
  }
  function func4() {
    setServiceTitle("Penalties");
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
              <IonCard className="card cardRight" onClick={func1}>
                <IonCardHeader id="completedServicesTitle">
                  <p className="sam">{completedServices}</p>
                  <IonCardTitle className="sam2">Completed Services</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard className="card cardLeft" onClick={func2}>
                <IonCardHeader id="pendingServicesTitle">
                  <p className="sam">{pendingServices}</p>
                  <IonCardTitle className="sam2">Pending Services</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonCard className="card cardRight" onClick={func3}>
                <IonCardHeader id="scheduleServicesTitle">
                  <p className="sam">{scheduleServices}</p>
                  <IonCardTitle className="sam2">
                    Schedule Services
                  </IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard className="card cardLeft" onClick={func4}>
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
        <IonTitle className="serviceTitle">{serviceTitle}</IonTitle>
        </IonToolbar>
          <IonToolbar>
            <IonAccordionGroup>
              <IonAccordion value="first">
                <IonItem slot="header" color="light">
                  <IonLabel>Service 1</IonLabel>
                </IonItem>
                <div className="ion-padding" slot="content">
                   <IonGrid className="serviceContent">
                    <IonRow>
                      <IonCol>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus sapiente eius quaerat.
                      </IonCol>
                      
                    </IonRow>
                    <IonRow className="serviceContentRow2">
                      <IonCol>
                        <div className="serviceLocation">
                          <IonIcon icon={compassOutline} size="default"/>
                          <p>goregaon-(w)</p>
                        </div>
                      </IonCol>
                      <IonCol>
                        <div className="serviceDate">
                          <IonIcon icon={calendarOutline} size="default"/>
                          <p>13/08/22</p>
                        </div>
                      </IonCol>
                      <IonCol>
                        <div className="serviceTime">
                          <IonIcon icon={alarmOutline} size="default"/>
                          <p>08:00 pm</p>
                        </div>
                      </IonCol>
                    </IonRow>
                   </IonGrid>
                </div>
              </IonAccordion>
              <IonAccordion value="second">
                <IonItem slot="header" color="light">
                  <IonLabel>Service 2</IonLabel>
                </IonItem>
                <div className="ion-padding" slot="content">
                   Service Content
                </div>
              </IonAccordion>
              <IonAccordion value="third">
                <IonItem slot="header" color="light">
                  <IonLabel>Service 3</IonLabel>
                </IonItem>
                <div className="ion-padding" slot="content">
                   Service Content
                </div>
              </IonAccordion>
              <IonAccordion value="fourth">
                <IonItem slot="header" color="light">
                  <IonLabel>Service 4</IonLabel>
                </IonItem>
                <div className="ion-padding" slot="content">
                  Service Content
                </div>
              </IonAccordion>
            </IonAccordionGroup>
          </IonToolbar>
        </IonFooter>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
