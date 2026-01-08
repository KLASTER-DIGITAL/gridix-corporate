const { builder } = require("@builder.io/sdk");

const apiKey = "d46598547c9048a0ad7213ccb952dea3";
builder.init(apiKey);

async function test() {
    console.log(`Using API Key: ${apiKey}`);

    try {
        const slug = "gridix-vs-flatris";
        console.log(`Fetching '${slug}' with includeDrafts: true...`);

        const content = await builder.get("comparison", {
            query: {
                "data.slug": slug
            },
            options: {
                includeDrafts: true
            }
        }).toPromise();

        if (content) {
            console.log("SUCCESS! Found content:", content.name);
            console.log("Draft status:", content.published);
        } else {
            console.log("FAILED to find content by slug.");

            console.log("Fetching ALL items with includeDrafts: true...");
            const all = await builder.getAll("comparison", {
                options: {
                    includeDrafts: true
                }
            });
            console.log(`Found ${all.length} items total (including drafts).`);
            all.forEach(item => {
                console.log(`- ${item.name} (id: ${item.id}, slug: ${item.data?.slug})`);
            });
        }
    } catch (e) {
        console.error("Error:", e);
    }
}

test();
