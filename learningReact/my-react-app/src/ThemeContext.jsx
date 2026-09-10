import  { createContext } from 'react'

 export const PostData =createContext()

const ThemeContext = ({children}) => {
const [theme, settheme] = useState('light')

  return (
   <div>
    <PostData.Provider value={{name:"John Doe", age:30, email:"john.doe@example.com"}}>
        {children}
  </PostData.Provider>
  </div>
  )
}

export default ThemeContext