import { IonButton, IonGrid, IonIcon, IonRow } from "@ionic/react";
import React from "react";
import { Link } from "react-router-dom";
import classes from './SettingBtn.module.css'




function SettingBtn(props: {
  to: string; text: string; icon: string | undefined; onClick?: any
}) {
  return (
    <div>
      <Link to={props.to}>
        <IonButton fill="clear" color="danger" onClick={()=>props.onClick()} className={classes.ion_btn_size}  expand="full">
          <IonIcon slot="start" icon={props.icon} />
          <IonGrid>
            <IonRow>{props.text}</IonRow>
          </IonGrid>
          </IonButton>
      </Link>
    </div>
  );
}

export default SettingBtn;


