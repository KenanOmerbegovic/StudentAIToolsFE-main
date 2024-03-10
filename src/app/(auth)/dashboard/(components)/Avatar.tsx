"use client"

import React, { useState } from 'react'
import Link from 'next/link'

const Avatar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <div>
        <div id="avatar" className='flex items-center gap-3 relative'>
            <div className='flex flex-col items-end'>
                <span className='text-sm text-text block'>Hello</span>
                <span className='text-[18px] text-white font-bold'>Adnan</span>
            </div>
            <img onClick={() => setIsProfileOpen(!isProfileOpen)} className='w-[48px] h-[48px] rounded-full object-cover cursor-pointer' src='/dashboard/avatar.jpg'></img>
            <div className={`w-[200px] bg-primaryColor absolute right-0 top-[68px] p-2 rounded-2xl flex-col gap-1 ${isProfileOpen ? 'flex' : 'hidden'}`}>
                <Link href="" className='py-2 px-3 flex gap-3 items-center no-underline hover:bg-[#464A57] rounded-lg transition'>
                    <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.16669 3.15385L6.69592 1.78769C6.78518 1.55639 6.94221 1.35743 7.14645 1.21688C7.35069 1.07632 7.59261 1.00073 7.84054 1H8.84977C9.09769 1.00073 9.33963 1.07632 9.54386 1.21688C9.74811 1.35743 9.90513 1.55639 9.99438 1.78769L10.5236 3.15385L12.3205 4.18769L13.7728 3.96615C14.0146 3.93333 14.2608 3.97313 14.48 4.08052C14.6991 4.1879 14.8814 4.35801 15.0036 4.56923L15.4959 5.43077C15.622 5.64535 15.6802 5.89314 15.6626 6.14144C15.645 6.38974 15.5526 6.62687 15.3974 6.82154L14.499 7.96615V10.0338L15.422 11.1785C15.5772 11.3731 15.6697 11.6103 15.6873 11.8586C15.7049 12.1069 15.6466 12.3546 15.5205 12.5692L15.0282 13.4308C14.906 13.642 14.7237 13.8121 14.5046 13.9195C14.2854 14.0268 14.0393 14.0667 13.7974 14.0338L12.3451 13.8123L10.5482 14.8462L10.019 16.2123C9.92974 16.4436 9.77272 16.6426 9.56848 16.7831C9.36424 16.9237 9.12231 16.9993 8.87438 17H7.84054C7.59261 16.9993 7.35069 16.9237 7.14645 16.7831C6.94221 16.6426 6.78518 16.4436 6.69592 16.2123L6.16669 14.8462L4.36977 13.8123L2.91746 14.0338C2.67564 14.0667 2.42951 14.0268 2.21036 13.9195C1.99122 13.8121 1.80894 13.642 1.68669 13.4308L1.19438 12.5692C1.06823 12.3546 1.01011 12.1069 1.02769 11.8586C1.04526 11.6103 1.13772 11.3731 1.29285 11.1785L2.19131 10.0338V7.96615L1.26823 6.82154C1.1131 6.62687 1.02065 6.38974 1.00307 6.14144C0.985497 5.89314 1.04361 5.64535 1.16977 5.43077L1.66208 4.56923C1.78433 4.35801 1.96661 4.1879 2.18574 4.08052C2.40489 3.97313 2.65102 3.93333 2.89285 3.96615L4.34515 4.18769L6.16669 3.15385ZM5.88361 9C5.88361 9.48684 6.02798 9.96276 6.29846 10.3676C6.56894 10.7724 6.95337 11.0879 7.40316 11.2742C7.85296 11.4605 8.34789 11.5092 8.82537 11.4142C9.30286 11.3193 9.74147 11.0848 10.0857 10.7406C10.43 10.3963 10.6644 9.95771 10.7594 9.48022C10.8544 9.00273 10.8056 8.5078 10.6193 8.05801C10.433 7.60822 10.1175 7.22378 9.71271 6.9533C9.30791 6.68283 8.832 6.53846 8.34515 6.53846C7.69232 6.53846 7.06621 6.7978 6.60459 7.25943C6.14296 7.72106 5.88361 8.34716 5.88361 9Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span className='text-white text-lg block'>Settings</span>
                </Link>
                <Link href="" className='py-2 px-3 flex gap-3 items-center no-underline hover:bg-[#C92C2C] rounded-lg transition'>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.0769 13.3077V15.7692C12.0769 16.0956 11.9472 16.4087 11.7164 16.6395C11.4856 16.8703 11.1726 17 10.8462 17H2.23077C1.90434 17 1.5913 16.8703 1.36048 16.6395C1.12967 16.4087 1 16.0956 1 15.7692V2.23077C1 1.90434 1.12967 1.5913 1.36048 1.36048C1.5913 1.12967 1.90434 1 2.23077 1H10.8462C11.1726 1 11.4856 1.12967 11.7164 1.36048C11.9472 1.5913 12.0769 1.90434 12.0769 2.23077V4.69231" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8.38452 9H16.9999" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M14.5386 6.53845L17.0001 8.99999L14.5386 11.4615" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span className='text-white text-lg block'>Log Out</span>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Avatar