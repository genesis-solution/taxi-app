// App logic.
ons.platform.select('android');
window.myApp = {};


document.addEventListener('init', function(event) {

  $(document.body).css("background-color","white !important");
  $('.page__background').css("opacity","1");

  var page = event.target;

  // Each page calls its own initialization controller.
  if (myApp.controllers.hasOwnProperty(page.id)) {
    myApp.controllers[page.id](page);
  }  
  
});


document.addEventListener('show', function(event) {

  
  
  var page = event.target;

  // Each page calls its own initialization controller.

  
  if (page.id === "loginpage") {
    startscreen.hide();
    page.onDeviceBackButton = onBackButton;
    //ons.enableDeviceBackButtonHandler();   
  }


  if (page.id === "verifypage") {
    startscreen.hide();
    //page.onDeviceBackButton = onBackButton;
    //ons.enableDeviceBackButtonHandler();   
  }
  
  if(page.id === "mappage"){

    
    
    //$('#startscreen').show();
    selected_state_id = "0"; //reset inter-state booking

    
    /* if (typeof google === 'object' && typeof google.maps === 'object') {

      if(typeof mapOptions === 'undefined'){
          mapOptions = {
          center: new google.maps.LatLng(9.0338725,8.677457),
          zoom: 5,
          disableDefaultUI: true,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
        getMapLocation();
        initAutocomplete();        
        initAutocomplete2();
      }

      bounds = new google.maps.LatLngBounds();
      directionsService = new google.maps.DirectionsService;
      directionsDisplay = new google.maps.DirectionsRenderer({
          map: map
      });

            
    } */
    

    if(device_ready)ons.enableDeviceBackButtonHandler();
    
          
     
      

  }

  if(page.id === 'addresses'){
    if(location_type_selected){      
      $("#address-input").focus();
    }else{          
      $("#address-input").focus();
    }
  }


  if(page.id === 'softwarelicense'){
    loading.hide();
  }


  if(page.id === 'locationmappage'){

        var locationmap_lat;
        var locationmap_lng;
        var select_location_latLng;
        

        if(location_type_selected){

            if(drop_off_data.lat){
              locationmap_lat = drop_off_data.lat;
              locationmap_lng = drop_off_data.lng;

            }else if(user_location.lat){
                locationmap_lat = user_location.lat;
                locationmap_lng = user_location.lng;
            }else{
                locationmap_lat = selected_city_lat;
                locationmap_lng = selected_city_long;
            }

        }else{

          if(pick_up_data.lat){
              locationmap_lat = pick_up_data.lat;
              locationmap_lng = pick_up_data.lng;
          }else if(user_location.lat){
              locationmap_lat = user_location.lat;
              locationmap_lng = user_location.lng;
          }else{
              locationmap_lat = selected_city_lat;
              locationmap_lng = selected_city_long;
          }


        }



        if(typeof map3 === 'object')map3.remove();
        map3 = plugin.google.maps.Map.getMap(document.getElementById("map-canvas3"), {
          'mapType': plugin.google.maps.MapTypeId.ROADMAP,
          'controls': {
          'compass': false,
          'indoorPicker': false,
          'myLocationButton': false,
          'myLocation': false,   // (blue dot)
          'zoom': false,          // android only
          'mapToolbar': false     // android only
          },
          'gestures': {
          'scroll': true,
          'tilt': false,
          'rotate': false,
          'zoom': true
          },
          /* 'styles': [
          {
              featureType: "all",
              stylers: [
              { saturation: -80 }
              ]
          },{
              featureType: "road.arterial",
              elementType: "geometry",
              stylers: [
              { hue: "#00ffee" },
              { saturation: 50 }
              ]
          },{
              featureType: "poi.business",
              elementType: "labels",
              stylers: [
              { visibility: "off" }
              ]
          }
          ], */
          'camera' : {
          target: {
              lat: locationmap_lat,
              lng: locationmap_lng
          },
          zoom: 18
          },
          'preferences': {
          'zoom': {
              'minZoom': 3,
              'maxZoom': 18
          },
          'building': true
          }
      });

      map3.one(plugin.google.maps.event.MAP_READY, function() {
          if(location_type_selected){
            $('#locationmap-marker').attr('src','img/drop-off-pin.png');
            $('#locationmap-marker').show();
          }else{
            $('#locationmap-marker').attr('src','img/pick-up-pin.png');
            $('#locationmap-marker').show();
          }

          $('#location-map-action').off('click').on('click',function(){
              

              var center = {"lat": selected_city_lat, "lng": selected_city_long};
              var current_pos = {"lat": select_location_latLng.lat, "lng": select_location_latLng.lng};

              var distance = plugin.google.maps.geometry.spherical.computeDistanceBetween(center, current_pos); //distance in meters
              console.log(distance);
              if(distance > selected_city_radius){
                if(location_type_selected){ 
                  ons.notification.alert(__("The selected location is outside our service area in your selected city route. The location cannot be used for drop-off"),{title:""});
                  return;
                }else{
                  ons.notification.alert(__("The selected location is outside our service area in your selected city route. The location cannot be used for pick-up"),{title:""});
                  return;
                }
              }

              //reverse geocode cordinates
              loading.show();
              plugin.google.maps.Geocoder.geocode({
                "position": {"lat": select_location_latLng.lat, "lng": select_location_latLng.lng}
              }, function(results) {
                loading.hide();
                console.log(results);
                if (results.length === 0) {
                    $('#locationmap-title').html(__("Somewhere in {---1}",[selected_city_route]));
                   decoded_location_data.address = __("Somewhere in {---1}",[selected_city_route]); 
                   decoded_location_data.lat = select_location_latLng.lat;
                   decoded_location_data.lng = select_location_latLng.lng;    
                                  
                                    
                }else{
    
                    var address = results[0].extra.lines.join(', ');
                    
                    if(address == ''){
                        address = __("Somewhere in {---1}",[selected_city_route]); 
                    }
                    
                    $('#locationmap-title').html(address);
                    decoded_location_data.address = address; 
                    decoded_location_data.lat = select_location_latLng.lat;
                    decoded_location_data.lng = select_location_latLng.lng;
                }
                
                $('#myfavbtn2').css('visibility', 'visible');//show the favourite fab button in case user wants to save his current location
                $("#myfavbtn2").removeClass("bounceIn animated").addClass("bounceIn animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                    $(this).removeClass("bounceIn animated");
                });
                $('#location-action').hide();
                $('#location-confirm').show();
                                     
                
              });
              
              //loading.hide();

          })


          $('#location-map-confirm').off('click').on('click', function(){

                  
                  document.querySelector('#myNavigator').popPage(
                    {
                        animation: 'fade',
                        times:multi_destination_mode == 1 ? 1 : 2,   
                        callback: function(){
                        
                        if(multi_destination_mode){
                            if(location_type_selected){
                              if(dest_location_type_selected == 0){                                      
                            
                                multi_destinations['dest-1']['address'] = decoded_location_data.address;
                                multi_destinations['dest-1']['lat'] = decoded_location_data.lat;
                                multi_destinations['dest-1']['lng'] = decoded_location_data.lng;
                                $("#address-input-ds1").val(multi_destinations['dest-1']['address']);
                
                            }else if(dest_location_type_selected == 1){                
                                                
                                multi_destinations['dest-2']['address'] = decoded_location_data.address;
                                multi_destinations['dest-2']['lat'] = decoded_location_data.lat;
                                multi_destinations['dest-2']['lng'] = decoded_location_data.lng;
                                $("#address-input-ds2").val(multi_destinations['dest-2']['address']);
                                
                            }else{
                                
                                multi_destinations['dropoff']['address'] = decoded_location_data.address;
                                multi_destinations['dropoff']['lat'] = decoded_location_data.lat;
                                multi_destinations['dropoff']['lng'] = decoded_location_data.lng;
                                $("#address-input-d").val(multi_destinations['dropoff']['address']);
                                
                            }
                
                            if(!multi_destinations['pickup']['address']){
                                location_type_selected = 0; //swith to pickup location
                                $("#address-input-p").focus();
                            }
                            
                            return;
                          }else{

                                multi_destinations['pickup']['address'] = decoded_location_data.address;
                                multi_destinations['pickup']['lat'] = decoded_location_data.lat;
                                multi_destinations['pickup']['lng'] = decoded_location_data.lng;
                                $("#address-input-p").val(multi_destinations['pickup']['address']);
                                return;

                          }
                        }else{

                            if(route_polyline){
                              route_polyline.remove();
                              route_polyline = null;                     
                            }
                        
                        
                            if(location_type_selected){ //drop-off

                                drop_off_data.address = decoded_location_data.address;
                                drop_off_data.lat = decoded_location_data.lat;
                                drop_off_data.lng = decoded_location_data.lng;
                                        
                                $('#pac-input2').val(drop_off_data.address);
                                if(marker2){

                                    marker2.setPosition({
                                        lat:drop_off_data.lat,
                                        lng: drop_off_data.lng                                            
                                    });

                                    map.setClickable(false);
                                    map.animateCamera({
                                        target: {lat: drop_off_data.lat, lng: drop_off_data.lng},
                                        zoom: 18,
                                        duration: 1000,
                                        padding: 0  // default = 20px
                                    }, function() {
                                        map.setClickable(true);
                                        //alert("Camera target has been changed");

                                    });

                                    
                                }else{
                                    map.setClickable(false);
                                    map.animateCamera({
                                        target: {lat: drop_off_data.lat, lng: drop_off_data.lng},
                                        zoom: 18,
                                        duration: 1000,
                                        padding: 0  // default = 20px
                                    }, function() {
                                        map.setClickable(true);
                                        //alert("Camera target has been changed");

                                    });

                                    marker2 = map.addMarker({
                                                'position':{lat: drop_off_data.lat,lng: drop_off_data.lng},
                                                'icon' : 'img/drop-off-pin.png',
                                                animation: plugin.google.maps.Animation.DROP
                                            });
                                    marker2._isReady = true;
                                }

                                
                            }else{


                                pick_up_data.address = decoded_location_data.address;
                                pick_up_data.lat = decoded_location_data.lat;
                                pick_up_data.lng = decoded_location_data.lng;
                                        
                                $('#pac-input').val(pick_up_data.address);
                                if(marker1){

                                    marker1.setPosition({
                                        lat:pick_up_data.lat,
                                        lng: pick_up_data.lng                                            
                                    });

                                    map.setClickable(false);
                                    map.animateCamera({
                                        target: {lat: pick_up_data.lat, lng: pick_up_data.lng},
                                        zoom: 18,
                                        duration: 1000,
                                        padding: 0  // default = 20px
                                    }, function() {
                                        map.setClickable(true);
                                        //alert("Camera target has been changed");

                                    });

                                    
                                }else{
                                    map.setClickable(false);
                                    map.animateCamera({
                                        target: {lat: pick_up_data.lat, lng: pick_up_data.lng},
                                        zoom: 18,
                                        duration: 1000,
                                        padding: 0  // default = 20px
                                    }, function() {
                                        map.setClickable(true);
                                        //alert("Camera target has been changed");

                                    });

                                    marker1 = map.addMarker({
                                                'position':{lat: pick_up_data.lat,lng: pick_up_data.lng},
                                                'icon' : 'img/pick-up-pin.png',
                                                animation: plugin.google.maps.Animation.DROP
                                            });

                                    marker1._isReady = true;
                                }



                            }
                        }

                      if(marker1 && marker2){ 
                        process_route_between_locations();
                      }
                    }          
                  }
                );

                
          })




          map3.on(plugin.google.maps.event.MAP_DRAG_START, function(){
            $('#myfavbtn2').css('visibility', 'hidden');
            $('#location-action').show();
            $('#location-confirm').hide();
          });

          map3.on(plugin.google.maps.event.MAP_DRAG_END, function(){
              
            
              var offset = $('#locationmap-marker').offset();
              var pointX = offset.left + 16;
              var pointY = offset.top;

              console.log(pointX + ',' + pointY);
              map3.fromPointToLatLng([pointX,pointY], function(latLng){
                  console.log(latLng);
                  select_location_latLng = latLng;

                  /* var marker = map3.addMarker({
                    "position": latLng
                  }); */

                  /* map3.fromLatLngToPoint(latLng, function(point) {
                    var px = point[0].toFixed(1);
                    var py = point[1].toFixed(1);
                    $('#square').css('left',px.toString()+'px');
                    $('#square').css('top', py.toString()+'px');
                    console.log("left : " + point[0].toFixed(1) + "px\n" + "top : " + point[1].toFixed(1) + "px");
                  }); */

              })

              
              
          });
                   
          

      }); 
  }

  if(page.id === 'interstatepage'){
        
         if(!processed_interstate_route){ 
           //loading.show();  
            if(typeof map2 === 'object')map2.remove();
            map2 = plugin.google.maps.Map.getMap(document.getElementById("map-canvas2"), {
              'mapType': plugin.google.maps.MapTypeId.ROADMAP,
              'controls': {
              'compass': false,
              'indoorPicker': false,
              'myLocationButton': false,
              'myLocation': false,   // (blue dot)
              'zoom': false,          // android only
              'mapToolbar': false     // android only
              },
              'gestures': {
              'scroll': true,
              'tilt': false,
              'rotate': true,
              'zoom': true
              },
              /* 'styles': [
              {
                  featureType: "all",
                  stylers: [
                  { saturation: -80 }
                  ]
              },{
                  featureType: "road.arterial",
                  elementType: "geometry",
                  stylers: [
                  { hue: "#00ffee" },
                  { saturation: 50 }
                  ]
              },{
                  featureType: "poi.business",
                  elementType: "labels",
                  stylers: [
                  { visibility: "off" }
                  ]
              }
              ], */
              'camera' : {
              target: {
                  lat: 9.0778,
                  lng: 8.6775
              },
              zoom: 3
              },
              'preferences': {
              'zoom': {
                  'minZoom': 3,
                  'maxZoom': 18
              },
              'building': true
              }
          });

          map2.one(plugin.google.maps.event.MAP_READY, function() {
              console.log("--> map_canvas2 : ready.");
              interStatePlot(selected_state_id);         
              processed_interstate_route = 1;
              loading.hide();

              
          }); 

          
      }
    
         
    
  }

  if(page.id === 'routespage'){

    
  }

  if(page.id === 'newbookingpage'){
      //initialize owl carousel
      

  }


  if(page.id === 'aboutapp'){
    
   
  }


  if(page.id === 'signuppage'){
    
    //configure cropit
        jQuery('#image-editor').cropit({
          /* smallImage:'stretch', */
          allowDragNDrop:false,
        /*  width:300,
          height:300, */
          exportZoom:2,
          freeMoveboolean: true,
          onImageLoaded: function(){
            //$('.cropit-preview').css('background-image','none');
            var current_image = $('.cropit-preview').css('background-image');
            $('.cropit-preview').css('background-image','none');
            $('.cropit-preview-image-container').css('visibility','visible');
            
            var imageData = jQuery('#image-editor').cropit('export', {
              type: 'image/jpeg',
              quality: .9                    
            });
            if(!imageData){

              ons.notification.toast(__("Invalid photo selected"),{
                timeout: 1000
              });

              user_signup_photo = '';
              $('.cropit-preview-image-container').css('visibility','hidden');
              $('.cropit-preview').css('background-image',current_image);
              $('.cropit-image-input').val('');
              return;
              
            }

            user_signup_photo = imageData;
                        

          }          
      });

      

      $('.select-image-btn').off('click').on('click',function() {
          $('.cropit-image-input').click();
      });

  }

  if(page.id === 'profilepage'){

      //configure cropit
      jQuery('#image-editor').cropit({
        /* smallImage:'stretch', */
        allowDragNDrop:false,
       /*  width:300,
        height:300, */
        exportZoom:2,
        freeMoveboolean: true,
        onImageLoaded: function(){
          //$('.cropit-preview').css('background-image','none');
          var current_image = $('.cropit-preview').css('background-image');
          $('.cropit-preview').css('background-image','none');
          $('.cropit-preview-image-container').css('visibility','visible');
          
          var imageData = jQuery('#image-editor').cropit('export', {
            type: 'image/jpeg',
            quality: .9                    
          });
          if(!imageData){

            ons.notification.toast(__("Invalid photo selected"),{
              timeout: 1000
            });
            $('.cropit-preview-image-container').css('visibility','hidden');
            $('.cropit-preview').css('background-image',current_image);
            $('.cropit-image-input').val('');
            return;
            
          }
          loading.show();
          
          var post_data = {'action':'updateUserPhoto','photo':imageData};

          $.ajax({
              url: ajaxurl,
              type: 'POST',
              timeout : 10000,
              crossDomain:true,
              xhrFields: {withCredentials: true},
              data: post_data,
              success: function (data, status)
              {
                  loading.hide();    
                  try{
                      var data_obj = JSON.parse(data);
                  }catch(e){
                    ons.notification.toast(__("Error communicating with server"),{
                      timeout: 1000
                    });
                    $('.cropit-preview-image-container').css('visibility','hidden');
                    $('.cropit-preview').css('background-image',current_image);
                    $('.cropit-image-input').val('');
                    return;
                  }

                  if(data_obj.hasOwnProperty('error')){                      
                      
                      ons.notification.toast(data_obj.error,{
                        timeout: 1000
                      });
                      $('.cropit-preview-image-container').css('visibility','hidden');
                      $('.cropit-image-input').val('');
                  }

                  if(data_obj.hasOwnProperty('success')){

                    userprofileinfo.photo = data_obj.photo_url;
                      
                    ons.notification.toast(__("Profile photo updated"),{
                      timeout: 1000
                    });
                    $('.cropit-preview').css('background-image','none');
                    $('.cropit-preview-image-container').css('visibility','visible');
                  }
                  

              },
              error: function(jqXHR,textStatus, errorThrown) {  
                  loading.hide();
                  ons.notification.toast(__("Error communicating with server"),{
                    timeout: 1000
                  });
                  $('.cropit-preview-image-container').css('visibility','hidden');
                  $('.cropit-preview').css('background-image',current_image);
                  $('.cropit-image-input').val('');
                  return;
              }

          });




        }
    });

    $('.select-image-btn').click(function() {
        $('.cropit-image-input').click();        
    });

    
    

  }


  if(page.id === 'bookingpage'){     
    

  }




  if(page.id === 'notificationspage'){
    getnotifications();
    $('#notifications-refresh').on('click', function(){
      getnotifications();
    })
  }


  if(page.id === 'walletpage'){

    getwalletinfo();

       
    
  }


  $('.page__background').css("opacity","0");
  $(document.body).css("background-color","");
  
});



document.addEventListener('hide', function(event) {
  var page = event.target;

  

  // Each page calls its own initialization controller.
  if (page.id === "loginpage") {
    ons.enableDeviceBackButtonHandler();    
  }

  if(page.id === "mappage"){
    //ons.enableDeviceBackButtonHandler();
  }


  if(page.id === "routespage"){   
   

  }

  if(page.id === 'locationmappage'){
    if(typeof map3 === 'object')map3.remove();
  }


  if(page.id === 'interstatepage'){

    if(trip_summary_dialog_show){
        $("#trip-summary-back-btn").css("visibility","hidden");
        $("#trip-summary-back-btn").css("z-index","10");
        $("#menubtn").css("visibility","visible");
        $("#menubtn").css("z-index","100");
        $("#new-bookng-details").css("visibility","hidden");
        $("#new-bookng-details").css("left", "-10000px");
        trip_summary_dialog_show = 0;
    }

    map2.clear(); //clear all marker on map
    map.clear();
    if(route_polyline_interstate){
      route_polyline_interstate.remove();
      route_polyline_interstate = null;                     
    }

    $('#pac-input').val('');
    $('#pac-input2').val('');
   
    if(route_polyline){
        route_polyline.remove();
        toggleroutepathanimation(0);
        route_polyline = null;                     
    }

    pick_up_data=[];
    drop_off_data=[];
    pick_up_data = {'address': '','lng':'','lat':''};
    drop_off_data = {'address': '','lng':'','lat':''};
    $("#bookbutton").css("visibility","hidden");

    marker1 = undefined;
    marker2 = undefined;
    marker3 = undefined;
    marker4 = undefined;

    getuserlocation();
    
    
  }

  




  
});






function getroutestariffs(suppress_alerts){
  
  if(typeof routetariffs === 'object'){
    return;       
  }

  selected_city_id = localStorage.getObject('route-id');
  selected_city_route = localStorage.getObject('route-city');

  var post_data = {'action':'getroutetariffs','sel_route_id':selected_city_id,'sel_route_name':selected_city_route};       
        jQuery.ajax({
        url: ajaxurl,
        method: 'POST',
        timeout : 10000,
        crossDomain:true,
        xhrFields: {withCredentials: true},
        data: post_data,
        success: function (data, status)
            {
                loading.hide(); 
                console.log(data);
                
                
                try{
                    var data_obj = JSON.parse(data);
                }catch(e){
                  if(suppress_alerts != 1){
                    ons.notification.alert(__("Error communicating with server"),{title:""});
                  }
                    return;
                }
    
                if(data_obj.hasOwnProperty('error')){
                  if(suppress_alerts != 1){   
                    ons.notification.alert(data_obj.error,{title:""});
                  }
                    
                    return;

                }
  

                
                if(data_obj.hasOwnProperty('success')){
                    $('#rides-img-preload').html(data_obj.result.preloadrides);
                    console.log(data_obj);
                    if(data_obj.result.hasOwnProperty('route-exists') === false){
                      localStorage.removeItem('route-city');
                      localStorage.removeItem('route-id');
                      selected_city_id = null;
                      selected_city_route = undefined;
                      ons.notification.alert(__("Please select a city route first"),{title:""});
                      
                    }
                    
                    routetariffs = JSON.parse(data);
                    
                }


               
                
                
            },
            error: function() { 
              loading.hide();                                
              if(suppress_alerts != 1){  
                ons.notification.alert(__("Error communicating with server"),{title:""});
              }
              return;
                
            }

        });




}



function getuserinfopages(){

  loading.show();  
  var post_data = {'action_get':'getuserinfopages'};       
  jQuery.ajax({
  url: ajaxurl,
  method: 'GET',
  timeout : 10000,
  crossDomain:true,
  xhrFields: {withCredentials: true},
  data: post_data,
  success: function (data, status)
      {
        loading.hide();
                   
          try{
              var data_obj = JSON.parse(data);
          }catch(e){
              
              return;
          }

          if(data_obj.hasOwnProperty('error')){

              ons.notification.toast(data_obj.error, {
                timeout: 2000
              });
              return;

          }


          
          if(data_obj.hasOwnProperty('success')){
            $('#privacy-content').html(data_obj.terms); 
            $('#aboutpage-content').html(data_obj.about); 
            $('#drivewith-content').html(data_obj.drivewith);            
            terms_and_privacy_content = data_obj.terms; 
            aboutpage_content = data_obj.about;                          
            drivewith_content = data_obj.drivewith;                          
            return;
          }


        
          
          
      },
      error: function() {
        loading.hide();
        ons.notification.toast('Failed to load data.', {
          timeout: 2000
        });          
        return;
          
      }

  });



}




function gethelpdata(){

  loading.show();  
  var post_data = {'action_get':'gethelpdata'};       
  jQuery.ajax({
  url: ajaxurl,
  method: 'GET',
  timeout : 10000,
  crossDomain:true,
  xhrFields: {withCredentials: true},
  data: post_data,
  success: function (data, status)
      {
        loading.hide();
                   
          try{
              var data_obj = JSON.parse(data);
          }catch(e){
              
              return;
          }

          if(data_obj.hasOwnProperty('error')){

              ons.notification.toast(data_obj.error, {
                timeout: 2000
              });
              return;

          }


          
          if(data_obj.hasOwnProperty('success')){
            help_topics = data_obj.help_cat_topics;
            help_categories = data_obj.help_cat;                         
            $('#help-cat-content').html(help_categories);
            return;
          }


        
          
          
      },
      error: function() {
        loading.hide();
        ons.notification.toast(__('Error communicating with server'), {
          timeout: 2000
        });          
        return;
          
      }

  });



}



function gethelpcontent(id){

  loading.show();  
  var post_data = {'action_get':'gethelpcontent','id':id};       
  jQuery.ajax({
  url: ajaxurl,
  method: 'GET',
  timeout : 10000,
  crossDomain:true,
  xhrFields: {withCredentials: true},
  data: post_data,
  success: function (data, status)
      {
        loading.hide();
                   
          try{
              var data_obj = JSON.parse(data);
          }catch(e){
              
              return;
          }

          if(data_obj.hasOwnProperty('error')){

              ons.notification.toast(data_obj.error, {
                timeout: 2000
              });
              return;

          }


          
          if(data_obj.hasOwnProperty('success')){
            help_topics_contents[id] = data_obj.help_content;   
            $('#help-content').html(help_topics_contents[id]);
            return;
          }


        
          
          
      },
      error: function() {
        loading.hide();
        ons.notification.toast(__('Error communicating with server'), {
          timeout: 2000
        });          
        return;
          
      }

  });



}



function getwalletinfo(suppress_alerts){
      loading.show();
      if(!suppress_alerts){
        ons.notification.toast(__('Updating wallet items...'), {
          timeout: 2000
        });
      }

      var post_data = {'action':'getwalletinfo'};       
      jQuery.ajax({
      url: ajaxurl,
      method: 'POST',
      timeout : 10000,
      crossDomain:true,
      xhrFields: {withCredentials: true},
      data: post_data,
      success: function (data, status)
          {
            loading.hide(); 
              //console.log(data);
              
              
              try{
                  var data_obj = JSON.parse(data);
              }catch(e){
                if(suppress_alerts != 1){
                  ons.notification.toast(__('Error communicating with server'), {
                    timeout: 2000
                  });
                }
                  return;
              }

  
              if(data_obj.hasOwnProperty('error')){
                if(suppress_alerts != 1){
                  ons.notification.alert(data_obj.error,{title:""});
                }
                  return;                  

              }


              
              if(data_obj.hasOwnProperty('success')){
                if(!suppress_alerts){
                  ons.notification.toast(__('Wallet items updated'), {
                    timeout: 2000
                  });
                }

                reward_points = data_obj.reward_points; 
                wallet_amount = data_obj.wallet_amt;                
                wallet_history_items = data_obj.wallet_history;
                wallet_debit_history = data_obj.wallet_debit;

                

                if(wallet_history_items !== ""){
                  $('#wallethistoryitems').html("<ons-list>" + wallet_history_items + "</ons-list>");
                }else{
                  $('#wallethistoryitems').html("<div class='center-screen'><p style='text-align:center;'>" + __("No records available") + "</p></div>");
                }

                if(wallet_debit_history !== ""){
                  $('#walletdhistoryitems').html("<ons-list>" + wallet_debit_history + "</ons-list>");
                }else{
                  $('#walletdhistoryitems').html("<div class='center-screen'><p style='text-align:center;'>" + __("No records available") + "</p></div>");
                }

                var wallet_amount_currency_converted = wallet_amount * selected_city_curency_exchange_rate; //converting wallet amount from default currency to selected city currency
                wallet_amount_currency_converted = Math.round(wallet_amount_currency_converted * 100) / 100;
            
                $('#walletbal').html(selected_city_curency_symbol + wallet_amount_currency_converted); //show amount
                $('#rewardpointsvalue').text(reward_points);
                
                
                
                return;
              }


            
              
              
          },
          error: function() { 
            loading.hide();
            if(suppress_alerts != 1){
              ons.notification.toast(__('Error communicating with server'), {
                timeout: 2000
              });
            }
            return;
              
          }

      });



}


function getbookings(){
  loading.show();
  ons.notification.toast(__('Updating trips information...'), {
    timeout: 2000
  });
    var post_data = {'action_get':'getbookings'};       
    jQuery.ajax({
    url: ajaxurl,
    method: 'GET',
    timeout : 20000,
    crossDomain:true,
    xhrFields: {withCredentials: true},
    data: post_data,
    success: function (data, status)
        {
            loading.hide();     
            console.log(data);
            
            
            try{
                var data_obj = JSON.parse(data);
            }catch(e){
              
                ons.notification.alert(__("Error communicating with server"),{title:""});
              
                return;
            }


            if(data_obj.hasOwnProperty('error')){
              
                ons.notification.alert(data_obj.error,{title:""});
              
                return;                  

            }


            
            if(data_obj.hasOwnProperty('success')){
              ons.notification.toast(__('Bookings information updated'), {
                timeout: 2000
              });              
              bookings_data['pend_onride'] = data_obj.pend_onride;
              bookings_data['completed'] = data_obj.booking_comp;
              bookings_data['cancelled'] = data_obj.booking_canc;

              if(data_obj.pend_onride !== ""){
                $('#booking-pend-onride').html(data_obj.pend_onride);                
              }else{
                $('#booking-pend-onride').html("<div class='center-screen'><p style='text-align:center;'>" + __("No records available") + "</p></div>");
              }


              if(data_obj.booking_comp !== ""){
                $('#booking-comp').html(data_obj.booking_comp);
              }else{
                $('#booking-comp').html("<div class='center-screen'><p style='text-align:center;'>" + __("No records available") + "</p></div>");
              }

              if(data_obj.booking_canc !== ""){
                $('#booking-canc').html(data_obj.booking_canc);
              }else{
                $('#booking-canc').html("<div class='center-screen'><p style='text-align:center;'>" + __("No records available") + "</p></div>");
              }
              
                           
                                            
              return;
            }


          
            
            
        },
        error: function() { 
          loading.hide();
          ons.notification.alert(__("Error communicating with server"),{title:""});
          return;
            
        }

    });



}

function getnotifications(notify){
  loading.show();
  $('#notification-item-list').html(notifications_data);
  if(!notify){
    ons.notification.toast(__('Updating notifications...'), {
      timeout: 2000
    });
  }
    var post_data = {'action':'getusernotifications'};       
    jQuery.ajax({
    url: ajaxurl,
    method: 'POST',
    timeout : 10000,
    crossDomain:true,
    xhrFields: {withCredentials: true},
    data: post_data,
    success: function (data, status)
        {
            loading.hide();     
            console.log(data);
            
            
            try{
                var data_obj = JSON.parse(data);
            }catch(e){
                if(!notify){
                  ons.notification.alert(__("Error communicating with server"),{title:""});
                }
              
                return;
            }


            if(data_obj.hasOwnProperty('error')){
              if(!notify){
                ons.notification.alert(data_obj.error,{title:""});
              }
              return;                  

            }

            if(data_obj.hasOwnProperty('nodata')){
              if(!notify){
                ons.notification.alert(data_obj.nodata,{title:""});
              }
              notifications_data = "<div class='center-screen'><p style='text-align:center;'>" + __("No records available") + "</p></div>";
              $('#notification-item-list').html("");
              return;                  

            }


            
            if(data_obj.hasOwnProperty('success')){
              if(!notify){
                ons.notification.toast(__('Notifications updated'), {
                  timeout: 2000
                });
              }
              notifications_data = data_obj.notifications;
              $('#notification-item-list').html(data_obj.notifications);
              if(notify){
                var stored_n_count = localStorage.getObject('n_count');
                if(parseInt(data_obj.n_count) > stored_n_count){
                  $('#notification-icon').css('color','red');
                }else{

                  $('#notification-icon').css('color','white');
                }
                
              }else{
                $('#notification-icon').css('color','white');
                localStorage.setObject('n_count',data_obj.n_count);
              }                                                      
              return;

            }


          
            
            
        },
        error: function() { 
          loading.hide();
          if(!notify){
            ons.notification.alert(__("Error communicating with server"),{title:""});
          }
          return;            
        }

    });


}


function interStatePlot(state_route_id){

  if (typeof map !== 'object')return;
  
  
  //clear map and directions  

  map2.clear(); //clear all marker on map
  if(route_polyline_interstate){
    route_polyline_interstate.remove();
    route_polyline_interstate = null;                     
  }
  pick_up_data=[];
  drop_off_data=[];
  pick_up_data = {'address': '','lng':'','lat':''};
  drop_off_data = {'address': '','lng':'','lat':''};

  marker1 = undefined;
  marker2 = undefined;
  marker3 = undefined;
  marker4 = undefined;

  var plng = routetariffs.result[state_route_id].cars[0].pick_lng;
  var plat = routetariffs.result[state_route_id].cars[0].pick_lat;
  var dlng = routetariffs.result[state_route_id].cars[0].drop_lng;
  var dlat = routetariffs.result[state_route_id].cars[0].drop_lat;

  //$('#bookbutton2').attr("disabled","disabled");
  

  
  pick_up_data['address'] = routetariffs.result[state_route_id].cars[0].pick_name;
  pick_up_data['lng'] = parseFloat(routetariffs.result[state_route_id].cars[0].pick_lng);
  pick_up_data['lat'] = parseFloat(routetariffs.result[state_route_id].cars[0].pick_lat);

  drop_off_data['address'] = routetariffs.result[state_route_id].cars[0].drop_name;
  drop_off_data['lng'] = parseFloat(routetariffs.result[state_route_id].cars[0].drop_lng);
  drop_off_data['lat'] = parseFloat(routetariffs.result[state_route_id].cars[0].drop_lat);

    
  setTimeout(() => {

      
      map2.setClickable(false);
      map2.animateCamera({
          target: {lat: pick_up_data.lat, lng: pick_up_data.lng},
          zoom: 18,
          duration: 1000,
          padding: 0  // default = 20px
        }, function() {
            map2.setClickable(true);
          //alert("Camera target has been changed");
          

      });
      marker3 = map2.addMarker({
          'position':{lat:pick_up_data.lat,lng: pick_up_data.lng},
          icon: 'green',
          animation: plugin.google.maps.Animation.DROP
      });

      marker3._isReady = true;

      


      setTimeout(() => {
        map2.setClickable(false);
        map2.animateCamera({
            target: {lat: drop_off_data.lat, lng: drop_off_data.lng},
            zoom: 18,
            duration: 1000,
            padding: 0  // default = 20px
          }, function() {
              map2.setClickable(true);
            //alert("Camera target has been changed");
            
  
        });

        marker4 = map2.addMarker({
            'position':{lat:drop_off_data.lat,lng: drop_off_data.lng},
            animation: plugin.google.maps.Animation.DROP
        });

        marker4._isReady = true;

      

      setTimeout(function(){
        
        process_interstate_booking_route(); 
       
  }, 2500);
      
  }, 1500);

                  
  }, 500);



}





function AnimateAtStart(){
  
  app_start_animate = 1;

 app_start_animate_timer = setInterval(function(){
    app_start_animate_counter++;

    if(app_start_animate_counter == 5){
      $("#menubtn").css("visibility","visible");
      $("#menubtn").removeClass("bounceIn animated").addClass("bounceIn animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass("bounceIn animated");
      })

    }


    if(app_start_animate_counter == 6){
      $("#mylocationbtn").css("visibility","visible");
      $("#mylocationbtn").removeClass("bounceIn animated").addClass("bounceIn animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass("bounceIn animated");
      })

    }
    


    
    
    if(app_start_animate_counter == 8){
      /* $("#pick-box").css("visibility","visible");
      $("#pick-box").removeClass("zoomIn animated").addClass("zoomIn animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass("zoomIn animated");
      }) */


      /* $("#current-ride-driver-details").css("display","visible");
      $("#current-ride-driver-details").removeClass("zoomInLeft animated").addClass("zoomInLeft animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass("zoomInLeft animated"); 
      }) */

    }


    if(app_start_animate_counter == 8){
      $("#drop-box").css("visibility","visible");
      $("#drop-box").removeClass("zoomIn animated").addClass("zoomIn animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass("zoomIn animated");
      })

    }


    if(app_start_animate_counter == 10){
      $("#recent-strip-container").css("visibility","visible");
      $("#recent-strip-container").removeClass("slideInRight animated").addClass("slideInRight animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass("slideInRight animated");
      })

    }


    



    if(app_start_animate_counter == 20){
      clearInterval(app_start_animate_timer);
      app_start_animate_counter = 0;
    }

  },100);


}
