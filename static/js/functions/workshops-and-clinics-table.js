const tableDates = document.querySelectorAll('.date')
console.log(tableDates)

const formatIntoDateType = function (stringDate) {
	// Convert string date into Date type.
	if (typeof stringDate === 'string') {
		return new Date(stringDate).toUTCString()
	} else {
		throw new Error("The argument provided is not a string. Please check your arguments type.")
	}
}

tableDates.forEach(date => {
	date.textContent = formatIntoDateType(date.textContent)
})

const dataTable = new simpleDatatables.DataTable("#workshops-and-clinics-table", {
	searchable: true,
	fixedHeight: true,
})