import React, {useState} from "react";
import { IonItem, IonList } from "@ionic/react";
import Versiculo from  '../components/versiculo';

interface VistaVersiculosProps{
    lista: any;
}

const VistaVersiculos: React.FC<VistaVersiculosProps> = ({lista}) => {
    return(
        <>
           <IonList>
               {lista.map((texto,index)=>(<Versiculo texto={texto} num={index+1}></Versiculo>))}
           </IonList>
        </>
    );

}

export default VistaVersiculos;