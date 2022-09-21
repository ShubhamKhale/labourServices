import { IonCard, IonCardHeader, IonCheckbox, IonInput, IonItem, IonLabel } from "@ionic/react";
import classes from './ScheduleServiceDescription.module.css';
import React from "react";
import { service } from "../pages/SelectedServices";

function ScheduleServiceDescription() {
  let a = service;
 if  (a == "Electrician") 
   {   
     return (<IonCard>
  <IonCardHeader>
<IonLabel color="dark" className={classes.descriptionTitle}>Description</IonLabel>
</IonCardHeader>
<IonItem>
 <IonCheckbox slot="start"></IonCheckbox>
   <IonLabel>Power cut-off</IonLabel>
  </IonItem>
  <IonItem>
   <IonCheckbox slot="start"></IonCheckbox>
   <IonLabel>Change Old wiring</IonLabel>
</IonItem>
  <IonItem>
   <IonCheckbox slot="start"></IonCheckbox>
 <IonInput placeholder="write custom description here..."></IonInput>
 </IonItem>
</IonCard>); }
  else if (a == "Plumber") 
 { 
   return ( <IonCard>
  <IonCardHeader>
<IonLabel color="dark" className={classes.descriptionTitle}>Description</IonLabel>
</IonCardHeader>
  <IonItem>
 <IonCheckbox slot="start" ></IonCheckbox>
   <IonLabel >Pipe broken</IonLabel>
</IonItem>
<IonItem>
 <IonCheckbox slot="start"></IonCheckbox>
   <IonLabel>Leakage</IonLabel>
  </IonItem>
  <IonItem>
   <IonCheckbox slot="start"></IonCheckbox>
   <IonLabel>Change old pipes</IonLabel>
</IonItem>
  <IonItem>
   <IonCheckbox slot="start"></IonCheckbox>
 <IonInput placeholder="write custom description here..."></IonInput>
 </IonItem>
</IonCard>); }
  else if (a == "Mason") 
 { 
   return  (<IonCard>
  <IonCardHeader>
<IonLabel color="dark" className={classes.descriptionTitle}>Description</IonLabel>
</IonCardHeader>
  <IonItem>
 <IonCheckbox slot="start" ></IonCheckbox>
   <IonLabel >Flooring</IonLabel>
</IonItem>
<IonItem>
 <IonCheckbox slot="start"></IonCheckbox>
   <IonLabel>Plaster of walls</IonLabel>
  </IonItem>
  <IonItem>
   <IonCheckbox slot="start"></IonCheckbox>
   <IonLabel>Decorative ceiling</IonLabel>
</IonItem>
  <IonItem>
   <IonCheckbox slot="start"></IonCheckbox>
 <IonInput placeholder="write custom description here..."></IonInput>
 </IonItem>
</IonCard>);}
  else if (a == "Carpenter") 
 { 
   return  (<IonCard>
  <IonCardHeader>
<IonLabel color="dark" className={classes.descriptionTitle}>Description</IonLabel>
</IonCardHeader>
  <IonItem>
 <IonCheckbox slot="start" ></IonCheckbox>
   <IonLabel >Doors and windows</IonLabel>
</IonItem>
<IonItem>
 <IonCheckbox slot="start"></IonCheckbox>
   <IonLabel>Whole furnituree</IonLabel>
  </IonItem>
  <IonItem>
   <IonCheckbox slot="start"></IonCheckbox>
   <IonLabel>Repairing of wooden cupboard</IonLabel>
</IonItem>
  <IonItem>
   <IonCheckbox slot="start"></IonCheckbox>
 <IonInput placeholder="write custom description here..."></IonInput>
 </IonItem>
</IonCard>); }
  else if (a == "Painter") 
 { 
   return (<IonCard>
  <IonCardHeader>
<IonLabel color="dark" className={classes.descriptionTitle}>Description</IonLabel>
</IonCardHeader>
  <IonItem>
 <IonCheckbox slot="start" ></IonCheckbox>
   <IonLabel >Painting in whole house</IonLabel>
</IonItem>
<IonItem>
 <IonCheckbox slot="start"></IonCheckbox>
   <IonLabel>Repairing of wall paint</IonLabel>
  </IonItem>
  <IonItem>
   <IonCheckbox slot="start"></IonCheckbox>
   <IonLabel>P.O.P furnishing</IonLabel>
</IonItem>
  <IonItem>
   <IonCheckbox slot="start"></IonCheckbox>
 <IonInput placeholder="write custom description here..."></IonInput>
 </IonItem>
</IonCard>); }
  else if (a == "Pest Controller") 
 { 
   return (<IonCard>
  <IonCardHeader>
<IonLabel color="dark" className={classes.descriptionTitle}>Description</IonLabel>
</IonCardHeader>
  <IonItem>
 <IonCheckbox slot="start" ></IonCheckbox>
   <IonLabel >Pest control in house</IonLabel>
</IonItem>
<IonItem>
 <IonCheckbox slot="start"></IonCheckbox>
   <IonLabel>Chemical spraying</IonLabel>
  </IonItem>
  <IonItem>
   <IonCheckbox slot="start"></IonCheckbox>
   <IonLabel>Pest control of whole building</IonLabel>
</IonItem>
  <IonItem>
   <IonCheckbox slot="start"></IonCheckbox>
 <IonInput placeholder="write custom description here..."></IonInput>
 </IonItem>
</IonCard>); }
else return (<IonCard></IonCard>);
 }

export default ScheduleServiceDescription;