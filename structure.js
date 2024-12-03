
export const sampleJob = {
  title: "string | ex. Software Engineer",
  location: "string | ex. Halishohor,Chittagong",
  jobType: "fixed-> Hybrid/Remote/Part-Time/Intern/Contractual",
  category: "fixed-> Engineering/Marketing/Finance/Management/Teaching",
  applicationDeadline: "Date",
  salaryRange: {
    min: "number:lower than max",
    max: "number:lower than min",
    currency: "string | ex. bdt",
  },
  description: "string. minimum 50 word ",
  company_info: "string. minimum 50 word",
  requirements: "Array<String> : minimum 3 , maximum 10",
  responsibilities: "Array<String> : minimum 3 , maximum 10",
  status: "default:active",
  deadline: "Date",
  hr_email: "string", // Foreign-Key-> create relation with user
  hr_name: "string",
  hr_image: "photoURL",
};
