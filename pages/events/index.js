
import Head from 'next/head'
import Layout from '@components/Layout'
import Event from '@components/Event'
import { API_URL } from '@config/index'
export default function EventsPage({events}) {
  return (
    <Layout>
      <h1>Events</h1>
      {events.length === 0 && <h3>
        No events to show</h3>}

        {events.map((evt) =>(
          <Event key={evt.id} evt = {evt}/>
        ))}
    </Layout>
  )
}

export async function getStaticProps({req, ctx}){
  const res = await fetch(`${API_URL}/api/events`)
  const events = await res.json();
  return {
    props:{events},
    revalidate :1
  }
}
