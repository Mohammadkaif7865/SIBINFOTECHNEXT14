"use client"
import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image';
const NotFound = () => {
  const router = useRouter()

  useEffect(() => {
    const BackRouting = setTimeout(() => {
      router.replace('/') // Use router.replace() to redirect to homepage
    }, 3000)

    return () => clearTimeout(BackRouting)

  }, [])

  return (
    <div>
      <section className="border-top pt-4">
        <div className="containerFull">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="center404">
                <div className="px-lg-4">
                  <Image src="/assets/images/404-blue.png" className="w-100" alt="Not Found" layout='responsive' width={1920} height={1080}/>
                </div>
                <h1 className="heading fontWeight700">Page not found</h1>
                <p className="mt-3">Uh oh, we're sorry. The page you requested cannot be found,</p>
                <p>Please go back to the homepage.</p>
                <Link href="/" className="btnThemeRed mt-3">
                  Go Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NotFound;
