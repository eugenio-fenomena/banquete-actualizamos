/**
 * Google Apps Script (proyecto INDEPENDIENTE, no vinculado a la Sheet)
 * para recibir las suscripciones del formulario de la landing
 * "Actualizamos las legumbres" y guardarlas en Google Sheets.
 *
 * INSTALACIÓN:
 * 1) Ve a https://script.google.com/create para crear un proyecto
 *    de Apps Script NUEVO e INDEPENDIENTE (no lo crees desde
 *    Extensiones > Apps Script dentro de la Sheet, porque eso lo
 *    deja atado a esa planilla específica).
 * 2) Borra el contenido de Code.gs y pega este archivo completo.
 * 3) Reemplaza el valor de SPREADSHEET_ID (más abajo) por el ID de
 *    tu Google Sheet. El ID es la parte de la URL entre /d/ y /edit:
 *    https://docs.google.com/spreadsheets/d/ESTE_ES_EL_ID/edit
 * 4) Guarda (ícono de disquete).
 * 5) Haz clic en "Implementar" > "Nueva implementación".
 *    - Tipo: "Aplicación web"
 *    - Ejecutar como: "Yo" (tu cuenta)
 *    - Quién tiene acceso: "Cualquier usuario"
 * 6) La primera vez te pedirá autorizar permisos, ya que el script
 *    necesita acceso a esa Sheet por ID (no lo tiene automático al
 *    no estar vinculado).
 * 7) Copia la URL que te entrega ("URL de la aplicación web",
 *    termina en /exec) y pégala en el HTML, en la constante
 *    SCRIPT_URL.
 *
 * IMPORTANTE: cada vez que edites este código, tienes que crear una
 * NUEVA implementación (o "Gestionar implementaciones" > editar > Nueva
 * versión) para que los cambios se apliquen a la URL pública.
 */

var SPREADSHEET_ID = 'PEGA_AQUI_EL_ID_DE_TU_SHEET';
var SHEET_NAME = 'Suscripciones';

function doPost(e) {
  var spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  var sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      'Fecha',
      'Nombre',
      'Email',
      'Actualización favorita',
      'Consentimiento (opt-in)'
    ]);
  }

  var data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    new Date(),
    data.nombre || '',
    data.email || '',
    data.favorita || '',
    data.consentimiento ? 'Sí' : 'No'
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ result: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}
