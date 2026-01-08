const { builder } = require("@builder.io/sdk");

const key = "483c7b9d733242189524cac06e748d77";
builder.init(key);

async function test() {
    const s = await builder.get("site-settings").toPromise();
    console.log("Site Settings:", s ? s.name : "Not found");
}

test();
