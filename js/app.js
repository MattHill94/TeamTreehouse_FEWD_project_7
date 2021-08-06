const alertBanner = document.getElementById("alert");
const notifications = document.getElementById("notifications");
const popup = document.getElementById('popup');
const dot = document.getElementById("dot");
const user= document.getElementById("userField");
const message = document.getElementById("messageField");
let trafficNav = document.querySelector(".traffic-nav");
const send = document.getElementById("send");

alertBanner.innerHTML =
`<div class="alert-banner">
    <p><strong>Alert:</strong> You have unread messages</p>
    <p class="alert-banner-close"> X </p>
    </div>
`

alertBanner.addEventListener('click', e =>{
    const element = e.target;
    if(element.classList.contains("alert-banner-close")){
        alertBanner.style.display ="none"
    }
});


send.addEventListener('click', () => {
  if (user.value === "" && message.value === "") {
    alert("Please fill out user and message fields before sending");
  } else if (user.value === "") {
    alert("Please fill out user field before sending");
  } else if (message.value === "") {
    alert("Please fill out message field before sending");
  } else {
    alert(`Message successfully sent to: ${user.value}`);
    document.getElementById("submissionRld").reset();
    // Line 231: for this project, not really correct, but for the effect of clearing the form after proper submission, it serves its specific purpose.
  }
});

//create messages, but do not show
let messageShown;

function createMessages(){
    if(popup.childNodes.length===0 && dot.style.display !== "none"){
        for(let i=0; i<2; i++){
            let message = document.createElement('div');
        message.className = "popup-message";
        message.innerHTML =
        `
        <p>You have a message from Dawn</p>
        <p class="message-close">X</p>   
        `;
        popup.appendChild(message);
        }
    }
    popup.style.display = "none";
}




function createPopup (){
if (popup.childNodes.length === 0 && dot.style.display !== 'none') {
    for ( let i = 0; i < 2; i++) {
            alertWindow = document.createElement('div');
            alertWindow.id = 'popupMessage';
            alertWindow.innerHTML = `
            <p>You have a friend request!</p>
            <p class='message-close'>X</p> 
            `;
            popup.appendChild(alertWindow);
            }
        }
        popup.style.display = 'none';
    }
createPopup();

notifications.addEventListener('click', (e) =>{
    dot.style.display = 'none';
    let element = e.target;
    if (element.className !== 'message-close'){
        if(!messageShown){
            popup.style.display = "block";
            messageShown=true;
        }
        else{
            popup.style.display = "none";
            popup.style.width = '1vw';
            messageShown= false;
        }
    }
});

popup.addEventListener('click', (e) =>{
    let element = e.target;
    if ( element.classList.contains('message-close')){
        const parentNode = element.parentNode;
        parentNode.parentNode.classList.add('hiddenPopup');
        parentNode.parentNode.removeChild(parentNode);
        }
});



trafficNav.addEventListener('click', e =>{
    const element = e.target;
    const datatype = element.textContent;
    if(element.className ===  "traffic-nav-link" || element.className ===  "traffic-nav-link active"){
        //set active button inactive
        let lis = document.querySelectorAll(".traffic-nav-link");
        for(let i=0; i<lis.length; i++){
            let activeButton = lis[i];
            if(activeButton.className==="traffic-nav-link active"){
                activeButton.className="traffic-nav-link"
            }
        }
        //set clicked button to active if not already active
        if(element.className==="traffic-nav-link"){
         element.className = "traffic-nav-link active";
        }

        //change graph
            updateTrafficData(datatype);
            updateChart(trafficChart, trafficData);
        }
    }
);

//saving settings to localStorage
const emailCheckbox = document.getElementById("emailSettings");
const publicCheckbox = document.getElementById("publicSettings");
const timeZone = document.getElementById("timezone");
const saveButton = document.getElementById("save");
const cancelButton = document.getElementById("cancel");

//set default settings
if(localStorage.length !== 0){
    localStorage.getItem('emailNotificationsOn') === "false"?
        emailCheckbox.checked = false:
        emailCheckbox.checked = true;

    localStorage.getItem('profilePublic') === "false"?
        publicCheckbox.checked = false:
        publicCheckbox.checked = true;

   timeZone.value = localStorage.timeZone
}


saveButton.addEventListener('click', () => {
    localStorage.setItem('emailNotificationsOn', emailCheckbox.checked);
    localStorage.setItem('profilePublic', publicCheckbox.checked);
    localStorage.setItem('timeZone', timeZone.value );
});

cancelButton.addEventListener('click', ()=>{
    emailCheckbox.checked=false;
    publicCheckbox.checked=false;
    timeZone.value = 'default';
    localStorage.clear();
    location.reload();

});
