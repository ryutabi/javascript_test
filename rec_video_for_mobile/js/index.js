const startButton = document.getElementById('startButton')
const preview = document.getElementById('preview')

const recStart = document.getElementById('recStart')
const recStop = document.getElementById('recStop')
const playVideo = document.getElementById('playVideo')
const download = document.getElementById('download')
const recordedVideo = document.getElementById('recordedVideo')

let mediaRecorder = null
let recordedData = []
let localBlobs


// プレビューの処理
startButton.addEventListener("click", () => {
  navigator.mediaDevices.getUserMedia({
    // video: { facingMode: { exact: "environment" } },
    video: true,
    audio: true
  })
  .then(stream => {
    preview.srcObject = stream
    window.stream = stream
  })
  .catch(e => {
    alert(e)
  })
});


// 録音開始時の処理
const startRecording = () => {
  const options = { mimeType: "video/webm;codecs=vp9" }

  try {
    mediaRecorder = new MediaRecorder(window.stream, options)
  } catch (e) {
    console.error(e)
    return
  }

  mediaRecorder.ondataavailable = handleDataAvailable = e => {
    if (e.data && e.data.size > 0) {
      recordedData.push(e.data)
      localBlobs = new Blob(recordedData, { type: "video/webm" })
    }
  }
  mediaRecorder.start()
}


// 録音停止時の処理
const stopRecording = () => {
  mediaRecorder.stop()
}


// 録画した映像を再生する
const videoPlay = () => {
  recordedVideo.src = window.URL.createObjectURL(localBlobs)
  recordedVideo.controls = true
  recordedVideo.play()
}


// 録画した映像を保存する
const downloadVideo = () => {
  const url = window.URL.createObjectURL(localBlobs)
  const a = document.createElement("a")
  document.body.appendChild(a)
  a.style.display = "none"
  a.href = url
  a.download = "hoge.webm" // ファイル名
  a.click()
  // 100ミリ秒後にエレメントを消す
  setTimeout(() => {
    document.body.removeChild(a)
    window.URL.revokeObjectURL(url)
  }, 100);
}
