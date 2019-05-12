
# Final Project

<<<<<<< HEAD
> Class:  CS-554-A
> Group:  1
=======
> Class:  CS-554-A  
> Group:  1  
>>>>>>> 52f313985fc6211210710917de4ceb64e489c434

> Authors:
> * P Athiban
> * Chunli Liu
> * Sumit Oberoi
> * Davor Risteski
> * Rohnit Shetty

# Server

## Dependencies

* NodeJS v10.15.0
* Redis Server v5.0.4
* Python v3.7.3
* pandas
* numpy
* scipy
* scikit-learn
* argparse
* redis
* Additional NPM dependencies in `package.json`

<<<<<<< HEAD
For Linux and Mac systems `python`, `pip`, `python3`, and `pip3` are different commands. As this project depends on __Python 3__, all commands where `pip` or `python` are mentioned must use `python3` or `pip3` respectively.
=======
For Linux systems `python`, `pip`, `python3`, and `pip3` are different commands. As this project depends on __Python 3__, all commands where `pip` or `python` are mentioned must use `python3` or `pip3` respectively.
>>>>>>> 52f313985fc6211210710917de4ceb64e489c434

The following commands can be used to install dependencies for the server:

```
npm install
<<<<<<< HEAD
pip install -r requirements.txt
```

__Note that `pip` and `npm` must be run separately as they depend on the end user's platform - as noted above `pip` must either be `pip3` or an alias for `pip3`.__
=======
pip install pandas numpy scipy scikit-learn argparse redis
```

__Note that `pip` and `npm` must be run separately.__
>>>>>>> 52f313985fc6211210710917de4ceb64e489c434

## Compilation

The following commands can be used to compile and run the server:

```
npm start
```

<<<<<<< HEAD
The server expects that a Redis process is already running and listening on the default port of `6379`. Additionally, in order to maintain cross platform compatibility the server will try to use the correct version of Python depending on the operating system. For Windows this is `py`, while for Linux and Mac this is `Python3`.
=======
The server expects that a Redis process is already running and listening on the default port of `6379`.
>>>>>>> 52f313985fc6211210710917de4ceb64e489c434

# Client

## Dependencies

* NodeJS v10.15.0
* Additional NPM dependencies in `package.json`

## Compilation

The following commands can be used to install dependencies and run the client:

```
npm install
npm run build
npm start
```

The client expects that its complimentary server is already up and running before it is executed.

# Works Cited & Consulted

Hill, Patrick. "React Second Lecture/Firebase Auth" Computer Science 554. Stevens Institute of Technology, New Jersey. 21 Feb. 2019. Example Project.
