
console.log("###########################################################################");
console.log("# source code copied from https://github.com/mrdragon49/instafollowerdemo #");
console.log("# this is a project for beginer web developer to understant how javascript#");
console.log("# word actualy please do use for any illegal purpose we are not           #");
console.log("# responsible for any legal actions. I just show in this site how to      #");
console.log("# create dynamic QR code via API and how we handle it without server site #")
console.log("###########################################################################");
// aumatic QR Code generator API 
let apiImg = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";


// use yor upi id 
let upiIds = "UPI ID here"+"%26";

//geting DOM elements from HTML file 

const loaderSection = document.getElementById("loaderSection");
const qrDssect = document.getElementById("qrDssect");
const qrdsQR = document.getElementById("qrdsQR");
const userids_bx = document.getElementById("userids_bx");

const qrImgId = document.getElementById("qrImgId");
const buyBtns = document.querySelectorAll('.buy-btn');
const userIdsection = document.getElementById("userIdsection");
let userIdinp = document.getElementById("userIdinp");

// functon for creating QR Code with amount
function gnQrcodewithAmm(ffin) {
  let sdlfakdj = apiImg + upiIds + "am=" + ffin;
  qrImgId.src = sdlfakdj;
  qrDssect.style.display = 'flex';
  qrdsQR.style.display = 'none';
  qrImgId.addEventListener("load", () => {
    qrdsQR.style.display = 'flex';
    loaderSection.style.display = 'none';
    const qrIneter = setInterval(() => {
      alert("We will Contact you soon !");
      qrDssect.style.display = 'none';
      clearInterval(qrIneter);
    }, 35000);
    qrIneter();
  })
}

// to check is user name entered or not 

function showQrba(ffin) {
  userIdinp = document.getElementById("userIdinp");
  if (userIdinp == "") {
    alert("Please Enter a ista ID");
    userIdinp.focus();
  } else {
    userIdsection.style.display = 'none';
    loaderSection.style.display = "flex";
    gnQrcodewithAmm(ffin);
  }
  userids_bx.innerHTML = "";
}

// function for select button click events 

document.addEventListener('DOMContentLoaded', function () {
  buyBtns.forEach(b => b.addEventListener('click', e => {
    const svc = e.currentTarget.dataset.svc;
    let df = svc.split(" ");
    let ammin = df[df.length - 1];
    let ffin = ammin.slice(1);
    userIdsection.style.display = 'flex';
    let chbtN = `
    <img style="height:100px;width:100px;align-self: center" src="img/logo.png">
    <p style="color: gray;">Enter your Instagram username</p>
        <input type="text" id="userIdinp" placeholder="Paste your Istagram usernam">
      <p style="color:gray;">you selected ${df}</p>
      <button class="btn buy-btn" onclick='showQrba("${ffin}")'>By Followers</button>
      <button class="btn buy-btn" onclick='CloseUseridWindo()'>Back</button>
    `;
    userids_bx.innerHTML += chbtN;
    document.getElementById("userIdinp").focus();

  }));
});

// function for buy button on click 
function BuyFucnd() {
  const annaddf = prompt("Enter amount you want to add");
  let toNum = Number(annaddf);

  console.log(toNum);
  if (isNaN(toNum)) {
    alert("Please Enter amount in numbers");
    BuyFucnd();
    return;
  } else {
    if (toNum < 99) {
      alert("Please Enter ammount more than 100");
      BuyFucnd();
      return;
    } else {
      gnQrcodewithAmm(annaddf);
    }
  }
}; 

// to close the window of insta user id ipnut 
function CloseUseridWindo() {
  userIdsection.style.display = "none";
  userids_bx.innerHTML = "";
};


