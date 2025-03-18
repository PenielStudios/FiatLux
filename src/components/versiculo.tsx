import React, {useState} from "react";
import { IonItem, IonBadge, IonLabel } from "@ionic/react";
interface VersiculoProps{
    texto: Text;
    num: BigInteger;
}

const Versiculo: React.FC<VersiculoProps> = ({texto , num}) => {

    return(
        <>
           <IonItem>
               <IonBadge slot="start">{num}</IonBadge>
               <IonLabel>{texto}</IonLabel>
            </IonItem>
        </>
    );
}

export default Versiculo;