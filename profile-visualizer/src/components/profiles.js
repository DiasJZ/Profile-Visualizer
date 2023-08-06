const axios = require('axios');

async function getUsersFromGitHub() {
  try {
    const response = await axios.get('https://api.github.com/users');
    const users = response.data.map(user => {
      return {
        username: user.login,
        avatar_url: user.avatar_url,
        profile_url: user.html_url
      };
    });

    return users;
  } catch (error) {
    console.error('Erro ao buscar usuários do GitHub:', error.message);
    throw error;
  }
}

getUsersFromGitHub()
  .then(users => {
    console.log(users);
  })
  .catch(error => {
    console.error('Erro:', error.message);
  });