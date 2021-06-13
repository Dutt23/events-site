
import Head from 'next/head'
import Layout from '@components/Layout'
import { API_URL } from '@config/index'
export default function Home({events}) {
  return (
    <Layout>
      <h1>Upcoming events</h1>
    </Layout>
  )
}

export async function getStaticProps({req, ctx}){
  const res = await fetch(`${API_URL}/api/events`)
  const events = await res.json();
  return {
    props:{events},
    revalidate :5
  }
}
