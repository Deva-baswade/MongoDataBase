db.programer.updateOne({
    name: "pavan"
},{
    $set:{"age":30},
    $currentDate:{"lastModified":true}
}
);


db.programer.updateMany({
    age:{$lt:80} 
},{
    $set:{"age":30},
    $currentDate:{"lastModified":true}
}
);