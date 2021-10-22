//DOM(?)

const linkSocialMedia = {
  github: 'ismael14neto',
  youtube: 'channel/UCkrlttmyTwhIsc_Zlj4Y9tQ',
  instagram: 'ismaelcostaneto',
  linkedin: 'in/ismael-neto-6a6b94209',
  twitter: 'IsmaelN33924988'
}

function changeSocialMidiaLinks() {
  for (let li of sociaLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linkSocialMedia[social]}`
  }
}

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linkSocialMedia.github}`

  fetch(url).then(response => {
    response.json().then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userPhoto.src = data.avatar_url
      userLogin.textContent = data.login
    })
  })
}

changeSocialMidiaLinks()
getGitHubProfileInfos()
