const express = require("express");
const router = express.Router();
const data = require("../data");
const taskData = data.tasks;
const uuid = require("node-uuid");
const request = require("request-promise");
const recommendFunction = require("./recommend");

router.get("/watchlist/:id", async (req, res) => {
  try {
    let requestData = req.params;

    if (!requestData.id) {
      throw "Provide uid or Movie id";
    }
    let watchlistMovies = await taskData.getWatchlistByUser(requestData.id);
    res.json(watchlistMovies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/recommendation/:id", async (req, res) => {
  try {
    let requestData = req.params;
    if (!requestData.id) {
      throw "Provide uid or Movie id";
    }
    let r_moviesJSON = await taskData.getRecommendedMoviesByUserId(
      requestData.id
    );
    console.log(r_moviesJSON);
    res.json(r_moviesJSON);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/watchlist/", async (req, res) => {
  try {
    requestData = req.body;
    if (!requestData.uid && !requestData.movieid) {
      throw "Provide uid or Movie id";
    }
    let movie = await taskData.addToWatchList(
      requestData.movieid,
      requestData.uid
    );
    await taskData.getRecommendedMovies(movie.movie, requestData);
    res.json(movie);
  } catch (error) {
    res.status(500).json({ error: "Oops! Exception caught.", message: error });
  }
});

router.put("/watchlist/", async (req, res) => {
  try {
    const requestData = req.body;
    if (!requestData.uid && !requestData.movieid) {
      throw "Provide uid or Movie id";
    }
    let movieData = await taskData.removeWatchlist(
      requestData.uid,
      requestData.movieid
    );
    res.json(movieData);
  } catch (error) {
    res.status(500).json({ error: "Oops! Exception caught.", message: error });
  }
});

//Don't delete creared by Sumit
router.get("/:id", async (req, res) => {
  try {
    let requestData = req.params;
    if (!requestData.id) {
      throw "Provide uid or Movie id";
    }
    let r_moviesJSON = await taskData.getMovieByMovieId(requestData.id);
    console.log(r_moviesJSON);
    res.json(r_moviesJSON);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// router.post("/", async (req, res) => {
//   try {
//     reqObj = req.body;

//     //Condition to check if keys exist in the json ob
//     if(!("title" in reqObj)) {throw "title is not defined."}
//     if(!("description" in reqObj)) {throw "description is not defined."}
//     if(!("hoursEstimated" in reqObj)) {throw "hoursEstimated is not defined."}
//     if(!("completed" in reqObj)) {throw "completed is not defined."}

//     if(!("comments" in reqObj)) {
//       reqObj.comments = []
//     }

//     // Check every key are in proper type and not empty
//     Object.keys(reqObj).forEach(function(key) {
//       if(key == "title"){
//         if(typeof reqObj[key] !==  "string") {
//          throw "Improper title provided";
//         }
//       }
//       if(key == "description"){
//         if(typeof reqObj[key] !==  "string") {
//          throw "Improper description provided";
//         }
//       }
//       if(key == "hoursEstimated"){
//         if(typeof reqObj[key] !==  "number") {
//          throw "Improper hoursEstimated provided";
//         }
//       }
//       if(key == "completed"){
//         if(typeof reqObj[key] !==  "boolean") {
//          throw "Improper completed provided ";
//         }
//       }
//       if(key == "comments"){
//         if(typeof reqObj[key] !==  "object") {
//          throw "Improper comments provided";
//         } else {
//           for (let i=0; i<reqObj[key].length; i++) {
//             reqObj[key][i]['id'] = uuid.v4();
//             if(reqObj[key][i].name === "" || typeof reqObj[key][i].name !== "string" ) {
//               throw "Improper name provided in the comments";
//             }
//             if(reqObj[key][i].comment === "" || typeof reqObj[key][i].comment !== "string" ) {
//               throw "Improper comment is provided";
//             }
//             // reqObj[key][i]['id'] = uuid.v4();
//           }
//         }
//       }
//     });
//     reqObj['id'] = uuid.v4();
//     reqObj._id = uuid.v4();
//     let newTask = {
//       _id: uuid.v4(),
//       id: uuid.v4(),
//       title: reqObj.title,
//       description: reqObj.description,
//       hoursEstimated: reqObj.hoursEstimated,
//       completed: reqObj.completed,
//       comments: reqObj.comments

//     }
//     resultJSON = await taskData.addTask(newTask);
//     res.json(resultJSON);
//   } catch (error) {
//     res.status(500).json({ error: "Oops! Exception caught.", message: error });
//   }
// });

/**
 * Wire up recommendation route.
 */
router.post("/recommendations/", recommendFunction);

module.exports = router;
