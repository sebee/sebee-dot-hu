var stories = [];//{'date_time': '2008-10-29 16:47', 'title': 'A Rhyme', 'url': '2008-10-29-rhyme', 'docs_id': '1wk5-kAqm4LMOUe5ELd5xjvQpwCAoboZlGtyYPWLyjGE'},
               //{'date_time': '2013-01-01 00:00', 'title': 'blank', 'url': 'blank', 'docs_id': 'blank'}];

var logText;


function buildIndexContent() {
    xhrGet("json/stories.json", function() {
        loadStoriesJSON(this);
        console.log("A");
        var indexContent = document.createElement("div");
        indexContent.setAttribute("id", "content");
        console.log(indexContent);
        console.log(stories.length);
        for (var storyNumber = 0; storyNumber < stories.length; storyNumber++) {
            console.log(stories[storyNumber]);
            var storyTitle = document.createElement("p");
            //bla
            storyTitle.innerHTML = stories[storyNumber].title;
            indexContent.appendChild(storyTitle);
            var storyDate = document.createElement("p");
            storyDate.innerHTML = stories[storyNumber].date_time;
            indexContent.appendChild(storyDate);
        }
        console.log(indexContent);
        document.getElementsByClassName("content")[0].appendChild(indexContent);
    });
}

function loadStoriesCSV() {
    var responseText = this.responseText;
    console.log(responseText);
    responseText = responseText.split("\n");
    for (var i = 1; i < responseText.length; i++) {
        var story = responseText[i].split(", ");
        story = {'date_time': story[0],
                 'title': story[1],
                 'url': story[2],
                 'docs_id': story[3]
        };
        stories.push(story);
    }
}

function loadStoriesJSON(xhrResponse) {
    logText = xhrResponse.responseText;
    console.log(logText);
    var parsedResponse = JSON.parse(xhrResponse.responseText);
    stories = parsedResponse.stories;
    console.log("JSON: " + stories);
}
