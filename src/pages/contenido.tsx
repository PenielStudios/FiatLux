import { IonAccordion,
     IonButton,
     IonContent,
     IonFabButton,
     IonFooter,
     IonHeader,
     IonPage,
     IonTitle,
     IonToolbar,
     IonNav,
     IonMenu,
     IonButtons, 
     IonMenuButton, 
     IonInput, 
     IonSearchbar} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import VistaVersiculos from '../components/VistaVersiculos';
import React, {useState} from "react";

const textosPrueba = [
  'Había un hombre de los fariseos que se llamaba Nicodemo, un principal entre los judíos.',
  'Este vino a Jesús de noche, y le dijo: Rabí, sabemos que has venido de Dios como maestro; porque nadie puede hacer estas señales que tú haces, si no está Dios con él.',
  'Respondió Jesús y le dijo: De cierto, de cierto te digo, que el que no naciere de nuevo, no puede ver el reino de Dios.',
  'Nicodemo le dijo: ¿Cómo puede un hombre nacer siendo viejo? ¿Puede acaso entrar por segunda vez en el vientre de su madre, y nacer?',
  'Respondió Jesús: De cierto, de cierto te digo, que el que no naciere de agua y del Espíritu, no puede entrar en el reino de Dios.',
  'Lo que es nacido de la carne, carne es; y lo que es nacido del Espíritu,[a] espíritu es.',
  'No te maravilles de que te dije: Os es necesario nacer de nuevo.',
  'El viento[b] sopla de donde quiere, y oyes su sonido; mas ni sabes de dónde viene, ni a dónde va; así es todo aquel que es nacido del Espíritu.',
  'Respondió Nicodemo y le dijo: ¿Cómo puede hacerse esto?',
  'Respondió Jesús y le dijo: ¿Eres tú maestro de Israel, y no sabes esto?'
];

const nuevoTexto = ['primero' , 'segundo' , 'tercero' , 'a ver si renderiza de nuevo el componente'];

const Contenido: React.FC = () => {
  //esto es un texto biblico para ver como queda
  //la idea es que cuando termine el modulo de sword
  //obtenga el arreglo con los textos de el
  const [listaVersiculos, setListaVersiculos] = useState(textosPrueba);
  
  function handleOnClick(){
    //esto debe cambiar el texto que se muestra en el componente
    //es una prueba a ver si lo puedo manipular desde el codigo
    //y a ver si se renderiza de nuevo
    setListaVersiculos(nuevoTexto);
  }
  return (
    <>
    <IonMenu contentId='main-content'>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Menu de no se que</IonTitle>
            </IonToolbar>
        </IonHeader>   
    </IonMenu>
    <IonPage id='main-content'>
      <IonHeader>
        <IonToolbar>
            <IonButtons slot='start'>
                <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonSearchbar id='sbBusqueda'></IonSearchbar>
        </IonToolbar>
      </IonHeader>

      <IonContent>
          <IonButton 
               onClick={handleOnClick}
          >Cambiar texto</IonButton>
          <VistaVersiculos
             lista={listaVersiculos}>        
          </VistaVersiculos>   
      </IonContent>
    <IonFooter>
        <center><h3>Juan 3 Reina Valera</h3></center>
      </IonFooter>
    </IonPage>
    </>
  );
};

export default Contenido;