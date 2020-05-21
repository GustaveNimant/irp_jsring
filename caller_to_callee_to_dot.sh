#!/bin/bash

file=$1

echo "caller and callee should be inserted from $file to e.html"
echo "cp $file to e.html" 
echo "insert_file_after.pl function caller_to_callee.txt e.html"
echo "run e.html to get e.log"

echo "digraph dgn {" > caller_to_callee.dot
sort -u e.log >> caller_to_callee.dot
echo "}" >> caller_to_callee.dot
/keep/PERL/delete_lines_where.pl validate caller_to_callee.dot
/keep/PERL/delete_lines_where.pl substi caller_to_callee.dot
dot -Tpng caller_to_callee.dot -o caller_to_callee.png
echo "eog caller_to_callee.png"
