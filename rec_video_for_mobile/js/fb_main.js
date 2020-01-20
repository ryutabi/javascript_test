const uploadBlob = () => {
  if (!localBlobs) {
    return
  }
  
  const dataRef = storageRef.child('hogehoge') // ファイル名は変える

  // ストレージにアップロード
  dataRef.put(localBlobs).then(snapshot => {
    console.log(`added firebase storage: ${snapshot.state}!!`)
  })
  // URLの取得
  dataRef.getDownloadURL().then(url => {
    console.log(`download url: ${url}`)
  })
}
