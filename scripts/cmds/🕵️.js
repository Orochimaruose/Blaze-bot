 module.exports = {
    config: {
        name: "🕵️",
        version: "1.0",
        author: "𝗯𝗹𝗮𝘇𝗲 𝗻𝗼𝘃𝗮",
        countDown: 5,
        role: 0,
        shortDescription: "commande 🕵️",
        longDescription: "commande O🕵️k",
        category: "reply",
    },
    onStart: async function(){}, 
    onChat: async function({
        event,
        message,
        getLang
    }) {
        if (event.body && event.body.toLowerCase() == "🕵️") return message.reply("🕵️ 𝘀𝗶 𝘁𝘂 𝘂𝘁𝗶𝗹𝗶𝘀𝗲́ 𝗲𝗻𝗰𝗼𝗿𝗲 𝗰𝗲𝘁𝘁𝗲 𝗳𝗼𝗻𝗰𝘁𝗶𝗼𝗻 𝗷𝗲 𝘁𝗲 𝗽𝗿𝗼𝗺𝗲𝘁 𝗱𝗲 𝗺𝗼𝘂𝗴𝗼𝘂 𝘁𝗮 𝗺𝗲𝗿𝗲😒");
    }
}
