/*
Chatbot configuration
*/
const request_token = 'b580b2fc58b71aa3de4c82fd6b66861a';
//

/*
Service definition
*/
const sendBotRequest = (message_content, conversation_id, language) => {
    
    return new Promise((resolve, reject) => {

        fetch('https://api.cai.tools.sap/build/v1/dialog', {
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
        })
        .then(res => res.json())
        .then(json => {
            if(json.results !== null) {
                resolve(json.results.messages);
            }
        })
        .catch(error => {
            console.log(error);
            reject(error);
        })

    });

}
//

/*
Export
*/
module.exports = {
    sendBotRequest,
}
//