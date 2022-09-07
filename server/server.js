// Application server
// Run this script to launch the server.
// The server should run on localhost port 8000.
// This is where you should start writing server-side code for this application. || node mongodb://127.0.0.1:27017/fake_so
const express = require('express');  // mongod --dbpath=/Users/emirhanakkaya/data/db || node populate_db.js mongodb://127.0.0.1:27017/fake_so
var cors = require('cors')
let Tag = require('./models/tags');
let Answer = require('./models/answers');
let Question = require('./models/questions');
let User = require('./models/user');;
let Comment = require('./models/comments');;
const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');
const { default: axios } = require('axios');
const bcrypt = require('bcrypt');
const answers = require('./models/answers');
const saltRounds = 10;

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const port = 8000; // specified by prof.

app.listen(8000, () => {console.log("listening on port: " + 8000)})

var url = "mongodb://localhost:27017/fake_so";
mongoose.connect(url, function(err, db) {
    if (err) throw err;
    console.log("hereeeee: " + db);
});
const db = mongoose.connection;
db.once('open', function(){
    console.log("Connected to MongoDB successfully!");
});
db.on('error', console.error.bind(console, "Error in starting database!"));

process.on("SIGINT", function(){
    mongoose.connection.close(function() {
        console.log("Server is closed");
        process.exit(0);
    });
});

app.post('/updateViews', async (req, res) => {
    Question.findById(req.body.id).then(a => {
        a.views += 1;
        console.log(a.views);
        a.save();
    });

    res.send('okay');
});

app.post('/getReputation', async (req, res) => {
    let user = await User.find({email: req.body.email});
    console.log("user:"); console.log(user);
    res.send( JSON.stringify(user[0].reputation) );
})

app.post('/updateVotesForQuestion', async (req, res) => {
    console.log("id: " + req.body.id2);
    User.findById(req.body.id2).then(a => {
        console.log("in here" + a.reputation);
        if(a.reputation < 100){ // change back to 100!
            res.send("no"); // can't update vote.
        }
        else{
            Question.findById(req.body.id).then(a => {
                a.votes += 1;
                console.log(a.votes);
                a.save();
            });
            res.send('okay');
        }
    }); 
});

app.post('/updateVotesForAnswer', async (req, res) => {
    User.findById(req.body.id2).then(a => {
        console.log("in here" + (a.reputation));
        if(a.reputation < 100){
            res.send("no"); // can't update vote.
        }
        else{
            console.log("okay");
            Answer.findById(req.body.id).then(a => {
                a.votes += 1;
                console.log(a.votes);
                a.save();
            });
            res.send('okay');
        }
    }); 
});


app.post('/updateVotesForQuestionDec', async (req, res) => {
    User.findById(req.body.id2).then(a => {
        if(a.reputation < 100){ // change to 100
            console.log("in here: " + a.reputation);
            res.send("no"); // can't update vote.
        }
        else{
            Question.findById(req.body.id).then(a => {
                a.votes -= 1;
                console.log(a.votes);
                a.save();
            });
            res.send('okay');
        }
    });
});


app.post('/updateVotesForAnswerDec', async (req, res) => {
    User.findById(req.body.id2).then(a => {
        if(a.reputation < 100){
            console.log("in here: " + a.reputation);
            res.send("no"); // can't update vote.
        }
        else{
            Answer.findById(req.body.id).then(a => {
                a.votes -= 1;
                console.log(a.votes);
                a.save();
            });
            res.send('okay');
        }
    });
    
    
});

app.post('/increaseReputation', async (req, res) => {
    console.log("id: " + req.body.id);
    User.findById(req.body.id).then(a => {
        a.reputation += 5;
        console.log(a.reputation);
        a.save();
    });
    res.send('okay');
});

app.post('/decreaseReputation', async (req, res) => {
    console.log("id: " + req.body.id);
    User.findById(req.body.id).then(a => {
        if(a.reputation >= 10){
            a.reputation -= 10;
        }
        else if(a.reputation < 10 && a.reputation >= 0){
            a.reputation = 0;
        }
        console.log(a.reputation);
        a.save();
    });
    res.send('okay');
});


app.post("/forAnswer", async (req, res) => {
    let newAnswer = new Answer(req.body.first);
    
    await newAnswer.save();
    await Question.findByIdAndUpdate({_id: req.body.second.id}, {
        $push: {answers: new ObjectId(newAnswer._id)}
    });
    res.status(201).send('answer added');
});

app.post('/editAnswer', async (req, res) => {
    console.log("id: " + req.body.id);
    
    await Answer.findByIdAndUpdate({_id: req.body.id}, {
        text: req.body.text
    });
    res.send("done");
});

app.post('/deleteAnswer', async (req, res) => {
    console.log("id: " + req.body.id);
    
    await Question.findByIdAndUpdate( {_id: req.body.id2}, {
        $pullAll: {answers: [{_id: req.body.id}]}
    })
    await Answer.findByIdAndRemove({_id: req.body.id}, {
        id: req.body.id
    });
    res.send("done");
});

app.post('/deleteQuestion', async (req, res) => {
    console.log("id: " + req.body.id);
    console.log(req.body.deleteTags);
    console.log(req.body.deleteTags.length);
    if(req.body.deleteTags){
        while(req.body.deleteTags.length > 0){
            console.log("req.body.deleteTags[req.body.deleteTags.length-1]: " + req.body.deleteTags[req.body.deleteTags.length -1]);
            await Tag.findByIdAndRemove({_id: req.body.deleteTags[req.body.deleteTags.length - 1]}, {
                id: req.body.deleteTags[req.body.deleteTags.length - 1]
            });
            req.body.deleteTags.pop();
        }
    }
    await Question.findByIdAndDelete({_id: req.body.id}, {
        id: req.body.id
    });
    res.send("done");
});

app.post('/deleteTag', async (req, res) => {
    console.log("id: " + req.body.id);
    
    await Tag.findByIdAndDelete({_id: req.body.id}, {
        id: req.body.id
    });
    res.send("done");
});

app.post('/editTags', async (req, res) => {
    console.log("id: " + req.body.id);
    console.log("name: " + req.body.name);
    
    await Tag.findByIdAndUpdate({_id: req.body.id}, {
        name: req.body.name
    });
    res.send("done");
});

app.post('/editQuestion', async (req, res) => {
    console.log("id: " + req.body.id);
    console.log("title: " + req.body.title);
    
    await Question.findByIdAndUpdate({_id: req.body.id}, {
        title: req.body.title,
        text: req.body.text,
        summary: req.body.summary
    });
    res.send("done");
});

app.get('/', async (req, res) => {
    let forQuestions = await Question.find({});
    let forTags = await Tag.find({});
    let forAnswers = await Answer.find({});
    let comments = await Comment.find({});
    let users = await User.find({});

    let toSend = await {
        tagNames: forTags,
        answerDetails: forAnswers,
        questions: [forQuestions],
        comments: comments,
        users: users
    };
    res.send(JSON.stringify(toSend)); // JSON.stringify(
});

app.post('/findSpecificTagName', async (req, res) => {
    console.log("id: " + req.body.id);
    let tags = await Question.find({tags: req.body.id}).then(e => {
        res.send({length: e.length});
    });
});

app.post('/textForAnswer', (req, res) => {
    let toReturn = "";
    Answer.findById(req.body.id).then(e => {
        console.log(e.text);
        toReturn = e.text;
    });
    res.send(toReturn);
});

app.post('/newCommentForAnswer', async (req, res) => {
    console.log("index: " + req.body.index);
    console.log("comment: " + req.body.comment);
    console.log("id: " + req.body.id);
    let newComment = new Comment({
        data: req.body.comment,
        by: req.body.by
    });
    
    await newComment.save();
    await Answer.findByIdAndUpdate({_id: req.body.id}, {
        $push: {comment: new ObjectId(newComment._id)}
    });
    res.send("okay");
});

app.post('/newComment', async (req, res) => {
    console.log("index: " + req.body.index);
    console.log("comment: " + req.body.comment);
    console.log("id: " + req.body.id);
    let newComment = new Comment({
        data: req.body.comment,
        by: req.body.by
    });
    
    await newComment.save();
    await Question.findByIdAndUpdate({_id: req.body.id}, {
        $push: {comment: new ObjectId(newComment._id)}
    });
    res.send("okay");
});

app.post('/', async (req, res) => {
    // query mongodb for question i'm editing  -> returns "q" i want to edit
    // then set individual fields that changed.
    
    let newQuestion = new Question(req.body);
    let i = 0;
    let tempArr = [];
    while(i < req.body.tags.length){
        let temp = await Tag.find({name: req.body.tags[i].name});
       
        if(temp.length === 0){
            let nameToAdd = "" + req.body.tags[i].name;
            nameToAdd = nameToAdd.toLowerCase();
            let newTag = new Tag({
                name: nameToAdd,
            })
            tempArr.push(newTag);
            newTag.save();
        }
        else{
            let nameToAdd = "" + req.body.tags[i].name;
            let temp = await Tag.find({name: nameToAdd});
            nameToAdd = nameToAdd.toLowerCase();
            tempArr.push(temp[0]);
        }
        
        i += 1;
    }
    let user = await User.find({name: req.body.asked_by});
    // user.questions = newQuestion; // don't know if i need this -> useful when editing a question. I need to know how many questions a user is 
    // related to. ig i could just do "find" for question with "user" equal to username i'm specifiying. 
    // console.log("user!");
    // console.log(user);
    newQuestion.user = user;
    newQuestion.tags = tempArr;
    console.log("here:"); console.log(newQuestion);
    await newQuestion.save();
    res.status(201).send('user added');
});

app.post('/newUser', async(req, res) => {
    let user = await new User(req.body);
    
    bcrypt.genSalt(saltRounds, function(err, salt) {
        console.log("okay!!!");
        bcrypt.hash(req.body.password, salt, function(err, hash) {
            user.password = hash;
            console.log("user:");
            console.log(user);
            user.save();
        });
    });
    
    res.send(user);
});

app.post('/checkEmails', async(req, res) => { //don't actually post anything
    console.log("email: ");
    console.log(req.body);
    let emails = await User.find({email: req.body.email});
    console.log("emails:"); console.log(emails.length);
    if(emails.length === 0){
        res.send("");
    }
    else{
        res.send("can't add");
    }
});


app.post('/forLogin', async (req, res) => {
    console.log("email: ");
    console.log(req.body);
    let emails = await User.find({email: req.body.email});
    console.log("emails:");
    console.log(emails);
    console.log("emails:"); console.log(emails.length);
    if(emails.length === 0){
        res.send("no");
    }
    else{
        // then ensure the password is correct.
        console.log("req.body.password: " + req.body.password);
        console.log(emails[0].password);
        let hmm = emails[0].password;
        bcrypt.genSalt(saltRounds, async function(err, salt) {
            bcrypt.hash(req.body.password, salt, async function(err, hash) {
                console.log("hashed:");
                console.log(hash);
                let here = await bcrypt.compare(req.body.password, hmm); // either true or false value, checks to see if password exists in db.
                if(!here){
                    res.send("pass"); // password is not correct.
                }
                else{
                    console.log("hmmmmm:");
                    console.log(emails[0].name);
                    res.send(emails[0].name); // good to go.
                }

            });
        });
    }
});

// const mongo = require('mongodb').MongoClient;var url = "mongodb://localhost:27017/";MongoClient.connect(url, function(err, db) {  if (err) throw err; console.log("created db!");db.close();});