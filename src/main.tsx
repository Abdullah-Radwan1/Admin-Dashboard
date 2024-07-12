import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import App from "./App"
import "./index.css"
import Dashboard from "./pages/Dashboard/Dashboard"
import Team from "./pages/Team/Team"
import Contacts from "./pages/contacts/Contacts"
import Invoices from "./pages/invoices/Invoices"
import Form from "./pages/form/Form"
import Calendar from "./pages/calendar/Calendar"
import FAQ from "./pages/faq/FAQ"
import PieChart from "./pages/pieChart/PieChart"
import LineChart from "./pages/lineChart/LineChart"
import Geography from "./pages/geography/Geography"
import Bar from "./pages/barChart/bar"

const router = createBrowserRouter(
 createRoutesFromElements(
  <Route path="/" element={<App />}>
   <Route index path="/" element={<Dashboard />} />
   <Route index path="/team" element={<Team />} />
   <Route path="/contact" element={<Contacts />} />
   <Route path="/invoices" element={<Invoices />} />
   <Route path="/form" element={<Form />} />
   <Route path="/calendar" element={<Calendar />} />
   <Route path="/faq" element={<FAQ />} />
   <Route path="/bar" element={<Bar />} />
   <Route path="/pie" element={<PieChart />} />
   <Route path="/line" element={<LineChart />} />
   <Route path="/geography" element={<Geography />} />
  </Route>,
 ),
)

ReactDOM.createRoot(document.getElementById("root")).render(
 <React.StrictMode>
  <RouterProvider router={router} />
 </React.StrictMode>,
)
