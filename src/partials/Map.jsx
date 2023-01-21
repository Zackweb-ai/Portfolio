import React from 'react'

export default function Map() {
  return (
    <div className='container-fluid d-flex justify-content-center mt-5 pb-5'>
          <iframe className='rounded-2' src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d3325.4093743682774!2d-7.5715319849458895!3d33.542738551854875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e2!4m3!3m2!1d33.5429679!2d-7.5691109!4m5!1s0xda632e00b65f419%3A0xa27788e9600eafb2!2zUnVlIDEzLCDYp9mE2K_Yp9ixINin2YTYqNmK2LbYp9ih2IwgTWFyb2M!3m2!1d33.5424824!2d-7.5693557!5e0!3m2!1sen!2sma!4v1673381948246!5m2!1sen!2sma" width={1000} height={350} style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}
