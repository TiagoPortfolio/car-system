	
$(document).ready(function() {

	$("#controls-box").hover(
		function(){
			$("#controls-box-menu").fadeIn('fast', function() {
			});
		},
		function(){
			$("#controls-box-menu").fadeOut('fast', function() {
			});
		}
	);
});

	function okFunction(){
	//-------------------------------------------------------------------
		
		if(menu==0){ // Idle menu
			document.getElementById("ca-container").style.visibility="visible";
			document.getElementById("container_background").style.visibility="visible";
			document.getElementById("loader").style.visibility="hidden";
			document.getElementById("fountainTextG0").style.visibility="hidden";
			document.getElementById("fountainTextG1").style.visibility="visible";
			n_options=6;
			if(safedistbutton == 0)
				safedist=0;
			else
				safedist=1;
			menu++;

			document.getElementById("selectedBox").style.visibility="visible";
			window.setInterval(function() {  
				selectedBox.toggleClass('active');
			}, 250);
		}
		else
		if(menu == 1){ // KITT menu
			if(option[1]==0){ // Security System menu
				document.getElementById("ca-container").style.visibility="hidden";
				document.getElementById("fountainTextG1").style.visibility="hidden";
				document.getElementById("fountainTextG2").style.visibility="visible";
				document.getElementById("ca-container2").style.visibility="visible";
				document.getElementById("ca-item-41").style.top="0px";
				
				document.getElementById("help_background").style.visibility="hidden";
				document.getElementById("KITT_help").style.visibility="hidden";
				
				menu=2;
				n_options=6;
			}
			else
			if(option[1]==1){ //Safety Distance menu
				document.getElementById("ca-container").style.visibility="hidden";
				document.getElementById("fountainTextG1").style.visibility="hidden";
				document.getElementById("fountainTextG3").style.visibility="visible";
				document.getElementById("ca-container3").style.visibility="visible";
				document.getElementById("ca-item-21").style.top="-4px";
				document.getElementById("ca-item-21").style.height="100%";
				document.getElementById("safedist").style.left="10px";
				document.getElementById("safedistsound").style.marginTop="-6px";
				document.getElementById("safedistsound").style.left="10px";
				document.getElementById("safedistsound2").style.height="25px";
				document.getElementById("ca-item-31").style.top="10px";
				document.getElementById("ca-item-42").style.top="10px";
				
				document.getElementById("help_background").style.visibility="hidden";
				document.getElementById("KITT_help").style.visibility="hidden";
				
				n_options=4;
				menu=3;
			}
			else
			if(option[1]==2){ //Options menu
				document.getElementById("ca-container").style.visibility="hidden";
				document.getElementById("fountainTextG1").style.visibility="hidden";
				document.getElementById("fountainTextG4").style.visibility="visible";
				document.getElementById("ca-container4").style.visibility="visible";
				
				document.getElementById("help_background").style.visibility="hidden";
				document.getElementById("KITT_help").style.visibility="hidden";
				
				n_options=4;
				menu=4;
			}
			else
			if(option[1]==3){ //Help menu
				document.getElementById("help_background").style.visibility="visible";
				document.getElementById("KITT_help").style.visibility="visible";
			}
			else
			if(option[1]==4){ //Exit
				document.getElementById("ca-container").style.visibility="hidden";
				document.getElementById("container_background").style.visibility="hidden";
				document.getElementById("loader").style.visibility="visible";
				document.getElementById("fountainTextG0").style.visibility="visible";
				document.getElementById("fountainTextG1").style.visibility="hidden";
				document.getElementById("selectedBox").style.visibility="hidden";
				
				document.getElementById("help_background").style.visibility="hidden";
				document.getElementById("KITT_help").style.visibility="hidden";
				
				menu=0;
			}
			else
			if(option[1]==5){ //Find Gas Station menu
				document.getElementById("ca-container").style.visibility="hidden";
				document.getElementById("fountainTextG1").style.visibility="hidden";
				document.getElementById("fountainTextG6").style.visibility="visible";
				document.getElementById("ca-container6").style.visibility="visible";
				
				document.getElementById("help_background").style.visibility="hidden";
				document.getElementById("KITT_help").style.visibility="hidden";
				
				n_options=3;
				menu=6;
			}
		}
		else
		if(menu == 2){ // Security System menu--------------------------
			if(option[2]==0){ //Call Police
			
				document.getElementById("help_background").style.visibility="hidden";
				document.getElementById("security_help").style.visibility="hidden";
				
				document.getElementById("ca-container2").style.visibility="hidden";
				document.getElementById("fountainTextG2").style.visibility="hidden";
				document.getElementById("selectedBox").style.visibility="hidden";
				
				document.getElementById("escapingBallG").style.visibility="visible";
				
				$("#getLocal").fadeIn(500).delay(1500).fadeOut(500, function() {
					});
					
				setTimeout(function() {
					document.getElementById("escapingBallG").style.visibility="hidden";
					$("#callPolice").fadeIn(500).delay(1500).fadeOut(500, function() {
					});
				}, 2500);
				
				setTimeout(function() {
					document.getElementById("ca-container2").style.visibility="visible";
					document.getElementById("fountainTextG2").style.visibility="visible";
					document.getElementById("selectedBox").style.visibility="visible";
				}, 5000);
			}
			
			if(option[2]==1){ //Call Trailer
				
				document.getElementById("help_background").style.visibility="hidden";
				document.getElementById("security_help").style.visibility="hidden";
				
				document.getElementById("ca-container2").style.visibility="hidden";
				document.getElementById("fountainTextG2").style.visibility="hidden";
				document.getElementById("selectedBox").style.visibility="hidden";
				
				document.getElementById("escapingBallG").style.visibility="visible";
				
				$("#getLocal").fadeIn(500).delay(1500).fadeOut(500, function() {
					});
					
				setTimeout(function() {
					document.getElementById("escapingBallG").style.visibility="hidden";
					$("#callTrailer").fadeIn(500).delay(1500).fadeOut(500, function() {
					});
				}, 2500);
				
				setTimeout(function() {
					document.getElementById("ca-container2").style.visibility="visible";
					document.getElementById("fountainTextG2").style.visibility="visible";
					document.getElementById("selectedBox").style.visibility="visible";
				}, 5000);
			}
			
			if(option[2]==2){ //Call Assistance
			
				document.getElementById("help_background").style.visibility="hidden";
				document.getElementById("security_help").style.visibility="hidden";
				
				document.getElementById("ca-container2").style.visibility="hidden";
				document.getElementById("fountainTextG2").style.visibility="hidden";
				document.getElementById("selectedBox").style.visibility="hidden";
				
				document.getElementById("escapingBallG").style.visibility="visible";
				
				$("#getLocal").fadeIn(500).delay(1500).fadeOut(500, function() {
					});
					
				setTimeout(function() {
					document.getElementById("escapingBallG").style.visibility="hidden";
					$("#callAssistance").fadeIn(500).delay(1500).fadeOut(500, function() {
					});
				}, 2500);
				
				setTimeout(function() {
					document.getElementById("ca-container2").style.visibility="visible";
					document.getElementById("fountainTextG2").style.visibility="visible";
					document.getElementById("selectedBox").style.visibility="visible";
				}, 5000);
			}
			
			if(option[2]==3){ //Help
				document.getElementById("help_background").style.visibility="visible";
				document.getElementById("security_help").style.visibility="visible";
				
			}
			
			if(option[2]==4){ //Exit
				document.getElementById("ca-container2").style.visibility="hidden";
				document.getElementById("ca-container").style.visibility="visible";
				document.getElementById("fountainTextG1").style.visibility="visible";
				document.getElementById("fountainTextG2").style.visibility="hidden";
				document.getElementById("help_background").style.visibility="hidden";
				document.getElementById("security_help").style.visibility="hidden";
				menu=1;
				n_options=6;
			}
			
			if(option[2]==5){ //Call Ambulance
				
				document.getElementById("help_background").style.visibility="hidden";
				document.getElementById("security_help").style.visibility="hidden";
				
				document.getElementById("ca-container2").style.visibility="hidden";
				document.getElementById("fountainTextG2").style.visibility="hidden";
				document.getElementById("selectedBox").style.visibility="hidden";
				
				document.getElementById("escapingBallG").style.visibility="visible";
				
				$("#getLocal").fadeIn(500).delay(1500).fadeOut(500, function() {
					});
					
				setTimeout(function() {
					document.getElementById("escapingBallG").style.visibility="hidden";
					$("#callAmbulance").fadeIn(500).delay(1500).fadeOut(500, function() {
					});
				}, 2500);
				
				setTimeout(function() {
					document.getElementById("ca-container2").style.visibility="visible";
					document.getElementById("fountainTextG2").style.visibility="visible";
					document.getElementById("selectedBox").style.visibility="visible";
				}, 5000);
			}
		}
		else
		if(menu==3){ //Safety Distance menu---------------------------------------------
			if(option[3]==0){ //Sound
				if($('#safedistsoundswitch').prop('checked')){
					safedistsound=0;
					$('#safedistsoundswitch').prop('checked', false);
				}
				else{
					$('#safedistsoundswitch').prop('checked', true);
					safedistsound=1;
				}
			}
			
			if(option[3]==1){ //Help
			
				document.getElementById("help_background").style.visibility="visible";
				document.getElementById("safedistance_help").style.visibility="visible";
			}
			
			if(option[3]==2){ //Exit
				
				document.getElementById("help_background").style.visibility="hidden";
				document.getElementById("safedistance_help").style.visibility="hidden";
				
				document.getElementById("ca-container3").style.visibility="hidden";
				document.getElementById("ca-container").style.visibility="visible";
				document.getElementById("fountainTextG1").style.visibility="visible";
				document.getElementById("fountainTextG3").style.visibility="hidden";
				menu=1;
				n_options=6;
			}
			
			if(option[3]==3){ //ON/OFF
				if($('#safedistswitch').prop('checked')){
					safedist=0;
					safedistbutton = 0;
					document.getElementById("warning").style.visibility="hidden";
					$('#safedistswitch').prop('checked', false);
				}
				else{
					safedist=1;
					safedistbutton = 1;
					document.getElementById("warning").style.visibility="visible";
					$('#safedistswitch').prop('checked', true);
				}
			}
		}
		else
		if(menu==4){ //Options--------------------------------
			if(option[4]==0){ //Icones
				document.getElementById("ca-container4").style.visibility="hidden";
				document.getElementById("fountainTextG4").style.visibility="hidden";
				document.getElementById("fountainTextG7").style.visibility="visible";
				document.getElementById("ca-container7").style.visibility="visible";
				
				document.getElementById("help_background").style.visibility="hidden";
				document.getElementById("options_help").style.visibility="hidden";
				
				menu=7;
				n_options=6;
			}
			
			if(option[4]==1){ //Ajuda
			
				document.getElementById("help_background").style.visibility="visible";
				document.getElementById("options_help").style.visibility="visible";
			}
			
			if(option[4]==2){ //Exit
				document.getElementById("ca-container4").style.visibility="hidden";
				document.getElementById("ca-container").style.visibility="visible";
				document.getElementById("fountainTextG1").style.visibility="visible";
				document.getElementById("fountainTextG4").style.visibility="hidden";
				
				document.getElementById("help_background").style.visibility="hidden";
				document.getElementById("options_help").style.visibility="hidden";
				
				menu=1;
				n_options=6;
			}
			
			if(option[4]==3){ //Notificações
				
				document.getElementById("ca-container4").style.visibility="hidden";
				document.getElementById("fountainTextG4").style.visibility="hidden";
				document.getElementById("fountainTextG8").style.visibility="visible";
				document.getElementById("ca-container8").style.visibility="visible";
				
				document.getElementById("help_background").style.visibility="hidden";
				document.getElementById("options_help").style.visibility="hidden";
				
				menu=8;
				n_options=4;
			}
		}
		else
		if(menu==5){ //Help
		
		}
		else
		if(menu==6){ //Find Gas Station
		
			if(option[6]==0){ //Find Nearest
				document.getElementById("map").style.visibility="visible";
				document.getElementById("help_background").style.visibility="hidden";
				document.getElementById("gas_help").style.visibility="hidden";
			}
		
			if(option[6]==1){ //Help
			
				document.getElementById("map").style.visibility="hidden";
				document.getElementById("help_background").style.visibility="visible";
				document.getElementById("gas_help").style.visibility="visible";
			}
			
			if(option[6]==2){ //Exit
				document.getElementById("ca-container6").style.visibility="hidden";
				document.getElementById("ca-container").style.visibility="visible";
				document.getElementById("fountainTextG1").style.visibility="visible";
				document.getElementById("fountainTextG6").style.visibility="hidden";
				
				document.getElementById("help_background").style.visibility="hidden";
				document.getElementById("gas_help").style.visibility="hidden";
				
				menu=1;
				n_options=6;
			}
		}
		else
		if(menu==7){ //Icones
			if(option[7]==0){ //Lights
				if($('#lightsswitch').prop('checked')){
					document.getElementById("lights").style.visibility="hidden";
					$('#lightsswitch').prop('checked', false);
				}
				else{
					$('#lightsswitch').prop('checked', true);
					document.getElementById("lights").style.visibility="visible";
				}
			}
			
			if(option[7]==1){ //Gas
				if($('#gasswitch').prop('checked')){
					document.getElementById("fullGas").style.visibility="hidden";
					document.getElementById("fuelLevel").style.visibility="hidden";
					$('#gasswitch').prop('checked', false);
				}
				else{
					$('#gasswitch').prop('checked', true);
					document.getElementById("fullGas").style.visibility="visible";
					document.getElementById("fuelLevel").style.visibility="visible";
				}
			}
			
			if(option[7]==2){ //Velocimeter
				if($('#speedswitch').prop('checked')){
					document.getElementById("speedometer").style.visibility="hidden";
					$('#speedswitch').prop('checked', false);
				}
				else{
					$('#speedswitch').prop('checked', true);
					document.getElementById("speedometer").style.visibility="visible";
				}
			}
		
			if(option[7]==3){ //Help
			
				document.getElementById("help_background").style.visibility="visible";
				document.getElementById("icons_help").style.visibility="visible";
			}
			
			if(option[7]==4){ //Exit
				document.getElementById("ca-container7").style.visibility="hidden";
				document.getElementById("ca-container4").style.visibility="visible";
				document.getElementById("fountainTextG4").style.visibility="visible";
				document.getElementById("fountainTextG7").style.visibility="hidden";
				
				document.getElementById("help_background").style.visibility="hidden";
				document.getElementById("icons_help").style.visibility="hidden";
				
				menu=4;
				n_options=4;
			}
			
			if(option[7]==5){ //Clock
				if($('#clockswitch').prop('checked')){
					document.getElementById("clock").style.visibility="hidden";
					$('#clockswitch').prop('checked', false);
				}
				else{
					$('#clockswitch').prop('checked', true);
					document.getElementById("clock").style.visibility="visible";
				}
			}
		}
		else
		if(menu==8){ //Notifications
			if(option[8]==0){ //Gas
				if($('#gasnotifyswitch').prop('checked')){
					gasnotify = 0;
					$('#gasnotifyswitch').prop('checked', false);
				}
				else{
					$('#gasnotifyswitch').prop('checked', true);
					gasnotify=1;
				}
			}
			
			if(option[8]==1){ //Help
			
				document.getElementById("help_background").style.visibility="visible";
				document.getElementById("icons_help").style.visibility="visible";
			}
			
			if(option[8]==2){ //Exit
				document.getElementById("ca-container8").style.visibility="hidden";
				document.getElementById("ca-container4").style.visibility="visible";
				document.getElementById("fountainTextG4").style.visibility="visible";
				document.getElementById("fountainTextG8").style.visibility="hidden";
				
				document.getElementById("help_background").style.visibility="hidden";
				document.getElementById("icons_help").style.visibility="hidden";
				
				menu=4;
				n_options=4;
			}
			
			if(option[8]==3){ //Lights
				if($('#lightsnotifyswitch').prop('checked')){
					lightsnotify = 0;
					$('#lightsnotifyswitch').prop('checked', false);
				}
				else{
					$('#lightsnotifyswitch').prop('checked', true);
					lightsnotify = 1;
				}
			}
		}
	}
	
	function undoFunction(){
		
		if(menu==0){} //Init
		
		else
		if(menu==1){ //KITT
			document.getElementById("ca-container").style.visibility="hidden";
			document.getElementById("container_background").style.visibility="hidden";
			document.getElementById("loader").style.visibility="visible";
			document.getElementById("fountainTextG0").style.visibility="visible";
			document.getElementById("fountainTextG1").style.visibility="hidden";
			document.getElementById("selectedBox").style.visibility="hidden";
			
			document.getElementById("help_background").style.visibility="hidden";
			document.getElementById("KITT_help").style.visibility="hidden";
			
			menu=0;
			n_options=6;
			safedist=0;
		}
		else
		if(menu==2){ //Security System
			document.getElementById("ca-container2").style.visibility="hidden";
			document.getElementById("ca-container").style.visibility="visible";
			document.getElementById("fountainTextG1").style.visibility="visible";
			document.getElementById("fountainTextG2").style.visibility="hidden";
			
			document.getElementById("help_background").style.visibility="hidden";
			document.getElementById("security_help").style.visibility="hidden";
				
			menu=1;
			n_options=6;
		}
		else
		if(menu==3){ //Safety Distance
			document.getElementById("ca-container3").style.visibility="hidden";
			document.getElementById("ca-container").style.visibility="visible";
			document.getElementById("fountainTextG1").style.visibility="visible";
			document.getElementById("fountainTextG3").style.visibility="hidden";
			
			document.getElementById("help_background").style.visibility="hidden";
			document.getElementById("safedistance_help").style.visibility="hidden";
			
			menu=1;
			n_options=6;
		}
		else
		if(menu==4){ //Options
			document.getElementById("ca-container4").style.visibility="hidden";
			document.getElementById("ca-container").style.visibility="visible";
			document.getElementById("fountainTextG1").style.visibility="visible";
			document.getElementById("fountainTextG4").style.visibility="hidden";
			
			document.getElementById("help_background").style.visibility="hidden";
			document.getElementById("options_help").style.visibility="hidden";
			
			menu=1;
			n_options=6;
		}
		else
		if(menu==6){ //Fing Gas Station
			document.getElementById("ca-container6").style.visibility="hidden";
			document.getElementById("ca-container").style.visibility="visible";
			document.getElementById("fountainTextG1").style.visibility="visible";
			document.getElementById("fountainTextG6").style.visibility="hidden";
			document.getElementById("map").style.visibility="hidden";
			
			document.getElementById("help_background").style.visibility="hidden";
			document.getElementById("gas_help").style.visibility="hidden";
			
			menu=1;
			n_options=6;
		}
		else
		if(menu==7){ //Icones
			document.getElementById("ca-container7").style.visibility="hidden";
			document.getElementById("ca-container4").style.visibility="visible";
			document.getElementById("fountainTextG4").style.visibility="visible";
			document.getElementById("fountainTextG7").style.visibility="hidden";
			
			document.getElementById("help_background").style.visibility="hidden";
			document.getElementById("icons_help").style.visibility="hidden";
			
			menu=4;
			n_options=4;
		}
		else
		if(menu==8){ //Notifications
			document.getElementById("ca-container8").style.visibility="hidden";
			document.getElementById("ca-container4").style.visibility="visible";
			document.getElementById("fountainTextG4").style.visibility="visible";
			document.getElementById("fountainTextG8").style.visibility="hidden";
			
			document.getElementById("help_background").style.visibility="hidden";
			document.getElementById("icons_help").style.visibility="hidden";
			
			menu=4;
			n_options=4;
		}
	}
	
	function safeWarning(){
		if(safedist==1){
		
			var element = document.getElementById("warning");
			element.classList.add("blink");
			
			if(safedistsound==1)
				document.getElementById('notification').play();
			
			$("#safeWarning").fadeIn(500).delay(1500).fadeOut(300, function() {
					});
			
			setTimeout(function() {
					document.getElementById("warning").className = "";
				}, 2500);
		}
	}