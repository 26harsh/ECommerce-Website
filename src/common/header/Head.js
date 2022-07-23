import React from 'react'

const Head = () => {
  return (
    <>
        <section className='head'>
            <div className='container d_flex'>   
                <div className='left row'>
                    <i className='fa fa-phone'></i>
                    <label>+91 3 456 780</label>
                    <i className='fa fa-envelope'></i>
                    <label>shopit@gmail.com</label>
                </div>
                <div className='right row Rtext'>
                    <label>Theme FAQ's</label>
                    <label>Need Help</label>
                    
                </div>
            </div>
        </section>
    </>
  )
}

export default Head