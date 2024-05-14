import React, { useState, useEffect, useRef } from 'react';

function Appss() {
  const [isClicked, setIsClicked] = useState(false);
  const componentRef = useRef(null);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  // Xử lý sự kiện click ra ngoài component
  const handleClickOutside = (event) => {
    if (componentRef.current && !componentRef.current.contains(event.target)) {
      setIsClicked(false); // Nếu click ra ngoài component, đặt isClicked thành false
    }
  };

  useEffect(() => {
    // Thêm sự kiện click cho cả trang
    document.addEventListener('click', handleClickOutside);
    return () => {
      // Gỡ bỏ sự kiện click khi component unmount
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div onClick={handleClick} className={`absolute top-0 ${isClicked ? "Clicked" : ""}`} ref={componentRef}>
        <div
          className={`max-w-[960px] m-auto bg-slate-50 absolute top-[20rem] left-[18rem] 
                   w-[920px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] 
                   rounded-md p-4`}
        > 
        <input type="text" />
        <label htmlFor="">212</label>
          {/* Nội dung của component */}
        </div>
      </div>
    </>
  );
}

export default Appss;
