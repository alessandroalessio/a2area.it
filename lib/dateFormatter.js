export default function dateFormatted( dateFull ){

    let itMonth = ['', 'Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre']

    let date = new Date(dateFull);
    return date.getDate()+' '+itMonth[ date.getMonth() ]+' '+date.getFullYear()
}