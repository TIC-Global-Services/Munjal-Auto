import DownloadCard from "../../components/Finance/DownloadCard"
import downloadData from './downloads.json'

const Downloads = () => {

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">Downloads</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Access and download important forms, documents, and resources for shareholders and investors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {downloadData.map((item, index) => (
            <DownloadCard
              key={index}
              title={item.title}
              description={item.description}
              dateRange={item.date}
              pdfUrl="/sample-document.pdf"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Downloads
