import React from "react";

function RequestRentcar() {
  return (
    <>
      <div>
        <div className="max-w-[960px] m-auto">
          <h1 className="text-2xl font-medium">Yêu cầu chung khi thuê xe</h1>
          <div className="grid grid-cols-2 gap-8 mt-4">
            <div className="border border-1 mt-3 shadow-lg">
              <div className="border border-1 p-3 border-b-2 shadow-md">
                <h1 className="text-center">
                  Yêu cầu chung khi thuê xe tự lái
                </h1>
              </div>
              <div className="p-4 mt-3">
                <h3 className="text-lg font-medium ">Bao gồm</h3>
                <ul className="p-4">
                  <li className="ml-4 py-2 list-disc">
                    Bảo hiểm cho xe và hành khách
                  </li>
                  <li className="ml-4 py-2 list-disc">
                    Thời gian sử dụng xe tới 24 tiếng cho mỗi ngày thuê
                  </li>
                </ul>
                <h3 className="text-lg font-medium ">Không Bao gồm</h3>
                <ul className="p-4">
                  <li className="ml-4 py-2 list-disc">
                    Chi phí nhiên liệu, đón/trả ngoài trung tâm và yêu cầu bồi
                    thường bảo hiểm{" "}
                  </li>
                </ul>
                <h3 className="text-lg font-medium ">Địa điểm đón khách</h3>
                <ul className="p-4">
                  <li className="ml-4 py-2 list-disc">
                    Miễn phí đón và trả khách tại sân bay và trong trung tâm
                    thành phố{" "}
                  </li>
                </ul>
                <h3 className="text-lg font-medium ">Các giấy tờ cần thiết</h3>
                <ul className="p-4">
                  <li className="ml-4 py-2 list-disc">
                    Chứng minh nhân dân/hộ chiếu gốc, bằng lái xe, thẻ tín dụng
                    của cá nhân hoặc thẻ tín dụng gia đình (hình chụp thẻ gia
                    đình (KK) hoặc giấy chứng nhận kết hôn phải được chia sẻ với
                    đối tác cho thuê trước khi đón để xác thực thẻ tín dụng của
                    thành viên gia đình){" "}
                  </li>
                </ul>
                <p className="italic">
                  Lưu ý: Các tài khoản mạng xã hội và hình chụp cùng CMND cũng
                  được yêu cầu. Nếu bạn không có tài khoản mạng xã hội, nhà cung
                  cấp sẽ yêu cầu một số giấy tờ khác để xác minh. Tìm hiểu thêm
                  tại mục Điều khoản và điều kiện.
                </p>
              </div>
            </div>

            <div className="border border-1 mt-3 shadow-lg h-[700px]">
              <div className="border border-1 p-3 border-b-2 shadow-md">
                <h1 className="text-center">
                  Yêu cầu chung khi thuê xe có tài xế
                </h1>
              </div>
              <div className="p-4 mt-3">
                <h3 className="text-lg font-medium ">Bao gồm</h3>
                <ul className="p-4">
                  <li className="ml-4 py-2 list-disc">Sử dụng xe trong thành phố</li>
                  <li className="ml-4 py-2 list-disc">
                    Thời gian thuê lên đến 12 tiếng hoặc đến 23:59 cho mỗi ngày
                    thuê xe{" "}
                  </li>
                </ul>
                <h3 className="text-lg font-medium ">Không Bao gồm</h3>
                <ul className="p-4">
                  <li className="ml-4 py-2 list-disc">
                    Nhiên liệu, phí đỗ xe, phí cầu đường, phụ cấp ăn của tài xế
                    và tiền tips{" "}
                  </li>
                  <li className="ml-4 py-2 list-disc">
                    Phí lưu trú của tài xe trong trường hợp di chuyển ra khỏi
                    khu vực trung tâm
                  </li>
                  <li className="ml-4 py-2 list-disc">
                    Sử dụng xe bên ngoài thành phố
                  </li>
                </ul>
                <h3 className="text-lg font-medium ">Địa điểm đón khách</h3>
                <ul className="p-4">
                  <li className="ml-4 list-disc">
                    Miễn phí đón và trả khách ở sân bay và trong trung tâm thành
                    phố
                  </li>
                </ul>
                <p>
                  Tài xế sẽ liên lạc với bạn trong khoảng từ 12 - 24 tiếng trước
                  giờ đón khách. Trường hợp thuê xe đi ngay trong ngày, tài xế
                  sẽ liên hệ với bạn nhanh chóng sau khi quá trình đặt xe của
                  bạn được xác nhận.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RequestRentcar;
