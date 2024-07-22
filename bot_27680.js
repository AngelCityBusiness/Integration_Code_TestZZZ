// bot_27680.js

// MAKE SURE TO END YOUR FILE NAME IN ".js" !!
// I recommend a file name like "#####_business_name.js"

(function() {

    
    // Load the chat plugin
    var script = document.createElement('script');
    
    script.src = 'https://app.aminos.ai/js/chat_plugin.js'; // Regular website Universal Script. // Comment out if not using.
    //script.src = 'https://app.aminos.ai/js/chat_plugin_ghl.js'; // GoHighLevel Original Script. // Comment out if not using.
    //script.src = 'https://app.aminos.ai/js/chat_form_plugin.js'; // Inline Website Original Script. // Comment out if not using.
    
    script.setAttribute('data-bot-id', '27680'); // Input Bot ID here by replacing ##### with your bot number.
    document.head.appendChild(script);

    // Add custom CSS styling
    var css = `div.talktext p {
        color: black !important;
        font-family: sans-serif !important;
    }`;
    var style = document.createElement('style');
    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
    document.head.appendChild(style);
    
    //************************************************
    //NEW INTEGRATION CODE: <script src="https://chatbot.angelpro.ai/bot_27680.js"></script><div id="chat_form"></div>
     //MAKE SURE TO ADD: <div id="chat_form"></div>
     //WITHIN THE HTML BLOCK IF THE FILE IS FOR IFRAME EMBED

    //Notice the Integration code does NOT include the repository name. The repo name is not necessary for the integration code.
    //************************************************
})();
