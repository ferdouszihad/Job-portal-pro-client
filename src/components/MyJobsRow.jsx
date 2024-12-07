import { BiEdit } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router";

// eslint-disable-next-line react/prop-types
const MyJobsRow = ({ job, handleDelete, index }) => {
  const { _id, title, applicationDeadline, applicants_count } = job || {};
  return (
    <tr className="hover">
      <th>{index + 1}</th>
      <td>{title}</td>
      <td>{applicationDeadline}</td>
      <td>{applicants_count}</td>
      <td className=" flex items-center gap-4">
        {" "}
        <Link
          to={`/my-jobs/applicants/${_id}`}
          className="btn btn-outline btn-primary rounded-full"
        >
          <BsEye size={20}></BsEye>
        </Link>
        <Link
          to={`/jobs/edit/${_id}`}
          className="btn btn-outline btn-primary rounded-full"
        >
          <BiEdit size={20}></BiEdit>
        </Link>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-outline btn-primary rounded-full"
        >
          <MdDeleteForever size={20}></MdDeleteForever>
        </button>
      </td>
    </tr>
  );
};

export default MyJobsRow;
