import React, { useState } from "react";
import {
  IoAirplane,
  IoCalendar,
  IoDocumentLock,
  IoMap,
  IoSwapHorizontal,
} from "react-icons/io5";

function FormAirplaneComponent() {
  const [showComponent1, setShowComponent1] = useState(true);
  const [showComponent2, setShowComponent2] = useState(false);

  const toggleComponents = () => {
    setShowComponent1(!showComponent1);
    setShowComponent2(!showComponent2);
  };
  return (
    <>
      <div className="max-w-[960px] m-auto py-5">
        <div className="absolute w-[920px] bg-white top-[20rem] left-[18rem] shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md ">
          <div className="flex justify-between items-center py-6 w-11/12 m-auto">
            <div>
              <div className="flex gap-2 items-center">
                {showComponent1 && (
                  <>
                    <div>
                      <h1 className="text-md font-medium">Từ sân bay</h1>
                      <div className="flex items-center border border-gray-400 rounded-md">
                        <label className="px-1" htmlFor="">
                          <IoAirplane />
                        </label>
                        <input
                          className="border-l border-gray-400 w-52 py-1 px-1 outline-none cursor-pointer"
                          type="text" placeholder="ví dụ sân bay quốc tế Narita"
                        />
                      </div>
                    </div>
                    <button className="mt-5" onClick={toggleComponents}>
                      <IoSwapHorizontal />
                    </button>
                    <div>
                      <h1 className="text-md font-medium">Đến khu vực, địa chỉ, tòa nhà</h1>
                      <div className="flex items-center border border-gray-400 rounded-md">
                        <label className="px-1" htmlFor="">
                          <IoMap />
                        </label>
                        <input
                          className="border-l border-gray-400 w-52 py-1 px-1 outline-none cursor-pointer"
                          type="text" placeholder="ví dụ Trung tâm mua sắm AEON tân phú" 
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div className="flex items-center gap-2">
                {showComponent2 && (
                  <>
                    <div>
                      <h1 className="text-md font-medium">Đến khu vực, địa chỉ, tòa nhà</h1>
                      <div className="flex items-center border border-gray-400 rounded-md">
                        <label className="px-1" htmlFor="">
                          <IoMap />
                        </label>
                        <input
                          className="border-l border-gray-400 w-52 py-1 px-1 outline-none cursor-pointer"
                          type="text" 
                          placeholder="ví dụ Trung tâm AEON bình tân"
                        />
                      </div>
                    </div>
                    <button className="mt-5" onClick={toggleComponents}>
                      <IoSwapHorizontal />
                    </button>
                    <div>
                      <h1 className="text-md font-medium">Từ sân bay</h1>
                      <div className="flex items-center border border-gray-400 rounded-md">
                        <label className="px-1" htmlFor="">
                          <IoAirplane />
                        </label>
                        <input
                          className="border-l border-gray-400 w-52 py-1 px-1 outline-none cursor-pointer"
                          type="text"
                          placeholder="ví dụ Sân bay tân sơn nhất"
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div>
              <h1 className="text-md font-medium">Ngày đón</h1>
              <div className="flex items-center border border-gray-400 rounded-md">
                <label className="px-1" htmlFor="">
                  <IoCalendar />
                </label>
                <input
                  className="border-l border-gray-400 py-1 px-1 outline-none cursor-pointer"
                  id="start"
                  name="trip-start"
                  type="date"
                  value="2024-5-12"
                />
              </div>
            </div>
            <div>
              <h1 className="text-md font-medium">Giờ đón</h1>
              <div className="flex items-center border border-gray-400 rounded-md">
                <input
                  className="py-1 px-1 outline-none cursor-pointer"
                  type="time"
                  value="18:32"
                />
              </div>
            </div>
          </div>
          <div className=" flex justify-end text-center w-11/12 m-auto py-2">
            <button
              type="button"
              class="text-white w-28 bg-orange-500 hover:bg-orange-700 font-medium rounded-lg text-sm px-5 py-3 mb-2 -mt-5"
            >
              Tìm kiếm
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormAirplaneComponent;
