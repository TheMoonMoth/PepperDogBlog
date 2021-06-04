import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

import Image from 'next/Image'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>Pepper Dog!</h2>
      {/* <Image
        src="/images/pepper_profile.jpg"
        height={200}
        width={200}
        layout="responsive"
        alt="pepper profile picture"
      /> */}
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}