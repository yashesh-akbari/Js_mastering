 document
        .getElementById("form_submited")
        .addEventListener("submit", (event) => {
          event.preventDefault();
          let grade = document.getElementById("input_text").value;
          function result(marks) {
            document.getElementById("demo").innerHTML =
              `good job you got Grade of ` + marks;
          }
          if (grade >= 90 && grade <= 100) {
            result("A");
          } else if (grade >= 80 && grade < 90) {
            result("B");
          } else if (grade >= 70 && grade < 80) {
            result("C");
          } else if (grade >= 60 && grade < 70) {
            result("D");
          } else if (grade >= 50 && grade < 60) {
            result("E");
          } else if (grade >= 0 && grade < 50) {
            result("F");
          } else {
            document.getElementById("demo").innerHTML =
              "please enter marks in numbers between 0 to 100 nothing else";
          }
        });