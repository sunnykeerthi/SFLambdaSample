const AWS = require('aws-sdk');
var jsforce = require('jsforce');
const uName = process.env.username;
const pwd = process.env.password;
const servKey = process.env.secToken;

exports.handler = function (e, ctx, callback) {
    console.log("body is " + JSON.stringify(e));
    if (e) {
        var conn = new jsforce.Connection();
        conn.login(uName, pwd + servKey, function (err, res) {
            if (err) {
                console.log(err);
                callback(err, null);
            }
            console.log('Entered');
            conn.sobject("Case").create({
                'Subject': 'Accident',
                'Description': 'Vehicle met with an Accident'
            }, function (err, ret) {
                if (err || !ret.success) {
                    console.log(err);
                    callback(err, null);
                }
                return ret;
            }).then((data) => {
                conn.query(`Select Id, CaseNumber from Case where Id = '${data.id}'`, function (err, response) {
                    if (err) {
                        console.log(err);
                        callback(err, null);
                    }
                    console.log(`Case created with number ${response.records[0].CaseNumber}`);
                    callback(null, `Case created with number ${response.records[0].CaseNumber}`);
                });
            });
        });
    }
}