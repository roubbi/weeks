

$(".generator").on("click", function(){
  
  alert($(this).closest(".processor").attr("id")) //The processor ID
  alert($(this).closest(".processor").siblings(".computer").attr("data-id"))
  alert($(this).closest(".processor").siblings(".computer").find(".BUS").text())
  
})
