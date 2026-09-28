const home_videos_checkbox = document.getElementById('home-videos');


chrome.storage.local.get("HomeVideosCheckboxValue").then(function(result){
    console.log("Checkboxul a fost obtinut din storage!", result.HomeVideosCheckboxValue);
    home_videos_checkbox.checked = result.HomeVideosCheckboxValue;
});

home_videos_checkbox.addEventListener('change', function(){
    if (home_videos_checkbox.checked){
        console.log("Checkbox is checked!");
    } else{
        console.log("Checkbox is not checked!");
    }

    chrome.storage.local.set({HomeVideosCheckboxValue : home_videos_checkbox.checked}).then(() => {
    console.log("Checkboxul a fost salvat!");
    });
});


