const { builder } = require("@builder.io/sdk");

const apiKey = "d46598547c9048a0ad7213ccb952dea3";
console.log("Using API Key (from MCP):", apiKey);

builder.init(apiKey);

async function test() {
    try {
        console.log("Fetching all items in 'comparison' model...");
        const all = await builder.getAll("comparison", {
            options: { includeDrafts: true }
        });

        console.log("Total entries found:", all.length);
        all.forEach(c => {
            console.log(`- ${c.name} | slug: ${c.data?.slug} | id: ${c.id}`);
        });
    } catch (e) {
        console.error("Error:", e);
    }
}

test();
