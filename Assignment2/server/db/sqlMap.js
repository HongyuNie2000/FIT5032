
//sql query 
var sqlMap = {
    user: {
        add: 'insert into users (email, password,isAustralian,reason,gender,suburb) values (?,?,?,?,?,?)',
        select: 'select * from users'
    }
}

module.exports = sqlMap;