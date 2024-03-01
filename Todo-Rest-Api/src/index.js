import connectDB from "./databse/db.js";
import {app} from "./app.js"


connectDB()
.then(() => {
    app.listen(4400, () => {
        console.log(`⚙️ Server is running on http://localhost:4400/`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})

