
import Link from 'next/link'
import Layout from '@components/Layout'
import Event from '@components/Event'
import { API_URL } from '@config/index'
export default function Home({events}) {
  return (
    <Layout>
      <h1>Upcoming events</h1>
      {events.length === 0 && <h3>
        No events to show</h3>}

        {events.map((evt) =>(
          <Event key={evt.id} evt = {evt}/>
        ))}

        {events.length > 0 && (
          <Link href="/events">
            <a className = "btn-secondary">View all events</a>
          </Link>
        )}
    </Layout>
  )
}

export async function getStaticProps({req, ctx}){
  const res = await fetch(`${API_URL}/events?_sort=date:ASC&_limit=3`)
  const events = await res.json();
  return {
    props:{ events : events},
    revalidate :1
  }
}
