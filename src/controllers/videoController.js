// /videos
export const upload = (req, res) => res.send(`<h1>Upload</h1>`);
export const edit = (req, res) => res.send(`<h1>Edit Video</h1>`);
export const watch = (req, res) => {
  console.log(req.params.id);
  return res.render('watch');
};
export const deleteVideo = (req, res) => res.send(`<h1>Delete Video</h1>`);

// to global
export const trending = (req, res) => res.render('home');
export const search = (req, res) => res.send(`<h1>Search</h1>`);
