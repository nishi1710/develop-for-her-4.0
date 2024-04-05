// Code  for mongoose config in backend
// Filename - backend/index.js
 
// To connect with your mongoDB database
const mongoose = require('mongoose');
const url = "mongodb+srv://codesmith:mongodbpassword@cluster0.jslovjw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(url);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
})
 
// Schema for users of app
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    balance :{
        type: Number,
        default: 20000,
    },
    // password :{
    //     type: String,
    //     required: true,
       
    // },
    // age :{
    //     type: number,
    //     required: true,
        
    // },

});
const User = mongoose.model('users', UserSchema);
User.createIndexes();

const TransSchema = new mongoose.Schema({
    email:{
        type:String,
        required: true,
        unique: true,
    },
    type:{
        type:String,
    },
    newBalance:{
        type:Number,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});
const Trans = mongoose.model('trans', TransSchema);
Trans.createIndexes();

 
// For backend and express
const express = require('express');
const app = express();
const cors = require("cors");
const { number } = require('mathjs');
console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());
app.get("/", (req, resp) => {
  
    resp.send("App is Working");
    // You can check backend is working or not by 
    // entering http://loacalhost:5000
     
    // If you see App is working means
    // backend working properly
});
app.get("/account/:email", async (req, resp) => {
    try {
        const email = req.params.email;
        const user = await User.findOne({ email });
        if (!user) {
            return resp.status(404).json({ error: "User not found" });
        }
        resp.json({ accountValue: user.balance });
    } catch (error) {
        console.error("Error fetching account value:", error);
        resp.status(500).json({ error: "Something went wrong" });
    }
});
// app.get("/history/:email", async (req, resp) => {
//     try {
//         const email = req.params.email;
//         const transactions = await Trans.find({ email }); // Use find() instead of findOne()
//         if (transactions.length === 0) {
//             return resp.status(404).json({ error: "User not found" });
//         }
//         const accountValues = transactions.map(transaction => ({
//             accountValue: transaction.newBalance,
//             updateDate: transaction.date,
//             updateType: transaction.type
//         }));
//         resp.json(accountValues);
//     } catch (error) {
//         console.error("Error fetching account values:", error);
//         resp.status(500).json({ error: "Something went wrong" });
//     }


//});

app.get("/history/:email", async (req, res) => {
    try {
        const email = req.params.email;
        const latestTransaction = await Trans.findOne({ email }).sort({ updateDate: -1 });

        if (!latestTransaction) {
            return res.status(404).json({ error: "User not found or no transactions found" });
        }

        const { accountValue, updateDate, updateType } = latestTransaction;
        res.json({ accountValue, updateDate, updateType });
    } catch (error) {
        console.error("Error fetching account value:", error);
        res.status(500).json({ error: "Something went wrong" });
    }
});


app.get("/history/:email", async (req, resp) => {
    try {
        const email = req.params.email;
        const user = await Trans.findOne({ email });
        if (!user) {
            return resp.status(404).json({ error: "User not found" });
        }
        resp.json({ accountValue: Trans.newBalance,updateDate: Trans.date,updateType : Trans.type });
    } catch (error) {
        console.error("Error fetching account value:", error);
        resp.status(500).json({ error: "Something went wrong" });
    }
});
app.post("/register", async (req, resp) => {
    try {
        const user = new User(req.body);
        let result = await user.save();
        result = result.toObject();
        if (result) {
            delete result.password;
            resp.send(req.body);
            console.log(result);
        } else {
            console.log("User already register");
        }
 
    } catch (e) {
        resp.send("Something Went Wrong");
    }
});

app.post("/history", async (req, resp) => {
    try {
        const user = new Trans(req.body);
        let result = await user.save();
        result = result.toObject();
        if (result) {
            delete result.password;
            resp.send(req.body);
            console.log(result);
        } else {
            console.log("History updated");
        }
 
    } catch (e) {
        resp.send("Something Went Wrong");
    }
});
app.put("/account/:email", async (req, resp) => {
    try {
        const email = req.params.email;
        const { newBalance } = req.body;
        const user = await User.findOneAndUpdate({ email }, { balance: newBalance }, { new: true });
        if (!user) {
            return resp.status(404).json({ error: "User not found" });
        }
        resp.json({ message: "Balance updated successfully", accountValue: user.balance });
    } catch (error) {
        console.error("Error updating user balance:", error);
        resp.status(500).json({ error: "Something went wrong" });
    }
});

app.post('/Login', async (req, res) => {
    try {
      const { email, password } = req.body;
  
      if (!db) {
        return res.status(500).json({ message: 'Database connection error' });
      }
  
      const user = await db.collection('users').findOne({ email });
  
      if (!user || user.password !== password) 
      {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      // const token = generateToken(email_id); // Assuming generateToken is defined
      // res.json({ token });
  
      else
      {
          console.log(user)
      }
  
  
    } 
  catch (err) 
  {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
  }
  });
app.listen(5000);