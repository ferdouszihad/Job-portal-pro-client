import { useLoaderData } from "react-router";

const ApplicationForm = () => {
  const job = useLoaderData();
  console.log(job);
  return <div>ApplicationForm</div>;
};

export default ApplicationForm;
