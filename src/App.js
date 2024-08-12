import './App.css';
import DashboardCmp from './components/Dashboard/DashboardCmp';
import HeaderComponent from './components/Header/HeaderComponent';
import FooterComponent from './components/footer/FooterComponent';
import LoginCmp from './components/login/LoginCmp';
import RegisterUICmp from './components/Registration/RegisterUICmp';


function App() {
  return (
    <div>
      <HeaderComponent/>
      {/* <DashboardCmp></DashboardCmp> */}
      
     <LoginCmp/>  
     <RegisterUICmp/>
     <FooterComponent/>
    </div>
  );
}

export default App;
