import { Outlet, Link, useLocation } from "react-router-dom"
import FinanceHero from "./FinanceHero"

const reportTabs = [
  { id: "annual-reports", label: "Annual Reports", path: "/finance/annual-reports" },
  { id: "reg-disclosure", label: "Reg. 46 Disclosure", path: "/finance/reg-disclosure" },
  { id: "quarterly-results", label: "Quarterly Results", path: "/finance/quarterly-results" },
  { id: "shareholding-pattern", label: "Shareholding Pattern", path: "/finance/shareholding-pattern" },
  { id: "notice", label: "Notice", path: "/finance/notice" },
  { id: "investors", label: "Investors", path: "/finance/investors" },
  { id: "corporate-governance", label: "Corporate Governance Report", path: "/finance/corporate-governance" },
  { id: "unclaimed-dividend", label: "Unclaimed Dividend", path: "/finance/unclaimed-dividend" },
  { id: "key-policies", label: "Key Policies", path: "/finance/key-policies" },
  { id: "dematerialisation", label: "Dematerialisation of Shares", path: "/finance/dematerialisation" },
  { id: "subsidiary", label: "Subsidiary", path: "/finance/subsidiary" },
  { id: "notification", label: "Notification", path: "/finance/notification" },
  { id: "newspaper", label: "News Paper Publication", path: "/finance/newspaper" },
  { id: "compliance", label: "Corporate & Compliance", path: "/finance/compliance" },
  { id: "downloads", label: "Downloads", path: "/finance/downloads" },
]

const FinanceLayout = () => {
  const location = useLocation()

  return (
    <div>
      <FinanceHero />

      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8 relative">
          <div className="flex flex-col lg:flex-row gap-6 sticky top-10">
            {/* Sidebar Navigation */}
            <div className="lg:w-80 flex-shrink-0 ">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                {reportTabs.map((tab) => (
                  <Link
                    key={tab.id}
                    to={tab.path}
                    className={`block w-full text-left px-4 py-3 border-b border-gray-100 hover:bg-gray-50 transition-colors text-sm font-medium ${
                      location.pathname === tab.path
                        ? "bg-red-500 text-white hover:bg-red-600"
                        : "text-gray-700 hover:text-gray-900"
                    }`}
                  >
                    {tab.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FinanceLayout
