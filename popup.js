// TODO: put executedScript to separate file
// TODO: change to manivest v3
// TODO: remove commented code

chrome.tabs.query({ currentWindow: true, active: true, }, function (tabs) {
    chrome.tabs.executeScript({
        code: 'document.querySelector("#bodyW > div.page > div > div.page__wrapper-4right > div > section.station > button").getAttribute("stream")'
    }, function (result) {
        document.querySelector("#id1").innerHTML = "<p>"+ tabs[0].title + "</p><p>" + result + "</p>";
        navigator.clipboard.writeText(result);
    });
});

/*
document.addEventListener('DOMContentLoaded', function () {
    var checkPageButton = document.getElementById('checkPage');
    checkPageButton.addEventListener('click', function () {

        chrome.tabs.getSelected(null, function (tab) {
            chrome.tabs.executeScript({
                code: 'document.querySelector("#bodyW > div.page > div > div.page__wrapper-4right > div > section.station > button").getAttribute("stream")'
            }, function (result) {
                alert("Button is " + result)
            });
        });
    }, false);
}, false);
 */

// location of the 1st button
//*[@id="bodyW"]/div[5]/div/div[1]/div/section[1]/button
// /html/body/div[3]/div[5]/div/div[1]/div/section[1]/button
// #bodyW > div.page > div > div.page__wrapper-4right > div > section.station > button

// location of the 2nd button
//*[@id="bodyW"]/div[5]/div/div[1]/div/section[1]/div[4]/div[2]/span[2]/button
// /html/body/div[3]/div[5]/div/div[1]/div/section[1]/div[4]/div[2]/span[2]/button
// #bodyW > div.page > div > div.page__wrapper-4right > div > section.station > div.station__actions > div.station__actions__buttons > span:nth-child(2) > button
