import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

function MainAirplaneComponent2() {
  const [showContent1, setShowContent1] = useState(true);
  const [showContent2, setShowContent2] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const [sliderPosition, setSliderPosition] = useState(360);

  const handleClick = (buttonId) => {
    if (buttonId === "button1" && buttonId !== activeButton) {
      setShowContent1(true);
      setShowContent2(false);
      setSliderPosition(360);
      setActiveButton(buttonId);
      
    } else if (buttonId === "button2" && buttonId !== activeButton) {
      setShowContent1(false);
      setShowContent2(true);
      setSliderPosition(510);
      setActiveButton(buttonId);
    }
  };

  return (
    <>
      <div className="max-w-[960px] m-auto mt-28">
        <h1 className="text-center text-xl font-normal">
          Trải nghiệm chuyến đi suôn sẻ từ và đến sân bay!
        </h1>
        <div className="mt-12">
          <div className="flex justify-center gap-12 ul">
            <li onClick={() => handleClick("button1")}>
              <button
                className={`btn ${
                  activeButton === "button1" ? " text-blue-500" : "text-[#80C9F9]"
                }`}
              >
                <p className="font-medium">Từ sân bay</p>
              </button>
            </li>
            <li onClick={() => handleClick("button2")}>
              <button
                className={`btn ${
                  activeButton === "button2" ? "text-blue-500" : "text-[#80C9F9]"
                }`}
              >
                <p className="font-medium">Đến sân bay</p>
              </button>
            </li>
            <span
              style={{
                left: `${sliderPosition}px`,
              }}
            ></span>
          </div>
          <div className=" relative border border-b mt-12">
            <div className=" absolute border border-blue-600 w-1/12"></div>
          </div>
        </div>
        {showContent1 && (
          <div>
            <div className="mt-12 animated">
              <h1 className="text-xl font-normal">Di chuyển từ sân bay</h1>
              <p className="mt-3">
                Tìm xe ở sân bay có thể không dễ dàng, nhất là khi bạn đang ở
                một nơi xa lạ. Có phải chăng ngay khi vừa bước ra khỏi cửa đến
                sân bay, bạn thấy mình ngay lập tức bị bao quanh bởi đội quân
                taxi dù đông đảo, trong khi hàng người đợi taxi sân bay chính
                hãng thì dài không điểm dừng?
              </p>
              <p className="mt-3">
                Với Traveloka, giờ đây bạn có thể đặt trước xe đưa đón sân bay.
                Từ xe riêng đến phương tiện công cộng, bạn sẽ dễ dàng chọn được
                chuyến đi phù hợp với nhu cầu và thoải mái nhất sau chuyến bay.
              </p>
            </div>
            <h1 className="text-center text-xl font-normal mt-36">
              Cách đặt chỗ
            </h1>
            <div className="h-screen">
              <div className="flex gap-24 mt-16">
                <div className="w-1/2">
                  <img
                    className="w-7/12 m-auto"
                    src="https://ik.imagekit.io/tvlk/image/imageResource/2020/10/14/1602655872765-90939a9e4469047ceaafb8847a7723a6.png?tr=q-75,w-386"
                    alt=""
                  />
                </div>
                <div className="w-1/2 px-10">
                  <h1 className="text-xl font-semibold mb-3">Tìm xe</h1>
                  <p className=" w-54">
                    Bắt đầu tìm kiếm bằng cách chọn điểm xuất phát và điểm đến
                    (một trong hai phải là sân bay), điền thông tin ngày giờ đón
                    cũng như số hành khách.
                  </p>
                </div>
              </div>
              <div className="flex gap-24 mt-16">
                <div className="w-1/2 px-10">
                  <h1 className="text-xl text-right font-semibold mb-3">
                    Chọn xe
                  </h1>
                  <p className=" w-54 text-right">
                    Chọn xe phù hợp nhất với nhu cầu của bạn từ trang kết quả
                    tìm kiếm, bao gồm xe thuê riêng và phương tiện công cộng.
                  </p>
                </div>
                <div className="w-1/2">
                  <img
                    className="w-7/12 m-auto"
                    src="https://ik.imagekit.io/tvlk/image/imageResource/2020/10/14/1602655925690-b11a4b377d38c89fcb66bebcf43953a9.png?tr=q-75,w-386"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex gap-24 mt-16">
                <div className="w-1/2">
                  <img
                    className="w-7/12 m-auto"
                    src="https://ik.imagekit.io/tvlk/image/imageResource/2020/10/14/1602655969956-2cfc12933ddcdbe827ef23122d4d60df.png?tr=q-75,w-386"
                    alt=""
                  />
                </div>
                <div className="w-1/2 px-10">
                  <h1 className="text-xl font-semibold mb-3">
                    Xem thông tin xe
                  </h1>
                  <p className=" w-54">
                    Kiểm tra thông tin xe, địa điểm đón và xuống xe. Lưu ý cung
                    cấp thông tin chuyến bay nếu được yêu cầu.
                  </p>
                </div>
              </div>
              <div className="flex gap-24 mt-16">
                <div className="w-1/2 px-10">
                  <h1 className="text-xl font-semibold mb-3 text-right">
                    Điền biểu mẫu đặt chỗ
                  </h1>
                  <p className=" w-54 text-right">
                    Điền thông tin liên hệ và thông tin hành khách. Đảm bảo
                    thông tin chính xác để tránh rắc rối về sau trên hành trình
                    của bạn.
                  </p>
                </div>
                <div className="w-1/2">
                  <img
                    className="w-7/12 m-auto"
                    src="https://ik.imagekit.io/tvlk/image/imageResource/2020/10/14/1602656285316-0cb97dda72c718543f5247653dc587bc.png?tr=q-75,w-386"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex gap-24 mt-16">
                <div className="w-1/2">
                  <img
                    className="w-7/12 m-auto"
                    src="https://ik.imagekit.io/tvlk/image/imageResource/2020/10/14/1602656521269-54f20cd416c5ffb23c457adcbfc322aa.png?tr=q-75,w-386"
                    alt=""
                  />
                </div>
                <div className="w-1/2 px-10">
                  <h1 className="text-xl font-semibold mb-3">
                    Hoàn tất thanh toán
                  </h1>
                  <p className=" w-54">
                    Kiểm tra lại thông tin đặt chỗ trước khi tiếp tục thanh
                    toán. Chọn phương thức thanh toán yêu thích và hoàn tất đặt
                    chỗ.
                  </p>
                </div>
              </div>
              <div className="flex gap-24 mt-16">
                <div className="w-1/2 px-10">
                  <h1 className="text-xl font-semibold mb-3 text-right">
                    Nhận phiếu thanh toán
                  </h1>
                  <p className=" w-54 text-right">
                    Khi thanh toán đã được xác thực, phiếu thanh toán đưa đón
                    sân bay của bạn sẽ được gửi đến ứng dụng Traveloka hoặc
                    email.
                  </p>
                </div>
                <div className="w-1/2">
                  <img
                    className="w-7/12 m-auto"
                    src="https://ik.imagekit.io/tvlk/image/imageResource/2020/10/14/1602656607686-b0aa6271787a6226f9d8de665538f485.png?tr=q-75,w-386"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="mt-[67rem]">
              <h1 className="text-center text-2xl font-normal mb-12">
                Di chuyển tiện lợi với dịch vụ Đưa đón sân bay của Traveloka
              </h1>
              <p>
                Với tiềm năng lớn vẫn chưa được khai thác hết của du lịch Việt
                Nam, bên cạnh các đại lý truyền thống, ngành OTA - Đại lý du
                lịch trực tuyến ngày một phát triển với sự tham gia của nhiều
                “ông lớn", trong đó có Traveloka. Nhận được sự yêu thích của rất
                nhiều dân mê du lịch, Traveloka ngày một cố gắng hoàn thiện
                những dịch vụ của mình nhằm đáp ứng mọi nhu cầu của người dùng.
              </p>
              <p className="mt-5 tracking-wide">
                Một trong những dịch vụ mới nhất của Traveloka siêu ứng dụng du
                lịch và tiện ích sống chính là Đưa đón sân bay. Dịch vụ này giúp
                khách có thể di chuyển đến/từ sân bay một cách tiện lợi hơn.
                Người dùng Traveloka có thể dễ dàng đặt dịch vụ này thông qua
                trang web máy tính, di động, và ứng dụng Traveloka. Bất cứ lúc
                nào bạn cần taxi sân bay, xe buýt sân bay, hoặc xe riêng, hãy
                luôn nhớ đến Traveloka nhé
              </p>
              <p className="mt-5 tracking-wide">
                Traveloka chỉ chọn hợp tác với một số đối tác nhất định nhằm
                mang lại trải nghiệm tốt nhất cho người dùng. Hiện nay, những
                đối tác hàng đầu trong nước và quốc tế của Traveloka gồm có
                Golden Bird, xe trung chuyển sân bay Big Bird, Conxxe, KLIA
                Express, xe trung chuyển sân bay XTrans, xe trung chuyển sân bay
                Jackal Holidays, và xe trung chuyển sân bay DAMRI. Đây là những
                công ty chuyên nghiệp và có kinh nghiệm trong ngành dịch vụ
                chuyên chở sân bay, gồm cả dịch vụ xe trung chuyển lớn và xe
                riêng.
              </p>
              <p className="mt-5 tracking-wide">
                Cùng với các đối tác của mình, dịch vụ Đưa đón sân bay Traveloka
                phục vụ những tuyến đường phổ biến, như sân bay quốc tế
                Soekarno-Hatta International Airport – Bandung (khứ hồi), sân
                bay Halim Perdanakusuma – Bekasi, sân bay quốc tế Soekarno-Hatta
                – Gambir, và hơn thế nữa.
              </p>
              <p className="mt-5 tracking-wide">
                Không chỉ kết hợp với những đối tác hàng đầu, dịch vụ Đưa đón
                sân bay của Traveloka còn mang lại nhiều lợi ích khác cho người
                dùng. Khách có thể chọn nhiều loại xe với ưu điểm riêng, từ xe
                buýt, xe trung chuyển, taxi đến xe riêng, trên Traveloka.
              </p>
              <p className="mt-5 tracking-wide">
                Để giúp người dùng tìm được phương tiện đưa đón sân bay phù hợp,
                Traveloka còn cung cấp thông tin đầy đủ của từng xe, bao gồm giá
                và lịch trình. Bạn có thể dễ dàng tiếp cận thông tin này bằng
                cách chạm tay trên điện thoại hoặc di chuột trên màn hình máy
                tính. Bạn không cần tìm ở nơi đâu khác.
              </p>
              <p className="mt-5 tracking-wide">
                Thông qua xe đưa đón sân bay, Traveloka siêu ứng dụng du lịch và
                tiện ích sống mang đến một chuyến đi tiện lợi và khó quên đến/từ
                sân bay. Bạn không cần phải xếp hàng tìm xe ở sân bay nữa. Chỉ
                cần trình phiếu thanh toán Traveloka cho tài xế hoặc nhân viên
                và sẵn sàng lên đường.
              </p>
              <p className="mt-5 tracking-wide">
                Đối với hành khách đặt xe riêng, Traveloka đảm bảo có thời gian
                chờ thêm trong trường hợp hoãn chuyến bay. Bạn chỉ cần cung cấp
                số hiệu chuyến bay hợp lệ và tài xế sẽ đợi cho đến khi chuyến
                bay hạ cánh.
              </p>
              <p className="mt-5 tracking-wide">
                Về giá, Traveloka đảm bảo giá đã bao gồm mọi chi phí. Hành khách
                có thể trải nghiệm dịch vụ đưa đón sân bay mà không cần phải trả
                thêm phí cầu đường và đậu xe trong chuyến đi.
              </p>
              <p className="mt-5 tracking-wide">
                Dịch vụ Đưa đón sân bay Traveloka sẽ mang lại sự tiện lợi và
                thoải mái cho hành khách cho chuyến đi đến/từ sân bay. Không còn
                phải lo lỡ chuyến bay hoặc hạ cánh muộn không tìm được xe nữa.
                Bạn có thể dễ dàng đặt xe đưa đón sân bay mọi lúc mọi nơi. Cùng
                Traveloka siêu ứng dụng du lịch và tiện ích sống khám phá thế
                giới, và đặt một chuyến đi đến sân bay không âu lo!
              </p>
            </div>
          </div>
        )}

        {/* -----------------------------------------------Components2--------------------------------------------------------- */}

        {showContent2 && (
          <div>
            <h1 className="text-center text-xl font-normal mt-36">
              Cách đặt chỗ
            </h1>
            <div className="h-screen">
              <div className="flex gap-24 mt-9">
                <div className="w-1/2">
                  <img
                    className="w-7/12 m-auto"
                    src="https://ik.imagekit.io/tvlk/image/imageResource/2020/10/14/1602655872765-90939a9e4469047ceaafb8847a7723a6.png?tr=q-75,w-386"
                    alt=""
                  />
                </div>
                <div className="w-1/2 px-10">
                  <h1 className="text-xl font-semibold mb-3">Tìm xe</h1>
                  <p className=" w-54">
                    Bắt đầu tìm kiếm bằng cách chọn điểm xuất phát và điểm đến
                    (một trong hai phải là sân bay), điền thông tin ngày giờ đón
                    cũng như số hành khách.
                  </p>
                </div>
              </div>
              <div className="flex gap-24 mt-9">
                <div className="w-1/2 px-10">
                  <h1 className="text-xl font-semibold mb-3">Tìm xe</h1>
                  <p className=" w-54">
                    Bắt đầu tìm kiếm bằng cách chọn điểm xuất phát và điểm đến
                    (một trong hai phải là sân bay), điền thông tin ngày giờ đón
                    cũng như số hành khách.
                  </p>
                </div>
                <div className="w-1/2">
                  <img
                    className="w-7/12 m-auto"
                    src="https://ik.imagekit.io/tvlk/image/imageResource/2020/10/14/1602655872765-90939a9e4469047ceaafb8847a7723a6.png?tr=q-75,w-386"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex gap-24 mt-9">
                <div className="w-1/2">
                  <img
                    className="w-7/12 m-auto"
                    src="https://ik.imagekit.io/tvlk/image/imageResource/2020/10/14/1602655872765-90939a9e4469047ceaafb8847a7723a6.png?tr=q-75,w-386"
                    alt=""
                  />
                </div>
                <div className="w-1/2 px-10">
                  <h1 className="text-xl font-semibold mb-3">Tìm xe</h1>
                  <p className=" w-54">
                    Bắt đầu tìm kiếm bằng cách chọn điểm xuất phát và điểm đến
                    (một trong hai phải là sân bay), điền thông tin ngày giờ đón
                    cũng như số hành khách.
                  </p>
                </div>
              </div>
              <div className="flex gap-24 mt-9">
                <div className="w-1/2 px-10">
                  <h1 className="text-xl font-semibold mb-3">Tìm xe</h1>
                  <p className=" w-54">
                    Bắt đầu tìm kiếm bằng cách chọn điểm xuất phát và điểm đến
                    (một trong hai phải là sân bay), điền thông tin ngày giờ đón
                    cũng như số hành khách.
                  </p>
                </div>
                <div className="w-1/2">
                  <img
                    className="w-7/12 m-auto"
                    src="https://ik.imagekit.io/tvlk/image/imageResource/2020/10/14/1602655872765-90939a9e4469047ceaafb8847a7723a6.png?tr=q-75,w-386"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex gap-24 mt-9">
                <div className="w-1/2">
                  <img
                    className="w-7/12 m-auto"
                    src="https://ik.imagekit.io/tvlk/image/imageResource/2020/10/14/1602655872765-90939a9e4469047ceaafb8847a7723a6.png?tr=q-75,w-386"
                    alt=""
                  />
                </div>
                <div className="w-1/2 px-10">
                  <h1 className="text-xl font-semibold mb-3">Tìm xe</h1>
                  <p className=" w-54">
                    Bắt đầu tìm kiếm bằng cách chọn điểm xuất phát và điểm đến
                    (một trong hai phải là sân bay), điền thông tin ngày giờ đón
                    cũng như số hành khách.
                  </p>
                </div>
              </div>
              <div className="flex gap-24 mt-9">
                <div className="w-1/2 px-10">
                  <h1 className="text-xl font-semibold mb-3">Tìm xe</h1>
                  <p className=" w-54">
                    Bắt đầu tìm kiếm bằng cách chọn điểm xuất phát và điểm đến
                    (một trong hai phải là sân bay), điền thông tin ngày giờ đón
                    cũng như số hành khách.
                  </p>
                </div>
                <div className="w-1/2">
                  <img
                    className="w-7/12 m-auto"
                    src="https://ik.imagekit.io/tvlk/image/imageResource/2020/10/14/1602655872765-90939a9e4469047ceaafb8847a7723a6.png?tr=q-75,w-386"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="mt-[63rem]">
              <h1 className="text-center text-2xl font-normal mb-12">
                Di chuyển tiện lợi với dịch vụ Đưa đón sân bay của Traveloka
              </h1>
              <p>
                Với tiềm năng lớn vẫn chưa được khai thác hết của du lịch Việt
                Nam, bên cạnh các đại lý truyền thống, ngành OTA - Đại lý du
                lịch trực tuyến ngày một phát triển với sự tham gia của nhiều
                “ông lớn", trong đó có Traveloka. Nhận được sự yêu thích của rất
                nhiều dân mê du lịch, Traveloka ngày một cố gắng hoàn thiện
                những dịch vụ của mình nhằm đáp ứng mọi nhu cầu của người dùng.
              </p>
              <p className="mt-5 tracking-wide">
                Một trong những dịch vụ mới nhất của Traveloka siêu ứng dụng du
                lịch và tiện ích sống chính là Đưa đón sân bay. Dịch vụ này giúp
                khách có thể di chuyển đến/từ sân bay một cách tiện lợi hơn.
                Người dùng Traveloka có thể dễ dàng đặt dịch vụ này thông qua
                trang web máy tính, di động, và ứng dụng Traveloka. Bất cứ lúc
                nào bạn cần taxi sân bay, xe buýt sân bay, hoặc xe riêng, hãy
                luôn nhớ đến Traveloka nhé
              </p>
              <p className="mt-5 tracking-wide">
                Traveloka chỉ chọn hợp tác với một số đối tác nhất định nhằm
                mang lại trải nghiệm tốt nhất cho người dùng. Hiện nay, những
                đối tác hàng đầu trong nước và quốc tế của Traveloka gồm có
                Golden Bird, xe trung chuyển sân bay Big Bird, Conxxe, KLIA
                Express, xe trung chuyển sân bay XTrans, xe trung chuyển sân bay
                Jackal Holidays, và xe trung chuyển sân bay DAMRI. Đây là những
                công ty chuyên nghiệp và có kinh nghiệm trong ngành dịch vụ
                chuyên chở sân bay, gồm cả dịch vụ xe trung chuyển lớn và xe
                riêng.
              </p>
              <p className="mt-5 tracking-wide">
                Cùng với các đối tác của mình, dịch vụ Đưa đón sân bay Traveloka
                phục vụ những tuyến đường phổ biến, như sân bay quốc tế
                Soekarno-Hatta International Airport – Bandung (khứ hồi), sân
                bay Halim Perdanakusuma – Bekasi, sân bay quốc tế Soekarno-Hatta
                – Gambir, và hơn thế nữa.
              </p>
              <p className="mt-5 tracking-wide">
                Không chỉ kết hợp với những đối tác hàng đầu, dịch vụ Đưa đón
                sân bay của Traveloka còn mang lại nhiều lợi ích khác cho người
                dùng. Khách có thể chọn nhiều loại xe với ưu điểm riêng, từ xe
                buýt, xe trung chuyển, taxi đến xe riêng, trên Traveloka.
              </p>
              <p className="mt-5 tracking-wide">
                Để giúp người dùng tìm được phương tiện đưa đón sân bay phù hợp,
                Traveloka còn cung cấp thông tin đầy đủ của từng xe, bao gồm giá
                và lịch trình. Bạn có thể dễ dàng tiếp cận thông tin này bằng
                cách chạm tay trên điện thoại hoặc di chuột trên màn hình máy
                tính. Bạn không cần tìm ở nơi đâu khác.
              </p>
              <p className="mt-5 tracking-wide">
                Thông qua xe đưa đón sân bay, Traveloka siêu ứng dụng du lịch và
                tiện ích sống mang đến một chuyến đi tiện lợi và khó quên đến/từ
                sân bay. Bạn không cần phải xếp hàng tìm xe ở sân bay nữa. Chỉ
                cần trình phiếu thanh toán Traveloka cho tài xế hoặc nhân viên
                và sẵn sàng lên đường.
              </p>
              <p className="mt-5 tracking-wide">
                Đối với hành khách đặt xe riêng, Traveloka đảm bảo có thời gian
                chờ thêm trong trường hợp hoãn chuyến bay. Bạn chỉ cần cung cấp
                số hiệu chuyến bay hợp lệ và tài xế sẽ đợi cho đến khi chuyến
                bay hạ cánh.
              </p>
              <p className="mt-5 tracking-wide">
                Về giá, Traveloka đảm bảo giá đã bao gồm mọi chi phí. Hành khách
                có thể trải nghiệm dịch vụ đưa đón sân bay mà không cần phải trả
                thêm phí cầu đường và đậu xe trong chuyến đi.
              </p>
              <p className="mt-5 tracking-wide">
                Dịch vụ Đưa đón sân bay Traveloka sẽ mang lại sự tiện lợi và
                thoải mái cho hành khách cho chuyến đi đến/từ sân bay. Không còn
                phải lo lỡ chuyến bay hoặc hạ cánh muộn không tìm được xe nữa.
                Bạn có thể dễ dàng đặt xe đưa đón sân bay mọi lúc mọi nơi. Cùng
                Traveloka siêu ứng dụng du lịch và tiện ích sống khám phá thế
                giới, và đặt một chuyến đi đến sân bay không âu lo!
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default MainAirplaneComponent2;
