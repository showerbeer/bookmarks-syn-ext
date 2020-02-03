function getLatestVersion() {
    fetch('http://localhost:3000').then(console.log).fetch(console.err);
}

function logBookmarksTree() {
    browser.bookmarks.getTree().then(tree => {
        const jsonTree = JSON.stringify(tree[0]);
        fetch('http://localhost:3000/bookmarks', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: jsonTree
            }).then(data => {
                return data.json();
            })
            .then(console.log).catch(console.error);
    })
}

// browser.browserAction.onClicked.addListener(logBookmarksTree);