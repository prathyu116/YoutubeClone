// let API_KEY = "AIzaSyC4i0k81h9pQW_5lWVY11WoHR3reEzJLgE";
let API_KEY = "AIzaSyAuGOFHhqxN6Er-6PviJHJCFuCRHbIB3hU";
var searchResultDiv = document.getElementById("search_results_container");
localStorage.setItem("clicked", false);


window.addEventListener("load", async function () {
  try {
    let res = await fetch(
      `https://www.googleapis.com/youtube/v3/videos/?part=snippet&chart=mostPopular&regionCode=IN&maxResults=32&key=${API_KEY}`
    );
    let data = await res.json();
    let array_of_videos = data.items;
    appendVideos(array_of_videos);
  } catch (err) {
    console.log("Errr", err);
  }
});
const searchVideos = async () => {
  localStorage.setItem("clicked", true);

  try {
    let inp = document.getElementById("search_results").value;
    let res = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${API_KEY}&q=${inp}&type=video&maxResults=25`
    );
    let data = await res.json();
    let array_of_videos = data.items;
    appendVideos(array_of_videos);
  } catch (err) {
    console.log("err,", err);
  }
};

const appendVideos = (data) => {
  console.log("Dataaa", data);
  searchResultDiv.innerHTML = "";
  data.forEach((vedio) => {
    const {
      id: { videoId },
    } = vedio;
    // const { snippet: { thumbnails:{medium} } } = vedio
    var pic = vedio.snippet.thumbnails.medium.url;
    var title = vedio.snippet.title;
    var des = vedio.snippet.channelTitle;
    let div = document.createElement("div");
  

    var img = document.createElement("img");
    img.addEventListener("click", function () {
 
      localStorage.setItem("mainVideo", JSON.stringify(vedio));
      localStorage.setItem("relatedVedio", JSON.stringify(data));
      window.location.href="result.html"
    });
    img.src = pic;

    var p = document.createElement("p");
    p.textContent = title;
    p.style.color = "white";

    var p2 = document.createElement("p");
    p2.textContent = des;
    p2.style.color = "gray";
    p2.style.fontSize = "12px";
    var br = document.createElement("br");
    div.append(img, p, p2);
    searchResultDiv.append(div);
  });
};
