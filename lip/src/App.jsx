import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsConditions';
import CoursesPage from './pages/Courses';
import AboutUs from './pages/AboutUs';
import ChairmanMessage from './pages/ChairmanMessage';
import VisionMissionValues from './pages/VisionMissionValues';
import AdmissionProcess from './pages/AdmissionProcedure';
import ContactUs from './pages/Contact';
import NotFound from './pages/NotFound';
import PlacementPage from './pages/Placement';

const App = () => {
  return (
   <Routes>
    
    {/* Pages  */}
    <Route path='/' element={<HomePage/>}/>
    <Route path='/courses' element={ <CoursesPage /> } />
    <Route path='/about' element={ <AboutUs/> } />
    <Route path='/chairman-message' element={ <ChairmanMessage /> } />
<Route path='/vision-mission' element={ <VisionMissionValues /> } /> 
<Route path='/admission-process' element={ <AdmissionProcess/> } /> 
<Route path='/contact' element={ <ContactUs/> } /> 
<Route path='*' element={ <NotFound/>  } /> 
<Route path='/placements' element={ <PlacementPage />  } /> 


    



    <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
    <Route path='/terms-and-conditions' element={<TermsAndConditions/>}/>



    




   </Routes>
  );
}

export default App;
