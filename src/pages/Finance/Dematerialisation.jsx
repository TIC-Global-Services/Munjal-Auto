import DownloadCard from "../../components/Finance/DownloadCard"

const Dematerialisation = () => {

  const dematerialisationShares = [
    {
      title: "Code of Conduct",
      description: "Ethical guidelines and behavioral standards for all employees",
      date: "Updated 2024",
    },
  ]
  return (
    <div>
      <div className=" py-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Dematerialisation of Shares</h1>
        <p className="text-gray-600">Share dematerialisation information will be displayed here.</p>
      </div>

      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dematerialisationShares.map((policy, index) => (
            <DownloadCard
              key={index}
              title={policy.title}
              subtitle={policy.description}
              dateRange={policy.date}
              pdfUrl="/sample-policy.pdf"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dematerialisation
