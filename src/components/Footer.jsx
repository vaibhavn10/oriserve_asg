import React from 'react'
import npmLogo from '../assets/npmN_logo.png'
import githubLogo from '../assets/github_logo.png'

function Footer() {
  return (
    <footer className='mt-8 border-t'>
        <div className='flex mx-auto p-4 max-w-[96rem]'>
            <div className='flex flex-col w-[10%] p-8'>
                <div className=''><img src={npmLogo} alt="npm" className='text-xs w-[50px] pt-4'/></div>
                <div className=''><img src={githubLogo} alt="github" className='text-xs w-[50px] pt-4'/></div>
            </div>
            <div className='flex flex-1 flex-col w-[30%] p-8'>
                <h3 className='text-[17px] text-stone-800 my-[1em] font-bold tracking-[1.3px]'>Support</h3>
                <div className='flex flex-col gap-2'>
                    <div className='py-1 text-stone-700'>Home</div>
                    <div className='py-1 text-stone-700'>Advisories</div>
                    <div className='py-1 text-stone-700'>Status</div>
                    <div className='py-1 text-stone-700'>Contact npm</div>
                </div>
            </div>
            <div className='flex flex-1 flex-col w-[30%] p-8'>
                <h3 className='text-[17px] text-stone-800 my-[1em] font-bold tracking-[1.3px]'>Company</h3>
                <div className='flex flex-col gap-2'>
                    <div className='py-1 text-stone-700'>About</div>
                    <div className='py-1 text-stone-700'>Blog</div>
                    <div className='py-1 text-stone-700'>Press</div>
                </div>
            </div>
            <div className='flex flex-1 flex-col w-[30%] p-8'>
                <h3 className='text-[17px] text-stone-800 my-[1em] font-bold tracking-[1.3px]'>Terms $ Policies</h3>
                <div className='flex flex-col gap-2'>
                    <div className='py-1 text-stone-700'>Policies</div>
                    <div className='py-1 text-stone-700'>Terms of Use</div>
                    <div className='py-1 text-stone-700'>Code of Conduct</div>
                    <div className='py-1 text-stone-700'>Privacy</div>
                </div>
            </div>
        </div>
      
    </footer>
  )
}

export default Footer
