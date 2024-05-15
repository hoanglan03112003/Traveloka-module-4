import React, { useState } from 'react'
import { IoChevronDownOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { MdContactSupport } from "react-icons/md";
import { MdContactPhone } from "react-icons/md";
import { Link } from 'react-router-dom';


function HeaderAirplaneComponent() {
  const [isOpen,setisOpen] = useState(false);
  const [isOpenmore,Setisopenmore] = useState(false);
  const toggleDropdown = () =>{
    setisOpen(!isOpen); 
  }
  const toggleDropdownMore = () =>{
    Setisopenmore(!isOpenmore);
  }
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Cuộn mượt đến đầu trang
    });
  };
  return (
    <>
     <div className="bg-slate-50 fixed items-center w-full top-0 z-50">
        <div className=" max-w-[1200px] m-auto flex items-center justify-between">
          <div className="">
            <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/9/97f3e7a54e9c6987283b78e016664776.svg" alt="" />
          </div>
          <ul className="flex items-center gap-5 h-12">
            <li className="py-2 px-1 hover:bg-slate-100 rounded-md cursor-pointer"><a href="#"></a></li>
            <li className="py-2 px-1 hover:bg-slate-100 rounded-md cursor-pointer"><a href="#">Khuyến mãi</a></li>
            <li onClick={toggleDropdown} className="relative flex items-center py-2 px-1 hover:bg-slate-100 rounded-md cursor-pointer">
              <a href="#">Hỗ trợ</a>
              <IoChevronDownOutline className='text-[12px] mt-1 ml-1' />
              {isOpen && (
              <div className='absolute top-full right-0 mt-1 bg-white shadow-lg rounded w-48 py-2 px-2'>
                  <li className='flex items-center gap-2 py-2 px-2 hover:bg-gray-200'>
                    <MdContactSupport />
                    <a href="#" className='w-40'>Trợ giúp</a>
                  </li>
                  <li className='flex items-center gap-2 py-2 px-2 hover:bg-gray-200'>
                    <MdContactPhone />
                    <a href="#" className='w-40'>Liên hệ chúng tôi</a>
                  </li>
              </div>
              )}
              </li>
            <li className="py-2 px-1 hover:bg-slate-100 rounded-md cursor-pointer"><a href="#">Hợp tác với chúng tôi</a></li>
            <li className="py-2 px-1 hover:bg-slate-100 rounded-md cursor-pointer"><a href="#">Đặt chỗ của tôi</a></li>
            <li className="flex gap-2 items-center py-2 px-3 w-[114px] text-center hover:bg-slate-100 rounded-md text-sm border border-blue-500 cursor-pointer">
              <FaUser className='text-blue-500 mt-0.5' />
              <a href="#" className='w-[100px]'>Đăng nhập</a>
              </li>
            <li className="py-2 px-3 w-[86px] hover:opacity-80 bg-[#007CE8] text-sm text-center text-white font-medium rounded-md cursor-pointer"><a href="#">Đăng Ký</a></li>
          </ul>
        </div>
        <div className="max-w-[1200px] m-auto mt-1 h-11">
            <ul className="flex items-center gap-5">
                <li className="py-2 px-1 hover:bg-slate-100 text-gray-500 text-sm font-medium rounded-md"><a href="#">Khách sạn</a></li>
                <li className="py-2 px-1 hover:bg-slate-100 text-gray-500 text-sm font-medium rounded-md"><a href="#">Vé Máy Bay</a></li>
                <li className="py-2 px-1 hover:bg-slate-100 text-gray-500 text-sm font-medium rounded-md"><a href="#">Vé xe khách</a></li>
                <li className="py-2 px-1 hover:bg-slate-100 text-gray-500 text-sm font-medium rounded-md"><Link onClick={scrollToTop} to="/">Đưa đón sân bay</Link></li>
                <li className="py-2 px-1 hover:bg-slate-100 text-gray-500 text-sm font-medium rounded-md"><Link onClick={scrollToTop} to="/Air">Cho thuê xe</Link></li>
                <li className="py-2 px-1 hover:bg-slate-100 text-gray-500 text-sm font-medium rounded-md"><a href="#">Hoạt động & vui chơi</a></li>
                <li onClick={toggleDropdownMore} className="relative py-2 px-1 hover:bg-slate-100 text-gray-500 text-sm font-medium rounded-md">
                  <a href="#">More</a>
                  {isOpenmore && (
                    <>
                     <div className='absolute right-0 w-48 bg-slate-100 shadow-lg'>
                        <li className='py-2 px-2 hover:bg-gray-200'>
                          <a href="#">Combo tiết kiệm</a>
                        </li>
                        <li className='py-2 px-2 hover:bg-gray-200'>
                          <a href="#">Bảo hiểm du lịch</a>
                        </li>
                        <li className='py-2 px-2 hover:bg-gray-200'>
                          <a href="#">Phiếu quà tặng</a>
                        </li>
                        <li className='py-2 px-2 hover:bg-gray-200'>
                          <a href="#">Cruises</a>
                        </li>
                     </div>
                    </>
                  )}
                </li>
            </ul>
        </div>
      </div>
    </>
  )
}

export default HeaderAirplaneComponent