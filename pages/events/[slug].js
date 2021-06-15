import { useRouter } from 'next/router'
import Layout from '@components/Layout'
import { API_URL } from '@config/index'
export default function EventPage({ evt }) {
  const router = useRouter();
  return (
    <Layout>
      <h1>{evt.name}</h1>
    </Layout>
  )
}


export async function getStaticPaths(){
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();
  const paths = events.map((evt) => ({
    params: {slug: evt.slug}
  }))

  return {
    paths,
    // Shows not found if path is not generated at build time
    // Setting true makes a new request and gets that path
    fallback: true
  }
}

// Since we are mapping it into params in static paths
// Hence the name here has to be the same
export async function getStaticProps({ params: 
  { slug } }) {
  const res = await fetch(`${API_URL}/api/events/${slug}`)

  const events = await res.json()
  return {
    props:{
      evt: events[0]
    },
    revalidate: 1
  }
}

// export async function getServerSideProps({ query: 
//   { slug } }) {
//   const res = await fetch(`${API_URL}/api/events/${slug}`)

//   const events = await res.json()
//   return {
//     props:{
//       evt: events[0]
//     }
//   }
// }
