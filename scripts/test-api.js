const fetch = require("node-fetch");

const apiKey = "d46598547c9048a0ad7213ccb952dea3";

async function test() {
    console.log(`Using API Key: ${apiKey}`);

    try {
        const url = `https://cdn.builder.io/api/v3/content/comparison?apiKey=${apiKey}&includeDrafts=true`;
        console.log(`Fetching from: ${url}`);

        const res = await fetch(url);
        const data = await res.json();

        console.log(`Found ${data.results?.length || 0} items.`);
        data.results?.forEach(item => {
            console.log(`- ${item.name} (id: ${item.id}, slug: ${item.data?.slug})`);
        });
    } catch (e) {
        console.error("Error:", e);
    }
}

test();
