/***********************************************************************
 * App Controllers. These controllers will be called on page initialization. *
 ***********************************************************************/

window.myApp = {};



myApp.controllers = {

  //////////////////////////
  //Page Controller: Runs code for each page pushed to the navigator  //
  //////////////////////////
  

  mappage: function(page) {

    
    
       
    
      
    

    $('#pick-box').on('click',function(e){


      

        //console.log(e);
        if(typeof routetariffs !== 'object' || selected_city_id == 0 || selected_city_id == null){        
          showroutes();
          return;       
        }
        
        if(!$('#pick-box-container').hasClass("address-box-p-sel")){
          //$('#pick-box-container').addClass("address-box-p-sel")
          //$("#drop-box-container").removeClass("address-box-d-sel");

          $('#pick-box').css('border','2px solid #42a5f5');
          $('#drop-box').css('border','2px solid #999');

          if(marker1){

          
            map.animateCamera({
                target: {lat: pick_up_data.lat, lng: pick_up_data.lng},
                zoom: 18,
                duration: 1000,
                padding: 0  // default = 20px
              }, function() {
                //alert("Camera target has been changed");
  
            });
            
            return;
            
          }

          
        }

        location_type_selected = 0;
        show_adresses();
        
    });



    $('#drop-box').on('click',function(e){

      

      //console.log(e);
      if(typeof routetariffs !== 'object' || selected_city_id == 0 || selected_city_id == null){        
        showroutes();
        return;       
      }
      
      if(!$('#drop-box-container').hasClass("address-box-d-sel")){
        //$('#drop-box-container').addClass("address-box-d-sel")
        //$("#pick-box-container").removeClass("address-box-p-sel");

        $('#pick-box').css('border','2px solid #999');
          $('#drop-box').css('border','2px solid #42a5f5');

        if(marker2){

          
          /* map.animateCamera({
              target: {lat: drop_off_data.lat, lng: drop_off_data.lng},
              zoom: 18,
              duration: 1000,
              padding: 0  // default = 20px
            }, function() {
              //alert("Camera target has been changed");

          });

          return; */
          
        }

        
      }
      location_type_selected = 1;
      show_adresses();
      
  });

  $("#map-canvas").on('pointerdown',function(){
    $("#drop-box-container").removeClass("address-box-d-sel");
    $("#pick-box-container").removeClass("address-box-p-sel");

    $('#pick-box').css('border','2px solid #999');
    $('#drop-box').css('border','2px solid #999');
    
  })
    

    /* $('#pac-input, #pac-input2').on('focus',function(e){
      console.log(selected_city_id);
      if(typeof routetariffs !== 'object' || selected_city_id == 0 || selected_city_id == null){
        
        showroutes();
        return;       
      }
    });
    
  
    $('#pac-input, #pac-input2').on('keyup',function(e){
      e.stopPropagation();
      $('#bookbutton').attr("disabled","disabled");
      if(typeof routetariffs !== 'object' && selected_city_id == 0 || selected_city_id == null){                 
        return;       
      }    
      var str = $(this).val();
      var prefix = selected_city_route + ', ';
      if(str.indexOf(prefix) == 0) {
        console.log($(this).val());
      } else {
        if (prefix.indexOf(str) >= 0) {
              $(this).val(prefix);
        } else {
              $(this).val(prefix+str);
       }
      }
    
    });  */ 

    
               
    
    // Set button functionality to open/close the menu.
    page.querySelector('#menubtn').onclick = function() {

      //$("#drop-box-container").removeClass("address-box-d-sel");
      //$("#pick-box-container").removeClass("address-box-p-sel");

      $('#user-menu-photo').attr('src',userprofileinfo.photo);
      
      document.querySelector('#mySplitter').left.toggle();
      document.querySelector('#users-name').innerHTML = userprofileinfo.firstname + " " + userprofileinfo.lastname;
      var wallet_amount_currency_converted = wallet_amount * selected_city_curency_exchange_rate; //converting wallet amount from default currency to selected city currency
      wallet_amount_currency_converted = Math.round(wallet_amount_currency_converted * 100) / 100;      
      if(selected_city_id != 0){
        document.querySelector('#users-wallet').innerHTML = __("Wallet Balance") + ": " + selected_city_curency_symbol + wallet_amount_currency_converted;      
      }else{
        document.querySelector('#users-wallet').innerHTML = __("Wallet Balance") + ":---";      
      }

    };



    document.querySelector('#mySplitter').addEventListener('preopen', function(event) {
      side_menu_state = 1;
    });


    document.querySelector('#mySplitter').addEventListener('preclose', function(event) {
      side_menu_state = 0;
    })


    
    

    

    
    
  },

  verifyphonepage : function(page){

      translateElements('verifyphone');

      $('#resend-phone-code-btn').data('phonenumber',page.data.phone_num);
      
      //initiate resend code button activate countdown
      clearInterval(resend_code_countdown_timer_handle);
      var countdown = RESEND_CODE_COUNTDOWN_VALUE;
      resend_code_btn_status = 0;
      $('#resend-phone-code-btn').text(__('Resend Code') + " " + countdown);
      resend_code_countdown_timer_handle = setInterval(function(){
        countdown--;
        if(countdown < 1){
            countdown = 0;
            resend_code_btn_status = 1;
            $('#resend-phone-code-btn').text(__('Resend Code'));
            clearInterval(resend_code_countdown_timer_handle);
            return;
        }

        $('#resend-phone-code-btn').text(__('Resend Code') + " " + countdown);
      
      },1000);
      
  },

  loginpage: function(page){
    /* alert("loaded"); */
    translateElements('login');

    let lang_str = "";
    available_langs.forEach(function(val,indx){
      let opt_sel = '';
      if(val.code == selected_lang.code){
        opt_sel = "selected";
      }
      lang_str += `<option value='${indx}' ${opt_sel} >${val.name}</option>`;
    })

    $('#lang-select2').html(lang_str);

    $('#lang-select2').off('change').on('change', function(e){
      e.preventDefault();
      let sel_lang_indx = $(this).val();
      selected_lang = available_langs[sel_lang_indx];
      localStorage.setObject('lang',selected_lang);
      //let lang_el = document.getElementById('lang-el');
      //lang_el.src = `js/lang/${selected_lang.code}.js`;
      $('#login-lang').text($(this).find(':selected').text());
      //restart App
      ons.notification.alert(__("Restart App"), {title:"",buttonLabels:['OK'],callback: function(){
        window.location.reload();
        return;
      }});

    })


    $('#login-lang').text($('#lang-select2').find(':selected').text());

    if(carrier_country_code){
      var dial_code = $("li[data-country-code='" + carrier_country_code + "']").data('dial-code');
      if(dial_code){          
          user_country_dial_code = dial_code;
          $('#country-flag').attr('class', 'iti__flag iti__' + carrier_country_code);
          $('#country-flag').data('country', carrier_country_code)
          $('#tel-code').html(' +' + dial_code);
          $('#tel-code').data('dialcode', dial_code);

      }
    }
      
  },
  signuppage: function(page){
    /* alert("loaded"); */
    translateElements('signup');
    if(carrier_country_code){
      var dial_code = $("li[data-country-code='" + carrier_country_code + "']").data('dial-code');
      if(dial_code){          
          user_country_dial_code = dial_code;
          $('#country-flag-reg').attr('class', 'iti__flag iti__' + carrier_country_code);
          $('#country-flag-reg').data('country', carrier_country_code)
          $('#tel-code-reg').html(' +' + dial_code);
          $('#tel-code-reg').data('dialcode', dial_code);
      }
    }
      
  },

  interstatepage: function(page){
        translateElements('inter');
        $('#interstatebooking-title').html(page.data.title);
        $('#bookbutton2').css('visibility','hidden');
      

                   

    
  },

  

  promotions: function(){
    translateElements('promotions');
    promocheckadd('',1);
  },

  verifypage: function(){
    translateElements('verify');
  },

  softwarelicense: function(){
    translateElements('softlice');
  },

  ridecomplete: function(page){
    translateElements('ridecompl');
    $('.rate-star').off('click').on('click', function(){
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
    
    });

    $('#rate-driver-image-preload').attr('src',page.data.comp_data.driver_photo); //load driver image
    $('#rate-driver-name').html(page.data.comp_data.driver_firstname); //load driver firstname
    $('#rate-button').data('bookingid',page.data.comp_data.booking_id); ////load ride rating action button data
    $('#ride-complete-amount').html(page.data.comp_data.ride_amount); ////load amount of the ride 
    $('#ride-complete-stats-dist').html(page.data.comp_data.ride_distance + "KM"); ////load amount of the ride 
    $('#ride-complete-stats-time').html(page.data.comp_data.ride_duration); ////load amount of the ride 
    $('#ride-complete-reward-points').html(page.data.comp_data.reward_points_earned); //number of reward points earned in this trip

    driver_tip_amount = 0;
    let driver_tips_buttons_html = '';
    if(app_settings.driver_tip_presets == ''){
        $('#driver-tip-buttons-container').hide();
    }else{
      let driver_tips_preset_string = app_settings.driver_tip_presets;
      let driver_tips_preset_array = driver_tips_preset_string.split('|');
      if(typeof driver_tips_preset_array == 'object'){
        
        driver_tips_preset_array.forEach(function(val,indx){
          let tips_amount = val.trim();
          if(indx < 4){
            driver_tips_buttons_html += `<ons-button class='driver-tip-buttons' id='driver-tip-button-${indx}' style="border: thin solid #ccc;margin-right:10px;" onclick="drivertipbuttonclick($(this),${tips_amount});" modifier="outline">${tips_amount}</ons-button>`;
          }
          
        })
        $('#driver-tip-buttons-presets').html(driver_tips_buttons_html);
      }else{
        $('#driver-tip-buttons-container').hide();
      }
    }

  },

  routespage: function(page){

      translateElements('routespg');     
      /* var city = routetariffs.result.city;
      var state = routetariffs.result.state;

      if(city.length > 0){
        $('#routes-list').html("<ons-list>" + routetariffs.result.city + "</ons-list>");
      }


      if(state.length > 0){
        $('#state-routes-list').html("<ons-list>" + routetariffs.result.state + "</ons-list>");
      }

      $('#radio-sel-' + selected_city_id).attr('checked','checked'); */



  },

  intracitylistpage : function(page){
    var city = routetariffs.result.city;
    
    if(city.length > 0){
      $('#routes-list').html("<ons-list>" + routetariffs.result.city + "</ons-list>");
    }

    

    $('#radio-sel-' + selected_city_id).attr('checked','checked');

  },

  interstatelistpage : function(page){

    
    var state = routetariffs.result.state;

    

    if(state.length > 0){
      $('#state-routes-list').html("<ons-list>" + routetariffs.result.state + "</ons-list>");
    }

    


  },

  aboutapp : function(page){
    translateElements('aboutapp');
    if(!aboutpage_content == ''){
      $('#aboutpage-content').html(aboutpage_content);
      return;
    }
    
    getuserinfopages();
    
  },

  infopage: function(){
    translateElements('infopg');
  },

  walletpage : function(page){
    translateElements('walletpg');
  },


  walletbalance: function(page){
    translateElements('walletbl');
    var wallet_amount_currency_converted = wallet_amount * selected_city_curency_exchange_rate; //converting wallet amount from default currency to selected city currency
    wallet_amount_currency_converted = Math.round(wallet_amount_currency_converted * 100) / 100;

    $('#walletbal').html(selected_city_curency_symbol + wallet_amount_currency_converted); //show amount 
    $('#rewardpointsvalue').text(reward_points);   

    if(app_settings.default_payment_gateway == 'paymob'){
        $('#kiosk-mode-option').show();
    }else{
      $('#kiosk-mode-option').hide();
    }

    let topup_buttons_html = '';
    if(app_settings.wallet_topup_presets == ''){
        $('#wallet-preset-buttons').hide();
    }else{
      let wallet_topup_preset_string = app_settings.wallet_topup_presets;
      let wallet_topup_preset_array = wallet_topup_preset_string.split('|');
      if(typeof wallet_topup_preset_array == 'object'){
        
        wallet_topup_preset_array.forEach(function(val,indx){
          let topup_amount = val.trim();
          if(indx < 4){
            topup_buttons_html += `<ons-button style="border: thin solid #ccc;margin-right:10px;" onclick="$('#fundAmount').val('${topup_amount}');Vpay();" modifier="outline">${topup_amount}</ons-button>`;
          }
          
        })
        $('#wallet-preset-buttons').html(topup_buttons_html);
      }else{
        $('#wallet-preset-buttons').hide();
      }
    }
    
  },

  termsandprivacy: function(page){
      translateElements('termspriv');
      if(!terms_and_privacy_content == ''){
        $('#privacy-content').html(terms_and_privacy_content);
        return;
      }
      
      getuserinfopages();
  },

  drivewithapp: function(page){
    translateElements('drivewith');
      if(!drivewith_content == ''){
        $('#drivewith-content').html(drivewith_content);
        return;
      }
      
      getuserinfopages();
  },

  helpcategories: function(page){
      translateElements('helpgd'); 
      if(!help_categories == ''){
        $('#help-cat-content').html(help_categories);
        return;
      }
      
      gethelpdata();
  },

  helptopics: function(page){
    $('#help-topics-title').html(page.data.page_title);
    $('#help-topics-content').html(page.data.topics_list);
    return;
  }
  ,

  helpcontent: function(page){
    $('#help-content-title').html(page.data.help_content_title);
    if(typeof help_topics_contents === 'object' && help_topics_contents.hasOwnProperty(page.data.help_content_id)){
      $('#help-content').html(help_topics_contents[page.data.help_content_id]);
      return;
    }

    gethelpcontent(page.data.help_content_id);
      
  },

  profilepage:function(page){
    translateElements('profilepg');
    //handle language selector
    let lang_str = "";
    available_langs.forEach(function(val,indx){
      let opt_sel = '';
      if(val.code == selected_lang.code){
        opt_sel = "selected";
      }
      lang_str += `<option value='${indx}' ${opt_sel} >${val.name}</option>`;
    })

    $('#lang-select').html(lang_str);

    $('#lang-select').off('change').on('change', function(e){
      e.preventDefault();
      let sel_lang_indx = $(this).val();
      selected_lang = available_langs[sel_lang_indx];
      localStorage.setObject('lang',selected_lang);
      //let lang_el = document.getElementById('lang-el');
      //lang_el.src = `js/lang/${selected_lang.code}.js`;

      //restart App
      ons.notification.alert(__("Restart App"), {title:"",buttonLabels:['OK'],callback: function(){
        window.location.reload();
        return;
      }});

    })

    if(typeof userprofileinfo === 'object'){        
      
      $('#firstname').html(userprofileinfo.firstname);
      $('#lastname').html(userprofileinfo.lastname);
      $('#email').val(userprofileinfo.email);
      $('#address').html(userprofileinfo.address);
      $('#phone').val(userprofileinfo.phone);
      $('#refcode_info').html(userprofileinfo.ref_code);
      $('#user-rating').attr("src","img/rating-" + userprofileinfo.user_rating + ".png");
      //$('#user-photo').attr('src',userprofileinfo.photo);
      $('.cropit-preview').css('background-image','url('+ userprofileinfo.photo + ')');
      if(userprofileinfo.country_code){
        var dial_code = $("li[data-country-code='" + userprofileinfo.country_code + "']").data('dial-code');
        if(dial_code){          
            user_country_dial_code = dial_code;
            $('#country-flag-profile').attr('class', 'iti__flag iti__' + userprofileinfo.country_code);
            $('#country-flag-profile').data('country', userprofileinfo.country_code)
            $('#tel-code-profile').html(' +' + dial_code);
            $('#tel-code-profile').data('dialcode', dial_code);
  
        }
      }
      return;
    }

    loading.show();
    var post_data = {'action':'getuserprofileinfo'};       
        jQuery.ajax({
        url: ajaxurl,
        method: 'POST',
        timeout : 15000,
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
                    console.log(data_obj);
                    userprofileinfo = JSON.parse(data);
                    $('#firstname').val(userprofileinfo.firstname);
                    $('#lastname').val(userprofileinfo.lastname);
                    $('#email').val(userprofileinfo.email);
                    //$('#address').val(userprofileinfo.address);
                    $('#phone').val(userprofileinfo.phone);
                    return;
                }


               
                
                
            },
            error: function() {                                
                
              ons.notification.alert(__("Error communicating with server"),{title:""});
              return;
                
            }

        });

  },

  notificationspage : function(){
        translateElements('notifpage');
  },

  newbookingpage: function(page){
        translateElements('newbk');
        if(typeof routetariffs !== 'object'){
         return;     
        }

        
        var selected_route_id = '';
        verified_coupon_code = '';
        if(selected_state_id != 0){
          $('#rides-carousel').html(routetariffs.result[selected_state_id].cars_html);
          selected_route_id = selected_state_id;
        }else{
          $('#rides-carousel').html(routetariffs.result[selected_city_id].cars_html);
          selected_route_id = selected_city_id;
        }

        var table_width = $('#trip-summary').width();

        $('#cars-container').css('width',table_width - (15/100 * table_width));

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
        $('#puc_dt').html(__("Now"));
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



                        $('#puc_dt').html(c_day_str + '/' + c_month_str + '/' + c_year + ' ' + c_hours_str + ':' + c_min_str);
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


                        $('#bookride_cost').html(booking_currency_symbol + Math.round(bookride_cost * 100) / 100);
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

        $('#pick-up-address').html(pick_up_data['address']);
        $('#drop-off-address').html(drop_off_data['address']);

        $('#ride_dist_dur').html(intra_city_distance_text + " | " + intra_city_duration_text);

        
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

        $('#bookride_cost').html(booking_currency_symbol + Math.round(bookride_cost * 100) / 100);
                
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

          $('#bookride_cost').html(booking_currency_symbol + Math.round(bookride_cost * 100) / 100);

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

        
        
        var post_data = {'action_get':'newbooking','paddress':pick_up_data['address'],'plng':pick_up_data['lng'],'plat':pick_up_data['lat'],'daddress':drop_off_data['address'],'dlng':drop_off_data['lng'],'dlat':drop_off_data['lat'],'route_id':selected_route_id,'ride_id':selected_city_ride,'pdatetime':pdatetime,'p_type':payment_type,'scheduled':scheduled_ride,'b_token':booking_cost_h,'booking_price':bookride_cost,'coupon_code':verified_coupon_code};       
          
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
                    toggleroutepathanimation(0);
                    map.clear(); //clear all marker on map
                    city_drivers_markers = {};
                    pick_up_data=[];
                    drop_off_data=[];
                    pick_up_data = {'address': '','lng':'','lat':''};
                    drop_off_data = {'address': '','lng':'','lat':''};
                    route_polyline = null;
                    markerds1 = undefined;
                    markerds2 = undefined;

                    marker1 = undefined;
                    marker2 = undefined;
                    marker3 = undefined;
                    marker4 = undefined;

                    $('#bookbutton').css('visibility','hidden');
                    $('#bookbutton2').css('visibility','hidden');
                    $('#pac-input').val('');
                    $('#pac-input2').val('');

                    if(selected_state_id != 0){
                      document.querySelector('#myNavigator').popPage({animation:'fade',times:3});
                      if(scheduled_ride){
                        ons.notification.alert(__("Your inter-state booking has been placed. You will be contacted some minutes before your pickup time"),{'title':""});                                    
                      }else{
                        ons.notification.alert(__("Your inter-state booking has been placed. You will be contacted by a service person soon"),{'title':""});                                    
                        //$('#driver-search').show();
                      }
                    }else{

                      document.querySelector('#myNavigator').popPage({animation:'fade'});
                      if(scheduled_ride){
                        ons.notification.alert(__("Your booking has been placed. You will be notified 15 minutes before pickup time"),{'title':""});                                    
                      }else{
                        $('#driver-search').show();
                        driver_search_display_timer = setTimeout(function(){ //auto close the driver-search modal after a period of time.
                          $('#driver-search').hide();
                          ons.notification.alert(__("It is taking time to locate a driver. Please be patient while we continue searching. You will be notified"),{'title':""});                                    
                        },40000);
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


  },

  bookingdetails: function(page){
    translateElements('bookdet');
    //alert(page.data.bookid);
    var booking_details_data = JSON.parse($('#booking-list-item-data-' + page.data.bookid).html());
    console.log(booking_details_data);
    if(booking_details_data.hasOwnProperty('booking_cost')){
      $('#bookride_cost_det').html(booking_details_data.booking_cost);
    }

    if(booking_details_data.hasOwnProperty('booking_id')){
      $('#booking-details-title').html(__('Trip') + ': #' + booking_details_data.booking_id);
      $("#chat-driver-btn").data('bookingid', parseInt(booking_details_data.booking_id));
    }



    if(booking_details_data.hasOwnProperty('car_type')){
      $('#selected-ride').html(booking_details_data.car_type);
    }

    if(booking_details_data.hasOwnProperty('d_location')){
      $('#drop-off-address').html(booking_details_data.d_location);
    }


    if(booking_details_data.hasOwnProperty('p_location')){
      $('#pick-up-address').html(booking_details_data.p_location);
    }

    if(booking_details_data.hasOwnProperty('pick_up_time')){
      $('#puc_dt_det').html(booking_details_data.pick_up_time);
    }


    if(booking_details_data.hasOwnProperty('payment_type')){
      $('#payment-type-det').html(booking_details_data.payment_type);
    }


    if(booking_details_data.hasOwnProperty('car_image')){
      $('#route-ride-image').attr("src",booking_details_data.car_image);
    }


    if(booking_details_data.hasOwnProperty('car_desc')){
      $('#route-ride-desc-det').html(booking_details_data.car_desc);
    }

    if(booking_details_data.hasOwnProperty('coupon_code') && booking_details_data.coupon_code !== null){
      $('#coupon-code-det').html(booking_details_data.coupon_code);
    }

    
    if(booking_details_data.hasOwnProperty('driver_name')){
            
      if(booking_details_data.driver_name !== 'N/A'){
          $('.driver-details').show();
          $('#driver-name').html(booking_details_data.driver_name);

          if(booking_details_data.hasOwnProperty('driver_phone') && booking_details_data.driver_phone != '' && (booking_details_data.booking_status == 0 || booking_details_data.booking_status == 1)){
            $('#contact-driver').show();
            $('#call-driver-btn').data('number',booking_details_data.driver_phone);
            $('#sms-driver-btn').data('number',booking_details_data.driver_phone);
          }
          if(booking_details_data.hasOwnProperty('driver_image')){
            $('#driver-image-preload').attr("src",booking_details_data.driver_image);
          }
          if(booking_details_data.hasOwnProperty('driver_car_details')){
            $('#driver-car-details').html(booking_details_data.driver_car_details);
          }
          if(booking_details_data.hasOwnProperty('driver_plate_num')){
            $('#driver-plate-num').html(booking_details_data.driver_plate_num);
          }
          if(booking_details_data.hasOwnProperty('driver_rating')){
            $('#driver-rating').attr("src","img/rating-" + booking_details_data.driver_rating + ".png");
          }

      }      
    }

    if(booking_details_data.hasOwnProperty('booking_status')){    

        if(booking_details_data.booking_status == 3){
            $('.trip-completed').show(); 
            if(booking_details_data.hasOwnProperty('distance_travelled')){
              $('#trip-distance').html(booking_details_data.distance_travelled);
            } 
            
            if(booking_details_data.hasOwnProperty('ride_duration')){
              $('#trip-duration').html(booking_details_data.ride_duration);
            }

        }
    }

       

    

  },

  bookingpage: function(){
    translateElements('bookpage');   
    getbookings();
   
  },

  bookingpagecurrent: function(){
    $('#booking-pend-onride').html(bookings_data['pend_onride']);
  },


  bookingpagecomplete: function(){
    $('#booking-comp').html(bookings_data['completed']);
  },


  bookingpagecancel: function(){
    $('#booking-canc').html(bookings_data['cancelled']);
  },

  locationmappage: function(){
    translateElements('locat');
  },


  addresses: function(page){
    googlemap_autocomplete_session = Date.now(); //generate new session for google auto complete
    translateElements('addres');
    $("#address-input-p").val(pick_up_data.address);
    $("#address-input-d").val(drop_off_data.address);
    $("#address-input-ds1").val(multi_destinations['dest-1']['address']);
    $("#address-input-ds2").val(multi_destinations['dest-2']['address']);

    
    multi_destinations['pickup']['address'] = pick_up_data.address;
    multi_destinations['pickup']['lat'] = pick_up_data.lat;
    multi_destinations['pickup']['lng'] = pick_up_data.lng;      
    

    
    multi_destinations['dropoff']['address'] = drop_off_data.address;
    multi_destinations['dropoff']['lat'] = drop_off_data.lat;
    multi_destinations['dropoff']['lng'] = drop_off_data.lng;
    
    
    $("#address-input-p").attr("placeholder",__("From"));
    $("#address-input-d").attr("placeholder",__("Where to"));
    $('#address-input-ds1').attr("placeholder",__("Add a stop"));
    $('#address-input-ds2').attr("placeholder",__("Add a stop"));
    $('#processmultidestbtn').text(__('Continue'));
    //console.log(page.data);
    $('#myfavbtn').css('visibility','hidden');//hide the favourite fab button 
    $("#fav-list").html(fav_list_items_string);
    $("#recent-list").html(recent_list_items_string);
    
    if(location_type_selected){
      //$("#location-type-icon").css("background-image","url(img/drop-off.png)");
      if(multi_destination_mode == 1){
        if(dest_location_type_selected == 0){
          $("#address-page-title").html(__("Add a stop"));
          setTimeout(() => {
            $("#address-input-ds1").focus();
          }, 800); 
          if(selected_lang.dir == "rtl"){
            $("#address-input-p").attr('dir','rtl');
            $("#address-input-d").attr('dir','rtl');
            $("#address-input-ds1").attr('dir','rtl');
            $("#address-input-ds2").attr('dir','rtl');
          }else{
            $("#address-input-p").attr('dir','ltr');
            $("#address-input-d").attr('dir','ltl');
            $("#address-input-ds1").attr('dir','ltr');
            $("#address-input-ds2").attr('dir','ltl');
          }
        }else if(dest_location_type_selected == 1){
          $("#address-page-title").html(__("Add a stop"));
          setTimeout(() => {
            $("#address-input-ds2").focus();
          }, 800); 
          if(selected_lang.dir == "rtl"){
            $("#address-input-p").attr('dir','rtl');
            $("#address-input-d").attr('dir','rtl');
            $("#address-input-ds1").attr('dir','rtl');
            $("#address-input-ds2").attr('dir','rtl');
          }else{
            $("#address-input-p").attr('dir','ltr');
            $("#address-input-d").attr('dir','ltl');
            $("#address-input-ds1").attr('dir','ltr');
            $("#address-input-ds2").attr('dir','ltl');
          }

        }else{
          $("#address-page-title").html(__("Dropoff location"));     
      
          setTimeout(() => {
            $("#address-input-d").focus();
          }, 800);
          if(selected_lang.dir == "rtl"){
            $("#address-input-p").attr('dir','rtl');
            $("#address-input-d").attr('dir','rtl');
            $("#address-input-ds1").attr('dir','rtl');
            $("#address-input-ds2").attr('dir','rtl');
          }else{
            $("#address-input-p").attr('dir','ltr');
            $("#address-input-d").attr('dir','ltl');
            $("#address-input-ds1").attr('dir','ltr');
            $("#address-input-ds2").attr('dir','ltl');
          }
        }
        

      }else{
      
        $("#address-page-title").html(__("Dropoff location"));      
        
        setTimeout(() => {
          $("#address-input-d").focus();
        }, 800);
        if(selected_lang.dir == "rtl"){
          $("#address-input-p").attr('dir','rtl');
          $("#address-input-d").attr('dir','rtl');
          $("#address-input-ds1").attr('dir','rtl');
          $("#address-input-ds2").attr('dir','rtl');
        }else{
          $("#address-input-p").attr('dir','ltr');
          $("#address-input-d").attr('dir','ltl');
          $("#address-input-ds1").attr('dir','ltr');
          $("#address-input-ds2").attr('dir','ltl');
        }
      }
      //$("#address-input").focus();
    }else{
        //$("#location-type-icon").css("background-image","url(img/pick-up.png)");
        $("#address-page-title").html(__("Pickup location"));
        setTimeout(() => {
          $("#address-input-p").focus();
        }, 800);
        
        if(selected_lang.dir == "rtl"){
          $("#address-input-p").attr('dir','rtl');
          $("#address-input-d").attr('dir','rtl');
          $("#address-input-ds1").attr('dir','rtl');
          $("#address-input-ds2").attr('dir','rtl');
        }else{
          $("#address-input-p").attr('dir','ltr');
          $("#address-input-d").attr('dir','ltl');
          $("#address-input-ds1").attr('dir','ltr');
          $("#address-input-ds2").attr('dir','ltl');
        }
        //$("#address-input").focus();
    }

      if(multi_destination_mode){
        $('#location-type-icon-ds1').hide();
        $('#location-type-icon-ds2').hide();
        $('#ds1-address-inp-remove-btn').hide();
        $('#ds2-address-inp-remove-btn').hide();
        //$('#add-stop-btn').show();
        $('#multidestconfirmbtn').show();

        if(destination_stop_inp1_shown == 1){
          $('#location-type-icon-ds1').show();          
          $('#location-type-icon-ds2').hide();
          $('#ds1-address-inp-remove-btn').show();
          $('#ds2-address-inp-remove-btn').hide();
          //$('#add-stop-btn').show();
          
        }
        
        if(destination_stop_inp2_shown == 1){          
          $('#location-type-icon-ds2').show();
          $('#ds1-address-inp-remove-btn').hide();
          $('#ds2-address-inp-remove-btn').show();
          //$('#add-stop-btn').hide();
          
        }
        
  
      }else{
        $('#location-type-icon-ds1').hide();
        $('#location-type-icon-ds2').hide();  
        $('#ds1-address-inp-remove-btn').hide();
        $('#ds2-address-inp-remove-btn').hide(); 
        $('#multidestconfirmbtn').hide();
        //$('#add-stop-btn').show();  
        
      }

      $('#add-stop-btn').off('click').on('click', function(){ 
        
        if(destination_stop_inp1_shown == 0){
          destination_stop_inp1_shown = 1;
          multi_destination_mode = 1;
          if(pick_up_data.address){
            multi_destinations['pickup']['address'] = pick_up_data.address;
            multi_destinations['pickup']['lat'] = pick_up_data.lat;
            multi_destinations['pickup']['lng'] = pick_up_data.lng;
            
          }

          if(drop_off_data.address){
            multi_destinations['dropoff']['address'] = drop_off_data.address;
            multi_destinations['dropoff']['lat'] = drop_off_data.lat;
            multi_destinations['dropoff']['lng'] = drop_off_data.lng;
          }

          $('#multidestconfirmbtn').show();
          $('#location-type-icon-ds1').show(); 
          $("#address-input-ds1").focus();         
          $('#location-type-icon-ds2').hide();
          $('#ds1-address-inp-remove-btn').show();
          $('#ds2-address-inp-remove-btn').hide();
          //$('#add-stop-btn').show();
          return;
        }
        
        if(destination_stop_inp2_shown == 0){
          destination_stop_inp2_shown = 1;
          $('#location-type-icon-ds2').show();
          $("#address-input-ds2").focus();  
          $('#ds1-address-inp-remove-btn').hide();
          $('#ds2-address-inp-remove-btn').show();
          //$('#add-stop-btn').hide();
          return;
        }

      })


      $('#ds1-address-inp-remove-btn').off('click').on('click', function(){
        destination_stop_inp1_shown = 0;
        multi_destinations['dest-1']['address'] = '';
        multi_destinations['dest-1']['lat'] = '';
        multi_destinations['dest-1']['lng'] = '';

        multi_destinations['dest-2']['address'] = '';
        multi_destinations['dest-2']['lat'] = '';
        multi_destinations['dest-2']['lng'] = '';

        multi_destinations['pickup']['address'] = '';
        multi_destinations['pickup']['lat'] = '';
        multi_destinations['pickup']['lat'] = '';

        multi_destinations['dropoff']['address'] = '';
        multi_destinations['dropoff']['lat'] = '';
        multi_destinations['dropoff']['lat'] = '';

        
        $('#address-input-ds1').val('');
        $('#location-type-icon-ds1').hide();
        $("#address-input-d").focus();  
        $('#ds1-address-inp-remove-btn').hide();
        $('#multidestconfirmbtn').hide();
        multi_destination_mode = 0;
        $("#address-input-d").val('');

        if(markerds1){
          markerds1.remove(); 
          markerds1 = null;
        }

        if(markerds2){
          markerds2.remove(); 
          markerds2 = null;
        }

        
      })


      $('#ds2-address-inp-remove-btn').off('click').on('click', function(){
        destination_stop_inp2_shown = 0;
        multi_destinations['dest-2']['address'] = '';
        multi_destinations['dest-2']['lat'] = '';
        multi_destinations['dest-2']['lng'] = '';
        $('#address-input-ds2').val('');
        $('#location-type-icon-ds2').hide();
        $("#address-input-ds1").focus();  
        $('#ds1-address-inp-remove-btn').show();
        $('#ds2-address-inp-remove-btn').hide();
        if(markerds2){
          markerds2.remove(); 
          markerds2 = null;
        }
        //$('#add-stop-btn').show();
      })




      $('#address-input-p').off('focus').on('focus', function(){
        $("#address-page-title").html(__("Pickup location"));
        location_type_selected = 0;
        $('#p-address-inp-clear-btn').show();
        $('#d-address-inp-clear-btn').hide();
        $('#ds1-address-inp-clear-btn').hide();
        $('#ds2-address-inp-clear-btn').hide();
        address_input();

      })

      $('#address-input-d').off('focus').on('focus', function(){
        $("#address-page-title").html(__("Dropoff location"));
        location_type_selected = 1;
        dest_location_type_selected = 2;
        $('#p-address-inp-clear-btn').hide();
        $('#d-address-inp-clear-btn').show();
        $('#ds1-address-inp-clear-btn').hide();
        $('#ds2-address-inp-clear-btn').hide();
        address_input();

      })

      $('#address-input-ds1').off('focus').on('focus', function(){
        $("#address-page-title").html(__("Add a stop"));
        location_type_selected = 1;
        dest_location_type_selected = 0;
        $('#ds1-address-inp-clear-btn').show();
        $('#ds2-address-inp-clear-btn').hide();
        $('#p-address-inp-clear-btn').hide();
        $('#d-address-inp-clear-btn').hide();

        address_input();

      })

      $('#address-input-ds2').off('focus').on('focus', function(){
        $("#address-page-title").html(__("Add a stop"));
        location_type_selected = 1;
        dest_location_type_selected = 1;
        $('#ds1-address-inp-clear-btn').hide();
        $('#ds2-address-inp-clear-btn').show();
        $('#p-address-inp-clear-btn').hide();
        $('#d-address-inp-clear-btn').hide();

        address_input();

      })

      $('#p-address-inp-clear-btn').off('click').on('click', function(){
        $('#address-input-p').val('');
        $('#address-input-p').focus();
      })

      $('#d-address-inp-clear-btn').off('click').on('click', function(){
        $('#address-input-d').val('');
        $('#address-input-d').focus();
      })

      $('#ds1-address-inp-clear-btn').off('click').on('click', function(){
        $('#address-input-ds1').val('');
        $('#address-input-ds1').focus();
      })

      $('#ds2-address-inp-clear-btn').off('click').on('click', function(){
        $('#address-input-ds2').val('');
        $('#address-input-ds2').focus();
      })


  }


  
 
};







