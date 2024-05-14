import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoBagSharp } from "react-icons/io5";
import { CiCircleChevDown } from "react-icons/ci";

function RentcarPopular() {
  const [Openmore, setOpenmore] = useState(false);
  const toggleOpenmore = () => {
    setOpenmore(!Openmore);
  };
  return (
    <>
      <div>
        <div className="max-w-[960px] m-auto">
          <h1 className="text-center text-2xl font-medium mt-20 mb-5">
            Các loại xe của Golden Bird
          </h1>
          <div className="grid grid-cols-5 gap-2">
            <div className="border border-1 p-2 shadow-[0_3px_2px_rgb(0,0,0,0.2)]">
              <img
                className="w-9/12 m-auto"
                src="https://ik.imagekit.io/tvlk/image/imageResource/2020/01/31/1580443817536-37f0d3a40231aee1f3465d1ec359e9eb.jpeg?tr=q-75,w-290"
                alt=""
              />
              <h4 className="text-center py-2 mt-3">Toyota Alvis</h4>
              <p className="text-center text-sm text-gray-400 py-1">Standard</p>
              <div className="flex gap-5 justify-center py-2">
                <i className="flex items-center text-gray-400">
                  <FaUser />5
                </i>
                <i className="flex items-center text-gray-400">
                  <IoBagSharp />2
                </i>
              </div>
            </div>
            <div className="border border-1 p-2 shadow-[0_3px_2px_rgb(0,0,0,0.2)]">
              <img
                className="w-7/12 m-auto"
                src="https://ik.imagekit.io/tvlk/image/imageResource/2020/01/28/1580208096748-2c0c6a8a359883a14cc5fa1f8f16cef6.png?tr=q-75,w-290"
                alt=""
              />
              <h4 className="text-center py-2 mt-3">Toyota Alvis</h4>
              <p className="text-center text-sm text-gray-400 py-1">Standard</p>
              <div className="flex gap-5 justify-center py-2">
                <i className="flex items-center text-gray-400">
                  <FaUser />5
                </i>
                <i className="flex items-center text-gray-400">
                  <IoBagSharp />2
                </i>
              </div>
            </div>
            <div className="border border-1 p-2 shadow-[0_3px_2px_rgb(0,0,0,0.2)]">
              <img
                className="w-9/12 m-auto"
                src="https://ik.imagekit.io/tvlk/image/imageResource/2018/05/04/1525414483573-1eab21bd188ab0d3733c6cdfacff5332.jpeg?tr=q-75,w-290"
                alt=""
              />
              <h4 className="text-center py-2 mt-3">Toyota Alvis</h4>
              <p className="text-center text-sm text-gray-400 py-1">Standard</p>
              <div className="flex gap-5 justify-center py-2">
                <i className="flex items-center text-gray-400">
                  <FaUser />5
                </i>
                <i className="flex items-center text-gray-400">
                  <IoBagSharp />2
                </i>
              </div>
            </div>
            <div className="border border-1 p-2 shadow-[0_3px_2px_rgb(0,0,0,0.2)]">
              <img
                className="w-9/12 m-auto"
                src="https://ik.imagekit.io/tvlk/image/imageResource/2020/01/31/1580443737840-02f2b0a0790dbdc10c17d9643c6cde9c.jpeg?tr=q-75,w-290"
                alt=""
              />
              <h4 className="text-center py-2 mt-3">Toyota Alvis</h4>
              <p className="text-center text-sm text-gray-400 py-1">Standard</p>
              <div className="flex gap-5 justify-center py-2">
                <i className="flex items-center text-gray-400">
                  <FaUser />5
                </i>
                <i className="flex items-center text-gray-400">
                  <IoBagSharp />2
                </i>
              </div>
            </div>
            <div className="border border-1 p-2 shadow-[0_3px_2px_rgb(0,0,0,0.2)]">
              <img
                className="w-9/12 m-auto"
                src="https://ik.imagekit.io/tvlk/image/imageResource/2020/03/17/1584416640167-7e0defccca24a0662a1d1af2679ac3ee.jpeg?tr=q-75,w-290"
                alt=""
              />
              <h4 className="text-center py-2 mt-3">Toyota Alvis</h4>
              <p className="text-center text-sm text-gray-400 py-1">Standard</p>
              <div className="flex gap-5 justify-center py-2">
                <i className="flex items-center text-gray-400">
                  <FaUser />5
                </i>
                <i className="flex items-center text-gray-400">
                  <IoBagSharp />2
                </i>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[960px] m-auto">
          <div className="flex justify-center p-8 gap-12">
            <div>
              <img
                className="w-[380px]"
                src="https://ik.imagekit.io/tvlk/image/imageResource/2022/04/18/1650275568695-a0376c8fdd35afc8b125026c5ddbdd00.jpeg?tr=q-75"
                alt=""
              />
            </div>
            <div className="mt-5">
              <h1 className="text-2xl font-medium mb-5">
                Monthly Car Rental in Traveloka
              </h1>
              <p>
                Find complete information regarding monthly car rental in
                Traveloka. Find the best provider to fulfill your monthly car
                rent needs.
              </p>
              <button
                type="button"
                class="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                <a href="https://www.traveloka.com/en-id/sewa-mobil-bulanan-jakarta">
                  {" "}
                  See More
                </a>
              </button>{" "}
            </div>
          </div>
        </div>
        <div className="max-w-[960px] m-auto">
          <h1 className="text-center font-medium text-2xl mb-5 mt-5">
            Một số lưu ý về an toàn và tiện ích khi thuê xe cho kỳ nghỉ
          </h1>
          <p className="text-lg leading-relaxed">
            Thuê xe ô tô gần đây đã trở thành một lựa chọn thoải mái và an toàn
            cho các chuyến đi chơi. Loại hình di chuyển này cho phép bạn khám
            phá nhiều địa điểm du lịch cũng như chủ động hơn trong việc sắp xếp
            lịch trình tham quan. Ngoài ra, chi phí thuê xe cũng được cân nhắc
            là rẻ hơn các phương tiện khác khi du lịch cùng gia đình hay bạn bè.
            Dưới đây là một số điều bạn cần chú ý khi chọn xe thuê và tiến hành
            thanh toán để có một trải nghiệm an toàn và thoải mái khi đi du
            lịch.
          </p>
          <h1 className="font-medium text-xl mt-5 mb-5">
            Xác định nhu cầu của bạn
          </h1>
          <p className="text-lg leading-relaxed">
            Xác định nhu cầu du lịch sẽ giúp bạn dễ dàng hơn trong việc lựa chọn
            loại xe phù hợp. Ví dụ: nếu bạn đang đi cùng gia đình hoặc nhóm bạn
            bè, hãy chọn chiếc xe mới nhất có kích thước lớn như MPV. Nếu bạn
            đang đi du lịch ở khu vực thành thị, bạn có thể chọn một chiếc xe có
            phân khối 1.000 cc như Avanza và Xenia. Tuy nhiên, nếu đường đi
            nhiều dốc như địa hình núi, thì bạn có thể thuê một chiếc xe phân
            khối 1.500 cc như Grand Innova. Việc lựa chọn một chiếc xe phù hợp
            với nhu cầu của bạn chắc chắn sẽ giúp chuyến đi của bạn trở nên
            thoải mái và an toàn hơn.
          </p>
          <div className="flex justify-end mt-4">
            <button
              href="#"
              onClick={toggleOpenmore}
              className="flex items-center gap-1 text-blue-500"
            >
              Read more
              <CiCircleChevDown />
            </button>
          </div>
          <div className=" border-t border w-10/12"></div>
          {Openmore && (
            <>
              <div>
                <div className="grid grid-cols-2 mt-14">
                  <div className="">
                    <img
                      className="w-[450px]"
                      src="https://ik.imagekit.io/tvlk/image/imageResource/2020/03/17/1584430125393-57e3cadd38e063f7a29a08c9f62fa1c8.jpeg?tr=q-75"
                      alt=""
                    />
                  </div>
                  <div className="mt-5">
                    <h1 className="font-medium text-xl mb-3">
                      Hỏi về tình trạng xe và các vật dụng được cung cấp
                    </h1>
                    <p className="text-md leading-relaxed">
                      Trước khi thuê xe bạn nên hỏi trước về tình trạng xe đã
                      chọn như thời gian xe được đưa vào phục vụ và bảo dưỡng.
                      Điều này sẽ giảm thiểu những điều không mong muốn có thể
                      xảy ra sau khi bạn thuê xe. Bên cạnh đó, hãy chắc chắn
                      rằng bạn lựa chọn chiếc xe phù hợp với nhu cầu sử dụng của
                      bản thân. Nếu đây là lần đầu tiên bạn lái xe ở thành phố,
                      bạn sẽ cần một tài xế chuyên nghiệp - người hiểu rõ về các
                      khu vực xung quanh và như vậy, họ đưa bạn đến các địa điểm
                      tham quan an toàn và nhanh chóng hơn. Đừng ngần ngại hỏi
                      về các dịch vụ đón/trả khách ngoài khu vực thành phố và
                      bảo hiểm du lịch. Bạn cũng được khuyến khích hỏi thông tin
                      liên lạc của công ty cung cấp xe để phòng trường hợp bất
                      ngờ xảy ra khi sử dụng xe.
                    </p>
                  </div>
                </div>
                <div>
                  <div>
                    <h1 className="text-xl font-semibold py-4">
                      So sánh và chú ý đến giá thuê xe
                    </h1>
                    <p>
                      Khi có ý định thuê xe ở một công ty chuyên cho thuê, bạn
                      cần biết chi phí cụ thể. Sau khi biết được mặt bằng chung
                      mức giá cho thuê ở các địa điểm định đến, bạn có thể so
                      sánh giá từ những nhà cung cấp dịch vụ cho thuê xe phổ
                      biến. Có thể bạn sẽ tìm thấy các mức giá khác nhau cho
                      cùng loại xe, tuy nhiên hãy chú ý đến các khoản phụ phí
                      tính cho những phát sinh ngoài gói cho thuê ví dụ như chi
                      phí nhiên liệu, phụ cấp ăn uống của tài xế và dịch vụ đón
                      khách ở ngoại ô.
                    </p>
                  </div>
                  <div>
                    <h1 className="text-xl font-semibold py-4">
                      Chọn dịch vụ cho thuê xe đáng tin cậy
                    </h1>
                    <p>
                      Traveloka đã chính thức hợp tác với nhiều dịch vụ cho thuê
                      xe uy tín và kinh nghiệm tại các thành phố lớn ở Việt Nam
                      như Hà Nội, Tp.Hồ Chí Minh, Huế, Đà Nẵng, Hội An, Phú
                      Quốc, Đà Lạt, Nha Trang. Thêm vào đó, ứng dụng du lịch
                      trực tuyến này cũng cung cấp cho người dùng tính năng đánh
                      giá để có thể cân nhắc khi chọn thuê xe. Tính năng này cho
                      phép so sánh dịch vụ của các nhà cung cấp từ điều kiện,
                      chính sách, tính năng, kỹ năng của tài xế.
                    </p>
                  </div>
                  <div>
                    <h1 className="text-xl font-semibold py-4">
                      Đặt xe sớm trước ngày khởi hành
                    </h1>
                    <p>
                      Để an toàn và thoải mái hơn khi đi du lịch, chúng tôi
                      khuyến khích bạn nên đặt xe sớm từ trước, đặc biệt nếu bạn
                      định thuê xe trong các dịp lễ, mùa cao điểm. Điều này giúp
                      bạn tránh khỏi tình trạng không đặt được xe và có thể thuê
                      xe với giá bình thường. Đừng quên xác nhận lại xe đã đặt
                      trước khi nhận xe 1 ngày để đảm bảo rằng xe của bạn sẵn
                      sàng theo đơn đặt hàng. Để dễ dàng hơn, bạn có thể tìm
                      kiếm dịch vụ cho thuê xe trực tuyến như Traveloka. Chỉ cần
                      sử dụng ứng dụng Traveloka, người dùng có thể chọn dịch vụ
                      thuê xe dễ dàng mọi lúc mọi nơi. Trên đây là một số lời
                      khuyên của chúng tôi nếu bạn dự định thuê xe ô tô cho
                      chuyến du lịch sắp tới. Để thuận tiện, bạn hãy sử dụng
                      Traveloka. Tại đây, việc thuê xe luôn được đảm bảo an toàn
                      và được hỗ trợ bởi các tài xế uy tín. Không những dễ dàng
                      so sánh giá cả và sản phẩm giữa các nhà cung cấp uy tín
                      nhanh chóng trên một nền tảng, người dùng có thể tự do lựa
                      chọn thời gian thuê là hàng ngày cho đến hàng tuần.
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default RentcarPopular;
