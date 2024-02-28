function startStream() {
    console.log('presseddd');

    fetch('/start_stream')
        .then(response => response.json())
        .then(data => {
            console.log('Start Stream:', data);
            document.getElementById('videoStream').src = '/video_feed';  
        });
}