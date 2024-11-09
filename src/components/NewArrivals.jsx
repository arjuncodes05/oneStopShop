import React from 'react'

function NewArrivals({bgImage}) {
    

    const mainImg = 'https://www.cnet.com/a/img/resize/6d88108b998f830e0ddc23bcd593d276183be452/hub/2021/03/08/13fe47c0-4f8e-4f7f-9ec1-6623d3d13bd1/ps5-playstation-5-sony-hoyle-promo-12.jpg?auto=webp&fit=crop&height=900&width=1200'
    const spidermanCd = 'https://m.media-amazon.com/images/I/81qBiCSoegL._AC_UF1000,1000_QL80_.jpg'
    const monkeyKingCd = 'https://www.droidshop.vn/wp-content/uploads/2024/08/Game-Black-Myth-Wukong-PS5.jpg'

  return (
        <section>
            <div className='bg-red-100 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))]'>
                <div 
                  style={{
                    backgroundImage: `url(${spidermanCd})`
                  }}
                 >
                </div>
                <div></div>
                <div></div>
            </div>
        </section>

  )
}

export default NewArrivals