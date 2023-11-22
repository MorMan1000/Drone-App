function endCommand(command, params = {}) {
    console.log({action: command, params: params});
    params["command"] = command;
    $.post("/api/command/", params).done(function (json) {
        console.log({action: "sendCommand", json: json});
    }, 'json');
}

$(document).on('pageinit', function () {
    $('#slider-speed').on("slidestop", function (event) {
        let params = {
            speed: $("#slider-speed").val(),
        };
        sendCommand('speed', params);
    });
});