
import app from "./app.js"
const port = 5000
let server;
const boostrap=async()=>{
    server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
}
boostrap()