const { events } = require("./data.json");

export default function handler(request, response) {
    // const evt = events.filter((ev) => ev.slug === request.query.slug);

    if (request.method === "GET") {
        response.status(200).json(events);
    } else {
        response.setHeader("Allow", ["GET"]);
        response
            .status(405)
            .json({ message: `Method ${request.method} is not allowed` });
    }
}
