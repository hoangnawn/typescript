import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

const Header = (props: Props) => {
    return (
        <header>
            <div className="bg-blue-900 py-5">
                <a href=""><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/FPT_Polytechnic.png/1200px-FPT_Polytechnic.png" width="250px" className="mx-auto" alt="" /></a>
            </div>
            <div className="bg-orange-500 py-4 mb-4">
                <ul className="flex px-2">
                    <li><NavLink className="px-3 text-white hover:underline" to="/">Trang chủ</NavLink></li>
                    <li><NavLink className="px-3 text-white hover:underline" to="/news">Tin tức</NavLink></li>
                    <li><NavLink className="px-3 text-white hover:underline" to="/product">Chương trình đào tạo</NavLink></li>
                    <li><NavLink className="px-3 text-white hover:underline" to="">Góc sinh viên</NavLink></li>
                    <li><NavLink className="px-3 text-white hover:underline" to="">Tuyển dụng</NavLink></li>
                    <li><input className="mx-8 px-1" type="text" /></li>
                    <li><button className="border-solid border-2 border-white text-white bg-blue-900 px-4 text-sm">Tìm Kiếm</button>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header