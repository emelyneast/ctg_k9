$("#res").click(function(){
    $resultat = 0;
    $pompe = 0;
    $tazer = 0;
    $pistol = 0;
    $pistolCombat = 0;
    $pistolCal50 = 0;
    $pistolLourd = 0;
    $gilet = 0;
    $pompeBullpup = 0;
    $mitraillette = 0;
    $resultAgent = 0;
    $pourcentage = 0;
    $textPompe = "";
    $textTazer = "";
    $textPistol = "";
    $textPistolC = "";
    $textPistolCal50 = "";
    $textPistolL = "";
    $textgilet = "";
    $textbullup = "";
    $textmitraillette = "";
    $textArme = "";
    
   
    if($('#tazer').prop('checked')){
        $tazer = $('#nbAgent').val()*15000;
        $textTazer = '<br> - '+$('#nbAgent').val()+" Taser | " +mille($tazer) +"$";
        if( $textArme == ""){
            $textArme = $textArme + $('#nbAgent').val()+" Taser "
        }else{
            $textArme = $textArme + " + "+ $('#nbAgent').val()+" Taser "
        }
    }
    if($('#pistol').prop('checked')){
        $pistol = $('#nbAgent').val()*10000;
        $textPistol = '<br> - '+$('#nbAgent').val()+" Pistolets | " +mille($pistol) +"$";
        if( $textArme == ""){
            $textArme = $textArme + $('#nbAgent').val()+" Pistolets "
        }else{
            $textArme = $textArme + "+"+ $('#nbAgent').val()+" Pistolets "
        }
    }
    if($('#pistolCombat').prop('checked')){
        $pistolCombat = $('#nbAgent').val()*12000;
        $textPistolC = '<br> - '+$('#nbAgent').val()+" Combat Pistol | " +mille($pistolCombat) +"$";
        if( $textArme == ""){
            $textArme = $textArme + $('#nbAgent').val()+" Pistolet de combat "
        }else{
            $textArme = $textArme + "+"+ $('#nbAgent').val()+" Pistolet de combat "
        }
    }

    if($('#pistolCal50').prop('checked')== true){
        $pistolCal50 = $('#nbAgent').val()*15000;
        $textPistolCal50 = '<br> - '+$('#nbAgent').val()+" Pistol.50 | " +mille($pistolCal50) +"$";
        if( $textArme == ""){
            $textArme = $textArme + $('#nbAgent').val()+" Pistolet Cal.50 "
        }else{
            $textArme = $textArme + "+"+ $('#nbAgent').val()+" Pistolet Cal.50 "
        }
    }

    if($('#pistolLourd').prop('checked')){
        $pistolLourd = $('#nbAgent').val()*20000;
        $textPistolL = '<br> - '+$('#nbAgent').val()+" Heavy Pistol | " +mille($pistolLourd) +"$";
        if( $textArme == ""){
            $textArme = $textArme + $('#nbAgent').val()+" Pistolet Lourd "
        }else{
            $textArme = $textArme + "+"+ $('#nbAgent').val()+" Pistolet Lourd "
        }
    }
    if($('#gilet').prop('checked')){
        $gilet = $('#nbAgent').val()*1500;
        $textgilet = '<br> - '+$('#nbAgent').val()+" Ballistic Vest | " +mille($gilet) +"$";
        
    }

    if($('#pompe').prop('checked')){
        $pompe = $('#nbAgent').val()*35000;
        $textPompe = '<br> - '+$('#nbAgent').val()+" Pump Shotgun | " +mille($pompe) +"$";
        if( $textArme == ""){
            $textArme = $textArme + $('#nbAgent').val()+" pompe "
        }else{
            $textArme = $textArme + "+"+ $('#nbAgent').val()+" pompe "
        }
        
    }
    if($('#pompeBullpup').prop('checked')){
        $pompeBullpup = $('#nbAgent').val()*45000;
        $textbullup = '<br> - '+$('#nbAgent').val()+" Pump Bullpup | " +mille($pompeBullpup) +"$";
        if( $textArme == ""){
            $textArme = $textArme + $('#nbAgent').val()+" Fusil à pompe Bullpup "
        }else{
            $textArme = $textArme + "+"+ $('#nbAgent').val()+" Fusil à pompe Bullpup "
        }
    }
    if($('#mitraillette').prop('checked')){
        $mitraillette = $('#nbAgent').val()*85000;
        $textmitraillette = '<br> - '+ $('#nbAgent').val()+" Assault SMG | " +mille($mitraillette) +"$";
        if( $textArme == ""){
            $textArme = $textArme + $('#nbAgent').val()+" Mitraillette d'Assaut "
        }else{
            $textArme = $textArme + "+"+ $('#nbAgent').val()+" Mitraillette d'Assaut "
        }
    }
    

    else if($('#pompe').prop('checked') == false && $('#tazer').prop('checked') == false && $('#pistol').prop('checked') == false && $('#pistolCombat').prop('checked') == false && $('#pistolCal50').prop('checked') == false && $('#pistolLourd').prop('checked') == false && $('#gilet').prop('checked') == false && $('#pompeBullpup').prop('checked') == false && $('#mitraillette').prop('checked') == false) {
        alert("Aucune arme selectione");
    }
    else if($('#nbContrat').val() == "") {
        alert("Durée du contrat n'est pas renseigné");
        $('#nbContrat').val() = 0;
    }
    else if($('#nbAgent').val() == "") {
        alert("Le nombre d'agent n'est pas renseigné");
        $('#nbAgent').val() = 0;
    }
    else if($('.mission').val() == "" || $('.nom').val() == "") {
        alert("Le formulaire contrat validé n'est pas rempli en entier");
    }
    else if($('#date').val() == ""){
        alert("Le formulaire contrat validé n'est pas rempli en entier");
    }

    if($('#reduc').val()!=null){
        $pourcentage = 1-$('#reduc').val()/100;
    }

    
  

    $resultat = $pompe + $tazer + $pistol + $pistolCombat+ $pistolCal50 + $pistolLourd + $gilet + $pompeBullpup + $mitraillette + timeStringToFloat($('#nbContrat').val())*50000 ;
    $resultat = Math.round($resultat*$pourcentage);
    $('#resultat').text("Total : "+mille($resultat)+"$");

    $resultAgent = Math.round($resultat/ $('#nbAgent').val())
    $('#resultAgent').text(mille($resultAgent)+"$");
    contratValide();
    date();
});
$("#reducDiv").hide();
$("#btnReduc").click(function(){
    $("#reducDiv").show();
});


function timeStringToFloat(time) {
    var hoursMinutes = time.split(/[.:]/);
    var hours = parseInt(hoursMinutes[0], 10);
    var minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
    return hours + minutes / 60;
  }
  

  function contratValide(){
    $('#contratV').html('Contrat délivré à l’entreprise à </label> <br> ━━━━━━━━━━━━━━━━━━━━━━━━ <br> **- Nom :** '+ $('#nom').val() +'<br> **- Prénom :** '+$('#prenom').val()+'<br> **- ID :** '+ $('#id').val()+'<br> **- Type de mission :** '+ $('#typeM').val()+ '<br>**- Ville/lieu :** '+$('#lieu').val()+'<br> **- Nombre d’agents engagés :** '+$('#nbAgent').val()+' <br> **- Armes choisis (quantité et type) :** '+ $textArme+' <br> **- Date :** '+date()+' <br> ━━━━━━━━━━━━━━━━━━━━━━━━ <br> - Temps de location ('+ $('#nbContrat').val()+'h) | '+ mille(Math.round(timeStringToFloat($('#nbContrat').val())*50000))+'$ '+$textTazer +''+$textPistol+''+$textPistolC+''+$textPistolCal50+''+$textPistolL+''+$textgilet+''+$textPompe+''+$textbullup+''+$textmitraillette+'<br> <br>__**- Montant de la commande : '+mille($resultat)+'$**__');
   
  }

  function mille(nbr){
    var nbrWithSpaces=nbr.toString().replace(/(\d)(?=(\d{3})+\b)/g,'$1 ');
 
    return nbrWithSpaces;
  }

  function date(){
    var day, month, year, date;
    var date = new Date($('#date').val());
      day = date.getDate();
      month = date.getMonth() + 1;
      year = date.getFullYear();
      if(day>=1 && day<=9){
        day = "0"+day;
      }
      if(month>=1 && month<=9){
        month = "0"+month;
      }
      date = day+"/"+month+"/"+year
      return date;
  }