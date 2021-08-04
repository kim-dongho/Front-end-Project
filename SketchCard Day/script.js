const currentDate = new Date();
const showDate = document.getElementById('show_date')
var month = ["Jun", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
var month_tmp = 0;

function current_date() {
    var str = month[currentDate.getMonth()] + " " + currentDate.getDate() + ", " + currentDate.getFullYear();
    showDate.innerHTML = str;
    console.log(str);
}

function translate_lang() {
    var selectedValue = document.getElementById("choiceLang").value;
    console.log(selectedValue);
}

function process() {
    $.ajax({
        url: "https://dapi.kakao.com/v2/translation/translate",
        type: "POST",
        contentType: "application/x-www-form-urlencoded",
        headers: { "Authorization": "KakaoAK 0de6a503aa4f3970c637816b7565e984" },
        data: $("#transExForm").serialize(),
        success: function(data) { $("#result_translation").val(data.translated_text); },
        error: function(jqXHR, textStatus, errorThrown) {
            var errorMsg = "Ready Status: ";
            errorMsg += jqXHR.readyState + "\n";
            errorMsg += "Status Text:";
            errorMsg += jqXHR.readystatusText + "\n";
            alert(errorMsg);
        }
    })
}
current_date();