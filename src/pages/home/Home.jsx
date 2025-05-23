import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate()

  return (
    <div className='lg:w-[75%] px-[2rem] mx-auto'>
        <main className='flex items-center justify-between mx-auto md:flex-row flex-col-reverse'>
            <div className='md:w-[50%] md:mt-0 mt-10'>
                <h1 className='text-[36px] font-[600] text-heading-color'>Order Products Faster Easier</h1>
                <p className='text-text-color my-3'>Order your favorite foods at any time and we will deliver them right to where you are.</p>
                <div className='inline-flex gap-5 hero-btns flex-col sm:flex-row'>
                    <div className='bg-primary-color text-white px-6 py-3 rounded-full font-[500]'>Get Started</div>
                </div>
            </div>
            <div className='bg-white w-[75%] md:w-[45%]'>
                <img src="./images/svg-image-2.svg" alt="" />
                {/* <img src="./images/thumbnail.png" alt="" className='w-[300px]' /> */}
            </div>
        </main>

        <section className='my-[6rem] md:my-[12rem] flex md:flex-row-reverse items-center justify-between mx-auto flex-col'>
            <div className='md:w-[50%] md:mt-0 mb-10 text-center md:text-left'>
                <h1 className='text-[24px] font-[600] text-heading-color'>Find Out A Little More About Us</h1>
                <p className='text-text-color my-3'>We are a company dedicated to the distribution of products by delivery to your home or to the place where you are, with the best quality of delivery.</p>
            </div>
            <div className='bg-white w-[75%] md:w-[45%]'>
                <img src="./images/svg-image-3.svg" alt="" />
                {/* <img src="./images/thumbnail.png" alt="" className='w-[300px]' /> */}
            </div>
        </section>

        <section className='flex items-center justify-between mx-auto md:flex-row flex-col'>
            <div className='md:w-[50%] md:mt-0 mb-10 text-center md:text-left'>
                <h1 className='text-[26px] font-[600] text-heading-color'>Your Safety Is Important</h1>
                <p className='text-text-color my-3'>When your order reaches you, we have the health safety protocols, so that you are protected from any disease. Watch the video of how the delivery is made.</p>
            </div>
            <div className='bg-white w-[75%] md:w-[45%]'>
                <img src="./images/svg-image-4.svg" alt="" />
                {/* <img src="./images/thumbnail.png" alt="" className='w-[300px]' /> */}
            </div>
        </section>

        <section className='my-[6rem] md:my-[12rem]'>
            <p className='text-center text-[20px] font-[600] text-heading-color mb-10'>Some Services We Offer</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                <div className='flex items-center justify-center text-center flex-col shadow-md rounded-[12px] py-8 px-6 gap-[28px]'>
                    <p className='font-[600] text-heading-color text-[18px]'>Payment Done</p>
                    <img src="./images/svg-image-5.svg" alt="" />
                    {/* <img src="./images/thumbnail.png" alt="" className='w-[150px]' /> */}
                    <p className='text-text-color'>Pay with a Visa or PayPal card and without much ado.</p>
                    {/* <p className='font-[600] text-heading-color'>Learn More</p> */}
                </div>
                <div className='flex items-center justify-center text-center flex-col shadow-md rounded-[12px] py-8 px-6 gap-[20px]'>
                    <p className='font-[600] text-heading-color text-[18px]'>Find Your Product</p>
                    <img src="./images/svg-image-6.svg" alt="" />
                    {/* <img src="./images/thumbnail.png" alt="" className='w-[150px]' /> */}
                    <p className='text-text-color'>We offer sale of products through the Internet.</p>
                    {/* <p className='font-[600] text-heading-color'>Learn More</p> */}
                </div>
                <div className='flex items-center justify-center text-center flex-col shadow-md rounded-[12px] py-8 px-6 gap-[20px]'>
                    <p className='font-[600] text-heading-color text-[18px]'>Product Received</p>
                    <img src="./images/svg-image-7.svg" alt="" />
                    {/* <img src="./images/thumbnail.png" alt="" className='w-[150px]' /> */}
                    <p className='text-text-color'>In our app you can see the delay time of your order.</p>
                    {/* <p className='font-[600] text-heading-color'>Learn More</p> */}
                </div>
            </div>
        </section>

        <section id='app-section' className='flex md:flex-row-reverse items-center justify-between mx-auto flex-col'>
            <div className='md:w-[50%] md:mt-0 mb-10 text-center md:text-left'>
                <h1 className='text-[24px] font-[600] text-heading-color'>Watch Your Delivery At Any Time</h1>
                <p className='text-text-color my-3'>With our app you can view the route of your order, from our local headquarters to the place where you are. <br /> Look for the app now!</p>
                <div className='flex flex-col sm:flex-row items-center justify-center md:justify-start gap-5'>
                    <button className='bg-primary-color text-white px-5 py-2 rounded-full flex items-center gap-2'>
                        <i class="ri-apple-line text-[20px]"></i>
                        <p>Apple Store</p>
                    </button>
                    <button className='bg-primary-color text-white px-5 py-2 rounded-full flex items-center gap-2'>
                        <i class="ri-google-play-line text-[20px]"></i>
                        <p>Google Play</p>
                    </button>
                </div>
            </div>
            <div className='bg-white w-[75%] md:w-[45%]'>
            {/* <img src="./images/thumbnail.png" alt="" className='w-[300px]' /> */}
                <img src="./images/svg-image-8.svg" alt="" />
            </div>
        </section>

        <section className='my-[7rem] flex items-start md:items-center justify-between md:flex-row flex-col' id='contact-us'>
            <div className='md:w-[40%] md:mt-0 mb-10'>
                <p className='text-[20px] text-heading-color mb-5 font-[600]'>Contact Us From Here</p>
                <p className='text-text-color'>You can contact us from here, you can write to us, call us or visit our service center, we will gladly assist you.</p>
            </div>
            <div className='font-[500] flex gap-[1rem] flex-col text-text-color mb-[2.5rem]'>
                <p><i class="ri-phone-line text-[20px] text-primary-color"></i>: 123 - 456 - 789</p>
                <p><i class="ri-mail-line text-[20px] text-primary-color"></i>: delivery@email.com</p>
                <p><i class="ri-map-pin-line text-[20px] text-primary-color"></i>: Planet Earth</p>
            </div>
            <div>
                <button className='bg-primary-color text-white px-5 py-2 rounded-full'>Contact Us</button>
            </div>
        </section>

    </div>
  )
}

export default Home