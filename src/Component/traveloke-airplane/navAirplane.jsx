import React from "react";
import FormAirplaneComponent from "../traveloke-airplane/formAirplane";

function NavAirplaneComponent() {
  return (
    <>
      <div className=" bg-gradient-to-b from-cyan-500 to-blue-500 pt-6 pb-14 mt-28 relative">
        <div className="max-w-[960px] m-auto">
          <div className="flex py-5 gap-3">
            <div className="w-1/2">
              <h4 className="text-2xl font-semibold text-slate-50">
                Tạm biệt mọi lo lắng và mệt mỏi với dịch vụ xe đưa đón sân bay
                Traveloka
              </h4>
              <p className=" text-slate-50 text-[19px] tracking-tighter mt-5">
                Traveloka cung cấp dịch vụ đưa đón sân bay giúp khách hàng dễ
                dàng di chuyển đến và rời sân bay nhanh chóng và tiết kiệm thời
                gian. Khách hàng có thể sử dụng các lựa chọn phù hợp với nhu cầu
                cá nhân của mình. Đặt ngay xe đưa đón sân bay tại Traveloka!
              </p>
            </div>
            <div className="w-1/2">
              <img
                className="rounded-md"
                src="https://ik.imagekit.io/tvlk/image/imageResource/2021/11/10/1636531914937-40fe96ca5be35b81c72d68c59df8b0ed.jpeg?tr=h-230,q-75,w-476"
                alt=""
              />
            </div>
          </div>
          <p className="text-center text-white text-[13px]">Xem thêm khuyến mãi</p>
        </div>
        <FormAirplaneComponent />
      </div>
    </>
  );
}

export default NavAirplaneComponent;
