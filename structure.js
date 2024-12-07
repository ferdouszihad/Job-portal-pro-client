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

  hr_email: "string", // Foreign-Key-> create relation with user
  hr_name: "string",
  hr_image: "photoURL",
  applicants_count: 0,
};

export const sampleApplication = {
  //from  user
  candidate_name: "string",
  candidate_email: "string",
  candidate_photoURL: "string",
  //from job data
  job_id: "string",
  job_title: "string",
  job_type: "string",
  job_category: "string",
  location: "string",
  application_deadline: "string",
  hr_email: "string", // Foreign-Key-> create relation with user
  hr_name: "string",
  hr_image: "photoURL",
  // from form
  Career_Summary: "text-area",
  skills: "text-skills",
  experience: "dropdown->fresher,1 year +, 2 year+ , 5 year+",
  why_should_hire: "text-area",
  minimum_salary: "number",
  maximum_salary: "number",
  portfolio_Link: "url",
  linkedin_Link: "url",
  resume_link: "url",

  //onSubmission
  status: "pending-review",
  submitted_at: "CurrentDate in ISO string",
};
