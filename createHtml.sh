#!/bin/bash

echo '<div class="LeftSideBlockClass">' > A.html
echo '</div>' > B.html

cat \
    A.html \
    code/uploadBlock.html \
    code/createDirectoryBlock.html \
    code/removeBlock.html \
    code/copyBlock.html \
    code/repoStats.html \
    code/pinBlock.html \
    > C.html

cat \
    code/headBlock.html \
    C.html \
    code/currentMfsDirectoryBlock.html \
    code/windowOnLoad.html \
    code/tableDirectoryFunctions.html \
    code/tableFileFunctions.html \
    code/reste.html \
    code/footBlock.html \
    > F.html

echo "cp F.html "
