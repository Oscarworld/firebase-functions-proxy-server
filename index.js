const app = require('express')();
const proxy = require('express-http-proxy');
const port = process.env.PORT || 8080;

const selectHost = (req) => {
  return `https://${req.params.region}-${req.params.projectId}.cloudfunctions.net`;
};

app.use(
  '/functions/us-central/ole-ole-220811',
  proxy(selectHost, {
    https: true,
  })
);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
