const uploadBlob = () => {
  if (!localBlobs) {
    return
  }
  
  const dataRef = storageRef.child('hoge') // ファイル名は変える

  // ストレージにアップロード
  dataRef.put(localBlobs).then(snapshot => {
    alert(`added firebase storage: ${snapshot.state}!!`)
  })
  // URLの取得
  dataRef.getDownloadURL().then(url => {
    alert(`download url: ${url}`)
  })
}
