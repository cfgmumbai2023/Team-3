// import React from 'react';
// import Barchart from './barchart';
// import PieChart from './pieChart';
// const Instructor = () => {
//   return (
//     <div className="d-flex">
//       <Barchart />
//       <div className="mt-5">
//       <PieChart />
//       </div>
//     </div>
//   );
// }

// export default Instructor;

import React from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { BsArrowDownRight, BsArrowUpRight } from "react-icons/bs";
import { Column } from "@ant-design/plots";
import { Table } from "antd";
import { Link } from "react-router-dom";
const Instructor = () => {
  const data = [
    {
      type: "Course1",
      sales: 38,
    },
    {
      type: "Course2",
      sales: 52,
    },
    {
      type: "Course3",
      sales: 61,
    },
    {
      type: "Course4",
      sales: 145,
    },
    {
      type: "Course5",
      sales: 48,
    },
    {
      type: "Course6",
      sales: 38,
    },
    {
      type: "Course7",
      sales: 38,
    },
    {
      type: "Course8",
      sales: 38,
    },
  ];
  const config = {
    data,
    xField: "type",
    yField: "sales",
    label: {
      position: "middle",
      style: {
        fill: "#FFFFFF",
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: "Month",
      },
      sales: {
        alias: "Coaches",
      },
    },
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Course",
      dataIndex: "age",
    },
    {
      title: "Comment:",
      dataIndex: "address",
    },
  ];
  const data1 = [];
  for (let i = 0; i < 5; i++) {
    data1.push({
      key: i,
      name: `Sushant`,
      age: `Course ${i}`,
      address: `The course is just so beautiful! This is what i wantedd!!`,
    });
  }
  return (
    <div className="p-3 px-4">
      <div>
        <div className="d-flex justify-content-between">
          <h3 className="mb-4">Instructor: Anushka</h3>
          <button type="button" className="btn btn-primary my-3">
            <Link to="/addcourse" className="text-white">Add course</Link>
          </button>
        </div>
        <div className="d-flex justify-content-between align-items-center gap-3">
          <div className="d-flex flex-column bg-white flex-grow-1 p-4 rounded-3 gap-5">
            <div className="d-flex justify-content-between align-items-end">
              <p className="mb-0 desc">Total Courses</p>
              <HiOutlineDotsVertical className="fs-4" />
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <h4 className="mb-0">10</h4>
              <div>
                <h6 className="green">
                  {" "}
                  <BsArrowUpRight /> 34.7%
                </h6>
                <p className="mb-0 desc">Compared to April 2023</p>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column bg-white flex-grow-1 p-4 rounded-3 gap-5">
            <div className="d-flex justify-content-between align-items-end">
              <p className="mb-0 desc">Total Coaches</p>
              <HiOutlineDotsVertical className="fs-4" />
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <h4 className="mb-0">20</h4>
              <div>
                <h6 className="green">
                  {" "}
                  <BsArrowUpRight /> 17.7%
                </h6>
                <p className="mb-0 desc">Compared to April 2023</p>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column bg-white flex-grow-1 p-4 rounded-3 gap-5">
            <div className="d-flex justify-content-between align-items-end">
              <p className="mb-0 desc">Total discussions</p>
              <HiOutlineDotsVertical className="fs-4" />
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <h4 className="mb-0">19</h4>
              <div>
                <h6 className="red">
                  {" "}
                  <BsArrowDownRight /> 10.7%
                </h6>
                <p className="mb-0 desc">Compared to April 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="mb-4">Coach - Course Statistics</h3>
        <div>
          <Column {...config} />;
        </div>
      </div>
      <div className="mt-4">
        <h3 className="mb-4">Recent discussions</h3>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default Instructor;
