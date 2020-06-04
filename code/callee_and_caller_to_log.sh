#!/bin/bash

file=$1
root=`echo $1 |sed 's/.html//'`
echo "root is $root"

echo "caller and callee should be inserted from $file to e.html"
cp $file e.html 
insert_file_after.pl function callee_and_caller.txt e.html
echo "browse e.html to get e.log in console.log with '->'"
echo "file e.log has been produced"
