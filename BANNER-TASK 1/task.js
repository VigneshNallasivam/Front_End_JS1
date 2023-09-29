function display() {
    alert("ABC School Welcomes U..!!");
    console.log("Button Worked Properly..!!");
}

function anotherPage() {
    window.location.href = "https://www.github.com";
}

function multiplePage() {
    var links = ["https://www.wikipedia.com", "https://www.google.com", "https://www.openai.com", "https://www.instagram.com"];

    for (var i = 0; i < links.length; i++) {
      window.open(links[i]);
    }
}