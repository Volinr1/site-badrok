var url = "https://api.mcsrvstat.us/2/20.52.219.102:19132";
$.getJSON(url, function(r) {
 if(r.error){
    $('h2').html('Server Offline');
    $('#rest').html('Players Online: 0');
   return false;
       } else {
      $('h2').html('tws-mc.com');  
      $('#rest').html('Players Online: '+r.players.online+'/'+r.players.max);
 }   
});


