var btn = document.getElementById("submit");
btn.addEventListener("click", request);

function request() {
  let username = document.getElementById("username").value;

  if (username !== "") {

    const Http = new XMLHttpRequest();
    const url = "https://www.instagram.com/" + username + "/?__a=1";
    Http.open("GET", url);
    Http.send();

    Http.onreadystatechange = e => {
      var res = Http.responseText;
      var prettyJSON = JSON.parse(res);
      var json = JSON.stringify(prettyJSON, null, 2);
      var info = document.getElementById("json");
      info.innerHTML = json;
    };
  }
}
