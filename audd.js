require('dotenv').config();

const apiToken = process.env.AudD_API_KEY;   // '4bd31266e1b1b46438919ff3291f73a7';
const callbackUrl = 'https://yourwebsite.com/callbacks_handler'; // Replace with your callback URL
const streamUrl = 'https://edge1.radyotvonline.net/shoutcast/play/loungefm'; // Replace with your stream URL
const radioId = 1; // Any integer to identify the stream

// Set the callback URL
async function setCallbackUrl() {
    const response = await fetch('https://api.audd.io/setCallbackUrl/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            api_token: apiToken,
            url: callbackUrl
        })
    });
    return response.json();
}

// Add the audio stream
async function addStream() {
    const response = await fetch('https://api.audd.io/addStream/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            api_token: apiToken,
            url: streamUrl,
            radio_id: radioId
        })
    });
    return response.json();
}

// Run the functions
(async () => {
    const callbackResponse = await setCallbackUrl();
    console.log('Set Callback URL Response:', callbackResponse);
    
    const addStreamResponse = await addStream();
    console.log('Add Stream Response:', addStreamResponse);
})();
