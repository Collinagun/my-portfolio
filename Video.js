var MyVideo=document.getElementById("video"); // Refers to id="video"
function playpause()
{
    if(MyVideo.paused)
        MyVideo.play();
    else MyVideo.pause();
}