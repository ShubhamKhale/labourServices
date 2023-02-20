import {
  IonCard,
  IonCardHeader,
  IonCheckbox,
  IonInput,
  IonItem,
  IonLabel,
} from "@ionic/react";
import classes from "./ScheduleServiceDescription.module.css";
import { service } from "../pages/SelectedServices";
import { t } from "i18next";
function ScheduleServiceDescription() {
  let a = service;
  if (a == "Electrician") {
    return (
      <IonCard>
        <IonCardHeader>
          <IonLabel color="dark" className={classes.descriptionTitle}>
            {t("Description")}
          </IonLabel>
        </IonCardHeader>
        <IonItem>
          <IonCheckbox slot="start"></IonCheckbox>
          <IonLabel>{t("Power_cut_off")}</IonLabel>
        </IonItem>
        <IonItem>
          <IonCheckbox slot="start"></IonCheckbox>
          <IonLabel>{t("Change_Old_wiring")}</IonLabel>
        </IonItem>
        <IonItem>
          <IonCheckbox slot="start"></IonCheckbox>
          <IonInput placeholder={t("write custom description here...")}></IonInput>
        </IonItem>
      </IonCard>
    );
  } else if (a == "Plumber") {
    return (
      <IonCard>
        <IonCardHeader>
          <IonLabel color="dark" className={classes.descriptionTitle}>
            {t("Description")}
          </IonLabel>
        </IonCardHeader>
        <IonItem>
          <IonCheckbox slot="start"></IonCheckbox>
          <IonLabel>{t("Pipe_broken")}</IonLabel>
        </IonItem>
        <IonItem>
          <IonCheckbox slot="start"></IonCheckbox>
          <IonLabel>{t("Leakage")}</IonLabel>
        </IonItem>
        <IonItem>
          <IonCheckbox slot="start"></IonCheckbox>
          <IonLabel>{t("Change_old_pipes")}</IonLabel>
        </IonItem>
        <IonItem>
          <IonCheckbox slot="start"></IonCheckbox>
          <IonInput placeholder={t("write custom description here...")}></IonInput>
        </IonItem>
      </IonCard>
    );
  } else if (a == "Mason") {
    return (
      <IonCard>
        <IonCardHeader>
          <IonLabel color="dark" className={classes.descriptionTitle}>
            {t("Description")}
          </IonLabel>
        </IonCardHeader>
        <IonItem>
          <IonCheckbox slot="start"></IonCheckbox>
          <IonLabel>{t("Flooring")}</IonLabel>
        </IonItem>
        <IonItem>
          <IonCheckbox slot="start"></IonCheckbox>
          <IonLabel>{t("Plaster_of_walls")}</IonLabel>
        </IonItem>
        <IonItem>
          <IonCheckbox slot="start"></IonCheckbox>
          <IonLabel>{t("Decorative_ceiling")}</IonLabel>
        </IonItem>
        <IonItem>
          <IonCheckbox slot="start"></IonCheckbox>
          <IonInput placeholder={t("write custom description here...")}></IonInput>
        </IonItem>
      </IonCard>
    );
  } else if (a == "Carpenter") {
    return (
      <IonCard>
        <IonCardHeader>
          <IonLabel color="dark" className={classes.descriptionTitle}>
            {t("Description")}
          </IonLabel>
        </IonCardHeader>
        <IonItem>
          <IonCheckbox slot="start"></IonCheckbox>
          <IonLabel>{t("Doors_and_windows")}</IonLabel>
        </IonItem>
        <IonItem>
          <IonCheckbox slot="start"></IonCheckbox>
          <IonLabel>{t("Whole_furniture")}</IonLabel>
        </IonItem>
        <IonItem>
          <IonCheckbox slot="start"></IonCheckbox>
          <IonLabel>{t("Repairing_of_wooden_cupboard")}</IonLabel>
        </IonItem>
        <IonItem>
          <IonCheckbox slot="start"></IonCheckbox>
          <IonInput placeholder={t("write custom description here...")}></IonInput>
        </IonItem>
      </IonCard>
    );
  } else if (a == "Painter") {
    return (
      <IonCard>
        <IonCardHeader>
          <IonLabel color="dark" className={classes.descriptionTitle}>
            {t("Description")}
          </IonLabel>
        </IonCardHeader>
        <IonItem>
          <IonCheckbox slot="start"></IonCheckbox>
          <IonLabel>{t("Painting_in_whole_house")}</IonLabel>
        </IonItem>
        <IonItem>
          <IonCheckbox slot="start"></IonCheckbox>
          <IonLabel>{t("Repairing_of_wall_paint")}</IonLabel>
        </IonItem>
        <IonItem>
          <IonCheckbox slot="start"></IonCheckbox>
          <IonLabel>{t("P.O.P_furnishing")}</IonLabel>
        </IonItem>
        <IonItem>
          <IonCheckbox slot="start"></IonCheckbox>
          <IonInput placeholder={t("write custom description here...")}></IonInput>
        </IonItem>
      </IonCard>
    );
  } else if (a == "Pest Controller") {
    return (
      <IonCard>
        <IonCardHeader>
          <IonLabel color="dark" className={classes.descriptionTitle}>
            {t("Description")}
          </IonLabel>
        </IonCardHeader>
        <IonItem>
          <IonCheckbox slot="start"></IonCheckbox>
          <IonLabel>{t("Pest_control_in_house")}</IonLabel>
        </IonItem>
        <IonItem>
          <IonCheckbox slot="start"></IonCheckbox>
          <IonLabel>{t("Chemical_spraying")}</IonLabel>
        </IonItem>
        <IonItem>
          <IonCheckbox slot="start"></IonCheckbox>
          <IonLabel>{t("Pest_control_of_whole_building")}</IonLabel>
        </IonItem>
        <IonItem>
          <IonCheckbox slot="start"></IonCheckbox>
          <IonInput placeholder={t("write custom description here...")}></IonInput>
        </IonItem>
      </IonCard>
    );
  } else return <IonCard></IonCard>;
}

export default ScheduleServiceDescription;
