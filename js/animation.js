var animation = bodymovin.loadAnimation({
    container: document.getElementById('mouse-arrows'), // Required
    path: 'animations/mouse.json', // Required
    renderer: 'svg', // Required
    loop: true, // Optional
    autoplay: true, // Optional
})