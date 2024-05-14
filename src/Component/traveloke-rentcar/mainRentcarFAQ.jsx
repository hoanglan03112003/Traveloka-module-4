import React, { useState } from "react";

function RentcarFAQ() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);

  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
  };
  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
  };
  const toggleDropdown3 = () => {
    setIsOpen3(!isOpen3);
  };
  const toggleDropdown4 = () => {
    setIsOpen4(!isOpen4);
  };
  const toggleDropdown5 = () => {
    setIsOpen5(!isOpen5);
  };
  const toggleDropdown6 = () => {
    setIsOpen6(!isOpen6);
  };
  const toggleDropdown7 = () => {
    setIsOpen7(!isOpen7);
  };
  return (
    <div className="max-w-[1080px] m-auto mt-28">
      {/* 1 */}
      <h1  className="text-[1.75rem] text-center font-medium mb-12">Câu hỏi thường gặp (FAQ)</h1>
      <div className="border-t border-b py-3">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={toggleDropdown1}
        >
          <div
            id="dropdownDefaultButton"
            onClick={toggleDropdown1}
            className="text-lg px-5 text-center inline-flex items-center font-medium"
            type="button"
          >
            Tại sao tôi nên thuê xe ô tô trên Traveloke?
          </div>
          {/* <svg
            className="w-2.5 h-2.5 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5 5 1 9 5"
            />
          </svg> */}
          <svg
            className="w-2.5 h-2.5 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </div>
        {isOpen1 && (
          <div
            id="dropdown"
            className="z-10 w-full cursor-pointer"
            onClick={toggleDropdown1}
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefaultButton"
            >
              <li>
                <p href="#" className="block px-4 py-2">
                  Thuê xe trên Traveloka sẽ giúp bạn tránh khỏi một số rắc rối
                  cũng như tiết kiệm thời gian và tiền bạc. Bạn có thể chọn xe
                  từ các đối tác tin cậy của chúng tôi để khám phá thành phố.
                  Đặt xe phù hợp với nhu cầu trên Traveloka, bạn sẽ nhận được
                  xác nhận tức thì với mức giá tốt nhất.
                </p>
              </li>
            </ul>
          </div>
        )}
      </div>
      {/* 1 */}
      {/* 2 */}
      <div className="border-t border-b py-3">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={toggleDropdown2}
        >
          <div
            id="dropdownDefaultButton"
            onClick={toggleDropdown2}
            className="text-lg px-5 text-center inline-flex items-center font-medium"
            type="button"
          >
            Làm thế nào để đặt xe trên Traveloka?
          </div>
          {/* <svg
            className="w-2.5 h-2.5 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5 5 1 9 5"
            />
          </svg> */}
          <svg
            className="w-2.5 h-2.5 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </div>
        {isOpen2 && (
          <div
            id="dropdown"
            className="z-10 w-full cursor-pointer"
            onClick={toggleDropdown2}
          >
            <ol
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefaultButton"
            >
              <p className="px-4 mb-3">
                Bạn có thể dễ dàng đặt xe với một vài bước đơn giản:
              </p>
              <li className="list-decimal ml-14 py-1">
                Chọn thành phố/khu vực bạn muốn thuê xe, ngày, khoảng thời gian
                thuê và thời gian đón.
              </li>
              <li className="list-decimal ml-14 py-1">
                Chọn loại xe và nhà cung cấp xe ưa thích của bạn.
              </li>
              <li className="list-decimal ml-14 py-1">
                Điền thông tin liên hệ hoặc thông tin khách du lịch nếu bạn đặt
                xe cho người khác.
              </li>
              <li className="list-decimal ml-14 py-1">
                Điền thông tin thuê xe.
              </li>
              <li className="list-decimal ml-14 py-1">
                Đảm bảo rằng bạn đã điền các thông tin chính xác, sau đó chọn
                phương thức thanh toán ưa dùng.
              </li>
              <li className="list-decimal ml-14 py-1">
                Ngay khi chúng tôi xác thực thanh toán, bạn sẽ nhận được email
                có voucher điện tử từ Traveloka.
              </li>
            </ol>
          </div>
        )}
      </div>
      {/* 2 */}
      {/* 3 */}
      <div className="border-t border-b py-3">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={toggleDropdown3}
        >
          <div
            id="dropdownDefaultButton"
            onClick={toggleDropdown3}
            className="text-lg px-5 text-center inline-flex items-center font-medium"
            type="button"
          >
            Tôi có thể đặt xe và được đón trong cùng ngày không?
          </div>
          {/* <svg
            className="w-2.5 h-2.5 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5 5 1 9 5"
            />
          </svg> */}
          <svg
            className="w-2.5 h-2.5 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </div>
        {isOpen3 && (
          <div
            id="dropdown"
            className="z-10 w-full cursor-pointer"
            onClick={toggleDropdown3}
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefaultButton"
            >
              <li>
                <p href="#" className="block px-4 py-2">
                  Tất nhiên bạn có thể! Tuy nhiên bạn phải đặt ít nhất 12 tiếng
                  trước giờ đón.
                </p>
              </li>
            </ul>
          </div>
        )}
      </div>
      {/* 3 */}
      {/* 4 */}
      <div className="border-t border-b py-3">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={toggleDropdown4}
        >
          <div
            id="dropdownDefaultButton"
            onClick={toggleDropdown4}
            className="text-lg px-5 text-center inline-flex items-center font-medium"
            type="button"
          >
            Làm thế nào để tôi biết liệu tôi có cần đặt gói sử dụng xe ngoài
            thành phố?
          </div>
          {/* <svg
            className="w-2.5 h-2.5 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5 5 1 9 5"
            />
          </svg> */}
          <svg
            className="w-2.5 h-2.5 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </div>
        {isOpen4 && (
          <div
            id="dropdown"
            className="z-10 w-full cursor-pointer"
            onClick={toggleDropdown4}
          >
            <ol
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefaultButton"
            >
              <p className="px-4 mb-3">
                Dưới đây là cách bạn có thể kiểm tra xem bạn có cần đặt gói sử
                dụng xe ngoài thành phố hay không:{" "}
              </p>
              <li className="list-decimal ml-14 py-1">Xem chi tiết thuê xe.</li>
              <li className="list-decimal ml-14 py-1">
                Dưới mục Ngoài thành phố, chạm vào Xem bản đồ khu vực.{" "}
              </li>
              <li className="list-decimal ml-14 py-1">
                Kiểm tra vị trí của bạn ở trong vùng màu đỏ được chỉ định trên
                bản đồ hay được bao gồm trong danh sách các khu vực.
              </li>
            </ol>
          </div>
        )}
      </div>
      {/* 4 */}
      {/* 5 */}
      <div className="border-t border-b py-3">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={toggleDropdown5}
        >
          <div
            id="dropdownDefaultButton"
            onClick={toggleDropdown5}
            className="text-lg px-5 text-center inline-flex items-center font-medium"
            type="button"
          >
            Dịch vụ thuê xe cơ bản bao gồm những gì?
          </div>
          {/* <svg
            className="w-2.5 h-2.5 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5 5 1 9 5"
            />
          </svg> */}
          <svg
            className="w-2.5 h-2.5 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </div>
        {isOpen5 && (
          <div
            id="dropdown"
            className="z-10 w-full cursor-pointer"
            onClick={toggleDropdown5}
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefaultButton"
            >
              <li>
                <p href="#" className="block px-4 py-2">
                  Dịch vụ thuê xe cơ bản không tiện ích bổ sung bao gồm việc sử
                  dụng xe trong thành phố các tối đa 12 giờ mỗi ngày hoặc tới 23
                  giờ 59 phút và dịch vụ lái xe. Dịch vụ thuê xe cơ bản này chưa
                  bao gồm nhiên liệu, phí cầu đường, tiền boa và bữa ăn của tài
                  xế.
                </p>
              </li>
            </ul>
          </div>
        )}
      </div>
      {/* 5 */}
      {/* 6 */}
      <div className="border-t border-b py-3">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={toggleDropdown6}
        >
          <div
            id="dropdownDefaultButton"
            onClick={toggleDropdown6}
            className="text-lg px-5 text-center inline-flex items-center font-medium"
            type="button"
          >
            Tôi nên làm gì khi không thể liên lạc với tài xế?
          </div>
          {/* <svg
            className="w-2.5 h-2.5 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5 5 1 9 5"
            />
          </svg> */}
          <svg
            className="w-2.5 h-2.5 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </div>
        {isOpen6 && (
          <div
            id="dropdown"
            className="z-10 w-full cursor-pointer"
            onClick={toggleDropdown6}
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefaultButton"
            >
              <li>
                <p href="#" className="block px-4 py-2">
                  Vui lòng truy cập Đặt chỗ của tôi và liên hệ trực tiếp với nhà
                  cung cấp xe. Nếu bạn vẫn không thể liên lạc được với tài xế
                  của mình, hãy liên hệ Dịch vụ Hỗ trợ khách hàng của Traveloka
                  tại đây.
                </p>
              </li>
            </ul>
          </div>
        )}
      </div>
      {/* 6 */}
      {/* 7 */}
      <div className="border-t border-b py-3">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={toggleDropdown7}
        >
          <div
            id="dropdownDefaultButton"
            onClick={toggleDropdown7}
            className="text-lg px-5 text-center inline-flex items-center font-medium"
            type="button"
          >
            Tôi có thể đổi lịch thuê xe của mình không?
          </div>
          {/* <svg
            className="w-2.5 h-2.5 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5 5 1 9 5"
            />
          </svg> */}
          <svg
            className="w-2.5 h-2.5 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </div>
        {isOpen7 && (
          <div
            id="dropdown"
            className="z-10 w-full cursor-pointer"
            onClick={toggleDropdown7}
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefaultButton"
            >
              <li>
                <p href="#" className="block px-4 py-2">
                  Rất tiếc, bạn không thể đổi lịch thuê xe của mình. Bạn phải
                  liên hệ với bộ phận Dịch vụ khách hàng của chúng tôi để hủy
                  đặt chỗ và thực hiện đặt chỗ mới.
                </p>
              </li>
            </ul>
          </div>
        )}
      </div>
      {/* 7 */}
    </div>
  );
}

export default RentcarFAQ;
