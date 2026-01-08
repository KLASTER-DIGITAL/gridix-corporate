const fetch = require("node-fetch");

const apiKey = "d46598547c9048a0ad7213ccb952dea3";

async function test() {
    try {
        const res = await fetch(`https://cdn.builder.io/api/v3/models?apiKey=${apiKey}`);
        const data = await res.json();
        console.log("Models in primary space:", data.models?.map(m => m.name));
    } catch (e) {
        console.error(e);
    }
}

test();
