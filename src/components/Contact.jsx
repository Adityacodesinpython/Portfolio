import React from 'react'

const Contact = () => {
  return (
    <section id='contact'>
        <div className='p-5 lg:p-20'>
            <div className='px-4 flex flex-col'>
                <h2 className='text-3xl md:text-4xl lg:text-5xl mb-4 text-center text-white font-bold'>Contact Me</h2>
                <p className='text-sm md:text-md lg:text-xl mb-7 text-center text-zinc-400'>If you like my work & want to talk more then feel free to email me by simply clicking the button below<br/><span className='text-sm md:text-md lg:text-xl  text-cyan-600'>adityacodesinpython@gmail.com</span></p>
                <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" class="px-4 py-1 lg:px-10 lg:py-3 mx-auto lg:text-xl text-sm rounded-md text-white transition-all focus:outline-none focus:ring-2 focus:ring-offset-2">Email me!</a>
            </div>
        </div>
    </section>
  )
}

export default Contact