const images = document.querySelectorAll("img");
const SIZES = {
    showcase : "100vw",
    reason   : "(max-width : 799px) 100vw, 372px",
    feature  : "(max-width : 799px) 100vw, 558px",
    story    : "(max-width : 799px) 100vw, 670px",
}

const makeImageSrcSet=(imgSrc)=>{
let markup = [];
let width = 400;
for(let i=0;i<5;i++){
    markup[i] = imgSrc + '-' + width + '.jpg ' + width + 'w';
    width+=400;
}
return markup.join();
}

for(let i=0;i<images.length;i++){
    let imgSrc = images[i].getAttribute("src");
    imgSrc = imgSrc.slice(0,-8);
    let srcSet = makeImageSrcSet(imgSrc);
    images[i].setAttribute("srcset", srcSet);

    let type = images[i].getAttribute("data-type");
    let sizes = SIZES[type];
    images[i].setAttribute("sizes",sizes);
    console.log(sizes);
}