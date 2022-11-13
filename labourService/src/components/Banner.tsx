import { IonCardHeader, IonSkeletonText, IonSlide } from "@ionic/react";
import { useState } from "react";
import classes from "./Banner.module.css";

function Banner(props: { src: string, text: string }) {
    const [loaded, setLoaded] = useState(false);
    const lazyImgLoadingStyle = { height: '205px', 'width': '100%', 'border-radius': '10px' };
    setTimeout(() => setLoaded(true), 500);
    return (
        <IonSlide className={classes.slider_card}>


            {loaded &&
                <>
                    <img src={props.src} alt="Image1" />
                    <IonCardHeader >
                        <a href="/">{props.text}</a>
                    </IonCardHeader>
                </>
            }
            {!loaded &&
                <>
                    <IonSkeletonText animated={true} style={lazyImgLoadingStyle}></IonSkeletonText>
                </>

            }
        </IonSlide>
    );
}

export default Banner;
