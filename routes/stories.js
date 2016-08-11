'use strict'

const express   = require('express')
const stories   = express.Router();

/* get the database middleware */
const db        = require ('../models/story')

/* convenience method for sending */
const sendJSONresp = (req,res)=>res.json(res.rows)

stories.route('/:storyID')
  .put( db.updateStory, sendJSONresp )
  .delete( db.deleteStory, (req,res)=>res.send(req.params.storyID) )

stories.route('/')
  .get( db.getStories, sendJSONresp )
  .post( db.addStory, sendJSONresp )


module.exports  = stories;
