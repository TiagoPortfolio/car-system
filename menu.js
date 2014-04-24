	
	function okFunction(){
	//-------------------------------------------------------------------
		
		if(menu==0){ // Idle menu
			document.getElementById("ca-container").style.visibility="visible";
			document.getElementById("container_background").style.visibility="visible";
			document.getElementById("loader").style.visibility="hidden";
			document.getElementById("fountainTextG0").style.visibility="hidden";
			document.getElementById("fountainTextG1").style.visibility="visible";
			n_options=6;
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
				menu=2;
				n_options=6;
				if(exit[2]==1)
					option[2]=4;
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
				
				n_options=4;
				menu=3;
				if(exit[3]==1)
					option[3]=2;
			}
			else
			if(option[1]==2){ //Options menu
				document.getElementById("ca-container").style.visibility="hidden";
				document.getElementById("fountainTextG1").style.visibility="hidden";
				document.getElementById("fountainTextG4").style.visibility="visible";
				document.getElementById("ca-container4").style.visibility="visible";
				n_options=4;
				menu=4;
				if(exit[4]==1)
					option[4]=3;
			}
			else
			if(option[1]==3){ //Help menu
			}
			else
			if(option[1]==4){ //Exit
				document.getElementById("ca-container").style.visibility="hidden";
				document.getElementById("container_background").style.visibility="hidden";
				document.getElementById("loader").style.visibility="visible";
				document.getElementById("fountainTextG0").style.visibility="visible";
				document.getElementById("fountainTextG1").style.visibility="hidden";
				document.getElementById("selectedBox").style.visibility="hidden";
				menu=0;
				exit[1]=1;
			}
			else
			if(option[1]==5){ //Find Gas Station menu
				document.getElementById("ca-container").style.visibility="hidden";
				document.getElementById("fountainTextG1").style.visibility="hidden";
				document.getElementById("fountainTextG6").style.visibility="visible";
				document.getElementById("ca-container6").style.visibility="visible";
				n_options=4;
				menu=6;
				if(exit[6]==1)
					option[6]=2;
			}
		}
		else
		if(menu == 2){ // Security System menu--------------------------
			if(option[2]==0){ //Call Police
			
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
			
			}
			
			if(option[2]==4){ //Exit
				document.getElementById("ca-container2").style.visibility="hidden";
				document.getElementById("ca-container").style.visibility="visible";
				document.getElementById("fountainTextG1").style.visibility="visible";
				document.getElementById("fountainTextG2").style.visibility="hidden";
				menu=1;
				n_options=6;
				exit[2]=1;
			}
			
			if(option[2]==5){ //Call Ambulance
			
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
			
			}
			
			if(option[3]==2){ //Exit
				document.getElementById("ca-container3").style.visibility="hidden";
				document.getElementById("ca-container").style.visibility="visible";
				document.getElementById("fountainTextG1").style.visibility="visible";
				document.getElementById("fountainTextG3").style.visibility="hidden";
				menu=1;
				n_options=6;
				exit[3]=1;
			}
			
			if(option[3]==3){ //ON/OFF
				if($('#safedistswitch').prop('checked')){
					safedist=0;
					document.getElementById("warning").style.visibility="hidden";
					$('#safedistswitch').prop('checked', false);
				}
				else{
					safedist=1;
					document.getElementById("warning").style.visibility="visible";
					$('#safedistswitch').prop('checked', true);
				}
			}
		}
		else
		if(menu==4){ //Options--------------------------------
			if(option[4]==0){ //Icons
			
			}
			
			if(option[4]==1){ //Ajuda
			
			}
			
			if(option[4]==2){ //Exit
				document.getElementById("ca-container4").style.visibility="hidden";
				document.getElementById("ca-container").style.visibility="visible";
				document.getElementById("fountainTextG1").style.visibility="visible";
				document.getElementById("fountainTextG4").style.visibility="hidden";
				menu=1;
				n_options=6;
				exit[4]=1;
			}
			
			if(option[4]==3){ //Notificações
			
			}
		}
		else
		if(menu==5){ //Help
		
		}
		else
		if(menu==6){ //Find Gas Station
		
			if(option[6]==0){ //Find Nearest
				document.getElementById("map-canvas").style.visibility="visible";
				initialize();
			}
		
			if(option[6]==1){ //Help
			
			}
			
			if(option[6]==2){ //Exit
				document.getElementById("ca-container6").style.visibility="hidden";
				document.getElementById("ca-container").style.visibility="visible";
				document.getElementById("fountainTextG1").style.visibility="visible";
				document.getElementById("fountainTextG6").style.visibility="hidden";
				menu=1;
				n_options=6;
				exit[6]=1;
			}
			
			if(option[6]==3){ //Find By ZIP
			
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
			menu=1;
			n_options=6;
		}
		else
		if(menu==3){ //Safety Distance
			document.getElementById("ca-container3").style.visibility="hidden";
			document.getElementById("ca-container").style.visibility="visible";
			document.getElementById("fountainTextG1").style.visibility="visible";
			document.getElementById("fountainTextG3").style.visibility="hidden";
			menu=1;
			n_options=6;
		}
		else
		if(menu==4){ //Options
			document.getElementById("ca-container4").style.visibility="hidden";
			document.getElementById("ca-container").style.visibility="visible";
			document.getElementById("fountainTextG1").style.visibility="visible";
			document.getElementById("fountainTextG4").style.visibility="hidden";
			menu=1;
			n_options=6;
		}
		else
		if(menu==6){ //Fing Gas Station
			document.getElementById("ca-container6").style.visibility="hidden";
			document.getElementById("ca-container").style.visibility="visible";
			document.getElementById("fountainTextG1").style.visibility="visible";
			document.getElementById("fountainTextG6").style.visibility="hidden";
			document.getElementById("map-canvas").style.visibility="hidden";
			menu=1;
			n_options=6;
		}
	}
	
	function safeWarning(){
		if(safedist==1){
		
			document.getElementById("container_background2").style.visibility="visible";
			var element = document.getElementById("warning");
			element.classList.add("blink");
			
			if(safedistsound==1)
				document.getElementById('notification').play();
			
			$("#safeWarning").fadeIn(500).delay(1500).fadeOut(500, function() {
					});
			$("#container_background2").fadeIn(500).delay(1500).fadeOut(500, function() {
					});
			
			setTimeout(function() {
					document.getElementById("warning").className = "";
				}, 2500);
		}
	}
