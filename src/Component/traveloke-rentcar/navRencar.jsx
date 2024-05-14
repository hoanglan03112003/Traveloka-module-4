import React from "react";
import FormRentcar from "./RentCar";

function NavRencar() {
  return (
    <>
      <div className=" bg-gradient-to-b from-cyan-500 to-blue-500 pt-6 pb-20 mt-28 relative">
        <div className="max-w-[960px] m-auto flex">
          <div className="w-1/2 mt-5">
            <h4 className="text-2xl font-semibold text-slate-50">
              Dịch vụ cho thuê xe tự lái và thuê xe có <br /> tài xế rẻ tại
              Traveloke
            </h4>
            <p className=" text-slate-50 mt-5">
              Tìm và đặt ngay dịch vụ cho thuê xe tự lái và thuê xe có tài xế
              giá rẻ tại Traveloke. Traveloke - Nền tảng du lịch hàng đầu Đông
              Nam Á cung cấp dịch vụ cho thuê xe giá rẻ trên khắp Việt Nam.
            </p>
          </div>
          <div className="w-1/2">
            <img
              src="https://ik.imagekit.io/tvlk/image/imageResource/2022/12/12/1670829527904-d091f83fec5b1fabd3ed75e5dd6ae8ab.jpeg?tr=h-230,q-75,w-476"
              alt=""
            />
          </div>
        </div>
        <div className="max-w-[200px] m-auto mt-2 pb-">
          <a className="">Xem thêm khuyến mãi</a>
        </div>
        <FormRentcar />
      </div>
    </>
  );
}

export default NavRencar;
