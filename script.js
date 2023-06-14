$(document).ready(function () {
    $("#form").alpaca({
    "dataSource": "/data/customer2.json",
    "viewSource": "./viewSource.json",
    "schemaSource": "./schemaSource.json",
    "optionsSource":"./optionsSource.json",
    "options": {
        "fields": {
            "child_name":{ //custom validator js function
                "validator": function(callback) {
                    var value = this.getValue();
                    if (value != "test") {
                        callback({
                            "status": false,
                            "message": "The value must be 'test'."
                        });
                    } else {
                        callback({
                            "status": true
                        });
                    }
                }
            }
        },
        "form": {
            "buttons": {
                "submit": { //what to do when form is submitted
                    "title": "Show JSON",
                    "click": function() {
                        alert(JSON.stringify(this.getValue(), null, "  "));
                    }
                }
            }
        }
    }
    });
});