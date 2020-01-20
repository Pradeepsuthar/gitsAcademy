let submitBtn = document.getElementById('submit');

submitBtn.onclick = function () {
    setTimeout(function () {
        document.getElementById('alrtmsg').style.display='block';
    }, 1000);
    
    return false;
};

function showVideoLecture() {
    if(document.getElementById('videoLectureContainer').style.display='none')
        document.getElementById('videoLectureContainer').style.display='block';    
        document.getElementById('container2').style.display='none';    

};