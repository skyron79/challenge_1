import { Db } from 'mongodb';
import Message from'../../../Models/api/V1/Messages.js'

// gets all messages
export const list = async (req, res) => {
  console.log('list messages called');

// get messages from database
  const messages = await Message.find();


  let result = {
    status: 'success',
    data: {
        messages: messages
    },
  }
  res.json(result);

}

// creates a new message
export const create = async(req, res) => {
    
try{
    
    let message = new Message()
    message.text = req.body.text
    message.username = req.body.username
    message.date = new Date()
    await message.save()

    const result ={
        status: 'success',
        data: {
            message: message
        }
    }

    

    res.json(result);

}catch(err){
    console.log(err);
    const result = {
        "status":"error",
        "data": {
            "message":"something went wrong"
        }
    }
    res.status(500).json(result)
 } 

}


// updates a message by id
export const update = async(req, res) => {
try{
    let message = Message.findById(req.params.id)
    message.text = req.body.text
    message.username = req.body.username
    message.date = new Date()
    await message.save()
    let result = { 
        status: 'success',
        data: {
            message: 'Message updated on id: ' + req.params.id
        }
    };
    res.json(result);
}
catch(err){
    console.log(err);
    const result = {
        "status":"error",
        "data": {
            "message":"something went wrong"
        }
    }
    res.status(500).json(result)
 }
}
// deletes a message by id
export const remove = (req, res,next) => {

  let result = { 
    status: 'success',
    data: {
      message: 'Message deleted on id: ' + req.params.id
    }
  };

  res.json(result);
}