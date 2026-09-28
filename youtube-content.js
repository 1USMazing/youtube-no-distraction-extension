const observer = new MutationObserver(function(){
    var ytd_home = document.querySelector('[role="main"]');

    if(ytd_home){
        var home_page = ytd_home.querySelector('[page-subtype="home"]');
        if (!home_page) return;

        chrome.storage.local.get(function(result){
            const HomeVideosCheckboxValue = result.HomeVideosCheckboxValue;
            resolveHomeVideosCheckboxChange(home_page, HomeVideosCheckboxValue);
        });
        
        chrome.storage.onChanged.addListener((changes, areaName) => {
            if(areaName != "local") return;
            const HomeVideosCheckboxValue = changes.HomeVideosCheckboxValue.newValue;
            resolveHomeVideosCheckboxChange(home_page, HomeVideosCheckboxValue);
        });
        observer.disconnect();
    }
});

observer.observe(document.body, {
    childList: true,
    subtree: true
})

function resolveHomeVideosCheckboxChange(homePageContainer, checkBoxValue) {
    if(checkBoxValue){
        homePageContainer.style.display = 'none';
    }else{
        homePageContainer.style.display= 'block';
    }
}
