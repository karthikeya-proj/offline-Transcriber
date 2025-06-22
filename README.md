# 🗣️ Offline Audio Transcriber using Whisper + Flask

An offline web-based audio transcription tool that allows users to upload audio files and receive instant transcriptions without relying on internet or cloud APIs. This project utilizes OpenAI’s **Whisper** model via **Faster-Whisper**, integrated with a lightweight **Flask** backend and a responsive, dark-themed frontend built using HTML, CSS, and JavaScript.

---

## 📌 Project Overview

This application enables users to transcribe audio files such as `.mp3`, `.wav`, `.m4a`, and `.flac` into text locally on their machine. The transcription is powered by the **Whisper base model**, running completely offline on the CPU using the `faster-whisper` library. A user-friendly frontend allows easy audio upload, progress display, and a copy button for transcripts.

---

## 🧰 Technologies & Tools Used

| Category        | Tools / Technologies                 |
|-----------------|---------------------------------------|
| **Languages**   | Python, HTML, CSS, JavaScript         |
| **Framework**   | Flask (for backend API and routing)   |
| **Model**       | Whisper (via Faster-Whisper)          |
| **Frontend**    | HTML5, CSS3, Vanilla JavaScript       |
| **Transcription** | Faster-Whisper (optimized Whisper) |
| **Audio Support** | FFmpeg (system utility)             |
| **Testing/Run** | Browser (http://localhost:5000)       |
| **Optional**    | Virtual Environment (`venv`)          |

---


---

## ⚙️ How to Set Up the Project

### Step 1:  Clone or Download the Repository

```bash
git clone https://github.com/karthikeya-proj/offline-Transcriber.git
cd offline-transcriber
``` 
## Step 2: Create and Activate Virtual Environment (Recommended)
```bash
python -m venv venv
venv\Scripts\activate        # Windows
# OR
source venv/bin/activate     # macOS/Linux
```
## Step 3:  Install Required Python Packages
```bash
pip install flask
pip install werkzeug
pip install faster-whisper
```
## Step 4: Run the Application
```bash
python app.py
```
## Supported Audio Formats
* mp3

* wav

* m4a

* flac

##  Features
✅ Fully offline transcription using Whisper base model

✅ Fast CPU inference with int8 precision

✅ Drag & drop or file upload interface

✅ Dark-themed, responsive UI

✅ Real-time status updates

✅ Copy transcript button

✅ Typing animation on page load

## How It Works
* User selects an audio file via UI.

* JavaScript sends the audio file to the Flask backend (/upload).

* Flask saves the file and passes it to the faster-whisper model.

* Model transcribes the audio and returns clean text as JSON.

* Transcript is displayed on the frontend with an option to copy it.


---

## Let me know if you want:
- A `requirements.txt` file auto-generated   
- A demo video  
- Netlify/Render deployment guide  

``I'm happy to help with those too!``

