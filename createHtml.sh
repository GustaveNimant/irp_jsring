#!/bin/bash

cat \
    html/headBlock.html \
    html/uploadBlock.html \
    html/createDirectoryBlock.html \
    html/removeBlock.html \
    html/copyBlock.html \
    html/pinBlock.html \
    html/currentMfsDirectoryBlock.html \
    html/hiddenForDirBlock.html \
    html/windowOnLoad.html \
    html/tableFunctions.html \
    html/reste.html \
    html/footBlock.html \
    > f.html

echo "cp f.html "
