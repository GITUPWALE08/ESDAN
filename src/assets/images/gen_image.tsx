const image = import.meta.glob<{ default: string }>("./*.{png,jpg,jpeg,svg}", {
  eager: true,
});

const images: Record<string, string> = {};

Object.entries(image).forEach(([path, module]) => {
  const name = path
    .replace("./", "")
    .replace(/\.\w+$/, ""); // remove extension
  images[name] = module.default;
});

export default images;
