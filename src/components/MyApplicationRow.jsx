import { MdDeleteForever } from "react-icons/md";

// eslint-disable-next-line react/prop-types
const MyApplicationRow = ({ applyData, index, handleDelete }) => {
  const {
    _id,

    title,

    hr_name,

    location,
    jobType,

    salaryRange,
    status,
    submitted_at,
  } = applyData || {};

  return (
    <tr className="hover">
      <th>{index + 1}</th>
      <td>
        <div>
          <h1 className="font-bold text-lg">{title}</h1>
          <span className="text-sm badge badge-ghost">posted by {hr_name}</span>
        </div>
      </td>
      <td>
        {salaryRange.min} - {salaryRange.max}{" "}
        {salaryRange?.currency?.toUpperCase()}
      </td>
      <td>
        <div className="flex flex-col gap-2">
          <p className="">{location}</p>
          <span className="badge badge-primary">{jobType}</span>
        </div>
      </td>
      <td>
        <div>
          <p className="font-semibold text-lg">{status}</p>
          <span className="badge">
            📅 {new Date(submitted_at).toDateString()}
          </span>
        </div>
      </td>
      <td>
        <MdDeleteForever
          cursor={"pointer"}
          onClick={() => handleDelete(_id)}
          size={30}
          className="text-error"
        ></MdDeleteForever>
      </td>
    </tr>
  );
};

export default MyApplicationRow;
