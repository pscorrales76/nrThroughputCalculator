// Developer : Neelanjan Acharya
// Employee ID : 12117976
// Email       : Neelanjan.Acharya@rci.rogers.ca

var advanced = false; // By default the Basic tab is selected and hiding the Advanced options

function sidebarBasic(){
	advanced = false; // On clicking the Basic tab Advanced setting would not show up
	document.getElementById('pills-basic-tab').style.background = "#ee2722";
	document.getElementById('pills-basic-tab').style.color = "#fafafa";
	document.getElementById('pills-advanced-tab').style.background = "#fafafa";
	document.getElementById('pills-advanced-tab').style.color = "#000000";

	document.getElementById('modulationList').style.display = 'none';
	document.getElementById('scalingList').style.display = 'none';
	document.getElementById('dssOverhead').style.display = 'none';
	document.getElementById('moreAdvancedFeatures').style.display = 'none';
	document.getElementById('efficiencyMenu').style.display = 'none';
	document.getElementById('efficiencyTitle').style.display = 'none';
	document.getElementById('tbsSelect').style.display = 'none';
	document.getElementById('moreAdvancedFeatures').style.display = 'none';
	document.getElementById('framePatternList').style.display = 'none';
	document.getElementById('frameSpecialPatternList').style.display = 'none';
	document.getElementById('customOverheadDiv').style.display = 'none'
	document.getElementById('mcsTableList').style.display = 'none';
	document.getElementById('mcsIndexList').style.display = 'none';

	document.getElementById("technology").selectedIndex = 0;
	if(i == 0){
		document.getElementById("uldl").selectedIndex = 0;
	}
	document.getElementById("frequency").selectedIndex = 0;
	document.getElementById("transmission").selectedIndex = 0;
	document.getElementById("scs").selectedIndex = 0;
	document.getElementById("mimo").selectedIndex = 0;
	document.getElementById("modulation").selectedIndex = 0;
	document.getElementById("scalingfactor").selectedIndex = 0;
	document.getElementById("overhead").selectedIndex = 0;
	document.getElementById("mcsTable").selectedIndex = 0;
	document.getElementById("mcsIndexMenu").selectedIndex = 0;
	document.getElementById('moreAdvancedCheckbox').checked = false;
	document.getElementById('tbsCheckbox').checked = false;
	document.getElementById('dssOverheadCheckbox').checked = false;
}

function sidebarAdvanced(){
	advanced = true; // On clicking the Advanced tab, the advanced settings would get activated
	document.getElementById('pills-basic-tab').style.background = "#fafafa";
	document.getElementById('pills-basic-tab').style.color = "#000000";
	document.getElementById('pills-advanced-tab').style.background = "#ee2722";
	document.getElementById('pills-advanced-tab').style.color = "#fafafa";
	document.getElementById('modulationList').style.display = 'block';
	document.getElementById('scalingList').style.display = 'block';
	document.getElementById('overheadList').style.display = 'block';
	document.getElementById('moreAdvancedFeatures').style.display = 'block';
	document.getElementById('efficiencyMenu').style.display = 'block';
	document.getElementById('efficiencyTitle').style.display = 'block';
	document.getElementById('customOverheadDiv').style.display = 'none';
	document.getElementById('dssOverhead').style.display = 'none';

	document.getElementById("technology").selectedIndex = 0;
	if(i == 0){
		document.getElementById("uldl").selectedIndex = 0;
	}
	document.getElementById("frequency").selectedIndex = 0;
	document.getElementById("transmission").selectedIndex = 0;
	document.getElementById("scs").selectedIndex = 0;
	document.getElementById("mimo").selectedIndex = 0;
	document.getElementById("modulation").selectedIndex = 0;
	document.getElementById("scalingfactor").selectedIndex = 0;
	document.getElementById("overhead").selectedIndex = 0;
	document.getElementById("mcsTable").selectedIndex = 0;
	document.getElementById("mcsIndexMenu").selectedIndex = 0;
	document.getElementById('moreAdvancedCheckbox').checked = false;
	document.getElementById('tbsCheckbox').checked = false;
	document.getElementById('dssOverheadCheckbox').checked = false;
}


function onchangeTechnology(){
	var technology_sel = document.getElementById("technology").value;

	// Adding the SCS Dropdown if the Technology selected is 'NR'
	if (technology_sel == 'NR'){
		document.getElementById('scsList').style.display = 'block';
	}else if (technology_sel == 'LTE'){
		document.getElementById('scsList').style.display = 'none';
	}

	// Adding the TBS Checkbox if the Technology selected is LTE
	if (technology_sel=='LTE' && advanced==true){
		document.getElementById('tbsSelect').style.display = 'block';
	}else if (technology_sel=='LTE' && advanced==false){
		document.getElementById('tbsSelect').style.display = 'none';
		document.getElementById('moreAdvancedFeatures').style.display = 'none';
	}else if(technology_sel=='NR' && advanced == true){
		document.getElementById("tbsCheckbox").checked = false;
		document.getElementById('tbsSelect').style.display = 'none';
		document.getElementById('moreAdvancedFeatures').style.display = 'block';
		tbsClick();
	}else if (advanced==false){
		document.getElementById('tbsSelect').style.display = 'none';
		document.getElementById('moreAdvancedFeatures').style.display = 'none';
	}

	/* Adding the Band Frequency according to the selected Technology*/
	var band_option_list = {};
	var band_option_val_list = {};

	band_option_list['LTE'] = ['Select Band Frequency', '600MHz (B71)', '700MHz (B12)', '850MHz (B5)', '1900MHz (B2)', '2100MHz (B66)', '2500MHz (B38)', '2600MHz (B7)', '3500MHz (B78)'];
	band_option_val_list['LTE'] = [' ', 'FR1 600MHz', 'FR1 700MHz', 'FR1 850MHz', 'FR1 1900MHz', 'FR1 2100MHz', 'FR1 2500MHz', 'FR1 2600MHz', 'FR1 3500MHz'];
	band_option_list['NR'] = ['Select Band Frequency', '600MHz (N71)', '700MHz (N12)', '850MHz (N5)', '1900MHz (N2)', '2100MHz (N66)', '2500MHz (N38)', '2600MHz (N7)', '3500MHz (N78)', '28GHz (N261)'];
	band_option_val_list['NR'] = [' ', 'FR1 600MHz', 'FR1 700MHz', 'FR1 850MHz', 'FR1 1900MHz', 'FR1 2100MHz', 'FR1 2500MHz', 'FR1 2600MHz', 'FR1 3500MHz', 'FR2 28GHz'];

	// If there were options added before first remove them
	var band_list = document.getElementById('frequency')
	while(band_list.options.length){
		band_list.remove(0);
	}
	// Next add the Band Frequencies according to the selected Technology
	for (var i=0; i<band_option_list[technology_sel].length; i++){
		document.getElementById('frequency').options.add(new Option(band_option_list[technology_sel][i], band_option_val_list[technology_sel][i]))
	}

	var frame_option_list = {};
	var frame_option_val_list = {};

	frame_option_list['LTE'] = ['Select Frame Pattern', 'SA0 (DSUUU)', 'SA1 (DSUUD)', 'SA2 (DSUUDD)', 'SA3 (DSUUUDDDDD)', 'SA4 (DSUUDDDDDD)', 'SA5 (DSUDDDDDDD)', 'SA6 (DSUUUDSUUD)'];
	frame_option_val_list['LTE'] = ['Select Frame Pattern', 'SA0', 'SA1', 'SA2', 'SA3', 'SA4', 'SA5', 'SA6'];

	frame_option_list['NR'] = ['Select Frame Pattern', 'TDD_ULDL_PATTERN_00 (DDSU)', 'TDD_ULDL_PATTERN_01 (DDDSUUDDDD)', 'TDD_ULDL_PATTERN_02 (DDDSU)', 'TDD_ULDL_PATTERN_03 (DDDSUDDSUU)', 'TDD_ULDL_PATTERN_04 (DDDDDDDSUU)', 'TDD_ULDL_PATTERN_05 (DDSUU)', 'TDD_ULDL_PATTERN_06 (DSUUU)', 'TDD_ULDL_PATTERN_07 (DDDSUUDSUU)', 'TDD_ULDL_PATTERN_08 (DDDSUUUUDD)'];
	frame_option_val_list['NR'] =  [' ', 'TDD_ULDL_PATTERN_00', 'TDD_ULDL_PATTERN_01', 'TDD_ULDL_PATTERN_02', 'TDD_ULDL_PATTERN_03', 'TDD_ULDL_PATTERN_04', 'TDD_ULDL_PATTERN_05', 'TDD_ULDL_PATTERN_06', 'TDD_ULDL_PATTERN_07', 'TDD_ULDL_PATTERN_08'];

	// If there were options added before first remove them
	var framelist = document.getElementById('framePattern')
	while(framelist.options.length){
		framelist.remove(0);
	}
	// Next add the Frame Patterns
	for (var i=0; i<frame_option_list[technology_sel].length; i++){
		document.getElementById('framePattern').options.add(new Option(frame_option_list[technology_sel][i], frame_option_val_list[technology_sel][i]))
	}

	var specialFrame_option_list = {};
	var specialFrame_option_val_list = {};

	specialFrame_option_list['LTE'] = ['Select Special Frame Pattern', 'SSF0 (3:10:01)', 'SSF1 (9:04:01)', 'SSF2 (10:03:01)', 'SSF3 (11:02:01)', 'SSF4 (12:01:01)', 'SSF5 (3:09:02)', 'SSF6 (9:03:02)', 'SSF7 (10:02:02)', 'SSF8 (11:01:02)', 'SSF9 (6:06:02)'];
	specialFrame_option_val_list['LTE'] = [' ', 'SSF0', 'SSF1', 'SSF2', 'SSF3', 'SSF4', 'SSF5', 'SSF6', 'SSF7', 'SSF8', 'SSF9'];

	specialFrame_option_list['NR'] = ['Select Special Frame Pattern', 'TDD_SPECIAL_SLOT_PATTERN_00 (11:3:0)', 'TDD_SPECIAL_SLOT_PATTERN_01 (3:8:3)', 'TDD_SPECIAL_SLOT_PATTERN_02 (10:2:2)', 'TDD_SPECIAL_SLOT_PATTERN_03 (6:4:4)', 'TDD_SPECIAL_SLOT_PATTERN_04 (4:6:4)', 'TDD_SPECIAL_SLOT_PATTERN_05 (6:8:0;010:4)'];
	specialFrame_option_val_list['NR'] =  [' ', 'TDD_SPECIAL_SLOT_PATTERN_00', 'TDD_SPECIAL_SLOT_PATTERN_01', 'TDD_SPECIAL_SLOT_PATTERN_02', 'TDD_SPECIAL_SLOT_PATTERN_03', 'TDD_SPECIAL_SLOT_PATTERN_04', 'TDD_SPECIAL_SLOT_PATTERN_05'];

	var Specialframelist = document.getElementById('frameSpecialPattern')
	while(Specialframelist.options.length){
		Specialframelist.remove(0);
	}
	// Next add the Frame Patterns
	for (var i=0; i<specialFrame_option_list[technology_sel].length; i++){
		document.getElementById('frameSpecialPattern').options.add(new Option(specialFrame_option_list[technology_sel][i], specialFrame_option_val_list[technology_sel][i]))
	}
	/* Finished adding the Band Frequency according to the selected Technology */
	document.getElementById("scaling1").selected = 'selected';

}

function tbsClick(){
	if(document.getElementById("tbsCheckbox").checked == true){
		document.getElementById('moreAdvancedFeatures').style.display = 'none';
		document.getElementById('scsList').style.display = 'none';
		document.getElementById('mcsIndexList').style.display = 'none';
		document.getElementById('mcsTableList').style.display = 'none';
	}else if(document.getElementById("tbsCheckbox").checked == false){
		document.getElementById('moreAdvancedFeatures').style.display = 'block';

	}

}

function onchangeULDL(){
	var technology_sel = document.getElementById("technology").value;
	var frequency_sel = document.getElementById("frequency").value.split(" ")[0];
	var uldl_sel = document.getElementById('uldl').value;

	if(uldl_sel == 'ul'){
		document.getElementById("mimo1").selected = "selected";
	}

	/* Adding the Overhead values according to the selected UpLink/DownLink */
	if(frequency_sel == 'FR1' && uldl_sel == "dl" && technology_sel=='NR'){
		if(advanced == false){
			var overhead_option_list = ['Select Overhead', 'DownLink (14%)'];
			var overhead_option_val_list = [' ', 'FR1DL'];
		}else{
			var overhead_option_list = ['Select Overhead', 'DownLink (14%)', 'Custom Value'];
			var overhead_option_val_list = [' ', 'FR1DL', 'customOverhead'];
		}
	}else if(frequency_sel == 'FR1' && uldl_sel == "ul" && technology_sel=='NR'){
		if(advanced == false){
			var overhead_option_list = ['Select Overhead', 'UpLink (8%)'];
			var overhead_option_val_list = [' ', 'FR1UL'];
		}else{
			var overhead_option_list = ['Select Overhead', 'UpLink (8%)', 'Custom Value'];
			var overhead_option_val_list = [' ', 'FR1UL', 'customOverhead'];
		}
	}else if(frequency_sel == 'FR2' && uldl_sel == "dl" && technology_sel=='NR'){
		if(advanced == false){
			var overhead_option_list = ['Select Overhead', 'DownLink (18%)'];
			var overhead_option_val_list = [' ', 'FR2DL'];
		}else{
			var overhead_option_list = ['Select Overhead', 'DownLink (18%)', 'Custom Value'];
			var overhead_option_val_list = [' ', 'FR2DL', 'customOverhead'];
		}
	}else if(frequency_sel == 'FR2' && uldl_sel == "ul" && technology_sel=='NR'){
		if(advanced == false){
			var overhead_option_list = ['Select Overhead', 'UpLink (10%)'];
			var overhead_option_val_list = [' ', 'FR2UL'];
		}else{
			var overhead_option_list = ['Select Overhead', 'UpLink (10%)', 'Custom Value'];
			var overhead_option_val_list = [' ', 'FR2UL', 'customOverhead'];
		}
	}else if(technology_sel=='LTE'){
		if(advanced == false){
			var overhead_option_list = ['Select Overhead', 'UpLink/DownLink (25%)'];
			var overhead_option_val_list = [' ', '25%'];
		}else{
			var overhead_option_list = ['Select Overhead', 'UpLink/DownLink (25%)', 'Custom Value'];
			var overhead_option_val_list = [' ', '25%', 'customOverhead'];
		}
	}else{
		var overhead_option_list = ['Select Overhead'];
		var overhead_option_val_list = [' '];
	}

	// If there were options added before first remove them
	var overhead_list = document.getElementById('overhead');
	while(overhead_list.options.length){
		overhead_list.remove(0);
	}

	// Next add the Overhead options according to the selected Uplink/Downlink
	if(overhead_option_list){
		for(var i=0; i<overhead_option_list.length; i++){
			document.getElementById('overhead').options.add(new Option(overhead_option_list[i], overhead_option_val_list[i]));
		}
	}

	document.getElementById('overhead').selectedIndex = 1;
	/* Finished adding the Overhead values according to the selected UpLink/DownLink */
}

function frequencyOnchange(){
	var technology_sel = document.getElementById("technology").value;
	var frequency_sel = document.getElementById("frequency").value.split(" ")[0];
	var band_sel = document.getElementById('frequency').value.split(" ")[1];
	onchangeULDL();
	// Disabling the DSS Overhead checkbox if the following bands are selected
	if(band_sel == '2500MHz' || band_sel == '3500MHz' || band_sel == '28GHz'){
		document.getElementById('dssOverhead').style.display = 'none';
		document.getElementById('dssOverheadCheckbox').checked = false;
	}else{
		document.getElementById('dssOverhead').style.display = 'block';
	}

	/* Adding the Sub-Carrier Spacing Dropdown options according to the selected Frequency */
	var scs_list = document.getElementById('scs');
	while(scs_list.options.length){
		scs_list.remove(0);
	}

	updown = document.getElementById('uldl').value;

	if(band_sel=='600MHz' || band_sel=='700MHz' || band_sel=='850MHz'){
		var scs_option_list = ['Select Sub-Carrier Spacing', '15kHz', '30kHz'];
		var scs_option_val_list = [' ', '15', '30'];
		document.getElementById('mimo').selectedIndex = 2;
	}else if(frequency_sel == 'FR2'){
		var scs_option_list = ['Select Sub-Carrier Spacing', '60kHz', '120kHz'];
		var scs_option_val_list = [' ', '60', '120'];
	}else{
		var scs_option_list = ['Select Sub-Carrier Spacing', '15kHz', '30kHz', '60kHz'];
		var scs_option_val_list = [' ', '15', '30', '60'];
		document.getElementById('mimo').selectedIndex = 0;
	}

	if(updown == 'ul'){
		document.getElementById('mimo').selectedIndex = 1;
	}
	if(scs_option_list){
		for(var i=0; i<scs_option_list.length; i++){
			document.getElementById('scs').options.add(new Option(scs_option_list[i], scs_option_val_list[i]));
		}
	}
	/* Finished adding the Sub-Carrier Spacing Dropdown options according to the selected Frequency */

	if(band_sel=='600MHz' || band_sel=='700MHz' || band_sel=='850MHz' || band_sel == '28GHz'){
		document.getElementById('scs').selectedIndex = 1;
	}else{
		document.getElementById('scs').selectedIndex = 2;
	}

	var tbsCheck = document.getElementById("tbsCheckbox").checked ;

	/* Adding the Transmission Bandwidth options according to the Frequency */
	if(tbsCheck==true || technology_sel=='LTE'){
		var transmission_option_list = ['Select Transmission Bandwidth', '5MHz (NRB 25)', '10MHz (NRB 50)', '15MHz (NRB 75)', '20MHz (NRB 100)'];
		var transmission_option_val_list = [' ', '5MHz', '10MHz', '15MHz', '20MHz'];
	}else{
		var transmission_option_list = ['Select Transmission Bandwidth']
		var transmission_option_val_list = [' ']
	}

	var transmission_list = document.getElementById('transmission');

	while(transmission_list.options.length){
		transmission_list.remove(0);
	}

	if(transmission_option_list){
      for(var i=0; i<transmission_option_list.length; i++){
        document.getElementById('transmission').options.add(new Option(transmission_option_list[i], transmission_option_val_list[i]));
      }
	}
	/* Finished adding the Transmission Bandwidth options according to the Frequency */

	// Enabling the Frame Pattern and the Special Frame Pattern according to the selected Transmission Bandwidth
	if((advanced==true) && (band_sel == '2500MHz' || band_sel == '3500MHz' || frequency_sel == 'FR2')){
		document.getElementById('framePatternList').style.display = 'block';
		document.getElementById('frameSpecialPatternList').style.display = 'block';
	}else{
		document.getElementById('framePatternList').style.display = 'none';
		document.getElementById('frameSpecialPatternList').style.display = 'none';
	}

	scsOnchange();
}

function scsOnchange(){
	var scs_sel = document.getElementById("scs").value;
	var frequency_sel = document.getElementById("frequency").value.split(" ")[0];
	var band_sel = document.getElementById('frequency').value.split(" ")[1];
	var technology_sel = document.getElementById("technology").value;

	var transmission_option_list = {};
	var transmission_option_val_list = {};

	transmission_option_list['LTE'] = ['Select Transmission Bandwidth', '5MHz (NRB 25)', '10MHz (NRB 50)', '15MHz (NRB 75)', '20MHz (NRB 100)'];
	transmission_option_val_list['LTE'] = [' ', '5MHz', '10MHz', '15MHz', '20MHz'];

	if(band_sel=='600MHz'){
		if(scs_sel=='15'){
			transmission_option_list['NR'] = ['Select Transmission Bandwidth', '5MHz (NRB 25)', '10MHz (NRB 52)', '15MHz (NRB 79)', '20MHz (NRB 106)', '25MHz (NRB 133)', '30MHz (NRB 160)', '35MHz (NRB 188)'];
			transmission_option_val_list['NR'] = [' ', '5MHz', '10MHz', '15MHz', '20MHz', '25MHz', '30MHz', '35MHz'];
		}else if (scs_sel=='30'){
			transmission_option_list['NR'] = ['Select Transmission Bandwidth', '10MHz (NRB 24)', '15MHz (NRB 38)', '20MHz (NRB 51)', '25MHz (NRB 65)', '30MHz (NRB 78)', '35MHz (NRB 92)'];
			transmission_option_val_list['NR'] = [' ', '10MHz', '15MHz', '20MHz', '25MHz', '30MHz', '35MHz'];
		}
	}else if(band_sel=='700MHz'){
		if(scs_sel=='15'){
			transmission_option_list['NR'] = ['Select Transmission Bandwidth', '5MHz (NRB 25)', '10MHz (NRB 52)', '15MHz (NRB 79)'];
			transmission_option_val_list['NR'] = [' ', '5MHz', '10MHz', '15MHz'];
		}else if(scs_sel=='30'){
			transmission_option_list['NR'] = ['Select Transmission Bandwidth', '10MHz (NRB 24)', '15MHz (NRB 38)'];
			transmission_option_val_list['NR'] = [' ', '10MHz', '15MHz'];
		}
	}else if(frequency_sel=='FR2'){
		if (scs_sel=='60'){
			transmission_option_list['NR'] = ['Select Transmission Bandwidth', '50MHz (NRB 66)', '100MHz (NRB 132)', '200MHz (NRB 264)'];
			transmission_option_val_list['NR'] = [' ', '50MHz', '100MHz', '200MHz'];
		}else{
			transmission_option_list['NR'] = ['Select Transmission Bandwidth', '50MHz (NRB 32)', '100MHz (NRB 66)', '200MHz (NRB 132)', '400MHz (NRB 264)'];
			transmission_option_val_list['NR'] = [' ', '50MHz', '100MHz', '200MHz', '400MHz'];
		}
	}else if(band_sel=='850MHz'){
		if(scs_sel=='15'){
			transmission_option_list['NR'] = ['Select Transmission Bandwidth', '5MHz (NRB 25)', '10MHz (NRB 52)', '15MHz (NRB 79)', '20MHz (NRB 106)', '25MHz (NRB 133)'];
			transmission_option_val_list['NR'] = [' ', '5MHz', '10MHz', '15MHz', '20MHz', '25MHz'];
		}else if(scs_sel=='30'){
			transmission_option_list['NR'] = ['Select Transmission Bandwidth', '10MHz (NRB 24)', '15MHz (NRB 38)', '20MHz (NRB 51)', '25MHz (NRB 65)'];
			transmission_option_val_list['NR'] = [' ', '10MHz', '15MHz', '20MHz', '25MHz'];
		}
	}else if(band_sel=='1900MHz'){
		if(scs_sel=='15'){
			transmission_option_list['NR'] = ['Select Transmission Bandwidth', '5MHz (NRB 25)', '10MHz (NRB 52)', '15MHz (NRB 79)', '20MHz (NRB 106)', '25MHz (NRB 133)', '30MHz (NRB 160)', '35MHz (NRB 188)', '40MHz (NRB 216)'];
			transmission_option_val_list['NR'] = [' ', '5MHz', '10MHz', '15MHz', '20MHz', '25MHz', '30MHz', '35MHz', '40MHz'];
		}else if(scs_sel=='30'){
			transmission_option_list['NR'] = ['Select Transmission Bandwidth', '10MHz (NRB 24)', '15MHz (NRB 38)', '20MHz (NRB 51)', '25MHz (NRB 65)', '30MHz (NRB 78)', '35MHz (NRB 92)', '40MHz (NRB 106)'];
			transmission_option_val_list['NR'] = [' ', '10MHz', '15MHz', '20MHz', '25MHz', '30MHz', '35MHz', '40MHz'];
		}else{
			transmission_option_list['NR'] = ['Select Transmission Bandwidth', '10MHz (NRB 11)', '15MHz (NRB 18)', '20MHz (NRB 24)', '25MHz (NRB 31)', '30MHz (NRB 38)', '35MHz (NRB 44)', '40MHz (NRB 51)'];
			transmission_option_val_list['NR'] = [' ', '10MHz', '15MHz', '20MHz', '25MHz', '30MHz', '35MHz', '40MHz'];
		}
	}else if(band_sel=='2100MHz'){
		if(scs_sel=='15'){
			transmission_option_list['NR'] = ['Select Transmission Bandwidth', '5MHz (NRB 25)', '10MHz (NRB 52)', '15MHz (NRB 79)', '20MHz (NRB 106)', '25MHz (NRB 31)', '30MHZ (NRB 38)', '35MHz (NRB 188)', '40MHz (NRB 51)', '45MHz (NRB 242)'];
			transmission_option_val_list['NR'] = [' ', '5MHz', '10MHz', '15MHz', '20MHz', '25MHz', '30MHz', '35MHz', '40MHz', '45MHz'];
		}else if(scs_sel=='30'){
			transmission_option_list['NR'] = ['Select Transmission Bandwidth', '10MHz (NRB 52)', '15MHz (NRB 79)', '20MHz (NRB 106)', '25MHz (NRB 31)', '30MHZ (NRB 38)', '35MHz (NRB 188)', '40MHz (NRB 51)', '45MHz (NRB 242)'];
			transmission_option_val_list['NR'] = [' ', '10MHz', '15MHz', '20MHz', '25MHz', '30MHz', '35MHz', '40MHz', '45MHz'];
		}else{
			transmission_option_list['NR'] = ['Select Transmission Bandwidth', '10MHz (NRB 52)', '15MHz (NRB 79)', '20MHz (NRB 106)', '25MHz (NRB 31)', '30MHZ (NRB 38)', '35MHz (NRB 188)', '40MHz (NRB 51)', '45MHz (NRB 242)'];
			transmission_option_val_list['NR'] = [' ', '10MHz', '15MHz', '20MHz', '25MHz', '30MHz', '35MHz', '40MHz', '45MHz'];
		}
	}else if(band_sel=='2500MHz'){
		if(scs_sel=='15'){
			transmission_option_list['NR'] = ['Select Transmission Bandwidth', '5MHz (NRB 25)', '10MHz (NRB 52)', '15MHz (NRB 79)', '20MHz (NRB 106)', '25MHz (NRB 133)', '30MHz (NRB 160)', '40MHz (NRB 216)'];
			transmission_option_val_list['NR'] = [' ', '5MHz', '10MHz', '15MHz', '20MHz', '25MHz', '30MHz', '40MHz'];
		}else if(scs_sel=='30'){
			transmission_option_list['NR'] = ['Select Transmission Bandwidth', '10MHz (NRB 24)', '15MHz (NRB 38)', '20MHz (NRB 51)', '25MHz (NRB 65)', '30MHz (NRB 78)', '40MHz (NRB 106)'];
			transmission_option_val_list['NR'] = [' ', '10MHz', '15MHz', '20MHz', '25MHz', '30MHz', '40MHz'];
		}else{
			transmission_option_list['NR'] = ['Select Transmission Bandwidth', '10MHz (NRB 11)', '15MHz (NRB 18)', '20MHz (NRB 24)', '25MHz (NRB 31)', '30MHz (NRB 38)', '40MHz (NRB 51)'];
			transmission_option_val_list['NR'] = [' ', '10MHz', '15MHz', '20MHz', '25MHz', '30MHz', '40MHz'];
		}
	}else if(band_sel=='2600MHz'){
		if(scs_sel=='15'){
			transmission_option_list['NR'] = ['Select Transmission Bandwidth', '5MHz (NRB 25)', '10MHz (NRB 52)', '15MHz (NRB 79)', '20MHz (NRB 106)', '25MHz (NRB 133)', '30MHz (NRB 160)', '35MHz (NRB 188)', '40MHz (NRB 216)', '50MHz (NRB 270)'];
			transmission_option_val_list['NR'] = [' ', '5MHz', '10MHz', '15MHz', '20MHz', '25MHz', '30MHz', '35MHz', '40MHz', '50MHz'];
		}else if(scs_sel=='30'){
			transmission_option_list['NR'] = ['Select Transmission Bandwidth', '10MHz (NRB 24)', '15MHz (NRB 38)', '20MHz (NRB 51)', '25MHz (NRB 65)', '30MHz (NRB 78)', '35MHz (NRB 92)', '40MHz (NRB 106)', '50MHz (NRB 133)'];
			transmission_option_val_list['NR'] = [' ', '10MHz', '15MHz', '20MHz', '25MHz', '30MHz', '35MHz', '40MHz', '50MHz'];
		}else{
			transmission_option_list['NR'] = ['Select Transmission Bandwidth', '10MHz (NRB 11)', '15MHz (NRB 18)', '20MHz (NRB 24)', '25MHz (NRB 31)', '30MHz (NRB 38)', '35MHz (NRB 44)', '40MHz (NRB 51)', '50MHz (NRB 65)'];
			transmission_option_val_list['NR'] = [' ', '10MHz', '15MHz', '20MHz', '25MHz', '30MHz', '35MHz', '40MHz', '50MHz'];
		}
	}else if(band_sel=='3500MHz'){
		if(scs_sel=='15'){
			transmission_option_list['NR'] = ['Select Transmission Bandwidth', '10MHz (NRB 52)', '15MHz (NRB 79)', '20MHz (NRB 106)', '25MHz (NRB 133)', '30MHz (NRB 160)', '40MHz (NRB 216)', '50MHz (NRB 270)'];
			transmission_option_val_list['NR'] = [' ', '10MHz', '15MHz', '20MHz', '25MHz', '30MHz', '40MHz', '50MHz'];
		}else if(scs_sel=='30'){
			transmission_option_list['NR'] = ['Select Transmission Bandwidth', '10MHz (NRB 24)', '15MHz (NRB 38)', '20MHz (NRB 51)', '25MHz (NRB 65)', '30MHz (NRB 78)', '40MHz (NRB 106)', '50MHz (NRB 133)', '60MHz (NRB 162)', '70MHz (NRB 189)', '80MHz (NRB 217)', '90MHz (NRB 245)', '100MHz (NRB 273)'];
			transmission_option_val_list['NR'] = [' ', '10MHz', '15MHz', '20MHz', '25MHz', '30MHz', '40MHz', '50MHz', '60MHz', '70MHz', '80MHz', '90MHz', '100MHz'];
		}else{
			transmission_option_list['NR'] = ['Select Transmission Bandwidth', '10MHz (NRB 11)', '15MHz (NRB 18)', '20MHz (NRB 24)', '25MHz (NRB 31)', '30MHz (NRB 38)', '40MHz (NRB 51)', '50MHz (NRB 65)', '60MHz (NRB 79)', '70MHz (NRB 93)', '80MHz (NRB 107)', '90MHz (NRB 121)', '100MHz (NRB 135)'];
			transmission_option_val_list['NR'] = [' ', '10MHz', '15MHz', '20MHz', '25MHz', '30MHz', '40MHz', '50MHz', '60MHz', '70MHz', '80MHz', '90MHz', '100MHz'];
		}
	}

	var transmission_options = transmission_option_list[technology_sel];
	var transmission_list = document.getElementById('transmission');

	while(transmission_list.options.length){
		transmission_list.remove(0);
	}
	if(transmission_option_list){
		var i;
		// remove all options and then re-add new ones
		for(i=0; i<transmission_options.length; i++){
			var trans = new Option(transmission_options[i], transmission_option_val_list[technology_sel][i]);
			document.getElementById('transmission').options.add(trans);
		}
	}
}

function overheadOnchange(){

	// Enable the Custom Overhead textbox
	if(document.getElementById("overhead").value == "customOverhead"){
		document.getElementById('customOverheadDiv').style.display = 'block';
	}else{
		document.getElementById('customOverheadDiv').style.display = 'none';
	}
}

function scalingFactorOnchange(){

	//Enable the Custom Scaling Factor textbox
	if(document.getElementById("scalingfactor").value == "customScalingFactor"){
		document.getElementById('customScalingFactorDiv').style.display = 'block';
	}else{
		document.getElementById('customScalingFactorDiv').style.display = 'none';
	}
}

function moreAdvancedClick(){
	// Enabling the More Advanced options
	if (document.getElementById("moreAdvancedCheckbox").checked == true){
		document.getElementById('mcsIndexList').style.display = 'block';
		document.getElementById('mcsTableList').style.display = 'block';
		document.getElementById('modulationList').style.display = 'none';
		document.getElementById('tbsSelect').style.display = 'none';
	}else if(document.getElementById("moreAdvancedCheckbox").checked == false){
		document.getElementById('mcsIndexList').style.display = 'none';
		document.getElementById('mcsTableList').style.display = 'none';
		document.getElementById('modulationList').style.display = 'block';
		// only if LTE selected
		if(document.getElementById('technology').value=='LTE'){
			document.getElementById('tbsSelect').style.display = 'block';
		}
	}
}

function mcsOnchange(){
  var table_sel = document.getElementById("mcsTable").value;

  if(table_sel=="table1" || table_sel=="table3"){
    var index_val_list = [...Array(29).keys()];
  } else if(table_sel=="table2"){
    var index_val_list = [...Array(28).keys()];
  } else if(table_sel=="table4"){
    var index_val_list = [...Array(23).keys()];
  }

  var index_list = index_val_list.map(String);
  if(index_list){
    var i;
    // remove all options and then re-add new ones
    // transmission.options.empty();
    $('#mcsIndexMenu').empty();
    for(i=0; i<index_list.length; i++){
      var index = new Option(index_list[i], index_val_list[i]);
      $('#mcsIndexMenu').append(index);
    }
  }

}

/** Creating a function to create the MCS Tables and return the Modulation Scheme and the Target Code Rate */
function getMcsData(mcsIndex, mcsTable){

	if(mcsTable == 'table1'){
		mcsTable1 = {
			"MCSIndex"           : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
			"ModulationScheme"   : ["QPSK", "QPSK", "QPSK", "QPSK", "QPSK", "QPSK", "QPSK", "QPSK", "QPSK", "QPSK", "16QAM", "16QAM", "16QAM", "16QAM", "16QAM", "16QAM", "16QAM", "64QAM", "64QAM", "64QAM", "64QAM", "64QAM", "64QAM", "64QAM", "64QAM", "64QAM", "64QAM", "64QAM", "64QAM", "QPSK", "16QAM", "64QAM"],
			"TargetCodeRate"     : [0.1171875, 0.153320313, 0.188476563, 0.245117188, 0.30078125, 0.370117188, 0.438476563, 0.513671875, 0.587890625, 0.663085938, 0.33203125, 0.369140625, 0.423828125, 0.478515625, 0.540039063, 0.6015625, 0.642578125, 0.427734375, 0.455078125, 0.504882813, 0.553710938, 0.6015625, 0.650390625, 0.702148438, 0.75390625, 0.802734375, 0.852539063, 0.888671875, 0.92578125, 0, 0, 0]
		};

		mcs_table1_df = new dfd.DataFrame(mcsTable1);
		var modulationScheme = mcs_table1_df.loc({rows: mcs_table1_df['MCSIndex'].eq(mcsIndex)})['ModulationScheme'].values;
		var codeRate = mcs_table1_df.loc({rows: mcs_table1_df['MCSIndex'].eq(mcsIndex)})['TargetCodeRate'].values;
	}else if(mcsTable == 'table2'){
		mcsTable2 = {
			"MCSIndex"           : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
			"ModulationScheme"   : ["QPSK", "QPSK", "QPSK", "QPSK", "QPSK", "16QAM", "16QAM", "16QAM", "16QAM", "16QAM", "16QAM", "64QAM", "64QAM", "64QAM", "64QAM", "64QAM", "64QAM", "64QAM", "64QAM", "64QAM", "256QAM", "256QAM", "256QAM", "256QAM", "256QAM", "256QAM", "256QAM", "256QAM", "QPSK", "16QAM", "64QAM", "256QAM"],
			"TargetCodeRate"     : [0.1171875, 0.188476563, 0.30078125, 0.438476563, 0.587890625, 0.369140625, 0.423828125, 0.478515625, 0.540039063, 0.6015625, 0.642578125, 0.455078125, 0.504882813, 0.553710938, 0.6015625, 0.650390625, 0.702148438, 0.75390625, 0.802734375, 0.852539063, 0.666503906, 0.694335938, 0.736328125, 0.778320313, 0.821289063, 0.864257813, 0.895019531, 0.92578125, 0, 0, 0, 0]
		};

		mcs_table2_df = new dfd.DataFrame(mcsTable2);
		var modulationScheme = mcs_table2_df.loc({rows: mcs_table2_df['MCSIndex'].eq(mcsIndex)})['ModulationScheme'].values;
		var codeRate = mcs_table2_df.loc({rows: mcs_table2_df['MCSIndex'].eq(mcsIndex)})['TargetCodeRate'].values;
	}else if(mcsTable == 'table3'){
		mcsTable3 = {
			"MCSIndex"         : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
			"ModulationScheme" : ["QPSK", "QPSK", "QPSK", "QPSK", "QPSK", "QPSK", "QPSK", "QPSK", "QPSK", "QPSK", "QPSK", "QPSK", "QPSK", "QPSK", "QPSK", "16QAM", "16QAM", "16QAM", "16QAM", "16QAM", "16QAM", "64QAM", "64QAM", "64QAM", "64QAM", "64QAM", "64QAM", "64QAM", "64QAM", "QPSK", "16QAM", "64QAM"],
			"TargetCodeRate"   : [0.029296875, 0.0390625, 0.048828125, 0.0625, 0.076171875, 0.096679688, 0.1171875, 0.153320313, 0.188476563, 0.245117188, 0.30078125, 0.370117188, 0.438476563, 0.513671875, 0.587890625, 0.33203125, 0.369140625, 0.423828125, 0.478515625, 0.540039063, 0.6015625, 0.427734375, 0.455078125, 0.504882813, 0.553710938, 0.6015625, 0.650390625, 0.702148438, 0.75390625, 0, 0, 0]
		};

		mcs_table3_df = new dfd.DataFrame(mcsTable3);
		var modulationScheme = mcs_table3_df.loc({rows: mcs_table3_df['MCSIndex'].eq(mcsIndex)})['ModulationScheme'].values;
		var codeRate = mcs_table3_df.loc({rows: mcs_table3_df['MCSIndex'].eq(mcsIndex)})['TargetCodeRate'].values;
	}else if(mcsTable == 'table4'){
		mcsTable4 = {
			"MCSIndex"         : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
			"ModulationScheme" : ["QPSK", "QPSK", "QPSK", "16QAM", "16QAM", "16QAM", "64QAM", "64QAM", "64QAM", "64QAM", "64QAM", "64QAM", "64QAM", "64QAM", "64QAM", "256QAM", "256QAM", "256QAM", "256QAM", "256QAM", "256QAM", "256QAM", "256QAM", "1024QAM", "1024QAM", "1024QAM", "1024QAM", "QPSK", "16QAM", "64QAM", "256QAM", "1024QAM"],
			"TargetCodeRate"   : [0.1171875, 0.188476563, 0.438476563, 0.369140625, 0.478515625, 0.6015625, 0.455078125, 0.504882813, 0.553710938, 0.6015625, 0.650390625, 0.702148438, 0.75390625, 0.802734375, 0.852539063, 0.666503906, 0.694335938, 0.736328125, 0.778320313, 0.821289063, 0.864257813, 0.895019531, 0.92578125, 0.786621094, 0.833007813, 0.879394531, 0.92578125, 0, 0, 0, 0, 0]
		};

		mcs_table4_df = new dfd.DataFrame(mcsTable4);
		var modulationScheme = mcs_table4_df.loc({rows: mcs_table4_df['MCSIndex'].eq(mcsIndex)})['ModulationScheme'].values;
		var codeRate = mcs_table4_df.loc({rows: mcs_table4_df['MCSIndex'].eq(mcsIndex)})['TargetCodeRate'].values;
	}
	/* Finished creating the dataframe from the MCS Tables */
	return [modulationScheme, codeRate];
}

/** Creating a function to create the nRB Tables and return the nrB value */
function getnRBData(frequency, transmission, scs, technology){

	/* Creating a dataframe of the NRB */
	if(technology == 'LTE'){
		var obj_data = {
			'SCS'  : [15],
			'5MHz' : [25],
			'10MHz': [50],
			'15MHz': [75],
			'20MHz': [100]
		};
	}else if(frequency == 'FR1'){
		var obj_data = {
			'SCS'   : [15, 30, 60],
			'5MHz'  : [25, 11, null],
			'10MHz' : [52, 24, 11],
			'15MHz' : [79, 38, 18],
			'20MHz' : [106, 51, 24],
			'25MHz' : [133, 65, 31],
			'30MHz' : [160, 78, 38],
			'35MHz' : [188, 92, 44],
			'40MHz' : [216, 106, 51],
			'45MHz' : [242, 119, 58],
			'50MHz' : [270, 133, 65],
			'60MHz' : [null, 162, 79],
			'70MHz' : [null, 189, 93],
			'80MHz' : [null, 217, 107],
			'90MHz' : [null, 245, 121],
			'100MHz': [null, 273, 135]
		}
	}else if(frequency == 'FR2'){
		var obj_data = {
			'SCS'   : [60, 120],
			'50MHz' : [66, 32],
			'100MHz': [132, 66],
			'200MHz': [264, 132],
			'400MHz': [null, 264]
		}
	}

	df = new dfd.DataFrame(obj_data);
	return df.loc({rows: df['SCS'].eq(scs)})[transmission].values;
}

/** Creating a function to perform calculations for Frame Pattern and Special Frame Pattern */
function frameCalculations(framePattern, specialFramePattern){

	technology = document.getElementById('technology').value;

	var LTEframe_obj_data = {
		'FramePatternID'   : ['SA0', 'SA1', 'SA2', 'SA3', 'SA4', 'SA5', 'SA6'],
		'DLSymbols' : [14, 28, 42, 84, 98, 112, 42],
		'ULSymbols' : [42, 28, 14, 42, 28, 14, 70],
		'GuardSymbols' : [0, 0, 0, 0, 0, 0, 0],
		'Totals' : [70, 70, 70, 140, 140, 140, 140],
		'SpecialSlots' : [1, 1, 1, 1, 1, 1, 2]
	}

	var frame_obj_data = {
		'FramePatternID'   : ['TDD_ULDL_PATTERN_00', 'TDD_ULDL_PATTERN_01', 'TDD_ULDL_PATTERN_02', 'TDD_ULDL_PATTERN_03', 'TDD_ULDL_PATTERN_04', 'TDD_ULDL_PATTERN_05', 'TDD_ULDL_PATTERN_06', 'TDD_ULDL_PATTERN_07', 'TDD_ULDL_PATTERN_08'],
		'Configuration'  : ['DDSU', 'DDDSUUDDDD', 'DDDSU', 'DDDSUDDSUU', 'DDDDDDDSUU', 'DDSUU', 'DSUUU', 'DDDSUUDSUU', 'DDDSUUUUDD'],
		'DLSymbols' : [28, 98, 42, 70, 98, 28, 14, 56, 70],
		'ULSymbols' : [14, 28, 14, 42, 28, 28, 42, 56, 56],
		'GuardSymbols' : [0, 0, 0, 0, 0, 0, 0, 0, 0],
		'Totals' : [56, 140, 70, 140, 140, 70, 70, 140, 140],
		'SpecialSlots' : [1, 1, 1, 2, 1, 1, 1, 2, 1]
	}

	var LTEspecial_frame_obj_data = {
		'FramePatternID'   : ['SSF0', 'SSF1', 'SSF2', 'SSF3', 'SSF4', 'SSF5', 'SSF6', 'SSF7', 'SSF8', 'SSF9'],
		'DLSymbols' : [3, 9, 10, 11, 12, 3, 9, 10, 11, 6],
		'ULSymbols' : [1, 1, 1, 1, 1, 2, 2, 2, 2, 2],
		'GuardSymbols' : [10, 4, 3, 2, 1, 9, 3, 2, 1, 6],
		'Totals' : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		'DLSlot' : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	}

	/* Creating dataframe for Special Frame Object */
	var special_frame_obj_data = {
		'FramePatternID'   : ['TDD_SPECIAL_SLOT_PATTERN_00', 'TDD_SPECIAL_SLOT_PATTERN_01', 'TDD_SPECIAL_SLOT_PATTERN_02', 'TDD_SPECIAL_SLOT_PATTERN_03', 'TDD_SPECIAL_SLOT_PATTERN_04', 'TDD_SPECIAL_SLOT_PATTERN_05'],
		'Configuration'  : ['11:3:0', '3:8:3', '10:2:2', '6:4:4', '4:6:4', '6:8:0 ; 010:4'],
		'DLSymbols' : [11, 3, 10, 6, 4, 6],
		'ULSymbols' : [0, 3, 2, 4, 4, 4],
		'GuardSymbols' : [3, 8, 2, 4, 6, 18],
		'Totals' : ['N/A', 'N/A', 'N/A', 'N/A', 'N/A', 'N/A'],
		'DLSlot' : [0, 0, 0, 0, 0, 1]
	}

	if(technology == 'NR'){
		df_frame_obj = new dfd.DataFrame(frame_obj_data);
		df_special_frame_obj = new dfd.DataFrame(special_frame_obj_data);
	}else{
		df_frame_obj = new dfd.DataFrame(LTEframe_obj_data);
		df_special_frame_obj = new dfd.DataFrame(LTEspecial_frame_obj_data);
	}

	/* Finished creating dataframe */

	/* Retrieving Frame and Special Frame values from the created dataframes */
	var frameDlSymbol = df_frame_obj.loc({rows: df_frame_obj['FramePatternID'].eq(framePattern)})['DLSymbols'].values;
	var frameUlSymbol = df_frame_obj.loc({rows: df_frame_obj['FramePatternID'].eq(framePattern)})['ULSymbols'].values;
	var frameGuardSymbol = df_frame_obj.loc({rows: df_frame_obj['FramePatternID'].eq(framePattern)})['GuardSymbols'].values;
	var frameSpecialSlot = df_frame_obj.loc({rows: df_frame_obj['FramePatternID'].eq(framePattern)})['SpecialSlots'].values;
	var specialFrameDlSymbol = df_special_frame_obj.loc({rows: df_special_frame_obj['FramePatternID'].eq(specialFramePattern)})['DLSymbols'].values;
	var specialFrameUlSymbol = df_special_frame_obj.loc({rows: df_special_frame_obj['FramePatternID'].eq(specialFramePattern)})['ULSymbols'].values;
	var specialFrameGuardSymbol = df_special_frame_obj.loc({rows: df_special_frame_obj['FramePatternID'].eq(specialFramePattern)})['GuardSymbols'].values;
	var specialFrameDlSlot = df_special_frame_obj.loc({rows: df_special_frame_obj['FramePatternID'].eq(specialFramePattern)})['DLSlot'].values;
	/* Finished retrieving values from the dataframe */

	/* Frame and Special Frame Calculations */
	var totalDlSymbols = Number(frameDlSymbol) + (Number(frameSpecialSlot) * Number(specialFrameDlSymbol)) - (Number(frameSpecialSlot) * (Number(specialFrameDlSlot) * 14));
	var totalUlSymbols = Number(frameUlSymbol) + (Number(frameSpecialSlot) * Number(specialFrameUlSymbol));
	var totalGuardSymbols = Number(frameGuardSymbol) + (Number(frameSpecialSlot) * Number(specialFrameGuardSymbol));
	var dlRatio = totalDlSymbols / (totalDlSymbols + totalUlSymbols + totalGuardSymbols);
	console.log("DL Ratio = " + (dlRatio * 100).toFixed(2) + " %");
	var ulRatio = totalUlSymbols / (totalDlSymbols + totalUlSymbols + totalGuardSymbols);
	console.log("UL Ratio = " + (ulRatio * 100).toFixed(2) + " %");
	var guardRatio = totalGuardSymbols / (totalDlSymbols + totalUlSymbols + totalGuardSymbols);
	/* Finished Frame and Special Frame calculations */

	return [dlRatio, ulRatio, guardRatio, totalDlSymbols, totalUlSymbols, totalGuardSymbols];
}

/* Function utilized in download function */
function createBlob(data){
	return new Blob([data], { type: "text/plain" });
}

var i = 0;
var coding_rate_arr = [];


function multipleCarrier() {
	i = i + 1
	document.getElementById("technology").selectedIndex = 0;
	document.getElementById("frequency").selectedIndex = 0;
	document.getElementById("transmission").selectedIndex = 0;
	document.getElementById("scs").selectedIndex = 0;
	document.getElementById("mimo").selectedIndex = 0;
	document.getElementById("modulation").selectedIndex = 0;
	document.getElementById("scalingfactor").selectedIndex = 0;
	document.getElementById("overhead").selectedIndex = 0;
	document.getElementById("mcsTable").selectedIndex = 0;
	document.getElementById("mcsIndexMenu").selectedIndex = 0;
	document.getElementById('moreAdvancedCheckbox').checked = false;
	document.getElementById('tbsCheckbox').checked = false;
	document.getElementById('dssOverheadCheckbox').checked = false;
	if(advanced == 'true'){
		document.getElementById('moreAdvancedFeatures').style.display = 'block';
	}
	document.getElementById("mcsTableList").style.display = "none"
	document.getElementById("mcsIndexList").style.display = "none"
	var original = document.getElementById('calcCardDeck');
	var originalCalculationModalBody = document.getElementById("calculationModalBody0");
	var clone = original.cloneNode(true); // "deep" clone
	var cloneCalculationModalBody = originalCalculationModalBody.cloneNode(true);
	clone.id = "calcCardDeck" + i; // there can only be one element with an ID
	cloneCalculationModalBody.id = "calculationModalBody"+i;
	clone.style = "margin-top: 1.0em; width: 95%;";
	original.parentNode.appendChild(clone);
	originalCalculationModalBody.parentNode.appendChild(cloneCalculationModalBody);
	document.getElementById("calcCardDeck"+i).querySelector("#carrierHeader").innerText = "Carrier " + i;

	if(i > 0){
		document.getElementById('multipleCarrier').style.display = 'block';
		document.getElementById('multiCalculation').style.display = 'block';
		document.getElementById('deleteLi').style.display = 'block';
	}else{
		document.getElementById('multipleCarrier').style.display = 'none';
		document.getElementById('multiCalculation').style.display = 'none';
		document.getElementById('deleteLi').style.display = 'none'
	}

	document.getElementById("technology").disabled = false;
	document.getElementById("uldl").disabled = true;
	document.getElementById("frequency").disabled = false;
	document.getElementById("transmission").disabled = false;
	document.getElementById("mimo").disabled = false;
	document.getElementById("modulation").disabled = false;
	document.getElementById("scalingfactor").disabled = false;
	document.getElementById("overhead").disabled = false;
	document.getElementById("scs").disabled = false;
	document.getElementById("dssOverheadCheckbox").disabled = false;
}

function getData(){
	var technology = document.getElementById('technology').value; // Technology
	console.log("Technology : ", technology);
	var updown = document.getElementById('uldl').value; // UpLink or DownLink
	console.log("UpLink/DownLink : ", updown);
	var band_sel = document.getElementById('frequency').value.split(" ")[1]; // FR1 or FR2
	console.log("Band : ", band_sel);
	var frequency = document.getElementById('frequency').value.split(" ")[0]; // Frequency
	console.log("Frequency : ", frequency);
	var scs = document.getElementById('scs').value; // Sub-Carrier Spacing
	console.log("Sub-Carrier Spacing : ", scs);
	var transmission = document.getElementById('transmission').value; // Transmission
	console.log("Transmission : ", transmission);
	var mimo = Number(document.getElementById('mimo').value) // MIMO
	console.log("MIMO : ", mimo);
	var overhead = document.getElementById('overhead').value; // Overhead
	console.log("Overhead : ", overhead);
	var dssOverhead = document.getElementById('dssOverheadCheckbox').checked; // DSS Overhead
	console.log("DSS Overhead : ", dssOverhead);
	var modulation = document.getElementById('modulation').value; // Modulation
	console.log("Modulation : ", modulation);
	var scaling = document.getElementById('scalingfactor').value; // Scaling Factor
	if(scaling == 'customScalingFactor'){
		scaling = document.getElementById('customScalingFactorValue').value;
	}
	console.log("Scaling Factor : ", scaling);
	var efficiency = document.getElementById('efficiency').value; // Efficiency
	if(isNaN(efficiency) || efficiency == ""){
		var efficiency = "90";
	}
	console.log("Efficiency : ", efficiency);
	var tbs = document.getElementById('tbsCheckbox').checked;
	console.log("TBS Index Mapping : ", tbs);
	var moreAdvanced = document.getElementById('moreAdvancedCheckbox').checked;
	console.log("More Advanced : ", moreAdvanced);
	var mcsTable = document.getElementById('mcsTable').value;
	console.log("MCS Table : ", mcsTable);
	var mcsIndex = Number(document.getElementById('mcsIndexMenu').value);
	console.log("MCS Index : ", mcsIndex);
	var framePattern = document.getElementById('framePattern').value;
	console.log("Frame Pattern : ", framePattern);
	var specialFramePattern = document.getElementById('frameSpecialPattern').value;
	console.log("Special Frame Pattern : ", specialFramePattern);
	var endcOverhead = document.getElementById("multipleCarrierOverhead").value;
	console.log("CA or EN-DC Overhead : ", endcOverhead)
	return [technology, updown, frequency, transmission, scs, mimo, overhead, dssOverhead, modulation, scaling, efficiency, tbs, moreAdvanced, mcsTable, mcsIndex, framePattern, specialFramePattern, band_sel, endcOverhead]
}

function getTbsData(tbsIndex, bandwidth){
  // Initialize table
  tbsTable = {
    "TBSIndex" : [9, 15, 26, 33],
    "5MHz" : [4008, 7736, 18336, 24496],
    "10MHz" : [7992, 15264, 36696, 48936],
    "15MHz" : [11832, 22920, 55056, 75376],
    "20MHz" : [15840, 30576, 75376, 97896]
  };

  tbs_df = new dfd.DataFrame(tbsTable);
  var PRB = tbs_df.loc({rows: tbs_df['TBSIndex'].eq(tbsIndex)})[bandwidth].values[0];

  return PRB;
}

function getModulationData(modulation){
	if(modulation == 'qpsk'){
		var bits = 2;
		var codeRate = 0.5879;
		var tbsIndex = 9;
	}else if(modulation == '16qam'){
		var bits = 4;
		var codeRate = 0.6426;
		var tbsIndex = 15;
	}else if(modulation == '64qam'){
		var bits = 6;
		var codeRate = 0.8525;
		var tbsIndex = 26;
	}else if(modulation == '256qam'){
		var bits = 8;
		var codeRate = 0.9258;
		var tbsIndex = 33;
	}
	return [bits, codeRate, tbsIndex];
}

function getSymbols(scs){
	if(scs == '15'){
		var symbols = 14;
    }else if(scs == '30'){
		var symbols = 28;
    }else if(scs == '60'){
		var symbols = 56;
    }else if (scs == '120'){
		var symbols = 112;
    }

	return symbols;
}

function getOverheadPercentage(overhead){
	if(overhead == 'FR1DL'){
		var overhead_percentage = 0.14;
    }else if(overhead == 'FR2DL'){
		var overhead_percentage = 0.18;
    }else if(overhead == 'FR1UL'){
		var overhead_percentage = 0.08;
    }else if(overhead == 'FR2UL'){
		var overhead_percentage = 0.10;
    }else if(overhead == '25%'){
		var overhead_percentage = 0.25;
	}else if(overhead == 'customOverhead'){
		var overhead_percentage = Number(document.getElementById('customOverheadValue').value) / 100;
	}

	return overhead_percentage;
}

function getOverheadPercentageDSS(technology, updown){
	if(technology == "LTE" && updown == 'ul'){
		var dssOverhead_percentage = 0.025;
	}else if(technology == "LTE" && updown == 'dl'){
		var dssOverhead_percentage = 0.075;
	}else if(technology == "NR" && updown == 'ul'){
		var dssOverhead_percentage = 0.06;
	}else if(technology == "NR" && updown == 'dl'){
		var dssOverhead_percentage = 0.33;
	}

	return dssOverhead_percentage;
}

var final_string = "";

function calculation(){
	data = getData();
	// Get the required data
	technology = data[0];
	tech_arr[i] = technology;
	updown = data[1];
	frequency = data[2];
	band_sel = data[17];
	transmission = data[3];
	if(technology == 'LTE'){
		var scs = '15'; // default
	}else{
		scs = data[4];
	}
	mimo = data[5];
	overhead = data[6];
	dssOverhead = data[7];
	modulation = data[8];
	if(advanced == false){
		var scaling = "1";
	}else{
		scaling = data[9];
	}
	if(isNaN(efficiency) || efficiency == ""){
		efficiency = 0.90;
	}else{
		efficiency = Number(data[10])/100;
	}
	tbs = data[11];
	moreAdvanced = data[12];
	mcsTable = data[13];
	mcsIndex = data[14];
	framePattern = data[15];
	specialFramePattern = data[16];
	var subcarriers = 12 // default
	try{
		// STEP 1 : Calculating the Resource Symbols >> (Resource Elements) = (No. of SubCarriers) x (OFDM Symbols) x (nRB)
		var symbols = getSymbols(scs);
		var nrb = getnRBData(frequency, transmission, Number(scs), technology);
		var resource_elements = subcarriers * symbols * nrb;
		final_string = "STEP 1: (Resource Elements) = (No. of SubCarriers) x (OFDM Symbols) x (nRB)";
		final_string = final_string + "\n(Resource Elements) = " + String(subcarriers) + " x " + String(symbols) + " x " + String(nrb) + " = " + String(resource_elements.toFixed(2));

		// STEP 2 : Calculating the Total No. of Bits in a Sub-Frame >> (Total No. of Bits in a SubFrame) = (Resource Elements) x (No. of Bits)
		if(advanced == false){
			if(updown == 'ul'){
				var modulation = '64qam';
			}else{
				var modulation = '256qam';
			}
		}
		
		if(moreAdvanced == true){
			mcsData = getMcsData(mcsIndex, mcsTable);
			modulation = String(mcsData[0]).toLowerCase();
			var codeRate = Number(mcsData[1]);
			var modulation_data = getModulationData(modulation);
			var bits = modulation_data[0];
		}else{
			var modulation_data = getModulationData(modulation);
			var bits = modulation_data[0];
			var codeRate = modulation_data[1];
		}

		var bits_subframe = resource_elements * bits;
		final_string = final_string + "\nSTEP 2: (Total No. of Bits in a SubFrame) = (Resource Elements) x (No. of Bits)"
		final_string = final_string + "\n(Total No. of Bits in a SubFrame) = " + String(resource_elements) + " x " + String(bits) + " = " + String(bits_subframe.toFixed(2));
		
		// STEP 3 : Calculating the Data Rate >> (Data Rate) = (Total No. of Bits in a SubFrame)/1ms
		var data_rate = bits_subframe / 1000;
		if(tbs == true){
			var tbsIndex = modulation_data[2];
			var prb = getTbsData(tbsIndex, transmission);
			var data_rate = prb / 1000;
			final_string = final_string + "\nSTEP 3: (Data Rate) = (PRB) / 1ms"
			final_string = final_string + "\n(Data Rate) = " + String(prb) + " / " + " 1000" + " = " + String(data_rate.toFixed(2));
		}else{
			final_string = final_string + "\nSTEP 3: (Data Rate) = (Total No. of Bits in a SubFrame) / 1ms"
			final_string = final_string + "\n(Data Rate) = " + String(bits_subframe) + " / " + " 1000" + " = " + String(data_rate.toFixed(2));
		}

		// STEP 4 : Assuming MIMO Streams >> (Assuming x MIMO Streams) = (No. of MIMO Layers) x (Data Rate)
		var x_mimo_streams = mimo * data_rate;
		final_string = final_string + "\nSTEP 4 : (Assuming x MIMO Streams) = (No. of MIMO Layers) x (Data Rate)";
		final_string = final_string + "\n(Assuming x MIMO Streams) = " + String(mimo) + " x " + String(data_rate.toFixed(2)) + " = " + String(x_mimo_streams.toFixed(2));

		// STEP 5 : Calculating the Overhead
		var overhead_percentage = getOverheadPercentage(overhead);
		if(dssOverhead == true){
			dssOverhead_percentage = getOverheadPercentageDSS(technology, updown);
		}else{
			var dssOverhead_percentage = 0;
		}
		var x_overhead = x_mimo_streams * (1 - overhead_percentage) * (1 - dssOverhead_percentage);
		final_string = final_string + "\nSTEP 5 : (Calculating the Overhead) = (Assuming x MIMO Streams) x (1 - Overhead %) x (1 - DSS Overhead %)";
		final_string = final_string + "\n(Calculating the Overhead) = " + String(x_mimo_streams.toFixed(2)) + " x " + "(1 - " + String(overhead_percentage) + ") x (1 - " + String(dssOverhead_percentage) + ") = " + String(x_overhead.toFixed(2));

		// STEP 6 : Taking Scaling Factor into account
		console.log("STEP 6 : Taking Scaling Factor into account")
		var x_scalingfactor = x_overhead * Number(scaling);
		final_string = final_string + "\nSTEP 6: (Taking Scaling Factor into account) = (Calculating the Overhead) x (Scaling Factor)";
		final_string = final_string + "\n(Taking Scaling Factor into account) = " + String(x_overhead.toFixed(2)) + " x " + String(scaling) + " = " + String(x_scalingfactor.toFixed(2));

		// STEP 7 : Final Throughput Calculation
		console.log("STEP 7 : Final throughput Calculation");
		var frameCalculationResults = frameCalculations(framePattern, specialFramePattern);
		var dlRatio = frameCalculationResults[0];
		var ulRatio = frameCalculationResults[1];

		if((band_sel == '2500MHz' || band_sel == '3500MHz' || frequency == 'FR2') && (advanced == true)){
			if(updown == 'dl'){
				ratio = dlRatio;
			}else if(updown='ul'){
				ratio = ulRatio;
			}
		}else if((band_sel == '2500MHz' || band_sel == '3500MHz' || frequency == 'FR2') && (advanced == false)){
			ratio = 0.73;
		}else{
			ratio = 1;
		}

		var coding_rate = x_scalingfactor * codeRate * efficiency * ratio;
		final_string = final_string + "\nSTEP 7 : (Final Throughput) = (Taking Scaling Factor into account) x (Code Rate) x (Efficiency) x (Ratio)";
		final_string = final_string + "\n(Final Throughput) = " + String(x_scalingfactor.toFixed(2)) + " x " + String(codeRate.toFixed(2)) + " x " + String(efficiency) + " x " + String(ratio) + " = " + String(coding_rate.toFixed(2));
		if(coding_rate == 0 || isNaN(coding_rate)){
			document.getElementById("errorBody").innerText = "Error!";
			document.getElementById("errorBody").style.color = "rgb(238, 39, 34)";
		}else{
			document.getElementById("errorBody").innerText = "Success!";
			document.getElementById("errorBody").style.color = "#008000";
		}
		
	}catch(err){
		document.getElementById("errorBody").innerText = "Error!"
		document.getElementById("errorBody").style.color = "rgb(238, 39, 34)";
	}
	return [resource_elements, bits_subframe, data_rate, x_mimo_streams, x_overhead, x_scalingfactor, coding_rate];
}

/* Color options for pie chart */
var red_colors = ['rgb(238,39,34)',
                  'rgb(171, 30, 50)',
                  'rgb(150, 17, 31)',
                  'rgb(206, 69, 95)',
                  'rgb(221, 93, 121)',
                  'rgb(233, 120, 147)',
                  'rgb(243, 148, 174)',
                  'rgb(249, 178, 199)',
                  'rgb(254, 207, 222)',
                  'rgb(253, 233, 240)'];
/* Additional labels to keep track of for final throughput card */
var all_labels = [];
var tech_arr = [];

function piechart(){

	var total_nr = 0;
	var total_lte = 0;

	for(var k=0; k<coding_rate_arr.length; k++){
		if(tech_arr[k] == 'NR'){
			total_nr = total_nr + coding_rate_arr[k];
		}else{
			total_lte = total_lte + coding_rate_arr[k];
		}
	}

    if(i>0){
      var color = red_colors.slice(0, i+1);
    } else {
      var color = [red_colors[0]];
    }

    var tech_data = [{
      values: [total_nr, total_lte],
      labels: ['NR', 'LTE'],
      type: 'pie',
      marker: {'colors': [red_colors[0], red_colors[1]]},
      sort: false
    }];

	carrier_labels = [];

	for (let j=0; j<=i; j++){
		carrier_labels.push("C"+j);
	  }

    var carrier_data = [{
      values: coding_rate_arr,
      labels: carrier_labels,
      type: 'pie',
      marker: {colors: color},
      sort: false
    }];

    var layout1 = {
      height: 200,
      width: 300,
      title: "Carriers",
      legend: {
        x: 1.2,
        xanchor: 'right',
        y: 1
      },
      margin: {
        l: 50,
        r: 50,
        b: 10,
        t: 50,
        pad: 1
      }
    }

    var layout2 = {
      height: 200,
      width: 300,
      title: "Technology",
      legend: {
        x: 1.2,
        xanchor: 'right',
        y: 1
      },
      margin: {
        l: 50,
        r: 50,
        b: 10,
        t: 50,
        pad: 1
      }
    }

    Plotly.newPlot('carrier-chart', carrier_data, layout1);
    Plotly.newPlot('tech-chart', tech_data, layout2);
};

var carrier_string = [];

function printOnCard(){
	if(advanced == false){
		data = getData();
		technology = data[0];
		updown = data[1];
		frequency = data[2];
		transmission = data[3];
		scs = data[4];
		mimo = data[5];
		overhead = data[6];
		dssOverhead = data[7];
		overhead_percentage = getOverheadPercentage(overhead);
		dssOverhead_percentage = getOverheadPercentageDSS(technology, updown);

		if(updown == 'ul'){
			var modulation = '64-QAM';
		}else{
			var modulation = '256-QAM';
		}

		efficiency = 0.90;
		band_sel = data[17];
	}else{
		data = getData();
		technology = data[0];
		updown = data[1];
		frequency = data[2];
		transmission = data[3];
		scs = data[4];
		mimo = data[5];
		overhead = data[6];
		dssOverhead = data[7];
		modulation = String(data[8]).toUpperCase();
		scaling = data[9];
		if(efficiency == "" || isNaN(efficiency)){
			efficiency = 0.90;
		}else{
			efficiency = Number(data[10])/100;
		}
		tbs = data[11];
		moreAdvanced = data[12];
		if(moreAdvanced == true){
			mcsTable = data[13];
			mcsIndex = data[14];
			mcsData = getMcsData(mcsIndex, mcsTable);
			modulation = String(mcsData[0]);
		}
		framePattern = data[15];
		specialFramePattern = data[16];
		band_sel = data[17];
		overhead_percentage = getOverheadPercentage(overhead);
		dssOverhead_percentage = getOverheadPercentageDSS(technology, updown);
	}

	if(technology == 'LTE'){
		scs = '15'
	}

	endcOverhead = data[18];
	if(isNaN(endcOverhead) || endcOverhead == ""){
		endcOverhead = 0;
	}else{
		endcOverhead = Number(endcOverhead)/100;
	}

	var sum = 0;

	for(var k=0; k<coding_rate_arr.length; k++){
		sum = sum + coding_rate_arr[k];
	}
	sum = sum * (1 - endcOverhead);

	document.getElementById("calcCardDeck"+i).querySelector("#carrierHeader").innerText = "Carrier " + i + " [" + technology + " " + band_sel + " (" + transmission + ")]";

	document.getElementById("calcCardDeck"+i).querySelector("#throughput_text").innerText = coding_rate_arr[i].toFixed(2) + " Mbps";

	document.getElementById("calcCardDeck"+i).querySelector("#firstCol_text").innerText = "Bandwidth: "+ transmission +"\nSCS: "+scs+"kHz"+"\nMIMO Layers: "+mimo+"\nModulation: "+modulation;
	if(dssOverhead==true){
		document.getElementById("calcCardDeck"+i).querySelector("#secondCol_text").innerText = "Technology: "+ technology +"\nDSS Channel: True" +"\nDSS Overhead: "+(dssOverhead_percentage*100).toFixed(2) +"%";
	}else{
		document.getElementById("calcCardDeck"+i).querySelector("#secondCol_text").innerText = "Technology: "+ technology +"\nDSS Channel: False";
	}

	document.getElementById("calcCardDeck"+i).querySelector("#thirdCol_text").innerText = "Overhead: " + (overhead_percentage*100).toFixed(1)+"%" + "\nEfficiency: "+(efficiency*100)+"%"

	if((band_sel == '2500MHz' || band_sel == '3500MHz' || frequency == 'FR2')){
		if(advanced == false){
			document.getElementById("calcCardDeck"+i).querySelector("#thirdCol_text").innerText = "Overhead: " + (overhead_percentage*100).toFixed(1)+"%" + "\nEfficiency: "+(efficiency*100)+"%" + "\nRatio: 0.73 (Default)";
		}else if(advanced == true){
			ratioData = frameCalculations(framePattern, specialFramePattern);
			if(updown == 'ul'){
				ratio = ratioData[1];
				document.getElementById("calcCardDeck"+i).querySelector("#thirdCol_text").innerText = "Overhead: " + (overhead_percentage*100).toFixed(1)+"%" + "\nEfficiency: "+(efficiency*100)+"%" + "\nUL Ratio: " + String(ratio.toFixed(2));
			}else if(updown == 'dl'){
				ratio = ratioData[0];
				document.getElementById("calcCardDeck"+i).querySelector("#thirdCol_text").innerText = "Overhead: " + (overhead_percentage*100).toFixed(1)+"%" + "\nEfficiency: "+(efficiency*100)+"%" + "\nDL Ratio: " + String(ratio.toFixed(2));
			}
		}	
	}else{
		document.getElementById("calcCardDeck"+i).querySelector("#thirdCol_text").innerText = "Overhead: " + (overhead_percentage*100).toFixed(1)+"%" + "\nEfficiency: "+(efficiency*100)+"%" + "\nRatio: 1 (Default)";
	}

	document.getElementById('multiCalculation_text').innerText = sum.toFixed(2) + "Mbps";

	piechart();

	document.getElementById("calculationModalBody"+i).innerText = "### Carrier " + i + " ###\n" + final_string;

	if(updown == 'dl'){
		document.getElementById("multiCalc_download").innerText = "(DownLink)";
	}else{
		document.getElementById("multiCalc_download").innerText = "(UpLink)"
	}
	carrier_string[i] = "Carrier " + i + " : " + technology + " " + band_sel + " (" + transmission + ") = " + coding_rate_arr[i].toFixed(2) + " Mbps\n";
	var summary_string = "";
	for(let j=0; j<=i; j++){
		summary_string = summary_string + carrier_string[j];
	}

	summary_string = summary_string + "CA or EN-DC Overhead : " + String(endcOverhead * 100) + "%";
	document.getElementById("multiCalculation_carriers").innerText = summary_string;
}

var coding_rate = 0;

function calculateThroughput(){
	cal_results = calculation();
	resource_elements = cal_results[0];
	bits_subframe = cal_results[1];
	data_rate = cal_results[2];
	x_mimo_streams = cal_results[3];
	x_overhead = cal_results[4];
	x_scalingfactor = cal_results[5];
	coding_rate = cal_results[6];
	coding_rate_arr[i] = coding_rate
	all_labels[i] = "C" + i;
	printOnCard();
}

function deleteCarrier(){
	document.getElementById("technology").selectedIndex = 0;
	document.getElementById("frequency").selectedIndex = 0;
	document.getElementById("transmission").selectedIndex = 0;
	document.getElementById("scs").selectedIndex = 0;
	document.getElementById("mimo").selectedIndex = 0;
	document.getElementById("modulation").selectedIndex = 0;
	document.getElementById("scalingfactor").selectedIndex = 0;
	document.getElementById("overhead").selectedIndex = 0;
	document.getElementById("mcsTable").selectedIndex = 0;
	document.getElementById("mcsIndexMenu").selectedIndex = 0;
	document.getElementById('moreAdvancedCheckbox').checked = false;
	document.getElementById('tbsCheckbox').checked = false;
	document.getElementById('dssOverheadCheckbox').checked = false;
	document.getElementById("mcsTableList").style.display = "none"
	document.getElementById("mcsIndexList").style.display = "none"
  if(i > 0){
    document.getElementById("calcCardDeck"+i).remove();
    document.getElementById("calculationModalBody"+i).remove();
    i = i - 1;
  }

  if(i > 0){
    document.getElementById('multipleCarrier').style.display = 'block';
    document.getElementById("deleteLi").style.display = "block";
	document.getElementById("multipleCarrierOverhead").value = endcOverhead * 100;
  }else{
    document.getElementById('multipleCarrier').style.display = 'none';
    document.getElementById('deleteLi').style.display = 'none'
    document.getElementById("multipleCarrierOverhead").value = "";
  }

  data = getData()
  endcOverhead = data[18];
  if(isNaN(endcOverhead) || endcOverhead == ""){
	endcOverhead = 0;
  }else{
	endcOverhead = Number(endcOverhead)/100;
  }

  coding_rate_arr.pop();
  all_labels.pop();
  tech_arr.pop();
  carrier_string.pop();
  piechart();

  var sum = 0;
  for(var k=0; k<coding_rate_arr.length; k++){
	sum = (sum + coding_rate_arr[k]);
  }
  sum = sum * (1 - endcOverhead);
  var summary_string = "";
  for(let j=0; j<=i; j++){
	summary_string = summary_string + carrier_string[j];
  }
  summary_string = summary_string + "CA or EN-DC Overhead : " + String(endcOverhead * 100) + "%";
  document.getElementById("multiCalculation_carriers").innerText = summary_string;
  document.getElementById('multiCalculation_text').innerText = sum.toFixed(2) + "Mbps";
  if(i == 0){
	document.getElementById("uldl").disabled = false;
  }else{
	document.getElementById("uldl").disabled = true;
  }
}

function createBlob(data) {
	return new Blob([data], { type: "text/plain" });
  }
  
/* Creating option to download calculations log */
function download() {
	var text = "";
	for (var j=0; j<=i; j++){
	  curr = document.getElementById("calculationModalBody"+j).innerText;
	  if (j==0){
		text += curr;
	  } else {
		text += "\n"+curr
	  }
	}
	const file = createBlob(text);
	const a = document.createElement("a");
	const url = window.URL.createObjectURL(file);
	a.href = url;
	a.download = "calculations.txt";
	a.click();
};
