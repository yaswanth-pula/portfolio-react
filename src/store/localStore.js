function addNewImageToStore(url) {
  localStorage.setItem(Date.now(), url);
}

function getAllImagesFromStore() {
  let keys = Object.keys(localStorage);
  if (keys.length === 0) return [];
  let imageList = keys.map((key) => {
    return { id: key, url: localStorage.getItem(key) };
  });
  return imageList;
}

function deleteItemFromStore(id) {
  localStorage.removeItem(id);
}

export { getAllImagesFromStore, deleteItemFromStore, addNewImageToStore };
