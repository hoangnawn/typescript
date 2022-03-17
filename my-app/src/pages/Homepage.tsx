import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

const Homepage = (props: Props) => {
  return (
    <><h2 className="uppercase text-lg font-bold my-4">Tin tức học tập</h2><div className="grid grid-cols-3 gap-8 ">
          <div className="border border-gray-400 p-4 ">
              <NavLink to=""><img src="https://caodang.fpt.edu.vn/wp-content/uploads/IMG_1336.jpg" className="mx-auto" alt="" /></NavLink>
              <a href="">
                  <h3 className="text-base text-red-600 font-bold my-2 ml-3 hover:underline">Vinh danh 295 sinh viên FPT Polytechnic học kỳ Spring 2018</h3>
              </a>
              <p className="ml-3">Tối ngày 16/06/2018, Cao đẳng FPT Polytechnic Hà Nội đã tổ chức Lễ tôn vinh “Ong vàng Poly”,
                  tuyên dương 295 cá nhân và tập thể có thành tích xuất sắc trong học tập cũng như hoạt</p>
          </div>
          <div className="border border-gray-400 p-4">
              <a href=""><img src="https://caodang.fpt.edu.vn/wp-content/uploads/anh-1-10-580x386.jpg" className="mx-auto " alt="" /></a>
              <a href="">
                  <h3 className="text-base text-red-600 font-bold my-2 ml-3 hover:underline">Sinh viên khối ngành Kinh tế học cách “chạm” vào cảm xúc</h3>
              </a>
              <p className="ml-3">Với sự tham gia của chuyên gia trong lĩnh vực kinh doanh,
                  chương trình đã thu hút đông đảo sinh viên Cao đẳng FPT Polytechnic tham dự. Đặc biệt các bạn sinh viên bị lôi cuốn bởi</p>
          </div>
          <div className="border border-gray-400 p-4">
              <a href=""><img src="https://caodang.fpt.edu.vn/wp-content/uploads/IMG_20180608_145330-768x576.jpg" className="mx-auto" alt=""/></a>
              <a href="">
                  <h3 className="text-base text-red-600 font-bold my-2 ml-3 hover:underline">Sinh viên FPoly trải nghiệm thực tế tại Mường Thanh Luxury</h3>
              </a>
              <p className="ml-3">Với triết lý đào tạo “Thực học – Thực nghiêp”,
                  Cao đẳng FPT Polytechnic Đà Nẵng thường xuyên tổ chức cho sinh viên tham quan các đơn vị doanh nghiệp</p>
          </div>
      </div><h2 className="uppercase text-lg font-bold my-4">Hoạt động sinh viên</h2><div className="grid grid-cols-3 gap-8 mb-4">
              <div className="border border-gray-400 p-4 ">
                  <a href=""><img src="https://caodang.fpt.edu.vn/wp-content/uploads/IMG_1336.jpg" className="mx-auto" alt="" /></a>
                  <a href="">
                      <h3 className="text-base text-red-600 font-bold my-2 ml-3 hover:underline">Vinh danh 295 sinh viên FPT Polytechnic học kỳ Spring 2018</h3>
                  </a>
                  <p className="ml-3">Tối ngày 16/06/2018, Cao đẳng FPT Polytechnic Hà Nội đã tổ chức Lễ tôn vinh “Ong vàng Poly”,
                      tuyên dương 295 cá nhân và tập thể có thành tích xuất sắc trong học tập cũng như hoạt</p>
              </div>
              <div className="border border-gray-400 p-4">
                  <a href=""><img src="https://caodang.fpt.edu.vn/wp-content/uploads/anh-1-10-580x386.jpg" className="mx-auto " alt="" /></a>
                  <a href="">
                      <h3 className="text-base text-red-600 font-bold my-2 ml-3 hover:underline">Sinh viên khối ngành Kinh tế học cách “chạm” vào cảm xúc</h3>
                  </a>
                  <p className="ml-3">Với sự tham gia của chuyên gia trong lĩnh vực kinh doanh,
                      chương trình đã thu hút đông đảo sinh viên Cao đẳng FPT Polytechnic tham dự. Đặc biệt các bạn sinh viên bị lôi cuốn bởi</p>
              </div>
              <div className="border border-gray-400 p-4">
                  <a href=""><img src="https://caodang.fpt.edu.vn/wp-content/uploads/IMG_20180608_145330-768x576.jpg" className="mx-auto" alt="" /></a>
                  <a href="">
                      <h3 className="text-base text-red-600 font-bold my-2 ml-3 hover:underline">Sinh viên FPoly trải nghiệm thực tế tại Mường Thanh Luxury</h3>
                  </a>
                  <p className="ml-3">Với triết lý đào tạo “Thực học – Thực nghiêp”,
                      Cao đẳng FPT Polytechnic Đà Nẵng thường xuyên tổ chức cho sinh viên tham quan các đơn vị doanh nghiệp</p>
              </div>
          </div></>
  )
}

export default Homepage