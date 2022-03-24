import { useEffect, useState } from 'react'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import WebsiteLayout from './pages/layouts/WebsiteLayout'
import AdminLayout from './pages/layouts/AdminLayout'
import { ProductType } from './types/product'
import { add, list, remove, update } from './api/product'
import ProductManager from './pages/Productmanager'
import ProductDetail from './pages/ProductDetail'
import ProductAdd from './pages/ProductAdd'
import ProductEdit from './pages/ProductEdit'
import Private from './components/Private'

function App() {

  const [products, setProducts] = useState<ProductType[]>([])

  useEffect(()=>{
    const getProducts = async () =>{
      const { data } = await list();
      setProducts(data);      
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
  const onHanleEdit = async (product: ProductType) => {
    const { data } = await update(product);

    setProducts(products.map(item => item.id === data.id ? data: item))
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
        <Route path='admin' element={<Private><AdminLayout /></Private>}>
          <Route index element={<Navigate to="dashbroad" />} />
          <Route path='dashbroad' element={<h1>Dashboard</h1>} />
          <Route path="product">
            <Route index element={<ProductManager products={products} onRemove={removeItem}/>} />
            <Route path='add' element={<ProductAdd onAdd={onHanleAdd} />} />
            <Route path=':id/edit' element={<ProductEdit onUpdate={onHanleEdit} />} />
          </Route>
        </Route>
        <Route path='login' element={<h1>Login Page</h1>} />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  )
}

export default App
