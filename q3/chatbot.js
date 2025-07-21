function getResponse(message) {
    const msg = message.toLowerCase().trim();

    switch (true) {
        case msg.includes("hello") || msg.includes("heey"):
            return "Hi there! How can I assist you today?";

        case msg.includes("how are you"):
            return "I'm just a virtual assistant, but I'm functioning as expected!";

        case msg.includes("bye") || msg.includes("see you"):
            return "Farewell! Have a wonderful day!";

        case msg.includes("help") :
            return "Sure, I'm here to help. What do you need assistance with?";

        default:
            return "I'm sorry, I didn't quite catch that. Could you rephrase?";
    }
}

module.exports = getResponse;