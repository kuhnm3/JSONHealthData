$(document).ready(function() {
	
	$("#driver").click(function(event){

		$.getJSON('TwineHealthPatients.json', 
			function(data) {

				var sortedPatients = data.Patients.sort(function(patient1,patient2){
				var birthDate1 = new Date(patient1.birthDate);
				var birthDate2 = new Date(patient2.birthDate);
				console.log(birthDate1 + " - " + birthDate2 + " = " + (birthDate1.getTime()-birthDate2.getTime()));

				return birthDate1.getTime()-birthDate2.getTime();

			});
		

			for (i=0; i < data.Patients.length; i++) {
				var today = new Date();
				var birthDate = new Date(data.Patients[i].birthDate);
				var age = today.getYear() - birthDate.getYear();
				
				$('#patients').append(
					'<tr>' +
					'<td>' + age + '</td>' +
					'<td>' + data.Patients[i].firstName + '</td>' +
					'<td>' + data.Patients[i].lastName + '</td>' +
					'</tr>' 
					)
			

				if (data.Patients[i].systolic >= 140 || data.Patients[i].diastolic >= 90) {
						$('#patients2').append(
							'<tr>' +
							'<td>' + data.Patients[i].firstName + '</td>' +
							'<td>' + data.Patients[i].lastName + '</td>' +
							'<td>' + data.Patients[i].systolic + '</td>' +
							'<td>' + data.Patients[i].diastolic+ '</td>' +
							'</tr>'
						);
					}
			} 
				
	});
		

	});
	
	});



