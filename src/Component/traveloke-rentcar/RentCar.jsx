import React, { useState, useEffect, useRef } from "react";
import { FaRegDotCircle } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";

function FormRentcar() {
  const [rentalOptions,setRentOptions] = useState("selfDrive")
  const handleOptions = (option) =>{
    setRentOptions(option)
  }
  const [isOpenMap, setIsopenmap] = useState(false);
  const handleOpenMap = () => {
    setIsopenmap(!isOpenMap);
  };
  const [isClicked, setIsClicked] = useState(false);
  const componentRef = useRef(null);

  const handleClick = () => {
    setIsClicked(true);
  };
  // Xử lý sự kiện click ra ngoài component
   const handleClickOutside = (event) => {
    if (componentRef.current && !componentRef.current.contains(event.target)) {
      setIsClicked(false);
    }
  };

  useEffect(() => {
    // Thêm sự kiện click cho cả trang
    document.addEventListener("click", handleClickOutside);
    return () => {
      // Gỡ bỏ sự kiện click khi component unmount
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div
        onClick={handleClick}
        className={`absolute top-0 ${isClicked ? "Clicked" : ""}`}
        ref={componentRef}
      >
        <div
          className={`max-w-[960px] m-auto bg-slate-50 absolute top-[20rem] left-[18rem] 
                   w-[920px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] 
                   rounded-md p-4`}
        >
          <div className="">
            <div className="flex gap-4">
              <p className="text-lg font-medium">Cho thuê xe </p>
              <div className="flex gap-1 items-center">
                <input
                  onClick={() =>handleOptions("selfDrive")}
                  type="radio"
                  name="rentalOption"
                  id="selfDrive"
                  checked={rentalOptions === "selfDrive"}
                />
                <label>Tự lái</label>
              </div>
              <div className="flex gap-1 items-center">
                <input
                  onClick={() =>handleOptions("withDrive")}
                  type="radio"
                  name="rentalOption"
                  id="withDriver"
                  checked={rentalOptions === "withDrive"}
                />
                <label>Có tài xế</label>
              </div>
            </div>
            <div className="mt-8">
              <h4 className="text-md font-medium mb-1 mt-1">
                Địa điểm thuê xe của bạn
              </h4>
              <div className="relative flex items-center w-96 py-1 border border-gray-200">
                <FaMapLocationDot className="ml-1" />
                <input
                  onClick={handleOpenMap}
                  className="outline-none border-l border-gray-200 w-full cursor-pointer ml-2"
                  type="search"
                  placeholder="Điền thành phố,sân bay, hoặc khách sạn"
                />
              </div>
              {isOpenMap && (
                <>
                  <div className=" absolute bg-slate-50 shadow-lg w-96 z-10 p-5">
                    <h1 className="text-md font-medium">
                      Điền thành phố,sân bay,hoặc khách sạn
                    </h1>
                    <h1 className="mt-5 text-md font-medium">
                      Địa điểm nhận hàng phổ biến
                    </h1>
                    <ul>
                      <li></li>
                    </ul>
                  </div>
                </>
              )}
            </div>
            <div className="flex gap-8 mt-2">
              <div>
                <h4 className="text-md font-medium">Ngày bắt đầu</h4>
                <input
                  className="border border-solid"
                  type="date"
                  name=""
                  id=""
                />
              </div>
              {rentalOptions === "selfDrive" && (
                <>
                  <div className="flex gap-8">
                    <div>
                      <h4 className="text-md font-medium">Giờ bắt đầu</h4>
                      <input
                        className="border border-solid py-1"
                        type="time"
                        name=""
                        id=""
                      />
                    </div>
                    <div>
                      <h4 className="text-md font-medium">Ngày kết thúc</h4>
                      <input
                        className="border border-solid py-1"
                        type="date"
                        name=""
                        id=""
                      />
                    </div>
                    <div>
                      <h4 className="text-md font-medium">Giờ kết thúc</h4>
                      <input
                        className="border border-solid py-1"
                        type="time"
                        name=""
                        id=""
                      />
                    </div>
                  </div>
                </>
              )}
              {rentalOptions === "withDrive" && (
                <>
                  <div className="flex gap-5">
                    <div>
                      <label className="text-md font-medium">
                        Thời gian thuê
                      </label>
                      <input className="w-52" type="time" />
                    </div>
                    <div>
                      <label className="text-md font-medium">Giờ đón</label>
                      <input className="w-52" type="time" />
                    </div>
                  </div>
                </>
              )}
              <button
                type="button"
                class=" w-96 focus:outline-none text-white bg-orange-500 hover:opacity-80 focus:ring-4 focus:ring-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
              >
                Tìm xe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormRentcar;
