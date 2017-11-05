function addRepoLink() {
  if (window.location.hostname.includes('github.com')) {

    chrome.storage.sync.get('myReposUsePage', function(items) {
      var urlAppend = '?tab=repositories';
      if (items.myReposUsePage) {
        urlAppend = '/repositories';
      }

      var $links = document.getElementById('user-links');
      var $profileDropdown = $links.getElementsByClassName('dropdown')[$links.getElementsByClassName('dropdown').length - 1];

      var $profileLinks = $profileDropdown.getElementsByClassName('dropdown-item');
      var $profileLink = $profileLinks[0];

      var element = document.createElement('li');
      var link = document.createElement('a');
      var text = document.createTextNode('Your repositories');
      link.appendChild(text);
      link.setAttribute('href', $profileLink.getAttribute('href') + urlAppend);
      link.classList.add('dropdown-item');

      element.appendChild(link);
      $profileLink.parentNode.parentNode.insertBefore(element, $profileLink.parentNode.nextSibling);
    });
  }
}

addRepoLink();
