const home_videos_checkbox = document.getElementById('home-videos');
const recommendations_checkbox = document.getElementById('recommendations');

chrome.storage.local.get("HomeVideosCheckboxValue").then(function(result){
    home_videos_checkbox.checked = result.HomeVideosCheckboxValue;
});

chrome.storage.local.get("RecommendationsCheckboxValue").then(function(result){
    console.log("Checkboxul Recommendations a fost obtinut din storage!", result.RecommendationsCheckboxValue);
    recommendations_checkbox.checked = result.RecommendationsCheckboxValue;
});

home_videos_checkbox.addEventListener('change', function(){
    chrome.storage.local.set({HomeVideosCheckboxValue : home_videos_checkbox.checked});
});

recommendations_checkbox.addEventListener('change', function(){
    chrome.storage.local.set({RecommendationsCheckboxValue : recommendations_checkbox.checked}).then(() =>{
        console.log("Recommendations checkbox a fost salvat!");
    })
})


