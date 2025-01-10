import React, { useEffect, useRef } from 'react'
import close from '@/assets/home/mobile-menu/close.svg'
import icon1 from '@/assets/zenhive/get-in-touch/icon1.svg'
import icon2 from '@/assets/zenhive/get-in-touch/icon2.svg'
import line from '@/assets/zenhive/get-in-touch/line.svg'

interface GetInTouchDialogProps {
    onClose: () => void;
    onOk: () => void;
}

const GetInTouchDialog = (props: GetInTouchDialogProps) => {

    const handleClose = () => {
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

    const connects = [
        {
            id: 1,
            name: 'sales@azenprotocol.io',
            icon: icon1,
        },
        {
            id: 2,
            name: '@azenchief',
            icon: icon2,
        }
    ]

    return (
        <dialog ref={dialogRef} className="bg-[#0D0D0D] fixed w-[630px] h-[656px] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-10  backdrop:bg-black/80 p-12 rounded-3xl">
            <div className='w-full flex justify-between items-center px-0 py-0'>
                <h3 className='text-[#C0EE02] text-[28px] leading-[40px] font-pingFangSCRegular font-semibold'>Get in Touch</h3>
                <img className='cursor-pointer' src={close} onClick={handleClose} alt="" />
            </div>
            <div>
                <p className='font-pingFangSCLight text-base text-white font-[300] mt-10'>If you’d like to ship a physical ZenHive device to your address and host on your own, please contact our sales representatives, they will help make your purchase swift and smooth.</p>
            </div>
            <div className='relative w-full mt-8'>
                <img className='absolute left-0 bottom-0' src={line} alt="" />
                {
                    connects.map((item) => (
                        <div className='flex justify-start items-center gap-8 px-0 pb-8' key={item.id}>
                            <img src={item.icon} alt="" />
                            <p className='font-pingFangSCLight text-base text-white'>{item.name}</p>
                        </div>
                    ))
                }
            </div>


        </dialog>
    )
}

export default React.memo(GetInTouchDialog)