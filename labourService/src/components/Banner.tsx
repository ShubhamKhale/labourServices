import { IonCardHeader, IonSlide } from "@ionic/react";
import classes from "./Banner.module.css";

function Banner(props : {src:string}) {
    return (
        <IonSlide className={classes.slider_card}>
            <img src={props.src} alt="Image1" />
            <IonCardHeader >
                <a href="/">EXPLORE</a>
            </IonCardHeader>
        </IonSlide>
    );
}

export default Banner;
