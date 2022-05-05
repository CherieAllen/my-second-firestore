import connectDb from "../connectDb.js";


export function addStore (req,res) {
    if (!res.body){
        res.status(401).send('Invalid Request');
        return;
    }
    const db = connectDb();
    db.collection('store').add(req.body)
     .then(doc => {
         res.send('Store added' + doc.id)
     })
     .catch(err =>{
        res.status(500).send(err)
     });
}