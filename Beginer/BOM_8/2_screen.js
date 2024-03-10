// window.screen অবজেক্টে ব্যবহারকারীর স্ক্রীন সম্পর্কে তথ্য থাকে।

// The window.screen object can be written without the window prefix.

// Properties:

// screen.width
// screen.height
// screen.availWidth
// screen.availHeight
// screen.colorDepth
// screen.pixelDepth

// document.getElementById("demo").innerHTML = "Screen Width" + screen.width;
// document.getElementById("demo").innerHTML = "Screen Height" + screen.height;

document.getElementById("demo").innerHTML = "Avail Width" + screen.pixelDepth;
// document.getElementById("demo").innerHTML = "Avail Height" + screen.height;

document.getElementById("colorDepth").innerHTML = "Color Depth" + screen.width;
document.getElementById("pixelDepth").innerHTML = "Pixel Depth" + screen.height;
