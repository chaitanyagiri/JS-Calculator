$(document).ready(function() {
  var check = 1,
    inp,
    checks = 1;
  function getOp(str) {
    for (var i = 1; i < str.length; i++) {
      if (str[i] == "+") {
        return "+";
      } else if (str[i] == "-") {
        return "-";
      } else if (str[i] == "/") {
        return "/";
      } else if (str[i] == "*") {
        return "*";
      }
    }
  } 
  $("button").click(function() {
    inp = $(this).attr("value");
    if (checks >= 25) {
      $(".sec").html("");
      checks = 1;
    }
    if (check == 12) {
      $(".prim").html("");
      $(".prim").html("0");
      $(".sec").html("Digit Limit Exceed");
      check = 1;
    } else {
      switch (inp) {
        case ".":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "0":
          if (check == 1) {
            $(".prim").html(inp);
            $(".sec").html(inp);
          } else {
            $(".prim").append(inp);
            $(".sec").append(inp);
          }
          break;
        case "=":
          check = 1;
          var a = $(".prim").text().split(getOp($(".prim").text())),
            res;
          switch (getOp($(".prim").text())) {
            case "+":
              res = parseFloat(a[0]) + parseFloat(a[1]);
              break;
            case "-":
              res = parseFloat(a[0]) - parseFloat(a[1]);
              break;
            case "*":
              res = parseFloat(a[0]) * parseFloat(a[1]);
              break;
            case "/":
              res = parseFloat(a[0]) / parseFloat(a[1]);
              break;
          }
          $(".prim").html(res);
          $(".sec").append(inp + res);
          break;
        case "+":
        case "-":
        case "*":
        case "/":
          check = 1;
          var a = $(".prim").text().split(getOp($(".prim").text())),
            res;
          switch (getOp($(".prim").text())) {
            case "+":
              res = parseFloat(a[0]) + parseFloat(a[1]);
              break;
            case "-":
              res = parseFloat(a[0]) - parseFloat(a[1]);
              break;
            case "*":
              res = parseFloat(a[0]) * parseFloat(a[1]);
              break;
            case "/":
              res = parseFloat(a[0]) / parseFloat(a[1]);
              break;
          }
          $(".prim").html(res);
          $(".prim").append(inp);
          $(".sec").append(inp);
          break;
        case "ac":
          check = 0;
          checks = 0;
          $(".prim").html("0");
          $(".sec").html("0");
          break;
        case "ce":
          var st = $(".prim").text();
          check -= 2;
          checks--;
          if (st.length > 1) {
            $(".prim").html(st.substring(0, st.length - 1));
            $(".sec").html(st.substring(0, st.length - 1));
          } else {
            $(".prim").html("0");
            $(".sec").html("0");
          }
          break;
      }
      check++;
      checks = $(".sec").text().length;
    }
  });
});
if (check12) {
  $(".prim").append($(this).attr("value"));
  $(".sec").append($(this).attr("value"));
  check++;
} else $(".prim").html("Digit Limit Exceed");
