
const workshopAndClinicsTable = 'https://docs.google.com/spreadsheets/d/1eYftI0kPrT88aHFlW0n3LNDXlxAlirRsYs2RmbHCea0/edit?usp=sharing'
const workshopAndClinicsTableElement = document.querySelector('#workshops-and-clinics-table')

workshopAndClinicsTableElement.sheetrock({
	url: workshopAndClinicsTable,
	query: "select *"
})
// const dataTable = new simpleDatatables.DataTable("", {
// 	searchable: true,
// 	fixedHeight: true,
// })