const { events } = require("./data.json");

export default function handler(request, response) {
    // evt is the variable for a single event,
    // not to be confused with the pages/events or api/events

    const evt = events.filter((ev) => ev.slug === request.query.slug);

    if (request.method === "GET") {
        response.status(200).json(evt);
    } else {
        response.setHeader("Allow", ["GET"]);
        response
            .status(405)
            .json({ message: `Method ${request.method} is not allowed` });
    }
}
