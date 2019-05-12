#!/bin/python3

"""
Initalize the movie recommendation module.

:author:    Davor Risteski
<<<<<<< HEAD
:version:	05.13.2019
=======
:version:	05.08.2019
>>>>>>> 52f313985fc6211210710917de4ceb64e489c434
"""

import argparse
import signal
import sys
import time
import engine
import pubsub
import settings as G
<<<<<<< HEAD
from util import decorated_print as print

run_proc = True
=======
>>>>>>> 52f313985fc6211210710917de4ceb64e489c434

def _exit(sig=None, frame=None):
    """
    Interrupt handler.
    """
<<<<<<< HEAD
    global run_proc
    if(run_proc):
        print("Recommendation engine exiting...")
        print("Finishing one last run so we can exit gracefully.")
    run_proc = False
    # sys.exit(0)
=======
    print("Recommendation engine exiting...")
    sys.exit(0)
>>>>>>> 52f313985fc6211210710917de4ceb64e489c434

def _daemonize():
    """
    Daemonizes the module. Uses pub/sub Redis schema.
    """
<<<<<<< HEAD
    global run_proc
    try:
        print("Persisting process...")
        signal.signal(signal.SIGTERM, _exit)
=======
    try:
        print("Persisting process...")
>>>>>>> 52f313985fc6211210710917de4ceb64e489c434
        signal.signal(signal.SIGINT, _exit)

        if(G.VERBOSE):
            print("Building engine...")
        en = engine.Engine()

        if(G.VERBOSE):
            print("Building wrapper...")
        ps = pubsub.Wrapper(en)
<<<<<<< HEAD

        print("Ready. Waiting for requests...")

        while run_proc:
=======
        
        while True:
>>>>>>> 52f313985fc6211210710917de4ceb64e489c434
            ps.heartbeat()
            time.sleep(10)
    except KeyboardInterrupt:
        _exit()

def _single(movie):
    """
    Finds a recommendation for a single movie.
    """
    print("Recommendations for", movie)

    if(G.VERBOSE):
        print("Building engine...")
    en = engine.Engine()

    if(G.VERBOSE):
        print("Getting 10 recommendations...")
    result = en.getRecommendation(movie, take = 10)

    print(result)

    if(G.VERBOSE):
        print("Getting 10 recommendations as JSON...")
        newrs = en.getRecommendation(movie, take = 10, json=True)
        print(newrs)

def main():
    """
    Initializes the application.
    """
    parser = argparse.ArgumentParser(allow_abbrev=False)

    parser.add_argument("-s", "--single", type=str, nargs=1, default="",
                        help="Get recommendations for a single title then quit.")

    parser.add_argument("-v", "--verbose", action="store_true", default=G.VERBOSE,
                        help="Print extra logging to the console.")

    parser.add_argument(      "--url", type=str, nargs=1, default=G.REDIS_URL,
                        help="Set the url to use when connecting to Redis")

    parser.add_argument(      "--port", type=int, nargs=1, default=G.REDIS_PORT,
                        help="Set the port to use when connecting to Redis")

    a = parser.parse_args()

    G.VERBOSE    = a.verbose
    G.REDIS_URL  = a.url[0]  if type(a.url) == list else a.url
    G.REDIS_PORT = a.port[0] if type(a.port) == list else a.port

    sn_mov = a.single[0] if type(a.single) == list else a.single

    if (sn_mov != ''):
        _single(sn_mov)
    else:
        _daemonize()

__all__ = [ "main" ]
