function retrieveSyncOption() {
    return browser.storage.local.get('syncOption')
        .then(data => data.syncOption);
}

function retrieveRestEndpoint() {
    browser.storage.local.get('restEndpoint')
        .then(res => res.restEndpoint);
}

function setNewEndpoint() {
    const newVal = $('#restEndpoint').val()
    browser.storage.local.set({
        syncOption: 'selectRest',
        restEndpoint: newVal
    }).then(() => {
        alert('New preference set');
    }).catch(console.error);
}

function handleCheckboxChange(e) {
    const checked = e.target.checked;
    const divElement = $('.' + e.target.name);
    if(checked) {
        divElement.show();
    } else {
        divElement.hide();
    }
}

// function DOMLoaded() {
    
// }

$('#setRestEndpoint').on('click', setNewEndpoint);
$(':checkbox').change(handleCheckboxChange);
// $(document).DOMLoaded()