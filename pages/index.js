
import Layout from '../components/layout'
import { getAllPostsWithSlug} from '../docs/lib/api'
import Deal from '../components/deal'

export default function Index({ allDeals: { edges }, preview }) {

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
    revalidate: 1,
  }
}
