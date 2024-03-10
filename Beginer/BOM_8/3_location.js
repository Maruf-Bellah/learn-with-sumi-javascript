// window.location অবজেক্টটি বর্তমান পৃষ্ঠার ঠিকানা (URL) পেতে এবং ব্রাউজারকে একটি নতুন পৃষ্ঠায় পুনঃনির্দেশিত করতে ব্যবহার করা যেতে পারে।

// The window.location object can be written without the window prefix.
// Some examples:===========
// window.location.href returns the href (URL) of the current page
// window.location.hostname returns the domain name of the web host
// window.location.pathname returns the path and filename of the current page
// window.location.protocol returns the web protocol used (http: or https:)
// window.location.assign() loads a new document

const href = document.getElementById("href");
href.innerHTML = "Window href" + location.href;

const hostname = document.getElementById("hostname");
hostname.innerHTML = "Host Name" + location.hostname;

const pathname = document.getElementById("pathname");
pathname.innerHTML = "Path Name" + location.pathname;

const protocol = document.getElementById("protocol");
protocol.innerHTML = "Protocol Name" + " " + location.protocol;

const port = document.getElementById("port");
port.innerHTML = "Port Name" + location.port;

function newDoc() {
  window.location.assign("https://www.google.com/");
}
