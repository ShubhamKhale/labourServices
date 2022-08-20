import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
// import { ellipse, square, triangle} from 'ionicons/icons';

import LabourDashboard from './pages/LabourDashboard';
import SelectedServices from './pages/SelectedServices';
import EnterPhoneNo from './pages/EnterPhoneNo';
import StartingPage from './pages/StartingPage';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Settings from './pages/Settings';
import About from './pages/setting_pages/About';
import Language from './pages/setting_pages/Language';
import Profile from './pages/setting_pages/Profile';
import Theme from './pages/setting_pages/Theme';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <Route path="/" exact>
        <SelectedServices/>
      </Route>
      <Route path="/setting" exact>
        <Settings />
      </Route>
      <Route path="/setting/profile" exact>
        <Profile />
      </Route>
      <Route path="/setting/theme" exact>
        < Theme />
      </Route>
      <Route path="/setting/language" exact>
        <Language />
      </Route>
      <Route path="/setting/about" exact>
        <About />
      </Route>
      <Route path="/labour-dashboard" exact>
        <LabourDashboard/>
      </Route>
      <Route path="/enter-phone-no" exact>
        <EnterPhoneNo/>
      </Route>
      <Route path="/starting-page" exact>
        <StartingPage/>
      </Route>
    </IonReactRouter>
  </IonApp>
);

export default App;
