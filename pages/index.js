import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I'm a dog!</p>
        <p>My parents and I live in Denver, Colorado.</p>
        <p>I love my frisbee and chasing squirrels.</p>
        <p>I also have hypothyroidism.</p>
        <p>It made me tired and I gained a lot of weight.</p>
        <p>But my parents give me special medicine everyday and I feel great!</p>
        <div className={utilStyles.singleRow}>
          <Link href="/posts/first-post">
            <a className={utilStyles.normalizedLink}>{`My dad${' '}`}</a>
          </Link>
          <p className>, Kyle Weintraub, is a web developer and built this site with Next.js{' '}</p>
        </div>
      </section>
    </Layout>
  )
}
