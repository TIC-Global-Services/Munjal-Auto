import DownloadCard from "../../components/Finance/DownloadCard"
import policies from './key-policies.json'

const KeyPolicies = () => {


  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">Key Policies</h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          Access our comprehensive collection of corporate policies and guidelines that govern our business operations,
          ethical standards, and regulatory compliance framework.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {policies.map((policy, index) => (
          <DownloadCard
            key={index}
            title={policy.title}
            subtitle={policy.description}
            dateRange={policy.date}
            pdfUrl={policy.fileLink}
          />
        ))}
      </div>
    </div>
  )
}

export default KeyPolicies
