
var spreaded=false;
var shuffled=false;
var num_shuffled=0;

document.querySelector(".shuffleButton").addEventListener('click', shuffle)



            

    

document.querySelector(".deck-cards").addEventListener("click", spread);

    function spread() {
      

        if(shuffled==true){
           


            var cardOne=document.querySelector(".shuffle").classList[2]
            var cardTwo=document.querySelector(".shuffle2").classList[2]

            var cardThree=document.querySelector(".shuffle3").classList[2]


            document.querySelector(".shuffle").classList.remove("shuffle")
            document.querySelector(".shuffle2").classList.remove("shuffle2")
            document.querySelector(".shuffle3").classList.remove("shuffle3")


            
        }
        else{

        }

        spreaded=true;
        var card_One = document.querySelector('.card-1');
        var card_Two = document.querySelector('.card-2');
        var card_Three = document.querySelector('.card-3');
        var card_Four = document.querySelector('.card-4');
        var card_Five = document.querySelector('.card-5');
        var card_Six = document.querySelector('.card-6');
        var card_Seven= document.querySelector('.card-7');


        card_One.classList.add("spread");
        card_Two.classList.add("spread")
        card_Three.classList.add("spread")
        card_Four.classList.add("spread")
        card_Five.classList.add("spread")
        card_Six.classList.add("spread")
        card_Seven.classList.add("spread")


        if(card_One.classList.value.includes("reverse")){
        card_One.classList.remove("reverse");
        card_Two.classList.remove("reverse")
        card_Three.classList.remove("reverse")
        card_Four.classList.remove("reverse")
        card_Five.classList.remove("reverse")
        card_Six.classList.remove("reverse")
        card_Seven.classList.remove("reverse")

        spreaded=true
        
        }
        
        if(shuffled==true){
        document.querySelector("."+cardOne).classList.remove("spread")
        document.querySelector("."+cardOne).classList.add("spreadCard1")

        document.querySelector("."+cardTwo).classList.remove("spread")
        document.querySelector("."+cardTwo).classList.add("spreadCard2")

        document.querySelector("."+cardThree).classList.remove("spread")
        document.querySelector("."+cardThree).classList.add("spreadCard3")


        const cardNumList=["One","two","three","four","five","six","seven"]
        const selectedCardList=[cardOne,cardTwo,cardThree]
        for(i=0;i<3;i++){

            cardNumList.splice(cardNumList.indexOf(selectedCardList[i]),1);
       
            
        }
        
        console.log(cardNumList)
        document.querySelector("."+cardNumList[0]).classList.remove("spread")
        document.querySelector("."+cardNumList[0]).classList.add("unShuffledCard1")

        document.querySelector("."+cardNumList[1]).classList.remove("spread")
        document.querySelector("."+cardNumList[1]).classList.add("unShuffledCard2")

        document.querySelector("."+cardNumList[2]).classList.remove("spread")
        document.querySelector("."+cardNumList[2]).classList.add("unShuffledCard3")

        document.querySelector("."+cardNumList[3]).classList.remove("spread")
        document.querySelector("."+cardNumList[3]).classList.add("unShuffledCard4")

        spreaded=true;
    }
}







    function selected(info){
        if(spreaded==false){
            console.log("if function")

        }
        else{
        
            console.log(spreaded)
        card_info="."+info.classList[1]
        console.log(info.childNodes[5].childNodes[1].textContent)
        
        const blank=document.querySelector(".deck-card")
        const cards=document.querySelector(".cards")

        cards.remove()
        
        
        const divFront=document.createElement("div")
        divFront.classList.add("desc-front")
        const frontImg=document.createElement("img")
        frontImg.src=document.querySelector(card_info).childNodes[3].childNodes[1].src;
        frontImg.classList.add("cardFlip")
        frontImg.width="300";
        frontImg.height="450";
        divFront.appendChild(frontImg)

        const divBack=document.createElement("div")
        divBack.classList.add("desc_backImg")
        const backImg=document.createElement("img")
        backImg.src="assets/img/Mercury-Front.png";
        backImg.width="300px"
        backImg.height="450px"
        divBack.appendChild(backImg)

        const div=document.createElement("div")
        div.classList.add("cards")
        div.appendChild(divFront)
        div.appendChild(divBack)
        blank.appendChild(div)


            
        var h2=document.createElement("h2")
        var name = document.createTextNode(info.childNodes[5].childNodes[1].textContent)
        h2.appendChild(name)
        var h3=document.createElement("h3")
        var header = document.createTextNode(info.childNodes[5].childNodes[3].textContent)
        h3.appendChild(header)
        var p=document.createElement("p")
        var description=document.createTextNode(info.childNodes[5].childNodes[5].textContent)
        p.appendChild(description)
        p.classList.add("desc")
        var selected_description=document.querySelector(".selected-card-description")
        selected_description.remove()
        const selectedDescription=document.createElement("div")
        selectedDescription.classList.add("selected-card-description")

        selectedDescription.appendChild(h2)
        selectedDescription.appendChild(h3)
        selectedDescription.appendChild(p)
        const divDesc=document.querySelector(".selected-card-single")
        divDesc.appendChild(selectedDescription)
        
        setTimeout(function(){ document.querySelector(".desc-front").classList.add("cardFlip")}, 10);
        



        }
    }


  
document.querySelector(".reset").addEventListener('click', reset)


        function reset() {
        document.querySelector(".Click_deck").classList.remove('hide_deck')
        
        document.querySelector(".cards").remove()
        document.querySelector(".selected-card-description").remove()

        const selectedCardDescription=document.createElement("div")
        selectedCardDescription.classList.add("selected-card-description")
        const cardReset=document.createElement("div")
        cardReset.classList.add("cards")
        document.querySelector(".deck-card").appendChild(cardReset)
        document.querySelector(".deck-card").appendChild(selectedCardDescription)


    

        var card_One = document.querySelector('.card-1');
        var card_Two = document.querySelector('.card-2');
        var card_Three = document.querySelector('.card-3');
        var card_Four = document.querySelector('.card-4');
        var card_Five = document.querySelector('.card-5');
        var card_Six = document.querySelector('.card-6');
        var card_Seven= document.querySelector('.card-7');
        card_One.classList.add("reverse");
        card_Two.classList.add("reverse")
        card_Three.classList.add("reverse")
        card_Four.classList.add("reverse")
        card_Five.classList.add("reverse")
        card_Six.classList.add("reverse")
        card_Seven.classList.add("reverse")

        card_One.classList.remove("spread");
        card_Two.classList.remove("spread")
        card_Three.classList.remove("spread")
        card_Four.classList.remove("spread")
        card_Five.classList.remove("spread")
        card_Six.classList.remove("spread")
        card_Seven.classList.remove("spread")

        var shuffleLength=document.querySelectorAll(".shuffle");
        console.log(shuffleLength)
        if (shuffleLength.length>0){

            for (let i = 0; i<shuffleLength.length;i++){                
            
            document.querySelector(".shuffle").classList.remove("shuffle")
            document.querySelector(".shuffle2").classList.remove("shuffle2")
            document.querySelector(".shuffle3").classList.remove("shuffle3")


            console.log(shuffleLength)

            }

        }


        if(spreaded==true && shuffled==true){
        document.querySelector(".unShuffledCard1").classList.remove("unShuffledCard1")
        document.querySelector(".unShuffledCard2").classList.remove("unShuffledCard2")
        document.querySelector(".unShuffledCard3").classList.remove("unShuffledCard3")
        document.querySelector(".unShuffledCard4").classList.remove("unShuffledCard4")
        document.querySelector(".spreadCard1").classList.remove("spreadCard1")
        document.querySelector(".spreadCard2").classList.remove("spreadCard2")
        document.querySelector(".spreadCard3").classList.remove("spreadCard3")

        }
        spreaded=false;
        shuffled=false;
        // cardSelected=false;

        }

        
    
// ------------------------------------------------------------------------------------------------------------------//

function shuffle() {
    if(shuffled!=true){
    if(spreaded==false){
        const cardList=[".card-1",".card-2",".card-3",".card-4",".card-5",".card-6",]
    
        var shuffleArray=[]
        shuffleArray.length=0;
        while(shuffleArray.length < 3){
    
        var n = Math.floor(Math.random() * 6);
        if(shuffleArray.indexOf(n) === -1) shuffleArray.push(n);
                    
        }   
  
        document.querySelector(cardList[shuffleArray[0]]).classList.add("shuffle")
        document.querySelector(cardList[shuffleArray[1]]).classList.add("shuffle2")
        document.querySelector(cardList[shuffleArray[2]]).classList.add("shuffle3")
        shuffled=true;
        }
        else{
    
        }
    }
    else{

    }
    
        }