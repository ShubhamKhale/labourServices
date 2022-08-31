import { Redirect, Route } from 'react-router-dom';
import { IonApp, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import '@ionic/react/css/core.css';

import Settings from './pages/Settings';
import About from './pages/setting_pages/About';
import Language from './pages/setting_pages/Language';
import Profile from './pages/setting_pages/Profile';
import Theme from './pages/setting_pages/Theme';
import EnterPhoneNo from './pages/EnterPhoneNo';
import NotFoundPage from './pages/NotFoundPage';
import StartingPage from './pages/StartingPage';
import SelectedServices from './pages/SelectedServices';
import LabourDashboard from './pages/LabourDashboard';
import CustomerAllocateLabour from './pages/CustomerAllocateLabour';



setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <Route path="/" exact component={SelectedServices} />
      
      <Route path="/setting" exact component={Settings} />

      <Route path="/setting/profile" exact component={Profile} />

      <Route path="/setting/theme" exact component={Theme} />

      <Route path="/setting/language" exact component={Language} />

      <Route path="/setting/about" exact component={About} />

      <Route path="/labour-dashboard" exact component={LabourDashboard} />

      <Route path="/enter-phone-no" exact component={EnterPhoneNo} />

      <Route path="/starting-page" exact component={StartingPage} />

      <Route path="/customer-allocation-labour" exact component={CustomerAllocateLabour} />



      <Route path="/select-services" render={() => <Redirect to={"/"} />} />
  
    </IonReactRouter>
  </IonApp>
);

export default App;
