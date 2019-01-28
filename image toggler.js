// ==UserScript==
// @name         image toggler
// @version      0.1
// @description  ` to show/hide, hide by default
// @author       You
// @match        https://*/*
// @match        http://*/*
// @grant        none
// ==/UserScript==
var allowimages = true;
//document.addEventListener('DOMContentLoaded', function () {
window.addEventListener('keydown', imgCheck, true);

setInterval(function()
{
    if (allowimages === false)
    {
        Array.from(document.querySelectorAll("img")).map(function(x){x.style.visibility = "hidden";});
    }
}, 500);

/*
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function() {
        setInterval(function() {
            if (allowimages === false)
            {
                Array.from(document.querySelectorAll("img")).map(function(x){x.style.visibility = "hidden";});
            }
        }, 500);
    }, 2000);
});
*/

function toggleImages()
{
    if (allowimages === true)
    {
        allowimages = false;
        Array.from(document.querySelectorAll("img")).map(function(x){x.style.visibility = "hidden";});
        Array.from(document.querySelectorAll("a")).map(function(x){toggleBackgroundLink(x);});
        Array.from(document.querySelectorAll("div")).map(function(x){toggleBackgroundLink(x);});
        Array.from(document.querySelectorAll("span")).map(function(x){toggleBackgroundLink(x);});
        console.log("images off");
    }
    else
    {
        allowimages = true;
        Array.from(document.querySelectorAll("img")).map(function(x){x.style.visibility = "";});
        Array.from(document.querySelectorAll("a")).map(function(x){toggleBackgroundLink(x);});
        Array.from(document.querySelectorAll("div")).map(function(x){toggleBackgroundLink(x);});
        Array.from(document.querySelectorAll("span")).map(function(x){toggleBackgroundLink(x);});
        console.log("images on");
    }
    return;
}
function toggleBackgroundLink(alink)
{
    if ([undefined, null, NaN, ""].indexOf(alink.style["background-image"]) === -1)
    {
        if (allowimages === true)
        {
            alink.style.visibility = "";
        }
        else
        {
            alink.style.visibility = "hidden";
        }
    }
    return;
}


function imgCheck(e)
{
	//console.log(e.keyCode);
	var escapetypes = ["text","textarea","search"];
	//if (e.shiftKey && escapetypes.indexOf(document.activeElement.type) === -1)
    if (escapetypes.indexOf(document.activeElement.type) === -1)
    {
        if (e.keyCode === 192) //`
        {
            toggleImages();
        }
    }
	return;
}
