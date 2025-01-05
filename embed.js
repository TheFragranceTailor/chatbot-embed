(function(d, t) {
    var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
    v.onload = function() {
        var chatContainer = document.createElement('div');
        chatContainer.id = 'chat-container';
        document.body.appendChild(chatContainer);

        var iframe = document.createElement('iframe');
        iframe.src = 'https://peaceful-kringle-bc1035.netlify.app/'; // Replace with your deployed chatbot URL
        iframe.style.border = 'none';
        iframe.style.width = '400px';
        iframe.style.height = '600px';
        iframe.style.position = 'fixed';
        iframe.style.bottom = '80px';
        iframe.style.right = '20px';
        iframe.style.zIndex = '1000';
        iframe.style.display = 'none';
        chatContainer.appendChild(iframe);

        var fab = document.createElement('button');
        fab.innerHTML = '<img src="https://your-icon-url" alt="Chat" style="width: 30px; height: 30px;">'; // Replace with your chat icon URL
        fab.style.position = 'fixed';
        fab.style.bottom = '20px';
        fab.style.right = '20px';
        fab.style.width = '60px';
        fab.style.height = '60px';
        fab.style.backgroundColor = '#007bff';
        fab.style.borderRadius = '50%';
        fab.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
        fab.style.display = 'flex';
        fab.style.justifyContent = 'center';
        fab.style.alignItems = 'center';
        fab.style.cursor = 'pointer';
        fab.style.zIndex = '1000';
        fab.onclick = function() {
            iframe.style.display = iframe.style.display === 'none' ? 'block' : 'none';
        };
        document.body.appendChild(fab);
    };
    v.src = 'https://your-cdn-url/embed.js'; // Replace with the URL where you host this script
    v.type = 'text/javascript';
    s.parentNode.insertBefore(v, s);
})(document, 'script');