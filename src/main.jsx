import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {Home, About, Contact} from './pages/index.js'
import Product from './pages/Product.jsx'
import Cart from './pages/Cart.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import AllProducts from './pages/AllProducts.jsx'

// redux store
import { Provider } from 'react-redux'
import store from './store/store.js'


// color for light mode: #EEF0EF

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/product/:id",
        element: <Product/>
      },
      {
        path: "/products/all",
        element: <AllProducts/>
      },
      {
        path: "/cart",
        element: <Cart/>
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy/>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}  />
    </Provider>
  </StrictMode>,
)