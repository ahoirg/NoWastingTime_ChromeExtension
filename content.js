chrome.storage.sync.get(['dersCalisMetni'], function(result) {
    const metin = result.dersCalisMetni || 'DERS CALIS';
    document.body.innerHTML = `<h1 style="color:red; text-align:center; margin-top:20%;">${metin}</h1>`;
  });
  