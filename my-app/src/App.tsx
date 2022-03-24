import { useEffect, useState } from 'react'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import WebsiteLayout from './pages/layouts/WebsiteLayout'
import AdminLayout from './pages/layouts/AdminLayout'
import { ProductType } from './types/product'
import { add, list, remove } from './api/product'
import ProductManager from './pages/Productmanager'
import ProductDetail from './pages/ProductDetail'
import ProductAdd from './pages/ProductAdd'

function App() {

  const [products, setProducts] = useState<ProductType[]>([])

  useEffect(()=>{
    const getProducts = async () =>{
      const { data } = await list();
      setProducts(data);
      console.log(data);
      
    }
    getProducts()
  }, [])

  const removeItem = (id: number) => {
    
    remove(id);
    // reRender
    setProducts(products.filter(item => item.id !== id));
  }
  const onHanleAdd = (data: { name: string; price: number }) => { // On là truyền hàm
    add(data);
    setProducts([...products,data])
  }

  return (
    <div className='max-w-6xl mx-auto'>
      <Routes>
        <Route path='/' element={<WebsiteLayout />}>
          <Route index element={<Homepage />} />
          <Route path="product">
                <Route index element={<h1>Product Page</h1>} />
                <Route path=":id" element={<ProductDetail />} />
              </Route>
        </Route>
        <Route path='admin' element={<AdminLayout />}>
          <Route index element={<Navigate to="dashbroad" />} />
          <Route path='dashbroad' element={<h1>Dashboard</h1>} />
          <Route path="/admin/product" element={<ProductManager products={products} onRemove={removeItem}/>} />
          <Route path='/admin/product/add' element={<ProductAdd onAdd={onHanleAdd} />} />
        </Route>
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  )
}

export default App
