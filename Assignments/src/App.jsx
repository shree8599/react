
import Assign1 from '../src/assign1/Assign1'
import Assign2 from '../src/assign2/Assign2'
import Assign2q3 from '../src/assign2/Assign2q3'
import Assign3 from './assign3/Assign3'
import Assign4 from './assign4/Assign4'
import Assign5 from './assign5/Assign5'
import Assign6 from './assign6/Assign6'


const products = [
  {
    image: "https://imgs.search.brave.com/m1B2YWriNjSdvNXywBUnnhvNN_8wbD-d7isGDacOptU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNzkv/ODUyLzAyNi9zbWFs/bC9tb2Rlcm4td2ly/ZWxlc3MtaGVhZHBo/b25lcy1vbi1hLWRh/cmstYmx1ZS1iYWNr/Z3JvdW5kLWZyZWUt/cGhvdG8uanBn",
    productName: "Wireless Headphones",
    productDescription: "Noise-cancelling wireless headphones with high-quality sound.",
    productPrice: 99.99
  },
  {
    image: "https://imgs.search.brave.com/vjSoTQQDgZ3HYZL88ubmPY_zX1tLpQAc9QH3tl_Sr2s/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvMTAx/NzcwODUvcGV4ZWxz/LXBob3RvLTEwMTc3/MDg1LmpwZWc_Y3M9/dGlueXNyZ2ImZHBy/PTEmdz01MDA",
    productName: "Smart Watch",
    productDescription: "Smart watch with fitness tracking, notifications, and heart-rate monitoring.",
    productPrice: 149.99
  },
  {
    image: "https://imgs.search.brave.com/KBvQG5sKnfV_vSdI8iiaKuUO1ix1n4F_zIiZWSszz8E/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy8wOThi/MWQ1NC1lYjU4LTQw/OTgtYTQxZi1kYWVk/YmJlOWNmNzIuanBn/P2Nyb3A9MC41Nzl4/dzoxLjAweGg7MC4y/Njh4dywwJnJlc2l6/ZT0zNjA6Kg",
    productName: "Running Shoes",
    productDescription: "Lightweight and comfortable running shoes designed for everyday workouts.",
    productPrice: 79.99
  },
  {
    image: "https://imgs.search.brave.com/Df1t7LC-PhG1ib796SheykRXQD5aC03Hh3TAurXbDzg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvOTQw/NzM2NC9wZXhlbHMt/cGhvdG8tOTQwNzM2/NC5qcGVnP2F1dG89/Y29tcHJlc3MmY3M9/dGlueXNyZ2ImZHBy/PTEmdz01MDA",
    productName: "Laptop Backpack",
    productDescription: "Water-resistant backpack with dedicated compartments for laptops and accessories.",
    productPrice: 49.99
  }

];



function App() {
  return (
    <div>
     <Assign1 />
     <Assign2 />
     <Assign2q3 />
     <div className='parent  h-screen flex gap-2 '>
     {
      products.map(function(product) {
        return <Assign3 productName={product.productName} image={product.image} productDescription={product.productDescription} productPrice={product.productPrice} />
      })
     }
     </div>
     <Assign4 />
     <Assign5 />
     <Assign6 />
    
    </div>
  )
}

export default App