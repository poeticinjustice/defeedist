'use strict'

const pg = require('pg-promise')({
  // Initialization Options
});

const config =  process.env.DATABASE_URL ||{
  host:         process.env.DB_HOST,
  port:         process.env.DB_PORT,
  database:     process.env.DB_NAME,
  user:         process.env.DB_USER,
  password:     process.env.DB_PASS,
};

const _db = pg(config);

module.exports = {

  /* GET /stories */
  getStories(req, res, next) {
    _db.any("SELECT * from stories;")
    .then( stories=>{
      res.rows = stories;
      next()
    })
    .catch( error=>{
      console.error('Error ', error);
      throw error;
    })
  },
  /* POST /stories */
  /* creates a new story, returns the newly created record */
  addStory(req, res, next) {
    console.log('===addStory===', req.body)
    _db.one(
      `INSERT INTO stories (story_title, story_desc) VALUES ($1, $2) returning *;` ,
      [ req.body.title , req.body.desc ]
      )
      .then( story=>{
        console.log('ADDED STORY SUCCESSFUL');
        res.rows = story;
        next();
      })
      .catch(error=>{
        console.error('ERROR in ADDING TASK!', error);
        throw error;
      })
  },
  /* PUT /stories/:storyID */
  updateStory(req, res, next) {

    //sID is invented here
    req.body.sID = Number.parseInt(req.params.storyID);

    req.body.read = !!req.body.read;

    _db.one(
      `UPDATE stories SELECT
      story_title         = $/story_title/,
      story_desc          = $/story_desc/,
      read                = $/read/,
      story_time_written  = $/story_time_written/,
      story_time_read     = $/story_time_read/,

      WHERE story_id = $/sID/
      returning *; `,
      req.body)

      .then ( story=>{
        console.log('ADDED UPDATE SUCCESFULLY');
        res.rows = story;
        next();
      })
      .catch(error=>{
        console.error('ERROR in UPDATING STORY!', ERROR);
        throw error;
      })
  },

  /* DELETE /stories/:id */
  deleteStory(req, res, next) {
    const sID = Number.parseInt(req.params.storyID);

    _db.none(`
      DELETE FROM stories
      WHERE story_id = $1
      `, [sID])

    .then( ()=>{
      console.log('DELETE COMPLETED');
      res.rows = sID;
      next();
    })
    .catch(error=>{
      console.error('ERROR in DELETING STORY!', error);
      throw error;
    })
  },
}
