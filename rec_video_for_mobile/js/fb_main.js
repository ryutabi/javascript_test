const uploadBlob = () => {
  if (!localBlobs) {
    return
  }
  
  const dataRef = storageRef.child('hoge') // ファイル名は変える

  // ストレージにアップロード
  dataRef.put(localBlobs)
  .then(snapshot => {
    alert(`added firebase storage: ${snapshot.state}!!`)
  })
  .catch(e => {
    alert(e)
  })

  // URLの取得
  dataRef.getDownloadURL()
  .then(url => {
    alert(`download url: ${url}`)
  })
  .catch(e => {
    alert(e)
  })
}
