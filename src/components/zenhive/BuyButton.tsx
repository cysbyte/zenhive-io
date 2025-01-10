import { useDialogContext } from '@/providers/DialogProvider'
import React from 'react'

const BuyButton = () => {
    const { setShowGetInTouchDialog } = useDialogContext()
    const handleBuy = () => {
        setShowGetInTouchDialog(true)
    }
    return (
        <button className='hidden md:block bg-gradient-to-r from-[#C0EE02] to-[#C0EE02] rounded-xl py-3 md:py-3.5 px-[4.5rem] md:px-20 mt-4 font-pingFangSCRegular font-bold text-black text-xl relative z-50 cursor-pointer'
            onClick={handleBuy}
        >Buy Now</button>
    )
}

export default React.memo(BuyButton)