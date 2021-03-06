import Layout from '@components/Layout'
import Pagination from '@components/Pagination'
import Event from '@components/Event'
import { API_URL } from '@config/index'

const PER_PAGE = 2;
export default function EventsPage({ events, total, page }) {
  return (
    <Layout>
      <h1>Events</h1>
      {events.length === 0 && <h3>
        No events to show</h3>}

      {events.map((evt) => (
        <Event key={evt.id} evt={evt} />
      ))}
      <Pagination 
      page={page}
      total={total}
      perPage = {PER_PAGE}
      />
    </Layout>
  )
}

export async function getServerSideProps({ query: {
  page = 1
} }) {
  // Calculate start page
  // Convert to numbers
  let start = +page === 1 ? 0 : ((+page - 1) * PER_PAGE)
  // Fetch event counts 
  const totalRes = await fetch(`${API_URL}/events/count`)
  const total = await totalRes.json();
  // Fetch events
  const res = await fetch(`${API_URL}/events?_sort=date:ASC&_limit=${PER_PAGE}&_start=${start}`)
  const events = await res.json();

  return {
    props: { events, page: +page, total }
  }
}
