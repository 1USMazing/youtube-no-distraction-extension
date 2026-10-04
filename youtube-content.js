//Home videos
const home_observer = new MutationObserver(function(){
    var ytd_home = document.querySelector('[role="main"]');

    if(ytd_home){
        var home_page = ytd_home.querySelector('[page-subtype="home"]');
        if (!home_page) return;

        chrome.storage.local.get(function(result){
            const HomeVideosCheckboxValue = result.HomeVideosCheckboxValue;
            resolveCeckboxChange(home_page, HomeVideosCheckboxValue);
        });
        
        chrome.storage.onChanged.addListener((changes, areaName) => {
            if(areaName != "local") return;
            const HomeVideosCheckboxValue = changes.HomeVideosCheckboxValue.newValue;
            resolveCeckboxChange(home_page, HomeVideosCheckboxValue);
        });
    
        home_observer.disconnect();
    }
});

home_observer.observe(document.body, {
    childList: true,
    subtree: true
})

function resolveCeckboxChange(pageContainer, checkBoxValue) {
    if(checkBoxValue){
        pageContainer.style.display = 'none';
    }else{
        pageContainer.style.display= 'block';
    }
}

// Recommendations 
const recommendations_observer = new MutationObserver(function(){
    var related = document.querySelector('#related.style-scope.ytd-watch-flexy');

    if(related){
        chrome.storage.local.get(function(result){
            const RecommendationsCheckbox = result.RecommendationsCheckboxValue;
            resolveCeckboxChange(related, RecommendationsCheckbox);
        })

        chrome.storage.onChanged.addListener(function(changes, areaName){
            if(areaName != 'local') return;
            const RecommendationsCheckbox = changes.RecommendationsCheckboxValue.newValue;
            resolveCeckboxChange(related, RecommendationsCheckbox);
        })

        recommendations_observer.disconnect();
    }
});

recommendations_observer.observe(document.body,{
    childList: true,
    subtree: true
})
