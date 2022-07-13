import React from 'react'
import FlashCard from './FlashCard'

const FlashDeals = ({productItems}) => {
  return (
    <>
        <section className='flash background'>
            <div className='container'>
                <di className="heading f_flex">
                    <i className='fa fa-bolt'></i>
                    <h1>Flash Deals</h1>
                </di>
                <FlashCard productItems = {productItems}/>   
            </div>
        </section>
    </>
  )
}

export default FlashDeals