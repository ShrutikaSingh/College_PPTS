# Mapper

import sys

# get all lines from stdin
for line in sys.stdin:

    # remove leading & trailing whitespace
    line = line.strip()

    # split the line into words
    words = line.split()

    # output tuples [word,] in tab-delimied format
    for word in words:
        print('%s\t%s' % (word, "1"))
