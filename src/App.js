import { Route, Routes } from "react-router-dom";
import { HelpCenter,Navbar } from "./components";
import Home from "./pages/Home";
import Portal from "./pages/Portal";
//NEWS
import { 
  NewsUpdate, NewsDetail,
  FinancialUpdate, FinancialUpdateDetail,NewsHome,NationalUpdate,NationalUpdateDetail,OrganizationalStructure,BOD,BOC,Regulation,Report } from "./components";
//IT
import { VisionMission,ITOrganizationalStructure,ITGuidelines,ItBook,OLA,SLA,ProjectDocument } from "./components";
import { Incidents,ReportsDownload,AuditFindings,ChangeManagement,ProjectManagement,IncidentPriority,ServiceCatalog,ContactList,ITForm,ReadForm } from "./components"; 
//Inforaphic
import { Infographic, AdminMF } from "./components";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route exact path="/" element={<Portal />}>
          <Route path="/news/update" element={<NewsUpdate />} />
          <Route path="/news/update/:id" element={<NewsDetail />} />
          <Route path="/news/financialupdate" element={<FinancialUpdate />} />
          <Route path="/news/financialupdate/:id" element={<FinancialUpdateDetail />} />
          <Route path="/News" element={<NewsHome />} />
          <Route path="/news/nationalupdate" element={<NationalUpdate />} />
          <Route path="/news/nationalupdate/:id" element={<NationalUpdateDetail />} />
          <Route path="/news/organizationalstructure" element={<OrganizationalStructure />} />
          <Route path="/news/bod" element={<BOD />} />
          <Route path="/news/boc" element={<BOC />} />
          <Route path="/news/regulation" element={<Regulation />} />
          <Route path="/news/report" element={<Report />} />
          <Route path="/it/visionmission" element={<VisionMission />} />
          <Route path="/it/itorganizationalstructure" element={<ITOrganizationalStructure />} />
          <Route path="/it/itguidelines" element={<ITGuidelines />} />
          <Route path="/it/guidelines/:id" element={<ItBook />} />
          <Route path="/it/incidentpriority" element={<IncidentPriority />} />
          <Route path="/it/servicecatalog" element={<ServiceCatalog />} />
          <Route path="/it/contactlist" element={<ContactList />} /> 
          <Route path="/it/ola" element={<OLA />} />
          <Route path="/it/sla" element={<SLA />} />
          <Route path="/it/projectdocument" element={<ProjectDocument />} />
          <Route path="/it/incidents" element={<Incidents />} />
          <Route path="/it/reportsdownload" element={<ReportsDownload />} />
          <Route path="/it/auditfindings" element={<AuditFindings />} />
          <Route path="/it/changemanagement" element={<ChangeManagement />} />
          <Route path="/it/projectmanagement" element={<ProjectManagement />} />
          <Route path="/it/form" element={<ITForm />} />
          <Route path="/it/form/:id" element={<ReadForm />} /> 
          <Route path="/infographic" element={<Infographic />} />    
          {/* <Route path="/adminMF" element={<AdminMF />} /> */}
        </Route>
      </Routes>
      <HelpCenter />
    </div>
  );
}

export default App;
