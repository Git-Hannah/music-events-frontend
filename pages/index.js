import Layout from "@/components/Layout";
import EventItem from "@/components/EventItem";
import Link from "next/link";
import { API_URL } from "@/config/index";

export default function HomePage({ events }) {
    //*...and catch it in here as a prop so it arrives on the client side
    return (
        <Layout>
            <h1>Upcoming Events</h1>
            {events.length === 0 && <h3>No events to show</h3>}

            {events.map((evt) => (
                <EventItem key={evt.id} evt={evt} />
            ))}

            {events.length > 0 && (
                <Link href="/events">
                    <a className="btn-secondary">View All Events</a>
                </Link>
            )}
        </Layout>
    );
}

// getServerSideProps fetches data upon each request, now from api folder, later from Strapi

export async function getStaticProps() {
    // getServerSideProps is running this every time we get to the page
    // getStaticProps is working as well, we have to add a revalidate
    const res = await fetch(`${API_URL}/api/events`);
    const events = await res.json();

    return {
        // This is running server side, so we pass in here events...*
        props: { events: events.slice(0, 3) },
        revalidate: 1, //revalidates every second to get possible event updates
    };
}
