import DownloadCard from "../../components/Finance/DownloadCard"

const KeyPolicies = () => {
  const policies = [
    {
      title: "Code of Conduct",
      description: "Ethical guidelines and behavioral standards for all employees",
      date: "Updated 2024",
    },
    {
      title: "Whistle Blower Policy",
      description: "Framework for reporting unethical practices and misconduct",
      date: "Revised 2024",
    },
    {
      title: "Related Party Transaction Policy",
      description: "Guidelines for transactions with related parties and disclosure requirements",
      date: "Effective 2024",
    },
    {
      title: "Risk Management Policy",
      description: "Comprehensive framework for identifying and managing business risks",
      date: "Updated 2024",
    },
    {
      title: "Dividend Distribution Policy",
      description: "Policy governing dividend payments and distribution to shareholders",
      date: "Approved 2024",
    },
    {
      title: "Corporate Social Responsibility Policy",
      description: "Guidelines for CSR activities and community development initiatives",
      date: "Revised 2024",
    },
    {
      title: "Nomination and Remuneration Policy",
      description: "Framework for board appointments and executive compensation",
      date: "Updated 2024",
    },
    {
      title: "Board Diversity Policy",
      description: "Guidelines for maintaining diversity in board composition",
      date: "Effective 2024",
    },
    {
      title: "Insider Trading Policy",
      description: "Regulations for trading in company securities by insiders",
      date: "Revised 2024",
    },
    {
      title: "Document Retention Policy",
      description: "Guidelines for document preservation and record management",
      date: "Updated 2024",
    },
    {
      title: "Information Technology Policy",
      description: "Framework for IT governance and cybersecurity measures",
      date: "Approved 2024",
    },
    {
      title: "Environmental Policy",
      description: "Commitment to environmental protection and sustainable practices",
      date: "Effective 2024",
    },
    {
      title: "Quality Policy",
      description: "Standards and procedures for maintaining product quality",
      date: "Revised 2024",
    },
    {
      title: "Health and Safety Policy",
      description: "Guidelines for workplace safety and employee health protection",
      date: "Updated 2024",
    },
    {
      title: "Anti-Corruption Policy",
      description: "Framework for preventing bribery and corrupt practices",
      date: "Approved 2024",
    },
  ]

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
            pdfUrl="/sample-policy.pdf"
          />
        ))}
      </div>
    </div>
  )
}

export default KeyPolicies
