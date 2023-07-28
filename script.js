const qtext=document.getElementById('q-text');
const size=document.getElementById('size');
const generateBtn=document.getElementById('generateBtn');
const downloadBtn=document.getElementById('downloadBtn');
const col=document.getElementById('cpick');

const qContainer=document.querySelector('.q-body');

let sizes=size.value;
generateBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    isEmpty();
});

size.addEventListener('change',(e)=>{
    sizes=e.target.value;
    isEmpty();
});

downloadBtn.addEventListener('click',()=>{
    let img=document.querySelector('.q-body img');
    if (img!==null) {
        let imgAttri=img.getAttribute('src');
        downloadBtn.setAttribute("href",imgAttri);
    } else {
        downloadBtn.setAttribute("href",`${document.querySelector('.q-body img').toDataURL()}`);
    }
});

function isEmpty(){
    qtext.value.length > 0? generateQRCode(): alert("Enter the text or URL to generate your QR Code");
}

let cols=col.value;
col.addEventListener('change',(e)=>{
    cols=e.target.value;
    generateQRCode();
});
function generateQRCode(){
    qContainer.innerHTML="";
    new QRCode(qContainer,{
        text:qtext.value,
        height:sizes,
        width:sizes,
        colorLight:"#fff",
        colorDark:cols
    });
}
