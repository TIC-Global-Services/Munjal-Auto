import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"

import Home from "./pages/Home"
import About from "./pages/About"
import Products from "./pages/Products"
import Electronics from "./pages/Electronics"
import Philosophy from "./pages/Philosophy"
import Quality from "./pages/Quality"
import Training from "./pages/Training"
import Facilities from "./pages/Facilities"
import Contact from "./pages/Contact"
import Layout from "./layout"
import FinanceLayout from "./components/Finance/FinanceLayout"
import AnnualReports from "./pages/Finance/AnnualReports"
import RegDisclosure from "./pages/Finance/RegDisclosure"
import QuarterlyResults from "./pages/Finance/QuarterlyResults"
import ShareholdingPattern from "./pages/Finance/ShareholdingPattern"
import Notice from "./pages/Finance/Notice"
import Investors from "./pages/Finance/Investors"
import CorporateGovernance from "./pages/Finance/CorporateGovernance"
import UnclaimedDividend from "./pages/Finance/UnclaimedDividend"
import KeyPolicies from "./pages/Finance/KeyPolicies"
import Dematerialisation from "./pages/Finance/Dematerialisation"
import Subsidiary from "./pages/Finance/Subsidiary"
import Notification from "./pages/Finance/Notification"
import NewsPaper from "./pages/Finance/NewsPaper"
import Compliance from "./pages/Finance/Compliance"
import Downloads from "./pages/Finance/Downloads"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about-us", element: <About /> },
      { path: "products", element: <Products /> },
      { path: "electronics", element: <Electronics /> },
      { path: "philosophy", element: <Philosophy /> },
      { path: "quality", element: <Quality /> },
      {
        path: "finance",
        element: <FinanceLayout />,
        children: [
          { index: true, element: <Navigate to="annual-reports" replace /> },
          { path: "annual-reports", element: <AnnualReports /> },
          { path: "reg-disclosure", element: <RegDisclosure /> },
          { path: "quarterly-results", element: <QuarterlyResults /> },
          { path: "shareholding-pattern", element: <ShareholdingPattern /> },
          { path: "notice", element: <Notice /> },
          { path: "investors", element: <Investors /> },
          { path: "corporate-governance", element: <CorporateGovernance /> },
          { path: "unclaimed-dividend", element: <UnclaimedDividend /> },
          { path: "key-policies", element: <KeyPolicies /> },
          { path: "dematerialisation", element: <Dematerialisation /> },
          { path: "subsidiary", element: <Subsidiary /> },
          { path: "notification", element: <Notification /> },
          { path: "newspaper", element: <NewsPaper /> },
          { path: "compliance", element: <Compliance /> },
          { path: "downloads", element: <Downloads /> },
        ],
      },
      { path: "training", element: <Training /> },
      { path: "facilities", element: <Facilities /> },
      { path: "contact", element: <Contact /> },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
