#


ipfs files ls -l /etc
qm=$(ipfs files stat --hash /etc/motd)
ipfs files cp /ipfs/$qm /etc/motd1
ipfs files cp /etc/motd1 /etc/motd2

ipfs files ls -l /etc


