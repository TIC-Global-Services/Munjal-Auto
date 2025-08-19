import DownloadCard from "../../components/Finance/DownloadCard"

const Downloads = () => {
  const downloadData = [
    { title: "Download Ann-1", description: "Annual filing document", date: "2024" },
    { title: "Download Ann-2", description: "Annual filing document", date: "2024" },
    { title: "Download Ann-3", description: "Annual filing document", date: "2024" },
    { title: "Download Ann-4", description: "Annual filing document", date: "2024" },
    { title: "Download Ann-5", description: "Annual filing document", date: "2024" },
    { title: "Download Ann-6", description: "Annual filing document", date: "2024" },
    { title: "Download Ann-7", description: "Annual filing document", date: "2024" },
    { title: "Download Ann-8", description: "Annual filing document", date: "2024" },
    { title: "Download Ann-9", description: "Annual filing document", date: "2024" },
    { title: "Download Ann-10", description: "Annual filing document", date: "2024" },
    { title: "Download Ann-11", description: "Annual filing document", date: "2024" },
    { title: "Download Ann-12", description: "Annual filing document", date: "2024" },
    { title: "Download Ann-13", description: "Annual filing document", date: "2024" },
    { title: "Download Ann-14", description: "Annual filing document", date: "2024" },
    { title: "Download App-A", description: "Application form", date: "2024" },
    {
      title: "Download SH-1",
      description:
        "Request for Registering PAN, KYC details OR Changes/updations there of (only for securities held in physical)",
      date: "2024",
    },
    {
      title: "Download SH-2",
      description: "Confirmation of Signature of securities holder by Banker",
      date: "2024",
    },
    {
      title: "Download SH-3",
      description: "Declaration for Opting-out of Nomination by holders of physical securities in Listed Companies",
      date: "2024",
    },
    { title: "Download SH-13", description: "Nomination Form", date: "2024" },
    { title: "Download SH-14", description: "Cancellation OR Variation of Nomination", date: "2024" },
    {
      title: "Download SEBI Circular",
      description:
        "Common and simplified norms for pro-cessing investors service requests by RTAs and norms for furnishing PAN, KYC details and Nomination",
      date: "2024",
    },
  ]

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
