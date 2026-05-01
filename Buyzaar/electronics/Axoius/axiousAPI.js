import axios from 'axios'
import { toast } from 'react-toastify'

const authAPI = axios.create({
  baseURL: 'http://localhost:3000/users',
  // baseURL: 'https://backend.mybuyzaar.com/usr',
})

// authAPI.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error) {
//       let d = error.response.data
//       toast.error(d.message)
//       // toast.warning(`value : ${d.details[0].value}`)
//     }
//     return Promise.reject(error);
//   }
// )

// //^ authAPI.interceptors.response.use(first-augument(working function) , second-augument(error handling))
// authAPI.interceptors.request.use(
//   (config) => {
//     const TK = localStorage.getItem('tk')
//     if (TK) {
//       config.headers.Authorization = `Bearer ${TK}`
//     }
//     return config
//   }
//   ,
//   (error) => {
//     return Promise.reject(error);
//   }
// )


export const apiRegister = (data) => {
  console.log(data);

  return authAPI.post(`/reg_user`, data)
}
export const apiLogin = async (data) => {
  console.log(data);

  return authAPI.post(`/login`, data)
}


export const apisME = async (data) => {
  console.log(data);
  // const newMethod = {
  //   headers: {
  //     'Authorization': `Bearer ${token}`
  //   }
  // }
  return authAPI.get(`/me`, {
    headers: {
      'Authorization': `Bearer ${data}`
    }
  })
  // return authAPI.get('/me', data)
}

export const myDetails = async (id, data) => {
  console.log(id, data);

  return authAPI.post(`/userDetails/${id}`, data)
}

export const myDetailsUpdate = async (id, data) => {
  console.log(id, data);
  return authAPI.patch(`/userDetails/${id}`, data)
}

export const myAllDetails = async (userId) => {
  console.log(userId);

  return authAPI.get(`/userDetails/${userId}`);
}


const prodApi = axios.create({
  baseURL: 'http://localhost:3000/items',
  // baseURL: 'https://backend.mybuyzaar.com/itm',
})

export const prodInCART = async (id, prod) => {
  console.log(id, prod);

  return prodApi.post(`/AdditeminCART/${id}`, prod)
}

export const userAllinCART = async (id, prod) => {
  return prodApi.get(`/AdditeminCART/${id}`, prod)
}

export const UpdateCartitems = async (id, prod) => {
  console.log(id, prod);

  return prodApi.patch(`/AdditeminCART/${id}`, prod)
}

export const deleteFromCART = async (id, prod) => {
  console.log(id, prod);
  return prodApi.delete(`/AdditeminCART/${id}?productId=${prod}`);
  // return prodApi.delete(`/AdditeminCART/${id}`, {data:{prod}})
}


export const prodInWISHlist = async (id, prod) => {
  console.log(id, prod);

  return prodApi.post(`/AdditeminWishlist/${id}`, prod)
}

export const WISHlist = async (id) => {
  console.log(id);

  return prodApi.get(`/AdditeminWishlist/${id}`)
}



const AdminApi = axios.create({
  baseURL: 'http://localhost:3000/adminPannel',
  // baseURL: 'https://backend.mybuyzaar.com/itm',
})

export const adminCreateproduct = async (id) => {
  console.log(id);

  return AdminApi.post(`/adminProductADD/${id}`)
}

export const allProducts = async (page, limit) => {


  return prodApi.get(`/allProducts?page=${page}&limit=${limit}`);
}
