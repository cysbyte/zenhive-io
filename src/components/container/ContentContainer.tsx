import { ReactNode } from 'react';

const ContentContainer = ({children}: {children: ReactNode}) => {
    return (
        <section className={`w-[1280px] mx-auto px-0 bg-transparent`}>
          {children}
        </section>
      );
}

export default ContentContainer