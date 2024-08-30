const models = require('../db/db');
const express = require('express');
const router = express.Router();
const mysql = require("mysql2");
const $sql = require("../db/sqlMap");
const conn = mysql.createConnection(models.mysql);
conn.connect();

router.post("/login", (req, res) => {
    const user = req.body;
    const sel_email = $sql.user.select + " where email = '" + user.email + "'";
    console.log(sel_email);
    conn.query(sel_email, user.email, (error, results) => {
      if (error) {
        throw error;
      } 
      if (results[0] === undefined) {
        res.send("-1"); // -1 indicates user doesn't exist
      } else {
        if (
          results[0].email == user.email &&
          results[0].password == user.password
        ) {
          res.send("0"); // 0 indicates user's inputs are correct
        } else {
          res.send("1"); // 1 indicates password isn't correct
        }
      }
    });
  });
  
  // 注册接口
  router.post("/add", (req, res) => {
    const params = req.body;
    console.log(params)
    const sel_sql =
      $sql.user.select + " where email = '" + params.email + "'";
    const add_sql = $sql.user.add;
    console.log(sel_sql);
    conn.query(sel_sql, params.email, (error, results) => {
      if (error) {
        console.log(error);
        // can send error to frontend
        // or send 500 status code
      }
      if (results.length != 0 && params.email == results[0].email) {
        res.send("-1"); // -1 表示用户名已经存在
      } else {
        const isAustralian = params.isAustralian
        conn.query(
          add_sql,
          [params.email, params.password,isAustralian ? 1:0,params.reason,params.gender,params.suburb],
          (err, rst) => {
            if (err) {
              console.log(err);
            } else {
              console.log(rst);
              res.send("0"); // 0 表示用户创建成功
            }
          },
        );
      }
    });
  });
  
  module.exports = router;