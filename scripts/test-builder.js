const { builder } = require("@builder.io/sdk");

const apiKey = "d24e7a17fe514db4ab5db810e4e1aee4";
console.log("Using API Key:", apiKey);

builder.init(apiKey);

async function test() {
    try {
        const slug = "gridix-vs-flatris";
        console.log("Searching for slug:", slug);

        const content = await builder.get("comparison", {
            query: {
                "data.slug": slug
            },
            options: {
                includeDrafts: true
            }
        }).toPromise();

        if (content) {
            console.log("Success! Found content:", content.name);
            console.log("Data slug:", content.data.slug);
            console.log("Status:", content.published);
        } else {
            console.log("Fail! No content found by query. Fetching all items...");
            const all = await builder.getAll("comparison", {
                options: { includeDrafts: true }
            });
            console.log("Total entries in 'comparison' model:", all.length);
            all.forEach(c => {
                console.log(`- Name: ${c.name}`);
                console.log(`  Slug: ${c.data?.slug}`);
                console.log(`  Status: ${c.published}`);
            });
        }
    } catch (e) {
        console.error("Error:", e);
    }
}

test();
