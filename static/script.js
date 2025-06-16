const welcomeText = "Welcome to Offline Transcriber";
const fileInput = document.getElementById('fileInput');
const convertBtn = document.getElementById('convertBtn');
const statusText = document.getElementById('statusText');
const transcriptText = document.getElementById('transcriptText');
const copyBtn = document.getElementById('copyBtn');

let selectedFile = null;

// Typing animation
let i = 0;
function typeWriter() {
  if (i < welcomeText.length) {
    document.getElementById("welcomeText").innerHTML += welcomeText.charAt(i);
    i++;
    setTimeout(typeWriter, 60);
  }
}
typeWriter();

fileInput.addEventListener('change', () => {
  if (fileInput.files.length > 0) {
    selectedFile = fileInput.files[0];
    convertBtn.disabled = false;
    statusText.textContent = "Ready to convert: " + selectedFile.name;
  }
});

convertBtn.addEventListener('click', () => {
  if (!selectedFile) return;

  const formData = new FormData();
  formData.append("audio", selectedFile);

  convertBtn.disabled = true;
  statusText.textContent = " Converting...";
  transcriptText.textContent = "";
  copyBtn.style.display = "none";

  fetch("/upload", {
    method: "POST",
    body: formData
  })
  .then(res => res.json())
  .then(data => {
    if (data.error) {
      statusText.textContent =   data.error;
    } else {
      statusText.textContent = " Transcription successful!";
      transcriptText.textContent = data.text;
      copyBtn.style.display = "inline-block";
    }
    convertBtn.disabled = false;
  })
  .catch(err => {
    statusText.textContent = " Conversion failed";
    convertBtn.disabled = false;
  });
});

copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(transcriptText.textContent)
    .then(() => {
      copyBtn.textContent = "Copied!";
      setTimeout(() => {
        copyBtn.textContent = "Copy Transcript";
      }, 2000);
    });
});
