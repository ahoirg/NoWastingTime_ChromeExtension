chrome.storage.sync.get(['girilen_metin'], function(result) {
    const metin = result.girilen_metin || 'DERS CALIS';
    document.body.innerHTML = `<h1 style="color:red; text-align:center; margin-top:20%;">${metin}</h1>`;
  });
  