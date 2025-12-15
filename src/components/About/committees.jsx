const committees = () => {
  const BoardOfDirectorsList = [
    {
      name: "Mr. Sunil Chinubhai Vakil",
      role: "Chairman",
      designation: "Non-Executive Independent Director",
    },
    {
      name: "Mr. Atul Haribhai Patel",
      role: "Member",
      designation: "Non-Executive Independent Director",
    },
    {
      name: "Mrs. Avi Sabawala",
      role: "Member",
      designation: "Non-Executive Independent Director",
    },
    {
      name: "Mr. Sudhir Kumar Munjal",
      role: "Member",
      designation: "Executive Director",
    },
  ];

    const NominationAndRemunerationCommitteeList=[
      {
        "name": "Mr. Atul Haribhai Patel",
        "role": "Chairman",
        "designation": "Non-Executive Independent Director"
      },
      {
        "name": "Mr. Sunil Chinubhai Vakil",
        "role": "Member",
        "designation": "Non-Executive Independent Director"
      },
      {
        "name": "Mr. Sudhir Kumar Munjal",
        "role": "Member",
        "designation": "Executive Director"
      }
    ]
    const StakeholdersRelationshipCommitteeList=[
      {
        "name": "Mrs. Avi Sabawala",
        "role": "Chairman",
        "designation": "Non-Executive Independent Director"
      },
      {
        "name": "Mr. Sameer Subhash Khera",
        "role": "Member",
        "designation": "Non-Executive Independent Director"
      },
      {
        "name": "Mr. Anuj Munjal",
        "role": "Member",
        "designation": "Executive Director"
      }
    ]
    const RiskManagementCommitteeList=[
      {
        "name": "Mr. Sudhir Kumar Munjal",
        "role": "Chairman",
        "designation": "Executive Director"
      },
      {
        "name": "Mr. Sameer Subhash Khera",
        "role": "Member",
        "designation": "Non-Executive Independent Director"
      },
      {
        "name": "Mrs. Anju Munjal",
        "role": "Member",
        "designation": "Executive Director"
      }
    ]
    const CorporateSocialResponsibilityCommitteeList=[
      {
        "name": "Mr. Sameer Subhash Khera",
        "role": "Chairman",
        "designation": "Non-Executive Independent Director"
      },
      {
        "name": "Mr. Sudhir Kumar Munjal",
        "role": "Member",
        "designation": "Executive Director"
      },
      {
        "name": "Mrs. Anju Munjal",
        "role": "Member",
        "designation": "Executive Director"
      }
    ]
    const ShareTransferCommitteeList=[
      {
        "name": "Mrs. Avi Sabawala",
        "role": "Chairman",
        "designation": "Non-Executive Independent Director"
      },
      {
        "name": "Mr. Sudhir Kumar Munjal",
        "role": "Member",
        "designation": "Executive Director"
      }
    ]
  return (
    <div className="mt-10 px-10 lg:px-20 lg:p-10 overflow-x-hidden w-full">
     <div>
       <div>
        <h1 className="text-[46px]">
          Composition of <span className="text-[#ED1C24]">Committees</span>
        </h1>

        <h1 className="mt-10">Audit Committee (AC)</h1>
      </div>
      <div className="flex gap-5 flex-wrap justify-center mt-10">
        {BoardOfDirectorsList.map((res, index) => (
          <div key={index} className="p-10 bg-[#F5F5F5] rounded-[12px] text-center w-full max-w-[385px]">
            <h1 className="text-[#ED1C24] font-bold text-[20px]">{res.name}</h1>
            <p className="text-[20px]">({res.role})</p>
            <p className="text-[16px]">{res.designation}</p>
          </div>
        ))}
      </div>
     </div>
     <div>
       <div>
        <h1 className="text-[24px] mt-10">Nomination & Remuneration Committee (NRC)</h1>
      </div>
       <div className="flex gap-5 flex-wrap lg:flex-nowrap justify-center mt-10">
        {NominationAndRemunerationCommitteeList.map((res, index) => (
          <div key={index} className="p-10 bg-[#F5F5F5] rounded-[12px] flex flex-col justify-center text-center w-full lg:min-h-[200px]">
            <h1 className="text-[#ED1C24] font-bold text-[20px]">{res.name}</h1>
            <p className="text-[20px]">({res.role})</p>
            <p className="text-[16px]">{res.designation}</p>
          </div>
        ))}
      </div>
     </div>
     <div>
      <div>
         <div>
        <h1 className="text-[24px] mt-10">Stakeholder’s Relationship Committee (SRC)</h1>
      </div>
      <div className="flex gap-5 flex-wrap lg:flex-nowrap justify-center mt-10">
        {StakeholdersRelationshipCommitteeList.map((res, index) => (
          <div key={index} className="p-10 bg-[#F5F5F5] rounded-[12px] text-center flex flex-col justify-center text-center w-full lg:min-h-[200px]">
            <h1 className="text-[#ED1C24] font-bold text-[20px]">{res.name}</h1>
            <p className="text-[20px]">({res.role})</p>
            <p className="text-[16px]">{res.designation}</p>
          </div>
        ))}
      </div>
      </div>
     </div>
     <div>
       <div>
        <h1 className="text-[24px] mt-10">Risk Management Committee </h1>
      </div>
      <div className="flex gap-5 flex-wrap lg:flex-nowrap justify-center mt-10">
        {RiskManagementCommitteeList.map((res, index) => (
          <div key={index} className="p-10 bg-[#F5F5F5] rounded-[12px] flex flex-col justify-center text-center w-full lg:min-h-[200px]">
            <h1 className="text-[#ED1C24] font-bold text-[20px]">{res.name}</h1>
            <p className="text-[20px]">({res.role})</p>
            <p className="text-[16px]">{res.designation}</p>
          </div>
        ))}
      </div>
     </div>
      <div>
        <div>
        <h1 className="text-[24px] mt-10">Corporate Social Responsibility Committee</h1>
      </div>
      <div className="flex gap-5 flex-wrap lg:flex-nowrap justify-center mt-10">
        {CorporateSocialResponsibilityCommitteeList.map((res, index) => (
          <div key={index} className="p-10 bg-[#F5F5F5] rounded-[12px] flex flex-col justify-center text-center w-full lg:min-h-[200px]">
            <h1 className="text-[#ED1C24] font-bold text-[20px]">{res.name}</h1>
            <p className="text-[20px]">({res.role})</p>
            <p className="text-[16px]">{res.designation}</p>
          </div>
        ))}
      </div>
      </div>
         <div>
        <div>
        <h1 className="text-[24px] mt-10">Share Transfer Committee</h1>
      </div>
      <div className="flex gap-5 flex-wrap lg:flex-nowrap items-start justify-start mt-10">
        {ShareTransferCommitteeList.map((res, index) => (
          <div key={index} className="p-10 bg-[#F5F5F5] rounded-[12px] flex flex-col justify-center text-center  lg:min-w-[385px] lg:min-h-[200px]">
            <h1 className="text-[#ED1C24] font-bold text-[20px]">{res.name}</h1>
            <p className="text-[20px]">({res.role})</p>
            <p className="text-[16px]">{res.designation}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
   
  );
};

export default committees;
