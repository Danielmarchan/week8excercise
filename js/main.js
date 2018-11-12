var div0 = document.createElement("div");
div0.className = "dimensions bground";

document.body.appendChild(div0);

div0.style.backgroundColor = "red";

var div1 = document.createElement("div");
div1.id = "unique";

var h1_0 = document.createElement("h1");
var uselessTextNode = document.createTextNode("Hello, World");
h1_0.appendChild(uselessTextNode);

div1.appendChild(h1_0);

document.body.appendChild(div1);

var image = document.createElement("img");
var btn = document.createElement("button");

btn.type = "button";
btn.className = "btn btn-info";
btn.textContent = "See other cars";
btn.onclick = function() {
    carToggle();
}

image.src = "https://c4d709dd302a2586107d-f8305d22c3db1fdd6f8607b49e47a10c.ssl.cf1.rackcdn.com/thumbnails/stock-images/2efc77eb9c6be4839e7c624f9d0e3d6f.png";
image.alt = "mazda";

document.body.appendChild(image);
document.body.appendChild(btn);

var imgArr = [
    {
        src: "https://c4d709dd302a2586107d-f8305d22c3db1fdd6f8607b49e47a10c.ssl.cf1.rackcdn.com/thumbnails/stock-images/2efc77eb9c6be4839e7c624f9d0e3d6f.png",
        alt: "mazda"
    },
    {
        src: "https://di-uploads-pod7.dealerinspire.com/toyotaofnorthmiami/uploads/2016/08/2018_Camry.png",
        alt: "toyota"
    },
    {
        src: "https://st.motortrend.com/uploads/sites/10/2016/05/2016-nissan-sentra-s-cvt-sedan-angular-front.png",
        alt: "nissan"
    },
    {
        src: "https://st.motortrend.com/uploads/sites/10/2015/11/2012-hyundai-accent-gls-4-door-6-speed-automatic-sedan-angular-front.png",
        alt: "hyundai"
    }
];

var index = 1;

function carToggle() {
    image.src = imgArr[index].src;
    image.alt = imgArr[index].alt;

    index++;

    if (index > 3) {
        index = 0;
    }
    console.log(index);
}
