import React,{useEffect} from 'react'

export const Profileimg = ({puser, size}) => {
console.log(puser);

  return (
    <img
     src={puser?.data?.profilePicture || 'https://i.pravatar.cc/150?img=12'}
      alt="User Avatar"
      className="rounded-circle shadow-lg"
      style={{
        // width: "120px",
        width: size,
        height: size,
        border: "3px solid #00e0ff",
        boxShadow: "0 0 20px rgba(0,224,255,0.6)",
      }}
    />
  )
}
