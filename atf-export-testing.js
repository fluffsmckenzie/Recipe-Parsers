/** Beginning of first tests **/
// console.log($('*[id^="flavors-"] tr td:first').text())
/* var elements =  $('*[id^="flavors-"] tr td');
 for(var i = 0; i < elements.length; i++){
     var text = elements[i].toString;
     console.log(i + " : " + text);
 }*/
/** End of first tests **/

//Create a textarea of the data at the bottom, fill it with the content, select it, copy it, then erase the textarea
function copyToClipboard(element) {
  element = $('<textarea>').appendTo('body').val(element).select();
  document.execCommand('copy');
  element.remove();
}

//Beginning of the table
var output = "% | Vendor | Flavor\n---|---|----\n";

//For new line purposes 
var i = 1;

//Loop through all of the flavors on the page and add them to the output
$('*[id^="flavors-"] tr td').each(function(){
    //Remove all leading and trailing spaces (mainly for empty sets of data)
    var info = $(this).text().trim();
    var separator = " | ";
    //Make sure you get a new line after every flavor
    if(i % 3 === 0){ separator = "\n"}
    //Dirty fix to clear out empty data and footer data
    if(info == "" || info.startsWith("Total") || info.startsWith("This")){
    } else {
        output += info + separator;
        i++;
        //Just testing purposes of the console
        console.log(info);        
    }
});
//More console output testing
console.log(output);
//The moneymaker
copyToClipboard(output);

