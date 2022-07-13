import React from 'react'

const Head = () => {
  return (
    <>
        <section className='head'>
            <div className='container d_flex'>   
                <div className='left row'>
                    <i className='fa fa-phone'></i>
                    <label>+91093 4324 533</label>
                    <i className='fa fa-envelope'></i>
                    <label>example@gmail.com</label>
                </div>
                <div className='right row Rtext'>
                    <label>Theme FAQ's</label>
                    <label>Need Help's</label>
                    <span>🇮🇳</span>
                    <label>EN</label>
                    <span>🇺🇸</span>
                    <label>USD</label>
                </div>
            </div>
        </section>
    </>
  )
}

export default Head