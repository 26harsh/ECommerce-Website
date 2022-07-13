import React from 'react'
import FlashDeals from '../components/flashDeals/FlashDeals'
import Home from '../components/mainpage/Home'
import NewArrivals from '../components/newarrivals/NewArrivals'
import TopCate from '../components/top/TopCate'
import Discounts from '../components/discounts/Discounts'

const Pages = ({ productItems, cartItem, addToCart, }) => {
  return (
    <>
        <Home cartItem={cartItem} />
        <FlashDeals productItems={productItems} addToCart={addToCart} />
        <TopCate />
        <NewArrivals />
        <Discounts />
    </>
  )
}

export default Pages