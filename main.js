const linksSocialMedia = {
  github: 'JorgeASJr3',
  youtube:
    'watch?v=CQate3nk3Kg&list=PLLp28ontWr9Zx5YsfRvso8R8ImQzLZyL4&index=13',
  facebook: 'Jorge Junior',
  instagram: 'jorgesjr7',
  twitter: 'Jorge_maresia'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
