const home_videos_checkbox = document.getElementById('home-videos');
const recommendations_checkbox = document.getElementById('recommendations');
const comments_checkbox = document.getElementById('comments');

chrome.storage.local.get("HomeVideosCheckboxValue").then(function(result){
    home_videos_checkbox.checked = result.HomeVideosCheckboxValue;
});

chrome.storage.local.get("RecommendationsCheckboxValue").then(function(result){
    recommendations_checkbox.checked = result.RecommendationsCheckboxValue;
});

chrome.storage.local.get("CommentsCheckboxValue").then(function(result){
    console.log("Checkboxul de comments a fost salvat!", result.CommentsCheckboxValue);
    comments_checkbox.checked = result.CommentsCheckboxValue;
})

home_videos_checkbox.addEventListener('change', function(){
    chrome.storage.local.set({HomeVideosCheckboxValue : home_videos_checkbox.checked});
});

recommendations_checkbox.addEventListener('change', function(){
    chrome.storage.local.set({RecommendationsCheckboxValue : recommendations_checkbox.checked});
})

comments_checkbox.addEventListener('change', function(){
    chrome.storage.local.set({CommentsCheckboxValue : comments_checkbox.checked});
})


