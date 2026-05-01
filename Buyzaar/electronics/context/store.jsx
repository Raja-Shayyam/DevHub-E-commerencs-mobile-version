import { createContext, useContext, useEffect, useState } from "react";
import { apisME, myAllDetails } from "../Axoius/axiousAPI";
import { toast, ToastContainer } from "react-toastify";
// import { products, brands, Category } from '../../products_bands/products'

export const StoragePoint = createContext();

export const StorageProvider = ({ children }) => {

  const [cartItems, setcartItems] = useState([])
  const [prodDetails, setProdDetails] = useState({})

  const [user, setUser] = useState({
    email: "",
    firstName: '',
    lastName: '',
    username: "",
    phoneNumber: '',
    password: "",
    confirmPassword: "",
  })
  const [ulog, setUlog] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  console.log(user, ulog);

  const [puser, psetUser] = useState({
    // name: user.username,
    // email: user.email,
    // name: '',
    // email: 'tahir.shm',
    // phone: "+92 300 1234567",
    // role: "Customer",
    // address: "Islamabad, Pakistan",
    // avatar: "https://i.pravatar.cc/150?img=12",
  });

  const [wishes, setWishes] = useState()
  const [finalCheckoutData, setfinalCheckoutData] = useState([])

  const checkMe = async () => {
    const TK = localStorage.getItem('tk')

    if (!TK) {
      setIsLoading(false)
      return
    }

    try {
      setIsLoading(true)
      const result = await apisME(TK)
      console.log('try hi');

      console.log(result);
      if (result.data.success) {
        setUser(result.data.data)
        console.log('matched');

        // const reslt = awa it myAllDetails(result.data._id)
        setUlog(true)
      }
    } catch (error) {
      console.error(error, error.message);
      setUlog(false)
      // toast.error(error.response.data.message)
    } finally {
      setIsLoading(false)
    }

  }
  useEffect(() => {
    console.log('hi');
    checkMe()
  }, [ulog]) //on mount
  console.log(user);


  return (
    <StoragePoint.Provider value={{ cartItems, finalCheckoutData, setfinalCheckoutData, setcartItems, user, setUser, ulog, setUlog, puser, psetUser, wishes, setWishes, isLoading, setIsLoading, prodDetails, setProdDetails }}>
      {/* <ToastContainer autoClose={2000}/> products, brands, Category, */}
      {children}
    </StoragePoint.Provider>
  );
};


export const customhook = () => useContext(StoragePoint);