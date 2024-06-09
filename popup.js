document.getElementById('kaydet').addEventListener('click', function() {
    var metin = document.getElementById('girilen_metin').value;
    chrome.storage.sync.set({'girilen_metin': metin}, function() {
        alert('Metin kaydedildi!');
    });
});
