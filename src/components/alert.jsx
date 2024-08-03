/* eslint-disable react/prop-types */
import {
  IoIosInformationCircle,
  IoMdCheckmarkCircle,
  IoIosCloseCircle,
} from "react-icons/io";

export default function Alert({ status, type, message, background }) {
  return (
    <div className="w-full h-max flex justify-center items-center fixed top-0 left-0 z-[1000]">
      <div
        className={`flex max-w-[90%] min-h-max lg:w-max items-center p-2 lg:p-3 mt-4 text-sm   border transition-transform  rounded-lg font-semibold border-gray-200 shadow-md ${background} ${
          !status ? "-translate-y-[1000%]" : "translate-y-0"
        }    ${
          type == "success"
            ? " text-green-500 "
            : type == "info"
            ? " text-blue-400 "
            : " text-red-400"
        }`}
        role="alert"
      >
        {type == "success" ? (
          <IoMdCheckmarkCircle size={20} className="text-green-500  me-1" />
        ) : type == "info" ? (
          <IoIosInformationCircle size={20} className="text-blue-500  me-1" />
        ) : (
          <IoIosCloseCircle size={20} className="text-red-500  me-1" />
        )}
        <span className="sr-only">Info</span>
        <div>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}
