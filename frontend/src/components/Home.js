import React from 'react';
import { Helmet } from 'react-helmet';


const Home = () => {
  return (
    <div>
        <Helmet>   
        <link
          rel="stylesheet"
          href="https://cdn.oaistatic.com/_next/static/css/27dc37929106858f.css"
        />
      </Helmet>
      <body className="antialiased" style={{ backgroundColor: 'rgba(0,0,46)' }}>
        <div id="__next">
        <div className="flex min-h-full w-screen flex-col sm:supports-[min-height:100dvh]:min-h-[100dvh] md:grid md:grid-cols-2 lg:grid-cols-[60%_40%]">
                <div className="relative hidden flex-1 flex-col justify-center px-5 pt-8 text-[#FE7600] dark:text-[#D292FF] md:flex md:px-6 md:py-[22px] lg:px-8">
                    <nav className="left-0 top-8 flex w-full px-6 sm:absolute md:top-[22px] md:px-6 lg:px-8">
                        <h1>
                            <div className="flex cursor-default items-center text-[20px] font-bold leading-none lg:text-[22px]">
                                <div>CSEBOT <span className="font-circle">●</span></div>
                            </div>
                        </h1>
                    </nav>
                <div className="flex flex-col text-[32px] leading-[1.2] md:text-[40px]" aria-hidden="false">

        <div className="absolute left-0 top-1/2 flex w-full flex-col px-5 transition-[transform,opacity] duration-500 md:pl-6 md:pr-8 lg:pl-8 lg:pr-10 opacity-100 translate-y-[calc(-50%-1em)] delay-[500ms]">
            <div className="relative font-bold">Sort out your</div>
            <div className="relative">
                <div className="absolute left-0 top-0 max-w-[650px] transition-opacity duration-300">
                    <span className="inline transition-opacity duration-300"> CSE-related</span>
                    <span className="inline transition-opacity duration-300"> matters</span>
                    <span className="inline transition-opacity duration-300"> with</span>
                    <span className="inline transition-opacity duration-300"> ease</span>
                    <span className="inline-block font-circle delay-[300ms]"><span> </span>●</span>
                </div>
                <div className="absolute left-0 top-0 max-w-[650px] transition-opacity duration-300">
                    <span className="inline transition-opacity duration-300 opacity-0">a</span>
                    <span className="inline transition-opacity duration-300 opacity-0"> Python</span>
                    <span className="inline transition-opacity duration-300 opacity-0"> script</span>
                    <span className="inline transition-opacity duration-300 opacity-0"> autom</span>
                    <span className="inline transition-opacity duration-300 opacity-0">ating</span>
                    <span className="inline transition-opacity duration-300 opacity-0"> daily</span>
                    <span className="inline transition-opacity duration-300 opacity-0"> reports</span>
                    <span className="inline-block font-circle delay-[300ms] scale-0 transition-transform duration-300"><span> </span>●</span>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="relative flex grow flex-col items-center justify-between bg-white px-5 py-8 text-black dark:bg-black dark:text-white sm:rounded-t-[30px] md:rounded-none md:px-6">
    <nav className="flex w-full justify-start px-6 pb-8 md:hidden md:px-6 lg:px-8">
        <h1>
            <div className="flex cursor-default items-center text-[20px] font-bold leading-none lg:text-[22px]">
                <div>CSEBOT <span className="font-circle">●</span></div>
            </div>
        </h1>
    </nav>
    <div className="relative flex w-full grow flex-col items-center justify-center">
        <h2 className="text-center text-[20px] leading-[1.2] md:text-[32px] md:leading-8">Get started</h2>
        <div className="mt-5 w-full max-w-[440px]">
            <div className="grid gap-x-3 gap-y-2 sm:grid-cols-2 sm:gap-y-0">
                <button className="relative flex h-12 items-center justify-center rounded-md text-center text-base font-medium bg-[#3C46FF] text-[#fff] hover:bg-[#0000FF]" data-testid="login-button">
                    <div className="relative -top-[1px]"><a href="/login">LogIn</a></div>
                </button>
                    <button className="relative flex h-12 items-center justify-center rounded-md text-center text-base font-medium bg-[#3C46FF] text-[#fff] hover:bg-[#0000FF]">
                        <div className="relative -top-[1px]"><a href="/signup">SignUp</a></div>
                    </button>
                </div>
            </div>
        </div>
        <div className="mt-10 flex flex-col justify-center ">
            <div className="py-3 text-xs">
                <a href="#" target="_blank" className="mx-3 text-gray-500" rel="noreferrer">Terms of use</a>
                <span className="text-gray-600">|</span>
                <a href="#" target="_blank" className="mx-3 text-gray-500" rel="noreferrer">Privacy policy</a>
            </div>
        </div>
    </div>
</div>
<iframe
        height="1"
        width="1"
        style={{
          position: 'absolute',
          top: '0px',
          left: '0px',
          border: 'none',
          visibility: 'hidden',
        }}
      ></iframe>
      <div>
        <p
          aria-live="assertive"
          id="__next-route-announcer__"
          role="alert"
          style={{
            border: '0px',
            clip: 'rect(0px, 0px, 0px, 0px)',
            height: '1px',
            margin: '-1px',
            overflow: 'hidden',
            padding: '0px',
            position: 'absolute',
            top: '0px',
            width: '1px',
            whiteSpace: 'nowrap',
            overflowWrap: 'normal',
          }}
        ></p>
      </div>
      <div portal-container="">
        <span className="pointer-events-none fixed inset-0 z-[60] mx-auto my-2 flex max-w-[560px] flex-col items-stretch justify-start md:pb-5"></span>
      </div>
</div>
</body>
</div>
  );
};

export default Home;
