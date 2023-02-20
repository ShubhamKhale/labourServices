import { IonIcon, IonPage } from "@ionic/react";
import { logoTwitter } from "ionicons/icons";
import { Link } from "react-router-dom";
import classes from "./AppLogoCard.module.css";

function AppLogoCard(props: { to: string; icon: string | undefined }) {
  return (
    <div className={classes.card}>
      <div className={classes.card_logo}>
        <a href={props.to}>
          <IonIcon className={classes.card_title} slot="start" icon={props.icon} />
        </a>
      </div>
    </div>
  );
}

export default AppLogoCard;
