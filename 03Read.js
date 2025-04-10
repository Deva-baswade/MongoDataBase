db.programer.find();//it fetch all the document or data from the collection

db.programer.find({name:"devanand"});//this is find specific query
db.programer.find({age:{$in:[23,25]}})

db.programer.find({size:{h:{$gt:20},age:{$lt:80}}});//this is used to find the data which is greater than 20 in height and less than 80 in age
db.programer.find({$or:[{name:"devanand"},{age:{$gt:30}}]});//this is used to find the data which is either name is devanand or age is greater than 30
db.programer.findOne({$or:[{name:"devanand"},{age:{$gt:30}}]});