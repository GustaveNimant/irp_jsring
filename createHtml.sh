#!/bin/bash

cat \
    code/headBlock.html \
    code/uploadBlock.html \
    code/createDirectoryBlock.html \
    code/removeBlock.html \
    code/copyBlock.html \
    code/pinBlock.html \
    code/currentMfsDirectoryBlock.html \
    code/hiddenForDirBlock.html \
    code/windowOnLoad.html \
    code/tableFunctions.html \
    code/reste.html \
    code/footBlock.html \
    > f.html

echo "cp f.html "
