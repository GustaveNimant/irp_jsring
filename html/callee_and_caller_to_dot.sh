#!/bin/bash

file=$1
root=`echo $1 |sed 's/.html//'`
echo "root is $root"
echo "run callee_and_caller_to_log.sh $file to produce e.log"

cut -d" " e.log -f3-6 | sed -e 's/ called by f.html:.*$/ called by main/' \
			    -e 's/ called by /" -> "/' \
			    -e 's/^/"/' \
			    -e 's/$/"/' > ${root}.log

echo "digraph dgn {" > ${root}.dot
sort -u ${root}.log >> ${root}.dot
echo "}" >> ${root}.dot
/keep/PERL/delete_lines_where.pl validate ${root}.dot
/keep/PERL/delete_lines_where.pl substi ${root}.dot
/keep/PERL/delete_lines_where.pl result ${root}.dot
dot -Tpng ${root}.dot -o ${root}.png
echo "cat ${root}.dot"
echo "eog ${root}.png"
