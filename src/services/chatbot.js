/*
Import
*/
// NodeJS
import sapcai from ('sapcai').default;
// .env
const sapcai_token = process.env.CHATBOT_TOKEN;
//

/*
Chatbot configuration
*/
const build = new sapcai.build(sapcai_token, 'fr');
//

/*
Service definition
*/
const askBot = (message) => {
    build.dialog({ type: 'text', content: message }, { conversationId: '' })
    .then(res => console.log(res))
    .catch(error => console.log(error));
}
//

/*
Export
*/
module.exports = {
    askBot,
}
//