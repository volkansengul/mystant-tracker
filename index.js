function mystantTracker(socket) {
    window.mystntsocket = socket;
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://code.mystant.com/tracker.js';
    setTimeout(function(){
        document.getElementsByTagName('head')[0].appendChild(script);
    },5000);
}
module.exports.mystantTracker = mystantTracker;
