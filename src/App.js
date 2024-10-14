import { Route, Routes } from 'react-router-dom';
import Login from './component/Login';
import Demo from './component/Demo';
import Registration from './component/Registration';
import IdentityProofs from './component/IdentityProofs';
import CreatePW from './component/CreatePW';
import CreatePWEmp from './component/CreatePWEmp';
import Personalreg from './component/Personalreg';
import Contactdetail from './component/Contactdetail'; 
import Uploaddetail from './component/Uploaddetail';
import PendingNotary from './component/PendingNotary';
import ApprovedNotary from './component/ApprovedNotary';
import BusinessUserNotaryList from './component/BusinessUserNotaryList';
import IndividualUserNotaryList from './component/IndividualUserNotaryList';
import IndividualUserSelectLoyer from './component/IndividualUserSelectLoyer';
import BusinessUserSelectLoyer from './component/BusinessUserSelectLoyer';
import Uploadkyc from './component/UploadKyc';  
import Logindetail from './component/Logindetail';
import Loginformperson from './component/Loginformperson';
import Identifyprf from './component/Identifyprf';
import CompanyForm from './component/Companydetail';
import CompanyDocumentsForm from './component/CompanyDocumentsForm';
import DirectorForm from './component/DirectorForm';
import DirectorPerdet from './component/DirectorPerdet';
import DirectorIdentity from './component/DirectorIdentify';
import DirectorContact from './component/DirectorContact';
import CompanyContact from './component/CompanyContact';
import CompanyLogin from './component/CompanyLogin';
import DirectorLogin from './component/DirectorLogin';



function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/demo' element={<Demo />} />
        <Route path='/create-password' element={<CreatePW />} />
        <Route path='/create-password-employee' element={<CreatePWEmp />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/identityproofs' element={<IdentityProofs />} />
        <Route path='/personalreg' element={<Personalreg />} />
        <Route path='/contactdetail' element={<Contactdetail />} />
        <Route path='/uploaddetail' element={<Uploaddetail />} />
        <Route path='/pendingnotary' element={<PendingNotary />} />
        <Route path='/approvednotary' element={<ApprovedNotary />} />
        <Route path='/businessusernotarylist' element={<BusinessUserNotaryList />} />
        <Route path='individualusernotarylist' element={<IndividualUserNotaryList />} />
        <Route path='individualuserselectloyer' element={<IndividualUserSelectLoyer />} />
        <Route path='businessuserselectloyer' element={<BusinessUserSelectLoyer />} />
        <Route path='uploadkyc' element={<Uploadkyc />} />
        <Route path='logindetail' element={<Logindetail />} />
        <Route path='loginformperson' element={<Loginformperson />} />
        <Route path='identifyprf' element={<Identifyprf />} />

        <Route path='CompanyForm' element={<CompanyForm />} />
        <Route path='CompanyDocumentsForm' element={<CompanyDocumentsForm />} />
        <Route path='CompanyContact' element={<CompanyContact />} />
        <Route path='CompanyLogin' element={<CompanyLogin />} />

        <Route path='DirectorForm' element={<DirectorForm />} />DirectorPerdet
        <Route path='DirectorPerdet' element={<DirectorPerdet />} />
        <Route path='DirectorIdentity' element={<DirectorIdentity />} />
        <Route path='DirectorContact' element={<DirectorContact />} />
        <Route path='DirectorLogin' element={<DirectorLogin />} />

      </Routes>

    </>
  );
}

export default App;
