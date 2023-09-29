$("#res").click(function(){
    $resultat = 0;
    $pompe = 0;
    $tazer = 0;
    $pistol = 0;
    $pistolCombat = 0;
    $pistolCal50 = 0;
    $pistolLourd = 0;
    $gilet = 0;
    $helico = 0;
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
    $textHelico = "";
    $textmitraillette = "";
    $textArme = "";
    $tenu = "";
    $chien = 0;
    $textChien ="";
    
   
    if($('#tazer').prop('checked')){
        $tazer = $('#tazerNb').val()*15000;
        $textTazer = '<br> - '+$('#tazerNb').val()+" Taser | " +mille($tazer) +"$";
        if( $textArme == ""){
            $textArme = $textArme + $('#tazerNb').val()+" Taser "
        }else{
            $textArme = $textArme + " + "+ $('#tazerNb').val()+" Taser "
        }
    }
    if($('#pistol').prop('checked')){
        $pistol = $('#pistolNb').val()*10000;
        $textPistol = '<br> - '+$('#pistolNb').val()+" Pistolets | " +mille($pistol) +"$";
        if( $textArme == ""){
            $textArme = $textArme + $('#pistolNb').val()+" Pistolets "
        }else{
            $textArme = $textArme + "+ "+ $('#pistolNb').val()+" Pistolets "
        }
    }
    if($('#pistolCombat').prop('checked')){
        $pistolCombat = $('#pistolCombatNb').val()*12000;
        $textPistolC = '<br> - '+$('#pistolCombatNb').val()+" Combat Pistol | " +mille($pistolCombat) +"$";
        if( $textArme == ""){
            $textArme = $textArme + $('#pistolCombatNb').val()+" Pistolet de combat "
        }else{
            $textArme = $textArme + "+ "+ $('#pistolCombatNb').val()+" Pistolet de combat "
        }
    }

    if($('#pistolCal50').prop('checked')== true){
        $pistolCal50 = $('#pistolCal50Nb').val()*15000;
        $textPistolCal50 = '<br> - '+$('#pistolCal50Nb').val()+" Pistol.50 | " +mille($pistolCal50) +"$";
        if( $textArme == ""){
            $textArme = $textArme + $('#pistolCal50Nb').val()+" Pistolet Cal.50 "
        }else{
            $textArme = $textArme + "+ "+ $('#pistolCal50Nb').val()+" Pistolet Cal.50 "
        }
    }

    if($('#pistolLourd').prop('checked')){
        $pistolLourd = $('#pistolLourdNb').val()*20000;
        $textPistolL = '<br> - '+$('#pistolLourdNb').val()+" Heavy Pistol | " +mille($pistolLourd) +"$";
        if( $textArme == ""){
            $textArme = $textArme + $('#pistolLourdNb').val()+" Pistolet Lourd "
        }else{
            $textArme = $textArme + "+ "+ $('#pistolLourdNb').val()+" Pistolet Lourd "
        }
    }
    if($('#gilet').prop('checked')){
        $gilet = $('#giletNb').val()*1500;
        $textgilet = '<br> - '+$('#giletNb').val()+" Ballistic Vest | " +mille($gilet) +"$";
        
    }

    if($('#pompe').prop('checked')){
        $pompe = $('#pompeNb').val()*35000;
        $textPompe = '<br> - '+$('#pompeNb').val()+" Pump Shotgun | " +mille($pompe) +"$";
        if( $textArme == ""){
            $textArme = $textArme + $('#pompeNb').val()+" pompe "
        }else{
            $textArme = $textArme + "+ "+ $('#pompeNb').val()+" pompe "
        }
        
    }
    if($('#helico').prop('checked')){
        $helico = $('#nbH').val()*50000;
        console.log($('#nbH').val())
        $textHelico = '<br> - '+$('#nbH').val()+" Helico | " +mille($helico) +"$";
        if( $textArme == ""){
            $textArme = $textArme + $('#nbH').val()+" Helico "
        }else{
            $textArme = $textArme + "+ "+ $('#nbH').val()+" Helico "
        }
    }
    if($('#mitraillette').prop('checked')){
        $mitraillette = $('#mitrailletteNb').val()*85000;
        $textmitraillette = '<br> - '+ $('#mitrailletteNb').val()+" Assault SMG | " +mille($mitraillette) +"$";
        if( $textArme == ""){
            $textArme = $textArme + $('#mitrailletteNb').val()+" Mitraillette d'Assaut "
        }else{
            $textArme = $textArme + "+ "+ $('#mitrailletteNb').val()+" Mitraillette d'Assaut "
        }
    }
    if($('#chien').prop('checked')){
        $chien = 12500;
        $textChien = '<br> - '+" Unité K9 | " +mille($chien) +"$";
        if( $textArme == ""){
            $textArme = $textArme +" Unité K9 "
        }else{
            $textArme = $textArme + "+ Unité K9";
        }
    }
   

        if($('#chic').prop('checked')){
            if($tenu==""){
                $tenu+="chic";
              }
              else{
                $tenu+="et tenue chic";
              }
        }
        if($('#TT').prop('checked')){
            if($tenu==""){
                $tenu+="Tout-terrain";
              }
              else{
                $tenu+="et tenue Tout-terrain";
              }
        }
        if($('#lourde').prop('checked')){
            if($tenu==""){
                $tenu+="lourde";
              }
              else{
                $tenu+="et tenue lourde";
              }
        }
        if($('#chicL').prop('checked')){
            if($tenu==""){
                $tenu+="Chic lourde";
              }
              else{
                $tenu+="et tenue Chic lourde";
              }
        }
    

    else if($('#pompe').prop('checked') == false && $('#tazer').prop('checked') == false && $('#pistol').prop('checked') == false && $('#pistolCombat').prop('checked') == false && $('#pistolCal50').prop('checked') == false && $('#pistolLourd').prop('checked') == false && $('#gilet').prop('checked') == false && $('#helico').prop('checked') == false && $('#mitraillette').prop('checked') == false) {
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
    console.log($('#reduc').val())
    $t = 0;
    $t = timeStringToFloat($('#heureD').val())*60+timeStringToFloat($('#nbContrat').val())*60


    $resultat = $chien +$pompe + $tazer + $pistol + $pistolCombat+ $pistolCal50 + $pistolLourd + $gilet + $helico + $mitraillette + timeStringToFloat($('#nbContrat').val())*50000 +$nbdelai;
    $resultat = Math.round($resultat*$pourcentage);
    $('#resultat').text("Total : "+mille($resultat)+"$");

    $resultAgent = Math.round($resultat/ $('#nbAgent').val())
    $resultAgent = Math.floor($resultAgent/1000);
    $resultAgent = $resultAgent*1000;
    $('#resultAgent').text(mille($resultAgent)+"$");

    contratValide();
    annonceSecu();
    date();
});
$("#reducDiv").hide();
$("#btnReduc").click(function(){
    $("#reducDiv").show();
});

$("#btnCV").click(function(){
    $("#annonceSecu").show();
    $("#contartValide").hide();
});
$("#btnAS").click(function(){
    $("#contartValide").show();
    $("#annonceSecu").hide();

});
$("#annonceSecu").hide();
function timeStringToFloat(time) {
    var hoursMinutes = time.split(/[.:]/);
    var hours = parseInt(hoursMinutes[0], 10);
    var minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
    return hours + minutes / 60;
  }

  function temps(secondes)
{
     var retour='';
     if(secondes>=60)
     {
          var heures=Math.floor(secondes/60);
          retour+=heures+'h ';
          secondes-=heures*60;
     }
     if(secondes>0)
     {
        retour+=secondes;
     }
     return retour;
}
$bool = false;
$delaiTexte = "";
$nbdelai = 0;
$("#delai").click(function(){
    if($bool==false){
        $bool = true; 
        $delaiTexte = '- Contrat ne respectant pas les 2 jours de délais minimum demander : +100 000$ <br>';
        $nbdelai = 100000;
        $("#delai").css('color','black');
        $("#delai").css("background-color","green");
    }
   else{
        $bool = false; 
        $delaiTexte = "";
        $nbdelai = 0;
        $("#delai").css('color','red');
        $("#delai").css("background-color","white");
    }
   

});

  function contratValide(){
    $('#contratV').html('Contrat validé par l’entreprise délivrée à </label> <br> ━━━━━━━━━━━━━━━━━━━━━━━━ <br> **- Nom :** '+ $('#nom').val() +'<br> **- Prénom :** '+$('#prenom').val()+'<br> **- ID :** '+ $('#id').val()+'<br> **- Type de mission :** '+ $('#typeM').val()+ '<br>**- Ville/lieu :** '+$('#lieu').val()+'<br> **- Nombre d’agents engagés :** '+$('#nbAgent').val()+' <br> **- Armes choisis (quantité et type) :** '+ $textArme+' <br> **- Tenue demandées :** '+$tenu+' <br> **- Date :** '+date()+' <br> ━━━━━━━━━━━━━━━━━━━━━━━━ <br> - Temps de location ('+ $('#nbContrat').val()+'h) | '+ mille(Math.round(timeStringToFloat($('#nbContrat').val())*50000))+'$ '+$textTazer +''+$textPistol+''+$textPistolC+''+$textPistolCal50+''+$textPistolL+''+$textgilet+''+$textPompe+''+$textHelico+''+$textmitraillette+''+$textChien+'<br> '+$delaiTexte+'<br>__**- Montant de la commande : '+mille($resultat)+'$**__<br> *- Part par agent : '+mille($resultAgent)+'$*');
   
  }

  function annonceSecu(){
    $('#annoceS').html('Bonsoir @🧢 - Sécurité,  <br><br>__**Un nouveau #✅・𝐂𝐨𝐧𝐭𝐫𝐚𝐭𝐬-𝐯𝐚𝐥𝐢𝐝é𝐬  est prévu pour '+ date() +' de '+ temps(timeStringToFloat($('#heureD').val())*60)+' à '+ temps($t)+'.**__ <br><br> **⚠️ Tenue '+$tenu+' et véhicule pro demandé ⚠️ **<br><br> __Merci de voté avec les réactions suivante pour dire si vous êtes présent ou pas.__ <br><br>:Coche: : Présent<br>:Croix: : Absent<br>🤷 : Ne sais pas (donc mettre à jour quand vous savez MERCI)<br>⌚ : En retard (prévenir de combien de temps)<br><br>Passer un bonne soirée<br>Cordialement');
   
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