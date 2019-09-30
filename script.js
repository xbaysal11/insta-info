var btn = document.getElementById("submit");

btn.addEventListener("click", func);
function func() {
let username = document.getElementById("username").value;
  console.log(username.value);

  if (username !== "") {
    const Http = new XMLHttpRequest();
    const url = "https://www.instagram.com/" + username + "/?__a=1";
    Http.open("GET", url);
    Http.send();

    Http.onreadystatechange = e => {
      var res = Http.responseText;
      var prettyJSON = JSON.parse(res);
      var json = JSON.stringify(prettyJSON, null, 2);

      console.log(
        "Followers: " + prettyJSON.graphql.user.edge_followed_by.count
      );
      console.log(json);
      var info = document.getElementById("json");
      info.innerHTML = json;
    };
  }
}
