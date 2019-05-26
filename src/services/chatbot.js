/*
Chatbot configuration
*/
const request_token = 'b580b2fc58b71aa3de4c82fd6b66861a';
//

/*
Service definition
*/
const generateConversationId = (id_length) => {

    let conversation_id = '';
    const id_characters = 'ABCDEFGHIJKLM0123456789NOPQRSTUVWXYZ01234abcdefghijklm56789nopqrstuvwxyz0123456789';
    const id_characters_length = id_characters.length;

    for(let i = 0 ; i < id_length ; i++) {
        conversation_id += id_characters.charAt(Math.floor(Math.random() * id_characters_length));
    }

    return conversation_id;

}

const sendBotRequest = async (message_content, conversation_id, language) => {

    let response = await fetch('https://api.cai.tools.sap/build/v1/dialog', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Token ${request_token}`
        },
        body: JSON.stringify({
            message: {
                type: 'text',
                content: message_content
            },
            conversation_id: conversation_id,
            language: language
        })
    });

    let json = await response.json();

    if(json.results !== null)
        return json.results.messages;

    return null;

}
//

/*
Export
*/
module.exports = {
    generateConversationId,
    sendBotRequest,
}
//