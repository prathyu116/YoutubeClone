MainVideo = JSON.parse(localStorage.getItem("mainVideo"));
recommened = JSON.parse(localStorage.getItem("relatedVedio"));
clicked = (localStorage.getItem("clicked"));
console.log(recommened)
var play_vidio=document.getElementsByClassName("vedio-container")[0]

  let iframe = document.createElement("iframe");
  iframe.src = `https://www.youtube.com/embed/${MainVideo.id}`;
 console.log(clicked,"hhhhhhhhhhhhhhhhh")
    if(clicked=="true"){
      iframe.src = `https://www.youtube.com/embed/${MainVideo.id.videoId}`;
      localStorage.setItem("clicked", false);

    }else{
      iframe.src = `https://www.youtube.com/embed/${MainVideo.id}`;
    }

    iframe.width = "560px";
    iframe.height = "515px";
    iframe.allowfullscreen = "true";
    iframe.style.border = "none";
    iframe.setAttribute("allowfullscreen", true);

    play_vidio.append(iframe)
    var tag=document.getElementsByClassName("tag")[0]
    var h3=document.createElement("h2")
    h3.textContent=MainVideo.snippet.title
    var hr=document.createElement("hr")
    tag.append(h3,hr)


var vedio_info=document.getElementsByClassName("vedio-info")[0]
var right_side_bar=document.getElementsByClassName("right-side-bar")[0]
    recommened.map((ite)=>{

        var pic = ite.snippet.thumbnails.medium.url;
        var title = ite.snippet.title;
        var des = ite.snippet.channelTitle;
        var img = document.createElement("img");
        img.src=pic

        
        var div=document.createElement("div")
        div.setAttribute("class","vedio-info")
        var divM=document.createElement("div")
        divM.setAttribute("class","side-vedio-list")

        var p=document.createElement("p")
        p.textContent=des
        // p.style.fontSize="10px"
        var p2=document.createElement("p")
        p2.textContent=title
        p2.style.color="gray"
        // p2.style.fontSize="4px"
        div.append(p2,p)
        divM.append(img,div)

        right_side_bar.append(divM)

    })