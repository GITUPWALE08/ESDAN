// this generates a list of images in this folder

function importAll(r) {
  let images = {};
  r.keys().forEach((item) => {
    const name = item.replace('./', '').replace(/\.\w+$/, '');
    images[name] = r(item);
  });
  return images;
}

const images = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));

export default images;
