import React, { useEffect, useRef } from 'react'
import logo from '@/assets/zenhive/header/logo.svg'
import close from '@/assets/home/mobile-menu/close.svg'

interface MenuMobileProps {
    onClose: () => void;
    onOk: () => void;
}

const ZenHiveMenu = (props: MenuMobileProps) => {

    const items= [
        {
            id: 1,
            name: 'azen',
            link: '/',
        },
    ]

    const handleClose=()=>{
        closeDialog()
    }

    const dialogRef = useRef<null | HTMLDialogElement>(null);

    useEffect(() => {
        const dialog = dialogRef.current;
    
        // Prevent auto-focus
        const handleFocus = (e: FocusEvent) => e.preventDefault();
        dialog?.addEventListener('focus', handleFocus);
    
        dialog?.showModal();
    
        return () => {
          dialog?.removeEventListener('focus', handleFocus);
        };
      }, []);

    const closeDialog = () => {
        dialogRef.current?.close();
        props.onClose();
    };

    return (
        <dialog ref={dialogRef} className='className="bg-[#0F1110] fixed inset-0 w-screen h-screen top-0 left-0 z-50 outline-none overflow-y-auto hide-scrollbar flex flex-col justify-start items-stretch"'>
        <div className='w-full flex justify-between items-center px-4 py-10'>
            <img src={logo} alt="" />
            <img className='cursor-pointer' src={close} onClick={handleClose} alt="" />
        </div>
        <div className='px-14 flex flex-col gap-10 justify-start items-start'>
            {
                items.map((item)=>(
                    <a tabIndex={-1} aria-hidden="true" className='text-sm text-white cursor-pointer' key={item.id} href={item.link}>{item.name}</a>
                ))
            }
        </div>

    </dialog>
    )
}

export default React.memo(ZenHiveMenu)