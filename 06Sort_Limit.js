//collection first item
db.programer.find().limit(1)//first item

//skip one or many
db.programer.find().skip(1)//skip first item

//sorting
db.programer.find().sort({age:1})//ascending order
db.programer.find().sort({age:-1})//descending order


//avhivind the pagination using the mongodb find and limit

no=8
db.blog.find().skip(pageNo-1).limit(no)
pageno=1 db.blog.find().skip(0).limit(8)
pageno=2 db.blog.find().skip(8).limit(8)