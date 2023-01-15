//url de la publicación web
 var rutaWeb = "https://script.google.com/a/macros/cdtdegas.com/s/AKfycbxNUhu6P-TA5OsUetg1ydEtvychNiycV8E9czZkWhnq/dev";

function doGet(e){
  let params= e.parameter; 
  let pantalla=params.p; 
  if (pantalla==undefined){
     var page ="Index";}
  else {
    var page=pantalla;
  }
  return HtmlService.createTemplateFromFile(page).evaluate();
}

function include(fileName){
 return HtmlService.createHtmlOutputFromFile(fileName).getContent();
}


function getData(){
  const SS=SpreadsheetApp.getActiveSpreadsheet();
  const sheetEmisiones=SS.getSheetByName("Registros");
  const dataEmisiones=sheetEmisiones.getDataRange().getDisplayValues();
  dataEmisiones.shift();
  console.log(dataEmisiones);
  return dataEmisiones;
}