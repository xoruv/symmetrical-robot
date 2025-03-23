import Head from 'next/head';
import { useEffect, useState } from 'react';
import { GridPattern } from '@/components/GridPattern';

export default function Home() {
    const [pageLoad, setPageLoad] = useState(false);
    const [search, setSearch] = useState('')

    useEffect(() => {
        setPageLoad(true)
    }, [])

    function handleInput(e: any) {
        setSearch(e.target.value.replaceAll(' ', '+'))
    }

    function handleEnter(e: any) {
        if (e.key === 'Enter') {
            window.open(`https://duckduckgo.com/?t=lm&q=${search}&ia=web`, '_blank')
            setSearch('')
        }
    }

    return (
        <>
            <main className='flex h-screen flex-col justify-center overflow-x-hidden'>
                <GridPattern
                    width={50}
                    height={50}
                    x={-1}
                    y={-1}
                    className='z-[-5]'
                />
                <div className='max-w-5xl w-full mx-auto'>
                    <h1 className={`${pageLoad ? 'animate-fade-in-top' : 'opacity-0'} font-bold sm:text-6xl text-4xl text-center`}>
                        Welcome back, xoru 👋
                    </h1>
                    <div className={`${pageLoad ? 'animate-fade-in-top' : 'opacity-0'} flex flex-col gap-4 items-center mt-8`}>
                        {/* ... existing code ... */}
                    </div>
                </div>
            </main>
        </>
    )
}