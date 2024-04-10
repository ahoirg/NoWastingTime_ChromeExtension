document.getElementById('kaydet').addEventListener('click', function() {
    var metin = document.getElementById('dersCalisMetni').value;
    chrome.storage.sync.set({'dersCalisMetni': metin}, function() {
        alert('Metin kaydedildi!');
    });
});
