const { builder } = require("@builder.io/sdk");

const keys = {
    primary: "d24e7a17fe514db4ab5db810e4e1aee4",
    mcp: "d46598547c9048a0ad7213ccb952dea3"
};

async function checkSpace(name, key) {
    console.log(`\n--- Checking ${name} space (${key}) ---`);
    const b = require("@builder.io/sdk").builder;
    b.init(key);
    try {
        const models = await b.getAll("page", { fields: "name", limit: 1 }); // Just to see if it works
        console.log(`Successfully connected to ${name} space.`);

        // Try to find comparison model specifically
        const comparisons = await b.getAll("comparison", { options: { includeDrafts: true } });
        console.log(`Found ${comparisons.length} items in 'comparison' model.`);
        comparisons.forEach(c => console.log(`- ${c.name} (${c.published})`));
    } catch (e) {
        console.log(`Failed to fetch from ${name} space or model doesn't exist.`);
    }
}

async function run() {
    await checkSpace("Primary", keys.primary);
    await checkSpace("MCP", keys.mcp);
}

run();
