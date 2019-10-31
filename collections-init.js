var db = connect("mongodb://localhost/news");

db.createUser({
    user: 'web',
    pwd: 'example',
    roles: [{role: 'readWrite', db: 'news'}]
})