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

var APP_TITLE = "Kiwi Conductores";
var APP_DEBUG = false; //set to true for debug mode on browser. false for production
var APP_VERSION_IOS = "10.0.0";
var APP_VERSION_ANDROID = "10.0.0";
var APP_UPDATE_URL_IOS = ""; 
var APP_UPDATE_URL_ANDROID = ""; 
var payment_gateway = "paystack"; //paystack, pesapal, paytr
var app_start_animate = 0;
var app_start_animate_counter = 0;
var app_start_animate_timer;
var google = undefined;
var walletbal = 0;
var Latitude = undefined;
var Longitude = undefined;
var marker = undefined;
var map = undefined;
var marker1 = undefined;
var driver_lat;
var driver_lng;
var driver_marker = undefined;
var rider_pickup_marker = undefined;
var rider_dropoff_marker = undefined;
var city_drivers_markers = {};
var driver_location_update_timer_id;
var driver_availability = false;
var processing_command = 0;
var marker2 = undefined;
var Latitude1 = undefined;
var Longitude2 = undefined;
var latLong1 = undefined;
var latLong2 = undefined;
var userprofileinfo = undefined;
var routetariffs = undefined;
var watchID = undefined;
var device_ready = 0;
var save_progress_counter = 0;
var session_id = "0";
//var siteurl = "https://kiwiplus.site";
var siteurl = "http://localhost";
var ajaxurl = siteurl + "/ajaxdriver.php";
var loading = $('#loading');
var startscreen = $('#startscreen');
var animatecircle = $('#animate-circle');
var notification_dialog = $('#notif-dialog');
var chat_window = document.querySelector("#chat-window");
var user_info_window = document.querySelector("#user-info-window");
var chat_window_display_status = 0;
var city_curency_symbol = '';
var city_curency_exchange_rate = 1;
var city_curency_code = '';
var city_curency_name = '';
var booking_currency_symbol = '';
var google_map_api_key = '';
var cdate = new Date();
var call_center_num = null;
var wallet_amount = null;
var wallet_history_items = null;
var wallet_debit_history;
var bookings_data = {'pend_onride':'','completed':'','cancelled':''};
var jobs_data = {'onride':'','accepted':'','pending':''};
var notifications_data = '';
var online_payment_info = undefined;
var earnings_data = "";
var day_total_earnings;
var get_push_token_retry_count = 0;
var side_menu_state = 0;
var close_dialog_enable = 0;
var mobile_gps_enabled = 0;
var MAP_TYPE_IN_USE = 1; //sets the google map type to use. 0 = javascript, 1 = native;
var map_load_timer_handle;
var app_online = 0; //sets if app is online or offline;
var route_polyline;
var route_points;
var get_available_drivers_timer;
var platform;
var aboutpage_content = "";
var terms_and_privacy_content = '';
var help_data;
var help_categories = '';
var help_topics = [];
var help_topics_contents = [];
var driver_accept_ride_request_timer;
var driver_accept_ride_request_timer_step;
var driver_accept_time = 0;
var driver_accept_ride_request_timer_indicator = 0;
var driver_ride_tariff;
var driver_accept_ride_request_ui_states = {ui_state : 0,booking_id:0,p_addr:'',p_lat:'',p_lng:'',d_addr:'',d_lat:'',d_lng:'',rider_firstname:'',rider_image:'',rider_phone:'',rider_rating:'',completion_code:'',fare:'',payment_type:'',coupon_code:'',coupon_discount_type:0,coupon_discount_value:0,referral_discount_value:0.00,referral_used:0,total_ride_time:0,total_ride_distance:0.00,total_ride_time_formated:'',total_ride_distance_formated:'',paid_amount:0.00, ride_start_time:0, waypoint1_address:'',waypoint1_long:'',waypoint1_lat:'',waypoint2_address:'',waypoint2_long:'',waypoint2_lat:'',confirm_stop1:0,confirm_stop2:0,drv_start_ride_pos_lat:0.0,drv_start_ride_pos_lng:0.0,drv_last_pos_lat:0.0,drv_last_pos_lng:0.0,drv_last_pos_time:0};
var driver_accept_ride_push_data;
var old_time_seconds = 0;
var total_ride_seconds = 0;
var old_driver_position_lat = 0.0;
var old_driver_position_lng = 0.0;
var old_driver_distance = 0;
var total_ride_distance = 0;
var driver_accept_ride_request_ui_update_timer;
var track_driver_on_map = 1;
var ride_alloc_sound, accept_ride_sound,driver_offline_sound,driver_online_sound,ride_ui_btn_sound,ride_cancel_sound,notification_sound;
var driver_registration_data = {driver_photo:'',firstname:'',lastname:'',address:'',state:'',country_2c_code:'',country_call_code:'',phone:'',email:'',password:'',referal_code:'',car_plate_num:'',car_model:'',car_type:0,car_reg_num:'',car_color:'',operation_city:0,drivers_license_photo:'',road_worthiness_cert:'',account_holders_name:'',account_number:'',bank_name:'',bank_code:'',bank_country:'',bank_swift_code:''};
var user_timezone;
var carrier_country_code = 'ar';
var user_country_dial_code = '54';
var pubnub;
var processed_notifications = {};
var route_polyline;
var route_points;
var ride_rating = 1;
var pubnub_reconnection_count = 0;
var flash_notification_available = 0;
var app_fully_started = 0;
var selected_lang = {code:'es',name:'Spanish (Español)',dir:'ltr'};
var default_currency_data;
var app_settings = {};
var resend_code_btn_status = 1;
var resend_code_countdown_timer_handle = 0;
const RESEND_CODE_COUNTDOWN_VALUE = 60;
const USE_FIREBASE_PHONE_AUTH = 1; 
var firebase_phone_number_verified = 0;
var firebase_phone_auth_verificationid = '';
var account_activation_status = 0;
var markerds1 = undefined;
var markerds2 = undefined;
var referraldata;
var server_client_time_diff = 0;
var driver_location_watch_handle = 0;



document.addEventListener('resume', function(){ //fires when app is pulled up from background



    if(!APP_DEBUG){
        
        updateDriverLocation();

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
    
    loadLang();

    device_ready = 1;  

    if(window.MobileAccessibility){
        MobileAccessibility.setTextZoom(90, function(){return;});
        //window.MobileAccessibility.usePreferredTextZoom(false);
    }

    loadCountryTel();

    var tz = jstz.determine(); // Determines the time zone of the browser client
    user_timezone = tz.name(); //read timezone value

    
    
    
    
    startscreen.show();
    setTimeout(function(){
        translateElements();
        navigator.splashscreen.hide();

        cordova.plugins.backgroundMode.setDefaults({
            title: __("Background mode activated"),
            text: __("Droptaxi is currently running in background mode"),
            icon: 'notification_icon', 
            color: "#7cb342",
            allowClose: false,
            closeIcon: 'power', // An icon shown for the close action
            closeTitle: 'Close', // The text for the close action
            showWhen: true
        })
    },1000)
    
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
            carrier_country_code = res.hasOwnProperty('countryCode') ? res.countryCode : 'ng';
            carrier_country_code = carrier_country_code.toLocaleLowerCase();
        }, function(err){
            carrier_country_code = 'ng';
            user_country_dial_code = '+234';
            console.log('error getting device carier info.' + err);
        });
               
        platform = cordova.platformId;
        //platform = platform.toLowerCase();

        if( platform=="iOS")
        {
        //StatusBar.overlaysWebView(true);
        //StatusBar.hide();
        }


        var sound_url = 'sound/ride-alloc.mp3';
        if(platform === "android"){
            sound_url = 'file:///android_asset/www/sound/ride-alloc.mp3';
        }

        ride_alloc_sound = new Media(sound_url,
                // success callback
                function () {
                    console.log("playAudio():Audio Success");
                },
                // error callback
                function (err) {
                    console.log("playAudio():Audio Error: " + err);
                }
        );
    


        sound_url = 'sound/accept-ride.mp3';
        if(platform === "android"){
            sound_url = 'file:///android_asset/www/sound/accept-ride.mp3';
        }

        accept_ride_sound = new Media(sound_url,
                // success callback
                function () {
                    console.log("playAudio():Audio Success");
                },
                // error callback
                function (err) {
                    console.log("playAudio():Audio Error: " + err);
                }
        );



        sound_url = 'sound/driver-offline.mp3';
        if(platform === "android"){
            sound_url = 'file:///android_asset/www/sound/driver-offline.mp3';
        }

        driver_offline_sound = new Media(sound_url,
                // success callback
                function () {
                    console.log("playAudio():Audio Success");
                },
                // error callback
                function (err) {
                    console.log("playAudio():Audio Error: " + err);
                }
        );


        sound_url = 'sound/driver-online.mp3';
        if(platform === "android"){
            sound_url = 'file:///android_asset/www/sound/driver-online.mp3';
        }

        driver_online_sound = new Media(sound_url,
                // success callback
                function () {
                    console.log("playAudio():Audio Success");
                },
                // error callback
                function (err) {
                    console.log("playAudio():Audio Error: " + err);
                }
        );
    

        
        sound_url = 'sound/ride-ui-btn.mp3';
        if(platform === "android"){
            sound_url = 'file:///android_asset/www/sound/ride-ui-btn.mp3';
        }

        ride_ui_btn_sound = new Media(sound_url,
                // success callback
                function () {
                    console.log("playAudio():Audio Success");
                },
                // error callback
                function (err) {
                    console.log("playAudio():Audio Error: " + err);
                }
        );



        sound_url = 'sound/ride-ui-btn.mp3';
        if(platform === "android"){
            sound_url = 'file:///android_asset/www/sound/ride-cancel.mp3';
        }

        ride_cancel_sound = new Media(sound_url,
                // success callback
                function () {
                    console.log("playAudio():Audio Success");
                },
                // error callback
                function (err) {
                    console.log("playAudio():Audio Error: " + err);
                }
        );


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
        
                
        
        cordova.plugins.firebase.messaging.requestPermission().then(function(token) {
            return;
        });


        cordova.plugins.firebase.messaging.onMessage(function(payload) { //trigger push notification when app is in foreground
            process_push_message(payload);
        });





        cordova.plugins.firebase.messaging.onBackgroundMessage(function(payload) { //trigger push notification when app is in background
            //$('#ride-request').hide();
            process_push_message(payload);
        });


        cordova.plugins.backgroundMode.enable();

               

        
        

        
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
    

    //mapinitialize();
    if(!APP_DEBUG){
        requestLocationAccuracy();                        
    }else{
        mapinitialize();
    }


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


   
    

});



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
                    }
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



function call_rider(phonenum){
    if(phonenum){
        //window.plugins.CallNumber.callNumber(function(){return;}, function(){return;}, phonenum, 1);
        window.open('tel:' + phonenum,'_system');
    }
}



function sms_rider(phonenum){
    if(phonenum){
        //window.plugins.CallNumber.callNumber(function(){return;}, function(){return;}, phonenum, 1);
        window.open('sms:' + phonenum,'_system');
    }
}


function process_push_message(payload){
    //$('#ride-request').hide();
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
                if(payload.action != "chat-message"){
                    processed_notifications[payload.booking_id] = [payload.action];
                }
                
                //console.log('new');
                
            }
        }

        switch(payload.action){
            case "driver-allocate":
            booking_allocate_notify(payload);
            break;
            case "customer-cancelled":
            customer_cancelled_notify(payload);
            break;
            case "chat-message":
            chat_msg_notify(payload);
            break;
            
        }

        return;
    }
    /* if("action" in payload){
        switch(payload.action){
            case "driver-allocate":
            booking_allocate_notify(payload);
            break;
            case "customer-cancelled":
            customer_cancelled_notify(payload);
            break;
            
        }
    } */
}


function chat_msg_notify(push_data){
    chat_update_content(push_data.booking_id);
}



function booking_allocate_notify(push_data){

    driver_accept_ride_push_data = push_data;
    
    $('#accept-booking').data('bookid',push_data.booking_id);
    $('#ride-request-cancel').data('bookid',push_data.booking_id);
    $('#request-pickup').html(push_data.p_address);
    $('#request-dropoff').html(push_data.d_address);
    $('#rider-image-preload').attr('src',push_data.rider_image);
    $('#rider-name').html(push_data.rider_name);
    $('#rider-rating').attr('src','img/rating-' + push_data.rider_rating +'.png');
    $('#ride-estimated-price').html(city_curency_symbol + push_data.fare);
    

    if(push_data.payment_type == 1){
        $('#ride-payment-type').html(__("Cash Payment"));
    }else if(push_data.payment_type == 2){
        $('#ride-payment-type').html(__("Wallet Payment"));
    }else if(push_data.payment_type == 3){
        $('#ride-payment-type').html(__("Card Payment"));
    }else{
        $('#ride-payment-type').html("POS Payment");
    }

    var driver_accept_duration = push_data.driver_accept_duration;
    var notif_sent_time = push_data.sent_time;

    var current_timestamp = Math.round(new Date().getTime()/1000);

    driver_accept_time = driver_accept_duration - (current_timestamp - notif_sent_time);

    if(driver_accept_time <= 0 )return;

    driver_accept_ride_request_timer_step = (100 / driver_accept_time);


    var play_rate = 0;
    var rider_pickup_location_lat = parseFloat(push_data.p_lat);
    var rider_pickup_location_lng = parseFloat(push_data.p_lng);

    
    $('#rider-dist-time').text('---'); 
    $('#rider-dist-driver').text('---');

    driver_accept_ride_request_timer_indicator = 0;
    clearInterval(driver_accept_ride_request_timer);
    driver_accept_ride_request_timer = setInterval(function(){
        play_rate ++;
        if(play_rate > 2){
            play_rate = 0;
            ride_alloc_sound.play();
        }
        driver_accept_ride_request_timer_indicator += driver_accept_ride_request_timer_step;
        var ind_val = Math.round(driver_accept_ride_request_timer_indicator);
        $('#ride-request-progress-timer').attr('value',ind_val);
        if(driver_accept_ride_request_timer_indicator >= 100){
            clearInterval(driver_accept_ride_request_timer);
            $('#ride-request').hide();
            $('#ride-request-progress-timer').attr('value',0);
            driver_accept_time = 0;
        }

        //compute driver distance and time from the rider
        if(driver_lat && driver_lng){

            let rider_latlng = {'lat':rider_pickup_location_lat,'lng':rider_pickup_location_lng};
            let driver_latlng = {'lat':driver_lat,'lng':driver_lng};
            let distance = plugin.google.maps.geometry.spherical.computeDistanceBetween(rider_latlng, driver_latlng); //distance in meters
            let time_to_pickup_location_sec = distance / 5.555555556; //20km/hr to m/s - worst case time if driver is driving at this average speed

            let time_to_pickup_location_min = Math.floor(time_to_pickup_location_sec / 60);
            
            if(time_to_pickup_location_min > 1){
                $('#rider-dist-time').text(time_to_pickup_location_min + 'mins'); 
            }else{
                $('#rider-dist-time').text(time_to_pickup_location_min + 'min');
            }

            //let driver_dist_from_rider = 0;
            if(routetariffs.result[userprofileinfo.city_id].cars[0].dist_unit == 0){ //kilometer
                distance = distance / 1000; //convert to KM
                distance = Math.floor(distance * 100) / 100; //2 decimal fixed point
                $('#rider-dist-driver').text(distance + 'km');
            }else{//miles
                distance = distance / 1609.344; //convert to mi
                distance = Math.floor(distance * 100) / 100; //2 decimal fixed point
                $('#rider-dist-driver').text(distance + 'mi');
            }
            
            
            

        }

    },1000);
    
    ride_alloc_sound.play();
    $('#ride-request').show();

}


function customer_cancelled_notify(push_data){
    ride_cancel_sound.play();
    if(driver_accept_ride_request_ui_states.hasOwnProperty("booking_id") && driver_accept_ride_request_ui_states.booking_id == push_data.booking_id){
        //current booking driver is on has been cancelled. Clean up UI and show message
        if(driver_accept_ride_request_ui_states.ui_state > 0 && driver_accept_ride_request_ui_states.ui_state < 4){ 
            $('#ride-cancel-btn').hide();
            $('#status-msg-container').css('top','10px');
            $("#statusmsg").css("visibility","visible");
            $("#statusmsg").removeClass("fadeOutUp animated").addClass("fadeOutUp animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                $(this).removeClass("fadeOutUp animated");
                $("#statusmsg").css("z-index","5");
                $("#statusmsg").css("visibility","hidden");
                $("#menubtn").css("z-index","100");
                $("#menubtn").css("visibility","visible");
                $("#nointernet").css("opacity","1");
                $("#driver-available-btn").css("visibility","visible");
                $('#driver-online-indicator').fadeIn();
                $('#status-msg-container').css('top','-1000px');

            });
                
            $("#ride-control-panel").css("visibility","visible");
            $("#ride-control-panel").removeClass("fadeOutDown animated").addClass("fadeOutDown animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                $(this).removeClass("fadeOutDown animated");
                $("#ride-control-panel").css("visibility","hidden");                
            })
            map.clear();
            city_drivers_markers = {}; //clear drivers marker handles
            driver_marker = undefined;
            route_points = undefined;
            route_polyline = undefined;
            rider_pickup_marker = undefined;
            rider_dropoff_marker = undefined;
            markerds1 = undefined;
            markerds2 = undefined;
            getuserlocation(); 
            ons.notification.alert(__("The booking with ID: {---1} has been cancelled by the rider",[push_data.booking_id]),{title:""});
            return; 
        }else{
            map.clear();
            city_drivers_markers = {}; //clear drivers marker handles
            driver_marker = undefined;
            route_points = undefined;
            route_polyline = undefined;
            rider_pickup_marker = undefined;
            rider_dropoff_marker = undefined;
            markerds1 = undefined;
            markerds2 = undefined;
            getuserlocation();
            ons.notification.alert(__("The booking with ID: {---1} has been cancelled by the rider",[push_data.booking_id]),{title:""});
            return; 
        }
    }else{
        //just show message
        map.clear();
        city_drivers_markers = {}; //clear drivers marker handles
        driver_marker = undefined;
        route_points = undefined;
        route_polyline = undefined;
        rider_pickup_marker = undefined;
        rider_dropoff_marker = undefined;
        markerds1 = undefined;
        markerds2 = undefined;
        getuserlocation();
        ons.notification.alert(__("The booking with ID: {---1} has been cancelled by the rider",[push_data.booking_id]),{title:""});
        return;
    }
}

function locnav(pickdrop,ongmap,long,lat){
    if(pickdrop == 1){
        dropoffmap(ongmap,long,lat);
    }else{
        pickupmap(ongmap,long,lat);
    }
}

function pickupmap(ongmap,long,lat){
    // latitude2=lat;
       // longitude2=long;
    
       

       if(ongmap){//plot on google map
   
        ons.notification.confirm({
            message: __('Navigation to rider pickup location will be performed using Google Maps App'),
            // or messageHTML: '<div>Message in HTML</div>',
            title: '',
            buttonLabels: [__('Continue'), __('Cancel')],
            animation: 'default', // or 'none'
            primaryButtonIndex: 0,
            cancelable: false,
            callback: function(index) {
                
                if(!index){
                    // 0-: Button index from the left
                    //window.open("https://www.google.com/maps/dir/?api=1&origin=" + driver_lat + "," + driver_lng +"&destination="+lat+","+long+"&travelmode=driving&dir_action=navigate");
                    //window.open("google.navigation:q=" + lat + "," + long+"&mode=d",'_system') //using intent
                    window.open(`geo:?q=${lat},${long}`,'_system');
                
                }/* else if(index == 1){
                    //window.open(`https://waze.com/ul?ll=\$${lat}%2C\$${long}&amp;navigate=yes`,'_system') //using intent    
                    window.open(`geo:?q=${lat},${long}`,'_system')                
                } */else{
                    
                    return;
                // -1: Cancel
                }
                
            }
        });
  
          
          return;
       }


        if(track_driver_on_map){
            track_driver_on_map = 0;
        }else{
            track_driver_on_map = 1;
            if(driver_lat && driver_lng){
                map.setClickable(false);
                map.animateCamera({
                    target: {lat: driver_lat, lng: driver_lng},
                    zoom: 18,
                    duration: 1000,
                    padding: 0  // default = 20px
                }, function() {
                    map.setClickable(true);
                    //alert("Camera target has been changed");

                }); 
            }  
            return;     
        }
       
       var p_lng = parseFloat(long);
       var p_lat = parseFloat(lat);
       
       
       if(rider_pickup_marker){

        rider_pickup_marker.setPosition({
            lat:p_lat,
            lng: p_lng                                            
        });

        map.setClickable(false);
        map.animateCamera({
            target: {lat: p_lat, lng: p_lng},
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
            target: {lat: p_lat, lng:p_lng},
            zoom: 18,
            duration: 1000,
            padding: 0  // default = 20px
        }, function() {
            map.setClickable(true);
            //alert("Camera target has been changed");

        });

        rider_pickup_marker = map.addMarker({
                    'position':{lat: p_lat,lng: p_lng},
                    'icon' : 'img/pick-up-pin.png',
                    animation: plugin.google.maps.Animation.DROP
                });

    }
           
       
       
   
   }



   
   function dropoffmap(ongmap,long,lat){
       // latitude2=lat;
          // longitude2=long;


      
          if(ongmap){//plot on google map
            
            ons.notification.confirm({
                message: __('Navigation to rider dropoff location will be performed using Google Maps App'),
                // or messageHTML: '<div>Message in HTML</div>',
                title: '',
                buttonLabels: [__('Continue'),'Cancel'],
                animation: 'default', // or 'none'
                primaryButtonIndex: 0,
                cancelable: false,
                callback: function(index) {
                    
                    if(!index){
                        // 0-: Button index from the left
                        //window.open("https://www.google.com/maps/dir/?api=1&origin=" + driver_lat + "," + driver_lng +"&destination="+lat+","+long+"&travelmode=driving&dir_action=navigate");
                        //window.open("google.navigation:q=" + lat + "," + long+"&mode=d",'_system') //using intent
                        window.open(`geo:?q=${lat},${long}`,'_system');
                    
                    }/* else if(index == 1){
                        //window.open(`https://waze.com/ul?ll=\$${lat}%2C\$${long}&amp;navigate=yes`,'_system') //using intent
                        window.open(`geo:?q=${lat},${long}`,'_system')                    
                    } */else{

                        return;
                    // -1: Cancel
                    }
                    
                }
            });
      
              
              return;
          }

            if(track_driver_on_map){
                track_driver_on_map = 0;
            }else{
                track_driver_on_map = 1;
                if(driver_lat && driver_lng){
                    map.setClickable(false);
                    map.animateCamera({
                        target: {lat: driver_lat, lng: driver_lng},
                        zoom: 18,
                        duration: 1000,
                        padding: 0  // default = 20px
                    }, function() {
                        map.setClickable(true);
                        //alert("Camera target has been changed");

                    }); 
                }  
                return;     
            }
          
          var d_lng = parseFloat(long);
          var d_lat = parseFloat(lat);
          
          
          if(rider_dropoff_marker){
   
            rider_dropoff_marker.setPosition({
               lat:d_lat,
               lng: d_lng                                            
           });
   
           map.setClickable(false);
           map.animateCamera({
               target: {lat: d_lat, lng: d_lng},
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
               target: {lat: d_lat, lng:d_lng},
               zoom: 18,
               duration: 1000,
               padding: 0  // default = 20px
           }, function() {
               map.setClickable(true);
               //alert("Camera target has been changed");
   
           });
   
           rider_dropoff_marker = map.addMarker({
                       'position':{lat: d_lat,lng: d_lng},
                       'icon' : 'img/drop-off-pin.png',
                       animation: plugin.google.maps.Animation.DROP
                   });
       }
              
          
          
      
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






$('.rate-star').on('click', function(){
    var star_level = $(this).data('level');
    switch(star_level){
        case 1:
        ride_rating = 1;
        $('.rate-star').css('color','black');
        $('#star-level-1').css('color','yellow');        
        break;

        case 2:
        ride_rating = 2;
        $('.rate-star').css('color','black');
        $('#star-level-1').css('color','yellow');
        $('#star-level-2').css('color','yellow');      
        break;

        case 3:
        ride_rating = 3;
        $('.rate-star').css('color','black');
        $('#star-level-1').css('color','yellow');
        $('#star-level-2').css('color','yellow');
        $('#star-level-3').css('color','yellow');        
        break;

        case 4:
        ride_rating = 4;
        $('.rate-star').css('color','black');
        $('#star-level-1').css('color','yellow');
        $('#star-level-2').css('color','yellow');
        $('#star-level-3').css('color','yellow');
        $('#star-level-4').css('color','yellow');        
        break;

        case 5:
        ride_rating = 5;
        $('.rate-star').css('color','black');
        $('#star-level-1').css('color','yellow');
        $('#star-level-2').css('color','yellow');
        $('#star-level-3').css('color','yellow');
        $('#star-level-4').css('color','yellow');
        $('#star-level-5').css('color','yellow');        
        break;

    }

})


function rate_ride(bookingid,comment){
    
    if(!bookingid){
        $('#rate-ride').hide({animation:"fade"}); 
        return;
    }
    
    loading.show();
    $.ajax({ 
        url: ajaxurl, 
        method: 'GET',
        crossDomain:true,
        timeout : 20000,
        xhrFields: {withCredentials: true},
        data: { 'action_get' : 'rateride', 'rating':ride_rating,'bookingid':bookingid,'comment':comment},
        dataType: 'json',
        success: function(data){
            loading.hide();
            if(data.hasOwnProperty('error')){
                ons.notification.alert(data.error);
                return;
            }
           
           //$('#rate-ride').hide({animation:"fade"});
           document.querySelector('#myNavigator').popPage({animation: 'fade'});
           
        },
        error: function(){
            
            loading.hide();
            ons.notification.alert(__("Error communicating with server"));
            return;
        } 


    });
}



function showbookingdetails(bookid){
    

    document.querySelector('#myNavigator').pushPage('html/bookingdetails.html',{animation:'fade',data:{'bookid':bookid}});

    

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
    var operation_city = $('#op-city').find(':selected').val(); 
    var car_category = $('#car-cat').find(':selected').val(); 
    var country_2c_code = $('#country-flag-profile').data('country');
    var country_call_code = $('#tel-code-profile').data('dialcode');


    if(!user_email){
        ons.notification.alert(__("Email field cannot be empty"),{title:""});
        return;
    }

    if(!user_phone){
        ons.notification.alert(__("Phone number field cannot be empty"),{title:""});
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

    var post_data = {'action':'updateUserProfile','country_code' : country_2c_code,'country_dial_code' : country_call_code,'op_city':operation_city,'car_category': car_category,'phone':user_phone,'email':user_email,'oldpassword':old_password,'newpassword':new_password};
    
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

                ons.notification.alert(data_obj.success, {title:"",buttonLabels:[__('Restart App')],callback: function(){
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
    get_available_drivers_timer = setInterval(function(){
        $.ajax({ 
        url: ajaxurl, 
        method: 'GET',
        crossDomain:true,
        timeout : 10000,
        xhrFields: {withCredentials: true},
        data: { 'action_get' : 'getavailablecitydrivers','city':city},
        dataType: 'json',
        success: function(data){
            
            if(data.hasOwnProperty('error')){
                //ons.notification.alert(data.error);
                return;
            }  
            
            console.log(data);

            if(data.hasOwnProperty('success')){

                //clear old markers
                for(var key in city_drivers_markers){
                    city_drivers_markers[key].setVisible(false);
                }
                
                //populate map with drivers location data
                data.drivers_locations.forEach(function(options){
                    if(city_drivers_markers.hasOwnProperty('drv'+options.driver_id)){
                        city_drivers_markers['drv'+options.driver_id].setPosition(options.position); 
                        city_drivers_markers['drv'+options.driver_id].setVisible(true);
                    }else{
                        city_drivers_markers['drv'+options.driver_id] = map.addMarker(options);
                    }
                });


                $('#driver-stats-completed').html(data.completed_trips);
                let today_earnings_default_cur = parseFloat(data.driver_today_earning);
                let today_earnings_city_cur = today_earnings_default_cur * city_curency_exchange_rate;
                
                
                $('#driver-stats-earning').html(city_curency_symbol + Number(today_earnings_city_cur).toMoney(2, ".", ""));
                


            }
           
            
        },
        error: function(){
            
            //ons.notification.alert("Error communicating with server");
            return;
        } 


    });
    },20000)
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





function mapinitialize(){

          
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
                zoom: 10
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
               
                /* if(!APP_DEBUG){
                    requestLocationAccuracy();                        
                } */
                
                cordova.plugins.backgroundMode.isIgnoringBatteryOptimizations(function(isIgnoring) {
                    console.log(isIgnoring);

                    if(!isIgnoring){

                        ons.notification.confirm({
                            message: __('For background mode operation to work satisfactorily, please disable all battery optimizations on this App in your phone settings'),
                            // or messageHTML: '<div>Message in HTML</div>',
                            title: "",
                            buttonLabels: [__('Continue'), __('Cancel')],
                            animation: 'default', // or 'none'
                            primaryButtonIndex: 1,
                            cancelable: true,
                            callback: function(index) {
                             
                              if(!index){
                                // 0-: Button index from the left
                                cordova.plugins.backgroundMode.on('activate', function() {
                                    cordova.plugins.backgroundMode.disableWebViewOptimizations();
                                });
                                cordova.plugins.backgroundMode.openBatteryOptimizationsSettings();
                              }else{
                                close_dialog_enable = 0;
                                // -1: Cancel
                              }
                             
                            }
                        }); 

                    }else{
                        cordova.plugins.backgroundMode.on('activate', function() {
                            cordova.plugins.backgroundMode.disableWebViewOptimizations();
                        });
                    }

                    

                })

                //get session id if available
                let sess_id = localStorage.getItem('sess_id');
                if(sess_id){
                    ajaxurl = siteurl + `/ajaxdriver.php?sess_id=${sess_id}`;
                }
                
                checkDriverLoginStatus();
                updateDriverLocation();         

                

                
            }); 

            map.on(plugin.google.maps.event.MAP_CLICK, function(latLng) {

               return;

            });


            map.on(plugin.google.maps.event.MAP_DRAG, function() {
    
                $('#mylocationbtn').show();
            
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
    document.querySelector('#mySplitter').left.close();
    ons.notification.toast(__('Getting your current location...'), {
        timeout: 2000
      });
    map.getMyLocation({"enableHighAccuracy":false},function(location){
                
        driver_lat = location.latLng.lat;
        driver_lng = location.latLng.lng ;

        $('#mylocationbtn').hide();

        if(driver_marker){

            driver_marker.setPosition({
                lat:location.latLng.lat,
                lng: location.latLng.lng                                            
            });

            map.setClickable(false);
            map.animateCamera({
                target: {lat: location.latLng.lat, lng: location.latLng.lng},
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
                target: {lat: location.latLng.lat, lng: location.latLng.lng},
                zoom: 18,
                duration: 1000,
                padding: 0  // default = 20px
            }, function() {
                map.setClickable(true);
                //alert("Camera target has been changed");

            });

            driver_marker = map.addMarker({
                        'position':{lat: location.latLng.lat,lng: location.latLng.lng},
                        'icon' : 'img/city-driver-icon-1.png',
                        animation: plugin.google.maps.Animation.DROP
                    });

            driver_marker._isReady = true;
        }

          
        

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

	var radlat1 = Math.PI * lat1/180;
	var radlat2 = Math.PI * lat2/180;
	var theta = lon1-lon2;
	var radtheta = Math.PI * theta/180;
	var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
	if (dist > 1) {
		dist = 1;
	}
	dist = Math.acos(dist);
	dist = dist * 180/Math.PI;
	dist = dist * 60 * 1.1515;
	if (unit=="K") { dist = dist * 1.609344 }
	if (unit=="N") { dist = dist * 0.8684 }
	return dist;
}



function dialcallcenter(){

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

    return;

    

}



function setavailable(){
    if(processing_command)return;

    if(account_activation_status == 0){
        ons.notification.alert(__("We are reviewing your account information. You will not be able to receive ride requests for now. Please contact support for more details"),{title:"", cancelable:false});
        return;
    }
    
    processing_command = 1;
    
    $('#driver-available-spinner').show();
    var post_data = {'action':'setAvailability','status':driver_availability};

    $.ajax({
        url: ajaxurl,
        type: 'POST',
        timeout : 20000,
        crossDomain:true,
        xhrFields: {withCredentials: true},
        data: post_data,
        success: function (data, status)
        {
            processing_command = 0;
            
            $('#driver-available-spinner').hide();  
            try{
                var data_obj = JSON.parse(data);
            }catch(e){
                return;
            }

            if(data_obj.hasOwnProperty('error')){
                
                ons.notification.alert(data_obj.error,{title:""});
            }

            if(data_obj.hasOwnProperty('success')){                
                if(data_obj.status == 1){
                    driver_availability = true;
                    driver_online_sound.play();
                    $("#driver-available-btn").css('background-color','#2ac32d');
                    $('#driver-online-indicator').fadeIn();
                    $('#available-status-text').text(__('Online'));
                }else{
                    driver_offline_sound.play();
                    driver_availability = false;
                    $("#driver-available-btn").css('background-color','grey');
                    $('#driver-online-indicator').fadeOut();
                    $('#available-status-text').text(__('Offline'));
                }
            }


        },
        error: function(jqXHR,textStatus, errorThrown) { 
            processing_command = 0; 
            
            $('#driver-available-spinner').hide();
            //$("#driver-available-btn").css('background-color','grey');
            ons.notification.alert(__("Error communicating with server"));
            return;
        }

    });
    
}


function currentpage_show(){
    
    
    document.querySelector('#myNavigator').pushPage('html/current.html',
            {
            animation: 'fade'             
            }
    );

    document.querySelector('#mySplitter').left.close();

}



function Login_show(){
    
    
    document.querySelector('#myNavigator').pushPage('login.html',
        {
            animation: 'fade'             
        }
    );
}



function Signup_show(){
    
    document.querySelector('#myNavigator').pushPage('signup.html',
        {
            animation: 'fade'             
        }
    );

}


function regstep1(){

    /* document.querySelector('#myNavigator').pushPage('vehicledetailsreg.html',
        {
            animation: 'fade'             
        }
    );

    return; */
    
    var new_driver_firstname = $('#firstname').val();
    var new_driver_lastname = $('#lastname').val();
    var new_driver_address = $('#address').val();
    var new_driver_state = $('#state').val();
    var new_driver_phone = $('#phone').val();
    var new_driver_email = $('#reg_email').val();
    var new_driver_pwd = $('#reg_password').val();
    var new_driver_cpwd = $('#reg_rpassword').val();

    if(driver_registration_data.driver_photo == ''){
        ons.notification.alert(__("A clear photo of you is required"),{title:""});
        return;
    }

    if(new_driver_firstname == '' || new_driver_firstname.length < 2){
        ons.notification.alert(__("Firstname required"),{title:""});
        return;
    }

    if(new_driver_lastname == '' || new_driver_lastname.length < 2){
        ons.notification.alert(__("Lastname required"),{title:""});
        return;
    }

    if(new_driver_address == '' || new_driver_address.length < 2){
        ons.notification.alert(__("Address required"),{title:""});
        return;
    }

    if(new_driver_state == '' || new_driver_state.length < 2){
        ons.notification.alert(__("State required"),{title:""});
        return;
    }

    if(new_driver_phone == '' || new_driver_phone.length < 5){
        ons.notification.alert(__("Phone number is invalid"),{title:""});
        return;
    }

    if(new_driver_phone.indexOf('+') != -1){
        ons.notification.alert(__("Please do not include the international dial code (+___) in the phone number field"),{title:""});
        return;
    }

    var re = /\S+@\S+\.\S+/;
    if(!re.test(new_driver_email)){
        ons.notification.alert(__("Email is invalid"),{title:""});
        return;
    }


    if(new_driver_pwd.length < 8){
        ons.notification.alert(__("Password must not be less than 8 characters"),{title:""});
        return;
    }

    if(new_driver_pwd == '' || new_driver_cpwd == '' || new_driver_pwd !== new_driver_cpwd){
        ons.notification.alert(__("Passwords do not match"),{title:""});
        return;
    }

    //validation complete. store values
    driver_registration_data.country_2c_code = $('#country-flag-reg').data('country');
    driver_registration_data.country_call_code = $('#tel-code-reg').data('dialcode');
    driver_registration_data.firstname = new_driver_firstname;
    driver_registration_data.lastname = new_driver_lastname;
    driver_registration_data.address = new_driver_address;
    driver_registration_data.state = new_driver_state;
    driver_registration_data.phone = new_driver_phone;
    driver_registration_data.email = new_driver_email;
    driver_registration_data.password = new_driver_pwd;

    console.log(driver_registration_data);

    document.querySelector('#myNavigator').pushPage('vehicledetailsreg.html',
        {
            animation:'fade'             
        }
     );
    

}


function regstep2(){


    /* document.querySelector('#myNavigator').pushPage('bankdetails.html',
        {
            animation: 'fade'             
        }
    );

    return; */
    
    var new_driver_ride_id = $('#vehicle-cat').find(':selected').data('id');
    var new_driver_vehicle_model = $('#carmake').val();
    var new_driver_license_plate_number = $('#lplatenum').val();
    var new_driver_reg_num = "";//$('#regnum').val();
    var new_driver_vehicle_paint_color = $('#paintcolor').find(':selected').val();
    var new_driver_city_route = $('#cityroute').find(':selected').val();

    if(driver_registration_data.drivers_license_photo == ''){
        ons.notification.alert(__("Upload a scanned copy of your driving license"),{title:""});
        return;
    }


    if(driver_registration_data.road_worthiness_cert == ''){
        ons.notification.alert(__("Upload a scanned copy of your road worthiness certificate"),{title:""});
        return;
    }


    if(new_driver_vehicle_model == '' || new_driver_vehicle_model.length < 3){
        ons.notification.alert(__("Enter a valid vehicle model"),{title:""});
        return;
    }


    if(new_driver_license_plate_number == '' || new_driver_license_plate_number.length < 2){
        ons.notification.alert(__("Enter a valid license plate number of your vehicle"),{title:""});
        return;
    }


    if(new_driver_reg_num == '' || new_driver_reg_num.length < 3){
        //ons.notification.alert(__("Enter your vehicle registration number"),{title:""});
        //return;
    }


    driver_registration_data.car_type = new_driver_ride_id;
    driver_registration_data.car_model = new_driver_vehicle_model;
    driver_registration_data.car_plate_num = new_driver_license_plate_number;
    driver_registration_data.car_reg_num = new_driver_reg_num;
    driver_registration_data.car_color = new_driver_vehicle_paint_color;
    driver_registration_data.operation_city = new_driver_city_route;

    document.querySelector('#myNavigator').pushPage('bankdetails.html',
        {
            animation:'fade'             
        }
     );



}

function regstep3(){

    var new_driver_acc_name = $('#acc-holders-name').val();
    var new_driver_acc_num = $('#acc-number').val();
    var new_driver_bank_code = $('#banklist').find(':selected').val();
    var new_driver_bank_name = $('#banklist').find(':selected').text();
    var new_driver_bank_swift = "";//$('#bank-swift').val();

    if(new_driver_bank_code == 'xxx'){    
        new_driver_bank_code = $('#bank-code').val();
        new_driver_bank_name = $('#bank-name').val();
    }

    
    if(new_driver_acc_name == '' || new_driver_acc_name.length < 3){
        ons.notification.alert(__("Enter your bank account name"),{title:""});
        return;      
    }

    if(new_driver_acc_num == '' || new_driver_acc_num.length < 3){
        ons.notification.alert(__("Enter your bank account number"),{title:""});
        return;      
    }

    if(new_driver_bank_name == '' || new_driver_bank_name.length < 3){
        ons.notification.alert(__("Enter the name of your bank"),{title:""});
        return;      
    }

    if(new_driver_bank_code == '' || new_driver_bank_code.length < 3){
        //ons.notification.alert("Enter your bank code.",{title:""});
        //return;      
    }


    if(new_driver_bank_swift == '' || new_driver_bank_swift.length < 3){
        //ons.notification.alert("Enter your bank SWIFT / BIC code.",{title:""});
        //return;      
    }

    
    if(!$('#terms-accept').prop('checked')){
        ons.notification.alert(__("You must accept our terms and conditions to proceed"),{title:""});
        return; 
    }

    driver_registration_data.account_holders_name = new_driver_acc_name;
    driver_registration_data.account_number = new_driver_acc_num;
    driver_registration_data.bank_name = new_driver_bank_name;
    driver_registration_data.bank_code = new_driver_bank_code;
    driver_registration_data.bank_swift_code = new_driver_bank_swift;
    let referral_code = $('#ref_code').val();
    driver_registration_data.referal_code = referral_code.length > 10 ? '' : referral_code;

    
    loading.show();

    if(USE_FIREBASE_PHONE_AUTH && !firebase_phone_number_verified){
        //using firebase phone auth but user phone has not been verified. 

        if(!resend_code_btn_status){
            ons.notification.alert(__("Cannot validate your account at this time. Please wait a while then retry"),{title:""});
            loading.hide();
            return;
        }


        var post_data = {'action':'driverRegister','driver_reg_data':driver_registration_data,'validate_only':1};       
        jQuery.ajax({
        url: ajaxurl,
        method: 'POST',
        timeout : 60000,
        crossDomain:true,
        xhrFields: {withCredentials: true},
        data: post_data,
        success: function (data, status)
            {
                
                try{
                    //console.log(data);
                    var data_obj = JSON.parse(data);

                }catch(e){
                    loading.hide();
                    ons.notification.alert(__("Error communicating with server"),{'title':""}); 
                    return;
                }


                if(data_obj.hasOwnProperty('error')){
                    loading.hide();
                    ons.notification.alert(data_obj.error, {'title':''});  
                    return;                  

                }


                
                if(data_obj.hasOwnProperty('success')){
                    
                    //successful validation. let's send the verification SMS
                    
                           
                    //send verification SMS
                    cordova.plugins.firebase.auth.verifyPhoneNumber("+" + driver_registration_data.country_call_code + driver_registration_data.phone, 0).then(function(verificationId) {
                        // pass verificationId to signInWithVerificationId
                        firebase_phone_auth_verificationid = verificationId;
                        loading.hide();
                        verifyphone("+" + driver_registration_data.country_call_code + driver_registration_data.phone);
                        ons.notification.toast(__("Verification code sent..."),{
                            timeout: 2000
                        });
                    }).catch(function(e){
                        loading.hide();
                        ons.notification.alert(__("Error sending verification code. Please retry"),{title:""});
                        console.log(e);
                        return;
                    });
                    
                }

        
            },
            error: function() { 
                loading.hide();
                ons.notification.alert(__("Error communicating with server"),{'title':""});
                return;            
            } 

        });   

        return;

    }
    
    var post_data = {'action':'driverRegister','driver_reg_data':driver_registration_data,'validate_only':0};       
    jQuery.ajax({
    url: ajaxurl,
    method: 'POST',
    timeout : 60000,
    crossDomain:true,
    xhrFields: {withCredentials: true},
    data: post_data,
    success: function (data, status)
        {
            loading.hide();     
            console.log(data);
            try{
                //console.log(data);
                var data_obj = JSON.parse(data);

            }catch(e){
            
                ons.notification.alert(__("Error communicating with server"),{'title':""});                
                return;
            }


            if(data_obj.hasOwnProperty('error')){
            
                ons.notification.alert(data_obj.error, {title:''});            
                return;                  

            }


            
            if(data_obj.hasOwnProperty('success')){
                
                document.querySelector('#myNavigator').popPage(
                    {
                        animation: 'fade',
                        times : 3,
                        callback : function(){
                            ons.notification.alert(__("Thank you for signing up. Please login"), {title:''});            
                            return; 
                        }   
                    }
                );
                return;
            }

    
        },
        error: function() { 
            loading.hide();
            ons.notification.alert(__("Error communicating with server"),{'title':""});
            return;            
        } 

    });   



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
    
    
    var post_data = {'action':'driverLogin','phone':phone,'password':password,'country_dial_code':country_call_code, 'timezone':user_timezone, 'display_lang':selected_lang.code};

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
                ons.notification.alert("Error communicating with server",{title:""});
                return;
            }

            if(data_obj.hasOwnProperty('error')){
                ons.notification.alert(data_obj.error,{title:""});
                return;
            }


            if(data_obj.hasOwnProperty('is_activated')){

                account_activation_status = data_obj.is_activated;
                                
                if(data_obj.is_activated === "0"){

                    
                    /* verify();
                    return; */
                    /* ons.notification.alert("Your Account is not active. Contact Support.");
                    return; */
                }
                    

                    if(data_obj.hasOwnProperty('uncompleted_bk') && data_obj.uncompleted_bk > 0){                        
                        ons.notification.alert(__("You have an uncompleted booking. You will not be able to receive ride requests until you finalize the booking"), {title:"",buttonLabels:[__('View bookings')],callback: function(){
                            //navigator.app.exitApp();
                            bookingspage_show();
                        }});
                    }

                    setTimeout(updatepushnotificationtoken(), 5000);

                    clearInterval(driver_location_update_timer_id);
                    setDriverLocation();
                    let location_update_interval = 15000;
                    if(data_obj.hasOwnProperty('app_settings') && data_obj.app_settings.hasOwnProperty('driver_location_update_interval')){
                        if(parseInt(data_obj.app_settings.driver_location_update_interval) > 5){
                            location_update_interval = parseInt(data_obj.app_settings.driver_location_update_interval) * 1000;
                        }else{
                            location_update_interval = 5000;
                        }                        
                    }

                    driver_location_update_timer_id = setInterval(setDriverLocation,location_update_interval);

                    if(data_obj.hasOwnProperty('wallet_amt')){
                                
                        wallet_amount = data_obj.wallet_amt;
                        wallet_history_items = data_obj.wallet_history;  
                        
                        if(data_obj.hasOwnProperty('driver_min_wallet_balance')){
                            if(parseFloat(data_obj.driver_min_wallet_balance) >=  wallet_amount){
                                setTimeout(function(){
                                    ons.notification.alert(__("Your wallet balance is low. Please add money to your wallet to receive ride requests"),{title:"", cancelable:false});
                                }, 3000);
                            }
                        }
                    }



                    if(data_obj.hasOwnProperty('default_currency')){
                                
                        default_currency_data = data_obj.default_currency;
                                     
                    }


                    if(data_obj.hasOwnProperty('app_settings')){
                                
                        app_settings = data_obj.app_settings;
                                     
                    }


                    if(data_obj.hasOwnProperty('sess_id')){                                
                        session_id = data_obj.sess_id; 
                        ajaxurl = siteurl + `/ajaxdriver.php?sess_id=${session_id}`;
                        localStorage.setItem('sess_id', session_id);                                   
                    }

                    

                    if(data_obj.hasOwnProperty('profileinfo')){
                        userprofileinfo = data_obj.profileinfo;
                        getavailablecitydrivers(userprofileinfo.city_id);
                        updatefcmtopics(userprofileinfo.city_id)
                        var city_cars =  routetariffs.result[userprofileinfo.city_id].cars;
                        for(var key in city_cars){
                            if(city_cars[key].id == userprofileinfo.driver_ride_id){
                                driver_ride_tariff = city_cars[key];
                            }
                        }

                        if(typeof driver_ride_tariff === 'undefined'){
                            
                            ons.notification.confirm({
                                message: __('Server returned Invalid data'),
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
                                    login();
                                    // -1: Cancel
                                  }
                                 
                                }
                              });

                            return;
                        }
                        
                        if(userprofileinfo.city_lat != ''){
                            map.setClickable(false);
                            map.animateCamera({
                                target: {lat: userprofileinfo.city_lat, lng: userprofileinfo.city_lng},
                                zoom: 13,
                                duration: 1000,
                                padding: 0  // default = 20px
                            }, function() {
                                map.setClickable(true);
                                //alert("Camera target has been changed");
                
                            });
                        }

                        $('#driver-image-preload').attr('src',userprofileinfo.photo);

                        if(data_obj.hasOwnProperty('fb_conf')){
                            init_fb_rtdb(data_obj.fb_conf,userprofileinfo.driverid);                      
                        }
                                       
                    }

                   

                    if(data_obj.hasOwnProperty('currency_data')){
                        city_curency_symbol = data_obj.currency_data.cur_symbol;
                        city_curency_code = data_obj.currency_data.cur_code;
                        city_curency_exchange_rate = data_obj.currency_data.cur_exchng;
                        city_curency_name = data_obj.currency_data.cur_name;                                       
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

                    if(data_obj.hasOwnProperty('availability')){
                    
                        if(data_obj.availability == "1"){
                            driver_availability = true;
                            if(!APP_DEBUG)driver_online_sound.play();
                            $("#driver-available-btn").css('background-color','#2ac32d');
                            $('#driver-online-indicator').fadeIn();
                            $('#available-status-text').text(__('Online'));
                        }else{
                            driver_availability = false;
                            if(!APP_DEBUG)driver_offline_sound.play();
                            $("#driver-available-btn").css('background-color','grey');
                            $('#driver-online-indicator').fadeOut();
                            $('#available-status-text').text(__('Offline'));
                        }                                       
                    }



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
                                
                            if(APP_VERSION_ANDROID != data_obj.app_version_ios){
                                
                                                            
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


        },
        error: function(jqXHR,textStatus, errorThrown) {  
            
            loading.hide();
            ons.notification.alert(__("Error communicating with server"),{title:""});
            return;
            
        }

    });
    
};



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
            regstep3();
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

                
                ons.notification.alert(data_obj.success, {buttonLabels:['Restart App'],title:"",callback: function(){
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






function logout(){
    loading.show();
    var post_data = {'action':'driverLogout'};

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
                //routetariffs = undefined;
                notifications_data = '';
                earnings_data = '';
                bookings_data =[];
                bookings_data = {'pend_onride':'','completed':'','cancelled':''};

                if(map){
                    map.clear();
                    city_drivers_markers = {}; //clear drivers marker handles
                    if(route_polyline){
                        route_polyline.remove();
                        route_polyline = null;                     
                    }
                }

                
                marker1 = undefined;
                market2 = undefined;
                rider_pickup_marker = undefined;
                rider_dropoff_marker = undefined;
                markerds1 = undefined;
                markerds2 = undefined;

                                
                
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



function showsoftlicenses(){
    
    loading.show();
        
    document.querySelector('#myNavigator').pushPage('html/software-licenses.html',
            {
            animation: 'fade'             
            }
    );

    document.querySelector('#mySplitter').left.close();

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
        ons.notification.alert(__("Error communicating with server"),{title:""});
        console.log(e);
    });

}





function resendCode(){

    

    var post_data = {'action':'userResendCode'};
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



function checkDriverLoginStatus(){
    
    
    var post_data = {'action':'checkDriverLoginStatus','timezone':user_timezone, 'display_lang':selected_lang.code};

    $.ajax({
        url: ajaxurl,
        type: 'POST',
        timeout : 20000,
        crossDomain:true,
        xhrFields: {withCredentials: true},
        data: post_data,
        success: function (data, status)
        {
            
            
            console.log(data);
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
                        checkDriverLoginStatus();
                    // -1: Cancel
                    }
                    
                }
                });
                return;
            }

            sync_with_servertime(); //get time difference between local time and server time in order to sync the two

            if(data_obj.hasOwnProperty('driver_app_update_url_ios')){                                
                APP_UPDATE_URL_IOS = data_obj.driver_app_update_url_ios;                
            }

            if(data_obj.hasOwnProperty('driver_app_update_url_android')){                                
                APP_UPDATE_URL_ANDROID = data_obj.driver_app_update_url_android;                
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
                        
                    if(APP_VERSION_ANDROID != data_obj.app_version_ios){
                        
                                                    
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

            

            if(data_obj.hasOwnProperty('tariff_data')){
                routetariffs = data_obj.tariff_data;
                $('#rides-img-preload').html(data_obj.tariff_data.result.preloadrides);                          
            }


            if(data_obj.hasOwnProperty('referral_data')){
                referraldata = data_obj.referral_data;     
                                                   
            }

            if(data_obj.hasOwnProperty('app_settings')){
                                
                app_settings = data_obj.app_settings;
                             
            }


                        
            
            if(data_obj.hasOwnProperty('loggedin')){
                if(!data_obj.loggedin){
                    Login_show();
                    return;
                }else{

                    if(data_obj.hasOwnProperty('is_activated')){

                        account_activation_status = data_obj.is_activated;
                        /* if(data_obj.is_activated === "0"){
                            
                            verify();
                            return;
                        } */

                        /* if(data_obj.is_activated === "0"){
                            logout();
                            ons.notification.alert("Your Account is not active. Contact Support.");
                            return;
                        }    */                     
                        
                   }



                   if(data_obj.hasOwnProperty('uncompleted_bk') && data_obj.uncompleted_bk > 0){                        
                        ons.notification.alert(__("You have an uncompleted booking. You will not be able to receive ride requests until you finalize the booking"), {title:"",buttonLabels:[__('View bookings')],callback: function(){
                            //navigator.app.exitApp();
                            bookingspage_show();
                        }});
                    }


                    startscreen.hide();
                    circletransition();

                    setTimeout(updatepushnotificationtoken(), 5000); 
                    setDriverLocation();
                    let location_update_interval = 15000;
                    if(data_obj.hasOwnProperty('app_settings') && data_obj.app_settings.hasOwnProperty('driver_location_update_interval')){
                        if(parseInt(data_obj.app_settings.driver_location_update_interval) > 5){
                            location_update_interval = parseInt(data_obj.app_settings.driver_location_update_interval) * 1000;
                        }else{
                            location_update_interval = 5000;
                        }                        
                    }
                    driver_location_update_timer_id = setInterval(setDriverLocation,location_update_interval);

                    if(data_obj.hasOwnProperty('wallet_amt')){
                        
                                
                        wallet_amount = data_obj.wallet_amt;
                        wallet_history_items = data_obj.wallet_history;   
                        
                        if(data_obj.hasOwnProperty('driver_min_wallet_balance')){
                            if(parseFloat(data_obj.driver_min_wallet_balance) >=  wallet_amount){
                                setTimeout(function(){
                                    ons.notification.alert(__("Your wallet balance is low. Please add money to your wallet to receive ride requests."),{title:"", cancelable:false});
                                }, 3000);
                            }
                        }
                    }

                    if(data_obj.hasOwnProperty('sess_id')){                                
                        session_id = data_obj.sess_id; 
                        ajaxurl = siteurl + `/ajaxdriver.php?sess_id=${session_id}`;
                        localStorage.setItem('sess_id', session_id);                                   
                    }

                    if(data_obj.hasOwnProperty('default_currency')){
                                
                        default_currency_data = data_obj.default_currency;
                                     
                    }


                    if(data_obj.hasOwnProperty('driver_time_online')){
                        $('#driver-stats-time-online').html(data_obj.driver_time_online);
                    }

                    if(data_obj.hasOwnProperty('completed_trips')){
                        $('#driver-stats-completed').html(data_obj.completed_trips);
                    }

                    if(data_obj.hasOwnProperty('driver_today_earning')){
                        let today_earnings_default_cur = parseFloat(data_obj.driver_today_earning);
                        let today_earnings_city_cur = today_earnings_default_cur * city_curency_exchange_rate;
                        $('#driver-stats-earning').html(city_curency_symbol + Number(today_earnings_city_cur).toMoney(2, ".", ""));
                    }


                    
                    if(data_obj.hasOwnProperty('profileinfo')){
                        userprofileinfo = data_obj.profileinfo;
                        getavailablecitydrivers(userprofileinfo.city_id);
                        updatefcmtopics(userprofileinfo.city_id);
                        var city_cars =  routetariffs.result[userprofileinfo.city_id].cars;
                        
                        for(var key in city_cars){
                            if(city_cars[key].id == userprofileinfo.driver_ride_id){
                                driver_ride_tariff = city_cars[key];
                            }
                        }

                        if(typeof driver_ride_tariff === 'undefined'){
                            
                            ons.notification.confirm({
                                message: __('Server returned Invalid data'),
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
                                    checkDriverLoginStatus();
                                    // -1: Cancel
                                  }
                                 
                                }
                              });

                            return;
                        }

                                                
                        if(userprofileinfo.city_lat != ''){
                            map.setClickable(false);
                            map.animateCamera({
                                target: {lat: userprofileinfo.city_lat, lng: userprofileinfo.city_lng},
                                zoom: 13,
                                duration: 1000,
                                padding: 0  // default = 20px
                            }, function() {
                                map.setClickable(true);
                                //alert("Camera target has been changed");
                
                            });
                        }

                        $('#driver-image-preload').attr('src',userprofileinfo.photo);

                        
                        if(data_obj.hasOwnProperty('fb_conf')){
                            init_fb_rtdb(data_obj.fb_conf,userprofileinfo.driverid);                      
                        }
                                       
                    }

                    
                    

                    if(data_obj.hasOwnProperty('currency_data')){
                        city_curency_symbol = data_obj.currency_data.cur_symbol;
                        city_curency_code = data_obj.currency_data.cur_code;
                        city_curency_exchange_rate = data_obj.currency_data.cur_exchng;
                        city_curency_name = data_obj.currency_data.cur_name;                                       
                    }

                    
                    if(data_obj.hasOwnProperty('online_pay')){
                        online_payment_info = data_obj.online_pay;                                       
                    }

                    if(data_obj.hasOwnProperty('cc_num')){
                        call_center_num = data_obj.cc_num;                                       
                    } 
                    
                    
                    if(data_obj.hasOwnProperty('availability')){
                                
                        if(data_obj.availability == "1"){
                            driver_availability = true;
                            if(!APP_DEBUG)driver_online_sound.play();
                            $("#driver-available-btn").css('background-color','#2ac32d');
                            $('#driver-online-indicator').fadeIn();
                            $('#available-status-text').text(__('Online'));
                        }else{
                            driver_availability = false;
                            if(!APP_DEBUG)driver_offline_sound.play();
                            $("#driver-available-btn").css('background-color','grey');
                            $('#driver-online-indicator').fadeOut();
                            $('#available-status-text').text(__('Offline'));
                        }                                       
                    }

                                       

                    
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
                    checkDriverLoginStatus();
                    // -1: Cancel
                  }
                 
                }
              });
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
               cordova.plugins.firebase.messaging.unsubscribe("driver-route-" + topics_city_subs_data); //unsubscribe from the old route id topic 

           }
           
           cordova.plugins.firebase.messaging.subscribe("driver-route-" + id); //subscribe to this topic again just incase fcm device token has changed
           localStorage.setItem('fcm_subscribed_city',id);

    }else{
        //no subscribed topic data found. create new         
        localStorage.setItem('fcm_subscribed_city',id);
        cordova.plugins.firebase.messaging.subscribe("driver-route-" + id); //subscribe to this topic
    }
}




function promotions_show(){
    document.querySelector('#myNavigator').pushPage('html/promo.html',
            {
            animation: 'fade'             
            }
    );

    document.querySelector('#mySplitter').left.close();
}


function promocheck(){
    
            
    var post_data = {'action_get':'promocheck'};
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

                ons.notification.alert(data_obj.error,{title:""});
                return;
            }


            if(data_obj.hasOwnProperty('success')){
                
                $('#promo-content').html(data_obj.promodata);

            }

            
        },
        error: function(jqXHR,textStatus, errorThrown) {  
            
            loading.hide();
            ons.notification.alert(__("Error communicating with server"),{title:""});
            return;
            
        }

    });
}




function updateDriverLocation(){

    navigator.geolocation.clearWatch(driver_location_watch_handle);

    driver_location_watch_handle = navigator.geolocation.watchPosition(
        updateOnDriverLocationSuccess, updateOnDriverLocationError, {
            enableHighAccuracy: true, timeout: 5000
        }
    );

}

var processing_out_of_bounds = 0;
function updateOnDriverLocationSuccess(position) {
    
    Latitude = position.coords.latitude;
    Longitude = position.coords.longitude;
    driver_lat = position.coords.latitude;
    driver_lng = position.coords.longitude;

    if(track_driver_on_map){
        
        if(driver_marker){

            driver_marker.setPosition({
                lat:driver_lat,
                lng: driver_lng                                            
            });

            

            map.fromLatLngToPoint({"lat":driver_lat,"lng":driver_lng}, function(driver_marker_pixel_coord){
                    if(driver_marker_pixel_coord[0] < 50 || driver_marker_pixel_coord[0] > (screen.width - 50) || driver_marker_pixel_coord[1] < 150 || driver_marker_pixel_coord[1] > (screen.height - 150)){
                        if(!processing_out_of_bounds){
                            processing_out_of_bounds = 1;
                            map.setClickable(false);
                            map.animateCamera({
                            target: {lat: driver_lat, lng: driver_lng},
                            duration: 1000,
                            }, function() {
                                //alert("Camera target has been changed");
                                map.setClickable(true);
                                processing_out_of_bounds = 0;
                            });
                        }
                    }
            });

            

            /* map.setClickable(false);
            map.moveCamera({
                target: {lat: driver_lat, lng: driver_lng},
                zoom: 18,
                padding: 0  // default = 20px
            }, function() {
                map.setClickable(true);
                
            }); */

            
        }else{
            /* map.setClickable(false);
            map.moveCamera({
                target: {lat: driver_lat, lng: driver_lng},
                zoom: 18,
                padding: 0  // default = 20px
            }, function() {
                map.setClickable(true);
                
            }); */

            driver_marker = map.addMarker({
                        'position':{lat: driver_lat,lng: driver_lng},
                        'icon' : 'img/city-driver-icon-3.png',
                        animation: plugin.google.maps.Animation.DROP
                    });

            driver_marker._isReady = true;
        }
    }

    
    
    
    
}




function updateOnDriverLocationError(error) {
    return;
}



//Save driver coordinates on db with last seen time.
var updating_location = 0;
function setDriverLocation(){
    if(!driver_lat  || !driver_lng){
        return;
    }
    if(updating_location){
        return;
    }
    updating_location = 1;
    
    var post_data = {'action':'setDriverLocation','lat':driver_lat,'long':driver_lng};  
    $.ajax({
        url: ajaxurl,
        type: 'POST',
        timeout : 15000,
        crossDomain:true,
        xhrFields: {withCredentials: true},
        data: post_data,
        success: function (data, status)
        {
            updating_location = 0;
            try{
                var data_obj = JSON.parse(data);
            }catch(e){
                return;
            }           

            

            if(data_obj.hasOwnProperty('driver_time_online')){
                $('#driver-stats-time-online').html(data_obj.driver_time_online);
            }

            if(data_obj.hasOwnProperty('feedback')){
                
                return;
                ons.notification.toast(data_obj.feedback, {
                    timeout: 2000
                  });
                return;
            }

        },
        error: function(jqXHR,textStatus, errorThrown) {
            updating_location = 0;
            return;  
            
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
                        getuserlocation();
                        app_fully_started = 1;
                        setTimeout(function(){
                            if(account_activation_status == 0){
                                ons.notification.alert(__("We are reviewing your account information. You will not be able to receive ride requests for now. Please contact support for more details"),{title:"", cancelable:false});
                            }
                        },2000)
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








function process_route_between_locations(){
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

                map.setClickable(false);

                intra_city_duration = data.direction_details.routes[0].legs[0].duration.value / 60;
                intra_city_distance = data.direction_details.routes[0].legs[0].distance.value / 1000; //default value in metric

                intra_city_duration_text = data.direction_details.routes[0].legs[0].duration.text;
                intra_city_distance_text = data.direction_details.routes[0].legs[0].distance.text;

                route_points = [];
                route_points = plugin.google.maps.geometry.encoding.decodePath(data.direction_details.routes["0"].overview_polyline.points);

                //plot route
                if(route_polyline != null){
                    route_polyline.setVisible(false);
                    route_polyline.setPoints(route_points);
                    route_polyline.setVisible(true);  

                    
                    map.animateCamera({
                    target: route_points,
                    duration: 1000,
                    }, function() {
                        //alert("Camera target has been changed");
                        map.setClickable(true);
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
                    route_polyline.on(plugin.google.maps.event.POLYLINE_CLICK, function(latLng) {
                        
                        map.animateCamera({
                            target: route_points,
                            duration: 1000,
                            }, function() {
                            //alert("Camera target has been changed");
                            map.setClickable(true);
                        });
                    });

                    map.animateCamera({
                        target: route_points,
                        duration: 1000,
                        }, function() {
                            //alert("Camera target has been changed");
                            map.setClickable(true);
                    });

                }

                $('#bookbutton').css('visibility','visible');                                
                $("#bookbutton").removeClass("bounceIn animated").addClass("bounceIn animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                    $(this).removeClass("bounceIn animated");
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













function infopage_show(){
    
        
    document.querySelector('#myNavigator').pushPage('html/info.html',
            {
            animation: 'fade'             
            }
    );

    document.querySelector('#mySplitter').left.close();

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


function referralspage_show(){
    document.querySelector('#myNavigator').pushPage('html/referrals.html',
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


function earningspage_show(){

    document.querySelector('#myNavigator').pushPage('html/earnings.html',
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
      
    
    
    document.querySelector('#myNavigator').pushPage('html/wallet.html',
            {
            animation: 'fade'             
            }
           
    );

    document.querySelector('#mySplitter').left.close();
  
}



function walletwithdraw(){
    if(isNaN(parseInt($('#withdrawAmount').val())) || parseInt($('#withdrawAmount').val()) == 0 ){
        ons.notification.alert(__('Please enter a valid amount to withdraw'),{title:""})  ;
        return;
    }

    var withdraw_amount = $('#withdrawAmount').val();

    loading.show();
    var post_data = {'action':'walletwithdraw','amount':withdraw_amount};       
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
                ons.notification.alert(__("Your withdrawal request has been acknowleged. Your request will be processed soon. You will not be able to make any other request until your current request has been processed"),{title:""});
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





function Vpay() {

    switch(app_settings.default_payment_gateway){

        case "paystack":
        paystackGateway();
        break; 
        
        case "voguepay":
        voguepayGateway();
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

        case "mercadopago":
        mercadopagoGateway();
        break;

        default:
        ons.notification.alert(__('Payment Gateway not available'),{title:""});
        
    } 
      
    
    
}



function customGateway(){
    //add your custom gateway code here  
    //If you are using AJAX set 'action':'customInit' in the data payload. This will call the server file in /drop-files/lib/pgateways/paystack/custom-transaction-init.php. 
    //You can write your payment initialization code in this file.
}


function mercadopagoGateway(){

    if(isNaN(parseInt($('#fundAmount').val())) || parseInt($('#fundAmount').val()) == 0 ){
        ons.notification.alert(__('Please enter a valid amount'),{title:""})  ;
        return;
    }

    var payment_amount = parseInt($('#fundAmount').val() * 100);

    //convert amount to default set currency
    var local_currency_payment_amount = parseInt(payment_amount / city_curency_exchange_rate);

    var metadata = {
                  
        user_id:userprofileinfo.driverid,
        amount: payment_amount,
        cur_symbol:city_curency_symbol,
        cur_code:city_curency_code,
        cur_exchng:city_curency_exchange_rate,
        user_type:1,
        memo:__('Driver App Wallet Funding')
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

      var post_data = {'action':'mercadopagoInit',"data":data};

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
                    
                    ons.notification.alert(__("Transaction initialized successfully. You will be redirected to {---1} website to complete your payment. After your payment is sucessful your wallet will be credited", ['MercadoPago']), {title:"",buttonLabels:[__('Continue')],callback: function(){
                        //navigator.app.exitApp();

                        var inappbrowser = cordova.InAppBrowser.open(data_obj.mercadopago_data, "_blank", 'toolbarcolor=#0f5bbf,hidenavigationbuttons=yes,hideurlbar=yes,closebuttoncolor=#ffffff,zoom=no,location=yes,hidden=yes,toolbar=yes,hidespinner=yes,hardwareback=no');
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

    var local_currency_payment_amount = parseInt(payment_amount / city_curency_exchange_rate);

    var metadata = {

        user_id:userprofileinfo.driverid,
        amount: payment_amount,
        cur_symbol:city_curency_symbol,
        cur_code:city_curency_code,
        cur_exchng:city_curency_exchange_rate,
        user_type:1,
        memo:__('Driver App Wallet Funding')
    };

    var metadata_json = JSON.stringify(metadata);
    var data = {
        email: userprofileinfo.email,
        user_firstname: userprofileinfo.firstname,
        user_lastname: userprofileinfo.lastname,
        user_phone: userprofileinfo.phone,
        amount: payment_amount,
        currency:default_currency_data.iso_code,
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
                    
                    ons.notification.alert(__("Transaction initialized successfully. You will be redirected to {---1} website to complete your payment. After your payment is sucessful your wallet will be credited", ['PesaPal']), {title:"",buttonLabels:[__('Continue')],callback: function(){
                        //navigator.app.exitApp();

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

function stripeGateway(){

    if(isNaN(parseInt($('#fundAmount').val())) || parseInt($('#fundAmount').val()) == 0 ){
        ons.notification.alert(__('Please enter a valid amount'),{title:""})  ;
        return;
    }

    var payment_amount = parseInt($('#fundAmount').val() * 100);

    //convert amount to local currency supported by stripe
    var local_currency_payment_amount = parseInt(payment_amount / city_curency_exchange_rate);


    var data = {
        email: userprofileinfo.email,
        amount: local_currency_payment_amount,
        currency: default_currency_data.iso_code,
        metadata: {           
                  
            user_id:userprofileinfo.driverid,
            amount: payment_amount,
            cur_symbol:city_curency_symbol,
            cur_code:city_curency_code,
            cur_exchng:city_curency_exchange_rate,
            user_type:1,
            memo:__('Driver App Wallet Funding')
             
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
                        //navigator.app.exitApp();

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
    var local_currency_payment_amount = parseInt(payment_amount / city_curency_exchange_rate);


    var data = {
        email: userprofileinfo.email,
        amount: local_currency_payment_amount,
        currency: default_currency_data.iso_code,
        metadata: {           
                  
            user_id:userprofileinfo.driverid,
            amount: payment_amount,
            cur_symbol:city_curency_symbol,
            cur_code:city_curency_code,
            cur_exchng:city_curency_exchange_rate,
            user_type:1,
            memo:__('Driver App Wallet Funding')
             
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
    var local_currency_payment_amount = parseInt(payment_amount / city_curency_exchange_rate);


    var data = {
        email: userprofileinfo.email,
        amount: local_currency_payment_amount,
        currency: default_currency_data.iso_code,
        metadata: {           
                  
            user_id:userprofileinfo.driverid,
            amount: payment_amount,
            cur_symbol:city_curency_symbol,
            cur_code:city_curency_code,
            cur_exchng:city_curency_exchange_rate,
            user_type:1,
            memo:__('Driver App Wallet Funding')
             
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

    //convert amount to local currency supported by midtrans
    var local_currency_payment_amount = parseInt(payment_amount / city_curency_exchange_rate);


    var data = {
        email: userprofileinfo.email,
        amount: local_currency_payment_amount,
        firstname: userprofileinfo.firstname,
        lastname: userprofileinfo.lastname,
        phone: userprofileinfo.country_dial_code + userprofileinfo.phone,
        currency: default_currency_data.iso_code,
        payment_mode: $('#kiosk-mode').prop('checked') == true ? 'kiosk' : 'card',
        metadata: {           
                  
            user_id:userprofileinfo.driverid,
            amount: payment_amount,
            cur_symbol:city_curency_symbol,
            cur_code:city_curency_code,
            cur_exchng:city_curency_exchange_rate,
            user_type:1,
            memo:__('Driver App Wallet Funding')
             
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


function paytrGateway(){

    if(isNaN(parseInt($('#fundAmount').val())) || parseInt($('#fundAmount').val()) == 0 ){
        ons.notification.alert(__('Please enter a valid amount'),{title:""})  ;
        return;
    }

    var payment_amount = parseInt($('#fundAmount').val() * 100);

    //convert amount to default set currency
    var local_currency_payment_amount = parseInt(payment_amount / city_curency_exchange_rate);

    var metadata = {
                  
        user_id:userprofileinfo.driverid,
        amount: payment_amount,
        cur_symbol:city_curency_symbol,
        cur_code:city_curency_code,
        cur_exchng:city_curency_exchange_rate,
        user_type:1,
        memo:__('Driver App Wallet Funding')
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
                    
                    ons.notification.alert(__("Transaction initialized successfully. You will be redirected to {---1} website to complete your payment. After your payment is sucessful your wallet will be credited", ['PayTR']), {title:"",buttonLabels:[__('Continue')],callback: function(){
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

    var local_currency_payment_amount = parseInt(payment_amount / city_curency_exchange_rate);

    var metadata = {

        user_id:userprofileinfo.driverid,
        amount: payment_amount,
        cur_symbol:city_curency_symbol,
        cur_code:city_curency_code,
        cur_exchng:city_curency_exchange_rate,
        user_type:1,
        memo:__('Driver App Wallet Funding')
    };

    var metadata_json = JSON.stringify(metadata);
    var data = {
        email: userprofileinfo.email,
        user_firstname: userprofileinfo.firstname,
        user_lastname: userprofileinfo.lastname,
        user_phone: userprofileinfo.phone,
        amount: payment_amount,
        currency:default_currency_data.iso_code,
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
                    
                    ons.notification.alert(__("Transaction initialized successfully. You will be redirected to {---1} website to complete your payment. After your payment is sucessful your wallet will be credited", ['PesaPal']), {title:"",buttonLabels:[__('Continue')],callback: function(){
                        //navigator.app.exitApp();

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


function paystackGateway(){

    if(isNaN(parseInt($('#fundAmount').val())) || parseInt($('#fundAmount').val()) == 0 ){
        ons.notification.alert(__('Please enter a valid amount'))  ;
        return;
    }

    var payment_amount = parseInt($('#fundAmount').val() * 100);

    //convert amount to local currency supported by paystack
    var local_currency_payment_amount = parseInt(payment_amount / city_curency_exchange_rate);


    var data = {
        email: userprofileinfo.email,
        amount: local_currency_payment_amount,
        currency: default_currency_data.iso_code,
        metadata: {
           custom_fields: [
              {
                  
                    user_id:userprofileinfo.driverid,
                    amount: payment_amount,
                    cur_symbol:city_curency_symbol,
                    cur_code:city_curency_code,
                    cur_exchng:city_curency_exchange_rate,
                    user_type:1,
                    memo:__('Driver App Wallet Funding')
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
                    
                    ons.notification.alert(__("Transaction initialized successfully. You will be redirected to {---1} website to complete your payment. After your payment is sucessful your wallet will be credited", ['Paystack']), {title:"",buttonLabels:[__('Continue')],callback: function(){
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


function flutterwaveGateway(){

    if(isNaN(parseInt($('#fundAmount').val())) || parseInt($('#fundAmount').val()) == 0 ){
        ons.notification.alert(__('Please enter a valid amount'))  ;
        return;
    }

    var payment_amount = parseInt($('#fundAmount').val() * 100);
    payment_amount = payment_amount / 100; //convert back to initial value for use with flutterwave 

    //convert amount to local currency supported by flutterwave
    var local_currency_payment_amount = parseInt(payment_amount / city_curency_exchange_rate * 100);
    local_currency_payment_amount = local_currency_payment_amount / 100;


    var data = {
        email: userprofileinfo.email,
        amount: local_currency_payment_amount,
        currency: default_currency_data.iso_code,
        payment_options: "card",
        customer : {
            email: userprofileinfo.email,
            phonenumber : userprofileinfo.phone,
            name: userprofileinfo.firstname + " " + userprofileinfo.lastname
        },
        meta: {
                             
            user_id:userprofileinfo.driverid,
            amount: payment_amount,
            cur_symbol:city_curency_symbol,
            cur_code:city_curency_code,
            cur_exchng:city_curency_exchange_rate,
            user_type:1,
            memo:__('Driver App Wallet Funding')
             
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
                    
                    ons.notification.alert(__("Transaction initialized successfully. You will be redirected to {---1} website to complete your payment. After your payment is sucessful your wallet will be credited", ['FlutterWave']), {title:"",buttonLabels:[__('Continue')],callback: function(){
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
        ons.notification.alert(__('Please enter a valid amount'));
        return;
    }

    var payment_amount = parseInt($('#fundAmount').val() * 100);

    //convert amount to Nigerian Naira supported by paystack
    var local_currency_payment_amount = parseInt(payment_amount / city_curency_exchange_rate);


    var handler = PaystackPop.setup({
        key: online_payment_info.merchantid,
        email: userprofileinfo.email,
        amount: local_currency_payment_amount,
        currency: "NGN",
        metadata: {
           custom_fields: [
              {
                  
                  user_id:userprofileinfo.driverid,
                  amount: payment_amount,
                  cur_symbol:city_curency_symbol,
                  cur_code:city_curency_code,
                  cur_exchng:city_curency_exchange_rate,
                  user_type:1,
                  memo:__('Driver App Wallet Funding')
              }
           ]
        },
        callback: Vpaysuccess,
        onClose:Vpayclosed 
      });
      handler.openIframe();
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
    ons.notification.alert('Transaction was successful',{title:""});
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













// Watch your changing position

function watchMapPosition() {

    return navigator.geolocation.watchPosition(onMapWatchSuccess, onMapError, { timeout:30000,enableHighAccuracy: true });
}



function driverarrived(b_id){

    loading.show();
    
      var post_data = {'action_get':'driverarrived','bookingid':b_id};       
      jQuery.ajax({
      url: ajaxurl,
      method: 'GET',
      timeout : 45000,
      crossDomain:true,
      xhrFields: {withCredentials: true},
      data: post_data,
      success: function (data, status)
          {
              loading.hide();     
              console.log(data)
              try{
                  //console.log(data);
                  var data_obj = JSON.parse(data);
              }catch(e){
                
                  ons.notification.alert(__("Error communicating with server"),{'title':""});                
                  return;
              }
  
  
              if(data_obj.hasOwnProperty('error')){
                
                  ons.notification.alert(data_obj.error,{title:""});
                
                  return;                  
  
              }
  
  
              
              if(data_obj.hasOwnProperty('success')){
                ride_ui_btn_sound.play();
                ons.notification.alert(__('The rider has been notified of your arrival'),{'title':""});
                driver_accept_ride_request_ui_states.ui_state = 2 //next state - pick up
                localStorage.setObject(`pbk-${b_id}`,driver_accept_ride_request_ui_states);
                processuistates();                                                        
                return;
              }
  
        
          },
          error: function() { 
            loading.hide();
            ons.notification.alert(__("Error communicating with server"),{'title':""});
            return;
              
          }
  
      });

}


/* function driverstartride(booking_id){
    
    ons.notification.confirm({
        message: 'Do you want to start this Ride?',
        title: 'Start Ride',
        buttonLabels: ['Yes', 'No'],
        animation: 'default', // or 'none'
        primaryButtonIndex: 1,
        cancelable: true,
        callback: function(index) {
         
          if(!index){
            // 0-: Button index from the left
            startride(booking_id);
          }else{
            return;
            // -1: Cancel
          }
         
        }
      });

}




function driveracceptride(booking_id){
    
    ons.notification.confirm({
        message: 'Accept to pickup the passenger?',
        title: 'Accept Ride',
        buttonLabels: ['Yes', 'No'],
        animation: 'default', // or 'none'
        primaryButtonIndex: 1,
        cancelable: true,
        callback: function(index) {
         
          if(!index){
            // 0-: Button index from the left
            acceptride(booking_id);
          }else{
            return;
            // -1: Cancel
          }
         
        }
      });
  
} */




function  drivercompleted(booking_id,code){
    
    loading.show();
    var post_data = {'action_get':'drivercompleted','bookingid':booking_id,'complete_code':code,'ride_distance':driver_accept_ride_request_ui_states.total_ride_distance,'ride_duration_secs':driver_accept_ride_request_ui_states.total_ride_time,'ride_duration_secs_formated':driver_accept_ride_request_ui_states.total_ride_time_formated,'ride_fare':driver_accept_ride_request_ui_states.fare,'city_currency_symbol':city_curency_symbol,'city_currency_exchng':city_curency_exchange_rate,'city_currency_code':city_curency_code,'amount_paid_by_rider':driver_accept_ride_request_ui_states.paid_amount,'coupon_code':driver_accept_ride_request_ui_states.coupon_code,'coupon_discount_type':driver_accept_ride_request_ui_states.coupon_discount_type,'coupon_discount_value':driver_accept_ride_request_ui_states.coupon_discount_value,'referral_used':driver_accept_ride_request_ui_states.referral_used,'referral_discount_value':driver_accept_ride_request_ui_states.referral_discount_value};       
    jQuery.ajax({
    url: ajaxurl,
    method: 'GET',
    timeout : 120000,
    crossDomain:true,
    xhrFields: {withCredentials: true},
    data: post_data,
    success: function (data, status)
        {          
            loading.hide();           
            
            try{
                var data_obj = JSON.parse(data);
            }catch(e){
                ons.notification.confirm({
                    message: __('Error communicating with server'),
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
                        drivercompleted(booking_id,code);
                        // -1: Cancel
                      }
                     
                    }
                  });
                return;
            }

            if(data_obj.hasOwnProperty('error')){

                
                ons.notification.confirm({
                    message: data_obj.error,
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
                        drivercompleted(booking_id,code);
                        // -1: Cancel
                      }
                     
                    }
                  });
                return;
                

            }


            
            if(data_obj.hasOwnProperty('success')){
                ride_ui_btn_sound.play();
                driver_accept_ride_request_ui_states.ui_state = 4 //next state - finished. clear ui and show rating view
                localStorage.setObject(`pbk-${booking_id}`,driver_accept_ride_request_ui_states);
                processuistates();
            }          
            
            
        },
        error: function() {
            loading.hide();        
            ons.notification.confirm({
                message: __('Error communicating with server'),
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
                    drivercompleted(booking_id,code);
                    // -1: Cancel
                  }
                 
                }
              });
            return;
            
        }

    });

}



function acceptride(booking_id){

    $('#ride-request').hide();
    clearInterval(driver_accept_ride_request_timer);
    $('#ride-request-progress-timer').attr('value',0);
    clearInterval(driver_accept_ride_request_timer);
    driver_accept_time = 0;
    loading.show();
    var post_data = {'action_get':'acceptride','bookingid':booking_id};       
    jQuery.ajax({
    url: ajaxurl,
    method: 'GET',
    timeout : 45000,
    crossDomain:true,
    xhrFields: {withCredentials: true},
    data: post_data,
    success: function (data, status)
        {          
            loading.hide();       
            try{
                var data_obj = JSON.parse(data);
            }catch(e){
                
                ons.notification.confirm({
                    message: __('Error communicating with server'),
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
                        acceptride(booking_id);
                        // -1: Cancel
                      }
                     
                    }
                  });
                return;
            }

            if(data_obj.hasOwnProperty('error')){

                ons.notification.alert(data_obj.error,{title:''});
                return;
                

            }

            if(data_obj.hasOwnProperty('success')){
                accept_ride_sound.play();
                //$('#booking-list-item-' + booking_id).fadeOut('slow'); 
                
                
                //prepare UI for active ride
                driver_accept_ride_request_ui_states = [];
                driver_accept_ride_request_ui_states = {ui_state : 0,booking_id:0,p_addr:'',p_lat:'',p_lng:'',d_addr:'',d_lat:'',d_lng:'',rider_firstname:'',rider_image:'',rider_phone:'',rider_rating:'',completion_code:'',fare:'',payment_type:'',coupon_code:'',coupon_discount_type:0,coupon_discount_value:0,referral_discount_value:0.00,referral_used:0,total_ride_time:0,total_ride_distance:0.00,total_ride_time_formated:'',total_ride_distance_formated:'',paid_amount:0.00, ride_start_time:0, waypoint1_address:'',waypoint1_long:'',waypoint1_lat:'',waypoint2_address:'',waypoint2_long:'',waypoint2_lat:'',confirm_stop1:0,confirm_stop2:0,drv_start_ride_pos_lat:0.0,drv_start_ride_pos_lng:0.0,drv_last_pos_lat:0.0,drv_last_pos_lng:0.0,drv_last_pos_time:0};
                driver_accept_ride_request_ui_states.ui_state = 1;
                driver_accept_ride_request_ui_states.booking_id = driver_accept_ride_push_data.booking_id;
                driver_accept_ride_request_ui_states.p_addr = driver_accept_ride_push_data.p_address;
                driver_accept_ride_request_ui_states.p_lat = driver_accept_ride_push_data.p_lat;
                driver_accept_ride_request_ui_states.p_lng = driver_accept_ride_push_data.p_lng;
                driver_accept_ride_request_ui_states.d_addr = driver_accept_ride_push_data.d_address;
                driver_accept_ride_request_ui_states.d_lat = driver_accept_ride_push_data.d_lat;
                driver_accept_ride_request_ui_states.d_lng = driver_accept_ride_push_data.d_lng;
                driver_accept_ride_request_ui_states.rider_firstname = driver_accept_ride_push_data.rider_name;
                driver_accept_ride_request_ui_states.rider_image = driver_accept_ride_push_data.rider_image;
                driver_accept_ride_request_ui_states.rider_phone = driver_accept_ride_push_data.rider_phone;
                driver_accept_ride_request_ui_states.rider_rating = driver_accept_ride_push_data.rider_rating;
                driver_accept_ride_request_ui_states.completion_code = driver_accept_ride_push_data.completion_code;
                driver_accept_ride_request_ui_states.fare = driver_accept_ride_push_data.fare;
                driver_accept_ride_request_ui_states.payment_type = driver_accept_ride_push_data.payment_type;
                driver_accept_ride_request_ui_states.coupon_code = driver_accept_ride_push_data.coupon_code;
                driver_accept_ride_request_ui_states.coupon_discount_type = driver_accept_ride_push_data.coupon_discount_type;
                driver_accept_ride_request_ui_states.coupon_discount_value = driver_accept_ride_push_data.coupon_discount_value;
                driver_accept_ride_request_ui_states.referral_used = driver_accept_ride_push_data.referral_used;
                driver_accept_ride_request_ui_states.referral_discount_value = driver_accept_ride_push_data.referral_discount_value;
                driver_accept_ride_request_ui_states.paid_amount = driver_accept_ride_push_data.fare;

                driver_accept_ride_request_ui_states.waypoint1_address = driver_accept_ride_push_data.waypoint1_address;
                driver_accept_ride_request_ui_states.waypoint1_lat = driver_accept_ride_push_data.waypoint1_lat;
                driver_accept_ride_request_ui_states.waypoint1_long = driver_accept_ride_push_data.waypoint1_long;
                driver_accept_ride_request_ui_states.waypoint2_address = driver_accept_ride_push_data.waypoint2_address;
                driver_accept_ride_request_ui_states.waypoint2_lat = driver_accept_ride_push_data.waypoint2_lat;
                driver_accept_ride_request_ui_states.waypoint2_long = driver_accept_ride_push_data.waypoint2_long;

                driver_accept_ride_request_ui_states.ride_start_time = Date.now() / 1000 | 0;

                rider_pickup_marker = map.addMarker({
                    'position':{lat: parseFloat(driver_accept_ride_push_data.p_lat),lng: parseFloat(driver_accept_ride_push_data.p_lng)},
                    'icon' : 'img/pick-up-pin.png',
                    animation: plugin.google.maps.Animation.DROP
                });



                if(data_obj.directions.hasOwnProperty('status') && data_obj.directions.status == 'OK'){
                    map.setClickable(false);
                    route_points = [];
                    route_points = plugin.google.maps.geometry.encoding.decodePath(data_obj.directions.routes["0"].overview_polyline.points);

                    //plot route
                    if(route_polyline != null){
                        route_polyline.setVisible(false);
                        route_polyline.setPoints(route_points);
                        route_polyline.setVisible(true);  

                        
                        map.animateCamera({
                        target: route_points,
                        duration: 1000,
                        }, function() {
                            //alert("Camera target has been changed");
                            map.setClickable(true);
                            
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

                        
                        
                        route_polyline.on(plugin.google.maps.event.POLYLINE_CLICK, function(latLng) {
                            
                            map.animateCamera({
                                target: route_points,
                                duration: 1000,
                                }, function() {
                                //alert("Camera target has been changed");
                                map.setClickable(true);
                            });
                        });

                        map.animateCamera({
                            target: route_points,
                            duration: 1000,
                            }, function() {
                                //alert("Camera target has been changed");
                                map.setClickable(true);
                        });

                    }
                    
                }

                localStorage.setObject(`pbk-${booking_id}`,driver_accept_ride_request_ui_states);
                processuistates();

                

            }          
            
            
        },
        error: function() {
            loading.hide();        
            ons.notification.confirm({
                message: __('Error communicating with server'),
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
                    acceptride(booking_id);
                    // -1: Cancel
                  }
                 
                }
              });
            return;
            
        }

    });


}

function startride(booking_id){
    loading.show();
    var post_data = {'action_get':'startride','bookingid':booking_id};       
    jQuery.ajax({
    url: ajaxurl,
    method: 'GET',
    timeout : 45000,
    crossDomain:true,
    xhrFields: {withCredentials: true},
    data: post_data,
    success: function (data, status)
        {          
            loading.hide();       
            try{
                var data_obj = JSON.parse(data);
            }catch(e){
                ons.notification.alert(__("Error communicating with server"),{'title':""});
                return;
            }

            if(data_obj.hasOwnProperty('error')){

                ons.notification.alert(data_obj.error,{title:""});
                return;
                

            }


            
            if(data_obj.hasOwnProperty('success')){
                ride_ui_btn_sound.play();
                driver_accept_ride_request_ui_states.ui_state = 3 //next state - drop off
                if(rider_pickup_marker){
                    rider_pickup_marker.remove();
                    rider_pickup_marker = [];
                }
                rider_dropoff_marker = map.addMarker({
                    'position':{lat: parseFloat(driver_accept_ride_request_ui_states.d_lat),lng: parseFloat(driver_accept_ride_request_ui_states.d_lng)},
                    'icon' : 'img/drop-off-pin.png',
                    animation: plugin.google.maps.Animation.DROP
                });

                if(data_obj.directions.hasOwnProperty('status') && data_obj.directions.status == 'OK'){
                    map.setClickable(false);
                    route_points = [];
                    route_points = plugin.google.maps.geometry.encoding.decodePath(data_obj.directions.routes["0"].overview_polyline.points);

                    //plot route
                    if(route_polyline != null){
                        route_polyline.setVisible(false);
                        route_polyline.setPoints(route_points);
                        route_polyline.setVisible(true);  

                        
                        map.animateCamera({
                        target: route_points,
                        duration: 1000,
                        }, function() {
                            //alert("Camera target has been changed");
                            map.setClickable(true);
                            
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

                        
                        
                        route_polyline.on(plugin.google.maps.event.POLYLINE_CLICK, function(latLng) {
                            
                            map.animateCamera({
                                target: route_points,
                                duration: 1000,
                                }, function() {
                                //alert("Camera target has been changed");
                                map.setClickable(true);
                            });
                        });

                        map.animateCamera({
                            target: route_points,
                            duration: 1000,
                            }, function() {
                                //alert("Camera target has been changed");
                                map.setClickable(true);
                        });

                    }
                    
                }

                driver_accept_ride_request_ui_states.ride_start_time = Date.now() / 1000 | 0;
                driver_accept_ride_request_ui_states.drv_last_pos_time = Date.now() / 1000 | 0;

                if(!(driver_lat && driver_lng)){
                    driver_accept_ride_request_ui_states.drv_last_pos_lat = driver_accept_ride_request_ui_states.p_lat;
                    driver_accept_ride_request_ui_states.drv_last_pos_lng = driver_accept_ride_request_ui_states.p_lng;
                    driver_accept_ride_request_ui_states.drv_start_ride_pos_lat = driver_accept_ride_request_ui_states.p_lat;
                    driver_accept_ride_request_ui_states.drv_start_ride_pos_lng = driver_accept_ride_request_ui_states.p_lng;
                }else{
                    driver_accept_ride_request_ui_states.drv_last_pos_lat = driver_lat;
                    driver_accept_ride_request_ui_states.drv_last_pos_lng = driver_lng;
                    driver_accept_ride_request_ui_states.drv_start_ride_pos_lat = driver_lat;
                    driver_accept_ride_request_ui_states.drv_start_ride_pos_lng = driver_lng;
                }

                localStorage.setObject(`pbk-${booking_id}`,driver_accept_ride_request_ui_states);
                processuistates();
              //$('#booking-list-item-' + booking_id).fadeOut('slow');                             
              
            }          
            
            
        },
        error: function() {
            loading.hide();        
            ons.notification.alert(__("Error communicating with server"),{'title':""});
            return;
            
        }

    });


}

function drivercancel(booking_id){

    ons.notification.prompt(__('Why are you cancelling this ride?'),{title:'',cancelable:true,buttonLabels:[__('Cancel'),__('Continue')]})
    .then(function(input) {
        if(!input)return;
        drivercancelbooking(booking_id,input);
    });

    return;
    
        ons.notification.confirm({
            message: 'This ride will be cancelled. It may attract a penalty fee. Do you want to continue?',
            // or messageHTML: '<div>Message in HTML</div>',
            title: 'Cancel Ride',
            buttonLabels: ['Yes', 'No'],
            animation: 'default', // or 'none'
            primaryButtonIndex: 1,
            cancelable: true,
            callback: function(index) {
             
              if(!index){
                // 0-: Button index from the left
                ons.notification.prompt('Why are you cancelling this ride?',{'title':""})
                    .then(function(input) {
                        drivercancelbooking(booking_id,input);
                });
                
              }else{
                return;
                // -1: Cancel
              }
             
            }
          });

}



function drivercancelbooking(b_id,comment){
    /* if(!comment){
        ons.notification.alert("Ride cancellation aborted as you didn't explain why you are cancelling ride.",{'title':""});
        return;
    }; */    
    loading.show();
    var post_data = {'action_get':'bookingcancel','bookingid':b_id,'comment':comment};       
    jQuery.ajax({
    url: ajaxurl,
    method: 'GET',
    timeout : 45000,
    crossDomain:true,
    xhrFields: {withCredentials: true},
    data: post_data,
    success: function (data, status)
        {          
            loading.hide();           
            
            try{
                var data_obj = JSON.parse(data);
            }catch(e){
                ons.notification.alert(__("Error communicating with server"),{'title':""});
                return;
            }

            if(data_obj.hasOwnProperty('error')){

                ons.notification.alert(data_obj.error,{title:""});
                return;
                

            }
    
            if(data_obj.hasOwnProperty('success')){
              $('#booking-list-item-' + b_id).fadeOut('slow');                             
              
              clearInterval(driver_accept_ride_request_ui_update_timer);
                old_time_seconds = 0;
                total_ride_seconds = 0;
                old_driver_position_lat = 0.0;
                old_driver_position_lng = 0.0;
                total_ride_distance = 0;

                map.clear();
                city_drivers_markers = {}; //clear drivers marker handles
                driver_marker = undefined;
                route_points = undefined;
                route_polyline = undefined;
                rider_pickup_marker = undefined;
                rider_dropoff_marker = undefined;
                markerds1 = undefined;
                markerds2 = undefined;
                getuserlocation(); 

              $('#ride-cancel-btn').hide();
              $("#statusmsg").css("visibility","visible");
                $("#statusmsg").removeClass("fadeOutUp animated").addClass("fadeOutUp animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                    $(this).removeClass("fadeOutUp animated");
                    $("#statusmsg").css("z-index","5");
                    $("#statusmsg").css("visibility","hidden");
                    $("#menubtn").css("z-index","100");
                    $("#menubtn").css("visibility","visible");
                    $("#nointernet").css("opacity","1");
                    $("#driver-available-btn").css("visibility","visible");
                    $('#driver-online-indicator').fadeIn();
                    $('#status-msg-container').css('top','-1000px');

                })
            
                    
                $("#ride-control-panel").css("visibility","visible");
                $("#ride-control-panel").removeClass("fadeOutDown animated").addClass("fadeOutDown animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                    $(this).removeClass("fadeOutDown animated");
                    $("#ride-control-panel").css("visibility","hidden");

                    $('#driver-stats-panel').show();
                    $("#driver-stats-panel").removeClass("slideInUp animated").addClass("slideInUp animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                        $(this).removeClass("slideInUp animated");
                    })
                    
                })  
            }          
            
            
        },
        error: function() {
            loading.hide();        
            ons.notification.alert(__("Error communicating with server"),{'title':""});
            return;
            
        }

    });



}




function driverallocatecancel(booking_id){

    driverallocatecancelbooking(booking_id);

    return;

    ons.notification.confirm({
        message: 'This booking will be cancelled. It may attract a penalty fee. Do you want to continue?',
        // or messageHTML: '<div>Message in HTML</div>',
        title: 'Cancel Booking',
        buttonLabels: ['Yes', 'No'],
        animation: 'default', // or 'none'
        primaryButtonIndex: 1,
        cancelable: true,
        callback: function(index) {
         
          if(!index){
            // 0-: Button index from the left
            driverallocatecancelbooking(booking_id);
          }else{
            return;
            // -1: Cancel
          }
         
        }
      });

}

function driverallocatecancelbooking(b_id){
    loading.show();
    var post_data = {'action':'bookingallocatecancel','bookingid':b_id};       
    jQuery.ajax({
    url: ajaxurl,
    method: 'POST',
    timeout : 20000,
    crossDomain:true,
    xhrFields: {withCredentials: true},
    data: post_data,
    success: function (data, status)
        {   
            $('#ride-request').hide();
            $('#ride-request-progress-timer').attr('value',0);
            clearInterval(driver_accept_ride_request_timer);
            driver_accept_time = 0;       
            loading.hide();           
            
            try{
                var data_obj = JSON.parse(data);
            }catch(e){
                //ons.notification.alert("Failed to cancel booking.");
                return;
            }

            if(data_obj.hasOwnProperty('error')){

                //ons.notification.alert(data_obj.error);
                return;
                

            }

            if(data_obj.hasOwnProperty('success')){
                //$('#booking-list-item-' + b_id).fadeOut('slow');                             
                
            }          
            
            
        },
        error: function() {
            loading.hide();        
            //ons.notification.alert("Failed to cancel booking.");
            //return;
            
        }

    });



}



function resumeBooking(booking_id){
    //retrieve data from localstorage
    
    driver_accept_ride_request_ui_states = localStorage.getObject("pbk-" + booking_id);
    document.querySelector('#myNavigator').popPage({animation: 'fade'});

    if(driver_accept_ride_request_ui_states.ui_state == 1 || driver_accept_ride_request_ui_states.ui_state == 2){
        accept_ride_sound.play();
        if(rider_pickup_marker){
            rider_pickup_marker.remove();
            rider_pickup_marker = [];
        }
        rider_pickup_marker = map.addMarker({
            'position':{lat: parseFloat(driver_accept_ride_request_ui_states.p_lat),lng: parseFloat(driver_accept_ride_request_ui_states.p_lng)},
            'icon' : 'img/pick-up-pin.png',
            animation: plugin.google.maps.Animation.DROP
        });

        map.setClickable(false);
        map.animateCamera({
            target: {lat: parseFloat(driver_accept_ride_request_ui_states.p_lat),lng: parseFloat(driver_accept_ride_request_ui_states.p_lng)},
            duration: 1000,
            }, function() {
                //alert("Camera target has been changed");
                map.setClickable(true);
                
        });

        processuistates();
        
        return;
    }else if(driver_accept_ride_request_ui_states.ui_state == 3){
        ride_ui_btn_sound.play();
        if(rider_pickup_marker){
            rider_pickup_marker.remove();
            rider_pickup_marker = [];
        }
        rider_dropoff_marker = map.addMarker({
            'position':{lat: parseFloat(driver_accept_ride_request_ui_states.d_lat),lng: parseFloat(driver_accept_ride_request_ui_states.d_lng)},
            'icon' : 'img/drop-off-pin.png',
            animation: plugin.google.maps.Animation.DROP
        });

        map.setClickable(false);
        map.animateCamera({
            target: {lat: parseFloat(driver_accept_ride_request_ui_states.d_lat),lng: parseFloat(driver_accept_ride_request_ui_states.d_lng)},
            duration: 1000,
            }, function() {
                //alert("Camera target has been changed");
                map.setClickable(true);
                
        });

        processuistates();

        clearInterval(driver_accept_ride_request_ui_update_timer);

        old_time_seconds = 0;
        total_ride_seconds = driver_accept_ride_request_ui_states.total_ride_time + ((Date.now() / 1000 | 0) - driver_accept_ride_request_ui_states.drv_last_pos_time);
        old_driver_position_lat = 0.0;
        old_driver_position_lng = 0.0;
        total_ride_distance = driver_accept_ride_request_ui_states.total_ride_distance * 1000;
        var driver_motion_sample_counter = 0;
        var driver_distance_samples = [];

        driver_accept_ride_request_ui_update_timer = setInterval(function(){
            save_progress_counter++;
            //compute elapsed time since ride started
            if(old_time_seconds == 0){
                old_time_seconds = Date.now() / 1000 | 0; //get the number of seconds TIMESTAMP
            }else{
                var current_time = Date.now() / 1000 | 0;
                var seconds_elapsed = current_time - old_time_seconds;
                total_ride_seconds += seconds_elapsed;
                old_time_seconds = current_time; 

                var _hours = Math.floor(total_ride_seconds / 3600);
                var _minutes = Math.floor((total_ride_seconds % 3600) / 60);
                var _seconds = (total_ride_seconds % 3600) % 60;

                var ride_duration = '';
                if(_hours){
                    ride_duration += _hours + 'Hr ';
                }

                if(_minutes){
                    ride_duration += _minutes + 'Min ';
                }

                
                ride_duration += _seconds + 'Secs';
                
                driver_accept_ride_request_ui_states.total_ride_time = total_ride_seconds;
                driver_accept_ride_request_ui_states.total_ride_time_formated = ride_duration;
                $('#ride-stats-time').html(ride_duration);

            }



            //compute distance travelled

        
            if(driver_accept_ride_request_ui_states.drv_last_pos_time == 0){
                driver_accept_ride_request_ui_states.drv_last_pos_time = Date.now() / 1000 | 0; //get the number of seconds TIMESTAMP
            }else{

                var current_drv_pos_time = Date.now() / 1000 | 0;
                var drv_pos_time_elapsed = current_drv_pos_time - driver_accept_ride_request_ui_states.drv_last_pos_time;
                

                if(driver_accept_ride_request_ui_states.drv_last_pos_lat == 0 || driver_accept_ride_request_ui_states.drv_last_pos_lng == 0){
                    driver_accept_ride_request_ui_states.drv_last_pos_lat = driver_lat;
                    driver_accept_ride_request_ui_states.drv_last_pos_lng = driver_lng;
                }else{                    



                    let old_driver_pos = {'lat':driver_accept_ride_request_ui_states.drv_last_pos_lat,'lng':driver_accept_ride_request_ui_states.drv_last_pos_lng};
                    let current_pos = {'lat':driver_lat,'lng':driver_lng};

                    let distance = plugin.google.maps.geometry.spherical.computeDistanceBetween(old_driver_pos, current_pos); //distance in meters

                    if(isNaN(distance)){
                        distance = 0;
                    }

                    

                    if(driver_motion_sample_counter > 2){ //sample distances 3 times; driver is in motion if we have all different increamental samples and no duplicates

                        driver_motion_sample_counter = 0;

                        if(!(new Set(driver_distance_samples)).size !== driver_distance_samples.length){
                            //no duplicates found, so driver is in motion. update distance covered
                            total_ride_distance += distance;
                            driver_accept_ride_request_ui_states.drv_last_pos_lat = driver_lat;
                            driver_accept_ride_request_ui_states.drv_last_pos_lng = driver_lng;
                            driver_accept_ride_request_ui_states.drv_last_pos_time = Date.now() / 1000 | 0; //update last driver distance position update time

                        }
                                        
                    }


                    driver_distance_samples[driver_motion_sample_counter] = distance;
                    driver_motion_sample_counter++;

                    
                    var total_ride_distance_km = total_ride_distance / 1000;
                    total_ride_distance_km = Math.round(total_ride_distance_km * 100) / 100;
                    driver_accept_ride_request_ui_states.total_ride_distance = total_ride_distance_km;
                    driver_accept_ride_request_ui_states.total_ride_distance_formated = total_ride_distance_km + 'KM'

                    if(routetariffs.result[userprofileinfo.city_id].cars[0].dist_unit == 0){ //kilometer
                        $('#ride-stats-dist').html(total_ride_distance_km + 'km');
                    }else{//miles  
                        let total_ride_dist_mi = total_ride_distance / 1609.344;  
                        total_ride_dist_mi = Math.round(total_ride_dist_mi * 100) / 100;        
                        $('#ride-stats-dist').html(total_ride_dist_mi + 'mi');
                    }
                }

            }
            

            if(save_progress_counter > 5){
                save_progress_counter = 0;
                localStorage.setObject(`pbk-${driver_accept_ride_request_ui_states.booking_id}`,driver_accept_ride_request_ui_states);
            }



        },1000)

        
    }else{
        processuistates();
    }



}

  
function processuistates(){
    if(driver_accept_ride_request_ui_states.ui_state == 0){
        return;
    }else if(driver_accept_ride_request_ui_states.ui_state == 1){
        //first state of the driver UI for just accepted ride request
        $('#status-msg-rider-photo').attr('src',driver_accept_ride_request_ui_states.rider_image);
        $('#status-msg-rider-firstname').html(driver_accept_ride_request_ui_states.rider_firstname);
        $('#status-msg-rider-rating').attr('src','img/rating-'+ driver_accept_ride_request_ui_states.rider_rating +'.png')
        $('#status-msg-pickup-ind').show();
        $('#status-msg-dropoff-ind').hide();
        $('#status-msg-stop-ind').hide();
        $('#status-msg-address').html(driver_accept_ride_request_ui_states.p_addr);
        $('#status-msg-call-rider').data('number',driver_accept_ride_request_ui_states.rider_phone);
        $('#status-msg-sms-rider').data('number',driver_accept_ride_request_ui_states.rider_phone);
        $('#status-msg-locate-rider').data('plat',driver_accept_ride_request_ui_states.p_lat);
        $('#status-msg-locate-rider').data('plng',driver_accept_ride_request_ui_states.p_lng);
        $('#status-msg-locate-rider').data('pickdrop',0); //sets to 0 for pickup and 1 for dropoff 
        $('#status-msg-nav-rider').data('plat',driver_accept_ride_request_ui_states.p_lat);
        $('#status-msg-nav-rider').data('plng',driver_accept_ride_request_ui_states.p_lng);
        $('#status-msg-nav-rider').data('pickdrop',0); //sets to 0 for pickup and 1 for dropoff 
        $('#ride-stats').hide();
        $('#driver-stats-panel').hide();
        $('#ride-action-btn').css('width','65%');
        $('#ride-action-btn').css('background-color','#2979ff');
        $('#ride-action-btn').html(__("I've Arrived"));
        $('#ride-action-btn').data('state',1); //state for "i've arrived" action
        $('#ride-cancel-btn').data('bookid',driver_accept_ride_request_ui_states.booking_id); //state for "i've arrived" action
        $('#status-msg-chat-rider').data('bookingid', driver_accept_ride_request_ui_states.booking_id);
        $('#chat-msg-send-btn').data('bookingid', driver_accept_ride_request_ui_states.booking_id);
        $('#ride-cancel-btn').show();        

        //render waypoint markers
        /* if(driver_accept_ride_request_ui_states.hasOwnProperty('waypoint1_address') && driver_accept_ride_request_ui_states.waypoint1_address != ''){
            if(markerds1){
                
                markerds1.setPosition({
                    lat:driver_accept_ride_request_ui_states.waypoint1_lat,
                    lng: driver_accept_ride_request_ui_states.waypoint1_long
                                                                
                });
            }else{
                markerds1 = map.addMarker({
                    'position':{lat: parseFloat(driver_accept_ride_request_ui_states.waypoint1_lat),lng: parseFloat(driver_accept_ride_request_ui_states.waypoint1_long)},
                    'icon' : 'img/waypoint.png',
                    animation: plugin.google.maps.Animation.DROP
                });
    
                markerds1._isReady = true;    
                
            }
        }else{
            if(markerds1){
                markerds1.remove(); 
                markerds1 = null;
            }
        }



        if(driver_accept_ride_request_ui_states.hasOwnProperty('waypoint2_address') && driver_accept_ride_request_ui_states.waypoint2_address != ''){
            if(markerds2){
                markerds2.setDisableAutoPan(true);
                markerds2.setPosition({
                    lat:driver_accept_ride_request_ui_states.waypoint2_lat,
                    lng: driver_accept_ride_request_ui_states.waypoint2_long
                                                                
                });
            }else{
                markerds2 = map.addMarker({
                    'position':{lat: parseFloat(driver_accept_ride_request_ui_states.waypoint2_lat),lng: parseFloat(driver_accept_ride_request_ui_states.waypoint2_long)},
                    'icon' : 'img/waypoint.png',
                    animation: plugin.google.maps.Animation.DROP
                });
    
                markerds2._isReady = true;   
               
            }
        }else{
            if(markerds2){
                markerds2.remove(); 
                markerds2 = null;
            }
        } */
        
        $("#menubtn").css("visibility","hidden");
        $("#menubtn").css("z-index","10");
        $("#nointernet").css("opacity","0");
        $("#driver-available-btn").css("visibility","hidden");
        $('#driver-online-indicator').fadeOut();

        $('#status-msg-container').css('top','10px');
        $("#statusmsg").css("visibility","visible");
        $("#statusmsg").removeClass("bounceIn animated").addClass("bounceIn animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass("bounceIn animated");
            $("#statusmsg").css("z-index","50");
        })
    
            
        $("#ride-control-panel").css("visibility","visible");
        $("#ride-control-panel").removeClass("zoomInLeft animated").addClass("zoomInLeft animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass("zoomInLeft animated");
            
        })
        
    
        

    }else if(driver_accept_ride_request_ui_states.ui_state == 2){
        //second state of the driver UI for Pickup
        $('#status-msg-rider-photo').attr('src',driver_accept_ride_request_ui_states.rider_image);
        $('#status-msg-rider-firstname').html(driver_accept_ride_request_ui_states.rider_firstname);
        $('#status-msg-rider-rating').attr('src','img/rating-'+ driver_accept_ride_request_ui_states.rider_rating +'.png')
        $('#status-msg-pickup-ind').show();
        $('#status-msg-dropoff-ind').hide();
        $('#status-msg-stop-ind').hide();
        $('#status-msg-address').html(driver_accept_ride_request_ui_states.p_addr);
        $('#status-msg-call-rider').data('number',driver_accept_ride_request_ui_states.rider_phone);
        $('#status-msg-sms-rider').data('number',driver_accept_ride_request_ui_states.rider_phone);
        $('#status-msg-locate-rider').data('plat',driver_accept_ride_request_ui_states.p_lat);
        $('#status-msg-locate-rider').data('plng',driver_accept_ride_request_ui_states.p_lng);
        $('#status-msg-locate-rider').data('pickdrop',0); //sets to 0 for pickup and 1 for dropoff 
        $('#status-msg-nav-rider').data('plat',driver_accept_ride_request_ui_states.p_lat);
        $('#status-msg-nav-rider').data('plng',driver_accept_ride_request_ui_states.p_lng);
        $('#status-msg-chat-rider').data('bookingid', driver_accept_ride_request_ui_states.booking_id);
        $('#chat-msg-send-btn').data('bookingid', driver_accept_ride_request_ui_states.booking_id);
        $('#status-msg-nav-rider').data('pickdrop',0); //sets to 0 for pickup and 1 for dropoff 
        //$('#ride-stats').fadeIn();
        $('#driver-stats-panel').hide();
        $('#ride-action-btn').css('width','65%');
        $('#ride-action-btn').css('background-color','#2ac32d');
        $('#ride-action-btn').html(__("Pick Up"));
        $('#ride-action-btn').data('state',2); //state for "pick up / start ride" action
        $('#ride-cancel-btn').show();
        
        //render waypoint markers
        /* if(driver_accept_ride_request_ui_states.hasOwnProperty('waypoint1_address') && driver_accept_ride_request_ui_states.waypoint1_address != ''){
            if(markerds1){
                
                markerds1.setPosition({
                    lat:driver_accept_ride_request_ui_states.waypoint1_lat,
                    lng: driver_accept_ride_request_ui_states.waypoint1_long
                                                                
                });
            }else{
                markerds1 = map.addMarker({
                    'position':{lat: parseFloat(driver_accept_ride_request_ui_states.waypoint1_lat),lng: parseFloat(driver_accept_ride_request_ui_states.waypoint1_long)},
                    'icon' : 'img/waypoint.png',
                    animation: plugin.google.maps.Animation.DROP
                });
    
                markerds1._isReady = true;    
                
            }
        }else{
            if(markerds1){
                markerds1.remove(); 
                markerds1 = null;
            }
        }



        if(driver_accept_ride_request_ui_states.hasOwnProperty('waypoint2_address') && driver_accept_ride_request_ui_states.waypoint2_address != ''){
            if(markerds2){
                markerds2.setDisableAutoPan(true);
                markerds2.setPosition({
                    lat:driver_accept_ride_request_ui_states.waypoint2_lat,
                    lng: driver_accept_ride_request_ui_states.waypoint2_long
                                                                
                });
            }else{
                markerds2 = map.addMarker({
                    'position':{lat: parseFloat(driver_accept_ride_request_ui_states.waypoint2_lat),lng: parseFloat(driver_accept_ride_request_ui_states.waypoint2_long)},
                    'icon' : 'img/waypoint.png',
                    animation: plugin.google.maps.Animation.DROP
                });
    
                markerds2._isReady = true;   
               
            }
        }else{
            if(markerds2){
                markerds2.remove(); 
                markerds2 = null;
            }
        } */

        
        $("#menubtn").css("visibility","hidden");
        $("#menubtn").css("z-index","10");
        $("#nointernet").css("opacity","0");
        $("#driver-available-btn").css("visibility","hidden");
        $('#driver-online-indicator').fadeOut();

        $('#status-msg-container').css('top','10px');
        $("#statusmsg").css("visibility","visible");
        /* $("#statusmsg").removeClass("bounceIn animated").addClass("bounceIn animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass("bounceIn animated");
            $("#statusmsg").css("z-index","50");
        }) */
    
            
        $("#ride-control-panel").css("visibility","visible");
        /* $("#ride-control-panel").removeClass("zoomInLeft animated").addClass("zoomInLeft animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass("zoomInLeft animated");
            
        }) */        
    
        

    }else if(driver_accept_ride_request_ui_states.ui_state == 3){

        //third state of the driver UI for drop-off
        $('#status-msg-rider-photo').attr('src',driver_accept_ride_request_ui_states.rider_image);
        $('#status-msg-rider-firstname').html(driver_accept_ride_request_ui_states.rider_firstname);
        $('#status-msg-rider-rating').attr('src','img/rating-'+ driver_accept_ride_request_ui_states.rider_rating +'.png')
        $('#status-msg-pickup-ind').hide();
        $('#status-msg-dropoff-ind').show();
        $('#status-msg-stop-ind').hide();
        $('#status-msg-address').html(driver_accept_ride_request_ui_states.d_addr);
        $('#status-msg-call-rider').data('number',driver_accept_ride_request_ui_states.rider_phone);
        $('#status-msg-sms-rider').data('number',driver_accept_ride_request_ui_states.rider_phone);
        $('#status-msg-locate-rider').data('plat',driver_accept_ride_request_ui_states.d_lat);
        $('#status-msg-locate-rider').data('plng',driver_accept_ride_request_ui_states.d_lng);
        $('#status-msg-locate-rider').data('pickdrop',1); //sets to 0 for pickup and 1 for dropoff 
        $('#status-msg-nav-rider').data('plat',driver_accept_ride_request_ui_states.d_lat);
        $('#status-msg-nav-rider').data('plng',driver_accept_ride_request_ui_states.d_lng);
        $('#status-msg-chat-rider').data('bookingid', driver_accept_ride_request_ui_states.booking_id);
        $('#chat-msg-send-btn').data('bookingid', driver_accept_ride_request_ui_states.booking_id);
        $('#status-msg-nav-rider').data('pickdrop',1); //sets to 0 for pickup and 1 for dropoff 
        $('#ride-stats').show();
        $('#driver-stats-panel').hide();
        $('#ride-cancel-btn').hide();
        $('#ride-action-btn').css('width','100%');
        $('#ride-action-btn').css('background-color','#ff9800');
        $('#ride-action-btn').html(__("Drop Off"));
        $('#ride-action-btn').data('state',3); //state for "pick up / start ride" action

        if(driver_accept_ride_request_ui_states.hasOwnProperty('waypoint1_address') && driver_accept_ride_request_ui_states.waypoint1_address != '' && driver_accept_ride_request_ui_states.hasOwnProperty('waypoint2_address') && driver_accept_ride_request_ui_states.waypoint2_address != ''){
            if(!driver_accept_ride_request_ui_states.confirm_stop1 && !driver_accept_ride_request_ui_states.confirm_stop2){
                $('#ride-action-btn').html(__("Confirm Stop 1"));
                //set the navigation button to point to waypoint 1 destination
                $('#status-msg-nav-rider').data('plat',driver_accept_ride_request_ui_states.waypoint1_lat);
                $('#status-msg-nav-rider').data('plng',driver_accept_ride_request_ui_states.waypoint1_long);
                $('#status-msg-nav-rider').data('pickdrop',1); //sets to 0 for pickup and 1 for dropoff 

                $('#status-msg-dropoff-ind').hide();
                $('#status-msg-stop-ind').show();
                $('#status-msg-address').html(driver_accept_ride_request_ui_states.waypoint1_address);

            }else if(driver_accept_ride_request_ui_states.confirm_stop1 && !driver_accept_ride_request_ui_states.confirm_stop2){
                $('#ride-action-btn').html(__("Confirm Stop 2"));
                //set the navigation button to point to waypoint 1 destination
                $('#status-msg-nav-rider').data('plat',driver_accept_ride_request_ui_states.waypoint2_lat);
                $('#status-msg-nav-rider').data('plng',driver_accept_ride_request_ui_states.waypoint2_long);
                $('#status-msg-nav-rider').data('pickdrop',1); //sets to 0 for pickup and 1 for dropoff

                $('#status-msg-dropoff-ind').hide();
                $('#status-msg-stop-ind').show();
                $('#status-msg-address').html(driver_accept_ride_request_ui_states.waypoint2_address);
            }
            //two stops
        }else if(driver_accept_ride_request_ui_states.hasOwnProperty('waypoint1_address') && driver_accept_ride_request_ui_states.waypoint1_address != ''){
            if(!driver_accept_ride_request_ui_states.confirm_stop1){
                //waypoint1 stop
                $('#ride-action-btn').html(__("Confirm Stop"));
                //set the navigation button to point to waypoint 1 destination
                $('#status-msg-nav-rider').data('plat',driver_accept_ride_request_ui_states.waypoint1_lat);
                $('#status-msg-nav-rider').data('plng',driver_accept_ride_request_ui_states.waypoint1_long);
                $('#status-msg-nav-rider').data('pickdrop',1); //sets to 0 for pickup and 1 for dropoff

                $('#status-msg-dropoff-ind').hide();
                $('#status-msg-stop-ind').show();
                $('#status-msg-address').html(driver_accept_ride_request_ui_states.waypoint1_address);
            }
        }else if(driver_accept_ride_request_ui_states.hasOwnProperty('waypoint2_address') && driver_accept_ride_request_ui_states.waypoint2_address != ''){
            if(!driver_accept_ride_request_ui_states.confirm_stop2){
                $('#ride-action-btn').html(__("Confirm Stop"));
                //set the navigation button to point to waypoint 1 destination
                $('#status-msg-nav-rider').data('plat',driver_accept_ride_request_ui_states.waypoint2_lat);
                $('#status-msg-nav-rider').data('plng',driver_accept_ride_request_ui_states.waypoint2_long);
                $('#status-msg-nav-rider').data('pickdrop',1); //sets to 0 for pickup and 1 for dropoff

                $('#status-msg-dropoff-ind').hide();
                $('#status-msg-stop-ind').show();
                $('#status-msg-address').html(driver_accept_ride_request_ui_states.waypoint2_address);
            }
        }
        
        //render waypoint markers
        if(driver_accept_ride_request_ui_states.hasOwnProperty('waypoint1_address') && driver_accept_ride_request_ui_states.waypoint1_address != ''){
            if(markerds1){
                
                markerds1.setPosition({
                    lat:driver_accept_ride_request_ui_states.waypoint1_lat,
                    lng: driver_accept_ride_request_ui_states.waypoint1_long
                                                                
                });
            }else{
                markerds1 = map.addMarker({
                    'position':{lat: parseFloat(driver_accept_ride_request_ui_states.waypoint1_lat),lng: parseFloat(driver_accept_ride_request_ui_states.waypoint1_long)},
                    'icon' : 'img/waypoint.png',
                    animation: plugin.google.maps.Animation.DROP
                });
    
                markerds1._isReady = true;    
                
            }
        }else{
            if(markerds1){
                markerds1.remove(); 
                markerds1 = null;
            }
        }



        if(driver_accept_ride_request_ui_states.hasOwnProperty('waypoint2_address') && driver_accept_ride_request_ui_states.waypoint2_address != ''){
            if(markerds2){
                markerds2.setDisableAutoPan(true);
                markerds2.setPosition({
                    lat:driver_accept_ride_request_ui_states.waypoint2_lat,
                    lng: driver_accept_ride_request_ui_states.waypoint2_long
                                                                
                });
            }else{
                markerds2 = map.addMarker({
                    'position':{lat: parseFloat(driver_accept_ride_request_ui_states.waypoint2_lat),lng: parseFloat(driver_accept_ride_request_ui_states.waypoint2_long)},
                    'icon' : 'img/waypoint.png',
                    animation: plugin.google.maps.Animation.DROP
                });
    
                markerds2._isReady = true;   
               
            }
        }else{
            if(markerds2){
                markerds2.remove(); 
                markerds2 = null;
            }
        }




        
        $("#menubtn").css("visibility","hidden");
        $("#menubtn").css("z-index","10");
        $("#nointernet").css("opacity","0");
        $("#driver-available-btn").css("visibility","hidden");
        $('#driver-online-indicator').fadeOut();

        $('#status-msg-container').css('top','10px');
        $("#statusmsg").css("visibility","visible");
        $("#statusmsg").removeClass("bounce animated").addClass("bounce animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass("bounce animated");
            $("#statusmsg").css("z-index","50");
        })
    
            
        $("#ride-control-panel").css("visibility","visible");
        /* $("#ride-control-panel").removeClass("zoomInLeft animated").addClass("zoomInLeft animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass("zoomInLeft animated");
            
        }) */        
    
        

    }else if(driver_accept_ride_request_ui_states.ui_state == 4){
        //fourth state of the driver UI. clean up and display the rating view
        /* $('#status-msg-rider-photo').attr('src',driver_accept_ride_request_ui_states.rider_image);
        $('#status-msg-rider-firstname').html(driver_accept_ride_request_ui_states.rider_firstname);
        $('#status-msg-rider-rating').attr('src','img/rating-'+ driver_accept_ride_request_ui_states.rider_rating +'.png')
        $('#status-msg-pickup-ind').show();
        $('#status-msg-dropoff-ind').hide();
        $('#status-msg-stop-ind').hide();
        $('#status-msg-address').html(driver_accept_ride_request_ui_states.d_addr);
        $('#status-msg-call-rider').data('number',driver_accept_ride_request_ui_states.rider_phone);
        $('#status-msg-sms-rider').data('number',driver_accept_ride_request_ui_states.rider_phone);
        $('#status-msg-locate-rider').data('plat',driver_accept_ride_request_ui_states.d_lat);
        $('#status-msg-locate-rider').data('plng',driver_accept_ride_request_ui_states.d_lng);
        $('#status-msg-locate-rider').data('pickdrop',1); //sets to 0 for pickup and 1 for dropoff 
        $('#status-msg-nav-rider').data('plat',driver_accept_ride_request_ui_states.d_lat);
        $('#status-msg-nav-rider').data('plng',driver_accept_ride_request_ui_states.d_lng);
        $('#status-msg-nav-rider').data('pickdrop',1); //sets to 0 for pickup and 1 for dropoff 
        $('#ride-stats').show();
        $('#ride-cancel-btn').hide();
        $('#ride-action-btn').css('width','100%');
        $('#ride-action-btn').css('background-color','#ff9800');
        $('#ride-action-btn').html("Drop Off");
        $('#ride-action-btn').data('state',3); //state for "pick up / start ride" action */
        
        if(markerds1){
            markerds1.remove(); 
            markerds1 = null;
        }

        if(markerds2){
            markerds2.remove(); 
            markerds2 = null;
        }

               
        
        $('#ride-cancel-btn').hide();
        $('#status-msg-container').css('top','10px');
        $("#statusmsg").css("visibility","visible");
        $("#statusmsg").removeClass("fadeOutUp animated").addClass("fadeOutUp animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass("fadeOutUp animated");
            $("#statusmsg").css("z-index","5");
            $("#statusmsg").css("visibility","hidden");
            $("#menubtn").css("z-index","100");
            $("#menubtn").css("visibility","visible");
            $("#nointernet").css("opacity","1");
            $("#driver-available-btn").css("visibility","visible");
            $('#driver-online-indicator').fadeIn();
            $('#status-msg-container').css('top','-1000px');

        })
    
            
        $("#ride-control-panel").css("visibility","visible");
        map.clear();
        city_drivers_markers = {}; //clear drivers marker handles
        driver_marker = undefined;
        route_points = undefined;
        route_polyline = undefined;
        rider_pickup_marker = undefined;
        rider_dropoff_marker = undefined;
        markerds1 = undefined;
        markerds2 = undefined;
        getuserlocation();
        $("#ride-control-panel").removeClass("fadeOutDown animated").addClass("fadeOutDown animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass("fadeOutDown animated");
            $("#ride-control-panel").css("visibility","hidden");
            document.querySelector('#myNavigator').pushPage('html/ride-complete.html',{animation:'fade',data:{'comp_data':driver_accept_ride_request_ui_states}});
            $('#driver-stats-panel').show();
            $("#driver-stats-panel").removeClass("slideInUp animated").addClass("slideInUp animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                $(this).removeClass("slideInUp animated");
            })
        })        
    
        

    }



}



function processactionbtn(){
    
    var btn_state = $('#ride-action-btn').data('state'); 

    if(btn_state == 1){ //process "i've arrived" action button function
        driverarrived(driver_accept_ride_request_ui_states.booking_id);
        
    }else if(btn_state == 2){ //process "pick up / start ride" action button function

        if(app_settings.ride_otp == 1){ //if otp request enabled on server
            ons.notification.prompt(__('Please request OTP code from rider for this booking and enter it below'),{title: __('Ride OTP Code'),buttonLabels : __('Continue'),cancelable: true, inputType : 'number'})
                .then(function(input) {
                    if(!input){
                        return; 
                    }else{
                        if(input != driver_accept_ride_request_ui_states.completion_code){
                            ons.notification.alert(__("Invalid OTP code"),{'title':""});
                            return;
                        }
                        driver_before_startride();                  
                        
                    }
                    
            });
            return
        } 

        driver_before_startride();      
        
    }else if(btn_state == 3){ //process "drop off / end ride" action button function
        if(driver_accept_ride_request_ui_states.hasOwnProperty('waypoint1_address') && driver_accept_ride_request_ui_states.waypoint1_address != '' && driver_accept_ride_request_ui_states.hasOwnProperty('waypoint2_address') && driver_accept_ride_request_ui_states.waypoint2_address != ''){
            if(!driver_accept_ride_request_ui_states.confirm_stop1 && !driver_accept_ride_request_ui_states.confirm_stop2){
                ride_ui_btn_sound.play();
                $('#status-msg-dropoff-ind').hide();
                $('#status-msg-stop-ind').show();
                $('#status-msg-address').html(driver_accept_ride_request_ui_states.waypoint2_address);
                //set the navigation button to point to waypoint 1 destination
                $('#status-msg-nav-rider').data('plat',driver_accept_ride_request_ui_states.waypoint2_lat);
                $('#status-msg-nav-rider').data('plng',driver_accept_ride_request_ui_states.waypoint2_long);
                $('#status-msg-nav-rider').data('pickdrop',1); //sets to 0 for pickup and 1 for dropoff 
                driver_accept_ride_request_ui_states.confirm_stop1 = 1
                $('#ride-action-btn').html(__("Confirm Stop 2"));
                return;

            }else if(driver_accept_ride_request_ui_states.confirm_stop1 && !driver_accept_ride_request_ui_states.confirm_stop2){
                ride_ui_btn_sound.play();
                $('#ride-action-btn').html(__("Drop Off"));
                $('#status-msg-dropoff-ind').show();
                $('#status-msg-stop-ind').hide();
                $('#status-msg-address').html(driver_accept_ride_request_ui_states.d_addr);
                //set the navigation button to point to waypoint 1 destination
                $('#status-msg-nav-rider').data('plat',driver_accept_ride_request_ui_states.d_lat);
                $('#status-msg-nav-rider').data('plng',driver_accept_ride_request_ui_states.d_lng);
                $('#status-msg-nav-rider').data('pickdrop',1); //sets to 0 for pickup and 1 for dropoff
                driver_accept_ride_request_ui_states.confirm_stop2 = 1;
                return;
            }
            //two stops
        }else if(driver_accept_ride_request_ui_states.hasOwnProperty('waypoint1_address') && driver_accept_ride_request_ui_states.waypoint1_address != ''){
            //waypoint1 stop
            if(!driver_accept_ride_request_ui_states.confirm_stop1){
                ride_ui_btn_sound.play();
                $('#ride-action-btn').html(__("Drop Off"));
                $('#status-msg-dropoff-ind').show();
                $('#status-msg-stop-ind').hide();
                $('#status-msg-address').html(driver_accept_ride_request_ui_states.d_addr);
                //set the navigation button to point to waypoint 1 destination
                $('#status-msg-nav-rider').data('plat',driver_accept_ride_request_ui_states.d_lat);
                $('#status-msg-nav-rider').data('plng',driver_accept_ride_request_ui_states.d_lng);
                $('#status-msg-nav-rider').data('pickdrop',1); //sets to 0 for pickup and 1 for dropoff
                driver_accept_ride_request_ui_states.confirm_stop1 = 1;
                return;
            }
            
        }else if(driver_accept_ride_request_ui_states.hasOwnProperty('waypoint2_address') && driver_accept_ride_request_ui_states.waypoint2_address != ''){
            if(!driver_accept_ride_request_ui_states.confirm_stop2){ 
                ride_ui_btn_sound.play();   
                $('#status-msg-dropoff-ind').show();
                $('#status-msg-stop-ind').hide();
                $('#status-msg-address').html(driver_accept_ride_request_ui_states.d_addr);
                $('#ride-action-btn').html(__("Drop Off"));
                //set the navigation button to point to waypoint 1 destination
                $('#status-msg-nav-rider').data('plat',driver_accept_ride_request_ui_states.d_lat);
                $('#status-msg-nav-rider').data('plng',driver_accept_ride_request_ui_states.d_lng);
                $('#status-msg-nav-rider').data('pickdrop',1); //sets to 0 for pickup and 1 for dropoff
                driver_accept_ride_request_ui_states.confirm_stop2 = 1;
                return;
            }
        }
        
        ons.notification.confirm({
            message: __('Are you sure you have completed this Ride?'),
            title: '',
            buttonLabels: [__('Yes'), __('No')],
            animation: 'default', // or 'none'
            primaryButtonIndex: 1,
            cancelable: true,
            callback: function(index) {
            
            if(!index){
                // 0-: Button index from the left
                if(app_settings.ride_otp == 2){ //if otp request enabled on server
                    ons.notification.prompt(__('Please request OTP code from rider for this booking and enter it below'),{title: __('Ride OTP Code'),buttonLabels : __('Continue'),cancelable: true, inputType : 'number'})
                        .then(function(input) {
                            if(!input){
                                return; 
                            }else{
                                if(input != driver_accept_ride_request_ui_states.completion_code){
                                    ons.notification.alert(__("Invalid OTP code"),{'title':""});
                                    return;
                                }
                                driver_before_completed();                  
                                
                            }
                            
                    });
                    return
                }

                driver_before_completed();

                
            }else{
                return;
                // -1: Cancel
            }
            
            }
        });       
        
        
        

    }


}

function driver_before_startride(){

    clearInterval(driver_accept_ride_request_ui_update_timer);

    old_time_seconds = 0;    
    total_ride_seconds = 0;
    old_driver_position_lat = 0.0;
    old_driver_position_lng = 0.0;
    total_ride_distance = 0;
    var driver_motion_sample_counter = 0;
    var driver_distance_samples = [];
    
    
    
    
    driver_accept_ride_request_ui_update_timer = setInterval(function(){
        save_progress_counter++;
        //compute elapsed time since ride started
        if(old_time_seconds == 0){
            old_time_seconds = Date.now() / 1000 | 0; //get the number of seconds TIMESTAMP
        }else{
            var current_time = Date.now() / 1000 | 0;
            var seconds_elapsed = current_time - old_time_seconds;
            total_ride_seconds += seconds_elapsed;
            old_time_seconds = current_time;

            var _hours = Math.floor(total_ride_seconds / 3600);
            var _minutes = Math.floor((total_ride_seconds % 3600) / 60);
            var _seconds = (total_ride_seconds % 3600) % 60;

            var ride_duration = '';
            if(_hours){
                ride_duration += _hours + 'Hr ';
            }

            if(_minutes){
                ride_duration += _minutes + 'Min ';
            }

            
            ride_duration += _seconds + 'Secs';
            
            driver_accept_ride_request_ui_states.total_ride_time = total_ride_seconds;
            driver_accept_ride_request_ui_states.total_ride_time_formated = ride_duration;
            $('#ride-stats-time').html(ride_duration);

        }



        //compute distance travelled

        
        if(driver_accept_ride_request_ui_states.drv_last_pos_time == 0){
            driver_accept_ride_request_ui_states.drv_last_pos_time = Date.now() / 1000 | 0; //get the number of seconds TIMESTAMP
        }else{

            var current_drv_pos_time = Date.now() / 1000 | 0;
            var drv_pos_time_elapsed = current_drv_pos_time - driver_accept_ride_request_ui_states.drv_last_pos_time;
            

            if(driver_accept_ride_request_ui_states.drv_last_pos_lat == 0 || driver_accept_ride_request_ui_states.drv_last_pos_lng == 0){
                driver_accept_ride_request_ui_states.drv_last_pos_lat = driver_lat;
                driver_accept_ride_request_ui_states.drv_last_pos_lng = driver_lng;
            }else{

                



                let old_driver_pos = {'lat':driver_accept_ride_request_ui_states.drv_last_pos_lat,'lng':driver_accept_ride_request_ui_states.drv_last_pos_lng};
                let current_pos = {'lat':driver_lat,'lng':driver_lng};

                let distance = plugin.google.maps.geometry.spherical.computeDistanceBetween(old_driver_pos, current_pos); //distance in meters

                if(isNaN(distance)){
                    distance = 0;
                }

                 

                if(driver_motion_sample_counter > 2){ //sample distances 3 times; driver is in motion if we have all different increamental samples and no duplicates

                    driver_motion_sample_counter = 0;

                    if(!(new Set(driver_distance_samples)).size !== driver_distance_samples.length){
                        //no duplicates found, so driver is in motion. update distance covered
                        total_ride_distance += distance;
                        driver_accept_ride_request_ui_states.drv_last_pos_lat = driver_lat;
                        driver_accept_ride_request_ui_states.drv_last_pos_lng = driver_lng;
                        driver_accept_ride_request_ui_states.drv_last_pos_time = Date.now() / 1000 | 0; //update last driver distance position update time

                    }
                                       
                }


                driver_distance_samples[driver_motion_sample_counter] = distance;
                driver_motion_sample_counter++;

                
                var total_ride_distance_km = total_ride_distance / 1000;
                total_ride_distance_km = Math.round(total_ride_distance_km * 100) / 100;
                driver_accept_ride_request_ui_states.total_ride_distance = total_ride_distance_km;
                driver_accept_ride_request_ui_states.total_ride_distance_formated = total_ride_distance_km + 'KM'

                if(routetariffs.result[userprofileinfo.city_id].cars[0].dist_unit == 0){ //kilometer
                    $('#ride-stats-dist').html(total_ride_distance_km + 'km');
                }else{//miles  
                    let total_ride_dist_mi = total_ride_distance / 1609.344;  
                    total_ride_dist_mi = Math.round(total_ride_dist_mi * 100) / 100;        
                    $('#ride-stats-dist').html(total_ride_dist_mi + 'mi');
                }
            }

        }
        

        if(save_progress_counter > 5){
            save_progress_counter = 0;
            localStorage.setObject(`pbk-${driver_accept_ride_request_ui_states.booking_id}`,driver_accept_ride_request_ui_states);
        }


    },1000)

    startride(driver_accept_ride_request_ui_states.booking_id)
}


function driver_before_completed(){

    clearInterval(driver_accept_ride_request_ui_update_timer);
    old_time_seconds = 0;
    total_ride_seconds = 0;
    old_driver_position_lat = 0.0;
    old_driver_position_lng = 0.0;
    total_ride_distance = 0;

    //fix total ride distnce

    let driver_trip_start_pos = {'lat':driver_accept_ride_request_ui_states.drv_start_ride_pos_lat,'lng': driver_accept_ride_request_ui_states.drv_start_ride_pos_lng};
    let driver_current_pos = {'lat':driver_lat,'lng':driver_lng};    
    
    //get a haversine distance from initial driver trip start location and the driver current position
    let distance = plugin.google.maps.geometry.spherical.computeDistanceBetween(driver_trip_start_pos, driver_current_pos); //distance in meters


    if(isNaN(distance)){
        distance = 0;
    }

    // check is the haversine distance is greater than the trip meter calculated distance.

    if(distance > parseFloat(driver_accept_ride_request_ui_states.total_ride_distance) * 1000){
        //use the haversine computed distance
        var distance_km = distance / 1000;
        distance_km = Math.round(distance_km * 100) / 100;
        driver_accept_ride_request_ui_states.total_ride_distance = distance_km; //in km        
    }


    //compute ride fare 
    
    
    if(driver_ride_tariff.cfare_enabled == 1){
        
        
        var current_dt = new Date();
        var c_year = current_dt.getFullYear();
        var c_month = current_dt.getMonth() + 1;
        var c_day = current_dt.getDate();
        var c_day_week = current_dt.getDay();
        var c_hours = current_dt.getHours();
        var c_min = current_dt.getMinutes();

        var ride_fare_cost;

        //compute base ride fare based on night or day
        if(c_hours >= userprofileinfo.night_start || c_hours <= userprofileinfo.night_end){
            //Night time
            ride_fare_cost = parseFloat(driver_ride_tariff.npickup_cost) + parseFloat(driver_ride_tariff.ndrop_off_cost) + (parseFloat(driver_ride_tariff.ncost_per_minute) * parseFloat(driver_accept_ride_request_ui_states.total_ride_time / 60)) + (parseFloat(driver_ride_tariff.ncost_per_km) * parseFloat(driver_accept_ride_request_ui_states.total_ride_distance));           

        }else{
            ride_fare_cost = parseFloat(driver_ride_tariff.pickup_cost) + parseFloat(driver_ride_tariff.drop_off_cost) + (parseFloat(driver_ride_tariff.cost_per_minute) * parseFloat(driver_accept_ride_request_ui_states.total_ride_time / 60)) + (parseFloat(driver_ride_tariff.cost_per_km) * parseFloat(driver_accept_ride_request_ui_states.total_ride_distance));           
        }

        

        


        //compute peak period
        if(driver_ride_tariff.pp_enabled == 1){ //check if peak period charge is enabled for this car
            var ride_peak_period_days;
            try{
                ride_peak_period_days = JSON.parse(driver_ride_tariff.pp_active_days);
            }catch(e){
                console.log('json parse error.');
            }
                

            if(typeof ride_peak_period_days == 'object'){
            for(var i = 0;i < ride_peak_period_days.length;i++){

                if(ride_peak_period_days[i] == c_day_week || ride_peak_period_days[i] - 7 == c_day_week){ //check if the day is part of the peak period days. had to correct for mismatch in sunday as javascript getDay() has sunday as 0, monday 1...
                    //day of the week is part of peak period days
                    
                    if(c_hours >= driver_ride_tariff.pp_start && c_hours <= driver_ride_tariff.pp_end){
                    //peak period, compute booking cost
                    //peak_period = 1;
                    if(driver_ride_tariff.pp_charge_type == 1){
                        ride_fare_cost = ride_fare_cost * parseFloat(driver_ride_tariff.pp_charge_value);
                    }else{
                        ride_fare_cost = ride_fare_cost + parseFloat(driver_ride_tariff.pp_charge_value);
                    }                     
                    
                    }
                    break;
                }


            }
            } 
        }

        ride_fare_cost = Math.round(ride_fare_cost * 100) / 100;
        ride_fare_cost = ride_fare_cost.toFixed(2);

        var ride_estimated_fare = parseFloat(driver_accept_ride_request_ui_states.fare);
        var ride_estimated_fare_threshold = ride_estimated_fare - (50 * ride_estimated_fare / 100);

        driver_accept_ride_request_ui_states.fare = ride_fare_cost;
        driver_accept_ride_request_ui_states.paid_amount = ride_fare_cost;

        /* if(ride_fare_cost > ride_estimated_fare_threshold){
            driver_accept_ride_request_ui_states.fare = ride_fare_cost;
            driver_accept_ride_request_ui_states.paid_amount = ride_fare_cost;
        } */

    }

    //compute referal discount if enabled for this booking
    if(driver_accept_ride_request_ui_states.referral_used == 1){
        let referral_discount_amount = driver_accept_ride_request_ui_states.fare * (driver_accept_ride_request_ui_states.referral_discount_value / 100);
        driver_accept_ride_request_ui_states.paid_amount = driver_accept_ride_request_ui_states.fare - referral_discount_amount;
        driver_accept_ride_request_ui_states.paid_amount = Math.round(driver_accept_ride_request_ui_states.paid_amount * 100) / 100;

    }

    //compute coupon discount
    if(driver_accept_ride_request_ui_states.coupon_code != null){
        if(driver_accept_ride_request_ui_states.coupon_discount_type == 1){ //nominal coupon discount
            let coupon_discount_amount = driver_accept_ride_request_ui_states.coupon_discount_value;
            driver_accept_ride_request_ui_states.paid_amount = coupon_discount_amount;
        }else{//percentage coupon discount
            let coupon_discount_amount = driver_accept_ride_request_ui_states.paid_amount * (driver_accept_ride_request_ui_states.coupon_discount_value / 100);
            driver_accept_ride_request_ui_states.paid_amount = driver_accept_ride_request_ui_states.paid_amount - coupon_discount_amount;
            driver_accept_ride_request_ui_states.paid_amount = Math.round(driver_accept_ride_request_ui_states.paid_amount * 100) / 100;
        }
    }                           

    
    drivercompleted(driver_accept_ride_request_ui_states.booking_id,driver_accept_ride_request_ui_states.completion_code);

}


function readImgFile(input, callback) {
    if (input.target.files && input.target.files[0]) {
        var imgPath = input.target.files[0].name;
        var imgSize = input.target.files[0].size;
        
        var extn = imgPath.substring(imgPath.lastIndexOf('.') + 1).toLowerCase();
        var result = {data:'',error:1,error_msg:''};
        if(imgSize > 10485760){
            //filesize greater than 10MB
            result.error_msg = 'File size must not be greater than 10MB';
            callback(result);
            return;
        }
        loading.show();

        if (extn == "jpg" || extn == "jpeg") {
           if (typeof (FileReader) != "undefined") {
                var reader = new FileReader();			
                reader.onload = function (e) {
                    /* jQuery('#passport')
                        .attr('src', e.target.result)
                        .width(150)
                        .height('auto'); */
                    
                    //resize image to fixed width
                    var img = document.createElement("img");
                    img.onload = function(event) {
                        var MAX_WIDTH = 800;
                        var MAX_HEIGHT = 1600;

                        var width = img.width;
                        var height = img.height;
                        
                        if (width > height) {
                            if (width > MAX_WIDTH) {
                                height = height * (MAX_WIDTH / width);
                                width = MAX_WIDTH;
                            }
                        } else {
                            if (height > MAX_HEIGHT) {
                                width = width * (MAX_HEIGHT / height);
                                height = MAX_HEIGHT;
                            }
                        }

                        var canvas = document.createElement("canvas");
                        canvas.width = width;
                        canvas.height = height;
                        var ctx = canvas.getContext("2d");
                        ctx.drawImage(img, 0, 0, width, height);

                        result.data = canvas.toDataURL("image/jpeg");
                        //console.log(result.data);
                        result.error = 0;
                        loading.hide();
                        callback(result);
                    }
                    img.src = e.target.result;     
                    
                                
                        
                };

                reader.readAsDataURL(input.target.files[0]);
            }

        }else{
            loading.hide();
            result.error_msg = __('Invalid file type. Only JPG files are allowed');
            callback(result);
        }
    }
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

    
    const message_ref = db.ref(`Drivers/drvr-${user_id}/notf`);
    message_ref.on('value', (snapshot) => {

        
        const data = snapshot.val();
        if(data == null)return;
        if(!(data.hasOwnProperty('msg') && data.hasOwnProperty('msg_t')))return;

        let last_msg_time_id = localStorage.getItem('fb_last_recvd');

        
        if(data.msg_t == last_msg_time_id)return;

        localStorage.setItem('fb_last_recvd',data.msg_t);      
        
        let current_local_timestamp = Date.now();
        current_local_timestamp += server_client_time_diff; //sync with server time
        current_local_timestamp = current_local_timestamp / 1000 | 0; //get only the seconds part

        if((current_local_timestamp - 5) > data.msg_t)return; //skip old messages

        //console.log(data);
        //console.log(Date.now() / 1000 | 0);
        
        var message = data.msg;
        
        if(message.hasOwnProperty('booking_id') && message.hasOwnProperty('action')){

            if(!message.hasOwnProperty('repeatable') && message.action != "chat-message"){
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
                case "driver-allocate":
                booking_allocate_notify(message);
                break;
                case "customer-cancelled":
                customer_cancelled_notify(message);
                break;
                case "chat-message":
                chat_msg_notify(message);
                break;
                
            }
        }



    });

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
            var message = data.message;
            console.log(message)
            if(message.hasOwnProperty('booking_id') && message.hasOwnProperty('action')){

                if(!message.hasOwnProperty('repeatable')){
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
                    case "driver-allocate":
                    booking_allocate_notify(message);
                    break;
                    case "customer-cancelled":
                    customer_cancelled_notify(message);
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
                    channels : ['drvr-' + uid]
                    
                });
            }
        }
    });
    
    pubnub.subscribe({
        // connect to a channel 
        channels : ['drvr-' + uid]
        
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

function showmoreuserinfo(){

    booking_id = driver_accept_ride_request_ui_states.booking_id;    
    
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
                $('#user-info-rating').attr('src', "img/rating-" + data_obj.userdata.user_rating + ".png");
                $('#user-info-name').text(data_obj.userdata.firstname + " " + data_obj.userdata.lastname);
                $('#user-info-joined').text(data_obj.userdata.account_create_date);
                $('#user-info-completed').text(data_obj.userdata.completed_rides);
                $('#user-info-cancelled').text(data_obj.userdata.cancelled_rides);
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


function getreferralsdata(){
    booking_id = driver_accept_ride_request_ui_states.booking_id;    
    
    loading.show();  
    var post_data = {'action_get':'getreferralsdata'};       
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
                $('#referrals-content').html(data_obj.referrals_data);
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