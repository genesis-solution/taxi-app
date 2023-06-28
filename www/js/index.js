/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */


var APP_TITLE = "Kiwi";
var APP_DEBUG = false; //set to true for debug mode on browser. false for production
var APP_VERSION_IOS = "10.0.0";
var APP_VERSION_ANDROID = "10.0.0";
var APP_UPDATE_URL_IOS = ""; 
var APP_UPDATE_URL_ANDROID = ""; 
var app_start_animate = 0;
var app_start_animate_counter = 0;
var app_start_animate_timer;
var google = undefined;
var walletbal = 0;
var Latitude = undefined;
var Longitude = undefined;
var marker = undefined;
var map = undefined;
var map2 = undefined;
var map3 = undefined;
var marker1 = undefined;
var driver_marker = undefined;
var city_drivers_markers = {};
var bounds = undefined;
var bounds2 = undefined;
var marker2 = undefined;
var marker3 = undefined;
var marker4 = undefined;
var markerds1 = undefined;
var markerds2 = undefined;
var markerds3 = undefined;
var markerdrvsearch = undefined;
var drv_search_rider_lat_long = {'lng':'','lat':''};
var Latitude1 = undefined;
var Longitude2 = undefined;
var latLong1 = undefined;
var latLong2 = undefined;
var latLong3 = undefined;
var latLong4 = undefined;
var pick_up_data = {'address': '','lng':'','lat':''};
var drop_off_data = {'address': '','lng':'','lat':''};
var userprofileinfo = undefined;
var routetariffs = undefined;
var watchID = undefined;
var mapOptions = undefined;
var mapOptions2 = undefined;
var device_ready = 0;
var session_id = "0";
var siteurl = "https://kiwiplus.site";
var ajaxurl = siteurl + '/ajax.php';
var loading = $('#loading');
var startscreen = $('#startscreen');
var animatecircle = $('#animate-circle');
var notification_dialog = $('#notif-dialog');
var chat_window = document.querySelector("#chat-window");
var user_info_window = document.querySelector("#user-info-window");
var chat_window_display_status = 0;
var selected_city_route = undefined;
var stored_selected_route;
var selected_city_id = "0";
var selected_city_lat;
var selected_city_long;
var selected_city_radius = 1500; //default city radius for google places autocomplete strictbound
var selected_city_curency_symbol = '';
var selected_city_curency_exchange_rate = 1;
var selected_city_curency_code = '';
var booking_currency_symbol = '';
var selected_state_route = undefined;
var intra_city_distance = undefined;
var intra_city_duration = undefined;
var intra_city_distance_text = '';
var intra_city_duration_text = '';
var selected_state_id = "0";
var selected_state_coord = undefined;
var google_map_api_key = '';
var directionsDisplay = undefined;
var directionsDisplay2 = undefined;
var routes_loaded = 0;
var cdate = new Date();
var call_center_num = null;
var wallet_amount = null;
var wallet_history_items = null;
var wallet_debit_history;
var ride_cpk = null;
var ride_cpm = null;
var ride_puc = null;
var ride_doc = null;       
var nride_cpk = null;
var nride_cpm = null;
var nride_puc = null;
var nride_doc = null;
var night_day = 0;
var peak_period_enabled = 0;
var peak_period_start = 0;
var peak_period_end = 0;
var peak_period_days = undefined;
var peak_period_charge_type = 0;
var peak_period_charge_value = 0;
var peak_period = 0;
var decoded_location_data = {'address':'','lat':null,'lng':null};
var bookride_cost = 0.00;
var selected_city_ride = 0;
var bookings_data = {'pend_onride':'','completed':'','cancelled':''};
var notifications_data = '';
var online_payment_info = undefined;
var get_push_token_retry_count = 0;
var side_menu_state = 0;
var close_dialog_enable = 0;
var mobile_gps_enabled = 0;
var notification_sound;
var MAP_TYPE_IN_USE = 1; //sets the google map type to use. 0 = javascript, 1 = native;
var map_load_timer_handle;
var app_online = 0; //sets if app is online or offline;
var google_autocomplete_service;
var googlemap_autocomplete_session = 0;
var location_type_selected = 0; //0 = pick-up, 1 = drop-off
var route_polyline;
var route_points;
var route_polyline_interstate;
var route_points_interstate;
var loading_directions = 0;
var loading_geocode = 0;
var platform;
var favourite_places = [];
var fav_list_items_string = "";
var recent_list_items_string = "";
var aboutpage_content = "";
var terms_and_privacy_content = '';
var drivewith_content = '';
var help_data;
var verified_coupon_code = '';
var point_lat = undefined;
var point_long = undefined;
var processed_interstate_route = 0;
var user_location = {'lat':null,'lng':null};
var help_categories = '';
var help_topics = [];
var help_topics_contents = [];
var processing= 0;
var driver_notify_ui_displayed = 0;
var routeanimationtimer;
var routepointindex = 0;
var route_polyline_animatable;
var route_distance_duration_info_marker;
var route_distance_duration_info_window;
var get_available_drivers_timer;
var user_timezone;
var driver_search_display_timer;
var carrier_country_code = '';
var user_country_dial_code = '';
var user_signup_photo;
var processed_notifications = {};
var ride_rating = 1;
var pubnub_reconnection_count = 0;
var resend_code_btn_status = 1;
var resend_code_countdown_timer_handle = 0;
const RESEND_CODE_COUNTDOWN_VALUE = 60;
const USE_FIREBASE_PHONE_AUTH = 1; 
var firebase_phone_number_verified = 0;
var firebase_phone_auth_verificationid = '';
var flash_notification_available = 0;
var app_fully_started = 0;
var scheduled_ride_enabled = 0;
var selected_lang = {code:'es',name:'Spanish (Español)',dir:'ltr'};
var default_currency_data;
var current_ride_status = 0; 
var current_booking_data = {'status':0,'action':'','booking_id':0,'driver_id':0,'driver_firstname':'','driver_phone':'','driver_platenum':'','driver_rating':'','driver_location_lat':0.00,'driver_location_long':0.00,'driver_carmodel':'','driver_photo':'','completion_code':'','pickup_lat':0.00,'pickup_long':0.00,'dropoff_lat':0.00,'dropoff_long':0.00,'driver_completed' : 0,'driver_carid':0};
var app_settings = {};
var recent_locations_data;
var reward_points = 0.0;
var trip_summary_dialog_show = 0;
var driver_tip_amount = 0;
var dest_location_type_selected = 0;
var multi_destination_mode = 0;
var destination_stop_inp1_shown = 0;
var destination_stop_inp2_shown = 0;
var multi_destinations = {'pickup' : {'address':'', 'lat':'', 'lng' :''},'dest-1':{'address':'', 'lat':'', 'lng' :''},'dest-2':{'address':'', 'lat':'', 'lng' :''},'dropoff' : {'address':'', 'lat':'', 'lng' :''}};
var server_client_time_diff = 0;


document.addEventListener('resume', function(){ //fires when app is pulled up from background


    if(!APP_DEBUG){
        //StatusBar.hide(); //hide status bar
        /* cordova.plugins.diagnostic.isLocationAvailable(function(status){
            //success
            console.log(status);
            if(status){
                //ons.notification.alert("Location Enabled.",{title:""});
                
                
            }else{
                ons.notification.alert( APP_TITLE + " requires location service turned on for the best experience. Please turn on GPS and location services in phone settings",{title:""});
            }

        }, function(){
            //error
        }); */
    }

    



}, false);






ons.ready(function() {
    // deviceready event is fired
    // Call whatever Cordova APIs
    loadLang();
    
    loadCountryTel();
    
    device_ready = 1;  

    if(window.MobileAccessibility){
        MobileAccessibility.setTextZoom(90, function(){return;});
        //window.MobileAccessibility.usePreferredTextZoom(false);
    }

    var tz = jstz.determine(); // Determines the time zone of the browser client
    user_timezone = tz.name(); //read timezone value
    
    
    
    startscreen.show();
    setTimeout(function(){
        translateElements();        
    },2000)
    
    //checkConnection();
    
    //var watchID = watchMapPosition()

    
    carrier_country_code = 'ng';
    user_country_dial_code = '+234';

    

        
    if(!APP_DEBUG){

        /* window.plugins.sim.getSimInfo(function(res){
            carrier_country_code = res.hasOwnProperty('countryCode') ? res.countryCode : 'ng';
            console.log(res);
            carrier_country_code = carrier_country_code.toLocaleLowerCase();
        }, function(err){
            carrier_country_code = 'ng';
            user_country_dial_code = '+234';
            console.log('error getting device carier info.' + err);
        }); */

        window.plugins.carrier.getCarrierInfo(function(res){  
            //alert(JSON.stringify(res));          
            carrier_country_code = res.hasOwnProperty('countryCode') ? res.countryCode : 'ng';
            carrier_country_code = carrier_country_code.toLocaleLowerCase();
        }, function(err){
            carrier_country_code = 'ng';
            user_country_dial_code = '+234';
            console.log('error getting device carier info.' + err);
        });

        

        var sound_url = 'sound/notify.mp3';
        if(device.platform.toLowerCase() === "android"){
            sound_url = 'file:///android_asset/www/sound/notify.mp3';
        }
        

        notification_sound = new Media(sound_url,
                // success callback
                function () {
                    console.log("playAudio():Audio Success");
                },
                // error callback
                function (err) {
                    console.log("playAudio():Audio Error: " + err);
                }
        );
    
        cordova.plugins.firebase.messaging.requestPermission().then(function(token) {
            return;
        });


        cordova.plugins.firebase.messaging.onMessage(function(payload) { //trigger push notification when app is in foreground
            process_push_message(payload);
        });


        cordova.plugins.firebase.messaging.onBackgroundMessage(function(payload) { //trigger push notification when app is in background
            process_push_message(payload);
        });


        //firebase AUth

        cordova.plugins.firebase.auth.onAuthStateChanged(function(userInfo) {
            if (userInfo) {
                // user was signed in
                console.log('success sign in: ' + userInfo);
            } else {
                // user was signed out
                console.log('success sign out: ' + userInfo);
            }
        });


        
    }



    document.addEventListener("offline", function(){
        app_online = 0;
        $('#nointernet').css('visibility','visible');
        
    }, false);


    document.addEventListener("online", function(){
        app_online = 1;
        $('#nointernet').css('visibility','hidden');
    }, false);


    ons.setDefaultDeviceBackButtonListener(onBackButton);

    document.querySelector("#chat-window").onDeviceBackButton = function(){
        chat_window.hide();
    }
    
    document.querySelector("#chat-window").addEventListener('preshow', function(){
        chat_window_display_status = 1;
        $('#chat-new-msg-ind').hide();
    });


    document.querySelector("#chat-window").addEventListener('prehide', function(){
        chat_window_display_status = 0;
    });
    
        

    if(!APP_DEBUG){
        requestLocationAccuracy();                        
    }else{
        mapinitialize();
    }

    
    //get user applied promo code 
    let stored_promo_code = localStorage.getObject('user-promo-codes');    
    if(!!stored_promo_code && stored_promo_code.hasOwnProperty('promo_code')){
        verified_coupon_code = stored_promo_code.promo_code;        
    }
    



    

});


function redeempoints(){

    loading.show();

    $.ajax({ 
        url: ajaxurl, 
        method: 'GET',
        crossDomain:true,
        timeout:20000,
        xhrFields: {withCredentials: true},
        data: { 'action_get' : 'redeempoints'},
        dataType: 'json',
        success: function(data){

            loading.hide();

            
            if(data.hasOwnProperty('error')){
                
                ons.notification.alert(data.error,{title:''});
                return;
            }
            
            if(data.hasOwnProperty('success')){
                
                
                ons.notification.alert(__('Your reward points have been redeemed and added to your wallet'),{title:''});
                getwalletinfo();

            }
            

        },
        error: function(){

            loading.hide();
            
            ons.notification.toast(__("Error communicating with server"),{
                timeout: 1000
            });

            return;

        } 


    });
}



function share_message(title_str,text_str,url_str){
    navigator.share({
        title: title_str,
        text: text_str,
        url: url_str
    }).then(() => {
        console.log("Location was shared successfully");
    }).catch((err) => {
        console.error("Location share failed:", err.message);
    });

    
}



var chat_update_ajax_handle;
function chat_update_content(booking_id){

    if (chat_update_ajax_handle) {
        chat_update_ajax_handle.abort();
    }    
        
    chat_update_ajax_handle = $.ajax({ 
        url: ajaxurl, 
        method: 'GET',
        crossDomain:true,
        timeout:20000,
        xhrFields: {withCredentials: true},
        data: { 'action_get' : 'getChatContent', 'booking_id':booking_id},
        dataType: 'json',
        success: function(data){
            
            chat_update_ajax_handle = undefined;

            if(data.hasOwnProperty('error')){
                $('#chat-window-body').html(`<div class='center-screen'><p style='text-align:center;'>${data.error}</p></div>`);
            }

            if(data.hasOwnProperty('success')){
                //refresh chat content
                if(data.hasOwnProperty('chat_content')){
                    $('#chat-window-body').empty();
                    $('#chat-window-body').html(data.chat_content);
                    $('#chat-window-body').scrollTop(10000000);
                    
                }

                //new chat message?
                if(data.hasOwnProperty('chat_new_content') && data.chat_new_content == 1){
                    notification_sound.play();
                    if(chat_window_display_status){
                        chat_window.show();  
                    }else{
                        $('#chat-new-msg-ind').show();
                    }                 ;
                }
            }
            

        },
        error: function(){
            chat_update_ajax_handle = undefined;
        } 


    });
    
}


function chat_msg_send(booking_id){
    

    let msg = $('#chat-msg-content').val();
    if(!msg)return;

    $('#chat-msg-send-btn').prop('disabled', true);
    $('#chat-msg-send-btn').css("background-color","grey");

    $.ajax({ 
        url: ajaxurl, 
        method: 'GET',
        crossDomain:true,
        timeout:20000,
        xhrFields: {withCredentials: true},
        data: { 'action_get' : 'chatSendMsg', 'booking_id':booking_id,'chat_msg':msg},
        dataType: 'json',
        success: function(data){

            $('#chat-msg-send-btn').prop('disabled', false);
            $('#chat-msg-send-btn').css("background-color","#0077ff");

            if(data.hasOwnProperty('error')){
                
                ons.notification.toast(__("Error communicating with server"),{
                    timeout: 1000
                });
                return;
            }
            
            if(data.hasOwnProperty('success')){
                
                //refresh chat content               

                if(data.hasOwnProperty('chat_content')){
                    $('#chat-msg-content').val('');
                    $('#chat-window-body').empty();
                    $('#chat-window-body').html(data.chat_content);
                    $('#chat-window-body').scrollTop(10000000);
                }

                //new chat message?
                if(data.hasOwnProperty('chat_new_content') && data.chat_new_content == 1){
                    notification_sound.play();
                    if(!chat_window_display_status){
                        $('#new_chat_msg_ind').show();
                    }
                }

            }
            

        },
        error: function(){
            $('#chat-msg-send-btn').prop('disabled', false);
            $('#chat-msg-send-btn').css("background-color","#0077ff");
            ons.notification.toast(__("Error communicating with server"),{
                timeout: 1000
            });

            return;

        } 


    });



}


function copyToClipboard(text) {
    if (window.clipboardData && window.clipboardData.setData) {
        // IE specific code path to prevent textarea being shown while dialog is visible.
        return clipboardData.setData("Text", text); 

    } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
        document.body.appendChild(textarea);
        textarea.select();
        var copied = false;
        try {
            copied = true;
            return document.execCommand("copy");  // Security exception may be thrown by some browsers.
        } catch (ex) {
            console.warn("Copy to clipboard failed.", ex);
            ons.notification.toast(__("Failed to copy referal code"),{
                timeout: 1000
            });
            return false;
        } finally {
            document.body.removeChild(textarea);
            if(copied){
                ons.notification.toast(__("Referal code copied"),{
                    timeout: 1000
                });
            }
        }
    }
}



function hideuielements(){
    
    current_booking_data = {'status':0,'action':'','booking_id':0,'driver_id':0,'driver_firstname':'','driver_phone':'','driver_platenum':'','driver_rating':'','driver_location_lat':0.00,'driver_location_long':0.00,'driver_carmodel':'','driver_photo':'','completion_code':'','pickup_lat':0.00,'pickup_long':0.00,'dropoff_lat':0.00,'dropoff_long':0.00};
    if(processing == 1)return;
    var anim_count = 0;

    processing = 1;
    
    //clear map interface and location input boxes
    $('#pac-input').val('');
    $('#pac-input2').val('');
    marker1 = undefined;
    marker2 = undefined;
    if(route_polyline){
        route_polyline.remove();
        toggleroutepathanimation(0);
        route_polyline = null;                     
    }

    if(route_distance_duration_info_marker){
        route_distance_duration_info_marker.remove();
        route_distance_duration_info_marker = null;
    }
    //clear map interface and location input boxes
    map.clear(); //clear all marker on map
    city_drivers_markers = {}; //clear drivers marker handles
    pick_up_data=[];
    drop_off_data=[];
    pick_up_data = {'address': '','lng':'','lat':''};
    drop_off_data = {'address': '','lng':'','lat':''};
    markerds1 = undefined;
    markerds2 = undefined;

    //reset multi destination mode
    multi_destination_mode = 0;        
    $('#location-type-icon-ds1').hide();
    $('#location-type-icon-ds2').hide();
    dest_location_type_selected = 0;
    destination_stop_inp1_shown = 0;
    destination_stop_inp2_shown = 0; 
    multi_destinations = {'pickup' : {'address':'', 'lat':'', 'lng' :''},'dest-1':{'address':'', 'lat':'', 'lng' :''},'dest-2':{'address':'', 'lat':'', 'lng' :''},'dropoff' : {'address':'', 'lat':'', 'lng' :''}};

    
    var ui_anim_interval_timer = setInterval(function(){
        anim_count++;
        if(anim_count == 1){
            $("#driver-notify-ui-back-btn").removeClass("fadeOutLeft animated").addClass("fadeOutLeft animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                $(this).removeClass("fadeOutLeft animated");
                $("#driver-notify-ui-back-btn").css("visibility","hidden");
                $("#driver-notify-ui-back-btn").css("z-index","10");
            })
        }

        if(anim_count == 2){
            $("#bookbutton").removeClass("zoomOut animated").addClass("zoomOut animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                $(this).removeClass("zoomOut animated");
                $("#bookbutton").css("visibility","hidden");
            })
        }

        if(anim_count == 3){

            $("#statusmsg").removeClass("zoomOut animated").addClass("zoomOut animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                $(this).removeClass("zoomOut animated");
                $("#statusmsg").css("visibility","hidden");
            })
        }


        if(anim_count == 7){
            $("#pick-box").css("visibility","visible");
            $("#pick-box").removeClass("zoomIn animated").addClass("zoomIn animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
              $(this).removeClass("zoomIn animated");
            })     
            
        }
      
      
        if(anim_count == 8){
            $("#drop-box").css("visibility","visible");
            $("#drop-box").removeClass("zoomIn animated").addClass("zoomIn animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
              $(this).removeClass("zoomIn animated");
            })
      
        }



        if(anim_count == 9){
            $("#current-ride-driver-details").removeClass("fadeOutDown animated").addClass("fadeOutDown animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                $(this).removeClass("fadeOutDown animated");
                $("#current-ride-driver-details").css("visibility","hidden");
                
            })
        }

        if(anim_count == 12){
            $("#menubtn").css("visibility","visible");
            $("#menubtn").css("z-index","100");
            $("#menubtn").removeClass("fadeInLeft animated").addClass("fadeInLeft animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                $(this).removeClass("fadeInLeft animated");
            })
            

        }


        if(anim_count == 13){
            $("#recent-strip-container").css("visibility","visible");
            $("#recent-strip-container").removeClass("slideInRight animated").addClass("slideInRight animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
              $(this).removeClass("slideInRight animated");
            })  
            
            clearInterval(ui_anim_interval_timer);
            anim_count = 0;
            processing = 0;
            driver_notify_ui_displayed = 0;
            getuserlocation();
        }

        



        


    },100);

    
    
}


function process_push_message(payload){

    //$('#driver-search').hide();
    if(map)showhidedriversearch(0);
    clearTimeout(driver_search_display_timer);
    if("gcm" in payload){
        if(payload.show == 1){
            //flash message
            $('#notif-title').html(payload.gcm.title);
            $('#notif-content').html(payload.gcm.body);
            if(!app_fully_started){
                flash_notification_available = 1;
            }else{
                notification_dialog.show();
            }
                
            //ons.notification.alert(payload.gcm.body,{title:payload.gcm.title});
            return;
        }
        //console.log("New foreground FCM message: ", payload);
    }else if("show" in payload){
        if(payload.show == 1){
            //flash message
            let msg_obj = JSON.parse(payload.msg);
            $('#notif-title').html(msg_obj.title);
            $('#notif-content').html(msg_obj.message);
            if(!app_fully_started){
                flash_notification_available = 1;
            }else{
                notification_dialog.show();
            }
            
        }
    }

    if(payload.hasOwnProperty('booking_id') && payload.hasOwnProperty('action')){

        if(payload.action != "chat-message"){
            if(processed_notifications.hasOwnProperty(payload.booking_id)){
                var found = processed_notifications[payload.booking_id].find(function(el){
                    
                    return el == payload.action;
                    
                });
                if(found){
                    //console.log('processed');
                    return;
                }else{
                    processed_notifications[payload.booking_id].push(payload.action);
                    //console.log('added');
                }
            }else{

                
                    processed_notifications[payload.booking_id] = [payload.action];
                
                
                //console.log('new');                    
            }
        }

        switch(payload.action){
            case "driver-assigned":
            driver_assigned_notify(payload);
            break;
            case "driver-arrived":
            driver_arrived_notify(payload);
            break;
            case "customer-onride":
            customer_onride_notify(payload);
            break;
            case "driver-complete":
            driver_complete_notify(payload);
            break;
            case "driver-cancelled":
            driver_cancelled_notify(payload);
            break;
            case "chat-message":
            driver_chat_msg_notify(payload);
            break;
            case "app-message":
            app_message(payload);
            break;
        }
        return;
    }
    
    if("action" in payload){
        return;
        switch(payload.action){
            /* case "driver-assigned":
            driver_assigned_notify(payload);
            break;
            case "driver-arrived":
            driver_arrived_notify(payload);
            break;
            case "customer-onride":
            customer_onride_notify(payload);
            break;
            case "driver-complete":
            driver_complete_notify(payload);
            break;
            case "driver-cancelled":
            driver_cancelled_notify(payload);
            break; */
            case "app-message":
            app_message(payload);
            break;
        }
    }


}



function resumeBooking(booking_id){

    if(!booking_id)return;

    loading.show();
    
    $.ajax({ 
        url: ajaxurl, 
        method: 'GET',
        crossDomain:true,
        timeout:20000,
        xhrFields: {withCredentials: true},
        data: { 'action_get' : 'resumebooking', 'booking_id':booking_id},
        dataType: 'json',
        success: function(data){

            loading.hide();

            if(data.hasOwnProperty('error')){
                
                ons.notification.toast(__(data.error),{
                    timeout: 1000
                });
                return;
            }
            
            if(data.hasOwnProperty('success')){
                
                document.querySelector('#myNavigator').popPage({animation: 'fade'});

                switch(data.ongoing_bk.action){
                    case "driver-assigned":
                    driver_assigned_notify(data.ongoing_bk);
                    break;
                    case "driver-arrived":
                    driver_arrived_notify(data.ongoing_bk);
                    break;
                    case "customer-onride":
                    customer_onride_notify(data.ongoing_bk);
                    break;
                }

            }
            

        },
        error: function(){

            loading.hide();
            
            ons.notification.toast(__("Error communicating with server"),{
                timeout: 1000
            });

            return;

        } 


    });


}

function driver_chat_msg_notify(push_data){
    chat_update_content(push_data.booking_id);
}


function driver_assigned_notify(push_data){ //show driver assigned app UI notification
    notification_sound.play();
    current_booking_data.status = 1;
    current_booking_data.action = push_data.action;
    current_booking_data.booking_id = push_data.booking_id;
    current_booking_data.driver_id = push_data.driver_id;
    current_booking_data.driver_firstname = push_data.driver_firstname;
    current_booking_data.driver_phone = push_data.driver_phone;
    current_booking_data.driver_platenum = push_data.driver_platenum;
    current_booking_data.driver_rating = push_data.driver_rating;
    current_booking_data.driver_location_lat = push_data.driver_location_lat;
    current_booking_data.driver_location_long = push_data.driver_location_long;
    current_booking_data.pickup_lat = push_data.pickup_lat;
    current_booking_data.pickup_long = push_data.pickup_long;
    current_booking_data.dropoff_lat = push_data.dropoff_lat;
    current_booking_data.dropoff_long = push_data.dropoff_long;
    current_booking_data.driver_completed = push_data.driver_completed_rides;
    current_booking_data.driver_carid = push_data.driver_carid;
    current_booking_data.driver_carmodel = push_data.driver_carmodel;
    current_booking_data.driver_photo = push_data.driver_photo;
    current_booking_data.completion_code = push_data.completion_code;


    $("#statusmsg h3").html(__("Driver is on his way"));
    $("#statusmsg h3").css('border-right','thin solid white');
    $('#ride-time-status').show();
    //compute how much time it will take driver to reach rider pickup location
    let rider_latlng = {'lat':parseFloat(push_data.pickup_lat),'lng':parseFloat(push_data.pickup_long)};
    let driver_latlng = {'lat':parseFloat(push_data.driver_location_lat),'lng':parseFloat(push_data.driver_location_long)};
    let distance = plugin.google.maps.geometry.spherical.computeDistanceBetween(rider_latlng, driver_latlng); //distance in meters
    let time_to_pickup_location_sec = distance / 5.555555556; //20km/hr to m/s - worst case time if driver is driving at this average speed

    let time_to_pickup_location_min = Math.floor(time_to_pickup_location_sec / 60);
    $('#ride-action-time').text(time_to_pickup_location_min); 
    if(time_to_pickup_location_min > 1){
        $('#ride-action-time-unit').text('Mins'); 
    }else{
        $('#ride-action-time-unit').text('Min');
    }
        
    let driver_rides_count = '';
    
    
    $('#assigned-driver-image-preload').attr('src',push_data.driver_photo); //load driver image
    $('#current-ride-driver-name').html(push_data.driver_firstname); //load driver firstname
    $('#current-ride-driver-car-model').html(push_data.driver_carmodel); //load driver car model and color
    $('#current-ride-driver-rating').attr("src","img/rating-" + push_data.driver_rating + ".png"); //load driver rating
    $('#current-ride-driver-car-number').html(push_data.driver_platenum); //load driver car plate number
    //$('#driver-rides-count').html("+" + (parseInt(push_data.driver_completed_rides / 10) * 10) + " " + __('Trips'));
    $('#driver-rides-count').html(push_data.driver_completed_rides + " " + __('Trips'));
    $('#current-ride-vehicle-img').attr('src', $(`#uniq-car-type-id-${push_data.driver_carid}`).attr('src'));
    $('#current-ride-completion-code').html(' | OTP: ' + push_data.completion_code); //load completion code
    

    $('#call-driver').data('phonenum',push_data.driver_phone); //load call driver action button data
    $('#sms-driver').data('phonenum',push_data.driver_phone); //load sms driver action button data
    $('#cancel-ride').data('bookingid',push_data.booking_id); ////load cancel booking action button data

    
    $('#chat-msg-send-btn').data('bookingid', push_data.booking_id);
    $('#chat-window-show-btn').data('bookingid', push_data.booking_id);

    var driver_location_lat = parseFloat(push_data.driver_location_lat);
    var driver_location_long = parseFloat(push_data.driver_location_long);

        
    
    //clear map interface and location input boxes
    map.clear(); //clear all marker on map
    city_drivers_markers = {}; //clear drivers marker handles
    if(route_polyline){
        route_polyline.remove();
        toggleroutepathanimation(0);
        route_polyline = null;                     
    }
    if(route_distance_duration_info_marker){
        route_distance_duration_info_marker.remove();
        route_distance_duration_info_marker = null;
    }
    pick_up_data=[];
    drop_off_data=[];
    pick_up_data = {'address': '','lng':'','lat':''};
    drop_off_data = {'address': '','lng':'','lat':''};

    //reset multi destination mode
    multi_destination_mode = 0;        
    $('#location-type-icon-ds1').hide();
    $('#location-type-icon-ds2').hide();
    dest_location_type_selected = 0;
    destination_stop_inp1_shown = 0;
    destination_stop_inp2_shown = 0; 
    multi_destinations = {'pickup' : {'address':'', 'lat':'', 'lng' :''},'dest-1':{'address':'', 'lat':'', 'lng' :''},'dest-2':{'address':'', 'lat':'', 'lng' :''},'dropoff' : {'address':'', 'lat':'', 'lng' :''}};

    marker1 = undefined;
    marker2 = undefined;
    markerds1 = undefined;
    markerds2 = undefined;

    $('#bookbutton').css('visibility','hidden');
    $('#pac-input').val('');
    $('#pac-input2').val('');

    map.setClickable(false);
    map.animateCamera({
        target: {lat: driver_location_lat, lng: driver_location_long},
        zoom: 15,
        duration: 1000,
        padding: 0  // default = 20px
        }, function() {
        map.setClickable(true);
        //alert("Camera target has been changed");
    });

    if(!city_drivers_markers.hasOwnProperty('drv'+push_data.driver_id)){
        city_drivers_markers['drv'+push_data.driver_id] = map.addMarker({
            'position':{lat:driver_location_lat,lng: driver_location_long},
            animation: plugin.google.maps.Animation.DROP,
            icon : "img/driver-marker-icon.png",
            title:push_data.driver_firstname
        });
        city_drivers_markers['drv'+push_data.driver_id]._isReady = true;
    }

    marker1 = map.addMarker({
        'position':{lat: parseFloat(push_data.pickup_lat),lng: parseFloat(push_data.pickup_long)},
        'icon' : 'img/pick-up-pin.png',
        animation: plugin.google.maps.Animation.DROP
    });

    marker1._isReady = true;
    
    
    
    $("#menubtn").removeClass("fadeOutLeft animated").addClass("fadeOutLeft animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass("fadeOutLeft animated");
        $("#menubtn").css("visibility","hidden");
        $("#menubtn").css("z-index","10");
        $("#trip-summary-back-btn").css("z-index","10");

        $("#driver-notify-ui-back-btn").css("visibility","visible");
        $("#driver-notify-ui-back-btn").css("z-index","100");
        $("#driver-notify-ui-back-btn").removeClass("fadeInRight animated").addClass("fadeInRight animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass("fadeInRight animated");
                       
        })

    })

        
    $('#bookbutton').css("visibility","hidden");//hide the book ride button
    $("#pick-box").css("visibility","hidden");
    $("#drop-box").css("visibility","hidden");
    $("#recent-strip-container").css("visibility","hidden");
    $("#new-bookng-details").css("visibility","hidden");
    $("#new-bookng-details").css("left", "-10000px");
    

    $("#statusmsg").css("visibility","visible");
    $("#statusmsg").removeClass("flipInX animated").addClass("flipInX animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass("flipInX animated");
    })


    $("#current-ride-driver-details").css("visibility","visible");
    $("#current-ride-driver-details").removeClass("fadeInUp animated").addClass("fadeInUp animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass("fadeInUp animated");
        driver_notify_ui_displayed = 1;
    })


}


function driver_arrived_notify(push_data){ //show driver arrived app UI notification
    notification_sound.play();

    current_booking_data.status = 2;
    current_booking_data.action = push_data.action;
    current_booking_data.booking_id = push_data.booking_id;
    current_booking_data.driver_id = push_data.driver_id;
    current_booking_data.driver_firstname = push_data.driver_firstname;
    current_booking_data.driver_phone = push_data.driver_phone;
    current_booking_data.driver_platenum = push_data.driver_platenum;
    current_booking_data.driver_rating = push_data.driver_rating;
    current_booking_data.driver_location_lat = push_data.driver_location_lat;
    current_booking_data.driver_location_long = push_data.driver_location_long;
    current_booking_data.pickup_lat = push_data.pickup_lat;
    current_booking_data.pickup_long = push_data.pickup_long;
    current_booking_data.dropoff_lat = push_data.dropoff_lat;
    current_booking_data.dropoff_long = push_data.dropoff_long;
    current_booking_data.driver_carmodel = push_data.driver_carmodel;
    current_booking_data.driver_completed = push_data.driver_completed_rides;
    current_booking_data.driver_carid = push_data.driver_carid;
    current_booking_data.driver_photo = push_data.driver_photo;
    current_booking_data.completion_code = push_data.completion_code;
    
    $("#statusmsg h3").html(__("Driver has arrived. Meet Driver"));
    $("#statusmsg h3").css('border-right','none');
    $('#ride-time-status').hide();

    $('#assigned-driver-image-preload').attr('src',push_data.driver_photo); //load driver image
    $('#current-ride-driver-name').html(push_data.driver_firstname); //load driver firstname
    $('#current-ride-driver-car-model').html(push_data.driver_carmodel); //load driver car model and color
    $('#current-ride-driver-rating').attr("src","img/rating-" + push_data.driver_rating + ".png"); //load driver rating
    $('#current-ride-driver-car-number').html(push_data.driver_platenum); //load driver car plate number
    //$('#driver-rides-count').html("+" + (parseInt(push_data.driver_completed_rides / 10) * 10) + " " + __('Trips'));
    $('#driver-rides-count').html(push_data.driver_completed_rides + " " + __('Trips'));
    $('#current-ride-vehicle-img').attr('src', $(`#uniq-car-type-id-${push_data.driver_carid}`).attr('src'));
    $('#current-ride-completion-code').html(' | OTP: ' + push_data.completion_code); //load completion code

    $('#call-driver').data('phonenum',push_data.driver_phone); //load call driver action button data
    $('#sms-driver').data('phonenum',push_data.driver_phone); //load sms driver action button data
    $('#cancel-ride').data('bookingid',push_data.booking_id); ////load cancel booking action button data

    
    $('#chat-msg-send-btn').data('bookingid', push_data.booking_id);
    $('#chat-window-show-btn').data('bookingid', push_data.booking_id);

    var driver_location_lat = parseFloat(push_data.driver_location_lat);
    var driver_location_long = parseFloat(push_data.driver_location_long);

       
    
    //clear map interface and location input boxes
    map.clear(); //clear all marker on map
    city_drivers_markers = {}; //clear drivers marker handles
    if(route_polyline){
        route_polyline.remove();
        toggleroutepathanimation(0);
        route_polyline = null;                     
    }
    if(route_distance_duration_info_marker){
        route_distance_duration_info_marker.remove();
        route_distance_duration_info_marker = null;
    }
    pick_up_data=[];
    drop_off_data=[];
    pick_up_data = {'address': '','lng':'','lat':''};
    drop_off_data = {'address': '','lng':'','lat':''};

    //reset multi destination mode
    multi_destination_mode = 0;        
    $('#location-type-icon-ds1').hide();
    $('#location-type-icon-ds2').hide();
    dest_location_type_selected = 0;
    destination_stop_inp1_shown = 0;
    destination_stop_inp2_shown = 0; 
    multi_destinations = {'pickup' : {'address':'', 'lat':'', 'lng' :''},'dest-1':{'address':'', 'lat':'', 'lng' :''},'dest-2':{'address':'', 'lat':'', 'lng' :''},'dropoff' : {'address':'', 'lat':'', 'lng' :''}};

    marker1 = undefined;
    marker2 = undefined;
    markerds1 = undefined;
    markerds2 = undefined;

    
    $('#pac-input').val('');
    $('#pac-input2').val('');

    map.setClickable(false);
    map.animateCamera({
        target: {lat: driver_location_lat, lng: driver_location_long},
        zoom: 15,
        duration: 2000,
        padding: 0  // default = 20px
        }, function() {
        map.setClickable(true);
        //alert("Camera target has been changed");
    });

    if(!city_drivers_markers.hasOwnProperty('drv'+push_data.driver_id)){
        city_drivers_markers['drv'+push_data.driver_id] = map.addMarker({
            'position':{lat:driver_location_lat,lng: driver_location_long},
            animation: plugin.google.maps.Animation.DROP,
            icon : "img/driver-marker-icon.png",
            title:push_data.driver_firstname
        });
        city_drivers_markers['drv'+push_data.driver_id]._isReady = true;
    }

    if(driver_notify_ui_displayed){
    
        $('#bookbutton').css("visibility","hidden");//hide the book ride button
        $("#pick-box").css("visibility","hidden");
        $("#drop-box").css("visibility","hidden");
        $("#recent-strip-container").css("visibility","hidden");
        $("#new-bookng-details").css("visibility","hidden");
        $("#new-bookng-details").css("left", "-10000px");

        $("#statusmsg").css("visibility","visible");
        $("#statusmsg").removeClass("flipInX animated").addClass("flipInX animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass("flipInX animated");
        })


        $("#current-ride-driver-details").css("visibility","visible");
        /* $("#current-ride-driver-details").removeClass("fadeInUp animated").addClass("fadeInUp animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass("fadeInUp animated");
        }) */
    }else{
        $("#menubtn").removeClass("fadeOutLeft animated").addClass("fadeOutLeft animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass("fadeOutLeft animated");
            $("#menubtn").css("visibility","hidden");
            $("#menubtn").css("z-index","10");
            $("#trip-summary-back-btn").css("z-index","10");
    
            $("#driver-notify-ui-back-btn").css("visibility","visible");
            $("#driver-notify-ui-back-btn").css("z-index","100");
            $("#driver-notify-ui-back-btn").removeClass("fadeInRight animated").addClass("fadeInRight animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                $(this).removeClass("fadeInRight animated");
                           
            })
    
        })
    
            
        $('#bookbutton').css("visibility","hidden");//hide the book ride button
        $("#pick-box").css("visibility","hidden");
        $("#drop-box").css("visibility","hidden");
        $("#new-bookng-details").css("left", "-10000px");
        $("#new-bookng-details").css("visibility","hidden");
        $("#new-bookng-details").css("left", "-10000px");
        $("#recent-strip-container").css("visibility","hidden");
        
    
        $("#statusmsg").css("visibility","visible");
        $("#statusmsg").removeClass("flipInX animated").addClass("flipInX animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass("flipInX animated");
        })
    
    
        $("#current-ride-driver-details").css("visibility","visible");
        $("#current-ride-driver-details").removeClass("fadeInUp animated").addClass("fadeInUp animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass("fadeInUp animated");
            driver_notify_ui_displayed = 1;
        })
    }

}




function customer_onride_notify(push_data){ //show driver assigned app UI notification
    notification_sound.play();
    
    current_booking_data.status = 3;
    current_booking_data.action = push_data.action;
    current_booking_data.booking_id = push_data.booking_id;
    current_booking_data.driver_id = push_data.driver_id;
    current_booking_data.driver_firstname = push_data.driver_firstname;
    current_booking_data.driver_phone = push_data.driver_phone;
    current_booking_data.driver_platenum = push_data.driver_platenum;
    current_booking_data.driver_rating = push_data.driver_rating;
    current_booking_data.driver_location_lat = push_data.driver_location_lat;
    current_booking_data.driver_location_long = push_data.driver_location_long;
    current_booking_data.pickup_lat = push_data.pickup_lat;
    current_booking_data.pickup_long = push_data.pickup_long;
    current_booking_data.dropoff_lat = push_data.dropoff_lat;
    current_booking_data.dropoff_long = push_data.dropoff_long;
    current_booking_data.driver_carmodel = push_data.driver_carmodel;
    current_booking_data.driver_completed = push_data.driver_completed_rides;
    current_booking_data.driver_carid = push_data.driver_carid;
    current_booking_data.driver_photo = push_data.driver_photo;
    current_booking_data.completion_code = push_data.completion_code;
    $("#statusmsg h3").html(__("Your trip has begun"));
    $("#statusmsg h3").css('border-right','thin solid white');
    $('#ride-time-status').show();

    $('#assigned-driver-image-preload').attr('src',push_data.driver_photo); //load driver image
    $('#current-ride-driver-name').html(push_data.driver_firstname); //load driver firstname
    $('#current-ride-driver-car-model').html(push_data.driver_carmodel); //load driver car model and color
    $('#current-ride-driver-rating').attr("src","img/rating-" + push_data.driver_rating + ".png"); //load driver rating
    $('#current-ride-driver-car-number').html(push_data.driver_platenum); //load driver car plate number
    //$('#driver-rides-count').html("+" + (parseInt(push_data.driver_completed_rides / 10) * 10) + " " + __('Trips'));
    $('#driver-rides-count').html(push_data.driver_completed_rides + " " + __('Trips'));
    $('#current-ride-vehicle-img').attr('src', $(`#uniq-car-type-id-${push_data.driver_carid}`).attr('src'));
    $('#current-ride-completion-code').html(' | OTP: ' + push_data.completion_code); //load completion code

    $('#call-driver').data('phonenum',push_data.driver_phone); //load call driver action button data
    $('#sms-driver').data('phonenum',push_data.driver_phone); //load sms driver action button data
    $('#cancel-ride').data('bookingid',push_data.booking_id); ////load cancel booking action button data

    
    $('#chat-msg-send-btn').data('bookingid', push_data.booking_id);
    $('#chat-window-show-btn').data('bookingid', push_data.booking_id);



    //compute how much time it will take driver to reach rider dropoff location
    let rider_latlng = {'lat':parseFloat(push_data.dropoff_lat),'lng':parseFloat(push_data.dropoff_long)};
    let driver_latlng = {'lat':parseFloat(push_data.driver_location_lat),'lng':parseFloat(push_data.driver_location_long)};
    let distance = plugin.google.maps.geometry.spherical.computeDistanceBetween(rider_latlng, driver_latlng); //distance in meters
    let time_to_pickup_location_sec = distance / 5.555555556; //20km/hr to m/s - worst case time if driver is driving at this average speed

    let time_to_pickup_location_min = Math.floor(time_to_pickup_location_sec / 60);
    $('#ride-action-time').text(time_to_pickup_location_min); 
    if(time_to_pickup_location_min > 1){
        $('#ride-action-time-unit').text('Mins'); 
    }else{
        $('#ride-action-time-unit').text('Min');
    }

    var driver_location_lat = parseFloat(push_data.driver_location_lat);
    var driver_location_long = parseFloat(push_data.driver_location_long);

    
    //clear map interface and location input boxes
    map.clear(); //clear all marker on map
    city_drivers_markers = {}; //clear drivers marker handles
    if(route_polyline){
        route_polyline.remove();
        toggleroutepathanimation(0);
        route_polyline = null;                     
    }
    if(route_distance_duration_info_marker){
        route_distance_duration_info_marker.remove();
        route_distance_duration_info_marker = null;
    }
    pick_up_data=[];
    drop_off_data=[];
    pick_up_data = {'address': '','lng':'','lat':''};
    drop_off_data = {'address': '','lng':'','lat':''};

    //reset multi destination mode
    multi_destination_mode = 0;        
    $('#location-type-icon-ds1').hide();
    $('#location-type-icon-ds2').hide();
    dest_location_type_selected = 0;
    destination_stop_inp1_shown = 0;
    destination_stop_inp2_shown = 0; 
    multi_destinations = {'pickup' : {'address':'', 'lat':'', 'lng' :''},'dest-1':{'address':'', 'lat':'', 'lng' :''},'dest-2':{'address':'', 'lat':'', 'lng' :''},'dropoff' : {'address':'', 'lat':'', 'lng' :''}};

    marker1 = undefined;
    marker2 = undefined;
    markerds1 = undefined;
    markerds2 = undefined;

    
    $('#pac-input').val('');
    $('#pac-input2').val('');

    map.setClickable(false);
    map.animateCamera({
        target: {lat: driver_location_lat, lng: driver_location_long},
        zoom: 15,
        duration: 2000,
        padding: 0  // default = 20px
        }, function() {
        map.setClickable(true);
        //alert("Camera target has been changed");
    });

    
    if(!city_drivers_markers.hasOwnProperty('drv'+push_data.driver_id)){
        city_drivers_markers['drv'+push_data.driver_id] = map.addMarker({
            'position':{lat:driver_location_lat,lng: driver_location_long},
            animation: plugin.google.maps.Animation.DROP,
            icon : "img/driver-marker-icon.png",
            title:push_data.driver_firstname
        });
        city_drivers_markers['drv'+push_data.driver_id]._isReady = true;
    }

    marker2 = map.addMarker({
        'position':{lat: parseFloat(push_data.dropoff_lat),lng: parseFloat(push_data.dropoff_long)},
        'icon' : 'img/drop-off-pin.png',
        animation: plugin.google.maps.Animation.DROP
    });

    marker2._isReady = true;

    //driver_marker._isReady = true;

    if(driver_notify_ui_displayed){
    
        $('#bookbutton').css("visibility","hidden");//hide the book ride button
        $("#pick-box").css("visibility","hidden");
        $("#drop-box").css("visibility","hidden");
        $("#recent-strip-container").css("visibility","hidden");
        $("#new-bookng-details").css("visibility","hidden");
        $("#new-bookng-details").css("left", "-10000px");

        $("#statusmsg").css("visibility","visible");
        $("#statusmsg").removeClass("fadeInDown animated").addClass("fadeInDown animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass("fadeInDown animated");
        })


        $("#current-ride-driver-details").css("visibility","visible");
        /* $("#current-ride-driver-details").removeClass("fadeInUp animated").addClass("fadeInUp animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass("fadeInUp animated");
        }) */
    }else{
        $("#menubtn").removeClass("fadeOutLeft animated").addClass("fadeOutLeft animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass("fadeOutLeft animated");
            $("#menubtn").css("visibility","hidden");
            $("#menubtn").css("z-index","10");
            $("#trip-summary-back-btn").css("z-index","10");
    
            $("#driver-notify-ui-back-btn").css("visibility","visible");
            $("#driver-notify-ui-back-btn").css("z-index","100");
            $("#driver-notify-ui-back-btn").removeClass("fadeInRight animated").addClass("fadeInRight animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                $(this).removeClass("fadeInRight animated");
                           
            })
    
        })
    
            
        $('#bookbutton').css("visibility","hidden");//hide the book ride button
        $("#pick-box").css("visibility","hidden");
        $("#drop-box").css("visibility","hidden");
        $("#new-bookng-details").css("visibility","hidden");
        $("#new-bookng-details").css("left", "-10000px");
        $("#recent-strip-container").css("visibility","hidden");
        
    
        $("#statusmsg").css("visibility","visible");
        $("#statusmsg").removeClass("flipInX animated").addClass("flipInX animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass("flipInX animated");
        })
    
    
        $("#current-ride-driver-details").css("visibility","visible");
        $("#current-ride-driver-details").removeClass("fadeInUp animated").addClass("fadeInUp animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass("fadeInUp animated");
            driver_notify_ui_displayed = 1;
        })
    }

}




function driver_complete_notify(push_data){ //show driver ride completed notification
    ride_rating = 1;
    current_booking_data = {'status':0,'action':'','booking_id':0,'driver_id':0,'driver_firstname':'','driver_phone':'','driver_platenum':'','driver_rating':'','driver_location_lat':0.00,'driver_location_long':0.00,'driver_carmodel':'','driver_photo':'','completion_code':'','pickup_lat':0.00,'pickup_long':0.00,'dropoff_lat':0.00,'dropoff_long':0.00,'driver_completed' : 0,'driver_carid':0};
    notification_sound.play();
    
    $("#statusmsg h3").html(__("Your trip has Ended"));
   
    
    //clear map interface and location input boxes
    map.clear(); //clear all marker on map
    city_drivers_markers = {}; //clear drivers marker handles
    if(route_polyline){
        route_polyline.remove();
        toggleroutepathanimation(0);
        route_polyline = null;                     
    }
    if(route_distance_duration_info_marker){
        route_distance_duration_info_marker.remove();
        route_distance_duration_info_marker = null;
    }
    pick_up_data=[];
    drop_off_data=[];
    pick_up_data = {'address': '','lng':'','lat':''};
    drop_off_data = {'address': '','lng':'','lat':''};

    //reset multi destination mode
    multi_destination_mode = 0;        
    $('#location-type-icon-ds1').hide();
    $('#location-type-icon-ds2').hide();
    dest_location_type_selected = 0;
    destination_stop_inp1_shown = 0;
    destination_stop_inp2_shown = 0; 
    multi_destinations = {'pickup' : {'address':'', 'lat':'', 'lng' :''},'dest-1':{'address':'', 'lat':'', 'lng' :''},'dest-2':{'address':'', 'lat':'', 'lng' :''},'dropoff' : {'address':'', 'lat':'', 'lng' :''}};

    marker1 = undefined;
    marker2 = undefined;
    markerds1 = undefined;
    markerds2 = undefined;

    
    $('#pac-input').val('');
    $('#pac-input2').val('');
           

    
    $("#statusmsg").removeClass("flipOutX animated").addClass("flipOutX animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass("flipOutX animated");
        $("#pick-box").css("visibility","visible");
        $("#drop-box").css("visibility","visible");
        $("#recent-strip-container").css("visibility","visible");
        $("#statusmsg").css("visibility","hidden");
        $("#new-bookng-details").css("visibility","hidden");
        $("#new-bookng-details").css("left", "-10000px");
    })


    
    $("#current-ride-driver-details").removeClass("fadeOutDown animated").addClass("fadeOutDown animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass("fadeOutDown animated");
        $("#current-ride-driver-details").css("visibility","hidden");
        $("#driver-notify-ui-back-btn").css("visibility","hidden");
        $("#driver-notify-ui-back-btn").css("z-index","10");
        $("#menubtn").css("visibility","visible");
        $("#menubtn").css("z-index","100");
        $("#trip-summary-back-btn").css("z-index","10");
        $("#trip-summary-back-btn").css("visibility","hidden");
        getuserlocation();
        document.querySelector('#myNavigator').pushPage('html/ride-complete.html',{animation:'fade',data:{'comp_data':push_data}});
    })

}

function app_message(push_data){

    ons.notification.alert(push_data.message,{title:push_data.title});
    if(push_data.hasOwnProperty('no_driver')){
        getuserlocation();
    }
    return;

}




function rate_ride(bookingid,comment){
    
    if(!bookingid){
        document.querySelector('#myNavigator').popPage({animation: 'fade'});
        return;
    }
    
    loading.show();
    $.ajax({ 
        url: ajaxurl, 
        method: 'GET',
        crossDomain:true,
        timeout : 10000,
        xhrFields: {withCredentials: true},
        data: { 'action_get' : 'rateride', 'rating':ride_rating,'bookingid':bookingid,'comment':comment, 'driver_tip':driver_tip_amount},
        dataType: 'json',
        success: function(data){
            loading.hide();
            if(data.hasOwnProperty('error')){
                ons.notification.alert(data.error,{title:''});
                return;
            }

                
            document.querySelector('#myNavigator').popPage({animation: 'fade', callback: function(){
                if(data.hasOwnProperty('message') && data.message != ''){
                    ons.notification.alert(data.message,{title:''});
                }
            }});
           
        },
        error: function(){
            
            loading.hide();
            ons.notification.alert(__("Error communicating with server"),{title:""});
            return;
        } 


    });
}


function driver_cancelled_notify(push_data){ //show driver cancelled ride notification
    notification_sound.play();
    current_ride_status = 0;
    current_booking_data = {'status':0,'action':'','booking_id':0,'driver_id':0,'driver_firstname':'','driver_phone':'','driver_platenum':'','driver_rating':'','driver_location_lat':0.00,'driver_location_long':0.00,'driver_carmodel':'','driver_photo':'','completion_code':'','pickup_lat':0.00,'pickup_long':0.00,'dropoff_lat':0.00,'dropoff_long':0.00};
    $("#statusmsg h3").html(__("Driver has cancelled your ride"));

    //clear map interface and location input boxes
    map.clear(); //clear all marker on map
    city_drivers_markers = {}; //clear drivers marker handles
    if(route_polyline){
        route_polyline.remove();
        toggleroutepathanimation(0);
        route_polyline = null;                     
    }
    if(route_distance_duration_info_marker){
        route_distance_duration_info_marker.remove();
        route_distance_duration_info_marker = null;
    }
    pick_up_data=[];
    drop_off_data=[];
    pick_up_data = {'address': '','lng':'','lat':''};
    drop_off_data = {'address': '','lng':'','lat':''};

    //reset multi destination mode
    multi_destination_mode = 0;        
    $('#location-type-icon-ds1').hide();
    $('#location-type-icon-ds2').hide();
    dest_location_type_selected = 0;
    destination_stop_inp1_shown = 0;
    destination_stop_inp2_shown = 0; 
    multi_destinations = {'pickup' : {'address':'', 'lat':'', 'lng' :''},'dest-1':{'address':'', 'lat':'', 'lng' :''},'dest-2':{'address':'', 'lat':'', 'lng' :''},'dropoff' : {'address':'', 'lat':'', 'lng' :''}};
    

    marker1 = undefined;
    marker2 = undefined;
    markerds1 = undefined;
    markerds2 = undefined;

    
    $('#pac-input').val('');
    $('#pac-input2').val('');
    
        

    
    $("#statusmsg").removeClass("fadeOutUp animated").addClass("fadeOutUp animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass("fadeOutUp animated");
        $("#pick-box").css("visibility","visible");
        $("#drop-box").css("visibility","visible");
        $("#statusmsg").css("visibility","hidden");
        $("#recent-strip-container").css("visibility","visible");

    })


    
    $("#current-ride-driver-details").removeClass("fadeOutDown animated").addClass("fadeOutDown animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass("fadeOutDown animated");
        $("#current-ride-driver-details").css("visibility","hidden");
        $("#driver-notify-ui-back-btn").css("visibility","hidden");
        $("#driver-notify-ui-back-btn").css("z-index","10");
        $("#menubtn").css("visibility","visible");
        $("#menubtn").css("z-index","100");
        $("#trip-summary-back-btn").css("z-index","10");
        $("#trip-summary-back-btn").css("visibility","hidden");
        ons.notification.alert(__("Driver has cancelled your ride"),{title:""});
        getuserlocation();
        
    })

}



function call_driver(phonenum){
    if(phonenum){
        //window.plugins.CallNumber.callNumber(function(){return;}, function(){return;}, phonenum, 1);
        window.open('tel:' + phonenum,'_system');
    }
}



function sms_driver(phonenum){
    if(phonenum){
        //window.plugins.CallNumber.callNumber(function(){return;}, function(){return;}, phonenum, 1);
        window.open('sms:' + phonenum,'_system');
    }
}



function cancel_ride(bookingid){
    if(bookingid){
        bookingcancel(bookingid,1);
    }
}









function onBackButton(){

    if(side_menu_state){
        document.querySelector('#mySplitter').left.close();
        return;
      }
      if(close_dialog_enable)return;
      close_dialog_enable = 1;
      ons.notification.confirm({
        message: __('Do you want to exit?'),
        // or messageHTML: '<div>Message in HTML</div>',
        title: __('Close App'),
        buttonLabels: [__('Yes'), __('No')],
        animation: 'default', // or 'none'
        primaryButtonIndex: 1,
        cancelable: true,
        callback: function(index) {
         
          if(!index){
            // 0-: Button index from the left
            navigator.app.exitApp();
          }else{
            close_dialog_enable = 0;
            // -1: Cancel
          }
         
        }
      });  


}





function profileupdate(){

    var old_password = $('#oldpassword').val();
    var new_password = $('#newpassword').val();
    var confirm_password = $('#confirmpassword').val();
    var user_phone = $('#phone').val();
    var user_email = $('#email').val();
    var country_2c_code = $('#country-flag-profile').data('country');
    var country_call_code = $('#tel-code-profile').data('dialcode');

    if(!user_email){
        ons.notification.alert(__("Email cannot be empty"),{title:""});
        return;
    }

    if(!user_phone){
        ons.notification.alert(__("Phone number cannot be empty"),{title:""});
        return;
    }
    
    if(old_password && new_password && confirm_password != new_password){
        ons.notification.alert(__("Passwords do not match"),{title:""});
        return;
    }

    if((old_password && !confirm_password) || (old_password && !new_password)){
        ons.notification.alert(__("Please enter a new password"),{title:""});
        return;
    }

    loading.show();

    var post_data = {'action':'updateUserProfile','country_code' : country_2c_code,'country_dial_code' : country_call_code,'phone':user_phone,'email':user_email,'oldpassword':old_password,'newpassword':new_password};

    $.ajax({
        url: ajaxurl,
        type: 'POST',
        timeout : 20000,
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
                
                ons.notification.alert(data_obj.error,{title:""});
            }

            if(data_obj.hasOwnProperty('success')){

                ons.notification.alert(data_obj.success, {title:"",buttonLabels:['Restart'],callback: function(){
                    //navigator.app.exitApp();
                    window.location.reload();
                    return;
                }});
                
                
            }


        },
        error: function(jqXHR,textStatus, errorThrown) {  
            loading.hide();
            ons.notification.alert(__("Error communicating with server"),{title:""});
            return;
        }

    });




}







function getavailablecitydrivers(city){
    clearInterval(get_available_drivers_timer);
    var priority_driver = 0;
    var processing_out_of_bounds = 0;
    setInterval(function(){
        
        if(current_booking_data.status){
            priority_driver = current_booking_data.driver_id;
        }else{
            priority_driver = 0;
        }

        $.ajax({ 
            url: ajaxurl, 
            method: 'GET',
            crossDomain:true,
            timeout : 10000,
            xhrFields: {withCredentials: true},
            data: { 'action_get' : 'getavailablecitydrivers','city':city,'priority_driver':priority_driver},
            dataType: 'json',
            success: function(data){
                
                if(data.hasOwnProperty('error')){
                    //ons.notification.alert(data.error);
                    return;
                }  
                
                //console.log(data);
    
                if(data.hasOwnProperty('success')){
    
                    //clear old markers
                    /* if(city_drivers_markers.length){
                        city_drivers_markers.forEach(function(city_marker){
                            city_marker.remove();                            
                        })
                        city_drivers_markers = [];
                    } */
                    for(var key in city_drivers_markers){
                        city_drivers_markers[key].setVisible(false);
                    }

                    

                    if(data.drivers_locations.length){
                        if(priority_driver){
                            if(city_drivers_markers.hasOwnProperty('drv' + data.drivers_locations[0].driver_id)){
                                city_drivers_markers['drv' + data.drivers_locations[0].driver_id].setVisible(true);
                                city_drivers_markers['drv' + data.drivers_locations[0].driver_id].setPosition(data.drivers_locations[0].position);
                            }else{
                                city_drivers_markers['drv' + data.drivers_locations[0].driver_id] =  map.addMarker(data.drivers_locations[0]);
                                city_drivers_markers['drv' + data.drivers_locations[0].driver_id]._isReady = true;
                            }

                            user_location.lat = data.drivers_locations[0].position.lat;
                            user_location.lng = data.drivers_locations[0].position.lng;

                            map.fromLatLngToPoint({"lat":user_location.lat,"lng":user_location.lng}, function(driver_marker_pixel_coord){
                                if(driver_marker_pixel_coord[0] < 50 || driver_marker_pixel_coord[0] > (screen.width - 50) || driver_marker_pixel_coord[1] < 150 || driver_marker_pixel_coord[1] > (screen.height - 150)){
                                    if(!processing_out_of_bounds){
                                        processing_out_of_bounds = 1;
                                        map.setClickable(false);
                                        map.animateCamera({
                                        target: {lat: user_location.lat, lng: user_location.lng},
                                        duration: 1000,
                                        }, function() {
                                            //alert("Camera target has been changed");
                                            map.setClickable(true);
                                            processing_out_of_bounds = 0;
                                        });
                                    }
                                }
                            });
                            
                            //update ride time
                            
                            if(current_booking_data.status == 1){ //rider pick up
                                let driver_latlng = data.drivers_locations[0].position;
                                let rider_latlng = {'lat':parseFloat(current_booking_data.pickup_lat),'lng':parseFloat(current_booking_data.pickup_long)};
                                let distance = plugin.google.maps.geometry.spherical.computeDistanceBetween(rider_latlng, driver_latlng); //distance in meters
                                let time_to_pickup_location_sec = distance / 5.555555556; //20km/hr to m/s - worst case time if driver is driving at this average speed

                                let time_to_pickup_location_min = Math.floor(time_to_pickup_location_sec / 60);
                                $('#ride-action-time').text(time_to_pickup_location_min); 
                                if(time_to_pickup_location_min > 1){
                                    $('#ride-action-time-unit').text('Mins'); 
                                }else{
                                    $('#ride-action-time-unit').text('Min');
                                }
                            }else if(current_booking_data.status == 3){ //rider on ride
                                let driver_latlng = data.drivers_locations[0].position;
                                let rider_latlng = {'lat':parseFloat(current_booking_data.dropoff_lat),'lng':parseFloat(current_booking_data.dropoff_long)};
                                let distance = plugin.google.maps.geometry.spherical.computeDistanceBetween(rider_latlng, driver_latlng); //distance in meters
                                let time_to_pickup_location_sec = distance / 5.555555556; //20km/hr to m/s - worst case time if driver is driving at this average speed

                                let time_to_pickup_location_min = Math.floor(time_to_pickup_location_sec / 60);
                                $('#ride-action-time').text(time_to_pickup_location_min); 
                                if(time_to_pickup_location_min > 1){
                                    $('#ride-action-time-unit').text('Mins'); 
                                }else{
                                    $('#ride-action-time-unit').text('Min');
                                }
                            }
                                
                            
                            
                        }else{
                            
                            data.drivers_locations.forEach(function(options){
                                if(city_drivers_markers.hasOwnProperty('drv'+options.driver_id)){
                                    city_drivers_markers['drv'+options.driver_id].setPosition(options.position); 
                                    city_drivers_markers['drv'+options.driver_id].setVisible(true);
                                }else{
                                    city_drivers_markers['drv'+options.driver_id] = map.addMarker(options);
                                    city_drivers_markers['drv' + data.drivers_locations[0].driver_id]._isReady = true;
                                }
                            });
                            /* city_drivers_markers = data.drivers_locations.map(function(options){
                                //options.animation = plugin.google.maps.Animation.DROP;
                                return map.addMarker(options);
                            }) */
                        }
                    }                    
                    
                    //populate map with drivers location data
                    
                                  
    
    
                }
               
                
            },
            error: function(){
                
                //ons.notification.alert("Error communicating with server. Please retry.");
                return;
            } 
    
    
        });
    },15000) //set refresh rate for available drivers in curently selected city

}



function updatepushnotificationtoken(){
    
    if(APP_DEBUG)return;
    cordova.plugins.firebase.messaging.getToken().then(function(token) {
        
        if(!token){
            //alert('no_token');
            get_push_token_retry_count++
            if(get_push_token_retry_count < 3){
                setTimeout(updatepushnotificationtoken(), 20000);
                return;
            }
            get_push_token_retry_count = 0;
            return;
        }else{
            
            var post_data = {'action':'updatePushNotificationToken','token':token};

            $.ajax({
                url: ajaxurl,
                type: 'POST',
                timeout : 20000,
                crossDomain:true,
                xhrFields: {withCredentials: true},
                data: post_data,
                tryCount : 0, 
                retryLimit : 3,
                success: function (data, status)
                {
                    return;

                },
                error: function(jqXHR,textStatus, errorThrown) {  
                    
                    this.tryCount++;
                    if (this.tryCount <= this.retryLimit) {
                        //try again
                        $.ajax(this);
                        return;
                    }            
                    return;
                    
                }

            });

        }
        
        

    });
   


}


//localstorage functions

Storage.prototype.setObject = function (key, value) {
    this.setItem(key, JSON.stringify(value));
};


Storage.prototype.getObject = function (key) {
    var value = this.getItem(key);
    try {
        return JSON.parse(value);
    }
    catch(err) {
        console.log("JSON parse failed for lookup of ", key, "\n error was: ", err);
        return null;
    }
};


Number.prototype.toMoney = function(decimals, decimal_sep, thousands_sep)
{
   var n = this,
   c = isNaN(decimals) ? 2 : Math.abs(decimals), // If decimal is zero we must take it. It means the user does not want to show any decimal
   d = decimal_sep || '.', // If no decimal separator is passed, we use the dot as default decimal separator (we MUST use a decimal separator)

   
   t = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep, // If you don't want to use a thousands separator you can pass empty string as thousands_sep value

   sign = (n < 0) ? '-' : '',

   // Extracting the absolute value of the integer part of the number and converting to string
   i = parseInt(n = Math.abs(n).toFixed(c)) + '',

   j = ((j = i.length) > 3) ? j % 3 : 0;
   return sign + (j ? i.substr(0, j) + t : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : '');
}


function showbookingdetails(bookid){
    

    document.querySelector('#myNavigator').pushPage('html/bookingdetails.html',{animation:'fade',data:{'bookid':bookid}});

    

}






var loading_map = 0;
function loadmap(){ //function retries loading map until it succeeds.
    
    
    if(typeof google === 'object') {
        return;
    }

    if(loading_map)return;

    if(google_map_api_key){
        loading_map = 1;
        $.getScript("https://maps.googleapis.com/maps/api/js?key=" + google_map_api_key + "&libraries=places&callback=mapinitialize")
        .done(function(){
            loading_map = 1;
        }).fail(function(){
            loading_map = 0;
        });
    }
    


}



function mapinitialize(){

            plugin.google.maps.environment.setBackgroundColor("lightgrey");
          
            map = plugin.google.maps.Map.getMap(document.getElementById("map-canvas"), {
                'mapType': plugin.google.maps.MapTypeId.ROADMAP,
                'controls': {
                    'compass': false,
                    'indoorPicker': false,
                    'myLocationButton': false,
                    'myLocation': true,   // (blue dot)
                    'zoom': false,          // android only
                    'mapToolbar': false     // android only
                },
                'gestures': {
                'scroll': true,
                'tilt': true,
                'rotate': true,
                'zoom': true
                },
                 'styles': [
                {
                    featureType: "administrative.locality",
                    stylers: [
                    { visibility: "simplified" }
                    ]
                },
                
                {
                    featureType: "poi",
                    stylers: [
                    { visibility: "off" }
                    ]
                },

                {
                    featureType: "landscape.man_made",
                    stylers: [
                    { visibility: "off" }
                    ]
                }

                ], 
                'camera' : {
                target: {
                    lat: -33.0080705,
                    lng: -58.5125214
                },
                zoom: 10,
                tilt: 45,
                heading: 90
                },
                'preferences': {
                'zoom': {
                    'minZoom': 3,
                    'maxZoom': 18
                },
                'building': true
                }
            });

            map.one(plugin.google.maps.event.MAP_READY, function() {
                console.log("--> map_canvas : ready.");
                $("#startscreen-text").html(__("Almost done..."))
                //map.setMyLocationButtonEnabled(true); 
                
                //get session id if available
                let sess_id = localStorage.getItem('sess_id');
                if(sess_id){
                    ajaxurl = siteurl + `/ajax.php?sess_id=${sess_id}`;
                }

                map.getMyLocation({"enableHighAccuracy":false},function(location){
                    user_location.lat = location.latLng.lat;
                    user_location.lng = location.latLng.lng;
                },function(error){return;})
                
                
                
                checkLoginStatus();

                
                         
                map.on(plugin.google.maps.event.MAP_CLICK, function(latLng) {

                    if(route_distance_duration_info_marker){
                        route_distance_duration_info_marker.showInfoWindow();
                    }

                    $("#drop-box-container").removeClass("address-box-d-sel");
                    $("#pick-box-container").removeClass("address-box-p-sel");  
    
                    $('#pick-box').css('border','2px solid #999');
                    $('#drop-box').css('border','2px solid #999');
    
                    if(route_polyline && route_points){
                        
                        map.setClickable(false);
                        map.animateCamera({
                            target: route_points,
                            duration: 1000,
                            }, function() {
                            //alert("Camera target has been changed");
                            map.setClickable(true);
                        });

                        
                    }                      
                    
    
                  
                    
    
                });
    
    
                map.on(plugin.google.maps.event.MAP_DRAG, function() {
    
                        $('#mylocationbtn').show();
                    
                });
                
                

                
            }); 


    

}


//*******************location permission handling*******************************


function onError(error) {
    
    if(!map)mapinitialize();
    return;
    //console.error("The following error occurred: " + error);
}

function handleLocationAuthorizationStatus(status) {
    
    switch (status) {
        case cordova.plugins.diagnostic.permissionStatus.GRANTED:
            if(platform === "ios"){
                onError("Location services is already switched ON");
            }else{
                _makeRequest();
            }
            break;
        case cordova.plugins.diagnostic.permissionStatus.NOT_REQUESTED:
            requestLocationAuthorization();
            break;
        case cordova.plugins.diagnostic.permissionStatus.DENIED_ONCE:
            requestLocationAuthorization();
            break;
        case cordova.plugins.diagnostic.permissionStatus.DENIED:
            if(platform === "android"){
                ons.notification.alert(__("Please enable location service in phone settings"),{title:""});
                onError("User denied permission to use location");
            }else{
                _makeRequest();
            }
            break;
        case cordova.plugins.diagnostic.permissionStatus.DENIED_ALWAYS:
            // Android only
            ons.notification.alert(__("Please enable location service in phone settings"),{title:""});
            onError("User denied permission to use location");
            break;
        case cordova.plugins.diagnostic.permissionStatus.GRANTED_WHEN_IN_USE:
            // iOS only
            if(platform === "ios"){
                onError("Location services is already switched ON");
            }else{
                _makeRequest();
            }
            break;

    }
}


function requestLocationAuthorization() {
    cordova.plugins.diagnostic.requestLocationAuthorization(handleLocationAuthorizationStatus, onError);
}

function requestLocationAccuracy() {
    cordova.plugins.diagnostic.getLocationAuthorizationStatus(handleLocationAuthorizationStatus, onError);
}

function _makeRequest(){
    cordova.plugins.locationAccuracy.canRequest(function(canRequest){
        if (canRequest) {
            cordova.plugins.locationAccuracy.request(function () {
                //ons.notification.alert("GPS enabled successfully.",{title:""});
                    //handleSuccess("Location accuracy request successful");
                    if(!map)mapinitialize();                     
                                      
                }, function (error) {
                    onError("Error requesting location accuracy: " + JSON.stringify(error));
                    if (error) {
                        // Android only
                        onError("error code=" + error.code + "; error message=" + error.message);
                        if (platform === "android" && error.code !== cordova.plugins.locationAccuracy.ERROR_USER_DISAGREED) {
                            ons.notification.confirm({
                                message: __('Please enable GPS'),
                                // or messageHTML: '<div>Message in HTML</div>',
                                //title: 'Exit ' + APP_TITLE,
                                buttonLabels: [__('Location settings'), __('Cancel')],
                                animation: 'default', // or 'none'
                                primaryButtonIndex: 1,
                                cancelable: true,
                                callback: function(index) {
                                 
                                  if(!index){
                                    // 0-: Button index from the left
                                    cordova.plugins.diagnostic.switchToLocationSettings();
                                    
                                  }else{
                                    
                                    ons.notification.alert(__("Please enable location service in phone settings"),{title:""});
                                    // -1: Cancel
                                  }
                                 
                                }
                              });
                            
                        }
                    }
                }, cordova.plugins.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY // iOS will ignore this
            );
        } else {
            // On iOS, this will occur if Location Services is currently on OR a request is currently in progress.
            // On Android, this will occur if the app doesn't have authorization to use location.
            ons.notification.alert(__("Please enable location service in phone settings"),{title:""});
            onError("Cannot request location accuracy");
        }
    });
}



//*************************************************************************************************************

function showUserLocationMap(){
    cordova.plugins.diagnostic.isGpsLocationEnabled(function(enabled){
        console.log("GPS location is " + (enabled ? "enabled" : "disabled"));
        if(enabled){
            getuserlocation();
        }else{
            if(!APP_DEBUG){
                _makeRequest();                       
            }
        }
    }, function(error){
        console.error("The following error occurred: "+error);
    });     

}



function getuserlocation(){
    map.getMyLocation({"enableHighAccuracy":false},function(location){
        user_location.lat = location.latLng.lat;
        user_location.lng = location.latLng.lng;
        if(selected_city_route != null){
            //calculate distance from selected city
            var lat1 = location.latLng.lat;
            var lng1 = location.latLng.lng;
            var lat2 = selected_city_lat;
            var lng2 = selected_city_long;
            
            var center = {"lat": lat2, "lng": lng2};
            var current_pos = {"lat": lat1, "lng": lng1};

            var distance = plugin.google.maps.geometry.spherical.computeDistanceBetween(center, current_pos); //distance in meters

            if(distance > selected_city_radius){
                //ons.notification.alert("You are outside the service area of " + APP_TITLE + " in your selected city route. Your current location cannot be used for pickup.",{title:""});
                ons.notification.confirm({
                    message: __("You are outside our service area in your selected city route. Your current location cannot be used for pickup"),
                    // or messageHTML: '<div>Message in HTML</div>',
                    title: "",
                    buttonLabels: [__('Change city'), __('OK')],
                    animation: 'default', // or 'none'
                    primaryButtonIndex: 1,
                    cancelable: true,
                    callback: function(index) {
                     
                      if(!index){
                        // 0-: Button index from the left
                        showroutes();
                      }else{
                        return;
                        // -1: Cancel
                      }
                     
                    }
                });
                return;
            }
        }else{

            ons.notification.confirm({
                message: __("Please select your current city"),
                // or messageHTML: '<div>Message in HTML</div>',
                title: "",
                buttonLabels: [__('Select city')],
                animation: 'default', // or 'none'
                primaryButtonIndex: 0,
                cancelable: true,
                callback: function(index) {
                 
                  if(!index){
                    // 0-: Button index from the left
                    showroutes();
                  }else{
                    return;
                    // -1: Cancel
                  }
                 
                }
            });
            return;

        }


        /* pick_up_data.address = "Somewhere in " . selected_city_route; 
        pick_up_data.lat = location.latLng.lat;
        pick_up_data.lng = location.latLng.lng;


        if(route_polyline){
            route_polyline.remove();
            toggleroutepathanimation(0);
            route_polyline = null;                     
        }
        if(route_distance_duration_info_marker){
            route_distance_duration_info_marker.remove();
            route_distance_duration_info_marker = null;
        }
                    
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
                        icon: 'green',
                        animation: plugin.google.maps.Animation.DROP
                    });
        }

        if(marker1 && marker2){ 
            $('#bookbutton').css('visibility','visible');
            $('#bookbutton').css('background-color','rgb(24, 103, 194)');
            $('#bookbutton').data('action','1');

            $("#bookbutton").removeClass("bounceIn animated").addClass("bounceIn animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                $(this).removeClass("bounceIn animated");
            });
        } */

        
        
        plugin.google.maps.Geocoder.geocode({
            "position": {"lat": location.latLng.lat, "lng": location.latLng.lng}
          }, function(results) {
        
            if (results.length === 0) {
               pick_up_data.address = __("Somewhere in {---1}",[selected_city_route]); 
               pick_up_data.lat = location.latLng.lat;
               pick_up_data.lng = location.latLng.lng;

                              
              // Not found
              
            }else{

                var address = results[0].extra.lines.join(', ');
                
                
                if(address == ''){
                    address = __("Somewhere in {---1}",[selected_city_route]); 
                }
                
                pick_up_data.address = address; 
                pick_up_data.lat = location.latLng.lat;
                pick_up_data.lng = location.latLng.lng;
            }   

                if(route_polyline){
                    route_polyline.remove();
                    toggleroutepathanimation(0);
                    route_polyline = null;                     
                }

                if(route_distance_duration_info_marker){
                    route_distance_duration_info_marker.remove();
                    route_distance_duration_info_marker = null;
                }
                            
                $('#pac-input').val(pick_up_data.address);

                $('#mylocationbtn').hide();

                if(marker1){

                    marker1.setDisableAutoPan(true);

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
                    
                    marker1.setDisableAutoPan(true);

                    marker1.on(plugin.google.maps.event.MARKER_CLICK, function(){
                        location_type_selected = 0;
                        show_adresses();
                    })

                    marker1._isReady = true;
                }

               
                if(!current_booking_data.status){
                    if(marker1 && marker2){ 
                        process_route_between_locations();
                    }
                }
                

               
            
          });

          
        

    }, function(){
        //error
        ons.notification.toast(__('Unable to get your location'), {
            timeout: 2000
          });
        return;
    });
}


function distance(lat1, lon1, lat2, lon2, unit) {

    //:::  Passed to function:                                                    :::
//:::    lat1, lon1 = Latitude and Longitude of point 1 (in decimal degrees)  :::
//:::    lat2, lon2 = Latitude and Longitude of point 2 (in decimal degrees)  :::
//:::    unit = the unit you desire for results                               :::
//:::           where: 'M' is statute miles (default)                         :::
//:::                  'K' is kilometers                                      :::
//:::                  'N' is nautical miles        

	var radlat1 = Math.PI * lat1/180
	var radlat2 = Math.PI * lat2/180
	var theta = lon1-lon2
	var radtheta = Math.PI * theta/180
	var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
	if (dist > 1) {
		dist = 1;
	}
	dist = Math.acos(dist)
	dist = dist * 180/Math.PI
	dist = dist * 60 * 1.1515
	if (unit=="K") { dist = dist * 1.609344 }
	if (unit=="N") { dist = dist * 0.8684 }
	return dist
}



function dialcallcenter(){
    document.querySelector('#mySplitter').left.close();
    if(call_center_num === null){
        getcallcenternum();
        ons.notification.alert("Unable to place call. please try again later.",{title:""});
        return;
    }
    window.open('tel:' + call_center_num,'_system');
    //window.plugins.CallNumber.callNumber(callOnSuccess, callOnError, call_center_num, 1);

}


function rateapp(){
    document.querySelector('#mySplitter').left.close();
    //AppRate.promptForRating();
    ons.notification.confirm({
        message: __('Please rate us 5 stars'),
        // or messageHTML: '<div>Message in HTML</div>',
        title: __('Rate our service'),
        buttonLabels: [__('Rate'), __('Cancel')],
        animation: 'default', // or 'none'
        primaryButtonIndex: 1,
        cancelable: true,
        callback: function(index) {
         
          if(!index){
            // 0-: Button index from the left
            window.open(APP_UPDATE_URL_ANDROID,'_system')
          }else{
            return;
            // -1: Cancel
          }
         
        }
    });
    
}

function callOnSuccess(){
    return;
}

function callOnError(){
    return;
}



function routecityitemselected(id){
    if(processing)return;
    processing = 1;
    loading.show();
    $.ajax({ 
        url: ajaxurl, 
        method: 'GET',
        crossDomain:true,
        timeout : 10000,
        xhrFields: {withCredentials: true},
        data: { 'action_get' : 'updateusercity', 'route_id':id},
        dataType: 'json',
        success: function(data){
            loading.hide();
            processing = 0;
            if(data.hasOwnProperty('error')){
                ons.notification.alert(data.error);
                return;
            }
           
            
            routecitychange(id);
            updatefcmtopics(id);
            if(data.hasOwnProperty('recent_locs')){
                build_recents_list(data.recent_locs);
            }
        },
        error: function(){
            processing = 0;
            loading.hide();
            ons.notification.alert(__("Error communicating with server"));
            return;
        } 


    });

      
      
     
 }


//function handles subscribing and unsubscribing to topics for pushnotifications for city routes
 function updatefcmtopics(id = 0){

     if(APP_DEBUG)return;
     
     var topics_city_subs_data = localStorage.getItem('fcm_subscribed_city');
     if(topics_city_subs_data){
         //subscribed topic data found

        
            if(topics_city_subs_data != id){ //is the new city id topic already subscribed to ?
                //unsubscribe from this topic
                cordova.plugins.firebase.messaging.unsubscribe("rider-route-" + topics_city_subs_data); //unsubscribe from the old route id topic 

            }
            
            cordova.plugins.firebase.messaging.subscribe("rider-route-" + id); //subscribe to this topic again just incase fcm device token has changed
            localStorage.setItem('fcm_subscribed_city',id);

     }else{
         //no subscribed topic data found. create new         
         localStorage.setItem('fcm_subscribed_city',id);
         cordova.plugins.firebase.messaging.subscribe("rider-route-" + id); //subscribe to this topic
     }
 }


function routecitychange(id){

    
    $('#pac-input').val('');
    $('#pac-input2').val('');

    
    selected_city_id = id;
    selected_city_route = $('#route-sel-' + id).data('routename');
    selected_city_lat = parseFloat(routetariffs.result[id].cars[0].lat);
    selected_city_long = parseFloat(routetariffs.result[id].cars[0].lng);
    selected_city_curency_symbol = routetariffs.result[id].cars[0].symbol;
    selected_city_curency_exchange_rate = parseFloat(routetariffs.result[id].cars[0].exchng_rate);
    selected_city_curency_code = routetariffs.result[id].cars[0].iso_code; 

    if(routetariffs.result[id].cars[0].dist_unit == 0){ //kilometer
        selected_city_radius = parseFloat(routetariffs.result[id].cars[0].city_radius) * 1000; //convert from KM to meters
    }else{ //miles
        selected_city_radius = parseFloat(routetariffs.result[id].cars[0].city_radius) * 1609.344; //convert from Miles to meters
    }
    
    //save in localstorage
    /* var selected_city_details = {city_id:id,city_name:selected_city_route,city_lat:selected_city_lat,city_lng:selected_city_long,city_radius:selected_city_radius,city_currency_symbol:selected_city_curency_symbol,city_currency_exchange_rate:selected_city_curency_exchange_rate,city_currency_code:selected_city_curency_code};
    localStorage.setObject("selected_city",selected_city_details); */
    
    
    
   
        
    if(!selected_city_lat || !selected_city_long)return;

       


    document.querySelector('#myNavigator').popPage(
        {
        animation: 'fade',
        callback: function(){
                if(typeof map === 'object'){
                    map.clear(); //clear all marker on map
                    city_drivers_markers = {}; //clear drivers marker handles
                    if(route_polyline){
                        route_polyline.remove();
                        toggleroutepathanimation(0);
                        route_polyline = null;                     
                    }

                    if(route_distance_duration_info_marker){
                        route_distance_duration_info_marker.remove();
                        route_distance_duration_info_marker = null;
                    }
                    pick_up_data=[];
                    drop_off_data=[];
                    pick_up_data = {'address': '','lng':'','lat':''};
                    drop_off_data = {'address': '','lng':'','lat':''};

                    //reset multi destination mode
                    multi_destination_mode = 0;        
                    $('#location-type-icon-ds1').hide();
                    $('#location-type-icon-ds2').hide();
                    dest_location_type_selected = 0;
                    destination_stop_inp1_shown = 0;
                    destination_stop_inp2_shown = 0; 
                    multi_destinations = {'pickup' : {'address':'', 'lat':'', 'lng' :''},'dest-1':{'address':'', 'lat':'', 'lng' :''},'dest-2':{'address':'', 'lat':'', 'lng' :''},'dropoff' : {'address':'', 'lat':'', 'lng' :''}};
            
                    marker1 = undefined;
                    marker2 = undefined;
                    markerds1 = undefined;
                    markerds2 = undefined;
            
                    $('#bookbutton').css('visibility','hidden');
                    $('#pac-input').val('');
                    $('#pac-input2').val('');
            
                    loadfavourites();
                    getavailablecitydrivers(selected_city_id);
            
                    map.setClickable(false);
                    map.animateCamera({
                        target: {lat: selected_city_lat, lng: selected_city_long},
                        zoom: 13,
                        duration: 2000,
                        padding: 0  // default = 20px
                        }, function() {
                            getuserlocation();
                            /*
                            pick_up_data.address = selected_city_route;
                            pick_up_data.lat = parseFloat(selected_city_lat);
                            pick_up_data.lng = parseFloat(selected_city_long);
                            if(marker1){

                                marker1.setPosition({
                                    lat:pick_up_data.lat,
                                    lng: pick_up_data.lng                                            
                                });

                                map.animateCamera({
                                    target: {lat: pick_up_data.lat, lng: pick_up_data.lng},
                                    zoom: 18,
                                    duration: 1000,
                                    padding: 0  // default = 20px
                                  }, function() {
                                    //alert("Camera target has been changed");

                                });

                                
                            }else{

                                map.animateCamera({
                                    target: {lat: pick_up_data.lat, lng: pick_up_data.lng},
                                    zoom: 18,
                                    duration: 1000,
                                    padding: 0  // default = 20px
                                  }, function() {
                                    //alert("Camera target has been changed");

                                });

                                marker1 = map.addMarker({
                                            'position':{lat:pick_up_data.lat,lng: pick_up_data.lng},
                                            'icon' : 'img/pick-up-pin.png',
                                            animation: plugin.google.maps.Animation.DROP
                                        });

                                marker1._isReady = true;

                                marker1.on(plugin.google.maps.event.MARKER_CLICK, function(){
                                    location_type_selected = 0;
                                    show_adresses();
                                })
                            } */
                            map.setClickable(true);
                        
                        //alert("Camera target has been changed");
                        });
                }
            }             
        }
    );    
    
     
 }



 function forgotPwd(){

    ons.notification.prompt(__('Enter your registration email. A password reset code will be sent to this email'),{title: __('Password Reset'),buttonLabels : __('Continue'),cancelable: true})
        .then(function(input) {
            if(!input)return;
            var post_data = {'action':'passwordReset','email':input};
            loading.show();
            $.ajax({
                url: ajaxurl,
                type: 'POST',
                timeout : 20000,
                crossDomain:true,
                xhrFields: {withCredentials: true},
                data: post_data,
                success: function (data, status)
                {
                    loading.hide();    
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
                        ons.notification.prompt(__('Please enter the code sent to your email to complete your password reset'),{title: __('Password Reset'),buttonLabels : __('Continue'),cancelable: true})
                        .then(function(input) {
                            
                                if(!input)return;
                            
                                var post_data = {'action':'passwordResetVerify','code':input};
                                loading.show();
                                $.ajax({
                                    url: ajaxurl,
                                    type: 'POST',
                                    timeout : 20000,
                                    crossDomain:true,
                                    xhrFields: {withCredentials: true},
                                    data: post_data,
                                    success: function (data, status)
                                    {
                                        loading.hide();    
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
                                            ons.notification.alert(data_obj.success,{title:""});                
                                            return;
                                        }


                                    },
                                    error: function(jqXHR,textStatus, errorThrown) {  
                                        
                                        loading.hide();
                                        ons.notification.alert(__("Error communicating with server"),{title:""});
                                        return;
                                        
                                    }

                                });
                            



                        });
                    }


                },
                error: function(jqXHR,textStatus, errorThrown) {  
                    
                    loading.hide();
                    ons.notification.alert(__("Error communicating with server"),{title:""});
                    return;
                    
                }

            });
            
    });

    

    

}



function locationmapshow(){
    document.querySelector('#myNavigator').pushPage('locationmap.html',{animation: 'fade'});    
    return;
}




 function routestateitemselected(id){

    if(selected_city_id == 0){
        ons.notification.alert(__("Please select a city route first"),{title:""});
        return;
    }


    //compute the distance of this selected inter state pickup location with the selected city location to ensure its in the same city
    var state_lat = parseFloat($('#route-sel-' + id).data('plat'));
    var state_lng = parseFloat($('#route-sel-' + id).data('plng'));

    var center = {"lat": selected_city_lat, "lng": selected_city_long};
    var current_pos = {"lat": state_lat, "lng": state_lng};

    
    var distance = plugin.google.maps.geometry.spherical.computeDistanceBetween(center, current_pos); //distance in meters

    if(distance > selected_city_radius){
        ons.notification.alert(__("Your current city location does not match the pick-up city of this inter state route"),{title:""});
        return;
    }

    //$('#bookbutton2').attr("disabled","disabled");
    selected_state_id = id;
    processed_interstate_route = 0;
    selected_state_route = $('#route-sel-' + id).data('routename');

    

    //alert(selected_state_route);
    document.querySelector('#myNavigator').pushPage('interstatebooking.html',{animation: 'fade',data: {'title':selected_state_route}});
    return;
    
}


  function showroutes(){

        

    document.querySelector('#myNavigator').pushPage('html/routes.html',
    {
        animation:'fade'             
    }
    );

    document.querySelector('#mySplitter').left.close();
    
    
  }

function mylocation(){

    return;
    
    getMapLocation();
    /* watchID = watchMapPosition(); */       

    
    document.querySelector('#mySplitter').left.close();

}  


function Signup_show(){

    
    
    document.querySelector('#myNavigator').pushPage('signup.html',
        {
            animation: 'fade'             
        }
    );
  }


function Login_show(){
    
    
    document.querySelector('#myNavigator').pushPage('login.html',
        {
            animation: 'fade'             
        }
    );
  }


function verify(){

    document.querySelector('#myNavigator').pushPage('verify.html',
        {
            animation:'fade'             
        }
     );

}


function verifyphone(phone_num){

    document.querySelector('#myNavigator').pushPage('verifyphone.html',
        {
            animation:'fade',
            data: {'phone_num':phone_num}             
        }
     );

}
  

function userRegister(){
    
    var firstname = $("#firstname").val();
    var lastname = $("#lastname").val();
    var address = $("#address").val();
    var phone = $("#phone-reg").val();
    var country_2c_code = $('#country-flag-reg').data('country');
    var country_call_code = $('#tel-code-reg').data('dialcode');
    var email = $("#reg_email").val();
    var password = $("#reg_password").val();
    var rpassword = $("#reg_rpassword").val();
    var ref_code = $("#ref_code").val();

    if(firstname == '' || firstname.length < 2){
        ons.notification.alert(__("Firstname required"),{title:""});
        return;
    }

    if(lastname == '' || lastname.length < 2){
        ons.notification.alert(__("Lastname required"),{title:""});
        return;
    }

    if(address == '' || address.length < 2){
        ons.notification.alert(__("Address required"),{title:""});
        return;
    }

    

    if(phone == '' || phone.length < 5){
        ons.notification.alert(__("Phone number is invalid"),{title:""});
        return;
    }


    if(phone.indexOf('+') != -1){
        ons.notification.alert(__("Please do not include the international dial code (+___) in the phone number field"),{title:""});
        return;
    }

    

    var re = /\S+@\S+\.\S+/;
    if(!re.test(email)){
        ons.notification.alert(__("Email is invalid"),{title:""});
        return;
    }


    if(password.length < 8){
        ons.notification.alert(__("Password must not be less than 8 characters"),{title:""});
        return;
    }

    if(password == '' || rpassword == '' || password !== rpassword){
        ons.notification.alert(__("Password mismatch"),{title:""});
        return;
    }


    if(USE_FIREBASE_PHONE_AUTH && !firebase_phone_number_verified){
        //using firebase phone auth but user phone has not been verified. 

        if(!resend_code_btn_status){
            ons.notification.alert(__("Cannot validate your account at this time. Please wait a while then retry"),{title:""});
            return;
        }

        //validate user details on server

        var post_data = {'action':'userRegister','country_code' : country_2c_code,'country_dial_code' : country_call_code,'firstname':firstname,'lastname':lastname,'address':address,'phone':phone,'email':email,'password':password,'rpassword':rpassword,'ref_code':ref_code,'verified_phone_num':firebase_phone_number_verified,'validate_only':1};

        loading.show();
        $.ajax({
            url: ajaxurl,
            type: 'POST',
            timeout : 25000,
            crossDomain:true,
            xhrFields: {withCredentials: true},
            data: post_data,
            success: function (data, status)
            {
                    
                try{
                    var data_obj = JSON.parse(data);
                }catch(e){
                    loading.hide();
                    return;
                }

                if(data_obj.hasOwnProperty('error')){
                    loading.hide();
                    ons.notification.alert(data_obj.error,{title:""});
                }

                if(data_obj.hasOwnProperty('success')){

                    //successful validation. let's send the verification SMS
                    
                           
                        //send verification SMS
                        cordova.plugins.firebase.auth.verifyPhoneNumber("+" + country_call_code + phone, 0).then(function(verificationId) {
                            // pass verificationId to signInWithVerificationId
                            firebase_phone_auth_verificationid = verificationId;
                            loading.hide();
                            verifyphone("+" + country_call_code + phone);
                            ons.notification.toast(__("Verification code sent..."),{
                                timeout: 2000
                            });
                        }).catch(function(e){
                            loading.hide();
                            ons.notification.alert(__("Error sending verification code"),{title:""});
                            console.log(e);
                            return;
                        });
                    
                    
                   

                }


            },
                error: function(jqXHR,textStatus, errorThrown) {  
                    loading.hide();
                    ons.notification.alert(__("Error communicating with server"),{title:""});
                    return;
                }

        });
   
        return;

    }

    
    
    var post_data = {'action':'userRegister','country_code' : country_2c_code,'country_dial_code' : country_call_code,'userphoto' : user_signup_photo,'firstname':firstname,'lastname':lastname,'address':address,'phone':phone,'email':email,'password':password,'rpassword':rpassword,'ref_code':ref_code,'verified_phone_num':firebase_phone_number_verified,'validate_only':0};

    loading.show();
    $.ajax({
        url: ajaxurl,
        type: 'POST',
        timeout : 25000,
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
                
                ons.notification.alert(data_obj.error,{title:""});
            }

            if(data_obj.hasOwnProperty('success')){

                
                if(typeof routetariffs == "object" && routetariffs.hasOwnProperty('result') && routetariffs.result[1] != null){
                    //save default route usually with id 1
                    let id = 1;
                    selected_city_id = id;
                    selected_city_route = routetariffs.result[1].cars[0].r_title;
                    selected_city_lat = parseFloat(routetariffs.result[id].cars[0].lat);
                    selected_city_long = parseFloat(routetariffs.result[id].cars[0].lng);
                    selected_city_curency_symbol = routetariffs.result[id].cars[0].symbol;
                    selected_city_curency_exchange_rate = parseFloat(routetariffs.result[id].cars[0].exchng_rate);
                    selected_city_curency_code = routetariffs.result[id].cars[0].iso_code; 

                    if(routetariffs.result[id].cars[0].dist_unit == 0){ //kilometer
                        selected_city_radius = parseFloat(routetariffs.result[id].cars[0].city_radius) * 1000; //convert from KM to meters
                    }else{ //miles
                        selected_city_radius = parseFloat(routetariffs.result[id].cars[0].city_radius) * 1609.344; //convert from Miles to meters
                    }
                    
                    //save in localstorage
                    var selected_city_details = {city_id:id,city_name:selected_city_route,city_lat:selected_city_lat,city_lng:selected_city_long,city_radius:selected_city_radius,city_currency_symbol:selected_city_curency_symbol,city_currency_exchange_rate:selected_city_curency_exchange_rate,city_currency_code:selected_city_curency_code};
                    localStorage.setObject("selected_city",selected_city_details);
                }

                if(USE_FIREBASE_PHONE_AUTH){
                    document.querySelector('#myNavigator').popPage(
                        {
                        animation: 'fade',   
                        callback: function(){
                                ons.notification.alert(__("Thank you for signing up. Please login"),{title:""});
                                return; 
                            }          
                        }
                    );
                    return;
                }
                
                if(data_obj.success){
                    ons.enableDeviceBackButtonHandler();
                    verify();
                }


            }


      },
        error: function(jqXHR,textStatus, errorThrown) {  
            loading.hide();
            ons.notification.alert(__("Error communicating with server"),{title:""});
            return;
        }

    });

}



function login() {

    var phone = $("#login-phone").val();
    var password = $("#login-password").val();
    var country_call_code = $('#tel-code').data('dialcode');

    if(phone == '' || phone.length < 5){
        ons.notification.alert(__("Phone number is invalid"),{title:""});
        return;
    }

    if(phone.indexOf('+') != -1){
        ons.notification.alert(__("Please do not include the international dial code (+___) in the phone number field"),{title:""});
        return;
    }
    
    
    loading.show();
    
    
    var post_data = {'action':'userLogin','phone':phone,'password':password,'country_call_code' : country_call_code, 'timezone':user_timezone, 'display_lang':selected_lang.code};

    $.ajax({
        url: ajaxurl,
        method: 'POST',
        timeout : 20000,
        crossDomain:true,
        xhrFields: {withCredentials: true},
        data: post_data,
        success: function (data, status)
        {
            loading.hide();
               
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


            if(data_obj.hasOwnProperty('is_activated')){
                                
                if(data_obj.is_activated === "0"){                    
                    verify();
                    return;
                }else{
                    

                    setTimeout(updatepushnotificationtoken(), 5000);

                    if(data_obj.hasOwnProperty('wallet_amt')){
                                
                        wallet_amount = data_obj.wallet_amt;
                        wallet_history_items = data_obj.wallet_history;                
                    }

                    if(data_obj.hasOwnProperty('reward_points')){
                                
                        reward_points = data_obj.reward_points;
                                      
                    }

                    if(data_obj.hasOwnProperty('default_currency')){
                                
                        default_currency_data = data_obj.default_currency;
                                     
                    }


                    if(data_obj.hasOwnProperty('sess_id')){                                
                        session_id = data_obj.sess_id; 
                        ajaxurl = siteurl + `/ajax.php?sess_id=${session_id}`;
                        localStorage.setItem('sess_id', session_id);                                   
                    }



                    if(data_obj.hasOwnProperty('app_settings')){
                                
                        app_settings = data_obj.app_settings;

                        if(app_settings.payment_type == "0"){ //cash payments only
                            $('#users-wallet').hide();
                            $('#wallet-menu-item').hide();
                        }
                        
                                     
                    }

                    if(data_obj.hasOwnProperty('profileinfo')){
                        userprofileinfo = data_obj.profileinfo;
                        updatefcmtopics(userprofileinfo.route_id);
                        $('#user-image-preload').attr('src',userprofileinfo.photo);

                        if(data_obj.hasOwnProperty('fb_conf')){
                            init_fb_rtdb(data_obj.fb_conf,userprofileinfo.userid);                    
                        }
                                       
                    }

                    if(data_obj.hasOwnProperty('ongoing_bk') &&  data_obj.ongoing_bk.hasOwnProperty('action')){
                        if(data_obj.ongoing_bk.route_id == selected_city_id){
                            ons.notification.alert(__("You have a booking in progress"), {title:"",buttonLabels:[__('Continue')],callback: function(){
                                
                                switch(data_obj.ongoing_bk.action){
                                    case "driver-assigned":
                                    driver_assigned_notify(data_obj.ongoing_bk);
                                    break;
                                    case "driver-arrived":
                                    driver_arrived_notify(data_obj.ongoing_bk);
                                    break;
                                    case "customer-onride":
                                    customer_onride_notify(data_obj.ongoing_bk);
                                    break;
                                }
                            }});
                        }else{
                            ons.notification.alert(__("You have a booking in progress"), {title:"",buttonLabels:[__('Continue')],callback: function(){
                                //navigator.app.exitApp();
                                bookingspage_show();
                            }});
                        }
                    }

                    if(data_obj.hasOwnProperty('recent_locs')){
                        recent_locations_data = data_obj.recent_locs;                        
                    }


                    if(data_obj.hasOwnProperty('scheduled_ride_enabled')){
                        scheduled_ride_enabled = data_obj.scheduled_ride_enabled;                                                                                                  
                    }


                    if(data_obj.hasOwnProperty('tariff_data')){
                        routetariffs = data_obj.tariff_data;  
                        $('#rides-img-preload').html(data_obj.tariff_data.result.preloadrides);                                                                            
                    }


                    if(data_obj.hasOwnProperty('online_pay')){
                        online_payment_info = data_obj.online_pay;                                       
                    }

                    if(data_obj.hasOwnProperty('cc_num')){
                        call_center_num = data_obj.cc_num;                                       
                    }

                    

                    /* if(data_obj.hasOwnProperty('api_key') && google_map_api_key == null){
                        google_map_api_key = data_obj.api_key;
                        loadmap(google_map_api_key); 
                    } */

                    if(data_obj.hasOwnProperty('customer_app_update_url_ios')){                                
                        APP_UPDATE_URL_IOS = data_obj.customer_app_update_url_ios;                
                    }
        
                    if(data_obj.hasOwnProperty('customer_app_update_url_android')){                                
                        APP_UPDATE_URL_ANDROID = data_obj.customer_app_update_url_android;                
                    }
        
        
                    if(device.platform.toLowerCase() === "android"){ //running on android
        
                            if(data_obj.hasOwnProperty('app_version_android')){                                
                                
                                if(APP_VERSION_ANDROID != data_obj.app_version_android){
                                    
                                                                
                                    ons.notification.confirm({
                                        message: __('The version of this App is old. Please update app'),
                                        
                                        title: __('Update App'),
                                        buttonLabels: [__('Later'), __('Update')],
                                        animation: 'default', // or 'none'
                                        primaryButtonIndex: 0,
                                        cancelable: false,
                                        callback: function(index) {
                                        
                                        if(!index){
                                            // 0-: Button index from the left
                                            //navigator.app.exitApp();
                                            
                                        }else{
                                            window.open(APP_UPDATE_URL_ANDROID,'_system');
                                            // -1: Cancel
                                        }
                                        
                                        }
                                    });
                                }                                      
                            }
        
                    }else{ //running on IOS
        
                        if(data_obj.hasOwnProperty('app_version_ios')){                                
                                
                            if(APP_VERSION_IOS != data_obj.app_version_ios){
                                
                                                            
                                ons.notification.confirm({
                                    message: __('The version of this App is old. Please update app'),
                                    // or messageHTML: '<div>Message in HTML</div>',
                                    title: __('Update App'),
                                    buttonLabels: [__('Later'), __('Update')],
                                    animation: 'default', // or 'none'
                                    primaryButtonIndex: 0,
                                    cancelable: false,
                                    callback: function(index) {
                                    
                                    if(!index){
                                        // 0-: Button index from the left
                                        //navigator.app.exitApp();
                                        
                                    }else{
                                        window.open(APP_UPDATE_URL_IOS,'_system');
                                        // -1: Cancel
                                    }
                                    
                                    }
                                });
                            }                                      
                        }
        
                    }

                    

                    document.querySelector('#myNavigator').popPage(
                        {
                        animation: 'fade',   
                        callback: function(){
                                circletransition();
                                
                            }          
                        }
                    );

                    

                    
                }
                
           }


        },
        error: function(jqXHR,textStatus, errorThrown) {  
            
            loading.hide();
            ons.notification.alert(__("Error communicating with server"),{title:""});
            return;
            
        }

    });
    
};


function drivertipbuttonclick(elem, amount){
    let button_id = elem.attr('id');
    $('.driver-tip-buttons').css('background-color','transparent');
    $('.driver-tip-buttons').css('color','#2979ff');
    elem.css('background-color','black');
    elem.css('color','white');
    driver_tip_amount = parseFloat(amount);    

}

function verifyPhoneCode(){
    var activation_code = $("#verify_phone_code").val();

    if(USE_FIREBASE_PHONE_AUTH){
        loading.show();
        cordova.plugins.firebase.auth.signInWithVerificationId(firebase_phone_auth_verificationid, activation_code).then(function() {
            loading.hide();
            firebase_phone_number_verified = 1;
            document.querySelector('#myNavigator').popPage(
                {
                animation: 'fade'   
                }
            );
            userRegister();
            return;

        }).catch(function(e){
            loading.hide();
            firebase_phone_number_verified = 0;
            ons.notification.alert(__("Error verifying your phone number. Ensure your phone number and verification code sent to you are valid"),{title:""});
            return;
            
        });
        return;
    }
}





function verifyCode(){    

    

    loading.show();   

    var activation_code = $("#verify_code").val();

    var post_data = {'action':'userActivateCode',"code":activation_code};

    $.ajax({
        url: ajaxurl,
        type: 'POST',
        timeout : 20000,
        crossDomain:true,
        xhrFields: {withCredentials: true},
        data: post_data,
        success: function (data, status)
        {
            
            loading.hide();    
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

                
                ons.notification.alert(data_obj.success, {buttonLabels:['Restart ' + APP_TITLE],callback: function(){
                    //navigator.app.exitApp();
                    window.location.reload(); 
                    return;
                }});

                                           
            }


        },
        error: function(jqXHR,textStatus, errorThrown) {  
            loading.hide();
            
            ons.notification.alert(__("Error communicating with server"),{title:""});
            return;
            
        }
        
    });

}


function promotions_show(){
    document.querySelector('#myNavigator').pushPage('html/promo.html',
            {
            animation: 'fade'             
            }
    );

    document.querySelector('#mySplitter').left.close();
}


function promocheckadd(promocode='',mode=0){
    
    let stored_promo_code = localStorage.getObject('user-promo-codes');
    

    if(!!stored_promo_code && stored_promo_code.hasOwnProperty('promo_code')){
        if(stored_promo_code.promo_code == promocode){
            return;
        }else if(mode == 1){
            promocode = stored_promo_code.promo_code;
            
        }
        
    }

    if(!promocode)return;
        
    var post_data = {'action_get':'promocodecheck','coupon_code':promocode};
    loading.show();
    $.ajax({
        url: ajaxurl,
        type: 'GET',
        timeout : 20000,
        crossDomain:true,
        xhrFields: {withCredentials: true},
        data: post_data,
        success: function (data, status)
        {
            loading.hide();    
            try{
                var data_obj = JSON.parse(data);
            }catch(e){
                ons.notification.alert(__("Error communicating with server"),{title:""});
                return;
            }

            if(data_obj.hasOwnProperty('error')){

                let stored_promo_code = localStorage.getObject('user-promo-codes');    

                if(!!stored_promo_code && stored_promo_code.hasOwnProperty('promo_code')){
                    if(stored_promo_code.promo_code == promocode){
                        localStorage.removeItem('user-promo-codes');
                    }
                    
                }

                if(mode==1)return;
                ons.notification.alert(data_obj.error,{title:""});
                return;
            }


            if(data_obj.hasOwnProperty('success')){
                //ons.notification.alert(data_obj.message,{title: __("Promo code is valid")});
                //$data = array("success"=> 1, "message" => $msg,'usage_limit_count'=>$usage_limit_count,'user_usage_count'=> $user_usage_count,'days_left'=>$days_left,'coupon_title'=>$title,'city'=>$city);
                let promo_data = {'promo_code':promocode};
                localStorage.setObject("user-promo-codes",promo_data);
                verified_coupon_code = promocode;
                
                $('#promo-title').html(promocode.toUpperCase() + " | " + data_obj.coupon_title);
                $('#promo-desc').html(data_obj.message);
                $('#promo-usage').html(__('Times of use') + " - " + data_obj.user_usage_count + " / " + data_obj.usage_limit_count);
                $('#promo-status').html(data_obj.days_left == 0 ? "Expired" :  __("{---1} days left",[data_obj.days_left]));
                $('#promo-city').html(data_obj.city);

                $('#promo-content').show();

            }

            
        },
        error: function(jqXHR,textStatus, errorThrown) {  
            
            loading.hide();
            ons.notification.alert(__("Error communicating with server"),{title:""});
            return;
            
        }

    });
}

function coupon_check(){

    ons.notification.prompt(__('Enter a coupon code'),{title: __('Coupon Discount'),buttonLabels : __('Continue'),cancelable: true})
        .then(function(input) {
            if(!input)return;
            var post_data = {'action_get':'couponCheck','coupon_code':input};
            loading.show();
            $.ajax({
                url: ajaxurl,
                type: 'GET',
                timeout : 20000,
                crossDomain:true,
                xhrFields: {withCredentials: true},
                data: post_data,
                success: function (data, status)
                {
                    loading.hide();    
                    try{
                        var data_obj = JSON.parse(data);
                    }catch(e){
                        ons.notification.alert(__("Unable to verify coupon code. Please retry later"),{title:""});
                        return;
                    }

                    if(data_obj.hasOwnProperty('error')){
                        ons.notification.alert(data_obj.error,{title:""});
                        return;
                    }


                    if(data_obj.hasOwnProperty('success')){
                        ons.notification.alert(data_obj.message,{title: __("Coupon Valid")});
                        verified_coupon_code = input;
                        $('#coupon-code').html(input);
                    }

                    
                },
                error: function(jqXHR,textStatus, errorThrown) {  
                    
                    loading.hide();
                    ons.notification.alert(__("Unable to verify coupon code. Please retry later"),{title:""});
                    return;
                    
                }

            });
            
    });

    
}



function showsoftlicenses(){
    
    loading.show();    
    document.querySelector('#myNavigator').pushPage('html/software-licenses.html',
            {
            animation: 'fade'             
            }
    );

    document.querySelector('#mySplitter').left.close();

}



function logout(){
    loading.show();
    var post_data = {'action':'userLogout'};

    $.ajax({
        url: ajaxurl,
        type: 'POST',
        timeout : 15000,
        crossDomain:true,
        xhrFields: {withCredentials: true},
        data: post_data,
        success: function (data, status)
        {
            loading.hide();    
            try{
                var data_obj = JSON.parse(data);
            }catch(e){
                
                ons.notification.alert(__("Error communicating with server"),{title:""});
                return;
            }

            
            if(data_obj.hasOwnProperty('loggedout')){
                
                $('#bookbutton').css('visibility','hidden');
                $('#pac-input').val('');
                $('#pac-input2').val('');



                //reset items
                wallet_amount = null;
                wallet_history_items = null;
                userprofileinfo = undefined;
                selected_city_id = "0"
                selected_city_route = undefined;
                selected_state_route = undefined;
                marker1 = undefined;
                marker2 = undefined;
                routetariffs = undefined;
                notifications_data = '';
                bookings_data =[];
                bookings_data = {'pend_onride':'','completed':'','cancelled':''};

                if(map){
                    map.clear();
                    if(route_polyline){
                        route_polyline.remove();
                        toggleroutepathanimation(0);
                        route_polyline = null;                     
                    }

                    if(route_distance_duration_info_marker){
                        route_distance_duration_info_marker.remove();
                        route_distance_duration_info_marker = null;
                    }
                }

                $('#bookbutton').css('visibility','hidden');
                $('#pac-input').val('');
                $('#pac-input2').val('');

                marker1 = undefined;
                marker2 = undefined;
                markerds1 = undefined;
                markerds2 = undefined;

                                
                pick_up_data = [];
                drop_off_data = [];
                pick_up_data = {'address': '','lng':'','lat':''};
                drop_off_data = {'address': '','lng':'','lat':''};

                //reset multi destination mode
                multi_destination_mode = 0;        
                $('#location-type-icon-ds1').hide();
                $('#location-type-icon-ds2').hide();
                dest_location_type_selected = 0;
                destination_stop_inp1_shown = 0;
                destination_stop_inp2_shown = 0; 
                multi_destinations = {'pickup' : {'address':'', 'lat':'', 'lng' :''},'dest-1':{'address':'', 'lat':'', 'lng' :''},'dest-2':{'address':'', 'lat':'', 'lng' :''},'dropoff' : {'address':'', 'lat':'', 'lng' :''}};

                document.querySelector('#mySplitter').left.close();
                document.querySelector('#myNavigator').popPage({animation: 'fade', callback : function(){
                    Login_show();
                }});
                return;
                
            }


        },
        error: function(jqXHR,textStatus, errorThrown) {  
            loading.hide();
            
            ons.notification.alert(__("Error communicating with server"),{title:""});
            return;
            
        }
        
    });

    


}




function del_acc(){

    ons.notification.prompt(__('This action will delete your account and all your records on our servers. Enter your password to continue'),{title:'',cancelable:true,buttonLabels:[__('Cancel'),__('Continue')]})
    .then(function(input) {
        if(!input)return;
        del_user_acc(input);
    });

}


function del_user_acc(input){

    loading.show();
    var post_data = {'action':'del_user_acc','pwd':input};

    $.ajax({
        url: ajaxurl,
        type: 'POST',
        timeout : 15000,
        crossDomain:true,
        xhrFields: {withCredentials: true},
        data: post_data,
        success: function (data, status)
        {
            loading.hide();    
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
                
                $('#bookbutton').css('visibility','hidden');
                $('#pac-input').val('');
                $('#pac-input2').val('');



                //reset items
                wallet_amount = null;
                wallet_history_items = null;
                userprofileinfo = undefined;
                selected_city_id = "0"
                selected_city_route = undefined;
                selected_state_route = undefined;
                marker1 = undefined;
                marker2 = undefined;
                routetariffs = undefined;
                notifications_data = '';
                bookings_data =[];
                bookings_data = {'pend_onride':'','completed':'','cancelled':''};

                if(map){
                    map.clear();
                    if(route_polyline){
                        route_polyline.remove();
                        toggleroutepathanimation(0);
                        route_polyline = null;                     
                    }

                    if(route_distance_duration_info_marker){
                        route_distance_duration_info_marker.remove();
                        route_distance_duration_info_marker = null;
                    }
                }

                $('#bookbutton').css('visibility','hidden');
                $('#pac-input').val('');
                $('#pac-input2').val('');

                marker1 = undefined;
                marker2 = undefined;
                markerds1 = undefined;
                markerds2 = undefined;

                                
                pick_up_data = [];
                drop_off_data = [];
                pick_up_data = {'address': '','lng':'','lat':''};
                drop_off_data = {'address': '','lng':'','lat':''};

                //reset multi destination mode
                multi_destination_mode = 0;        
                $('#location-type-icon-ds1').hide();
                $('#location-type-icon-ds2').hide();
                dest_location_type_selected = 0;
                destination_stop_inp1_shown = 0;
                destination_stop_inp2_shown = 0; 
                multi_destinations = {'pickup' : {'address':'', 'lat':'', 'lng' :''},'dest-1':{'address':'', 'lat':'', 'lng' :''},'dest-2':{'address':'', 'lat':'', 'lng' :''},'dropoff' : {'address':'', 'lat':'', 'lng' :''}};

                document.querySelector('#mySplitter').left.close();
                document.querySelector('#myNavigator').popPage({animation: 'fade', callback : function(){
                    Login_show();
                }});
                
                return;
                
            }


        },
        error: function(jqXHR,textStatus, errorThrown) {  
            loading.hide();
            
            ons.notification.alert(__("Error communicating with server"),{title:""});
            return;
            
        }
        
    });

    


}


function resendPhoneCode(){

    if(!resend_code_btn_status){
        ons.notification.toast(__("Please wait a while before resending verification code"),{
            timeout: 2000
        });
        return;
    }

    
    clearInterval(resend_code_countdown_timer_handle);
    var countdown = RESEND_CODE_COUNTDOWN_VALUE;
    resend_code_btn_status = 0;
    resend_code_countdown_timer_handle = setInterval(function(){
        countdown--;
        if(countdown < 0){
            countdown = 0;
            resend_code_btn_status = 1;
            $('#resend-phone-code-btn').text(__('Resend Code'));
            clearInterval(resend_code_countdown_timer_handle);
            return;
        }
        $('#resend-phone-code-btn').text(__('Resend Code') + ' ' + countdown);
    
    },1000);

    var phone_number = $('#resend-phone-code-btn').data('phonenumber');
    
    //send verification SMS
    cordova.plugins.firebase.auth.verifyPhoneNumber(phone_number, 0).then(function(verificationId) {
        // pass verificationId to signInWithVerificationId
        firebase_phone_auth_verificationid = verificationId;
        ons.notification.toast(__("Verification code sent..."),{
            timeout: 2000
        });
        
    }).catch(function(e){
        ons.notification.alert(__("Error sending verification code"),{title:""});
        console.log(e);
    });

}



function resendCode(){

    

    //using server verfication with email
    var post_data = {'action':'userResendCode'};
    loading.show();
    $.ajax({
        url: ajaxurl,
        type: 'POST',
        timeout : 20000,
        crossDomain:true,
        xhrFields: {withCredentials: true},
        data: post_data,
        success: function (data, status)
        {
            loading.hide();    
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
                ons.notification.alert(data_obj.success,{title:""});                
                return;
            }


        },
        error: function(jqXHR,textStatus, errorThrown) {  
            
            loading.hide();
            ons.notification.alert(__("Error communicating with server"),{title:""});
            return;
            
        }

    });



}


function checkLoginStatus(){
    
    
    var post_data = {'action':'checkLoginStatus','timezone':user_timezone,'display_lang':selected_lang.code};

    $.ajax({
        url: ajaxurl,
        type: 'POST',
        timeout : 15000,
        crossDomain:true,
        xhrFields: {withCredentials: true},
        data: post_data,
        success: function (data, status)
        {
            
            
            //console.log(data);
            try{
                var data_obj = JSON.parse(data);
            }catch(e){

                ons.notification.confirm({
                message: __('Error communicating with server'),
                // or messageHTML: '<div>Message in HTML</div>',
                title: '',
                buttonLabels: [__('Exit'), __('Retry')],
                animation: 'default', // or 'none'
                primaryButtonIndex: 0,
                cancelable: false,
                callback: function(index) {
                    
                    if(!index){
                    // 0-: Button index from the left
                    navigator.app.exitApp();
                    
                    }else{
                    checkLoginStatus();
                    // -1: Cancel
                    }
                    
                }
                });
                return;
            }

            

            /* if(data_obj.hasOwnProperty('api_key')){
                google_map_api_key = data_obj.api_key;
                loadmap(google_map_api_key);                                       
            } */

            sync_with_servertime();

            if(data_obj.hasOwnProperty('customer_app_update_url_ios')){                                
                APP_UPDATE_URL_IOS = data_obj.customer_app_update_url_ios;                
            }

            if(data_obj.hasOwnProperty('customer_app_update_url_android')){                                
                APP_UPDATE_URL_ANDROID = data_obj.customer_app_update_url_android;                
            }

            

            if(device.platform.toLowerCase() === "android"){ //running on android

                    if(data_obj.hasOwnProperty('app_version_android')){                                
                        
                        if(APP_VERSION_ANDROID != data_obj.app_version_android){
                            
                                                        
                            ons.notification.confirm({
                                message: __('The version of this App is old. Please update app'),
                                // or messageHTML: '<div>Message in HTML</div>',
                                title: __('Update App'),
                                buttonLabels: [__('Later'), __('Update')],
                                animation: 'default', // or 'none'
                                primaryButtonIndex: 0,
                                cancelable: false,
                                callback: function(index) {
                                
                                if(!index){
                                    // 0-: Button index from the left
                                    //navigator.app.exitApp();
                                    
                                }else{
                                    window.open(APP_UPDATE_URL_ANDROID,'_system');
                                    // -1: Cancel
                                }
                                
                                }
                            });
                        }                                      
                    }

            }else{ //running on IOS

                if(data_obj.hasOwnProperty('app_version_ios')){                                
                        
                    if(APP_VERSION_IOS != data_obj.app_version_ios){
                        
                                                    
                        ons.notification.confirm({
                            message: __('The version of this App is old. Please update app'),
                            // or messageHTML: '<div>Message in HTML</div>',
                            title: __('Update App'),
                            buttonLabels: [__('Later'), __('Update')],
                            animation: 'default', // or 'none'
                            primaryButtonIndex: 0,
                            cancelable: false,
                            callback: function(index) {
                            
                            if(!index){
                                // 0-: Button index from the left
                                //navigator.app.exitApp();
                                
                            }else{
                                window.open(APP_UPDATE_URL_IOS,'_system');
                                // -1: Cancel
                            }
                            
                            }
                        });
                    }                                      
                }

            }
           


           if(data_obj.hasOwnProperty('cc_num')){                                
                call_center_num = data_obj.cc_num;                
            }


            
            if(data_obj.hasOwnProperty('loggedin')){
                if(!data_obj.loggedin){
                    if(data_obj.hasOwnProperty('tariff_data')){
                        routetariffs = data_obj.tariff_data;
                        $('#rides-img-preload').html(data_obj.tariff_data.result.preloadrides);                 
                        
                    }
                    Login_show();
                    return;
                }else{

                    if(data_obj.hasOwnProperty('is_activated')){
                                
                        if(data_obj.is_activated === "0"){                            
                            verify();
                            return;
                        }
                        
                   }
                    
                   

                    if(data_obj.hasOwnProperty('recent_locs')){
                        recent_locations_data = data_obj.recent_locs;                        
                    }

                    setTimeout(updatepushnotificationtoken(), 5000); 

                    if(data_obj.hasOwnProperty('wallet_amt')){
                                
                        wallet_amount = data_obj.wallet_amt;
                        wallet_history_items = data_obj.wallet_history;                
                    }

                    if(data_obj.hasOwnProperty('reward_points')){
                                
                        reward_points = data_obj.reward_points;
                                      
                    }


                    if(data_obj.hasOwnProperty('sess_id')){                                
                        session_id = data_obj.sess_id; 
                        ajaxurl = siteurl + `/ajax.php?sess_id=${session_id}`;
                        localStorage.setItem('sess_id', session_id);                                   
                    }


                    if(data_obj.hasOwnProperty('default_currency')){
                                
                        default_currency_data = data_obj.default_currency;
                                     
                    }

                    if(data_obj.hasOwnProperty('app_settings')){
                                
                        app_settings = data_obj.app_settings;

                        if(app_settings.payment_type == "0"){ //cash payments only
                            $('#users-wallet').hide();
                            $('#wallet-menu-item').hide();
                        }
                                     
                    }

                    if(data_obj.hasOwnProperty('profileinfo')){
                        userprofileinfo = data_obj.profileinfo;
                        updatefcmtopics(userprofileinfo.route_id);
                        $('#user-image-preload').attr('src',userprofileinfo.photo);

                        if(data_obj.hasOwnProperty('fb_conf')){
                            init_fb_rtdb(data_obj.fb_conf,userprofileinfo.userid);                      
                        }
                                       
                    }

                    if(data_obj.hasOwnProperty('ongoing_bk') &&  data_obj.ongoing_bk.hasOwnProperty('action')){
                        if(data_obj.ongoing_bk.route_id == selected_city_id){
                            ons.notification.alert(__("You have a booking in progress"), {title:"",buttonLabels:[__('Continue')],callback: function(){
                                
                                switch(data_obj.ongoing_bk.action){
                                    case "driver-assigned":
                                    driver_assigned_notify(data_obj.ongoing_bk);
                                    break;
                                    case "driver-arrived":
                                    driver_arrived_notify(data_obj.ongoing_bk);
                                    break;
                                    case "customer-onride":
                                    customer_onride_notify(data_obj.ongoing_bk);
                                    break;
                                }
                            }});
                        }else{
                            ons.notification.alert(__("You have a booking in progress"), {title:"",buttonLabels:[__('Continue')],callback: function(){
                                //navigator.app.exitApp();
                                bookingspage_show();
                            }});
                        }
                    }

                    if(data_obj.hasOwnProperty('scheduled_ride_enabled')){
                        scheduled_ride_enabled = data_obj.scheduled_ride_enabled;                                                                                                  
                    }

                    if(data_obj.hasOwnProperty('tariff_data')){
                        routetariffs = data_obj.tariff_data;
                        $('#rides-img-preload').html(data_obj.tariff_data.result.preloadrides);                          
                    }

                    if(data_obj.hasOwnProperty('online_pay')){
                        online_payment_info = data_obj.online_pay;                                       
                    }

                    if(data_obj.hasOwnProperty('cc_num')){
                        call_center_num = data_obj.cc_num;                                       
                    } 
                    
                    startscreen.hide();
                    circletransition();
                                       

                    
                }
                
            }

            


        },
        error: function(jqXHR,textStatus, errorThrown) {  
                       
            
            ons.notification.confirm({
                message: __('Error communicating with server'),
                // or messageHTML: '<div>Message in HTML</div>',
                title: '',
                buttonLabels: [__('Exit'), __('Retry')],
                animation: 'default', // or 'none'
                primaryButtonIndex: 0,
                cancelable: false,
                callback: function(index) {
                 
                  if(!index){
                    // 0-: Button index from the left
                    navigator.app.exitApp();
                    
                  }else{
                    checkLoginStatus();
                    // -1: Cancel
                  }
                 
                }
              });
            return;
            
        }
        
    });

    


}

function load_selected_city(){

    //get earlier selected route if any
    var init_map_lat;
    var init_map_lng;


    let id = userprofileinfo.route_id;
    selected_city_id = id;
    selected_city_route = routetariffs.result[id].cars[0].r_title;
    selected_city_lat = parseFloat(routetariffs.result[id].cars[0].lat);
    selected_city_long = parseFloat(routetariffs.result[id].cars[0].lng);
    selected_city_curency_symbol = routetariffs.result[id].cars[0].symbol;
    selected_city_curency_exchange_rate = parseFloat(routetariffs.result[id].cars[0].exchng_rate);
    selected_city_curency_code = routetariffs.result[id].cars[0].iso_code; 

    if(routetariffs.result[id].cars[0].dist_unit == 0){ //kilometer
        selected_city_radius = parseFloat(routetariffs.result[id].cars[0].city_radius) * 1000; //convert from KM to meters
    }else{ //miles
        selected_city_radius = parseFloat(routetariffs.result[id].cars[0].city_radius) * 1609.344; //convert from Miles to meters
    }
    
    //save in localstorage
    /* var selected_city_details = {city_id:id,city_name:selected_city_route,city_lat:selected_city_lat,city_lng:selected_city_long,city_radius:selected_city_radius,city_currency_symbol:selected_city_curency_symbol,city_currency_exchange_rate:selected_city_curency_exchange_rate,city_currency_code:selected_city_curency_code};
    localStorage.setObject("selected_city",selected_city_details); */

    if(!selected_city_lat || !selected_city_long)return;

    if(typeof map === 'object'){
        map.clear();
        if(route_polyline){
            route_polyline.remove();
            toggleroutepathanimation(0);
            route_polyline = null;                     
        }

        if(route_distance_duration_info_marker){
            route_distance_duration_info_marker.remove();
            route_distance_duration_info_marker = null;
        }
        marker1 = undefined;
        marker2 = undefined;
        markerds1 = undefined;
        markerds2 = undefined;
        pick_up_data=[];
        drop_off_data=[];
        pick_up_data = {'address': '','lng':'','lat':''};
        drop_off_data = {'address': '','lng':'','lat':''};

        //reset multi destination mode
        multi_destination_mode = 0;        
        $('#location-type-icon-ds1').hide();
        $('#location-type-icon-ds2').hide();
        dest_location_type_selected = 0;
        destination_stop_inp1_shown = 0;
        destination_stop_inp2_shown = 0; 
        multi_destinations = {'pickup' : {'address':'', 'lat':'', 'lng' :''},'dest-1':{'address':'', 'lat':'', 'lng' :''},'dest-2':{'address':'', 'lat':'', 'lng' :''},'dropoff' : {'address':'', 'lat':'', 'lng' :''}};

        getavailablecitydrivers(selected_city_id);
        
        
        if(user_location.lat && user_location.lng){
            init_map_lat = user_location.lat;
            init_map_lng = user_location.lng;
        }else{
            init_map_lat = selected_city_lat;
            init_map_lng = selected_city_long;
        }

        map.setClickable(false);
        map.animateCamera({
            target: {lat: init_map_lat, lng: init_map_lng},
            zoom: 13,
            duration: 2000,
            padding: 0  // default = 20px
        }, function() {
            map.setClickable(true);
            getuserlocation();
            //alert("Camera target has been changed");
        });
    }


}


function loadfavourites(){
    if(localStorage.getObject('favourite_locations_' + selected_city_id)){
        favourite_places = localStorage.getObject('favourite_locations_' + selected_city_id);
        
    }else{
        favourite_places = [];
    }
    rebuild_fav_list();    
    
}


function build_recents_list(data){
    if(selected_city_id != data.route_id)return;
    let links = '';
    recent_list_items_string = '';
    var recent_locations = data.locations;
    if(typeof recent_locations == "object"){
        
        //create recent locations strip
        recent_locations.forEach(function(val,indx){
            links += `<span style="overflow: hidden;white-space: nowrap;text-overflow: ellipsis;margin-left: 5px;padding: 10px 5px;font-size: 12px;border: thin solid #999;background-color: #fff;color: black;border-radius: 20px;font-weight: bold;box-shadow: 1px 1px 3px 0px #b0b0b0;" onclick="recent_destination_click($(this))" data-address="${val.dropoff_address}" data-lat="${val.dropoff_lat}" data-lng="${val.dropoff_long}">${val.dropoff_address}</span>`;
            recent_list_items_string += `<ons-list-item class='recent-item'  data-address="${val.dropoff_address}" data-lat="${val.dropoff_lat}" data-lng="${val.dropoff_long}" onclick='recent_destination_list_click($(this))' tappable modifier='longdivider'><div class='left'><ons-icon icon='fa-history' size='28px' style='color:#ccc;'></ons-icon></div><span class='list-item__title'>${val.dropoff_address}</span><span class='list-item__subtitle'></span></ons-list-item>`;
        })

        if(recent_list_items_string){
            recent_list_items_string = "<br><ons-list-header modifier='longdivider'>" + __("Recent Places") + "</ons-list-header>" + recent_list_items_string
        }
        $('#recent-strip-container').html(links);
        $("#recent-strip-container").css("visibility","visible");
        $("#recent-strip-container").removeClass("slideInRight animated").addClass("slideInRight animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass("slideInRight animated");
        })

    }
    
}



function circletransition(){
    getnotifications(1);
    animatecircle.show();
    
    $('ons-modal').addClass('modal-transparent');
    $('#circle-transition').animate({
        width:2000,
        height:2000

    },1500,function(){
                        animatecircle.hide();
                        $('ons-modal').removeClass('modal-transparent');
                        if(!app_start_animate)AnimateAtStart();
                        load_selected_city();
                        build_recents_list(recent_locations_data);
                        loadfavourites();
                        app_fully_started = 1;
                        if(flash_notification_available){
                            notification_dialog.show();
                        }
    
                    });

}

      
function profilepage_show(){
    document.querySelector('#myNavigator').pushPage('html/profile.html',
        {
        animation: 'fade'             
        }
    );

    document.querySelector('#mySplitter').left.close();

}

function bookingspage_show(){
    
    
    document.querySelector('#myNavigator').pushPage('html/bookings.html',
            {
            animation: 'fade'             
            }
    );

    document.querySelector('#mySplitter').left.close();

}

function bookingcancel(booking_id,driver_assigned){

    if(driver_assigned){

        ons.notification.confirm({
            message: __('A Driver has been assigned to this booking. Cancelling this booking might attract a penalty fee. Do you want to continue?'),
            // or messageHTML: '<div>Message in HTML</div>',
            title: __('Cancel Booking'),
            buttonLabels: [__('Yes'), __('No')],
            animation: 'default', // or 'none'
            primaryButtonIndex: 1,
            cancelable: true,
            callback: function(index) {
             
              if(!index){
                // 0-: Button index from the left
                cancelbooking(booking_id, driver_assigned);
              }else{
                return;
                // -1: Cancel
              }
             
            }
          });

    }else{


        ons.notification.confirm({
            message: __('Booking will be cancelled. Do you want to continue?'),
            // or messageHTML: '<div>Message in HTML</div>',
            title: __('Cancel Booking'),
            buttonLabels: [__('Yes'), __('No')],
            animation: 'default', // or 'none'
            primaryButtonIndex: 1,
            cancelable: true,
            callback: function(index) {
             
              if(!index){
                // 0-: Button index from the left
                cancelbooking(booking_id,driver_assigned);
              }else{
                return;
                // -1: Cancel
              }
             
            }
          });



    }


}


function bookingretry(booking_id){

    if(!booking_id)return;

    ons.notification.confirm({
        message: __('Previous attempt to locate a driver close to your selected pickup location for this trip was not successful. Do you want to retry?'),
        // or messageHTML: '<div>Message in HTML</div>',
        title: __('Retry locating driver'),
        buttonLabels: [__('Yes'), __('No')],
        animation: 'default', // or 'none'
        primaryButtonIndex: 1,
        cancelable: true,
        callback: function(index) {
         
          if(!index){
            // 0-: Button index from the left
            loading.show();
            var post_data = {'action':'bookingretry','bookingid':booking_id};       
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
                        //$('#driver-search').show();
                        showhidedriversearch(1);
                        if(processed_notifications.hasOwnProperty(booking_id)){
                            processed_notifications[booking_id].forEach(function(val,indx){
                                if(val == 'app-message'){
                                    processed_notifications[booking_id][indx] = '';
                                }
                            })
                        }
                        map.clear(); //clear all marker on map
                        pick_up_data=[];
                        drop_off_data=[];
                        pick_up_data = {'address': '','lng':'','lat':''};
                        drop_off_data = {'address': '','lng':'','lat':''};

                        //reset multi destination mode
                        multi_destination_mode = 0;        
                        $('#location-type-icon-ds1').hide();
                        $('#location-type-icon-ds2').hide();
                        dest_location_type_selected = 0;
                        destination_stop_inp1_shown = 0;
                        destination_stop_inp2_shown = 0; 
                        multi_destinations = {'pickup' : {'address':'', 'lat':'', 'lng' :''},'dest-1':{'address':'', 'lat':'', 'lng' :''},'dest-2':{'address':'', 'lat':'', 'lng' :''},'dropoff' : {'address':'', 'lat':'', 'lng' :''}};
                        route_polyline = null;
    
                        marker1 = undefined;
                        marker2 = undefined;
                        marker3 = undefined;
                        marker4 = undefined;
                        markerds1 = undefined;
                        markerds2 = undefined;
    
                        $('#bookbutton').css('visibility','hidden');
                        $('#bookbutton2').css('visibility','hidden');
                        $('#pac-input').val('');
                        $('#pac-input2').val('');
                        document.querySelector('#myNavigator').popPage({animation: 'fade'});
                        
                        driver_search_display_timer = setTimeout(function(){ //auto close the driver-search modal after a period of time.
                          //$('#driver-search').hide();
                          showhidedriversearch(0);
                          ons.notification.alert(__("It is taking time to locate a driver. Please be patient while we continue searching. You will be notified"),{'title':""});                                    
                        },30000);
                    }          
                    
                    
                },
                error: function() {
                    loading.hide();        
                    ons.notification.alert(__("Error communicating with server"),{title:""});
                    return;
                    
                }

            });

          }else{
            return;
            // -1: Cancel
          }
         
        }
    });

}


function cancelbooking(b_id,driver_assigned){
    loading.show();
    var post_data = {'action':'bookingcancel','bookingid':b_id};       
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
              $('#booking-list-item-' + b_id).fadeOut('slow');                             
              if(current_booking_data.status){
                  hideuielements();
              }
            }          
            
            
        },
        error: function() {
            loading.hide();        
            ons.notification.alert(__("Error communicating with server"),{title:""});
            return;
            
        }

    });



}


function notifydelete(n_id){
    loading.show();
    var post_data = {'action':'deletenotification','n_id':n_id};       
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
                ons.notification.alert(__("Error communicating with server"),{title:""});
                return;
            }

            if(data_obj.hasOwnProperty('error')){

                ons.notification.alert(data_obj.error,{title:""});
                return;
                

            }


            
            if(data_obj.hasOwnProperty('success')){
              $('#notification-list-item-' + n_id).fadeOut('slow');                             
              
            }          
            
            
        },
        error: function() {
            loading.hide();        
            ons.notification.alert(__("Error communicating with server"),{title:""});
            return;
            
        }

    });



}


function shownotifications(){

    document.querySelector('#myNavigator').pushPage('html/notifications.html',
            {
            animation: 'fade'             
            }
    );

    document.querySelector('#mySplitter').left.close();   


}


function show_adresses(type){

    if(current_booking_data.status)return;

    if(trip_summary_dialog_show){
        $("#trip-summary-back-btn").css("visibility","hidden");
        $("#trip-summary-back-btn").css("z-index","10");
        $("#menubtn").css("visibility","visible");
        $("#menubtn").css("z-index","100");
        $("#new-bookng-details").css("visibility","hidden");
        $("#new-bookng-details").css("left", "-10000px");
        trip_summary_dialog_show = 0;
    }

    document.querySelector('#myNavigator').pushPage('html/addresses.html',
            {
            animation: 'fade'/* ,
            data:{location_type:type} */           
            }
    );

    

    document.querySelector('#mySplitter').left.close();


}


var list_items_string = "";
var address_autocomplete;
function address_input(){

    if(location_type_selected){
        if(multi_destination_mode){
            if(dest_location_type_selected == 0){
                var location_string = $("#address-input-ds1").val();
            }else if(dest_location_type_selected == 1){
                var location_string = $("#address-input-ds2").val();
            }else{
                var location_string = $("#address-input-d").val();
            }
            
        }else{
            var location_string = $("#address-input-d").val();
        }
    }else{
        var location_string = $("#address-input-p").val();
    }
    
    
    selected_city_lat = parseFloat(routetariffs.result[selected_city_id].cars[0].lat);
    selected_city_long = parseFloat(routetariffs.result[selected_city_id].cars[0].lng);

    var location_bias_lat = selected_city_lat;
    var location_bias_lng = selected_city_long;
    var location_bias_radius = selected_city_radius;
    
    if(location_string === ""){
        list_items_string = "";
        return;
    }
    
    if (address_autocomplete) {
        address_autocomplete.abort();
    }

    if(selected_city_route == "World"){
        if(user_location['lat']){
           location_bias_lat = user_location['lat']; 
           location_bias_lng = user_location['lng'];
           location_bias_radius = 50000;
        }
    }
    
    $('#address-progressbar').css('visibility','visible');    
    address_autocomplete = $.ajax({ 
        url: ajaxurl, 
        method: 'GET',
        crossDomain:true,
        timeout:20000,
        xhrFields: {withCredentials: true},
        data: { 'action_get' : 'getplacesautocomplete', 'place_hint':location_string, 'location_lat':location_bias_lat, 'location_lng':location_bias_lng, 'city_radius' : location_bias_radius, 'session' : googlemap_autocomplete_session },
        dataType: 'json',
        success: function(data){
            $('#address-progressbar').css('visibility','hidden');
            address_autocomplete = undefined;
            $('#locations-info-results').scrollTop();
            
            if(data.hasOwnProperty('places')){
                
                if(data.places.hasOwnProperty('predictions')){
                    var predictions = data.places.predictions;
                    if(predictions != null){
                        predictions.forEach(function(value){
                            var secondary_title = value.structured_formatting.secondary_text != null ? value.structured_formatting.secondary_text + "</span>" : "";
                            var place_id = value.place_id;
                            var place_name = value.description;
                            place_name = place_name.replace(/'/g, "&apos;");
                            place_name = place_name.replace(/"/g, "&quot;");
                            var main_text = value.structured_formatting.main_text;
                            main_text = main_text.replace(/'/g, "&apos;");
                            main_text = main_text.replace(/"/g, "&quot;");
                            var sec_text = secondary_title.replace(/"/g, "&quot;");
                            sec_text = sec_text.replace(/'/g, "&apos;");
                            var fav_icon = "<div class='right' data-maintext = '" + main_text + "' data-sectext = '" + sec_text + "' data-placeid = '" + place_id + "' data-placename = '" + place_name + "' data-added='" + 0 + "' onclick='faviconclick(event,$(this));'><ons-icon  icon='md-star-outline' size='28px' style='color: #eebd60;'></ons-icon></div>";
                            
                            favourite_places.forEach(function(item){
                                if(item.hasOwnProperty('place_name') && item.place_id === place_id){
                                    fav_icon = "<div class='right' data-maintext = '" + main_text + "' data-sectext = '" + sec_text + "' data-placeid = '" + place_id + "' data-placename = '" + place_name + "' data-added='" + 1 + "' onclick='faviconclick(event,$(this));'><ons-icon  icon='md-star' size='28px' style='color: #eebd60;'></ons-icon></div>";
                                }
                                 
                            });
                            
                            list_items_string += "<ons-list-item data-place_id='"+ place_id + "' data-place_name='"+ place_name + "' onclick='geocode_place($(this))' tappable modifier='longdivider'><div class='left'><ons-icon icon='fa-map-marker' size='24px' style='color:#999;'></ons-icon></div><div class='center'><span style='font-weight:bold;' class='list-item__title'>" + main_text + "</span><span class='list-item__subtitle'>" + sec_text + "</span></div>" + fav_icon + "</ons-list-item>";
                        })
            
                        var google_logo = "<ons-list-header modifier='longdivider'><img src='img/powered_by_google_on_white.png' style='height: 15px;' /></ons-list-header>";
                        $("#location-result").html(google_logo + list_items_string);
                        list_items_string = "";
                        
                    }


                }
                
            }  

        },
        error: function(){
            $('#address-progressbar').css('visibility','hidden');
            address_autocomplete = undefined;

        } 


    });

        
}


function locate_place(el){

    var place_lat = el.data('place_lat');
    var place_lng = el.data('place_lng');

    if(multi_destination_mode){
        if(location_type_selected){
            if(dest_location_type_selected == 0){
                //compute distance of this place with city area to check if its within range
                var center = {"lat": selected_city_lat, "lng": selected_city_long};
                var current_pos = {"lat": parseFloat(place_lat), "lng": parseFloat(place_lng)};
        
                var distance = plugin.google.maps.geometry.spherical.computeDistanceBetween(center, current_pos); //distance in meters
                console.log(distance);
                if(distance > selected_city_radius){
                    loading_geocode = 0;
                    loading.hide();
                    ons.notification.alert(__("The selected location is outside our service area in your selected city route. The location cannot be used as a stop"),{title:""});
                    return;
                                        
                }
            
            
                multi_destinations['dest-1']['address'] = el.data('place_name');
                multi_destinations['dest-1']['lat'] = parseFloat(place_lat);
                multi_destinations['dest-1']['lng'] = parseFloat(place_lng);
                $("#address-input-ds1").val(multi_destinations['dest-1']['address']);

            }else if(dest_location_type_selected == 1){

                //compute distance of this place with city area to check if its within range
                var center = {"lat": selected_city_lat, "lng": selected_city_long};
                var current_pos = {"lat": parseFloat(place_lat), "lng": parseFloat(place_lng)};
        
                var distance = plugin.google.maps.geometry.spherical.computeDistanceBetween(center, current_pos); //distance in meters
                console.log(distance);
                if(distance > selected_city_radius){
                    loading_geocode = 0;
                    loading.hide();
                    ons.notification.alert(__("The selected location is outside our service area in your selected city route. The location cannot be used as a stop"),{title:""});
                    return;
                                        
                }

                multi_destinations['dest-2']['address'] = el.data('place_name');
                multi_destinations['dest-2']['lat'] = parseFloat(place_lat);
                multi_destinations['dest-2']['lng'] = parseFloat(place_lng);
                $("#address-input-ds2").val(multi_destinations['dest-2']['address']);
                
            }else{
                //compute distance of this place with city area to check if its within range
                var center = {"lat": selected_city_lat, "lng": selected_city_long};
                var current_pos = {"lat": parseFloat(place_lat), "lng": parseFloat(place_lng)};
        
                var distance = plugin.google.maps.geometry.spherical.computeDistanceBetween(center, current_pos); //distance in meters
                console.log(distance);
                if(distance > selected_city_radius){
                    loading_geocode = 0;
                    loading.hide();
                    ons.notification.alert(__("The selected location is outside our service area in your selected city route. The location cannot be used as a stop"),{title:""});
                    return;
                                        
                }
                multi_destinations['dropoff']['address'] = el.data('place_name');
                multi_destinations['dropoff']['lat'] = parseFloat(place_lat);
                multi_destinations['dropoff']['lng'] = parseFloat(place_lng);
                $("#address-input-d").val(multi_destinations['dropoff']['address']);
                
            }

            if(!multi_destinations['pickup']['address']){
                location_type_selected = 0; //swith to pickup location
                $("#address-input-p").focus();
            }
            
            return;
        }else{
            //compute distance of this place with city area to check if its within range
            var center = {"lat": selected_city_lat, "lng": selected_city_long};
            var current_pos = {"lat": parseFloat(place_lat), "lng": parseFloat(place_lng)};
    
            var distance = plugin.google.maps.geometry.spherical.computeDistanceBetween(center, current_pos); //distance in meters
            console.log(distance);
            if(distance > selected_city_radius){
                loading_geocode = 0;
                loading.hide();
                ons.notification.alert(__("The selected location is outside our service area in your selected city route. The location cannot be used for pick-up"),{title:""});
                return;
                                    
            }

            multi_destinations['pickup']['address'] = el.data('place_name');
            multi_destinations['pickup']['lat'] = parseFloat(place_lat);
            multi_destinations['pickup']['lng'] = parseFloat(place_lng);
            $("#address-input-p").val(multi_destinations['pickup']['address']);
            return;
        }
    }else{
        if(location_type_selected){ //drop-off location data

            //compute distance of this place with city area to check if its within range
            var center = {"lat": selected_city_lat, "lng": selected_city_long};
            var current_pos = {"lat": parseFloat(place_lat), "lng": parseFloat(place_lng)};
    
            var distance = plugin.google.maps.geometry.spherical.computeDistanceBetween(center, current_pos); //distance in meters
            console.log(distance);
            if(distance > selected_city_radius){
                loading_geocode = 0;
                loading.hide();
                ons.notification.alert(__("The selected location is outside our service area in your selected city route. The location cannot be used for drop-off"),{title:""});
                return;
                                      
            }
            
            drop_off_data.address = el.data('place_name');
            drop_off_data.lat = parseFloat(place_lat);
            drop_off_data.lng = parseFloat(place_lng);
    
       }else{
    
            //compute distance of this place with city area to check if its within range
            var center = {"lat": selected_city_lat, "lng": selected_city_long};
            var current_pos = {"lat": parseFloat(place_lat), "lng": parseFloat(place_lng)};
    
            var distance = plugin.google.maps.geometry.spherical.computeDistanceBetween(center, current_pos); //distance in meters
            console.log(distance);
            if(distance > selected_city_radius){
                loading_geocode = 0;
                loading.hide();
                ons.notification.alert(__("The selected location is outside our service area in your selected city route. The location cannot be used for pick-up"),{title:""});
                return;
                
            }
            
            pick_up_data.address = el.data('place_name');
            pick_up_data.lat = parseFloat(place_lat);
            pick_up_data.lng = parseFloat(place_lng);
    
       }
        
    }


    //************************************************8 */
    
    

   //pop address page
    
   document.querySelector('#myNavigator').popPage(
        {
        animation: 'fade',   
        callback: function(){

                if(route_polyline){
                    route_polyline.remove();
                    toggleroutepathanimation(0);
                    route_polyline = null;                     
                }

                if(route_distance_duration_info_marker){
                    route_distance_duration_info_marker.remove();
                    route_distance_duration_info_marker = null;
                }
                //fill up input and animate map
                if(location_type_selected){ //drop-off location
                    $('#pac-input2').val(drop_off_data.address);

                    if(typeof map === 'object'){
                        
                        if(marker2){
                            marker2.setDisableAutoPan(true);
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
                                            'position':{lat:drop_off_data.lat,lng: drop_off_data.lng},
                                            'icon' : 'img/drop-off-pin.png',
                                            animation: plugin.google.maps.Animation.DROP
                                        });

                            marker2.on(plugin.google.maps.event.MARKER_CLICK, function(){
                                location_type_selected = 1;
                                dest_location_type_selected = 2;
                                show_adresses();
                            })

                            marker2.setDisableAutoPan(true);

                            marker2._isReady = true;
                        }

                        
                    }

                }else{
                    $('#pac-input').val(pick_up_data.address);
                    if(typeof map === 'object'){
                        
                        if(marker1){

                            marker1.setDisableAutoPan(true);
                            marker1.setPosition({
                                lat:pick_up_data.lat,
                                lng: pick_up_data.lng                                            
                            });

                            map.animateCamera({
                                target: {lat: pick_up_data.lat, lng: pick_up_data.lng},
                                zoom: 18,
                                duration: 1000,
                                padding: 0  // default = 20px
                              }, function() {
                                //alert("Camera target has been changed");

                            });

                            
                        }else{

                            map.animateCamera({
                                target: {lat: pick_up_data.lat, lng: pick_up_data.lng},
                                zoom: 18,
                                duration: 1000,
                                padding: 0  // default = 20px
                              }, function() {
                                //alert("Camera target has been changed");

                            });

                            marker1 = map.addMarker({
                                        'position':{lat:pick_up_data.lat,lng: pick_up_data.lng},
                                        'icon' : 'img/pick-up-pin.png',
                                        animation: plugin.google.maps.Animation.DROP
                                    });

                            marker1.on(plugin.google.maps.event.MARKER_CLICK, function(){
                                location_type_selected = 0;
                                show_adresses();
                            })
                            marker1.setDisableAutoPan(true);
                            marker1._isReady = true;
                        }

                        
                    }
                }

                if(marker1 && marker2){ //process route details when user has entered both pickup and drop-off locations
                    
                    process_route_between_locations();
                    
                }

                
                
            }          
        }
    );
}

function myfavloc(type,mode){

    
    
    //get the users current location cordinates
    var fav_item_place_name = "";
    var fav_item_main_text = "";
    var fav_item_sec_text = "";
    var fav_item_place_id = "";
    var fav_item_lat = 0.00;
    var fav_item_lng = 0.00; 

    if(mode == 0){ //when pressed fav button on main map

       

        
        if(type == 1){
            fav_item_place_name = pick_up_data.address;
            fav_item_place_name = fav_item_place_name.replace(/"/g, "&quot;");
            fav_item_place_name = fav_item_place_name.replace(/'/g, "&apos;");

            fav_item_main_text = "Home";
            fav_item_sec_text = pick_up_data.address;
            fav_item_sec_text = fav_item_sec_text.replace(/"/g, "&quot;");
            fav_item_sec_text = fav_item_sec_text.replace(/'/g, "&apos;");


            fav_item_place_id = "100";
            fav_item_lat = pick_up_data.lat;
            fav_item_lng = pick_up_data.lng;

        }else if(type == 2){

            fav_item_place_name = pick_up_data.address;
            fav_item_place_name = fav_item_place_name.replace(/"/g, "&quot;");
            fav_item_place_name = fav_item_place_name.replace(/'/g, "&apos;");

            fav_item_main_text = "Work";
            fav_item_sec_text = pick_up_data.address;
            fav_item_sec_text = fav_item_sec_text.replace(/"/g, "&quot;");
            fav_item_sec_text = fav_item_sec_text.replace(/'/g, "&apos;");


            fav_item_place_id = "200";
            fav_item_lat = pick_up_data.lat;
            fav_item_lng = pick_up_data.lng;
            
        }else{

            fav_item_place_name = pick_up_data.address;
            fav_item_place_name = fav_item_place_name.replace(/"/g, "&quot;");
            fav_item_place_name = fav_item_place_name.replace(/'/g, "&apos;");

            fav_item_main_text = "Market";
            fav_item_sec_text = pick_up_data.address;
            fav_item_sec_text = fav_item_sec_text.replace(/"/g, "&quot;");
            fav_item_sec_text = fav_item_sec_text.replace(/'/g, "&apos;");


            fav_item_place_id = "300";
            fav_item_lat = pick_up_data.lat;
            fav_item_lng = pick_up_data.lng;
            
        }
    }else{ //when pressed fav button on location page

        

        if(type == 1){

            $("#myfav-home").removeClass("bounce animated").addClass("bounce animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                $(this).removeClass("bounce animated");
            });


            fav_item_place_name = decoded_location_data.address;
            fav_item_place_name = fav_item_place_name.replace(/"/g, "&quot;");
            fav_item_place_name = fav_item_place_name.replace(/'/g, "&apos;");

            fav_item_main_text = "Home";
            fav_item_sec_text = decoded_location_data.address;
            fav_item_sec_text = fav_item_sec_text.replace(/"/g, "&quot;");
            fav_item_sec_text = fav_item_sec_text.replace(/'/g, "&apos;");


            fav_item_place_id = "100";
            fav_item_lat = decoded_location_data.lat;
            fav_item_lng = decoded_location_data.lng;

        }else if(type == 2){

            $("#myfav-work").removeClass("bounce animated").addClass("bounce animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                $(this).removeClass("bounce animated");
            });

            fav_item_place_name = decoded_location_data.address;
            fav_item_place_name = fav_item_place_name.replace(/"/g, "&quot;");
            fav_item_place_name = fav_item_place_name.replace(/'/g, "&apos;");

            fav_item_main_text = "Work";
            fav_item_sec_text = decoded_location_data.address;
            fav_item_sec_text = fav_item_sec_text.replace(/"/g, "&quot;");
            fav_item_sec_text = fav_item_sec_text.replace(/'/g, "&apos;");


            fav_item_place_id = "200";
            fav_item_lat = decoded_location_data.lat;
            fav_item_lng = decoded_location_data.lng;
            
        }else{

            $("#myfav-market").removeClass("bounce animated").addClass("bounce animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                $(this).removeClass("bounce animated");
            });

            fav_item_place_name = decoded_location_data.address;
            fav_item_place_name = fav_item_place_name.replace(/"/g, "&quot;");
            fav_item_place_name = fav_item_place_name.replace(/'/g, "&apos;");

            fav_item_main_text = "Market";
            fav_item_sec_text = decoded_location_data.address;
            fav_item_sec_text = fav_item_sec_text.replace(/"/g, "&quot;");
            fav_item_sec_text = fav_item_sec_text.replace(/'/g, "&apos;");


            fav_item_place_id = "300";
            fav_item_lat = decoded_location_data.lat;
            fav_item_lng = decoded_location_data.lng;
            
        }


    }
   
    
    var item_details = {place_name:fav_item_place_name,place_id:fav_item_place_id,main_text:fav_item_main_text,sec_text:fav_item_sec_text,place_lat:fav_item_lat,place_lng:fav_item_lng};

    //check if myfav location has already been stored and remove it
    favourite_places.forEach(function(item,index){
        if(item.hasOwnProperty('place_id') && item.place_id === fav_item_place_id){
            favourite_places.splice(index,1); //remove item
            
        }

        
    });


    //add this myfav location to the favourites list and store on local storage too
    favourite_places.push(item_details);
    localStorage.setObject('favourite_locations_'+selected_city_id,favourite_places);
    
    rebuild_fav_list();
    $("#fav-list").html(fav_list_items_string);




}


function faviconclick(event,el){
    event.stopPropagation();
    event.preventDefault();
    var clicked_item_place_name = el.data('placename');
    var clicked_item_place_id = el.data('placeid');
    var clicked_item_main_text = el.data('maintext');
    var clicked_item_sec_text = el.data('sectext');
    var clicked_item_lat = 0.00;
    var clicked_item_lng = 0.00;
    var item_details = {place_name:clicked_item_place_name,place_id:clicked_item_place_id,main_text:clicked_item_main_text,sec_text:clicked_item_sec_text,place_lat:clicked_item_lat,place_lng:clicked_item_lng};
    if(el.data('added') == 1){ //already in favourites. remove
        favourite_places.forEach(function(item,index){
            if(item.hasOwnProperty('place_name') && item.place_id === clicked_item_place_id){
                favourite_places.splice(index,1);
                el.attr('icon','md-star-outline');
                el.data('added',0);

                rebuild_fav_list();
                $("#fav-list").html(fav_list_items_string);

                /* ons.notification.toast("Location removed from favourites",{
                    timeout: 1000
                }); */

            }
        });
        localStorage.setObject('favourite_locations_'+selected_city_id,favourite_places);

    }else{ //not in favourites. add.
        el.attr('icon','md-star');
        el.data('added',1);
        favourite_places.push(item_details);
        localStorage.setObject('favourite_locations_'+selected_city_id,favourite_places);
        
        rebuild_fav_list();
        $("#fav-list").html(fav_list_items_string);
        /* ons.notification.toast("Location added to favourites",{
            timeout: 1000
        }); */
    }
    




}


function rebuild_fav_list(){
    
    fav_list_items_string = "";
    favourite_places.forEach(function(item,index){

        if(item.place_id == "100"){

            var del_fav_icon = "<div class='right' data-placeid = '" + item.place_id + "' onclick='favdelete(event,$(this));'><ons-icon icon='md-delete' size='28px' style='color:#f44336;'></ons-icon></div>";
            fav_list_items_string += "<ons-list-item class='fav-item' data-place_lat='"+ item.place_lat + "' data-place_lng='"+ item.place_lng + "' data-place_id='"+ item.place_id + "' data-place_name='"+ item.place_name + "' onclick='locate_place($(this))' tappable modifier='longdivider'><div class='left'><ons-icon icon='md-home' size='28px' style='color:#ccc;'></ons-icon></div><span class='list-item__title'>" + __(item.main_text) + "</span><span class='list-item__subtitle'>" + item.sec_text + "</span>" + del_fav_icon + "</ons-list-item>";

        }else if(item.place_id == "200"){

            var del_fav_icon = "<div class='right' data-placeid = '" + item.place_id + "' onclick='favdelete(event,$(this));'><ons-icon icon='md-delete' size='28px' style='color:#f44336;'></ons-icon></div>";
            fav_list_items_string += "<ons-list-item class='fav-item' data-place_lat='"+ item.place_lat + "' data-place_lng='"+ item.place_lng + "' data-place_id='"+ item.place_id + "' data-place_name='"+ item.place_name + "' onclick='locate_place($(this))' tappable modifier='longdivider'><div class='left'><ons-icon icon='md-case' size='28px' style='color:#ccc;'></ons-icon></div><span class='list-item__title'>" + __(item.main_text) + "</span><span class='list-item__subtitle'>" + item.sec_text + "</span>" + del_fav_icon + "</ons-list-item>";

        }else if(item.place_id == "300"){

            var del_fav_icon = "<div class='right' data-placeid = '" + item.place_id + "' onclick='favdelete(event,$(this));'><ons-icon icon='md-delete' size='28px' style='color:#f44336;'></ons-icon></div>";
            fav_list_items_string += "<ons-list-item class='fav-item' data-place_lat='"+ item.place_lat + "' data-place_lng='"+ item.place_lng + "' data-place_id='"+ item.place_id + "' data-place_name='"+ item.place_name + "' onclick='locate_place($(this))' tappable modifier='longdivider'><div class='left'><ons-icon icon='md-shopping-cart' size='28px' style='color:#ccc;'></ons-icon></div><span class='list-item__title'>" + __(item.main_text) + "</span><span class='list-item__subtitle'>" + item.sec_text + "</span>" + del_fav_icon + "</ons-list-item>";


        }else{

            var del_fav_icon = "<div class='right' data-placeid = '" + item.place_id + "' onclick='favdelete(event,$(this));'><ons-icon icon='md-delete' size='28px' style='color:#f44336;'></ons-icon></div>";
            fav_list_items_string += "<ons-list-item class='fav-item' data-place_lat='"+ item.place_lat + "' data-place_lng='"+ item.place_lng + "' data-place_id='"+ item.place_id + "' data-place_name='"+ item.place_name + "' onclick='geocode_place($(this))' tappable modifier='longdivider'><div class='left'><ons-icon icon='md-star' size='28px' style='color:#ccc;'></ons-icon></div><span class='list-item__title'>" + item.main_text + "</span><span class='list-item__subtitle'>" + item.sec_text + "</span>" + del_fav_icon + "</ons-list-item>";

        }
        
    });

    if(fav_list_items_string)fav_list_items_string = "<br><ons-list-header modifier='longdivider'>" + __("Favourite Places") + "</ons-list-header>" + fav_list_items_string;

}


function favdelete(event,el){
    event.stopPropagation();
    event.preventDefault();    

    var clicked_item_place_id = el.data('placeid');
    favourite_places.forEach(function(item,index){
        if(item.hasOwnProperty('place_name') && item.place_id == clicked_item_place_id){
            favourite_places.splice(index,1);

            el.parentsUntil(".fav-item").fadeOut("slow");
                        
        }

        
    });

    localStorage.setObject('favourite_locations_'+selected_city_id,favourite_places);

    rebuild_fav_list();
    $("#fav-list").html(fav_list_items_string);
    
    
}


function geocode_place(item){
    
    if(loading_geocode)return;
    loading.show();
    place_id = item.data('place_id');
    loading_geocode = 1;
    
    if(location_type_selected){ //drop-off address field selected
        //check if pick-up location data has already been entered and get the directions to drop-off location in this request
        if(pick_up_data.address != null){
            get_direction = 1;
            point_lat = pick_up_data.lat;
            point_long = pick_up_data.lng;
        }

    }else{

        if(drop_off_data.address != null){
            get_direction = 1;
            point_lat = drop_off_data.lat;
            point_long = drop_off_data.lng;
        }


    }
    $.ajax({ 
        url: ajaxurl, 
        method: 'GET',
        timeout : 10000,
        crossDomain:true,
        xhrFields: {withCredentials: true},
        data: { 'action_get' : 'geocodeplace', 'place_id':place_id,'get_direction':get_direction,'point_lat':point_lat,'point_long':point_long,'selected_city_id':selected_city_id,'location_type':location_type_selected},
        dataType: 'json',
        success: function(data){
                        
            
            if(data.hasOwnProperty('place_details') && data.place_details.status === 'OK'){
               console.log(data.place_details);
               
               if(location_type_selected){ //drop-off location data
                    if(multi_destination_mode){
                        if(dest_location_type_selected == 0){
                            //compute distance of this place with city area to check if its within range
                            var center = {"lat": selected_city_lat, "lng": selected_city_long};
                            var current_pos = {"lat": parseFloat(data.place_details.results['0'].geometry.location.lat), "lng": parseFloat(data.place_details.results['0'].geometry.location.lng)};

                            var distance = plugin.google.maps.geometry.spherical.computeDistanceBetween(center, current_pos); //distance in meters
                            console.log(distance);
                            if(distance > selected_city_radius){
                                loading_geocode = 0;
                                loading.hide();
                                ons.notification.alert(__("The selected location is outside our service area in your selected city route. The location cannot be used as a stop"),{title:""});
                                return;
                                                    
                            }
                            
                            multi_destinations['dest-1']['address'] = item.data('place_name');
                            multi_destinations['dest-1']['lat'] = parseFloat(data.place_details.results['0'].geometry.location.lat);
                            multi_destinations['dest-1']['lng'] = parseFloat(data.place_details.results['0'].geometry.location.lng);
                        }else if(dest_location_type_selected == 1){
                            //compute distance of this place with city area to check if its within range
                            var center = {"lat": selected_city_lat, "lng": selected_city_long};
                            var current_pos = {"lat": parseFloat(data.place_details.results['0'].geometry.location.lat), "lng": parseFloat(data.place_details.results['0'].geometry.location.lng)};

                            var distance = plugin.google.maps.geometry.spherical.computeDistanceBetween(center, current_pos); //distance in meters
                            console.log(distance);
                            if(distance > selected_city_radius){
                                loading_geocode = 0;
                                loading.hide();
                                ons.notification.alert(__("The selected location is outside our service area in your selected city route. The location cannot be used as a stop"),{title:""});
                                return;
                                                    
                            }
                            
                            multi_destinations['dest-2']['address'] = item.data('place_name');
                            multi_destinations['dest-2']['lat'] = parseFloat(data.place_details.results['0'].geometry.location.lat);
                            multi_destinations['dest-2']['lng'] = parseFloat(data.place_details.results['0'].geometry.location.lng);
                        }else{
                            //compute distance of this place with city area to check if its within range
                            var center = {"lat": selected_city_lat, "lng": selected_city_long};
                            var current_pos = {"lat": parseFloat(data.place_details.results['0'].geometry.location.lat), "lng": parseFloat(data.place_details.results['0'].geometry.location.lng)};

                            var distance = plugin.google.maps.geometry.spherical.computeDistanceBetween(center, current_pos); //distance in meters
                            console.log(distance);
                            if(distance > selected_city_radius){
                                loading_geocode = 0;
                                loading.hide();
                                ons.notification.alert(__("The selected location is outside our service area in your selected city route. The location cannot be used for drop-off"),{title:""});
                                return;
                                                    
                            }
                            
                            multi_destinations['dropoff']['address'] = item.data('place_name');
                            multi_destinations['dropoff']['lat'] = parseFloat(data.place_details.results['0'].geometry.location.lat);
                            multi_destinations['dropoff']['lng'] = parseFloat(data.place_details.results['0'].geometry.location.lng);

                            if(!drop_off_data.address){

                            }
                        }

                    }else{
                        //compute distance of this place with city area to check if its within range
                        var center = {"lat": selected_city_lat, "lng": selected_city_long};
                        var current_pos = {"lat": parseFloat(data.place_details.results['0'].geometry.location.lat), "lng": parseFloat(data.place_details.results['0'].geometry.location.lng)};

                        var distance = plugin.google.maps.geometry.spherical.computeDistanceBetween(center, current_pos); //distance in meters
                        console.log(distance);
                        if(distance > selected_city_radius){
                            loading_geocode = 0;
                            loading.hide();
                            ons.notification.alert(__("The selected location is outside our service area in your selected city route. The location cannot be used for drop-off"),{title:""});
                            return;
                                                
                        }
                        
                        drop_off_data.address = item.data('place_name');
                        drop_off_data.lat = parseFloat(data.place_details.results['0'].geometry.location.lat);
                        drop_off_data.lng = parseFloat(data.place_details.results['0'].geometry.location.lng);
                    }                    

               }else{

                    if(multi_destination_mode){
                        var center = {"lat": selected_city_lat, "lng": selected_city_long};
                        var current_pos = {"lat": parseFloat(data.place_details.results['0'].geometry.location.lat), "lng": parseFloat(data.place_details.results['0'].geometry.location.lng)};

                        var distance = plugin.google.maps.geometry.spherical.computeDistanceBetween(center, current_pos); //distance in meters
                        console.log(distance);
                        if(distance > selected_city_radius){
                            loading_geocode = 0;
                            loading.hide();
                            ons.notification.alert(__("The selected location is outside our service area in your selected city route. The location cannot be used for pick-up"),{title:""});
                            return;
                            
                        }
                        
                        multi_destinations['pickup']['address'] = item.data('place_name');
                        multi_destinations['pickup']['lat'] = parseFloat(data.place_details.results['0'].geometry.location.lat);
                        multi_destinations['pickup']['lng'] = parseFloat(data.place_details.results['0'].geometry.location.lng);

                    }else{
                        //compute distance of this place with city area to check if its within range
                        var center = {"lat": selected_city_lat, "lng": selected_city_long};
                        var current_pos = {"lat": parseFloat(data.place_details.results['0'].geometry.location.lat), "lng": parseFloat(data.place_details.results['0'].geometry.location.lng)};

                        var distance = plugin.google.maps.geometry.spherical.computeDistanceBetween(center, current_pos); //distance in meters
                        console.log(distance);
                        if(distance > selected_city_radius){
                            loading_geocode = 0;
                            loading.hide();
                            ons.notification.alert(__("The selected location is outside our service area in your selected city route. The location cannot be used for pick-up"),{title:""});
                            return;
                            
                        }
                        
                        pick_up_data.address = item.data('place_name');
                        pick_up_data.lat = parseFloat(data.place_details.results['0'].geometry.location.lat);
                        pick_up_data.lng = parseFloat(data.place_details.results['0'].geometry.location.lng);
                    }

                    

               }

               if(multi_destination_mode){
                   if(location_type_selected){
                        if(dest_location_type_selected == 0){
                            $("#address-input-ds1").val(multi_destinations['dest-1']['address']);
                            loading_geocode = 0;
                        }else if(dest_location_type_selected == 1){
                            $("#address-input-ds2").val(multi_destinations['dest-2']['address']);
                            loading_geocode = 0;
                        }else{
                            $('#pac-input2').val(drop_off_data.address);
                            $("#address-input-d").val(multi_destinations['dropoff']['address']);
                            loading_geocode = 0;
                        }
                        if(!pick_up_data.address){
                            location_type_selected = 0; //swith to pickup location
                            $("#address-input-p").focus();                        
                        }
                        loading.hide();
                        return;
                    }else{
                        $("#address-input-p").val(multi_destinations['pickup']['address']);                        
                    }
               }else{

                    if(location_type_selected){
                        if(drop_off_data.address && !pick_up_data.address){ //only dropoff address has been entered. send focus to pickup address so user can fill that too
                            
                            $('#pac-input2').val(drop_off_data.address);
                            $("#address-input-d").val(drop_off_data.address);
                            loading_geocode = 0;
                            if(marker2){

                                marker2.setDisableAutoPan(true);
                                marker2.setPosition({
                                    lat:drop_off_data.lat,
                                    lng: drop_off_data.lng
                                                                                
                                });

                                
                                
                            }else{
                                
                                
                                marker2 = map.addMarker({
                                                'position':{lat:drop_off_data.lat,lng: drop_off_data.lng},
                                                'icon' : 'img/drop-off-pin.png',
                                                animation: plugin.google.maps.Animation.DROP
                                            });

                                marker2.on(plugin.google.maps.event.MARKER_CLICK, function(){
                                    location_type_selected = 1;
                                    dest_location_type_selected = 2;
                                    show_adresses();
                                })

                                marker2.setDisableAutoPan(true);
                                marker2._isReady = true;
                                
                            }

                            location_type_selected = 0; //swith to pickup location
                            $("#address-input-p").focus();
                            loading.hide();
                            return;
                        }
                    }else{
                        if(!drop_off_data.address && pick_up_data.address){ //only dropoff address has been entered. send focus to pickup address so user can fill that too
                            
                            $('#pac-input1').val(pick_up_data.address);
                            $("#address-input-p").val(pick_up_data.address);
                            loading_geocode = 0;
                            if(marker1){

                                marker1.setDisableAutoPan(true);
                                marker1.setPosition({
                                    lat:pick_up_data.lat,
                                    lng: pick_up_data.lng
                                                                                
                                });

                                
                                
                            }else{
                                
                                
                                marker1 = map.addMarker({
                                                'position':{lat:pick_up_data.lat,lng: pick_up_data.lng},
                                                'icon' : 'img/pick-up-pin.png',
                                                animation: plugin.google.maps.Animation.DROP
                                            });

                                marker1.on(plugin.google.maps.event.MARKER_CLICK, function(){
                                    location_type_selected = 0;
                                    show_adresses();
                                })

                                marker1.setDisableAutoPan(true);
                                marker1._isReady = true;
                                
                            }

                            location_type_selected = 1; //swith to destination
                            $("#address-input-d").focus();
                            loading.hide();
                            return;
                        }
                    }

                    
                }

               //pop address page
               
               document.querySelector('#myNavigator').popPage(
                    {
                    animation: 'fade',   
                    callback: function(){

                            if(route_polyline){
                                route_polyline.remove();
                                toggleroutepathanimation(0);
                                route_polyline = null;                     
                            }
                            if(route_distance_duration_info_marker){
                                route_distance_duration_info_marker.remove();
                                route_distance_duration_info_marker = null;
                            }
                            //fill up input and animate map
                            if(location_type_selected){ //drop-off location
                                $('#pac-input2').val(drop_off_data.address);

                                if(typeof map === 'object'){
                                    
                                    if(marker2){

                                        marker2.setDisableAutoPan(true);
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
                                                        'position':{lat:drop_off_data.lat,lng: drop_off_data.lng},
                                                        'icon' : 'img/drop-off-pin.png',
                                                        animation: plugin.google.maps.Animation.DROP
                                                    });

                                        marker2.on(plugin.google.maps.event.MARKER_CLICK, function(){
                                            location_type_selected = 1;
                                            dest_location_type_selected = 2;
                                            show_adresses();
                                        })

                                        marker2.setDisableAutoPan(true);

                                        marker2._isReady = true;
                                    }

                                    
                                }

                            }else{
                                $('#pac-input').val(pick_up_data.address);
                                if(typeof map === 'object'){
                                    
                                    if(marker1){

                                        marker1.setDisableAutoPan(true);

                                        marker1.setPosition({
                                            lat:pick_up_data.lat,
                                            lng: pick_up_data.lng                                            
                                        });

                                        map.animateCamera({
                                            target: {lat: pick_up_data.lat, lng: pick_up_data.lng},
                                            zoom: 18,
                                            duration: 1000,
                                            padding: 0  // default = 20px
                                          }, function() {
                                            //alert("Camera target has been changed");
    
                                        });

                                        
                                    }else{

                                        map.animateCamera({
                                            target: {lat: pick_up_data.lat, lng: pick_up_data.lng},
                                            zoom: 18,
                                            duration: 1000,
                                            padding: 0  // default = 20px
                                          }, function() {
                                            //alert("Camera target has been changed");
    
                                        });

                                        marker1 = map.addMarker({
                                                    'position':{lat:pick_up_data.lat,lng: pick_up_data.lng},
                                                    'icon' : 'img/pick-up-pin.png',
                                                    animation: plugin.google.maps.Animation.DROP
                                                });

                                        marker1.on(plugin.google.maps.event.MARKER_CLICK, function(){
                                            location_type_selected = 0;
                                            show_adresses();
                                        })

                                        marker1.setDisableAutoPan(true);

                                        marker1._isReady = true;
                                    }

                                    
                                }
                            }

                            if(marker1 && marker2){ //process route details when user has entered both pickup and drop-off locations
                                //update tariffs data
                                if(data.hasOwnProperty('tariff_data')){
                                    routetariffs = data.tariff_data;
                                    $('#rides-img-preload').html(data.tariff_data.result.preloadrides);                          
                                }
                                setTimeout(process_booking_route(data.directions),500);
                                //process_booking_route(data.directions);
                                
                            }

                            
                            
                        }          
                    }
                );
            
                loading_geocode = 0;
                loading.hide();
               return             
                
            }

            loading_geocode = 0;

            if(data.hasOwnProperty('error')){
                ons.notification.alert(data.error,{title:""});
                return;             
                 
             }
            
            ons.notification.toast(__("Error communicating with server"),{
                timeout: 2000
              });
            return;

        },
        error: function(){
            loading_geocode = 0;
            loading.hide();
            ons.notification.toast(__("Error communicating with server"),{
                timeout: 2000
              });
            return;
            
        } 


    });
}

function recent_destination_list_click(item){
        if(multi_destination_mode){
            if(location_type_selected){
                if(dest_location_type_selected == 0){
                    multi_destinations['dest-1']['address'] = item.data('address');
                    multi_destinations['dest-1']['lat'] = item.data('lat');
                    multi_destinations['dest-1']['lng'] = item.data('lng');
                    $("#address-input-ds1").val(multi_destinations['dest-1']['address']);
                }else if(dest_location_type_selected == 1){
                    multi_destinations['dest-2']['address'] = item.data('address');
                    multi_destinations['dest-2']['lat'] = item.data('lat');
                    multi_destinations['dest-2']['lng'] = item.data('lng');
                    $("#address-input-ds2").val(multi_destinations['dest-2']['address']);
                    
                }else{
                    multi_destinations['dropoff']['address'] = item.data('address');
                    multi_destinations['dropoff']['lat'] = item.data('lat');
                    multi_destinations['dropoff']['lng'] = item.data('lng');
                    $("#address-input-d").val(multi_destinations['dropoff']['address']);
                    
                }

                if(!multi_destinations['pickup']['address']){
                    location_type_selected = 0; //swith to pickup location
                    $("#address-input-p").focus();
                }
                
                return;
            }else{
                multi_destinations['pickup']['address'] = item.data('address');
                multi_destinations['pickup']['lat'] = item.data('lat');
                multi_destinations['pickup']['lng'] = item.data('lng');
                $("#address-input-p").val(multi_destinations['pickup']['address']);
                return;
            }
        }else{
            if(location_type_selected){
                drop_off_data.address = item.data('address');
                drop_off_data.lat = item.data('lat');
                drop_off_data.lng = item.data('lng');
                $("#address-input-d").val(drop_off_data.address);
            }else{
                pick_up_data.address = item.data('address');
                pick_up_data.lat = item.data('lat');
                pick_up_data.lng = item.data('lng');
                $("#address-input-p").val(pick_up_data.address);
            }
            
        }
    
    document.querySelector('#myNavigator').popPage(
        {
            animation: 'fade',   
            callback: function(){
                if(route_polyline){
                    route_polyline.remove();
                    toggleroutepathanimation(0);
                    route_polyline = null;                     
                }
                if(route_distance_duration_info_marker){
                    route_distance_duration_info_marker.remove();
                    route_distance_duration_info_marker = null;
                }
                //fill up input and animate map
                $('#pac-input2').val(drop_off_data.address);
            
                if(typeof map === 'object'){
                    
                    if(location_type_selected){
                    
                        if(marker2){
                
                            marker2.setDisableAutoPan(true);
                
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
                                            'position':{lat:drop_off_data.lat,lng: drop_off_data.lng},
                                            'icon' : 'img/drop-off-pin.png',
                                            animation: plugin.google.maps.Animation.DROP
                                        });
                
                            marker2.on(plugin.google.maps.event.MARKER_CLICK, function(){
                                location_type_selected = 1;
                                dest_location_type_selected = 2;
                                show_adresses();
                            })
                
                            marker2.setDisableAutoPan(true);
                
                            marker2._isReady = true;
                        }
                    }else{
                    
                        if(marker1){
                
                            marker1.setDisableAutoPan(true);
                
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
                                            'position':{lat:pick_up_data.lat,lng: pick_up_data.lng},
                                            'icon' : 'img/pick-up-pin.png',
                                            animation: plugin.google.maps.Animation.DROP
                                        });
                
                            marker1.on(plugin.google.maps.event.MARKER_CLICK, function(){
                                location_type_selected = 0;
                                show_adresses();
                            })
                
                            marker1.setDisableAutoPan(true);
                
                            marker1._isReady = true;
                        }
                    }


            
                    
                }
            
                if(marker1 && marker2){ //process route details when user has entered both pickup and drop-off locations
                    setTimeout(process_route_between_locations(),500);
                    //process_booking_route(data.directions);        
                }else{
                    if(!marker1){
                        setTimeout(function(){
                            location_type_selected = 0;
                            show_adresses();
                        },500); 
                    }else{
                        setTimeout(function(){
                            location_type_selected = 1;
                            show_adresses();
                        },500);
                    }
                           
                }
            }
        }
    )
}


function recent_destination_click(item){

    drop_off_data.address = item.data('address');
    drop_off_data.lat = item.data('lat');
    drop_off_data.lng = item.data('lng');

    multi_destination_mode = 0;        
    $('#location-type-icon-ds1').hide();
    $('#location-type-icon-ds2').hide();
    dest_location_type_selected = 0;
    destination_stop_inp1_shown = 0;
    destination_stop_inp2_shown = 0;
    multi_destinations['dest-1']['address'] = '';
    multi_destinations['dest-1']['lat'] = '';
    multi_destinations['dest-1']['lng'] = '';
    multi_destinations['dest-2']['address'] = '';
    multi_destinations['dest-2']['lat'] = '';
    multi_destinations['dest-2']['lng'] = '';

    if(markerds1){
        markerds1.remove(); 
        markerds1 = null;
    }

    if(markerds2){
        markerds2.remove(); 
        markerds2 = null;
    }

    
    if(route_polyline){
        route_polyline.remove();
        toggleroutepathanimation(0);
        route_polyline = null;                     
    }
    if(route_distance_duration_info_marker){
        route_distance_duration_info_marker.remove();
        route_distance_duration_info_marker = null;
    }
    //fill up input and animate map
    $('#pac-input2').val(drop_off_data.address);

    if(typeof map === 'object'){
        
        if(marker2){

            marker2.setDisableAutoPan(true);

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
                            'position':{lat:drop_off_data.lat,lng: drop_off_data.lng},
                            'icon' : 'img/drop-off-pin.png',
                            animation: plugin.google.maps.Animation.DROP
                        });

            marker2.on(plugin.google.maps.event.MARKER_CLICK, function(){
                location_type_selected = 1;
                dest_location_type_selected = 2;
                show_adresses();
            })

            marker2.setDisableAutoPan(true);

            marker2._isReady = true;
        }

        
    }

    if(marker1 && marker2){ //process route details when user has entered both pickup and drop-off locations
        setTimeout(process_route_between_locations(),500);
        //process_booking_route(data.directions);        
    }else{
        setTimeout(function(){
            location_type_selected = 0;
            show_adresses();
        },500);        
    }
}


function process_booking_route(directions){

    if(directions != null && directions.status === 'OK'){
        map.setClickable(false);

        intra_city_duration = directions.routes[0].legs[0].duration.value / 60;
        intra_city_distance = directions.routes[0].legs[0].distance.value / 1000; //default value in metric

        intra_city_duration_text = directions.routes[0].legs[0].duration.text;
        intra_city_distance_text = directions.routes[0].legs[0].distance.text;
        

        toggleroutepathanimation(0);

        route_points = [];
        route_points = plugin.google.maps.geometry.encoding.decodePath(directions.routes["0"].overview_polyline.points);

        //plot route
        if(route_polyline != null){
            route_polyline.setVisible(false);
            route_polyline.setPoints(route_points);
            route_polyline.setVisible(true);  

            
            toggleroutepathanimation(1);
            
            map.animateCamera({
            target: route_points,
            duration: 1000,
            }, function() {
                //alert("Camera target has been changed");
                map.setClickable(true);

                if(route_distance_duration_info_marker != null){
                    route_distance_duration_info_marker.remove();
                    route_distance_duration_info_marker = null;
                }

                

                route_distance_duration_info_marker = map.addMarker({
                    'position':route_points[Math.floor(route_points.length/ 2)],
                    'icon' : 'img/1px.png',
                    'disableAutoPan':true,
                    'draggable' : false,
                    'title' : intra_city_duration_text + " ETA",
                    'snippet':  __("Distance") + " " + intra_city_distance_text
                    
                });

                route_distance_duration_info_marker._isReady = true;

                route_distance_duration_info_marker.showInfoWindow();
                route_distance_duration_info_marker.showInfoWindow();
                route_distance_duration_info_marker.showInfoWindow();

                $("#drop-box-container").removeClass("address-box-d-sel");
                $("#pick-box-container").removeClass("address-box-p-sel");  

                $('#pick-box').css('border','2px solid #999');
                $('#drop-box').css('border','2px solid #999');

                shownewbookingdialog();
                

            });
            
        }else{

            route_polyline = map.addPolyline({
                "points": route_points,
                'color' : '#000000',
                'width': 5,
                'geodesic': true,
                'clickable': true
            });
            
            route_polyline.setVisible(true);

            
            toggleroutepathanimation(1);


            route_polyline.on(plugin.google.maps.event.POLYLINE_CLICK, function(latLng) {
                  
                map.animateCamera({
                    target: route_points,
                    duration: 1000,
                    padding: 100
                    }, function() {
                    //alert("Camera target has been changed");
                    map.setClickable(true);

                    

                });
            });

            map.animateCamera({
                target: route_points,
                duration: 1000,
                padding: 100
                }, function() {
                    //alert("Camera target has been changed");
                    map.setClickable(true);

                    if(route_distance_duration_info_marker != null){
                        route_distance_duration_info_marker.remove();
                        route_distance_duration_info_marker = null;
                    }

                    

                    route_distance_duration_info_marker = map.addMarker({
                        'position':route_points[Math.floor(route_points.length/ 2)],
                        'icon' : 'img/1px.png',
                        'disableAutoPan':true,
                        'draggable' : false,
                        'title' : intra_city_duration_text + " ETA",
                        'snippet':  __("Distance") + " " + intra_city_distance_text
                        
                    });

                    route_distance_duration_info_marker._isReady = true;

                    route_distance_duration_info_marker.showInfoWindow();
                    route_distance_duration_info_marker.showInfoWindow();
                    route_distance_duration_info_marker.showInfoWindow();

                    $("#drop-box-container").removeClass("address-box-d-sel");
                    $("#pick-box-container").removeClass("address-box-p-sel");  

                    $('#pick-box').css('border','2px solid #999');
                    $('#drop-box').css('border','2px solid #999');

                    shownewbookingdialog();
                    
                    
            });

        }

        

        $('#bookbutton').css('visibility','visible');                                
        $("#bookbutton").removeClass("heartBeat animated").addClass("heartBeat animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass("heartBeat animated");
        });
    }
}







function process_interstate_booking_route(){
        loading.show();
        $.ajax({ 
            url: ajaxurl, 
            method: 'GET',
            timeout : 10000,
            crossDomain:true,
            xhrFields: {withCredentials: true},
            data: { 'action_get' : 'getdirections','p-lat':pick_up_data.lat,'p-lng':pick_up_data.lng,'d-lat':drop_off_data.lat,'d-lng':drop_off_data.lng},
            dataType: 'json',
            success: function(data){
                            
                loading.hide();

                if(data.hasOwnProperty('direction_details') && data.direction_details.status === 'OK'){

                    map2.setClickable(false);

                    intra_city_duration = data.direction_details.routes[0].legs[0].duration.value / 60;
                    intra_city_distance = data.direction_details.routes[0].legs[0].distance.value / 1000; //default value in metric

                    intra_city_duration_text = data.direction_details.routes[0].legs[0].duration.text;
                    intra_city_distance_text = data.direction_details.routes[0].legs[0].distance.text;

                    route_points_interstate = [];
                    route_points_interstate = plugin.google.maps.geometry.encoding.decodePath(data.direction_details.routes["0"].overview_polyline.points);

                    //plot route
                    if(route_polyline_interstate != null){
                        route_polyline_interstate.setVisible(false);
                        route_polyline_interstate.setPoints(route_points_interstate);
                        route_polyline_interstate.setVisible(true);  

                        
                        map2.animateCamera({
                        target: route_points_interstate,
                        duration: 1000,
                        }, function() {
                            //alert("Camera target has been changed");
                            map2.setClickable(true);
                        });
                        
                    }else{

                        route_polyline_interstate = map2.addPolyline({
                            "points": route_points_interstate,
                            'color' : '#000000',
                            'width': 5,
                            'geodesic': true,
                            'clickable': true
                        });
                        
                        route_polyline_interstate.setVisible(true);
                        route_polyline_interstate.on(plugin.google.maps.event.POLYLINE_CLICK, function(latLng) {
                            
                            map2.animateCamera({
                                target: route_points_interstate,
                                duration: 1000,
                                }, function() {
                                //alert("Camera target has been changed");
                                map2.setClickable(true);
                            });
                        });

                        map2.animateCamera({
                            target: route_points_interstate,
                            duration: 1000,
                            }, function() {
                                //alert("Camera target has been changed");
                                map2.setClickable(true);
                        });

                    }

                    shownewbookingdialog();

                    //$('#bookbutton2').css('visibility','visible');                                
                    /* $("#bookbutton2").removeClass("heartBeat animated").addClass("heartBeat animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                        $(this).removeClass("heartBeat animated");
                    });  */            
                                      
                    
                    
                    return             
                    
                }
        
                
                if(data.hasOwnProperty('error')){
                    ons.notification.confirm({
                        message: data.error,
                        // or messageHTML: '<div>Message in HTML</div>',
                        title: '',
                        buttonLabels: ['Cancel', 'Retry'],
                        animation: 'default', // or 'none'
                        primaryButtonIndex: 0,
                        cancelable: false,
                        callback: function(index) {
                            
                            if(!index){
                            // 0-: Button index from the left
                            return;
                            
                            }else{
                            process_interstate_booking_route();
                            // -1: Cancel
                            }
                            
                        }
                        });
                    return;             
                    
                }
                
                ons.notification.confirm({
                    message: __("Error communicating with server"),
                    // or messageHTML: '<div>Message in HTML</div>',
                    title: '',
                    buttonLabels: ['Cancel', 'Retry'],
                    animation: 'default', // or 'none'
                    primaryButtonIndex: 0,
                    cancelable: false,
                    callback: function(index) {
                        
                        if(!index){
                        // 0-: Button index from the left
                        return;
                        
                        }else{
                        process_interstate_booking_route();
                        // -1: Cancel
                        }
                        
                    }
                    });
                return;
        
            },
            error: function(){
                
                loading.hide();
                ons.notification.confirm({
                    message: __("Error communicating with server"),
                    // or messageHTML: '<div>Message in HTML</div>',
                    title: '',
                    buttonLabels: [__('Cancel'), __('Retry')],
                    animation: 'default', // or 'none'
                    primaryButtonIndex: 0,
                    cancelable: false,
                    callback: function(index) {
                        
                        if(!index){
                        // 0-: Button index from the left
                        return;
                        
                        }else{
                        process_interstate_booking_route();
                        // -1: Cancel
                        }
                        
                    }
                    });
                return;
                
            } 
        
        
        });

    
}



function toggleroutepathanimation(state){
    if(!state){
        clearInterval(routeanimationtimer);
        routepointindex = 0;
        if(route_polyline_animatable){
            route_polyline_animatable.remove();
            route_polyline_animatable = null;
        }
        return;

    }

    var route_coords = [];
    var route_polyline_animation_dir = 0;
    routeanimationtimer = setInterval(function(){
        if(route_points == null){
            return;
        }
        
        if(!route_polyline_animation_dir){        
            if(routepointindex > route_points.length - 1){
                route_polyline_animation_dir = 1;
                routepointindex = 0; 
                return;

            }
            route_coords.push(route_points[routepointindex]);
            routepointindex++;
        }else{
            
            route_coords.splice(0,1);

            if(!route_coords.length){
                route_polyline_animation_dir = 0;
                routepointindex = 0;
                return;
            }
            
        }
        

        //route_coords.push(route_points[routepointindex - 1]);

        //route_coords.push(route_points[0]);
        

        if(route_polyline_animatable == null){
            route_polyline_animatable = map.addPolyline({
                "points": route_coords,
                'color' : '#2196f3',
                'width': 5,
                'geodesic': true,
                'clickable': false
            });
        }
        
        route_polyline_animatable.setPoints(route_coords);
            
        
        //route_polyline_animatable.setVisible(true);

    },30)
}

function process_multidestinations(){
    if(!multi_destinations['pickup']['address']){
        ons.notification.alert(__("Please enter a pickup location"),{title:""});
        return;
    }

    document.querySelector('#myNavigator').popPage({animation: 'fade', callback : function(){
        
    }});

    if(!multi_destinations['dest-1']['address'] && !multi_destinations['dest-2']['address']){        

        if(multi_destinations['dropoff']['address']){            
            multi_destination_mode = 0;        
            $('#location-type-icon-ds1').hide();
            $('#location-type-icon-ds2').hide();
            dest_location_type_selected = 0;
            destination_stop_inp1_shown = 0;
            destination_stop_inp2_shown = 0; 
            
            pick_up_data.address = multi_destinations['pickup']['address'];
            pick_up_data.lat = multi_destinations['pickup']['lat'];
            pick_up_data.lng = multi_destinations['pickup']['lng'];

            drop_off_data.address = multi_destinations['dropoff']['address'];
            drop_off_data.lat = multi_destinations['dropoff']['lat'];
            drop_off_data.lng = multi_destinations['dropoff']['lng'];

            $('#pac-input2').val(drop_off_data.address);

            if(markerds1){
                markerds1.remove(); 
                markerds1 = null;
            }
      
            if(markerds2){
                markerds2.remove(); 
                markerds2 = null;
            }

            setTimeout(process_route_between_locations(),500);

                        
            return;

        }else{
            ons.notification.alert(__("Please enter your destination"),{title:""});
            return;
        }
        

    }else if(!multi_destinations['dropoff']['address'] && multi_destinations['dest-1']['address'] && !multi_destinations['dest-2']['address']){

        pick_up_data.address = multi_destinations['pickup']['address'];
        pick_up_data.lat = multi_destinations['pickup']['lat'];
        pick_up_data.lng = multi_destinations['pickup']['lng'];
        
        drop_off_data.address = multi_destinations['dest-1']['address'];
        drop_off_data.lat = multi_destinations['dest-1']['lat'];
        drop_off_data.lng = multi_destinations['dest-1']['lng'];

        $('#pac-input2').val(drop_off_data.address);

        if(marker2){
            marker2.setDisableAutoPan(true);
            marker2.setPosition({
                lat:drop_off_data.lat,
                lng: drop_off_data.lng
                                                            
            });
    
                    
        }else{
            
            
            marker2 = map.addMarker({
                            'position':{lat:drop_off_data.lat,lng: drop_off_data.lng},
                            'icon' : 'img/drop-off-pin.png',
                            animation: plugin.google.maps.Animation.DROP
                        });
    
            marker2.on(plugin.google.maps.event.MARKER_CLICK, function(){
                location_type_selected = 1;
                dest_location_type_selected = 2;
                show_adresses();
            })
    
            marker2.setDisableAutoPan(true);
    
            marker2._isReady = true;
        }    
    
    
        if(marker1){
            marker1.setDisableAutoPan(true);
            marker1.setPosition({
                lat:pick_up_data.lat,
                lng: pick_up_data.lng
                                                            
            });
    
                    
        }else{
            
            
            marker1 = map.addMarker({
                            'position':{lat:pick_up_data.lat,lng: pick_up_data.lng},
                            'icon' : 'img/pick-up-pin.png',
                            animation: plugin.google.maps.Animation.DROP
                        });
    
            marker1.on(plugin.google.maps.event.MARKER_CLICK, function(){
                location_type_selected = 0;
                show_adresses();
            })
    
            marker1.setDisableAutoPan(true);
    
            marker1._isReady = true;
        }

        multi_destinations['dest-1']['address'] = '';
        multi_destinations['dest-1']['lat'] = '';
        multi_destinations['dest-1']['lng'] = '';

        multi_destination_mode = 0;        
        $('#location-type-icon-ds1').hide();
        $('#location-type-icon-ds2').hide();
        dest_location_type_selected = 0;
        destination_stop_inp1_shown = 0;
        destination_stop_inp2_shown = 0;

        if(markerds1){
            markerds1.remove(); 
            markerds1 = null;
        }
  
        if(markerds2){
            markerds2.remove(); 
            markerds2 = null;
        }

        
        setTimeout(process_route_between_locations(),500);
        return;
        
        
    }else if(!multi_destinations['dropoff']['address'] && !multi_destinations['dest-1']['address'] && multi_destinations['dest-2']['address']){

        pick_up_data.address = multi_destinations['pickup']['address'];
        pick_up_data.lat = multi_destinations['pickup']['lat'];
        pick_up_data.lng = multi_destinations['pickup']['lng'];


        drop_off_data.address = multi_destinations['dest-2']['address'];
        drop_off_data.lat = multi_destinations['dest-2']['lat'];
        drop_off_data.lng = multi_destinations['dest-2']['lng'];

        $('#pac-input2').val(drop_off_data.address);

        if(marker2){
            marker2.setDisableAutoPan(true);
            marker2.setPosition({
                lat:drop_off_data.lat,
                lng: drop_off_data.lng
                                                            
            });
    
                    
        }else{
            
            
            marker2 = map.addMarker({
                            'position':{lat:drop_off_data.lat,lng: drop_off_data.lng},
                            'icon' : 'img/drop-off-pin.png',
                            animation: plugin.google.maps.Animation.DROP
                        });
    
            marker2.on(plugin.google.maps.event.MARKER_CLICK, function(){
                location_type_selected = 1;
                dest_location_type_selected = 2;
                show_adresses();
            })
    
            marker2.setDisableAutoPan(true);
    
            marker2._isReady = true;
        }    
    
    
        if(marker1){
            marker1.setDisableAutoPan(true);
            marker1.setPosition({
                lat:pick_up_data.lat,
                lng: pick_up_data.lng
                                                            
            });
    
                    
        }else{
            
            
            marker1 = map.addMarker({
                            'position':{lat:pick_up_data.lat,lng: pick_up_data.lng},
                            'icon' : 'img/pick-up-pin.png',
                            animation: plugin.google.maps.Animation.DROP
                        });
    
            marker1.on(plugin.google.maps.event.MARKER_CLICK, function(){
                location_type_selected = 0;
                show_adresses();
            })
    
            marker1.setDisableAutoPan(true);
    
            marker1._isReady = true;
        }

        multi_destinations['dest-2']['address'] = '';
        multi_destinations['dest-2']['lat'] = '';
        multi_destinations['dest-2']['lng'] = '';
        multi_destination_mode = 0;        
        $('#location-type-icon-ds1').hide();
        $('#location-type-icon-ds2').hide();
        dest_location_type_selected = 0;
        destination_stop_inp1_shown = 0;
        destination_stop_inp2_shown = 0;

        if(markerds1){
            markerds1.remove(); 
            markerds1 = null;
        }
  
        if(markerds2){
            markerds2.remove(); 
            markerds2 = null;
        }

        

        
        setTimeout(process_route_between_locations(),500);
        return;
    }

    pick_up_data.address = multi_destinations['pickup']['address'];
    pick_up_data.lat = multi_destinations['pickup']['lat'];
    pick_up_data.lng = multi_destinations['pickup']['lng'];

    drop_off_data.address = multi_destinations['dropoff']['address'];
    drop_off_data.lat = multi_destinations['dropoff']['lat'];
    drop_off_data.lng = multi_destinations['dropoff']['lng'];


           
    if(multi_destinations['dest-1']['address']){
        if(markerds1){
            markerds1.setDisableAutoPan(true);
            markerds1.setPosition({
                lat:multi_destinations['dest-1']['lat'],
                lng: multi_destinations['dest-1']['lng']
                                                            
            });
        }else{
            markerds1 = map.addMarker({
                'position':{lat: parseFloat(multi_destinations['dest-1']['lat']),lng: parseFloat(multi_destinations['dest-1']['lng'])},
                'icon' : 'img/waypoint.png',
                animation: plugin.google.maps.Animation.DROP
            });

            markerds1._isReady = true;

            markerds1.on(plugin.google.maps.event.MARKER_CLICK, function(){
                location_type_selected = 1;
                dest_location_type_selected = 0;
                show_adresses();
            })
    
            markerds1.setDisableAutoPan(true);
        }
    }else{
        //remove marker if available
        if(markerds1){
            markerds1.remove(); 
            markerds1 = null;
        }
        
    }


    if(multi_destinations['dest-2']['address']){
        if(markerds2){
            markerds2.setDisableAutoPan(true);
            markerds2.setPosition({
                lat:multi_destinations['dest-2']['lat'],
                lng: multi_destinations['dest-2']['lng']
                                                            
            });
        }else{
            markerds2 = map.addMarker({
                'position':{lat: parseFloat(multi_destinations['dest-2']['lat']),lng: parseFloat(multi_destinations['dest-2']['lng'])},
                'icon' : 'img/waypoint.png',
                animation: plugin.google.maps.Animation.DROP
            });

            markerds2._isReady = true;

            markerds2.on(plugin.google.maps.event.MARKER_CLICK, function(){
                location_type_selected = 1;
                dest_location_type_selected = 1;
                show_adresses();
            })
    
            markerds2.setDisableAutoPan(true);
        }
    }else{
        //remove marker if available
        if(markerds2){
            markerds2.remove(); 
            markerds2 = null;
        }
        
    }

    if(marker2){
        marker2.setDisableAutoPan(true);
        marker2.setPosition({
            lat:drop_off_data.lat,
            lng: drop_off_data.lng
                                                        
        });

                
    }else{
        
        
        marker2 = map.addMarker({
                        'position':{lat:drop_off_data.lat,lng: drop_off_data.lng},
                        'icon' : 'img/drop-off-pin.png',
                        animation: plugin.google.maps.Animation.DROP
                    });

        marker2.on(plugin.google.maps.event.MARKER_CLICK, function(){
            location_type_selected = 1;
            dest_location_type_selected = 2;
            show_adresses();
        })

        marker2.setDisableAutoPan(true);

        marker2._isReady = true;
    }    


    if(marker1){
        marker1.setDisableAutoPan(true);
        marker1.setPosition({
            lat:pick_up_data.lat,
            lng: pick_up_data.lng
                                                        
        });

                
    }else{
        
        
        marker1 = map.addMarker({
                        'position':{lat:pick_up_data.lat,lng: pick_up_data.lng},
                        'icon' : 'img/pick-up-pin.png',
                        animation: plugin.google.maps.Animation.DROP
                    });

        marker1.on(plugin.google.maps.event.MARKER_CLICK, function(){
            location_type_selected = 0;
            show_adresses();
        })

        marker1.setDisableAutoPan(true);

        marker1._isReady = true;
    }

    
    setTimeout(process_route_between_locations(),500);
    


}


function process_route_between_locations(){
    loading.show();
      
    $.ajax({ 
        url: ajaxurl, 
        method: 'GET',
        timeout : 20000,
        crossDomain:true,
        xhrFields: {withCredentials: true},
        data: { 'action_get' : 'getdirections','p-lat':pick_up_data.lat,'p-lng':pick_up_data.lng,'d-lat':drop_off_data.lat,'d-lng':drop_off_data.lng, 'waypoints' : multi_destinations},
        dataType: 'json',
        success: function(data){
                        
            loading.hide();

            if(data.hasOwnProperty('direction_details') && data.direction_details.status === 'OK'){

                map.setClickable(false);

                intra_city_duration = data.direction_details.routes[0].legs[0].duration.value / 60;
                intra_city_distance = data.direction_details.routes[0].legs[0].distance.value / 1000; //default value in metric

                intra_city_duration_text = data.direction_details.routes[0].legs[0].duration.text;
                intra_city_distance_text = data.direction_details.routes[0].legs[0].distance.text;

                toggleroutepathanimation(0);
                

                route_points = [];
                route_points = plugin.google.maps.geometry.encoding.decodePath(data.direction_details.routes["0"].overview_polyline.points);

                //plot route
                if(route_polyline != null){
                    route_polyline.setVisible(false);
                    route_polyline.setPoints(route_points);
                    route_polyline.setVisible(true);  

                    toggleroutepathanimation(1);

                    map.animateCamera({
                    target: route_points,
                    duration: 1000,
                    }, function() {
                        //alert("Camera target has been changed");
                        map.setClickable(true);

                        if(route_distance_duration_info_marker != null){
                            route_distance_duration_info_marker.remove();
                            route_distance_duration_info_marker = null;
                        }
        
                        
        
                        route_distance_duration_info_marker = map.addMarker({
                            'position':route_points[Math.floor(route_points.length/ 2)],
                            'icon' : 'img/1px.png',
                            'disableAutoPan':true,
                            'draggable' : false,
                            'title' : intra_city_duration_text + " ETA",
                            'snippet':  __("Distance") + " " + intra_city_distance_text
                            
                        });

                        route_distance_duration_info_marker._isReady = true;
        
                        route_distance_duration_info_marker.showInfoWindow();
                        route_distance_duration_info_marker.showInfoWindow();
                        route_distance_duration_info_marker.showInfoWindow();

                        $("#drop-box-container").removeClass("address-box-d-sel");
                        $("#pick-box-container").removeClass("address-box-p-sel");  

                        $('#pick-box').css('border','2px solid #999');
                        $('#drop-box').css('border','2px solid #999');

                        shownewbookingdialog();
                    });
                    
                }else{

                    route_polyline = map.addPolyline({
                        "points": route_points,
                        'color' : '#000000',
                        'width': 5,
                        'geodesic': true,
                        'clickable': true
                    });
                    
                    route_polyline.setVisible(true);

                    
                    toggleroutepathanimation(1);
                    route_polyline.on(plugin.google.maps.event.POLYLINE_CLICK, function(latLng) {
                        
                        map.animateCamera({
                            target: route_points,
                            duration: 1000,
                            padding: 100
                            }, function() {
                            //alert("Camera target has been changed");
                            map.setClickable(true);
                        });
                    });

                    map.animateCamera({
                        target: route_points,
                        duration: 1000,
                        padding: 100
                        }, function() {
                            //alert("Camera target has been changed");
                            map.setClickable(true);

                            if(route_distance_duration_info_marker != null){
                                route_distance_duration_info_marker.remove();
                                route_distance_duration_info_marker = null;
                            }
            
                            
            
                            route_distance_duration_info_marker = map.addMarker({
                                'position':route_points[Math.floor(route_points.length/ 2)],
                                'icon' : 'img/1px.png',
                                'disableAutoPan':true,
                                'draggable' : false,
                                'title' : intra_city_duration_text + " ETA",
                                'snippet': __("Distance") + " " + intra_city_distance_text
                                
                            });

                            route_distance_duration_info_marker._isReady = true;
            
                            route_distance_duration_info_marker.showInfoWindow();
                            route_distance_duration_info_marker.showInfoWindow();
                            route_distance_duration_info_marker.showInfoWindow();

                            $("#drop-box-container").removeClass("address-box-d-sel");
                            $("#pick-box-container").removeClass("address-box-p-sel");  

                            $('#pick-box').css('border','2px solid #999');
                            $('#drop-box').css('border','2px solid #999');

                            shownewbookingdialog();

                    });

                    

                }

                //update tariffs data
                if(data.hasOwnProperty('tariff_data')){
                    routetariffs = data.tariff_data;
                    $('#rides-img-preload').html(data.tariff_data.result.preloadrides);                          
                }

               /*  $("#drop-box-container").removeClass("address-box-d-sel");
                $("#pick-box-container").removeClass("address-box-p-sel");  

                $('#pick-box').css('border','');
                $('#drop-box').css('border',''); */

                
                $('#bookbutton').css('visibility','visible');                                
                $("#bookbutton").removeClass("heartBeat animated").addClass("heartBeat animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                    $(this).removeClass("heartBeat animated");
                });             
                                  
                
                
                return             
                
            }
    
            
            if(data.hasOwnProperty('error')){
                ons.notification.confirm({
                    message: data.error,
                    // or messageHTML: '<div>Message in HTML</div>',
                    title: '',
                    buttonLabels: [__('Cancel'), __('Retry')],
                    animation: 'default', // or 'none'
                    primaryButtonIndex: 0,
                    cancelable: false,
                    callback: function(index) {
                        
                        if(!index){
                        // 0-: Button index from the left
                        $("#bookbutton").css("visibility","hidden");
                        return;
                        
                        }else{
                        process_route_between_locations();
                        // -1: Cancel
                        }
                        
                    }
                    });
                return;             
                
            }
            
            ons.notification.confirm({
                message: __("Error communicating with server"),
                // or messageHTML: '<div>Message in HTML</div>',
                title: '',
                buttonLabels: [__('Cancel'), __('Retry')],
                animation: 'default', // or 'none'
                primaryButtonIndex: 0,
                cancelable: false,
                callback: function(index) {
                    
                    if(!index){
                    // 0-: Button index from the left
                    $("#bookbutton").css("visibility","hidden");
                    return;
                    
                    }else{
                    process_route_between_locations();
                    // -1: Cancel
                    }
                    
                }
                });
            return;
    
        },
        error: function(){
            
            loading.hide();
            ons.notification.confirm({
                message: __("Error communicating with server"),
                // or messageHTML: '<div>Message in HTML</div>',
                title: '',
                buttonLabels: [__('Cancel'), __('Retry')],
                animation: 'default', // or 'none'
                primaryButtonIndex: 0,
                cancelable: false,
                callback: function(index) {
                    
                    if(!index){
                    // 0-: Button index from the left
                    $("#bookbutton").css("visibility","hidden");
                    return;
                    
                    }else{
                    process_route_between_locations();
                    // -1: Cancel
                    }
                    
                }
                });
            return;
            
        } 
    
    
    });


}









function shownewbooking(){

      
       
    document.querySelector('#myNavigator').pushPage('html/newbooking.html',
            {
            animation: 'fade'             
            }
    );

   // document.querySelector('#mySplitter').left.close();

}

function shownewbookingstate(){

    
    
    if(typeof marker3 !== 'object' || typeof marker4 !== 'object'){
        ons.notification.alert('Pick-up and drop-off states not found',{title:""});
        return;
    }
    
    
    document.querySelector('#myNavigator').pushPage('html/newbooking.html',
            {
            animation: 'fade'             
            }
    );

   // document.querySelector('#mySplitter').left.close();

}


function infopage_show(){
    
        
    document.querySelector('#myNavigator').pushPage('html/info.html',
            {
            animation: 'fade'             
            }
    );

    document.querySelector('#mySplitter').left.close();

}



function showaboutapp(){
    
        
    document.querySelector('#myNavigator').pushPage('html/aboutapp.html',
            {
            animation: 'fade'             
            }
    );

    document.querySelector('#mySplitter').left.close();

}



function showterms(){
    
        
    document.querySelector('#myNavigator').pushPage('html/termsandprivacy.html',
            {
            animation: 'fade'             
            }
    );

    document.querySelector('#mySplitter').left.close();

}


function showdrivewith(){
    
        
    document.querySelector('#myNavigator').pushPage('html/drivewith.html',
            {
            animation: 'fade'             
            }
    );

    document.querySelector('#mySplitter').left.close();

}



function showhelpguide(){
    
        
    document.querySelector('#myNavigator').pushPage('html/help-cats.html',
            {
            animation: 'fade'             
            }
    );

    document.querySelector('#mySplitter').left.close();

}




function showhelpcattopics(topics_id){

    if(typeof help_topics === 'object' && help_topics.hasOwnProperty(topics_id)){

        var title = $('#cat-title-' + topics_id).html();

        document.querySelector('#myNavigator').pushPage('html/help-topics.html',
                {
                animation: 'fade',
                data:{'topics_list':help_topics[topics_id],'page_title':title}             
                }
        );

        document.querySelector('#mySplitter').left.close();  
        return;
    }

    ons.notification.alert(__("Help topics for this category are currently unavailable"),{title:""});    
        
    

}



function showhelptopic(help_content_id){
    var title = $('#topic-title-' + help_content_id).html();

    document.querySelector('#myNavigator').pushPage('html/help-content.html',
                {
                animation: 'fade',
                data:{'help_content_id':help_content_id,'help_content_title':title}             
                }
        );

        document.querySelector('#mySplitter').left.close();      
        
    

}


function walletpage_show(){   
    document.querySelector('#mySplitter').left.close();  
    if(selected_city_id == 0){
        ons.notification.confirm({
            message: __("Please select your current city"),
            // or messageHTML: '<div>Message in HTML</div>',
            title: "",
            buttonLabels: [__('Select city')],
            animation: 'default', // or 'none'
            primaryButtonIndex: 0,
            cancelable: true,
            callback: function(index) {
             
              if(!index){
                // 0-: Button index from the left
                showroutes();
              }else{
                return;
                // -1: Cancel
              }
             
            }
        });
        return;
    }
    
    document.querySelector('#myNavigator').pushPage('html/wallet.html',
            {
            animation: 'fade'             
            }
           
    );

    document.querySelector('#mySplitter').left.close();
  
}

function completedpage_show(){
    
    document.querySelector('#myNavigator').pushPage('html/completed.html',
            {
            animation: 'fade'             
            }
    );

    document.querySelector('#mySplitter').left.close();

}

function currentpage_show(){
    
    document.querySelector('#myNavigator').pushPage('html/current.html',
            {
            animation: 'fade'             
            }
    );

    document.querySelector('#mySplitter').left.close();

}

//*************************Payment Gateways**************************/


function Vpay() {

    switch(app_settings.default_payment_gateway){

        case "paystack":
        paystackGateway();
        break; 
        
        case "voguepay":
        paystackGateway();
        break;

        case "pesapal":
        pesapalGateway();
        break;

        case "paytr":
        paytrGateway();
        break;

        case "stripe":
        stripeGateway();
        break;

        case "flutterwave":
        flutterwaveGateway();
        break;

        case "payku":
        paykuGateway();
        break;

        case "paymob":
        paymobGateway();
        break;

        case "midtrans":
        midtransGateway();
        break;

        case "custom":
        customGateway();
        break;    

        default:
        ons.notification.alert(__('Payment Gateway not available'),{title:""});
        
    }   
      
    
    
}


function customGateway(){
    //add your custom gateway code here  
    //If you are using AJAX set 'action':'customInit' in the data payload. This will call the server file in /drop-files/lib/pgateways/custom/custom-transaction-init.php. 
    //You can write your payment initialization code in this file.
}


function paytrGateway(){

    if(isNaN(parseInt($('#fundAmount').val())) || parseInt($('#fundAmount').val()) == 0 ){
        ons.notification.alert(__('Please enter a valid amount'),{title:""})  ;
        return;
    }

    var payment_amount = parseInt($('#fundAmount').val() * 100);

    //convert amount to default set currency
    var local_currency_payment_amount = parseInt(payment_amount / selected_city_curency_exchange_rate);

    var metadata = {
                  
        user_id:userprofileinfo.userid,
        amount: payment_amount,
        cur_symbol:selected_city_curency_symbol,
        cur_code:selected_city_curency_code,
        cur_exchng:selected_city_curency_exchange_rate,
        user_type:0,
        memo:__('Recarga en cuenta Kiwi')
    };

    
    var data = {
        email: userprofileinfo.email,
        user_firstname: userprofileinfo.firstname,
        user_lastname: userprofileinfo.lastname,
        user_phone: userprofileinfo.phone,
        amount: local_currency_payment_amount,
        metadata: metadata
      };

      loading.show();   

      var post_data = {'action':'paytrInit',"data":data};

        $.ajax({
            url: ajaxurl,
            type: 'POST',
            timeout : 30000,
            crossDomain:true,
            xhrFields: {withCredentials: true},
            data: post_data,
            success: function (data, status)
            {
                
                loading.hide();    
                try{
                    var data_obj = JSON.parse(data);
                }catch(e){
                    
                    ons.notification.alert(__("Error Initiating transaction with gateway"),{title:""});
                    return;
                }

                
                if(data_obj.hasOwnProperty('error')){
                    ons.notification.alert(__("Error Initiating transaction with gateway"),{title:""});
                    return;
                    
                }


                if(data_obj.hasOwnProperty('success')){
                    
                    ons.notification.alert(__("Transaction initialized successfully. You will be redirected to {---1} website to complete your payment. After your payment is sucessful your wallet will be credited",['PayTR']), {title:"",buttonLabels:[__('Continue')],callback: function(){
                        //navigator.app.exitApp();
                        var inappbrowser = cordova.InAppBrowser.open(data_obj.paytr_data, "_blank", 'toolbarcolor=#0f5bbf,hidenavigationbuttons=yes,hideurlbar=yes,closebuttoncolor=#ffffff,zoom=no,location=yes,hidden=yes,toolbar=yes,hidespinner=yes,hardwareback=no');
                        if (inappbrowser != undefined) {
                            //inappbrowser.insertCSS({ code: "body{height: calc(100vh - 60px);}" });
                            loading.show();
                            inappbrowser.addEventListener('loadstart', function(){
                                
                            });

                            inappbrowser.addEventListener('loadstop', function(){
                                loading.hide();
                                inappbrowser.show();
                            });

                            inappbrowser.addEventListener('exit', function(){
                                getwalletinfo();
                            });

                            inappbrowser.addEventListener('loaderror', function(){
                                loading.hide();
                                ons.notification.alert(__("Error Initiating transaction with gateway"),{title:""});  
                                inappbrowser.close(); 
                                return;             
                            });

                            inappbrowser.addEventListener('message', function(message){
                                var res = message.data;
                                inappbrowser.close();
                                if(res.status == 1){
                                    ons.notification.alert(__("Payment was successful. Thank you"),{title:""});                                    
                                      
                                }else{
                                    ons.notification.alert(__("Payment failed."),{title:""});                                    
                                } 
                                return;                              
                                           
                            });
                        }
                        //window.location =  data_obj.paytr_data;
                        return;
                    }});

                                            
                }


            },
            error: function(jqXHR,textStatus, errorThrown) {  
                loading.hide();
                
                ons.notification.alert(__("Error Initiating transaction with gateway"),{title:""});
                return;
                
            }
            
        });

}




function pesapalGateway(){
    if(isNaN(parseInt($('#fundAmount').val())) || parseInt($('#fundAmount').val()) == 0 ){
        ons.notification.alert(__('Please enter a valid amount'),{title:""})  ;
        return;
    }

    var payment_amount = parseFloat($('#fundAmount').val());

    var local_currency_payment_amount = parseInt(payment_amount / selected_city_curency_exchange_rate);

    var metadata = {
                  
        user_id:userprofileinfo.userid,
        amount: payment_amount,
        cur_symbol:selected_city_curency_symbol,
        cur_code:selected_city_curency_code,
        cur_exchng:selected_city_curency_exchange_rate,
        user_type:0,
        memo: __('Rider App Wallet Funding')
    };

    var metadata_json = JSON.stringify(metadata);
    var data = {
        email: userprofileinfo.email,
        user_firstname: userprofileinfo.firstname,
        user_lastname: userprofileinfo.lastname,
        user_phone: userprofileinfo.phone,
        amount: local_currency_payment_amount,
        currency: default_currency_data.iso_code,
        metadata: metadata_json
      };

      loading.show();   

      var post_data = {'action':'pesapalInit',"data":data};

        $.ajax({
            url: ajaxurl,
            type: 'POST',
            timeout : 30000,
            crossDomain:true,
            xhrFields: {withCredentials: true},
            data: post_data,
            success: function (data, status)
            {
                
                loading.hide();    
                try{
                    var data_obj = JSON.parse(data);
                }catch(e){
                    
                    ons.notification.alert(__("Error Initiating transaction with gateway"),{title:""});
                    return;
                }

                
                if(data_obj.hasOwnProperty('error')){
                    ons.notification.alert(__("Error Initiating transaction with gateway"),{title:""});
                    return;
                    
                }


                if(data_obj.hasOwnProperty('success')){
                    
                    ons.notification.alert(__("Transaction initialized successfully. You will be redirected to {---1} website to complete your payment. After your payment is sucessful your wallet will be credited",['PesaPal']), {title:"",buttonLabels:[__('Continue')],callback: function(){
                        var inappbrowser = cordova.InAppBrowser.open(data_obj.pesapal_data, "_blank", 'toolbarcolor=#0f5bbf,hidenavigationbuttons=yes,hideurlbar=yes,closebuttoncolor=#ffffff,zoom=no,location=yes,hidden=yes,toolbar=yes,hidespinner=yes,hardwareback=no');
                        if (inappbrowser != undefined) {
                            //inappbrowser.insertCSS({ code: "body{height: calc(100vh - 60px);}" });
                            loading.show();
                            inappbrowser.addEventListener('loadstart', function(){
                                
                            });

                            inappbrowser.addEventListener('loadstop', function(){
                                loading.hide();
                                inappbrowser.show();
                            });

                            inappbrowser.addEventListener('exit', function(){
                                getwalletinfo();
                            });

                            inappbrowser.addEventListener('loaderror', function(){
                                loading.hide();
                                ons.notification.alert(__("Error Initiating transaction with gateway"),{title:""});  
                                inappbrowser.close(); 
                                return;             
                            });

                            inappbrowser.addEventListener('message', function(message){
                                var res = message.data;
                                inappbrowser.close();
                                if(res.status == 1){
                                    ons.notification.alert(__("Payment was successful. Thank you"),{title:""});                                    
                                      
                                }else{
                                    ons.notification.alert(__("Payment failed."),{title:""});                                    
                                } 
                                return;                              
                                           
                            });
                        }
                        //window.location =  data_obj.pesapal_data;
                        return;
                    }});

                                            
                }


            },
            error: function(jqXHR,textStatus, errorThrown) {  
                loading.hide();
                
                ons.notification.alert(__("Error Initiating transaction with gateway"),{title:""});
                return;
                
            }
            
        });


}


function flutterwaveGateway(){
    if(isNaN(parseInt($('#fundAmount').val())) || parseInt($('#fundAmount').val()) == 0 ){
        ons.notification.alert(__('Please enter a valid amount'),{title:""})  ;
        return;
    }

    var payment_amount = parseInt($('#fundAmount').val() * 100);
    payment_amount = payment_amount / 100; //convert back to initial value for use with flutterwave 

    //convert amount to local currency supported by paystack
    var local_currency_payment_amount = parseInt(payment_amount / selected_city_curency_exchange_rate * 100);
    local_currency_payment_amount = local_currency_payment_amount / 100;

    

    var data = {
        
        amount: local_currency_payment_amount,
        currency: default_currency_data.iso_code,
        payment_options: "card",
        customer : {
            email: userprofileinfo.email,
            phonenumber : userprofileinfo.phone,
            name: userprofileinfo.firstname + " " + userprofileinfo.lastname
        },
        meta: {           
                  
            user_id:userprofileinfo.userid,
            amount: payment_amount,
            cur_symbol:selected_city_curency_symbol,
            cur_code:selected_city_curency_code,
            cur_exchng:selected_city_curency_exchange_rate,
            user_type:0,
            memo: __('Rider App Wallet Funding')              
           
        }
      };

      loading.show();   

      var post_data = {'action':'flutterwaveInit',"data":data};

        $.ajax({
            url: ajaxurl,
            type: 'POST',
            timeout : 30000,
            crossDomain:true,
            xhrFields: {withCredentials: true},
            data: post_data,
            success: function (data, status)
            {
                
                loading.hide();    
                try{
                    var data_obj = JSON.parse(data);
                }catch(e){
                    
                    ons.notification.alert(__("Error Initiating transaction with gateway"),{title:""});
                    return;
                }

                
                if(data_obj.hasOwnProperty('error')){
                    ons.notification.alert(__("Error Initiating transaction with gateway"),{title:""});
                    return;
                    
                }


                if(data_obj.hasOwnProperty('success')){
                    
                    ons.notification.alert(__("Transaction initialized successfully. You will be redirected to {---1} website to complete your payment. After your payment is sucessful your wallet will be credited",["FlutterWave"]), {title:"",buttonLabels:[__('Continue')],callback: function(){
                        //navigator.app.exitApp();

                        var inappbrowser = cordova.InAppBrowser.open(data_obj.url, "_blank", 'toolbarcolor=#0f5bbf,hidenavigationbuttons=yes,hideurlbar=yes,closebuttoncolor=#ffffff,zoom=no,location=yes,hidden=yes,toolbar=yes,hidespinner=yes,hardwareback=no');
                        if (inappbrowser != undefined) {
                            //inappbrowser.insertCSS({ code: "body{height: calc(100vh - 60px);}" });
                            loading.show();
                            inappbrowser.addEventListener('loadstart', function(){
                                
                            });

                            inappbrowser.addEventListener('loadstop', function(){
                                loading.hide();
                                inappbrowser.show();
                            });

                            inappbrowser.addEventListener('exit', function(){
                                getwalletinfo();
                            });

                            inappbrowser.addEventListener('loaderror', function(){
                                loading.hide();
                                ons.notification.alert(__("Error Initiating transaction with gateway"),{title:""});  
                                inappbrowser.close(); 
                                return;             
                            });

                            inappbrowser.addEventListener('message', function(message){
                                var res = message.data;
                                inappbrowser.close();
                                if(res.status == 1){
                                    ons.notification.alert(__("Payment was successful. Thank you"),{title:""});                                    
                                      
                                }else{
                                    ons.notification.alert(__("Payment failed."),{title:""});                                    
                                } 
                                return;                              
                                           
                            });
                        }
                        //window.location =  data_obj.url;
                        return;
                    }});

                                            
                }


            },
            error: function(jqXHR,textStatus, errorThrown) {  
                loading.hide();
                
                ons.notification.alert(__("Error Initiating transaction with gateway"),{title:""});
                return;
                
            }
            
        });
}



function paystackGateway(){
    if(isNaN(parseInt($('#fundAmount').val())) || parseInt($('#fundAmount').val()) == 0 ){
        ons.notification.alert(__('Please enter a valid amount'),{title:""})  ;
        return;
    }

    var payment_amount = parseInt($('#fundAmount').val() * 100);

    //convert amount to local currency supported by paystack
    var local_currency_payment_amount = parseInt(payment_amount / selected_city_curency_exchange_rate);


    var data = {
        email: userprofileinfo.email,
        amount: local_currency_payment_amount,
        currency: default_currency_data.iso_code,
        metadata: {
           custom_fields: [
              {
                  
                  user_id:userprofileinfo.userid,
                  amount: payment_amount,
                  cur_symbol:selected_city_curency_symbol,
                  cur_code:selected_city_curency_code,
                  cur_exchng:selected_city_curency_exchange_rate,
                  user_type:0,
                  memo: __('Rider App Wallet Funding')
              }
           ]
        }
      };

      loading.show();   

      var post_data = {'action':'paystackInit',"data":data};

        $.ajax({
            url: ajaxurl,
            type: 'POST',
            timeout : 30000,
            crossDomain:true,
            xhrFields: {withCredentials: true},
            data: post_data,
            success: function (data, status)
            {
                
                loading.hide();    
                try{
                    var data_obj = JSON.parse(data);
                }catch(e){
                    
                    ons.notification.alert(__("Error Initiating transaction with gateway"),{title:""});
                    return;
                }

                
                if(data_obj.hasOwnProperty('error')){
                    ons.notification.alert(__("Error Initiating transaction with gateway"),{title:""});
                    return;
                    
                }


                if(data_obj.hasOwnProperty('success')){
                    
                    ons.notification.alert(__("Transaction initialized successfully. You will be redirected to {---1} website to complete your payment. After your payment is sucessful your wallet will be credited",["Paystack"]), {title:"",buttonLabels:[__('Continue')],callback: function(){
                        //navigator.app.exitApp();
                        var inappbrowser = cordova.InAppBrowser.open(data_obj.paystack_data.data.authorization_url, "_blank", 'toolbarcolor=#0f5bbf,hidenavigationbuttons=yes,hideurlbar=yes,closebuttoncolor=#ffffff,zoom=no,location=yes,hidden=yes,toolbar=yes,hidespinner=yes,hardwareback=no');
                        if (inappbrowser != undefined) {
                            //inappbrowser.insertCSS({ code: "body{height: calc(100vh - 60px);}" });
                            loading.show();
                            inappbrowser.addEventListener('loadstart', function(){
                                
                            });

                            inappbrowser.addEventListener('loadstop', function(){
                                loading.hide();
                                inappbrowser.show();
                            });

                            inappbrowser.addEventListener('exit', function(){
                                getwalletinfo();
                            });

                            inappbrowser.addEventListener('loaderror', function(){
                                loading.hide();
                                ons.notification.alert(__("Error Initiating transaction with gateway"),{title:""});  
                                inappbrowser.close(); 
                                return;             
                            });

                            inappbrowser.addEventListener('message', function(message){
                                var res = message.data;
                                inappbrowser.close();
                                if(res.status == 1){
                                    ons.notification.alert(__("Payment was successful. Thank you"),{title:""});                                    
                                      
                                }else{
                                    ons.notification.alert(__("Payment failed."),{title:""});                                    
                                } 
                                return;                              
                                           
                            });
                        }


                        
                        //window.location =  data_obj.paystack_data.data.authorization_url;
                        return;

                    }});

                                            
                }


            },
            error: function(jqXHR,textStatus, errorThrown) {  
                loading.hide();
                
                ons.notification.alert(__("Error Initiating transaction with gateway"),{title:""});
                return;
                
            }
            
        });
}


function stripeGateway(){
    if(isNaN(parseInt($('#fundAmount').val())) || parseInt($('#fundAmount').val()) == 0 ){
        ons.notification.alert(__('Please enter a valid amount'),{title:""})  ;
        return;
    }

    var payment_amount = parseInt($('#fundAmount').val() * 100);

    //convert amount to local currency supported by stripe
    var local_currency_payment_amount = parseInt(payment_amount / selected_city_curency_exchange_rate);


    var data = {
        email: userprofileinfo.email,
        amount: local_currency_payment_amount,
        currency: default_currency_data.iso_code,
        metadata: {           
                  
            user_id:userprofileinfo.userid,
            amount: payment_amount,
            cur_symbol:selected_city_curency_symbol,
            cur_code:selected_city_curency_code,
            cur_exchng:selected_city_curency_exchange_rate,
            user_type:0,
            memo: __('Rider App Wallet Funding')
             
        }
      };

      loading.show();   

      var post_data = {'action':'stripeInit',"data":data};

        $.ajax({
            url: ajaxurl,
            type: 'POST',
            timeout : 30000,
            crossDomain:true,
            xhrFields: {withCredentials: true},
            data: post_data,
            success: function (data, status)
            {
                
                loading.hide();    
                try{
                    var data_obj = JSON.parse(data);
                }catch(e){
                    
                    ons.notification.alert(__("Error Initiating transaction with gateway"),{title:""});
                    return;
                }

                
                if(data_obj.hasOwnProperty('error')){
                    ons.notification.alert(__("Error Initiating transaction with gateway"),{title:""});
                    return;
                    
                }


                if(data_obj.hasOwnProperty('success')){
                    
                    ons.notification.alert(__("Transaction initialized successfully. You will be redirected to {---1} website to complete your payment. After your payment is sucessful your wallet will be credited",["Stripe"]), {title:"",buttonLabels:[__('Continue')],callback: function(){
                        var inappbrowser = cordova.InAppBrowser.open(data_obj.stripe_url, "_blank", 'toolbarcolor=#0f5bbf,hidenavigationbuttons=yes,hideurlbar=yes,closebuttoncolor=#ffffff,zoom=no,location=yes,hidden=yes,toolbar=yes,hidespinner=yes,hardwareback=no');
                        if (inappbrowser != undefined) {
                            //inappbrowser.insertCSS({ code: "body{height: calc(100vh - 60px);}" });
                            loading.show();
                            inappbrowser.addEventListener('loadstart', function(){
                                
                            });

                            inappbrowser.addEventListener('loadstop', function(){
                                loading.hide();
                                inappbrowser.show();
                            });

                            inappbrowser.addEventListener('exit', function(){
                                getwalletinfo();
                            });

                            inappbrowser.addEventListener('loaderror', function(){
                                loading.hide();
                                ons.notification.alert(__("Error Initiating transaction with gateway"),{title:""});  
                                inappbrowser.close(); 
                                return;             
                            });

                            inappbrowser.addEventListener('message', function(message){
                                var res = message.data;
                                inappbrowser.close();
                                if(res.status == 1){
                                    ons.notification.alert(__("Payment was successful. Thank you"),{title:""});                                    
                                      
                                }else{
                                    ons.notification.alert(__("Payment failed."),{title:""});                                    
                                } 
                                return;                              
                                           
                            });
                        }
                        //window.location =  data_obj.stripe_url;
                        return;
                    }});

                                            
                }


            },
            error: function(jqXHR,textStatus, errorThrown) {  
                loading.hide();
                
                ons.notification.alert(__("Error Initiating transaction with gateway"),{title:""});
                return;
                
            }
            
        });
}


function paykuGateway(){
    if(isNaN(parseInt($('#fundAmount').val())) || parseInt($('#fundAmount').val()) == 0 ){
        ons.notification.alert(__('Please enter a valid amount'),{title:""})  ;
        return;
    }

    var payment_amount = parseInt($('#fundAmount').val() * 100);

    //convert amount to local currency supported by payku
    var local_currency_payment_amount = parseInt(payment_amount / selected_city_curency_exchange_rate);


    var data = {
        email: userprofileinfo.email,
        amount: local_currency_payment_amount,
        currency: default_currency_data.iso_code,
        metadata: {           
                  
            user_id:userprofileinfo.userid,
            amount: payment_amount,
            cur_symbol:selected_city_curency_symbol,
            cur_code:selected_city_curency_code,
            cur_exchng:selected_city_curency_exchange_rate,
            user_type:0,
            memo: __('Rider App Wallet Funding')
             
        }
      };

      loading.show();   

      var post_data = {'action':'paykuInit',"data":data};

        $.ajax({
            url: ajaxurl,
            type: 'POST',
            timeout : 30000,
            crossDomain:true,
            xhrFields: {withCredentials: true},
            data: post_data,
            success: function (data, status)
            {
                
                loading.hide();    
                try{
                    var data_obj = JSON.parse(data);
                }catch(e){
                    
                    ons.notification.alert(__("Error Initiating transaction with gateway"),{title:""});
                    return;
                }

                
                if(data_obj.hasOwnProperty('error')){
                    ons.notification.alert(__("Error Initiating transaction with gateway"),{title:""});
                    return;
                    
                }


                if(data_obj.hasOwnProperty('success')){
                    
                    ons.notification.alert(__("Transaction initialized successfully. You will be redirected to {---1} website to complete your payment. After your payment is sucessful your wallet will be credited",["Payku"]), {title:"",buttonLabels:[__('Continue')],callback: function(){
                        //navigator.app.exitApp();

                        var inappbrowser = cordova.InAppBrowser.open(data_obj.url, "_blank", 'toolbarcolor=#0f5bbf,hidenavigationbuttons=yes,hideurlbar=yes,closebuttoncolor=#ffffff,zoom=no,location=yes,hidden=yes,toolbar=yes,hidespinner=yes,hardwareback=no');
                        if (inappbrowser != undefined) {
                            //inappbrowser.insertCSS({ code: "body{height: calc(100vh - 60px);}" });
                            loading.show();
                            inappbrowser.addEventListener('loadstart', function(){
                                
                            });

                            inappbrowser.addEventListener('loadstop', function(){
                                loading.hide();
                                inappbrowser.show();
                            });

                            inappbrowser.addEventListener('exit', function(){
                                getwalletinfo();
                            });

                            inappbrowser.addEventListener('loaderror', function(){
                                loading.hide();
                                ons.notification.alert(__("Error Initiating transaction with gateway"),{title:""});  
                                inappbrowser.close(); 
                                return;             
                            });

                            inappbrowser.addEventListener('message', function(message){
                                var res = message.data;
                                inappbrowser.close();
                                if(res.status == 1){
                                    ons.notification.alert(__("Payment was successful. Thank you"),{title:""});                                    
                                      
                                }else{
                                    ons.notification.alert(__("Payment failed."),{title:""});                                    
                                } 
                                return;                              
                                           
                            });
                        }
                        //window.location =  data_obj.url;
                        return;
                    }});

                                            
                }


            },
            error: function(jqXHR,textStatus, errorThrown) {  
                loading.hide();
                
                ons.notification.alert(__("Error Initiating transaction with gateway"),{title:""});
                return;
                
            }
            
        });
}



function midtransGateway(){
    if(isNaN(parseInt($('#fundAmount').val())) || parseInt($('#fundAmount').val()) == 0 ){
        ons.notification.alert(__('Please enter a valid amount'),{title:""})  ;
        return;
    }

    var payment_amount = parseInt($('#fundAmount').val() * 100);

    //convert amount to local currency supported by midtrans
    var local_currency_payment_amount = parseInt(payment_amount / selected_city_curency_exchange_rate);


    var data = {
        email: userprofileinfo.email,
        amount: local_currency_payment_amount,
        currency: default_currency_data.iso_code,
        metadata: {           
                  
            user_id:userprofileinfo.userid,
            amount: payment_amount,
            cur_symbol:selected_city_curency_symbol,
            cur_code:selected_city_curency_code,
            cur_exchng:selected_city_curency_exchange_rate,
            user_type:0,
            memo: __('Rider App Wallet Funding')
             
        }
      };

      loading.show();   

      var post_data = {'action':'midtransInit',"data":data};

        $.ajax({
            url: ajaxurl,
            type: 'POST',
            timeout : 30000,
            crossDomain:true,
            xhrFields: {withCredentials: true},
            data: post_data,
            success: function (data, status)
            {
                
                loading.hide();    
                try{
                    var data_obj = JSON.parse(data);
                }catch(e){
                    
                    ons.notification.alert(__("Error Initiating transaction with gateway"),{title:""});
                    return;
                }

                
                if(data_obj.hasOwnProperty('error')){
                    ons.notification.alert(__("Error Initiating transaction with gateway"),{title:""});
                    return;
                    
                }


                if(data_obj.hasOwnProperty('success')){
                    
                    ons.notification.alert(__("Transaction initialized successfully. You will be redirected to {---1} website to complete your payment. After your payment is sucessful your wallet will be credited",["Midtrans"]), {title:"",buttonLabels:[__('Continue')],callback: function(){
                        //navigator.app.exitApp();

                        var inappbrowser = cordova.InAppBrowser.open(data_obj.url, "_blank", 'toolbarcolor=#0f5bbf,hidenavigationbuttons=yes,hideurlbar=yes,closebuttoncolor=#ffffff,zoom=no,location=yes,hidden=yes,toolbar=yes,hidespinner=yes,hardwareback=no');
                        if (inappbrowser != undefined) {
                            //inappbrowser.insertCSS({ code: "body{height: calc(100vh - 60px);}" });
                            loading.show();
                            inappbrowser.addEventListener('loadstart', function(){
                                
                            });

                            inappbrowser.addEventListener('loadstop', function(){
                                loading.hide();
                                inappbrowser.show();
                            });

                            inappbrowser.addEventListener('exit', function(){
                                getwalletinfo();
                            });

                            inappbrowser.addEventListener('loaderror', function(){
                                loading.hide();
                                ons.notification.alert(__("Error Initiating transaction with gateway"),{title:""});  
                                inappbrowser.close(); 
                                return;             
                            });

                            inappbrowser.addEventListener('message', function(message){
                                var res = message.data;
                                inappbrowser.close();
                                if(res.status == 1){
                                    ons.notification.alert(__("Payment was successful. Thank you"),{title:""});                                    
                                      
                                }else{
                                    ons.notification.alert(__("Payment failed."),{title:""});                                    
                                } 
                                return;                              
                                           
                            });
                        }

                        //window.location =  data_obj.url;
                        return;
                    }});

                                            
                }


            },
            error: function(jqXHR,textStatus, errorThrown) {  
                loading.hide();
                
                ons.notification.alert(__("Error Initiating transaction with gateway"),{title:""});
                return;
                
            }
            
        });
}



function paymobGateway(){
    if(isNaN(parseInt($('#fundAmount').val())) || parseInt($('#fundAmount').val()) == 0 ){
        ons.notification.alert(__('Please enter a valid amount'),{title:""})  ;
        return;
    }

    var payment_amount = parseInt($('#fundAmount').val() * 100);

    //convert amount to local currency supported by paymob
    var local_currency_payment_amount = parseInt(payment_amount / selected_city_curency_exchange_rate);


    var data = {
        email: userprofileinfo.email,
        amount: local_currency_payment_amount,
        firstname: userprofileinfo.firstname,
        lastname: userprofileinfo.lastname,
        phone: userprofileinfo.country_dial_code + userprofileinfo.phone,
        currency: default_currency_data.iso_code,
        payment_mode: $('#kiosk-mode').prop('checked') == true ? 'kiosk' : 'card',
        metadata: {           
                  
            user_id:userprofileinfo.userid,
            amount: payment_amount,
            cur_symbol:selected_city_curency_symbol,
            cur_code:selected_city_curency_code,
            cur_exchng:selected_city_curency_exchange_rate,
            user_type:0,
            memo: __('Rider App Wallet Funding')
             
        }
      };

      loading.show();   

      var post_data = {'action':'paymobInit',"data":data};

        $.ajax({
            url: ajaxurl,
            type: 'POST',
            timeout : 30000,
            crossDomain:true,
            xhrFields: {withCredentials: true},
            data: post_data,
            success: function (data, status)
            {
                
                loading.hide();    
                try{
                    var data_obj = JSON.parse(data);
                }catch(e){
                    
                    ons.notification.alert(__("Error Initiating transaction with gateway"),{title:""});
                    return;
                }

                
                if(data_obj.hasOwnProperty('error')){
                    ons.notification.alert(__("Error Initiating transaction with gateway"),{title:""});
                    return;
                    
                }


                if(data_obj.hasOwnProperty('success')){

                    if(data_obj.hasOwnProperty('bill_ref')){
                        ons.notification.alert(__("Kiosk payment initialized successfully. Here is your bill reference number: {---1}",[data_obj.bill_ref]),{title:""});
                        return;
                    }
                    
                    ons.notification.alert(__("Transaction initialized successfully. You will be redirected to {---1} website to complete your payment. After your payment is sucessful your wallet will be credited",["Paymob"]), {title:"",buttonLabels:[__('Continue')],callback: function(){
                        //navigator.app.exitApp();

                        var inappbrowser = cordova.InAppBrowser.open(data_obj.url, "_blank", 'toolbarcolor=#0f5bbf,hidenavigationbuttons=yes,hideurlbar=yes,closebuttoncolor=#ffffff,zoom=no,location=yes,hidden=yes,toolbar=yes,hidespinner=yes,hardwareback=no');
                        if (inappbrowser != undefined) {
                            //inappbrowser.insertCSS({ code: "body{height: calc(100vh - 60px);}" });
                            loading.show();
                            inappbrowser.addEventListener('loadstart', function(){
                                
                            });

                            inappbrowser.addEventListener('loadstop', function(){
                                loading.hide();
                                inappbrowser.show();
                            });

                            inappbrowser.addEventListener('exit', function(){
                                getwalletinfo();
                            });

                            inappbrowser.addEventListener('loaderror', function(){
                                loading.hide();
                                ons.notification.alert(__("Error Initiating transaction with gateway"),{title:""});  
                                inappbrowser.close(); 
                                return;             
                            });

                            inappbrowser.addEventListener('message', function(message){
                                var res = message.data;
                                inappbrowser.close();
                                if(res.status == 1){
                                    ons.notification.alert(__("Payment was successful. Thank you"),{title:""});                                    
                                      
                                }else{
                                    ons.notification.alert(__("Payment failed."),{title:""});                                    
                                } 
                                return;                              
                                           
                            });
                        }
                        //window.location =  data_obj.url;
                        return;
                    }});

                                            
                }


            },
            error: function(jqXHR,textStatus, errorThrown) {  
                loading.hide();
                
                ons.notification.alert(__("Error Initiating transaction with gateway"),{title:""});
                return;
                
            }
            
        });
}



function voguepayGateway(){
    if(isNaN(parseInt($('#fundAmount').val())) || parseInt($('#fundAmount').val()) == 0 ){
        ons.notification.alert(__('Please enter a valid amount'),{title:""})  ;
        return;
    }
    
    Voguepay.init({
        v_merchant_id: online_payment_info.merchantid,
        total: $('#fundAmount').val(),
        notify_url: online_payment_info.notifyurl,
        cur: selected_city_curency_code,
        merchant_ref: selected_city_curency_symbol + '-' + selected_city_curency_code + '-' + selected_city_curency_exchange_rate + '-0-' + userprofileinfo.userid, //set account type identifier 0- 'user', 1- 'driver'
        memo: 'Taxi App Wallet Funding',
        // recurrent: true,
        // frequency: 10,
        email: userprofileinfo.email,
        phone: userprofileinfo.phone,
        developer_code: online_payment_info.devid,
        store_id: online_payment_info.storeid,
        loadText:'Loading Card payment',
        items: [
            {
                name: "My Wallet",
                description: "Wallet funding",
                price: $('#fundAmount').val()
            }
        ],
        closed:Vpayclosed,
        success:Vpaysuccess,
        failed:Vpayfailed
    });

}

Vpayclosed=function() {
    //alert('window closed');
}

Vpaysuccess=function(transaction_id) {
    $('#fundAmount').val('');
    getwalletinfo();
    /* document.querySelector('#myNavigator').popPage(
        {
        animation: 'fade'             
        }
    ); */
    ons.notification.alert('Wallet funded successfully' ,{title:""});
}


Vpayfailed=function(transaction_id) {
    //getwalletinfo();
    /* document.querySelector('#myNavigator').popPage(
        {
        animation: 'fade'             
        }
    ); */
     ons.notification.alert('Transaction was not successful',{title:""});
}


// Get geo coordinates

function getMapLocation() {
   /*  ons.notification.toast('Getting your location...', {
        timeout: 2000
      }); */
    navigator.geolocation.getCurrentPosition
    (onMapSuccess, onMapError, { timeout: 30000,enableHighAccuracy: true });
}

// Success callback for get geo coordinates

var onMapSuccess = function (position) {

    Latitude = position.coords.latitude;
    Longitude = position.coords.longitude;

    getMap(Latitude, Longitude);

}

// Get map by using coordinates

function getMap(latitude, longitude) {    
    


    var latLong = new google.maps.LatLng(latitude, longitude);

    if (marker1) {
        // Marker1 already created - Move it
        marker1.setPosition(latLong);
      }
      else {
        // Marker1 does not exist - Create it
            marker1 = new google.maps.Marker({
            position: latLong,
            map: map,
            
        });
        
      }

    

    marker1.setMap(map);
    map.setZoom(16);
    map.setCenter(marker1.getPosition());

    
}


function calculateAndDisplayRoutestate(pointA, pointB) {
    directionsService2.route({
    origin: pointA,
    destination: pointB,
    avoidTolls: false,
    avoidHighways: false,
    unitSystem: google.maps.UnitSystem.METRIC,
    travelMode: google.maps.TravelMode.DRIVING
    }, function (response, status) {
    console.log(response);
    intra_city_duration = response.routes[0].legs[0].duration.value / 60;
    intra_city_distance = response.routes[0].legs[0].distance.value / 1000;

    intra_city_duration_text = response.routes[0].legs[0].duration.text;
    intra_city_distance_text = response.routes[0].legs[0].distance.text;

    if (status == google.maps.DirectionsStatus.OK) {

        if(directionsDisplay2 != null) {
            directionsDisplay2.setMap(null);
            directionsDisplay2 = null;
        }

        directionsDisplay2 = new google.maps.DirectionsRenderer({
            map: map2
        });
        directionsDisplay2.setDirections(response);
        jQuery("#bookbutton2").removeAttr("disabled");
        
    } else {
        ons.notification.alert(__("Unable to plot route. Please try again"),{title:""});
        return;
        //window.alert('Directions request failed due to ' + status);
    }
});
}



function calculateAndDisplayRoute(directionsService, pointA, pointB) {
        directionsService.route({
        origin: pointA,
        destination: pointB,
        avoidTolls: false,
        avoidHighways: false,
        unitSystem: google.maps.UnitSystem.METRIC,
        travelMode: google.maps.TravelMode.DRIVING
    }, function (response, status) {
        console.log(response);
        intra_city_duration = response.routes[0].legs[0].duration.value / 60;
        intra_city_distance = response.routes[0].legs[0].distance.value / 1000;

        intra_city_duration_text = response.routes[0].legs[0].duration.text;
        intra_city_distance_text = response.routes[0].legs[0].distance.text;

        if (status == google.maps.DirectionsStatus.OK) {

            if(directionsDisplay != null) {
                directionsDisplay.setMap(null);
                directionsDisplay = null;
            }

            directionsDisplay = new google.maps.DirectionsRenderer({
                map: map
            });
            directionsDisplay.setDirections(response);
            jQuery("#bookbutton").removeAttr("disabled");
            
        } else {
            ons.notification.alert(__("Unable to plot route. Please edit locations"),{title:""});
            return;
            //window.alert('Directions request failed due to ' + status);
        }
    });
}

// Success callback for watching your changing position

var onMapWatchSuccess = function (position) {

    var updatedLatitude = position.coords.latitude;
    var updatedLongitude = position.coords.longitude;

    if (updatedLatitude != Latitude && updatedLongitude != Longitude) {

        Latitude = updatedLatitude;
        Longitude = updatedLongitude;

        getMap(updatedLatitude, updatedLongitude);
    }
}

// Error callback

function onMapError(error) {
    ons.notification.toast('Error retrieving your location. Ensure GPS is turned on and you are outside.', {
        timeout: 2000
      });
    
    
    /* alert('error occured! Ensure GPS is enabled.\n' + 'code: ' + error.code + '\n' +
        'message: ' + error.message + '\n');
    setTimeout(watchMapPosition(),3000);    */ 
}

function onMapGetError(error) {
    ons.notification.alert("Error retrieving your location. Please retry.",{title:""});
    
    /* alert('error occured! Ensure GPS is enabled.\n' + 'code: ' + error.code + '\n' +
        'message: ' + error.message + '\n'); */
    //setTimeout(GetMapPosition(),3000);    
}

// Watch your changing position

function watchMapPosition() {

    return navigator.geolocation.watchPosition(onMapWatchSuccess, onMapError, { timeout:30000,enableHighAccuracy: true });
}





  function initAutocomplete() {                            
        var input = document.getElementById('pac-input');
        var options = {
            componentRestrictions: {country: 'ng'},
            strictBounds: true
        };

        pczautocomplete = new google.maps.places.Autocomplete(input, options);
        
        google.maps.event.addListener(pczautocomplete, 'place_changed', function() {
            var place = pczautocomplete.getPlace();
            
            
            pick_up_data['address'] = $('#pac-input').val();
            pick_up_data['lng'] = place.geometry.location.lng();
            pick_up_data['lat'] = place.geometry.location.lat();            
            
            console.log(place);

            console.log(pick_up_data);

            if(marker1){
                marker1.setMap(null);
                marker1 = [];
            }
            
            latLong1 = new google.maps.LatLng(place.geometry.location.lat(), place.geometry.location.lng());
            marker1 = new google.maps.Marker({
            position: latLong1,
            map: map,
            animation: google.maps.Animation.DROP
            });
            marker1.setMap(map);
            map.setZoom(16);
            //map.setCenter(marker.getPosition());
            map.panTo(marker1.getPosition());

            if(marker1 && marker2){
                setTimeout(function(){
                    bounds.extend(latLong1);
                    bounds.extend(latLong2);                
                    var pointA = latLong1;
                    var pointB = latLong2;                
                    map.fitBounds(bounds);
                    
                    bounds = [];
                    bounds = new google.maps.LatLngBounds();  
                    calculateAndDisplayRoute(directionsService, pointA, pointB);
                    marker1.setMap(null);
                    marker2.setMap(null);
                       
                }, 2000);
                          
            }
            


        });
    }





  function initAutocomplete2() {
                            
    var input = document.getElementById('pac-input2');
    var options = {
        componentRestrictions: {country: 'ng'},
        strictBounds: true
    };

    dczautocomplete = new google.maps.places.Autocomplete(input, options);
    
    google.maps.event.addListener(dczautocomplete, 'place_changed', function() {
        var place = dczautocomplete.getPlace();
        
        drop_off_data['address'] = $('#pac-input2').val();
        drop_off_data['lng'] = place.geometry.location.lng();
        drop_off_data['lat'] = place.geometry.location.lat();
        
        
        
        
        if(marker2){
            marker2.setMap(null);
            marker2 = [];
        }
        
        latLong2 = new google.maps.LatLng(place.geometry.location.lat(), place.geometry.location.lng());
        marker2 = new google.maps.Marker({
        position: latLong2,
        map: map,
        animation: google.maps.Animation.DROP
        });
        marker2.setMap(map);
        map.setZoom(16);
        //map.setCenter(marker.getPosition());
        map.panTo(marker2.getPosition());

        if(marker2 && marker2){
            setTimeout(function(){
                bounds.extend(latLong1);
                bounds.extend(latLong2);                
                var pointA = latLong1;
                var pointB = latLong2;                
                map.fitBounds(bounds);
                
                bounds = [];
                bounds = new google.maps.LatLngBounds();  
                calculateAndDisplayRoute(directionsService, pointA, pointB);
                marker1.setMap(null);
                marker2.setMap(null);
                   
            }, 2000);
                      
        }
        


    });

  }


function loadLang(){

    let lang = localStorage.getObject('lang');
        
    if(lang){
        selected_lang = lang;
    }

    let el = document.createElement('script');
    el.src = `js/lang/${selected_lang.code}.js`;
    document.head.appendChild(el);

}


function translateElements(suffix = ""){

    //Translate page html elements inner text
    let elements_to_traslate = document.querySelectorAll(`[data-i18n${suffix}]`);
    elements_to_traslate.forEach(function(el,indx){
        let word_phrase = el.dataset['i18n' + suffix];        
        if(lang_phrases.hasOwnProperty(word_phrase)){
            let trans_phrase = lang_phrases[word_phrase];
            el.innerText = trans_phrase;
            if(selected_lang.dir == 'rtl'){    
                el.setAttribute('dir','rtl');
            }else{
                el.setAttribute('dir','ltr');
            }
        }
    })

    //Translate page html elements placeholder text
    let elements_to_traslate_p = document.querySelectorAll(`[data-i18nn${suffix}]`);
    elements_to_traslate_p.forEach(function(el_p,indx){
        let word_phrase_p = el_p.dataset['i18nn' + suffix];        
        if(lang_phrases.hasOwnProperty(word_phrase_p)){
            let trans_phrase_p = lang_phrases[word_phrase_p];
            el_p.setAttribute('placeholder',trans_phrase_p);
            if(selected_lang.dir == 'rtl'){    
                el_p.setAttribute('dir','rtl');
            }else{
                el_p.setAttribute('dir','ltr');
            }
        }
    })

    //Translate page Tab elements label text
    let elements_to_traslate_t = document.querySelectorAll(`[data-i18nt${suffix}]`);
    elements_to_traslate_t.forEach(function(el_t,indx){
        let word_phrase_t = el_t.dataset['i18nt' + suffix];        
        if(lang_phrases.hasOwnProperty(word_phrase_t)){
            let trans_phrase_t = lang_phrases[word_phrase_t];
            el_t.setAttribute('label',trans_phrase_t);
            if(selected_lang.dir == 'rtl'){    
                el_t.setAttribute('dir','rtl');
            }else{
                el_t.setAttribute('dir','ltr');
            }
        }
    })
}


function __(phrase,variables = []){

    if(lang_phrases.hasOwnProperty(phrase)){
        let translation = lang_phrases[phrase];
        if(translation.length){
            let regx = /\{\-\-\-[0-9]\}/g;
            let matches = translation.match(regx);
            if(variables.length && matches && matches.length == variables.length){               
                
                matches.forEach(function(val,indx){
                    var_indx = val.substr(4,1);
                    translation = translation.replace(val,variables[var_indx - 1]);
                })
                
            }
            return translation;
        }else{
            return phrase;
        }
    }else{
        return phrase;
    }
    
}


function loadCountryTel(){
    ons.createElement('html/country-tel.html', { append: true });    
}


function showCountryTel(){

    $('#tel-list-dialog').show();

    $('.iti__country').off('click').on('click', function(){
        var country_code = $(this).data('country-code');
        var dial_code = $(this).data('dial-code');
        if(country_code){
            $('#country-flag').attr('class', 'iti__flag iti__' + country_code);
            $('#country-flag').data('country', country_code)
            $('#tel-code').html(' +' + dial_code);
            $('#tel-code').data('dialcode', dial_code);
            
        }

        $('#tel-list-dialog').hide();
            
    });
    
}



function showProfileCountryTel(){

    $('#tel-list-dialog').show();

    $('.iti__country').off('click').on('click', function(){
        var country_code = $(this).data('country-code');
        var dial_code = $(this).data('dial-code');
        if(country_code){
            $('#country-flag-profile').attr('class', 'iti__flag iti__' + country_code);
            $('#country-flag-profile').data('country', country_code)
            $('#tel-code-profile').html(' +' + dial_code);
            $('#tel-code-profile').data('dialcode', dial_code);
            
        }

        $('#tel-list-dialog').hide();
        
        
            
    });
    
}



function showCountryTelReg(){

    $('#tel-list-dialog').show();

    $('.iti__country').off('click').on('click', function(){
        var country_code = $(this).data('country-code');
        var dial_code = $(this).data('dial-code');
        if(country_code){
            $('#country-flag-reg').attr('class', 'iti__flag iti__' + country_code);
            $('#country-flag-reg').data('country', country_code)
            $('#tel-code-reg').html(' +' + dial_code);
            $('#tel-code-reg').data('dialcode', dial_code);
            
        }

        $('#tel-list-dialog').hide();
            
    });
    
}




function init_fb_rtdb(config,user_id){

    if(!firebase.apps.length){
        firebase.initializeApp(config);
    }

    const db = firebase.database();

    const message_ref = db.ref(`Riders/ridr-${user_id}/notf`);
    message_ref.on('value', (snapshot) => {

        
        const data = snapshot.val();
        if(data == null)return;
        if(!(data.hasOwnProperty('msg') && data.hasOwnProperty('msg_t')))return;

        let last_msg_time_id = localStorage.getItem('fb_last_recvd');        


        if(last_msg_time_id != null && data.msg_t == last_msg_time_id)return;

        localStorage.setItem('fb_last_recvd',data.msg_t); 

        let current_local_timestamp = Date.now();
        current_local_timestamp += server_client_time_diff; //sync with server time
        current_local_timestamp = current_local_timestamp / 1000 | 0; //get only the seconds part

        if((current_local_timestamp - 5) > data.msg_t)return; //skip old messages
        
        
        //console.log(data);
        //console.log(Date.now() / 1000 | 0);

        showhidedriversearch(0);
        clearTimeout(driver_search_display_timer);
        var message = data.msg;
        //console.log(message)
        if(message.hasOwnProperty('booking_id') && message.hasOwnProperty('action')){
            if(message.action != "chat-message"){    
                if(processed_notifications.hasOwnProperty(message.booking_id)){
                    var found = processed_notifications[message.booking_id].find(function(el){
                        
                        return el == message.action; 
                        
                    });
                    if(found){
                        //console.log('processed');
                        return;
                    }else{
                        processed_notifications[message.booking_id].push(message.action);
                        //console.log('added');
                    }
                }else{
                    processed_notifications[message.booking_id] = [message.action];
                    //console.log('new');                    
                }
            }

            switch(message.action){
                case "driver-assigned":
                driver_assigned_notify(message);
                break;
                case "driver-arrived":
                driver_arrived_notify(message);
                break;
                case "customer-onride":
                customer_onride_notify(message);
                break;
                case "driver-complete":
                driver_complete_notify(message);
                break;
                case "driver-cancelled":
                driver_cancelled_notify(message);
                break;
                case "chat-message":
                driver_chat_msg_notify(message);
                break;
                case "app-message":
                app_message(message);
                break;
            }
        }



    });

}


async function sync_with_servertime(){

    let time_diffs = [];
        
    for(var x = 0;x < 3;x++){
        try{
         let server_time = await getservertime(); 

         let time_diff = Date.now() - server_time;
         time_diffs.push(time_diff);         
        
        }catch(e){
            continue;
        }    
    }

    if(time_diffs.length){
        let sum = 0;
        time_diffs.forEach(function(val,indx){
            sum += val;
        })
        server_client_time_diff = Math.floor(sum / time_diffs.length); //in milliecs
    }

    
}



async function getservertime(){

    let res = new Promise(function(resolve,reject){
        let sync_time_before = Date.now();
        var post_data = {'action_get':'syncservertime'};       
        jQuery.ajax({
        url: ajaxurl,
        method: 'GET',
        timeout : 10000,
        crossDomain:true,
        xhrFields: {withCredentials: true},
        data: post_data,
        success: function (data, status)
            {
                
                        
                try{
                    var data_obj = JSON.parse(data);
                }catch(e){
                    reject('error');
                    return;
                }


                

                
                if(data_obj.hasOwnProperty('server_time')){
                    let sync_time_arrived = Date.now();
                    let server_time = parseInt(data_obj.server_time);
                    let req_elapsed = server_time - sync_time_before;
                    let res_elapsed = sync_time_arrived - server_time;
                    let server_actual_time = sync_time_arrived + res_elapsed;
                    resolve(server_actual_time);
                    return;                   
                }


                
                
                
            },
            error: function() {
                reject('error');
                return;
                
            }

        });
    })

    return res;

}


function init_pubnub(sk,uid = '0'){
    if(!sk){
        return;
    }
    pubnub = new PubNub({
       subscribeKey: sk,
       autoNetworkDetection : true
    });

    pubnub.addListener({
        message: function(data) {
            //$('#driver-search').hide();
            showhidedriversearch(0);
            clearTimeout(driver_search_display_timer);
            var message = data.message;
            //console.log(message)
            if(message.hasOwnProperty('booking_id') && message.hasOwnProperty('action')){
                if(processed_notifications.hasOwnProperty(message.booking_id)){
                    var found = processed_notifications[message.booking_id].find(function(el){
                        
                        return el == message.action;
                        
                    });
                    if(found){
                        //console.log('processed');
                        return;
                    }else{
                        processed_notifications[message.booking_id].push(message.action);
                        //console.log('added');
                    }
                }else{
                    processed_notifications[message.booking_id] = [message.action];
                    //console.log('new');                    
                }

                switch(message.action){
                    case "driver-assigned":
                    driver_assigned_notify(message);
                    break;
                    case "driver-arrived":
                    driver_arrived_notify(message);
                    break;
                    case "customer-onride":
                    customer_onride_notify(message);
                    break;
                    case "driver-complete":
                    driver_complete_notify(message);
                    break;
                    case "driver-cancelled":
                    driver_cancelled_notify(message);
                    break;
                    case "app-message":
                    app_message(message);
                    break;
                }
            }
        },
        status : function(stat){
            console.log(stat);
            if(stat.category == "PNNetworkUpCategory" && pubnub_reconnection_count < 10){
                pubnub_reconnection_count++;
                //init_pubnub(sk,uid); //reconnect on network failure
                pubnub.subscribe({
                    // connect to a channel 
                    channels : ['ridr-' + uid]
                    
                });
            }
        }
    });
    

    pubnub.subscribe({
        // connect to a channel 
        channels : ['ridr-' + uid]
        
    });

        
}



  function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';

    
}

function shownewbookingdialog(){

        if(typeof routetariffs !== 'object'){
         return;     
        }

        //prepare UI
        if(selected_state_id == 0){ //only for intra city
            $("#menubtn").removeClass("slideOutLeft animated").addClass("slideOutLeft animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                $("#menubtn").removeClass("slideOutLeft animated");
                $("#menubtn").css("visibility","hidden");
                $("#menubtn").css("z-index","10");
                $("#driver-notify-ui-back-btn").css("z-index", "10");
        
                $("#trip-summary-back-btn").css("visibility","visible");
                $("#trip-summary-back-btn").css("z-index","100");
                $("#trip-summary-back-btn").removeClass("slideInRight animated").addClass("slideInRight animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                    $("#trip-summary-back-btn").removeClass("slideInRight animated");
                            
                })
        
            })

        }

        $("#new-bookng-details").css("left","0px");
        $("#new-bookng-details").css("visibility","visible");
        $("#new-bookng-details").removeClass("bounceInUp animated").addClass("bounceInUp animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $('#new-bookng-details').removeClass("bounceInUp animated");
        })              
    
        $('#bookride').html(__('Request Ride'));


        trip_summary_dialog_show = 1;
    
        

        
        var selected_route_id = '';
        

        $('#rides-carousel').empty();
        var rides_carousel_clone = $('#rides-carousel').clone();
        $('#cars-container').empty();
        rides_carousel_clone.appendTo('#cars-container');
        
        if(selected_state_id != 0){
            $('#rides-carousel').html(routetariffs.result[selected_state_id].cars_html);
            selected_route_id = selected_state_id;            
          
        }else{
            $('#rides-carousel').html(routetariffs.result[selected_city_id].cars_html);
            selected_route_id = selected_city_id;
        }

        var table_width = $('#trip-summary-details').width();

        $('#cars-container').css('width',table_width - (0.0157 * table_width));



        $('.owl-carousel').owlCarousel({
          loop:false,
          margin:10,
          nav:false,
          dots:true,
          items:2,
          center:true,
          info: function(item){
            console.log('mikolo');
          }
          
        });

       
                
        booking_currency_symbol = routetariffs.result[selected_route_id].cars[0].symbol;
        $('#payment-type').html(routetariffs.result.payment_options); 

        var current_dt = new Date();
        var c_year = current_dt.getFullYear();
        var c_month = current_dt.getMonth() + 1;
        var c_day = current_dt.getDate();
        var c_day_week = current_dt.getDay();
        var c_hours = current_dt.getHours();
        var c_min = current_dt.getMinutes();

        if(c_hours < 10){
          c_hours = '0' + c_hours;
        }

        if(c_min < 10){
          c_min = '0' + c_min;
        }


        if(c_day < 10){
          c_day = '0' + c_day;
        }

        if(c_month < 10){
          c_month = '0' + c_month;
        }

        var unix_time = current_dt.getTime();
        unix_time += 7200000; //add 1 day in milliseconds
        
        var min_date = new Date(unix_time);
        var scheduled_ride = 0;
        var booking_cost_h = '';
        var computed_fare = 0;
        //$('#puc_dt').html(__("Now"));
        //$('#puc_dt').html(c_day + '/' + c_month + '/' + c_year + ' ' + c_hours + ':' + c_min);

        $('#set_puc_dt').off("click").on('click', function(){

          if(scheduled_ride_enabled == 0){
            ons.notification.alert(__('Scheduled rides are currently unavailable'),{title:""});
            return
          }

          if(device_ready){
              cordova.plugins.DateTimePicker.show({
                mode : "datetime",
                date : cdate,
                allowOldDates : false,
                allowFutureDates : true,
                minuteInterval : 10,
                local : "EN",
                okText : __("OK"),
                cancelText : __("Cancel"),
                android : {
                            theme : 0,
                            calender : true,
                            is24HourView : false
                },
                success : function(newDate){
                        cdate = newDate;
                        current_dt = [];
                        current_dt = new Date(newDate);
                        scheduled_ride = 1;
                        var c_year = current_dt.getFullYear();
                        var c_month = current_dt.getMonth() + 1;
                        var c_day = current_dt.getDate();
                        var c_day_week = current_dt.getDay();
                        var c_hours = current_dt.getHours();
                        var c_min = current_dt.getMinutes();

                        let time_diff = 0;
                        time_diff = (current_dt.getTime() - Date.now()) / 1000 | 0;

                        if(time_diff < 3600){                            
                            ons.notification.alert(__('Please set a time atleast 1 hour ahead for scheduled ride'),{title:""});
                            return;
                        }

                        

                        var c_hours_str;
                        var c_min_str;
                        var c_day_str;
                        var c_month_str;

                        if(c_hours < 10){
                          c_hours_str = '0' + c_hours;
                        }else{
                          c_hours_str = c_hours;
                        }

                        if(c_min < 10){
                          c_min_str = '0' + c_min;
                        }else{
                          c_min_str = c_min;
                        }


                        if(c_day < 10){
                          c_day_str = '0' + c_day;
                        }else{
                          c_day_str = c_day;
                        }

                        if(c_month < 10){
                          c_month_str = '0' + c_month;
                        }else{
                          c_month_str = c_month;
                        }

                        let days_of_the_week = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
                        let month_of_the_year = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

                        let date_str = c_hours_str + ":" + c_min_str + ", " + days_of_the_week[c_day_week] + " " + c_day + " " + month_of_the_year[c_month - 1];

                        $('#bookride').html(__('Schedule') + "- " + date_str);



                        //$('#puc_dt').html(c_day_str + '/' + c_month_str + '/' + c_year + ' ' + c_hours_str + ':' + c_min_str);
                        var set_shour = parseInt(routetariffs.result.nighttime.start_hour);
                        var set_ehour = parseInt(routetariffs.result.nighttime.end_hour);

                        if(c_hours >= set_shour || c_hours <= set_ehour){
                          //Night time range
                          night_day = 0;
                          bookride_cost = parseFloat(nride_puc) + parseFloat(nride_doc) + (parseFloat(nride_cpm) * parseFloat(intra_city_duration)) + (parseFloat(nride_cpk) * parseFloat(intra_city_distance));           
                        }else{
                          //outside night time range
                          night_day = 1;
                          bookride_cost = parseFloat(ride_puc) + parseFloat(ride_doc) + (parseFloat(ride_cpm) * parseFloat(intra_city_duration)) + (parseFloat(ride_cpk) * parseFloat(intra_city_distance));           

                        }
                        peak_period = 0;
                        if(peak_period_enabled){ //check if peak period charge is enabled for this car
            
                            if(typeof peak_period_days == 'object'){
                              for(var i = 0;i < peak_period_days.length;i++){
                
                                if(peak_period_days[i] == c_day_week || peak_period_days[i] - 7 == c_day_week){ //check if the day is part of the peak period days. had to correct for mismatch in sunday as javascript getDay() has sunday as 0, monday 1...
                                    //day of the week is part of peak period days
                                    
                                    if(c_hours >= peak_period_start && c_hours <= peak_period_end){
                                      //peak period, compute booking cost
                                      peak_period = 1;
                                      if(peak_period_charge_type){
                                          bookride_cost = bookride_cost * peak_period_charge_value;
                                      }else{
                                        bookride_cost = bookride_cost + peak_period_charge_value;
                                      }                     
                                      
                                    }
                                    break;
                                }
                
                
                              }
                            } 
                        }

                        var fare_title = '';
                        var night_title = '';
                        var peak_title = "";

                        if(computed_fare){
                          fare_title = __("Est. Fare")
                        }else{
                          fare_title = __("Flat Fare") + " "
                        }

                        if(night_day){
                          night_title = "";
                        }else{
                          night_title = " | " + __("Night");
                        }

                        if(peak_period){
                          peak_title = " | " + __("Surge");
                        }else{
                          peak_title = "";
                        }

                        $('#fare-status').html(fare_title + night_title + peak_title);


                        let bookride_cost_fixed = Math.round(bookride_cost * 100) / 100;
                        bookride_cost_fixed = bookride_cost_fixed.toFixed(2);
                        $('#bookride_cost').html(booking_currency_symbol + bookride_cost_fixed);

                        booking_cost_h = md5("projectgics" + bookride_cost.toString());
                        
                },
                cancel : function(){
                    return;
                },
                error: function(){
                    return;
                }
            })
          }

        });

        //$('#pick-up-address').html(pick_up_data['address']);
        //$('#drop-off-address').html(drop_off_data['address']);

        //$('#ride_dist_dur').html(intra_city_distance_text + " | " + intra_city_duration_text);

        
        selected_city_ride = $('.owl-carousel .owl-item').eq(0).find('img').data('rideid');
        $('#car-name').html($('.owl-carousel .owl-item').eq(0).find('img').data('title'));
        //$('#route-ride-title').html($('.owl-carousel .owl-item').eq(0).find('img').html());
        $('#route-ride-desc').html($('.owl-carousel .owl-item').eq(0).find('img').data('ridedesc'));

        ride_cpk = $('.owl-carousel .owl-item').eq(0).find('img').data('cpk');
        ride_cpm = $('.owl-carousel .owl-item').eq(0).find('img').data('cpm');
        ride_puc = $('.owl-carousel .owl-item').eq(0).find('img').data('puc');
        ride_doc = $('.owl-carousel .owl-item').eq(0).find('img').data('doc');

        nride_cpk = $('.owl-carousel .owl-item').eq(0).find('img').data('ncpk');
        nride_cpm = $('.owl-carousel .owl-item').eq(0).find('img').data('ncpm');
        nride_puc = $('.owl-carousel .owl-item').eq(0).find('img').data('npuc');
        nride_doc = $('.owl-carousel .owl-item').eq(0).find('img').data('ndoc');

        peak_period_enabled = parseInt($('.owl-carousel .owl-item').eq(0).find('img').data('ppenabled'));
        peak_period_start = parseInt($('.owl-carousel .owl-item').eq(0).find('img').data('ppstart'));
        peak_period_end = parseInt($('.owl-carousel .owl-item').eq(0).find('img').data('ppend'));
        peak_period_charge_type = parseInt($('.owl-carousel .owl-item').eq(0).find('img').data('ppchargetype'));
        peak_period_charge_value = parseFloat($('.owl-carousel .owl-item').eq(0).find('img').data('ppchargevalue'));
        peak_period_days = $('.owl-carousel .owl-item').eq(0).find('img').data('ppdays');
        computed_fare = parseInt($('.owl-carousel .owl-item').eq(0).find('img').data('cfare'));
        peak_period = 0;

        var set_shour = parseInt(routetariffs.result.nighttime.start_hour);
        var set_ehour = parseInt(routetariffs.result.nighttime.end_hour);

        if(c_hours >= set_shour || c_hours <= set_ehour){
          //Night time range
          night_day = 0;
          bookride_cost = parseFloat(nride_puc) + parseFloat(nride_doc) + (parseFloat(nride_cpm) * parseFloat(intra_city_duration)) + (parseFloat(nride_cpk) * parseFloat(intra_city_distance));           
        }else{
          //outside night time range
          night_day = 1;
          bookride_cost = parseFloat(ride_puc) + parseFloat(ride_doc) + (parseFloat(ride_cpm) * parseFloat(intra_city_duration)) + (parseFloat(ride_cpk) * parseFloat(intra_city_distance));           

        }
        
        if(peak_period_enabled){ //check if peak period charge is enabled for this car
            
            if(typeof peak_period_days == 'object'){
              for(var i = 0;i < peak_period_days.length;i++){

                if(peak_period_days[i] == c_day_week || peak_period_days[i] - 7 == c_day_week){ //check if the day is part of the peak period days. had to correct for mismatch in sunday as javascript getDay() has sunday as 0, monday 1...
                    //day of the week is part of peak period days
                    
                    if(c_hours >= peak_period_start && c_hours <= peak_period_end){
                      //peak period, compute booking cost
                      peak_period = 1;
                      if(peak_period_charge_type){
                          bookride_cost = bookride_cost * peak_period_charge_value;
                      }else{
                        bookride_cost = bookride_cost + peak_period_charge_value;
                      }                     
                      
                    }
                    break;
                }


              }
            } 
        }

        var fare_title = '';
        var night_title = '';
        var peak_title = "";

        if(computed_fare){
          fare_title = __("Est. Fare")
        }else{
          fare_title = __("Flat Fare") + " "
        }

        if(night_day){
          night_title = "";
        }else{
          night_title = " | " + __("Night");
        }

        if(peak_period){
          peak_title = " | " + __("Surge");
        }else{
          peak_title = "";
        }

        $('#fare-status').html(fare_title + night_title + peak_title);

        let bookride_cost_fixed = Math.round(bookride_cost * 100) / 100;
        bookride_cost_fixed = bookride_cost_fixed.toFixed(2);
        $('#bookride_cost').html(booking_currency_symbol + bookride_cost_fixed);
                
        booking_cost_h = md5("projectgics" + bookride_cost.toString());





        $('.owl-carousel').on('changed.owl.carousel', function (e) {
          
          selected_city_ride = $('.owl-carousel .owl-item').eq(e.item.index).find('img').data('rideid');
          
          $('#car-name').html($('.owl-carousel .owl-item').eq(e.item.index).find('img').data('title'));
          $('#route-ride-desc').html($('.owl-carousel .owl-item').eq(e.item.index).find('img').data('ridedesc'));

          ride_cpk = $('.owl-carousel .owl-item').eq(e.item.index).find('img').data('cpk');
          ride_cpm = $('.owl-carousel .owl-item').eq(e.item.index).find('img').data('cpm');
          ride_puc = $('.owl-carousel .owl-item').eq(e.item.index).find('img').data('puc');
          ride_doc = $('.owl-carousel .owl-item').eq(e.item.index).find('img').data('doc');

          nride_cpk = $('.owl-carousel .owl-item').eq(e.item.index).find('img').data('ncpk');
          nride_cpm = $('.owl-carousel .owl-item').eq(e.item.index).find('img').data('ncpm');
          nride_puc = $('.owl-carousel .owl-item').eq(e.item.index).find('img').data('npuc');
          nride_doc = $('.owl-carousel .owl-item').eq(e.item.index).find('img').data('ndoc');

          peak_period_enabled = parseInt($('.owl-carousel .owl-item').eq(e.item.index).find('img').data('ppenabled'));
          peak_period_start = parseInt($('.owl-carousel .owl-item').eq(e.item.index).find('img').data('ppstart'));
          peak_period_end = parseInt($('.owl-carousel .owl-item').eq(e.item.index).find('img').data('ppend'));
          peak_period_charge_type = parseInt($('.owl-carousel .owl-item').eq(e.item.index).find('img').data('ppchargetype'));
          peak_period_charge_value = parseFloat($('.owl-carousel .owl-item').eq(e.item.index).find('img').data('ppchargevalue'));
          peak_period_days = $('.owl-carousel .owl-item').eq(e.item.index).find('img').data('ppdays');
          var computed_fare = parseInt($('.owl-carousel .owl-item').eq(e.item.index).find('img').data('cfare'));
          peak_period = 0;

          if(night_day){
             bookride_cost = parseFloat(ride_puc) + parseFloat(ride_doc) + (parseFloat(ride_cpm) * parseFloat(intra_city_duration)) + (parseFloat(ride_cpk) * parseFloat(intra_city_distance));           
          }else{
            bookride_cost = parseFloat(nride_puc) + parseFloat(nride_doc) + (parseFloat(nride_cpm) * parseFloat(intra_city_duration)) + (parseFloat(nride_cpk) * parseFloat(intra_city_distance));           
          }

          if(peak_period_enabled){ //check if peak period charge is enabled for this car
            
              if(typeof peak_period_days == 'object'){
                for(var i = 0;i < peak_period_days.length;i++){

                  if(peak_period_days[i] == c_day_week || peak_period_days[i] - 7 == c_day_week){ //check if the day is part of the peak period days. had to correct for mismatch in sunday as javascript getDay() has sunday as 0, monday 1...
                      //day of the week is part of peak period days
                      
                      if(c_hours >= peak_period_start && c_hours <= peak_period_end){
                        //peak period, compute booking cost
                        peak_period = 1;
                        if(peak_period_charge_type){
                            bookride_cost = bookride_cost * peak_period_charge_value;
                        }else{
                          bookride_cost = bookride_cost + peak_period_charge_value;
                        }                     
                        
                      }
                      break;
                  }


                }
              } 
          }

          var fare_title = '';
          var night_title = '';
          var peak_title = "";

          if(computed_fare){
            fare_title = __("Est. Fare")
          }else{
            fare_title = __("Flat Fare") + " "
          }

          if(night_day){
            night_title = "";
          }else{
            night_title = " | " + __("Night");
          }

          if(peak_period){
            peak_title = " | " + __("Surge");
          }else{
            peak_title = "";
          }

          $('#fare-status').html(fare_title + night_title + peak_title);

          let bookride_cost_fixed = Math.round(bookride_cost * 100) / 100;
            bookride_cost_fixed = bookride_cost_fixed.toFixed(2);
            $('#bookride_cost').html(booking_currency_symbol + bookride_cost_fixed);

          booking_cost_h = md5("projectgics" + bookride_cost.toString());

      });


      $('#bookride').off("click").on('click', function(){
        
        loading.show();
        current_dt2 = new Date(current_dt);
        payment_type = jQuery("#payment-type").find(':selected').val();
                        
        var c_year = current_dt2.getFullYear();
        var c_month = current_dt2.getMonth() + 1;
        var c_day = current_dt2.getDate();
        var c_hours = current_dt2.getHours();
        var c_min = current_dt2.getMinutes();

        var c_hours_str;
        var c_min_str;
        var c_day_str;
        var c_month_str;

        if(c_hours < 10){
          c_hours_str = '0' + c_hours;
        }else{
          c_hours_str = c_hours;
        }

        if(c_min < 10){
          c_min_str = '0' + c_min;
        }else{
          c_min_str = c_min;
        }


        if(c_day < 10){
          c_day_str = '0' + c_day;
        }else{
          c_day_str = c_day;
        }

        if(c_month < 10){
          c_month_str = '0' + c_month;
        }else{
          c_month_str = c_month;
        }



        var pdatetime = c_year + '-' + c_month_str + '-' + c_day_str + ' ' + c_hours_str + ':' + c_min_str;

                
        
        var post_data = {'action_get':'newbooking','paddress':pick_up_data['address'],'plng':pick_up_data['lng'],'plat':pick_up_data['lat'],'daddress':drop_off_data['address'],'dlng':drop_off_data['lng'],'dlat':drop_off_data['lat'],'route_id':selected_route_id,'ride_id':selected_city_ride,'pdatetime':pdatetime,'p_type':payment_type,'scheduled':scheduled_ride,'b_token':booking_cost_h,'booking_price':bookride_cost,'coupon_code':verified_coupon_code, 'multidestination' : multi_destination_mode, 'waypoints': multi_destinations};       
          
          jQuery.ajax({
          url: ajaxurl,
          method: 'GET',
          timeout : 30000,
          crossDomain:true,
          xhrFields: {withCredentials: true},
          data: post_data,
          success: function (data, status)
              {
                console.log(data);
                loading.hide();    
                                    
                  
                  try{
                      var data_obj = JSON.parse(data);
                  }catch(e){
                      
                      ons.notification.alert(__("Error communicating with server"),{'title':""});
                      return;
                  }
    
      
                  if(data_obj.hasOwnProperty('error')){
                    
                      ons.notification.alert(data_obj.error,{'title':""});
                      return;                  
    
                  }
    
    
                  
                  if(data_obj.hasOwnProperty('success')){
                      
                    if(data_obj.hasOwnProperty('coupon_code_invalid') && data_obj.coupon_code_invalid == 1){
                        localStorage.removeItem('user-promo-codes');
                    }  

                    toggleroutepathanimation(0);
                    map.clear(); //clear all marker on map
                    city_drivers_markers = {};
                    drv_search_rider_lat_long.lat = pick_up_data.lat;
                    drv_search_rider_lat_long.lng = pick_up_data.lng;
                    pick_up_data=[];
                    drop_off_data=[];
                    pick_up_data = {'address': '','lng':'','lat':''};
                    drop_off_data = {'address': '','lng':'','lat':''};
                    route_polyline = null;

                    //reset multi destination mode
                    multi_destination_mode = 0;        
                    $('#location-type-icon-ds1').hide();
                    $('#location-type-icon-ds2').hide();
                    dest_location_type_selected = 0;
                    destination_stop_inp1_shown = 0;
                    destination_stop_inp2_shown = 0; 
                    multi_destinations = {'pickup' : {'address':'', 'lat':'', 'lng' :''},'dest-1':{'address':'', 'lat':'', 'lng' :''},'dest-2':{'address':'', 'lat':'', 'lng' :''},'dropoff' : {'address':'', 'lat':'', 'lng' :''}};

                    marker1 = undefined;
                    marker2 = undefined;
                    marker3 = undefined;
                    marker4 = undefined;
                    markerds1 = undefined;
                    markerds2 = undefined;
                    markerdrvsearch = undefined;

                    $('#bookbutton').css('visibility','hidden');
                    $('#bookbutton2').css('visibility','hidden');
                    $('#pac-input').val('');
                    $('#pac-input2').val(''); 

                    

                    if(selected_state_id != 0){
                      document.querySelector('#myNavigator').popPage({animation:'fade',times:2});                      
                      if(scheduled_ride){
                        ons.notification.alert(__("Your inter-state booking has been placed. You will be contacted some minutes before your pickup time"),{'title':""});                                    
                      }else{
                        ons.notification.alert(__("Your inter-state booking has been placed. You will be contacted by a service person soon"),{'title':""});                                    
                        //$('#driver-search').show();
                      }
                      getuserlocation();
                    }else{

                      //document.querySelector('#myNavigator').popPage({animation:'fade'});
                      reset_ui_elements();
                      if(scheduled_ride){
                        ons.notification.alert(__("Your booking has been placed. You will be notified 15 minutes before pickup time"),{'title':""});                                    
                        getuserlocation();
                      }else{
                        //$('#driver-search').show();
                        showhidedriversearch(1);
                        driver_search_display_timer = setTimeout(function(){ //auto close the driver-search modal after a period of time.
                            showhidedriversearch(0);
                            ons.notification.alert(__("It is taking time to locate a driver. Please be patient while we continue searching. You will be notified"),{'title':""});                                    
                            getuserlocation();
                        },50000);
                      }

                    }
                    
                    return;

                  }
    
    
                
                  
                  
              },
              error: function() {
                loading.hide();     
                ons.notification.alert(__("Error communicating with server"),{'title':""});
                return;
                  
              }
    
          });


      })
}


function reset_ui_elements(){
    $("#trip-summary-back-btn").removeClass("slideOutLeft animated").addClass("slideOutLeft animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $("#trip-summary-back-btn").css("visibility","hidden");
        $(this).removeClass("slideOutLeft animated");        
        $("#trip-summary-back-btn").css("z-index","10");
        $("#menubtn").css("visibility","visible");
        $("#menubtn").css("z-index","100");
        $("#menubtn").removeClass("slideInLeft animated").addClass("slideInLeft animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass("slideInLeft animated");
        })
    })

    $("#new-bookng-details").removeClass("bounceOutDown animated").addClass("bounceOutDown animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass("bounceOutDown animated");
        $("#new-bookng-details").css("visibility","hidden");
        $("#new-bookng-details").css("left", "-10000px");
                        
        
    })

    trip_summary_dialog_show = 0;
}


function showhidedriversearch(show=0){
    if(show){
        $('#pulse-rings-container').hide();
        $('#drop-box-container').css('opacity', '0');
        $('#driver-search-view-modal').show();
        map.setClickable(false);
        if(markerdrvsearch){
            markerdrvsearch.setDisableAutoPan(true);
            markerdrvsearch.setPosition({
                lat:drv_search_rider_lat_long.lat,
                lng: drv_search_rider_lat_long.lng
                                                            
            });    
                    
        }else{
            
            
            markerdrvsearch = map.addMarker({
                            'position':{lat:drv_search_rider_lat_long.lat,lng: drv_search_rider_lat_long.lng},
                            'icon' : 'img/pick-up-pin.png',
                            animation: plugin.google.maps.Animation.DROP
                        });
    
            markerdrvsearch.setDisableAutoPan(true);
    
            markerdrvsearch._isReady = true;
        }

        

        map.animateCamera({
            target: {lat:drv_search_rider_lat_long.lat,lng: drv_search_rider_lat_long.lng},
            duration: 800,
            zoom:18
            }, function() {
            //alert("Camera target has been changed");
            
        });

        map.fromLatLngToPoint(drv_search_rider_lat_long, function(point){
            $('#pulse-rings-container').css('left', point[0] + 'px');
            $('#pulse-rings-container').css('top', point[1] + 'px');
            $('#pulse-rings-container').css('transform', 'translate(-50%,-50%)')
            $('#pulse-rings-container').fadeIn();
            $("#driver-search-bar").css("left", "0px");
            $("#driver-search-bar").css("visibility","visible");
            $("#driver-search-bar").removeClass("slideInUp animated").addClass("slideInUp animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                $(this).removeClass("slideInUp animated");                       
                
            })
        });        


        return;

    }

    map.setClickable(true);
    $('#pulse-rings-container').hide();
    $('#drop-box-container').css('opacity', '1');
    $('#driver-search-view-modal').hide();
    if(markerdrvsearch){
        markerdrvsearch.remove();
        markerdrvsearch = undefined;
    }

    $("#driver-search-bar").removeClass("slideOutDown animated").addClass("slideOutDown animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass("slideOutDown animated");
        $("#driver-search-bar").css("visibility","hidden");
        $("#driver-search-bar").css("left", "-10000px");                        
        
    })



}

function showmoreuserinfo(){

    booking_id = current_booking_data.booking_id

    
    loading.show();  
    var post_data = {'action_get':'getpersoninfo', 'booking_id':booking_id};       
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
                ons.notification.toast(__('Error communicating with server'), {
                    timeout: 2000
                    });          
                    return;
                
            }


            
            if(data_obj.hasOwnProperty('success')){
                $('#user-info-image-preload').attr('src', data_obj.photo);
                $('#user-info-rating').attr('src', "img/rating-" + data_obj.userdata.driver_rating + ".png");
                $('#user-info-name').text(data_obj.userdata.firstname + " " + data_obj.userdata.lastname);
                $('#user-info-joined').text(data_obj.userdata.account_create_date);
                $('#user-info-completed').text(data_obj.userdata.completed_rides);
                $('#user-info-cancelled').text(data_obj.userdata.cancelled_rides);
                $('#user-info-rejected').text(data_obj.userdata.rejected_rides);
                $('#user-info-comments').html(data_obj.comments);
                user_info_window.show();
                console.log(data_obj.person_data);
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