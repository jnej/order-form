$(document).ready(function() {
  $("#orderForm").submit(function(event) {
    var firstName = $("#firstName").val();
    var surName = $("#surName").val();
    var houseNo = $("#houseNo").val();
    var street = $("#street").val();
    var town = $("#town").val();
    var county = $("#county").val();
    var postCode = $("#postCode").val();

    $(".firstName").text(firstName);
    $(".surName").text(surName);
    $(".houseNo").text(houseNo);
    $(".street").text(street);
    $(".town").text(town);
    $(".county").text(county);
    $(".postCode").text(postCode);


    $(".receipt").show();

  $(".btn1").click(function() {
    $(".confirm").show();
  })

  $(".btn2").click(function() {
    alert("Thank you for your purchase!");
  })

    event.preventDefault();
  })
})
