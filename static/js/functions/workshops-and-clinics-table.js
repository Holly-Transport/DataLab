document.addEventListener('DOMContentLoaded', function() {
	const mostRecent = document.querySelector('.most-recent')
	const tableDates = document.querySelectorAll('.date')
	
	const formatIntoDateType = function (stringDate) {
		// Convert string date into Date type.
		if (typeof stringDate === 'string') {
			return new Date(stringDate).toISOString().split('T')[0] // Formats date into YYYY-MM-DD format.
		} else {
			throw new Error("The argument provided is not a string. Please check your arguments type.")
		}
	}
	console.log(mostRecent)
	mostRecent.textContent = formatIntoDateType(mostRecent.textContent)
	
	tableDates.forEach(date => {
		date.textContent = formatIntoDateType(date.textContent)
	})
	
	
	const dataTable = new simpleDatatables.DataTable("#workshops-and-clinics-table", {
		searchable: true,
		fixedHeight: true,
		columns: [
			{ select: [1, 3, 4, 5], searchable: false }
		]
	})
	
	console.log(dataTable)
	
	dataTable.on('datatable.search', function(query, matched) {
		console.log(query, matched)
	})
})
