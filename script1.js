document.querySelector("#exit").innerHTML = "<button class='btn btn-primary' id='showconfirm'>EXIT</button>";
$('#showconfirm').click(function(){
//return confirm("Are you sure you want to exit?" )
if (window.confirm( "Are you sure you want to exit")) { window.close ();
}
});