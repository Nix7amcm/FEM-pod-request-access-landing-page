const emailForm = document.getElementById( "emailForm" );
const emailInput = document.getElementById( "email" );
const emptyErrorMessage = document.getElementById( "error-message-empty" );
const invalidErrorMessage = document.getElementById( "error-message-invalid" );
const successMessage = document.getElementById( "success-message" );

emailForm.addEventListener( "submit", function ( event ) {
  //>>> Prevent default form behaviour (submission and page reload) to execute custom logic (custom validation and update UI):
  event.preventDefault();

  //>>> Create variable for value entered:
  const email = emailInput.value;

  //>>> Handle cases for different values submitted and display relevant message:
  //----- If email is empty or contains only whitespace:
  if ( email.trim() === "" ) {
    emptyErrorMessage.style.display = "block"; //----- Display empty error msg
    invalidErrorMessage.style.display = "none"; //----- Hide invalid error msg
    successMessage.style.display = "none"; //----- Hide success msg

    //----- If email is not empty but format is invalid:
  } else if ( !isValidEmail( email ) ) {
    emptyErrorMessage.style.display = "none"; //----- Hide empty error msg
    invalidErrorMessage.style.display = "block"; //----- Display invalid error msg
    successMessage.style.display = "none"; //----- Hide success msg

    //----- (Otherwise) When email is not empty and format is valid:
  } else {
    emptyErrorMessage.style.display = "none"; //----- Hide empty error msg
    invalidErrorMessage.style.display = "none"; //----- Hide invalid error msg
    successMessage.style.display = "block"; //----- Display success msg
  }
} );

//>>> Function to check if email is valid:
function isValidEmail ( email ) {
  //----- Regex to validate email format:
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test( email );
}