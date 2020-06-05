#!/bin/bash

echo '<div id="leftSideBlock">' > A.html
echo '</div>' > B.html
	    

cat \
    A.html \
    code/uploadBlock.html \
    code/createDirectoryBlock.html \
    code/removeBlock.html \
    code/copyBlock.html \
    code/repoStats.html \
    code/pinBlock.html \
    B.html \
    > C.html

cat \
    code/headBlock.html \
    C.html \
    code/currentMfsDirectoryBlock.html \
    code/hiddenForDirBlock.html \
    code/windowOnLoad.html \
    code/tableFunctions.html \
    code/reste.html \
    code/footBlock.html \
    > F.html

echo "cp F.html "
