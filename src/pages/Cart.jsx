import React from 'react'

function Cart() {
  return (
    <div>
        <div>
            <h1 className='text-3xl font-extrabold mb-4'>Items in your cart</h1>
        </div>

        <div className='flex gap-4' >
            <div className='w-[60%]'>
                {/* items */}
                <div className='border-2 rounded-md flex items-center'>
                    <div className='w-[25%]'>
                        <img width='100%' src="https://m.media-amazon.com/images/I/719C6bJv8jL._SX679_.jpg" alt="" />
                    </div>
                    <div>
                        <h2>Lego &1043...lorem5</h2>
                        <div>
                            <button>-</button>
                            <span>1</span>
                            <button>+</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* checkout */}
            <div className='w-[40%] border-2'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, minus!</p>
            </div>
        </div>

    </div>
  )
}

export default Cart
