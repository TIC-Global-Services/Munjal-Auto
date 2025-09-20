import DownloadCard from "../../components/Finance/DownloadCard"
import unclaimedDividendData from './unclaimed-dividend.json'
import epfSharesData from './epfshares.json'

const UnclaimedDividend = () => {


  return (
    <div className="space-y-8">
      <div className="border-b border-gray-200 pb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Unclaimed Dividend</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Access unclaimed dividend information and EPF shares data. Download the relevant documents for your reference.
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-semibold text-gray-900">YEAR 2023-24</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {unclaimedDividendData.map((item, index) => (
            <DownloadCard
              key={index}
              title={item.title}
              dateRange={item.date}
              type={item.type}
              pdfUrl={item.fileLink}
            />
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-semibold text-gray-900">EPF Shares</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {epfSharesData.map((item, index) => (
            <DownloadCard
              key={index}
              title={item.title}
              dateRange={item.date}
              type={item.type}
              pdfUrl={item.fileLink}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default UnclaimedDividend
