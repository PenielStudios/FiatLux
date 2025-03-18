import { IonAccordion, IonButton, IonContent, IonFabButton, IonFooter, IonHeader, IonPage, IonTitle, IonToolbar, IonImg, IonNav } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <>
    <IonPage>
      
      <IonHeader>
        <IonToolbar>
          <IonTitle>Aplicacion de prueba</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
      
        <IonImg
          src="\hola.PNG"
          alt="un bicho raro diciendo hi"
        ></IonImg>

        <IonButton
          expand="block"
          routerLink='/contenido'
          >Siguiente
        </IonButton>
    </IonContent>
    <IonFooter>
        <center><h3>Hola ionic</h3></center>
      </IonFooter>
    </IonPage>
    </>
  );
};

export default Home;
