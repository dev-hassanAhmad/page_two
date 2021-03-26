var diff=0;
var index = 0;
var time = 0;
var spreaded=false;
var reset=true;

var cardArr=[".card-1",".card-2",".card-3",".card-4",".card-5",".card-6",".card-7"]
cardArr.reverse()
$(document).ready(function(){
    $(".card").each(function(e) {
        e=e+1
        var i=".card-"+e
        
        $(i).animate({left:diff+"px"});
        // console.log(i)
        diff=diff+13;
        
      });
})

$(".shuffleButton").click(function(){
    
    if (spreaded==true) {
        
    }
    else{
        if($(window).width() < 460)
        {
            $(".card").each(function(e) {
                e=e+1
                var i=".card-"+e
                
                $(i).animate({left:"0px"});});
        
                for(var j, x, i = cardArr.length; i; j = parseInt(Math.random() * i), x = cardArr[--i], cardArr[i] = cardArr[j], cardArr[j] = x);
                // console.log(cardArr)
                index++
                $(cardArr[2]).animate({ 'margin-left': '125px' }, 600);
                $(cardArr[2]).animate({ 'margin-left': '0px','z-index': index }, 400)
                index++
        
                $(cardArr[1]).delay(1000).animate({ 'margin-left': '125px' }, 500);
                $(cardArr[1]).animate({ 'margin-left': '0px','z-index': index }, 400);
                index++
        
                $(cardArr[0]).delay(1900).animate({ 'margin-left': '125px' }, 500);
                $(cardArr[0]).animate({ 'margin-left': '0px','z-index': index}, 400);
                console.log(cardArr)
                spreaded=false;
                reset=false;

        }
        else{

        $(".card").each(function(e) {
        e=e+1
        var i=".card-"+e
        
        $(i).animate({left:"0px"});});

        for(var j, x, i = cardArr.length; i; j = parseInt(Math.random() * i), x = cardArr[--i], cardArr[i] = cardArr[j], cardArr[j] = x);
        // console.log(cardArr)
        index++
        $(cardArr[2]).animate({ 'margin-left': '230px' }, 600);
        $(cardArr[2]).animate({ 'margin-left': '0px','z-index': index }, 400)
        index++

        $(cardArr[1]).delay(1000).animate({ 'margin-left': '230px' }, 500);
        $(cardArr[1]).animate({ 'margin-left': '0px','z-index': index }, 400);
        index++

        $(cardArr[0]).delay(1900).animate({ 'margin-left': '230px' }, 500);
        $(cardArr[0]).animate({ 'margin-left': '0px','z-index': index}, 400);
        console.log(cardArr)
        spreaded=false;
        reset=false;
        }

}
})
console.log(cardArr)

$(".card").click(function(){
    console.log("spread")
    if($(window).width() < 460)
{
    var dist=200;
    $(cardArr[0]).animate({ 'left':  dist, 'z-index':'7' }, 500)
    dist=dist-30
    $(cardArr[1]).animate({ 'left':  dist , 'z-index':'6'}, 500)
    dist=dist-30
    $(cardArr[2]).animate({ 'left':  dist , 'z-index':'5'}, 500)
    dist=dist-30
    $(cardArr[3]).animate({ 'left':  dist, 'z-index':'4' }, 500)
    dist=dist-30
    $(cardArr[4]).animate({ 'left':  dist, 'z-index':'3' }, 500)
    dist=dist-30
    $(cardArr[5]).animate({ 'left': dist, 'z-index':'2' }, 500)
    dist=dist-30
    $(cardArr[6]).animate({ 'left': dist, 'z-index':'1' }, 500)
    
    spreaded=true;
    reset=false;
   
} else {
   

    // <---------------------To Spread---------------->
    var dist=300;
    $(cardArr[0]).animate({ 'left':  dist, 'z-index':'7' }, 500)
    dist=dist-50
    $(cardArr[1]).animate({ 'left':  dist , 'z-index':'6'}, 500)
    dist=dist-50
    $(cardArr[2]).animate({ 'left':  dist , 'z-index':'5'}, 500)
    dist=dist-50
    $(cardArr[3]).animate({ 'left':  dist, 'z-index':'4' }, 500)
    dist=dist-50
    $(cardArr[4]).animate({ 'left':  dist, 'z-index':'3' }, 500)
    dist=dist-50
    $(cardArr[5]).animate({ 'left': dist, 'z-index':'2' }, 500)
    dist=dist-50
    $(cardArr[6]).animate({ 'left': dist, 'z-index':'1' }, 500)
    
    spreaded=true;
    reset=false;

    // ---------------------------Card Display--------------------

}

})


$(".reset").click(function(){
    if (reset==false) {
        document.querySelector(".your-card").remove()
        var Card=document.createElement("div")
        Card.classList.add("your-card")
        document.querySelector(".selected-card").appendChild(Card)

        document.querySelector(".card-desc").remove()
        var discCard=document.createElement("div")
        discCard.classList.add("card-desc")
        document.querySelector(".selected-card").appendChild(discCard)


        cardArr=[".card-1",".card-2",".card-3",".card-4",".card-5",".card-6",".card-7"]
        $(cardArr[0]).animate({'left':  '0px','z-index':'0'})
        $(cardArr[1]).animate({'left':  '13px','z-index':'0'})
        $(cardArr[2]).animate({'left':  '26px','z-index':'0'})
        $(cardArr[3]).animate({'left':  '39px','z-index':'0'})
        $(cardArr[4]).animate({'left':  '52px','z-index':'0'})
        $(cardArr[5]).animate({'left':  '65px','z-index':'0'})
        $(cardArr[6]).animate({'left':  '78px','z-index':'0'})
        cardArr.reverse()

    
        spreaded=false;
        reset=true;
        console.log("reset")
        
    }
    else{

    }

    
})



function selected(info){
    if(spreaded==false){
        console.log("if function")

    }
    else{
    
        console.log(info.childNodes[3])
        console.log(info.childNodes[5])

    document.querySelector(".your-card").remove()

    var Card=document.createElement("div")
    Card.classList.add("your-card")
    document.querySelector(".selected-card").appendChild(Card)

    document.querySelector(".card-desc").remove()

    var discCard=document.createElement("div")
    discCard.classList.add("card-desc")
    document.querySelector(".selected-card").appendChild(discCard)


        
    // document.querySelector(".selected-card").appendChild(info.childNodes[3]);

    card_info="."+info.classList[1]

    const yourCard=document.querySelector(".your-card")
    // console.log(document.querySelector(card_info).childNodes[3].childNodes[1].src)

    const frontImg=document.createElement("img")
    frontImg.src=document.querySelector(card_info).childNodes[3].childNodes[1].src
    frontImg.classList.add("cardFlip")
    // frontImg.classList.add("cardFlip_1")


    
    frontImg.width="300";
    frontImg.height="450";

    yourCard.appendChild(frontImg)

    // const divBack=document.createElement("div")
    // divBack.classList.add("desc_backImg")
    // const backImg=document.createElement("img")
    // backImg.src="assets/img/Mercury-Front.png";
    // backImg.width="300px"
    // backImg.height="450px"
    // divBack.appendChild(backImg)






    console.log(info.childNodes[5].childNodes[1].textContent)


    var h2=document.createElement("h2")
    h2.appendChild(document.createTextNode(info.childNodes[5].childNodes[1].textContent))

    var h3=document.createElement("h3")
    var header = document.createTextNode(info.childNodes[5].childNodes[3].textContent)
    h3.appendChild(header)

    var p=document.createElement("p")
    var description=document.createTextNode(info.childNodes[5].childNodes[5].textContent)
    p.appendChild(description)
    p.classList.add("desc")

    var cardDesc=document.querySelector(".card-desc");
    cardDesc.appendChild(h2)
    cardDesc.appendChild(h3)

    cardDesc.appendChild(p)


    // $(".your-card").css({'transform': 'rotate(-180deg)'});
    setTimeout(function(){ document.querySelector(".your-card").classList.add("cardFlip")}, 10);
        



}

    



    
}
