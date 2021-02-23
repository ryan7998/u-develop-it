const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

//Express middleware:
app.use(express.urlencoded({extended:false}));
app.use(express.json());




// Default response for any other request (Not Found) Cath all. should always be at the end of other routes as its a catch
app.use((req, res) =>{
    res.status(404).end();
});
// Listen to start:
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});