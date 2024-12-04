import { useLoaderData } from "react-router";
import JobCard from "../../components/shared/JobCard";

const Jobs = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <h2 className="text-2xl font-bold text-center">Available Jobs</h2>

      <div className="w-11/12 mx-auto grid md:grid-cols-2 gap-5">
        {Array.isArray(data) &&
          data?.map((job) => <JobCard key={job._id} job={job}></JobCard>)}
      </div>
    </div>  
  );
};

export default Jobs;
