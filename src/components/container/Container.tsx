import { ReactNode } from 'react';

const Container = ({children}: {children: ReactNode}) => {
    return (
        <section className={`bg-[#0F1110] ${import.meta.env.VITE_NODE_ENV === 'development' ? 'max-w-[1920px]':'max-w-[1920px]'} mx-auto px-0 `}>
          {children}
        </section>
      );
}

export default Container