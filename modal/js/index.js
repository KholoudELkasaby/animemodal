var imgList = Array.from(document.querySelectorAll('.item img')) ;
var lightBoxContainer = document.getElementById('lightBoxContainer');
var arrow = document.getElementById('close');




var currentSlideIndex=0;
for(var i=0;i<imgList.length;i++)
{
    imgList[i].addEventListener('click', function(eventInfo){

        lightBoxContainer.style.display='flex';
        var currentSlideIndex = imgList.indexOf(eventInfo.target);
        console.log(currentSlideIndex );
        var imgSrc = eventInfo.target.getAttribute('src');
        lightBoxContainer.firstElementChild.style.backgroundImage = `url(${imgSrc})`
    })
}


function slide(step)
{
    currentSlideIndex = currentSlideIndex + step ;
        if (currentSlideIndex == imgList.length) {
        currentSlideIndex = 0 ;
    }
        if(currentSlideIndex < 0)
    {
        currentSlideIndex = imgList.length -1;
    }
     var imgSrc = imgList[currentSlideIndex].getAttribute('src');
     lightBoxContainer.firstElementChild.style.backgroundImage = `url(${imgSrc})`
}

// function nextSlide(){
//     currentSlideIndex++;
//     console.log(currentSlideIndex);
//     if (currentSlideIndex == imgList.length) {
//         currentSlideIndex = 0 ;
//     }
//      var imgSrc = imgList[currentSlideIndex].getAttribute('src');
//      lightBoxContainer.firstElementChild.style.backgroundImage = `url(${imgSrc})`
// }


// function prevSlide(){
//     currentSlideIndex--;
//     console.log(currentSlideIndex);
//     if(currentSlideIndex < 0)
//     {
//         currentSlideIndex = imgList.length -1;
//     }
//      var imgSrc = imgList[currentSlideIndex].getAttribute('src');
//      lightBoxContainer.firstElementChild.style.backgroundImage = `url(${imgSrc})`
// }


arrow.addEventListener('click',function(){
    lightBoxContainer.style.display='none';
})
arrow.nextElementSibling.addEventListener('click' ,function(){slide(1)});
arrow.previousElementSibling.addEventListener('click' ,function(){slide(-1)});
