import Head from 'next/head'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../docs/lib/api'
import { CMS_NAME } from '../docs/lib/constants'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../docs/lib/api'
import Deal from '../components/deal'

export default function Index({ allDeals: { edges }, preview }) {
  const heroPost = edges[0]?.node
  const morePosts = edges.slice(1)

  console.log(edges)
  return (
    <>
      <Layout preview={preview}>
        <div className="cards-container">
          {edges.map((deal, idx) => {
            return <Deal dealData={deal.node.deal_content} key={idx}/>
          })}
        </div>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allDeals = await getAllPostsWithSlug()
  return {
    props: { allDeals, preview },
  }
}
