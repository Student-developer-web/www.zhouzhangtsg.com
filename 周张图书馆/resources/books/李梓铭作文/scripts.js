function changefontfamily(fontfamily)
{
    var writing=document.getElementById("text");
    writing.style.fontFamily=fontfamily;
}

function changefontsize(fontsize)
{
    var writing=document.getElementById("text");
    var image1=document.getElementById("img1");
    var image2=document.getElementById("img2");
    fontsize=Number(fontsize);
    if(fontsize<10 || fontsize>50)
    {
        a=document.getElementsByName("fontsize");
        fontsize=25;
    }
    writing.style.fontSize=fontsize+'px';
    image1.style.width=fontsize/2+'%';
    image1.style.height=fontsize/2+'%';
    image2.style.width=fontsize/2+'%';
    image2.style.height=fontsize/2+'%';

}

function changebackgroundcolor(backgroundcolor)
{
    var writing=document.getElementById("bg");
    writing.style.backgroundColor=backgroundcolor;
}
