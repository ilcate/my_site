_app = {}

_app.getInfo = () => {
    _app.projectSelected = sessionStorage.getItem("project")
    _app.displayInfo(_app.projectSelected)
}

_app.displayInfo = (num) => {
    let pa
    let numero = 0
    if(num != 0){
        pa = _app.paragraphArray2
        numero = num-1
    }else{
        pa = _app.paragraphArray1
        numero = num
    }

    if (document.querySelector(".titlec")){
        document.querySelector(".titlec").innerHTML = _app.nameArray[num]
    }else{
        document.querySelector(".titlec-mobile").innerHTML = _app.nameArray[num]
    }

    document.querySelector("#first-p").innerHTML = pa[numero][0]
    document.querySelector("#second-p").innerHTML = pa[numero][1]
    document.querySelector("#third-p").innerHTML = pa[numero][2]
    document.querySelector("#last-p").innerHTML = pa[numero][3]

    let sImg = document.createElement('img')
    sImg.src = _app.imageArray[num][0]
    sImg.id = "s-img"
    document.querySelector("#showcasing-img").append(sImg)

    let imgF = document.createElement('img')
    imgF.src = _app.imageArray[num][1]
    imgF.id = "i1"
    document.querySelector("#img-1").append(imgF)

    let imgS = document.createElement('img')
    imgS.src = _app.imageArray[num][2]
    imgS.id = "i2"
    document.querySelector("#img-2").append(imgS)

    let imgT = document.createElement('img')
    imgT.src = _app.imageArray[num][3]
    imgT.id = "i3"
    document.querySelector("#img-3").append(imgT)

    _app.displaySpecs(num)

}

_app.getSwitchPhotos = () => {
    document.querySelector("#img-1").addEventListener("click", () =>{
        _app.switchImages("#i1", "#img-1", "i1")

	});
    document.querySelector("#img-2").addEventListener("click", () =>{
        _app.switchImages("#i2", "#img-2", "i2")
	});
    document.querySelector("#img-3").addEventListener("click", () =>{
        _app.switchImages("#i3", "#img-3", "i3")
	});
}

_app.displaySpecs = (num) => {
    document.querySelector("#spec1").src = _app.programs[num][0]
    document.querySelector("#spec2").src = _app.programs[num][1]
    document.querySelector("#spec3").src = _app.programs[num][2]
    document.querySelector("#spec4").src = _app.programs[num][3]
    document.querySelector("#spec5").src = _app.programs[num][4]
    document.querySelector("#spec6").src = _app.programs[num][5]
}


_app.switchImages = (smallImage, destination, idToInsert) => {
    _app.tempB = document.querySelector("#s-img")
    _app.tempS = document.querySelector(smallImage)

    document.querySelector(smallImage).remove()
    document.querySelector("#s-img").remove()
    
    _app.applySwitch( destination , idToInsert)
}

_app.applySwitch = ( destination, idToInsert) => {
    _app.tempS.id = "s-img"
    _app.tempB.id = idToInsert
    
    document.querySelector("#showcasing-img").appendChild(_app.tempS)
    document.querySelector(destination).appendChild(_app.tempB)
    console.log(document.querySelector("#showcasing-img"))
}

_app.startUp = () => {
    _app.nameArray = ["Bubbles", "Cloudy", "Esperti di Esports", "Arcademon"]
    _app.programs = [["assets/images/specs/figma.png","assets/images/specs/photoshop.png","assets/images/specs/illustrator.png","assets/images/specs/pages.png","assets/images/specs/pitch.png","assets/images/specs/midjourney.png"],["assets/images/specs/python.png", "assets/images/specs/tiled.png", "assets/images/specs/photoshop.png", "assets/images/specs/illustrator.png","assets/images/specs/audacity.png","assets/images/specs/discord.png" ],["assets/images/specs/premiere.png", "assets/images/specs/after.png", "assets/images/specs/illustrator.png", "assets/images/specs/photoshop.png","assets/images/specs/pages.png", "assets/images/specs/google.png"],["assets/images/specs/html.png", "assets/images/specs/css.png", "assets/images/specs/js.png", "assets/images/specs/figma.png", "assets/images/specs/illustrator.png", "assets/images/specs/photoshop.png"]]
    _app.imageArray = [["assets/images/bubbles/bop.png", "assets/images/bubbles/Group 40.png", "assets/images/bubbles/Image 23.png", "assets/images/bubbles/li.png"],["assets/images/cloudy/1.png", "assets/images/cloudy/2.png", "assets/images/cloudy/3.png", "assets/images/cloudy/4.png"],["assets/images/esports/image 17.png", "assets/images/esports/image 18.png", "assets/images/esports/image 19.png", "assets/images/esports/image 20.png"],["assets/images/arcademon/image 13.png", "assets/images/arcademon/image 15.png", "assets/images/arcademon/image 16.png", "assets/images/arcademon/li.png" ]]
    _app.paragraphArray2 = [["Per via di un esame universitario io e un mio compagno abbiamo deciso di collaborare per creare un videogioco platform, lui è Albyeah.", "Il gioco racconta di questa nuvoletta che per via del vento perde la sua mamma e dovrà risalire la montagna per raggiungerla.", "I livelli sono 30 e all’inizio sono basati su semplici salti per poi dover approcciare a delle piattaforme in movimento e a dei nemici. Mi raccomando prendi tutte le vite che trovi altrimenti sarà game over.", "Il gioco è stato realizzato interamente con Python e le sue librerie. Le grafiche sono state disegnate a mano e le esclamazioni del protagonista sono state doppiate da noi."],["Non sono mai stato troppo forte a giocare ai videogiochi, per questo quando volevo vedere un gameplay di qualità andavo a vedere i tornei di videogiochi.","Non li conoscete? Si chiamano tornei Esports e sono ormai famosi in tutto il mondo ma se questa spiegazione non vi soddisfa ho preparato per voi un documentario.","Per vederlo mandami una mail e te lo inoltrerò. Spero che alla visione ti possa interessare il fenomeno e se sei un videogiocatore perché non iniziare a guardarli?","L’ho realizzato principalmente con premiere pro e after effects solo dopo aver agguistato le grafiche con i software appositi. ma prima ho scritto il copione nato da una lunga documentazione."],["Sin da piccolo ho sempre amato i Pokemon, ho giocato tutti i giochi più recenti e non mi ha mai stancato, quindi ho deciso di omagiare la saga creando la webapp Arcademon.", "Ma che cos'è? è un sito dove, dopo dopo aver scelto la tua squadra pokemon in modo casuale puoi sfidarne un altra creata e gestita dal computer.", "Se vinci allora puoi pagare una parte delle tue monete per curare i tuoi pokemon e buttarti in una nuova sfida; attento però la sconfitta è definitiva.", "l'ho realizzato usando HTML, CSS e Java Script solo dopo però averlo progettato su Figma e aver creato le grafiche con Illustrator e Photoshop."]]
    _app.paragraphArray1 = [["Recentemente ho sviluppato una grande passione per i manga, tra i tanti titoli che mi sono interessati uno spiccava su altri; ma il problema è che in Italia la sua pubblicazione era indietro di due anni.", "Quindi dopo aver analizzato il mercato e ho deciso di progettare un'applicazione che potesse idealmente sopperire al mio problema in modo legale.", "Da qui dunque nasce Bubbles l'applicazione che permette la lettura di qualsiasi tipo di fumetto, in qualsiasi momento e in legalità.", "Per crearla ho usato diversi software grafici e persino l’intelligenza artificiale per poi aver creato una presentazione che potesse raccontare al meglio il prodotto."]]
    _app.getInfo()
    _app.getSwitchPhotos()
}



_app.startUp()