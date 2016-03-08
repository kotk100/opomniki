window.addEventListener('load', function() {
	//stran nalozena
		
	//Posodobi opomnike
	var posodobiOpomnike = function() {
		var opomniki = document.querySelectorAll(".opomnik");
		
		for (i = 0; i < opomniki.length; i++) {
			var opomnik = opomniki[i];
			var casovnik = opomnik.querySelector("span");
			var cas = parseInt(casovnik.innerHTML);
	
			//TODO: 
			// - če je čas enak 0, izpiši opozorilo "Opomnik!\n\nZadolžitev NAZIV_OPOMNIK je potekla!"
			// - sicer zmanjšaj čas za 1 in nastavi novo vrednost v časovniku
			if(cas > 0){
				cas--;
				casovnik.innerHTML = cas;
			}
			else{
				window.alert("Opomnik!\n\nZadolžitev NAZIV_OPOMNIK je potekla!");
				document.querySelector("#opomniki").removeChild(opomnik);
			}
		}
	}
	setInterval(posodobiOpomnike, 1000);
	
	var prijavi = function(event){
		//Get name
		var uporabnik = document.querySelector("#uporabnisko_ime").value;
		
		//Set name
		document.querySelector("#uporabnik").innerHTML = uporabnik;
		
		//hide pokrivalo
		document.querySelector(".pokrivalo").style.visibility = "hidden";
	};

	document.querySelector("#prijavniGumb").addEventListener("click", prijavi);
	
	document.querySelector("#dodajGumb").addEventListener("click", function(event){
		var naziv = document.querySelector("#naziv_opomnika").value;
		var trajanje = document.querySelector("#cas_opomnika").value;
		
		document.querySelector("#naziv_opomnika").value = "";
		document.querySelector("#cas_opomnika").value = "";
		
		document.querySelector("#opomniki").innerHTML += `<div class='opomnik rob senca' >
														            <div class='naziv_opomnika'>`+naziv+`</div>
														            <div class='cas_opomnika'> Opomnik čez <span>`+trajanje+`</span> sekund.</div>
														</div>`;
		
	});
});




