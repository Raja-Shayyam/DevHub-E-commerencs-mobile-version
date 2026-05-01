import { NavLink, useNavigate } from "react-router-dom"

function useNav(){
  const  toNav =useNavigate()
  const navgate=(dest)=> toNav(dest) 
  return {navgate}
}

export default useNav