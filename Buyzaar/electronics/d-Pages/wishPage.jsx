import React from 'react';
import { useEffect } from 'react';
import { prodInCART, WISHlist } from '../Axoius/axiousAPI';
import { useState } from 'react';
import { customhook } from '../context/store';
import WishCard from '../Components/wishesDETAILS';

const Allwish = () => {
  const { user } = customhook();

  const [WishlistItems, setWishlistItems] = useState([])

  // Aapke data structure ke mutabiq keys: _id, name, category, price, img, qty
  // const { _id, name, category, price, img, qty, rating } = product;

  const handleCartms = async (id, prodDetails, quantity, prod) => {
    console.log('clicked from allWish cartin');

    const rslt = await prodInCART(id, { prodDetail: 'from wishlists', quantity, prod })
    console.log(rslt);
  }

  async function run() {
    const rslt = await WISHlist(user._id)
    console.log(rslt.data.item);
    setWishlistItems(rslt.data.item)
  }

  useEffect(() => {
    run()
  }, [])

  return <div className="row">
    {WishlistItems.map((item) => (
      <WishCard
        key={item._id}
        product={item}
        onRemove={(id) => console.log("Removing ID:", id)}
        handleCartms={handleCartms}
      />
    ))}
  </div>
};

export default Allwish;